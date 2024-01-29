import React from 'react';

import { Button } from '@mui/material';

//Icons
import { IconUserCircle } from '@tabler/icons';

function BotonPerfil({ perfil }) {
  return (
    <>
      <Button variant="outlined" sx={{ width: '100%' }} startIcon={<IconUserCircle />}>
        {perfil}
      </Button>
    </>
  );
}

export default BotonPerfil;
