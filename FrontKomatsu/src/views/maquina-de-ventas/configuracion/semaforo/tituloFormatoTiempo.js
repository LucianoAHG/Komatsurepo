import React from 'react';
//Import Componentes
import { Typography } from '@mui/material';

function TituloFormatoTiempo() {
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
        Formato de tiempo{' '}
      </Typography>
    </>
  );
}

export default TituloFormatoTiempo;
