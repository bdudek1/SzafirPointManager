import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteCatDialog = ({open, setOpen, deleteCat, catName, refreshCats}) => {

  const handleDelete = () => {
    deleteCat(catName);
    refreshCats()
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    </div>
  );
}

export default DeleteCatDialog