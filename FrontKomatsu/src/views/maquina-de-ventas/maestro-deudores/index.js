// material-ui
// import { Typography } from '@mui/material';
// import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
//importacion de seccion input para el filtro
// import SetionInput from './seccionInput';

//Icon
import RefreshIcon from '@mui/icons-material/Refresh';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import DataTable from './table';
//theme
import { useTheme } from '@mui/material/styles';

// ==============================|| SAMPLE PAGE ||============================== //

function MaestroLeads() {
  const theme = useTheme();
  return (
    <MainCard title="Maestro Deudores">
      {/** Contenedor Seccion Filtros **/}
      {/* <Grid container> */}
      {/** Titulo Filtro **/}
      {/* <Grid item marginBottom={1}>
              <Typography style={{ fontWeight: 600, fontSize: 15, display: 'flex' }}>
                <FilterAltIcon fontSize="small" />
                <span style={{ marginTop: 1 }}>Filtros</span>
              </Typography>
            </Grid> */}
      {/** Fin Titulo Filtro **/}
      {/** Seccion Input **/}
      {/* <Grid container style={{ width: '100%' }}>
              <Grid item style={{ width: '100%' }}>
                <SetionInput />
              </Grid>
            </Grid>
          </Grid> */}
      {/** Fin Seccion Input **/}

      <Grid item marginBottom={2}>
        <Button
          sx={{
            color: 'white',
            backgroundColor: `${theme.palette.primary.dark}`,
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              background: `${theme.palette.primary[800]} !important`,
              color: `${theme.palette.grey[50]}!important`
            }
          }}
          startIcon={<RefreshIcon />}
        >
          Recargar
        </Button>
      </Grid>

      <DataTable />
    </MainCard>
  );
}

export default MaestroLeads;
