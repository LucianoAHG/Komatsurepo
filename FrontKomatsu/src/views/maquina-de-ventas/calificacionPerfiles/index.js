// material-ui
import React from 'react';
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TablaDeudores from './tablaDeudores';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Calificacion de perfiles">
    <Grid container direction="row">
      <Grid item>posibles input</Grid>
    </Grid>
    <Grid item>
      <TablaDeudores />
    </Grid>
  </MainCard>
);

export default SamplePage;
