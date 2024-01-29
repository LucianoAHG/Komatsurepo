import * as React from 'react';
import './style.css';
//componente
import { Typography } from '@mui/material';
// import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

function HoraHasta() {
  // const [value, setValue] = (React.useState < Dayjs) | (null > dayjs('2022-04-17T15:30'));
  return (
    <>
      <Typography
        mb={1}
        sx={{
          color: '#6a6c6f',
          fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
          fontSize: '13px',
          fontWeight: 700,
          marginBottom: 1,
          width: '100%'
        }}
      >
        Hora de Inicio
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileTimePicker
          className="myDatePicker"
          slotProps={{ textField: { size: 'small' } }}
          views={['hours', 'minutes']}
          label={'Hasta'}
          sx={{ width: '100%' }}
        />
      </LocalizationProvider>
    </>
  );
}

export default HoraHasta;
