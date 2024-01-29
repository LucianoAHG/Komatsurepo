// material-ui
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Inputs from './input';
import SubCard from 'ui-component/cards/SubCard';
import Table from './tabla';

// ==============================|| SAMPLE PAGE ||============================== //

const ModuloIa = () => (
  <MainCard title="Módulo IA">
    {/* Inicio Seccion Inputs */}
    <Grid>
      <SubCard title="Configurar">
        <Grid item>
          <Inputs />
        </Grid>
      </SubCard>
    </Grid>
    {/* Fin  Seccion Inputs */}
    {/* Incio Sección Tabla */}
    <Grid>
      <SubCard title="Productos">
        <Grid>
          <Table />
        </Grid>
      </SubCard>
    </Grid>
    {/* Fin Sección Tabla */}
  </MainCard>
);

export default ModuloIa;
