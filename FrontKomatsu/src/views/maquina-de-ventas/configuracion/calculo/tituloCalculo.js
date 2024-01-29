import React from 'react';
//Import Componentes
import { Typography } from '@mui/material';

function TituloCalculo() {
  return (
    <div>
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
        Propension de cierre
      </Typography>
    </div>
  );
}

export default TituloCalculo;
