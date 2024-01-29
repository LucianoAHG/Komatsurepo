import React from 'react';
// importacion de Grid y elementos
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

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
function InputNombreVariable() {
  return (
    <>
      <ValidationTextField
        label="Ingrese Nombre"
        variant="outlined"
        id="validation-outlined-input"
        size="small"
        sx={{ width: '100%' }}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Permitir solo números
      />
    </>
  );
}

export default InputNombreVariable;
