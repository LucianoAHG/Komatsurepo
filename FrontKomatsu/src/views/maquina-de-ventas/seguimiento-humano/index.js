// material-ui
// import { Typography } from '@mui/material';

// project imports
import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import DataTable from './table';

// ==============================|| SAMPLE PAGE ||============================== //

function SeguimientoHumano() {
  return (
    <MainCard title="Seguimiento Humano">
      <Grid item>
        <DataTable />
      </Grid>
    </MainCard>
  );
}

export default SeguimientoHumano;
