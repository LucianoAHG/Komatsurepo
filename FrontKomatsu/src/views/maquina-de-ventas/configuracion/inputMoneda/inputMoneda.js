import React, { useState, useEffect } from 'react';
// importacion de Grid y elementos
import { styled } from '@mui/material/styles';
import { Typography, TextField } from '@mui/material';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
    borderRadius: 2
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white'
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style,
    borderRadius: 2
  }
});

function InputMoneda({ onNombreMonedaChange }) {
  const [nombreMoneda, setNombreMoneda] = useState('');
  const handleNombreMonedaChange = (e) => {
    const newValue = e.target.value;
    setNombreMoneda(newValue);
    onNombreMonedaChange(newValue); // Llama a la función proporcionada con el nuevo valor
  };
  useEffect(() => {
    // Llama a la función proporcionada con el nuevo valor cada vez que nombreMoneda cambie
    onNombreMonedaChange(nombreMoneda);
  }, [nombreMoneda, onNombreMonedaChange]);

  return (
    <>
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
        Nombre del la moneda
      </Typography>

      <ValidationTextField
        label="Ingrese Nombre"
        variant="outlined"
        id="validation-outlined-input"
        size="small"
        sx={{ width: '100%' }}
        value={nombreMoneda}
        onChange={handleNombreMonedaChange}
      />
    </>
  );
}

export default InputMoneda;
