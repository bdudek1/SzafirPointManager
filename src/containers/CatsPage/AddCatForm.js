import * as React from 'react'

import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {DropzoneArea} from 'material-ui-dropzone'

import Availability from '../../data/Availability';
import CatDTOBuilder from '../../data/dto/CatDTOBuilder';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} style={{backgroundColor: '#3c7ee8', color: 'white'}} />;
});

const AddCatForm = (props) => {
  const [name, setName] = useState('Imie')
  const [sex, setSex] = useState('male')
  const [color, setColor] = useState('')
  const [availability, setAvailability] = useState(Availability.Available)
  const [photo, setPhoto] = useState(null)

  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const handleAddCat = async () => {
    const cat = new CatDTOBuilder().setName(name)
                                    .setColor(color)
                                    .setAvailability(availability)
                                    .setSex(sex)
                                    .setPhoto(photo[0])
                                    .build()

    console.log(cat)
    await props.catService.saveCat(cat)
    props.refreshCatsTable()

    handleClose()
    setSnackbarOpen(true)
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Dodaj kota</DialogTitle>
        <DialogContent>
        <FormControl required style={{marginBottom: '7px'}}>

        <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Imie"
                type="email"
                fullWidth
                variant="outlined"
                onBlur={(event) => setName(event.target.value)} />

        <Select
          id="sex"
          value={sex}
          variant="outlined"
          onChange={(event) => setSex(event.target.value)}
        >
          <MenuItem value={'male'}>Kocur</MenuItem>
          <MenuItem value={'female'}>Kotka</MenuItem>
        </Select>

        <TextField
                margin="dense"
                id="color"
                label="Kolor"
                type="email"
                fullWidth
                variant="outlined"
                onBlur={(event) => setColor(event.target.value)} />

        <Select
          id="availability"
          value={availability}
          variant="outlined"
          onChange={(event) => setAvailability(event.target.value)}
        >
          <MenuItem value={Availability.Available}>Dostępny/a</MenuItem>
          <MenuItem value={Availability.Unavailable}>Niedostępny/a</MenuItem>
          <MenuItem value={Availability.Reserved}>Zarezerwowany/a</MenuItem>
        </Select>

      </FormControl>

      <DropzoneArea 
            dropzoneText="Wybierz zdjęcie"
            onChange={(photo) =>setPhoto(photo)}
            acceptedFiles={['image/*']}
            getFileAddedMessage={(fileName) => `Dodano zdjęcie ${fileName} .`}
            getFileRemovedMessage={(fileName) => `Usunięto zdjęcie ${fileName} .`}
            filesLimit={1}
            useChipsForPreview={true}
        />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuluj</Button>
          <Button onClick={handleAddCat}>Dodaj</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={2500} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Dodano {name}.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AddCatForm