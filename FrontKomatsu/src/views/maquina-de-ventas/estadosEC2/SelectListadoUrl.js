import React, { useState /* useState, useEffect*/ } from 'react';
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

const listadoUrls = [
  'https://aiengine.ecloudapp.site',
  'https://motorsws.ecloudapp.site',
  'https://motorsws2.ecloudapp.site',
  'https://motorsws.ecloudapp.site'
];
function SelectListadoUrls() {
  // == estados Iniciales == //
  const [urls, setUrls] = useState('');
  const handleChange = (e) => {
    setUrls(e.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={urls} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}>Seleccione</em>
            </MenuItem>
            {listadoUrls.map((listaurl, index) => (
              <MenuItem key={index} value={listaurl}>
                {listaurl}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
}

export default SelectListadoUrls;
