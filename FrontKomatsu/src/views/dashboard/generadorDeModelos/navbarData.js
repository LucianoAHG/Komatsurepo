import React from 'react';
import { Stack, Grid, IconButton, Tooltip, Divider, Typography } from '@mui/material';

//Import Icons
import {
  IconCaretDown, //flecha hacia abajo simple
  IconDeviceFloppy, //icono save
  IconMenu2,
  IconFolders,
  IconTableExport, // tabla import
  IconEraser,
  IconReload
} from '@tabler/icons';

//theme
import { useTheme } from '@mui/material';

function NavbarData({ margBotton }) {
  const theme = useTheme();
  return (
    <Stack mb={margBotton} direction="row" sx={{ border: `1px solid ${theme.palette.grey[300]}`, borderRadius: 4 }}>
      <Grid item sx={{ width: '100%' }} md={3}>
        <Tooltip title="Examinar">
          <IconButton>
            <IconFolders />
          </IconButton>
        </Tooltip>
        <Tooltip title="Guardar">
          <IconButton>
            <IconDeviceFloppy />{' '}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid>
        {' '}
        <Divider orientation="vertical"></Divider>
      </Grid>
      <Grid item sx={{ width: '100%' }} md={1}>
        <IconButton disabled>
          <IconTableExport />
        </IconButton>{' '}
      </Grid>
      <Grid item sx={{ width: '100%' }} md={4}>
        <Typography mt={1.5}>Import Dataset</Typography>
      </Grid>
      <Grid item sx={{ width: '100%' }} md={1}>
        <Tooltip>
          <IconButton>
            <IconCaretDown />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid>
        <Divider orientation="vertical"></Divider>
      </Grid>{' '}
      <Grid item>
        {' '}
        <Tooltip title="Limpiar">
          <IconButton>
            <IconEraser />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        {' '}
        <Tooltip title="Menú">
          <IconButton>
            <IconMenu2 />{' '}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Typography mt={1.5}>List</Typography>
      </Grid>
      <Grid>
        {' '}
        <Tooltip title="opciones">
          <IconButton>
            <IconCaretDown />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid>
        <Divider orientation="vertical"></Divider>
      </Grid>
      <Grid item sx={{ width: '100%' }} md={1}>
        <Tooltip title="Refrescar">
          <IconButton>
            <IconReload />
          </IconButton>
        </Tooltip>
      </Grid>
    </Stack>
  );
}

export default NavbarData;
