import React from 'react';

import { Button, Typography } from '@mui/material';
//Icons
import { IconPlus } from '@tabler/icons';

function BotonAgregarMoneda({ onClick }) {
  return (
    <>
      <Typography sx={{ marginBottom: 3, width: '100%' }}></Typography>
      <Button sx={{ width: '100%' }} variant="contained" onClick={onClick} startIcon={<IconPlus />}>
        Agregar
      </Button>
    </>
  );
}

export default BotonAgregarMoneda;
