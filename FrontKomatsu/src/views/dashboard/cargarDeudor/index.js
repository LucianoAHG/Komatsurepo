import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

/** MAIN VISTA MODULO DE CARGAS **/
import React from 'react';
import CargarDeudor from './CargarDeudor';
//import alert success
import AlertSucces from 'ui-component/Dialog/AlertSuccess';

function index() {
  return (
    <Grid container spacing={gridSpacing}>
      <AlertSucces />
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid>
            <CargarDeudor />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default index;
