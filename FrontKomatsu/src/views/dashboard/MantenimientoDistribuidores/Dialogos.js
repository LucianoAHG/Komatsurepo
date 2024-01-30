import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './Dialogo.css';

const CommentSection = () => {
  const [positiveComments, setPositiveComments] = useState([]);
  const [negativeComments, setNegativeComments] = useState([]);
  const [otherComments, setOtherComments] = useState([]);

  const [newPositiveComment, setNewPositiveComment] = useState('');
  const [newNegativeComment, setNewNegativeComment] = useState('');
  const [newOtherComment, setNewOtherComment] = useState('');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddPositiveComment = () => {
    if (newPositiveComment.trim() !== '') {
      setPositiveComments([...positiveComments, newPositiveComment]);
      setNewPositiveComment('');
      handleOpenSnackbar();
    }
  };

  const handleAddNegativeComment = () => {
    if (newNegativeComment.trim() !== '') {
      setNegativeComments([...negativeComments, newNegativeComment]);
      setNewNegativeComment('');
      handleOpenSnackbar();
    }
  };

  const handleAddOtherComment = () => {
    if (newOtherComment.trim() !== '') {
      setOtherComments([...otherComments, newOtherComment]);
      setNewOtherComment('');
      handleOpenSnackbar();
    }
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleOpenSnackbar = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const renderCommentSection = (title, comment, setComment, handleAddComment) => (
    <Paper className="custom-dialog-container comment-section">
      <Typography variant="h5">{title}</Typography>
      <TextField
        multiline
        rows={2}
        fullWidth
        margin="normal"
        variant="outlined"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleAddComment();
          handleOpenDialog();
        }}
        style={{ backgroundColor: '#2181da', color: '#ffffff' }}
      >
        Guardar
      </Button>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Información Guardada</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <strong>Aspectos Positivos:</strong>
            <ul>
              {positiveComments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>

            <strong>Aspectos Negativos:</strong>
            <ul>
              {negativeComments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>

            <strong>Otros Comentarios:</strong>
            <ul>
              {otherComments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
          Información guardada con éxito
        </MuiAlert>
      </Snackbar>
    </Paper>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 2, marginleft: -20, borderradius: '1px' }}>
      {renderCommentSection('Aspectos Positivos', newPositiveComment, setNewPositiveComment, handleAddPositiveComment)}
      {renderCommentSection('Aspectos Negativos', newNegativeComment, setNewNegativeComment, handleAddNegativeComment)}
      {renderCommentSection('Otros Comentarios', newOtherComment, setNewOtherComment, handleAddOtherComment)}
    </div>
  );
};

export default CommentSection;
