import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

function tituloForm() {
  return (
    <div style={{ paddingBottom: '6px' }}>
      <MainCard>
        <Grid container>
          <Grid item>
            <Typography variant="h3">Modulo de Cargas y estrategias</Typography>
          </Grid>
        </Grid>
      </MainCard>
    </div>
  );
}

export default tituloForm;
