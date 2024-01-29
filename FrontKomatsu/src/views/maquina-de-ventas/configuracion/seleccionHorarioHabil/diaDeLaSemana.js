import React, { useState /* useState, useEffect*/ } from 'react';
// importacion de Grid y elementos

import { MenuItem, Select, FormControl, ThemeProvider, Typography, createTheme } from '@mui/material';

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
function InputDiaDeLaSemana() {
  // == estados Iniciales == //
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
        Día de la semana
      </Typography>

      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={age} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}>Seleccione</em>
            </MenuItem>
            <MenuItem value={2}>Lunes</MenuItem>
            <MenuItem value={3}>Martes</MenuItem>
            <MenuItem value={3}>Miercoles</MenuItem>
            <MenuItem value={3}>Jueves</MenuItem>
            <MenuItem value={3}>Viernes</MenuItem>
            <MenuItem value={3}>Sábado</MenuItem>
            <MenuItem value={3}>Domingo</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
}

export default InputDiaDeLaSemana;
