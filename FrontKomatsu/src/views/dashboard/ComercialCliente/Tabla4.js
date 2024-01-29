import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './OpinionBox.css'

const OpinionBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar la opinión enviada
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#167ec4', // Cambia el color principal del botón
      },
    },
  });

  const CustomButton = () => {
    return (
      <ThemeProvider theme={theme}>
      <Button
        type="submit"
        variant="contained"
        style={{
          borderRadius: 8,
          fontSize: 13,
          color: theme.palette.common.white, // Cambia el color de la fuente
          backgroundColor: '#2c85de', // Cambia el color del fondo
          textTransform: 'none',
          fontWeight: 'normal',
        }}
      >
        Enviar
      </Button>
    </ThemeProvider>
  );
};

  return (
    <Box sx={{ width: '100%', p: 2 }}>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Descripcion"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        margin="normal"
        className="observation-cell" // Agrega la clase a la celda de observaciones
      />
      <CustomButton />
    </form>
  </Box>
);
};

export default OpinionBox;
