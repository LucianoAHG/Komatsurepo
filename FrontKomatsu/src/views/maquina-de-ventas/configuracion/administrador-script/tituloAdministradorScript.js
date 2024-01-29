import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

function TitleAdministradorScript() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <div>
      <Typography
        sx={{
          color: '#6a6c6f',
          fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
          fontSize: '13px',
          fontWeight: 700,
          marginBottom: 1,
          width: '100%'
        }}
      >
        Uso de Script Mejorados
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Nombre" variant="outlined" margin="normal" fullWidth />
        <TextField label="Correo electrónico" type="email" variant="outlined" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default TitleAdministradorScript;
