import React from 'react';

import { Button, Typography } from '@mui/material';
//Icons
import { IconPlus } from '@tabler/icons';

//Pasar la prop onClick para que pueda realizar acciones de agregar.
function BotonAgregarMoneda() {
  return (
    <>
      <Typography></Typography>
      <Button
        sx={{ width: '100%' }}
        variant="contained"
        //onClick={onClick}
        startIcon={<IconPlus />}
      >
        Agregar
      </Button>
    </>
  );
}

export default BotonAgregarMoneda;
