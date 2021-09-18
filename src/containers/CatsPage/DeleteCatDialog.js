import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} style={{backgroundColor: 'crimson', color: 'white'}} />;
});

const DeleteCatDialog = ({open, setOpen, deleteCat, catName, refreshCats}) => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)

  const handleDelete = () => {
    deleteCat(catName);
    refreshCats()
    setSnackbarOpen(true)
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Czy chcesz usunąć ${catName} ?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDelete}>Tak</Button>
          <Button onClick={handleClose}>Nie</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={2500} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Usunięto {catName}.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default DeleteCatDialog