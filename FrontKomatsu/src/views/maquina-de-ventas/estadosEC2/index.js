import { Typography } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
// import SubCard from 'ui-component/cards/SubCard';
import { Grid, Button } from '@mui/material';

//IMPORT INPUT LISTADO ULR
import SelectListadoUrls from './SelectListadoUrl';
//ICONS
import { IconLink } from '@tabler/icons';

function EstadosEC2() {
  return (
    <MainCard title="Estado EC2">
      <Grid container direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Grid item md={6} xs={12} sx={{ width: '100%' }}>
          <Typography
            sx={{
              color: '#6a6c6f',
              fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
              fontSize: '13px',
              fontWeight: 700,
              marginBottom: 1
            }}
          >
            Listado de Urls Whatsapp
          </Typography>
          <SelectListadoUrls />
        </Grid>
        <Grid item md={6} xs={12} sx={{ width: '100%' }}>
          <Button sx={{ width: '100%', marginTop: { md: 3.3 } }} variant="contained" startIcon={<IconLink />}>
            Consultar Url
          </Button>
        </Grid>
      </Grid>
      <Grid container direction={{ xs: 'column', md: 'row' }}>
        <Grid>pantalla visualizacion</Grid>
      </Grid>
    </MainCard>
  );
}

export default EstadosEC2;
