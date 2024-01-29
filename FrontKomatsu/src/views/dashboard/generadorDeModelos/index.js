import React from 'react';
//componentes Ui
import { Grid, Stack, TextField } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
//Import Icons

//Import proyectos
import Navbar from './navbarScript';
import NavbarData from './navbarData';
import SearchData from './searchData';
import Table from './tableData';
import ConsoleTerminal from './console&Terminal';
import TablaScript from '../estrategiaDeCobranza/tabsScript';

//import Theme
// import { useTheme } from '@mui/material';

function Index() {
  //   const theme = useTheme();
  return (
    <MainCard title="Generador de modelos">
      <Grid container direction="row">
        <Grid item md={7}>
          <Stack direction="column" mr={2}>
            <Navbar margBotton={2} />
            <Grid item md={12} sx={{ width: '100%' }}>
              <TextField multiline rows={20} sx={{ borderRadius: 0, width: '100%' }} placeholder="hola"></TextField>
            </Grid>
            <ConsoleTerminal />
          </Stack>
        </Grid>

        <Grid item md={5}>
          <Stack direction="column">
            <Grid item>
              <NavbarData margBotton={2} />
            </Grid>
            <Grid item>
              <SearchData margBotton={1} />
            </Grid>
            <Grid item>
              <Table />
            </Grid>
            <Grid item>
              <TablaScript />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Index;
