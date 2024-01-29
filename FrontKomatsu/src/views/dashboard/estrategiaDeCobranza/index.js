// material-ui
import React from 'react';
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import ComponenteEstrategia from './estrategiaDecobranza';

// ==============================|| SAMPLE PAGE ||============================== //

function EstrategiasDeCobranza() {
  return (
    <MainCard title="Estrategias de Cobranza">
      <Grid item>
        <ComponenteEstrategia />
      </Grid>
    </MainCard>
  );
}

export default EstrategiasDeCobranza;
