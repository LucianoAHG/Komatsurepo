// material-ui
import React from 'react';
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Tabla from './tabla';


// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Balance Financiero">
    <Grid container direction="row">
      <Grid item></Grid>
    </Grid>
    <Grid item>
      <Tabla />
    </Grid>
    
  </MainCard>
);

export default SamplePage;