// material-ui
// import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import Table from './table';
import { useTheme } from '@mui/material/styles';

function ControlDeVentas() {
  const theme = useTheme();
  return (
    <MainCard title="Control de cobros">
      <Grid
        sx={{
          borderRadius: `1px solid ${theme.palette.grey[200]}`
        }}
      >
        <Table />
      </Grid>
    </MainCard>
  );
}

export default ControlDeVentas;
