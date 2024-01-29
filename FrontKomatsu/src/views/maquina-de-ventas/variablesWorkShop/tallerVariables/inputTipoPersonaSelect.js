import React, { useState /* useState, useEffect*/ } from 'react';
// importacion de Grid y elementos

import { MenuItem, Select, FormControl, ThemeProvider, createTheme } from '@mui/material';
import TituloStandar from '../tituloStandar';

const theme = createTheme({
  components: {
    // Name of the component
    MuiFormControl: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 0,
          fontSize: '10px'
        }
      }
    }
  }
});
const personas = ['Natural', 'Juridica'];
function InputTipoPersona() {
  // == estados Iniciales == //
  const [tipoPersona, setTipoPersona] = useState('');
  const handleChange = (event) => {
    setTipoPersona(event.target.value);
  };

  return (
    <>
      <TituloStandar titulo={'Tipo Persona'} />
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={tipoPersona} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}>Seleccione</em>
            </MenuItem>
            {personas.map((persona, index) => (
              <MenuItem key={index} value={persona}>
                {persona}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
}

export default InputTipoPersona;
