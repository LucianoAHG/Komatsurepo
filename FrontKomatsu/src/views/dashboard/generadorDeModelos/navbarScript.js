import React from 'react';
import { Stack, Grid, IconButton, Tooltip, Divider, Typography } from '@mui/material';

//Import Icons
import {
  IconSquare, //cuadrado vacio
  IconSearch, //icono de busqueda
  IconWand, //varita magica
  IconCaretDown, //flecha hacia abajo simple
  IconDeviceFloppy, //icono save
  IconArrowAutofitRight, // ventana hacia la derecha
  IconArrowBigRightLines, //flecha hacia la derecha
  IconBrowser, // icono navegador
  IconArrowBackUp, //flecha volver
  IconLayoutSidebar,
  IconPlayerPlay, //Run
  IconMenu2
} from '@tabler/icons';

//theme
import { useTheme } from '@mui/material';

function Navbar({ margBotton }) {
  const theme = useTheme();
  return (
    <Stack mb={margBotton} direction="row" sx={{ border: `1px solid ${theme.palette.grey[300]}`, borderRadius: 4 }}>
      <Grid item>{''}</Grid>
      <Grid item>
        <IconButton>
          <IconBrowser />
        </IconButton>
      </Grid>
      <Divider orientation="vertical"></Divider>
      <Grid item>
        {' '}
        <Tooltip title="Guardar">
          <IconButton>
            <IconDeviceFloppy />{' '}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Source on Save">
          <IconButton>
            <IconSquare />
          </IconButton>
        </Tooltip>
      </Grid>

      <Divider orientation="vertical"></Divider>
      <Grid item>
        <Tooltip title="Buscar">
          <IconButton>
            <IconSearch />
          </IconButton>
        </Tooltip>
        <IconButton>
          {' '}
          <IconWand />
        </IconButton>{' '}
        <Tooltip title="Opciones">
          <IconButton>
            <IconCaretDown />
          </IconButton>
        </Tooltip>
      </Grid>
      <Divider orientation="vertical"></Divider>
      <Grid item>
        {' '}
        <IconButton>
          <IconLayoutSidebar />{' '}
        </IconButton>
      </Grid>
      <Grid item>
        <Tooltip title="Run">
          <IconButton>
            <IconPlayerPlay />{' '}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item></Grid>
      <Divider orientation="vertical"></Divider>
      <Grid item>
        <Tooltip title="Volver">
          <IconButton>
            <IconArrowBackUp />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <IconButton>
          <IconArrowBigRightLines />
        </IconButton>
      </Grid>
      <Grid item>
        {' '}
        <IconButton>
          <IconArrowAutofitRight />{' '}
        </IconButton>
      </Grid>
      <Grid item mt={1.3}>
        {' '}
        <Typography>Source</Typography>{' '}
      </Grid>
      <Grid item>
        {' '}
        <Tooltip title="opciones">
          <IconButton>
            <IconCaretDown />{' '}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item sx={{ marginLeft: 'auto' }}>
        {' '}
        <Tooltip title="Menú">
          <IconButton>
            <IconMenu2 />{' '}
          </IconButton>
        </Tooltip>
      </Grid>
    </Stack>
  );
}

export default Navbar;
