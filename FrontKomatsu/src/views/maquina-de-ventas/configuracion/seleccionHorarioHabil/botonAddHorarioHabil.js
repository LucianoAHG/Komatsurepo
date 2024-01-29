import React from 'react';

import { Button, Typography } from '@mui/material';
//Icons
import { IconPlus } from '@tabler/icons';

function BotonDiaDeLaSemana() {
  return (
    <>
      <Typography sx={{ marginBottom: 3, width: '100%' }}></Typography>
      <Button sx={{ width: '100%' }} variant="contained" startIcon={<IconPlus />}>
        Agregar
      </Button>
    </>
  );
}

export default BotonDiaDeLaSemana;
