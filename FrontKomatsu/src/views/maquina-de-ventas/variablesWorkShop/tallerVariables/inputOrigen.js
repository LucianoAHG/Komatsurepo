import React, { useState /* useState, useEffect*/ } from 'react';
// importacion de Grid y elementos

import { MenuItem, Select, ListSubheader, FormControl, ThemeProvider, createTheme } from '@mui/material';
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
const datos = ['EQUIFAX', 'FUENTE DE TERCEROS', 'SII', 'SII ACT.COMERCIAL', 'SIISA', 'SINACOFI', 'TRANSUNION', 'TRUORA'];
const informaciones = ['PROMPT', 'RATING', 'SCRIPT', 'VARIABLES WORKSHOP'];
function InputOrigen() {
  // == estados Iniciales == //
  const [origenVariable, setOrigenVariable] = useState('');
  const handleChange = (event) => {
    setOrigenVariable(event.target.value);
  };

  return (
    <>
      <TituloStandar titulo={'Origen Variable'} />
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={origenVariable} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}>Seleccione</em>
            </MenuItem>
            <ListSubheader sx={{ fontSize: '17px', color: 'grey' }}>DATO</ListSubheader>
            {datos.map((dato, index) => (
              <MenuItem key={index} value={dato}>
                {dato}
              </MenuItem>
            ))}
            <ListSubheader sx={{ fontSize: '17px', color: 'grey' }}>INFORMACIÓN</ListSubheader>
            {informaciones.map((informacion, index) => (
              <MenuItem key={index} value={informacion}>
                {informacion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
}

export default InputOrigen;
