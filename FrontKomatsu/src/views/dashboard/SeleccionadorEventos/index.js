import React from 'react';
import { Grid } from '@mui/material';
//import componente
import Estrategias from './eventSelector';
import MainCard from 'ui-component/cards/MainCard';
// import Test from './ejemploSelector';

function index() {
  return (
    <div>
      <MainCard title="Administrador de Eventos">
        <Grid sx={{ border: '1px solid #EEEEEE', borderRadius: 2 }}>
          <Estrategias />
        </Grid>
      </MainCard>
    </div>
  );
}

export default index;
