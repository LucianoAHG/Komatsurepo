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

function SelectCanal() {
  // == estados Iniciales == //
  const [canal, setCanal] = useState('');
  const handleChange = (event) => {
    setCanal(event.target.value);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={canal} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}>Seleccione</em>
            </MenuItem>
            <MenuItem value={10}>Correo</MenuItem>
            <MenuItem value={20}>Sms</MenuItem>
            <MenuItem value={20}>Whatsapp</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}

export default SelectCanal;
