// material-ui
// import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Tabla from './tabla';

// ==============================|| SAMPLE PAGE ||============================== //

function HistoricoClientes() {
  return (
    <MainCard title="Historico Cargas">
      <Tabla />
    </MainCard>
  );
}

export default HistoricoClientes;
