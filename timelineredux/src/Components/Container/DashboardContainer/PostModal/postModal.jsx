import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ModalForm from './modalForm'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 52 + rand();
  const left = 52  + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  addPost: {
    background: '#0092ff',
    position: 'fixed',
    bottom: 10,
    right: 31,
    borderRadius: 50
  }
}));

export default function PostModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment >
      <Fab type="button" color="primary" onClick={handleOpen} className={classes.addPost} >
        <AddIcon /> 
      </Fab>
      
      <Modal open={open} onClose={handleClose} >
        <div style={modalStyle} className={classes.paper}>
          <ModalForm  onCloseModal={handleClose}/>
        </div>
      </Modal>
    </React.Fragment>
  );
} 
