// material-ui
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import Inputs from './inputs';
// import SubCard from 'ui-component/cards/SubCard';
import Table from './tabla';

// ==============================|| SAMPLE PAGE ||============================== //

const IntegracionesOutBound = () => (
  <MainCard title="Integraciones Outbound">
    <Grid pb={0}>
      {/* <SubCard title="Creación de grupo">
        {/** Seccion Inputs **/}
      {/* <Grid>
          <Inputs />
        </Grid> */}
      {/** Fin Seccion Inputs **/}
      {/* </SubCard>  */}
    </Grid>
    <Grid>
      {/** Seccion tabla **/}
      <Grid>
        <Table />
      </Grid>
      {/** Fin Seccion tabla **/}
    </Grid>
  </MainCard>
);

export default IntegracionesOutBound;
