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

// const opcionesPorTabla = {
//   ACTUALIZADO: ['Opción 1', 'Opción 2', 'Opción 3'],
//   AGENDA_RAPIDA: ['Opción A', 'Opción B', 'Opción C'],
//   ANTECEDENTES: ['Opción X', 'Opción Y', 'Opción Z']
//   // ... define las opciones para otras tablas
// };

function SelectVariable({ tabla, onVariableChange }) {
  // == estados Iniciales == //

  const [variables, setVariable] = useState('');
  const handleChange = (event) => {
    setVariable(event.target.value);
    onVariableChange(event.target.value);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={variables} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}>Seleccione</em>
            </MenuItem>
            {tabla.map((index) => (
              <MenuItem key={index} value={index}>
                {index}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}

export default SelectVariable;
