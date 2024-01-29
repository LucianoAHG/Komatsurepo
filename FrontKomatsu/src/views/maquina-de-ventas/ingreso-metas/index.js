// material-ui
// import { Typography } from '@mui/material';
import { Button, Grid } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SeccionInput from './inputs';
import Tabla from './tabla';
//Icons
import SaveIcon from '@mui/icons-material/Save';

// ==============================|| SAMPLE PAGE ||============================== //

function IngresoMetas() {
  return (
    <MainCard title="Ingreso de Metas">
      {/** seccion de inputs **/}
      <Grid>
        <SeccionInput />
      </Grid>

      {/**  fin seccion inputs**/}

      {/**Seccion Boton */}
      <Grid mt={4} mb={4}>
        <Button color="primary" variant="contained" type="submit">
          <SaveIcon style={{ marginRight: 4 }} /> Guardar
        </Button>
      </Grid>
      {/** Fin Seccion Boton */}

      {/** Seccion Tabla **/}
      <Grid>
        <Tabla />
      </Grid>
      {/** Fin Seccion Tabla **/}
    </MainCard>
  );
}

export default IngresoMetas;
