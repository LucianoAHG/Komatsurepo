import React from 'react';

import { Button } from '@mui/material';
//Icons
import { IconDeviceFloppy } from '@tabler/icons';

function BotonGuardarCalculo() {
  return (
    <>
      <Button sx={{ width: '100%' }} variant="contained" startIcon={<IconDeviceFloppy />}>
        Guardar
      </Button>
    </>
  );
}

export default BotonGuardarCalculo;
