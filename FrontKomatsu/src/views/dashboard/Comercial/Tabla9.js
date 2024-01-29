import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const OpinionBox = () => {
  const [opinion, setOpinion] = useState('');
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza acciones adicionales si es necesario antes de guardar la opinión

    // Guardar la opinión en el estado local
    console.log('Opinión enviada:', opinion);
    // Abre el diálogo para mostrar la opinión
    handleOpenDialog();
  };

  const handleOpinionChange = (event) => {
    setOpinion(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Opinión"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
          value={opinion}
          onChange={handleOpinionChange}
        />
       <Button type="submit" variant="contained" style={{ backgroundColor: '#2c85de' }}>
          Guardar
        </Button>

        {/* Diálogo para mostrar la opinión */}
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Opinión Guardada</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Tu opinión: <strong>{opinion}</strong>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </Box>
  );
};

export default OpinionBox;
