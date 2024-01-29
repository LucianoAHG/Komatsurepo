import React, { useState } from 'react';
// importacion de Grid y elementos

import { MenuItem, Select, FormControl, ThemeProvider, createTheme } from '@mui/material';

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
const tablas = [
  'ACTUALIZADO',
  'AGENDA_RAPIDA',
  'ANTECEDENTES',
  'ARBOL_PRODUCTO',
  'ARCHIVOS',
  'ASIGNACION_GRUPO',
  'CARTERA',
  'CARTERADETALLE',
  'CLIENTE',
  'CLIENTE_ESTADO'
];
function SelectOpcion({ onValueChange }) {
  //== estados Iniciales == //
  const [tabla, setTabla] = useState('');
  const handleChange = (event) => {
    setTabla(event.target.value);
    onValueChange(tabla);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <FormControl sx={{ minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={tabla} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}>Seleccione</em>
            </MenuItem>
            {tablas.map((table, index) => (
              <MenuItem key={index} value={table}>
                {table}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
}

export default SelectOpcion;
