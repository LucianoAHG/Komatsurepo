import React from 'react';
import './calendarStyle.css';
//import componentes
// import { Typography } from '@mui/material';
//Style

//Datepicker import
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function InputFechaInicio() {
  return (
    <>
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

export default InputFechaInicio;
