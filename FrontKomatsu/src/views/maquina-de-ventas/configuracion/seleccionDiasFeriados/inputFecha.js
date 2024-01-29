import React from 'react';
import './calendarStyle.css';
//import componentes
import { Typography } from '@mui/material';
//Style

//Datepicker import
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function InputFecha() {
  return (
    <>
      <Typography
        sx={{
          color: '#6a6c6f',
          fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
          fontSize: '13px',
          fontWeight: 700,
          marginBottom: 1
        }}
      >
        Fecha
      </Typography>
      {/* Seleccion Feriados */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="myDatePicker "
          sx={{ width: '100%' }}
          defaultValue={dayjs('2022-04-17')}
          slotProps={{ textField: { size: 'small' } }}
        />
      </LocalizationProvider>
      {/* Fin seleccion Feriados */}
    </>
  );
}

export default InputFecha;
