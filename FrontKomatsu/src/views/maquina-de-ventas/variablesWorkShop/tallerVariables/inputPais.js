import React, { useState /* useState, useEffect*/ } from 'react';
// importacion de Grid y elementos

import { MenuItem, Select, FormControl, ThemeProvider, createTheme } from '@mui/material';
//import proyecto
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
const paises = [
  'Chile',
  'Colombia',
  'Perú',
  'Argentina',
  'España',
  'Bolivia',
  'Costa Rica',
  'Ecuador',
  'Nicaragua',
  'Uruguay',
  'Venezuela',
  'Brasil',
  'El Salvador',
  'Guatemala',
  ' Honduras',
  'Maxico',
  'Panama',
  'Paraguay',
  'Portugal',
  'Republica Dominicana'
];
function InputPais() {
  // == estados Iniciales == //
  const [pais, setPais] = useState('');
  const handleChange = (event) => {
    setPais(event.target.value);
  };

  return (
    <>
      <TituloStandar titulo={'Páis'} />
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={pais} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}>Seleccione</em>
            </MenuItem>
            {paises.map((pais, index) => (
              <MenuItem key={index} value={pais}>
                {pais}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
}

export default InputPais;
