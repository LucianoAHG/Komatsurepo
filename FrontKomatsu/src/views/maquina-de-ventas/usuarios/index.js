// material-ui
// import { Typography } from '@mui/material';
// import { Grid } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TablaUsuarios from './tablaUsuarios';
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Usuarios">
    <SubCard title="Listado de Usuarios">
      <TablaUsuarios />
    </SubCard>
  </MainCard>
);

export default SamplePage;
