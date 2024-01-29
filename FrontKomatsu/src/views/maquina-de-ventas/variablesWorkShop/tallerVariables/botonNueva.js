import React from 'react';

import { Button } from '@mui/material';
//Icons
import { IconPlus } from '@tabler/icons';

function BotonNueva() {
  return (
    <>
      <Button sx={{ width: '100%' }} variant="contained" startIcon={<IconPlus />}>
        Nueva
      </Button>
    </>
  );
}

export default BotonNueva;
