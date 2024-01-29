// material-ui
// import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import Tabla from './tabla';

// ==============================|| SAMPLE PAGE ||============================== //

function Integraciones() {
  return (
    <MainCard title="Integraciones InBound">
      <Grid item>
        <Tabla />
      </Grid>
    </MainCard>
  );
}

export default Integraciones;
