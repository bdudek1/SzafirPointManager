import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import AddCatForm from './AddCatForm';

import DexieCatsRepository from '../../data/repositories/DexieCatsRepository'
import CatServiceImpl from '../../services/CatServiceImpl'
import CatsImage from './CatsImage';
import DeleteCatDialog from './DeleteCatDialog';
import Availability from '../../data/Availability';

const createData = (cat) => {
    const name = cat.getName()
    const sex = cat.getSex()
    const color = cat.getColor()
    const availability = cat.getAvailability()
    const photo = cat.getPhoto()
    const id = cat.getId()

  return {
    name,
    sex,
    color,
    availability,
    photo,
    id
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Imię kota',
  },
  {
    id: 'sex',
    numeric: false,
    disablePadding: true,
    label: 'Płeć kota',
  },
  {
    id: 'color',
    numeric: false,
    disablePadding: true,
    label: 'Kolor',
  },
  {
    id: 'availability',
    numeric: false,
    disablePadding: true,
    label: 'Dostępność',
  },
  {
    id: 'photo',
    numeric: false,
    disablePadding: true,
    label: 'Zdjęcie',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>

        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const CatsTable = ({searchString}) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [rows, setRows] = React.useState(new Array())
  const [addCatFormOpen, setAddCatFormOpen] = React.useState(false)

  const [clickedPhoto, setClickedPhoto] = React.useState(null)
  const [catImageOpen, setCatImageOpen] = React.useState(false)

  const [clickedCatId, setClickedCatId] = React.useState(null)
  const [clickedCatName, setClickedCatName] = React.useState(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)

  const [catService] = React.useState(new CatServiceImpl(new DexieCatsRepository()))

  React.useEffect(() => {
    getCats()
  }, [])

  React.useEffect(() => {
    getCatsBySearchQuery(searchString)
  }, [searchString])

  const getCats = () => {
    const rowsBuf = new Array()

    catService.getAllCats().then(cats => {
        cats.forEach(cat => {
            rowsBuf.push(createData(cat))
        })

        setRows(rowsBuf)
    })
  }

  const getCatsBySearchQuery = (searchQuery) => {
    const lowerCaseQuery = searchQuery.toLowerCase()
    const rowsBuf = new Array()

    catService.getAllCats().then(cats => {
        cats.forEach(cat => {

          if(cat.getName().toLowerCase().includes(lowerCaseQuery) || 
            cat.getColor().toLowerCase().includes(lowerCaseQuery) || 
            getSex(cat.getSex()).toLowerCase().includes(lowerCaseQuery) || 
            getAvailability(cat.getAvailability()).toLowerCase().includes(lowerCaseQuery)){

            rowsBuf.push(createData(cat))
          }
        })

        setRows(rowsBuf)
    })
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const photoToImg = (photo) => {
    return <img src={URL.createObjectURL(photo)} className="preview-image" onClick ={() => handleImageClicked(photo)} />
  }

  const handleImageClicked = (photo) => {
    setClickedPhoto(<img src={URL.createObjectURL(photo)} className="image" onClick ={() => setCatImageOpen(false)} />)
    setCatImageOpen(true)
  }

  const handleDeleteCat = (id, name) => {
    setClickedCatId(id)
    setClickedCatName(name)
    setDeleteDialogOpen(true)
  }

  const getSex = (sex) => {

    switch(sex) {
      default:
      case 'male':
        return 'Kocur';
      case 'female':
        return 'Kotka';
    } 

  }

  const getAvailability = (availability) => {

    switch(availability) {
      default:
      case Availability.Available:
        return 'Dostępny/a';
      case Availability.Unavailable:
        return 'Niedostępny/a';
      case Availability.Reserved:
        return 'Zarezewowany/a';
    } 
    
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>

      <Button variant="contained"
              color="primary"
              disableElevation
              className="button"
              onClick={() => setAddCatFormOpen(true)}>
                Dodaj kota
      </Button>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell>
                        <DeleteIcon className="remove-icon" onClick={() => handleDeleteCat(row.id, row.name)}/>
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name ? row.name : null}
                      </TableCell>
                      <TableCell align="left">{row.sex ? getSex(row.sex) : null}</TableCell>
                      <TableCell align="left">{row.color ? row.color : null}</TableCell>
                      <TableCell align="left">{row.availability ? getAvailability(row.availability) : null}</TableCell>
                      <TableCell align="left">{row.photo ? photoToImg(row.photo) : null}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 55 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelDisplayedRows={(props) => `${props.from}-${props.to} z ${props.count !== -1 ? props.count : `więcej niż ${props.to}`}`}
          labelRowsPerPage="Ilość wierszy na stronę: "
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <AddCatForm open={addCatFormOpen}
                  setOpen={(param) => setAddCatFormOpen(param)}
                  catService={catService}
                  refreshCatsTable={() => getCats()}/>

      <DeleteCatDialog open={deleteDialogOpen}
                       setOpen={setDeleteDialogOpen}
                       deleteCat={() => catService.deleteCat(clickedCatId)}
                       catName={clickedCatName}
                       refreshCats={() => getCatsBySearchQuery(searchString)}
       />


      <CatsImage content={clickedPhoto}
                open={catImageOpen}
                setOpen={setCatImageOpen} />

    </Box>
  );
}

export default CatsTable