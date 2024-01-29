import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
// import SubCard from 'ui-component/cards/SubCard';
import { Grid } from '@mui/material';
//import theme
import { useTheme } from '@mui/material/styles';

//import archivo
import Tabla from './reporteCobranza';

function Index() {
  const theme = useTheme();
  return (
    <MainCard title="Control de recupero">
      <Grid sx={{ border: `1px solid ${theme.palette.grey[200]}`, borderRadius: 2 }}>
        <Tabla />
      </Grid>
    </MainCard>
  );
}

export default Index;
