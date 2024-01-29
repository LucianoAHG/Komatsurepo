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
const tiposDeCobros = [
  'Recordatorio de Pago',
  'Verficación de promesa de pago',
  'Obtención de compromiso de pago',
  'Llamada Negociación',
  'Propuesta de pago',
  'Llamada a 2da Negociación',
  'Notificación de envío cobranza judicial',
  'Recordatorio en proceso de cobranza judiial'
];
function SelectCobranza() {
  // == estados Iniciales == //
  const [tipoCobro, setTipoCobro] = useState('');
  const handleChange = (event) => {
    setTipoCobro(event.target.value);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} value={tipoCobro} onChange={handleChange} size="small">
            <MenuItem value="">
              <em style={{ color: '#9E9E9E' }}>Seleccione</em>
            </MenuItem>
            {tiposDeCobros.map((tipoDeCobro, index) => (
              <MenuItem key={index} value={tipoDeCobro}>
                {tipoDeCobro}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}

export default SelectCobranza;
