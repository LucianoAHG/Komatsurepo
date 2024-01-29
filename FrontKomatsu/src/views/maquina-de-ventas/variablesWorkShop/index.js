// import { Typography } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { Grid, Stack, Button, Typography } from '@mui/material';
//IMPORTACIONES TALLER DE VARIABLES
import InputPais from './tallerVariables/inputPais';
import InputOrigen from './tallerVariables/inputOrigen';
import InputTipoPersona from './tallerVariables/inputTipoPersonaSelect';
import InputVariable from './tallerVariables/inputVariable';
import BotonGuardarVariable from './tallerVariables/botonguardar';
import OperadorAsimetrico from './tallerVariables/operadorAsimetrico';
import InputConstanteK from './tallerVariables/inputConstanteK';
import InputNombreVariable from './tallerVariables/inputNombreVariable';
import BotonNueva from './tallerVariables/botonNueva';
import ValidarSintaxis from './tallerVariables/validarSintaxis';
import BotonGuardar from './tallerVariables/botonguardar';
//FIN IMPORTACIONES TALLER DE VARIABLES

//IMPORTACIONES REPOSITORIO VARAIBLES
import TablaRepositorioVariables from './repocitorioVariables/tabla';
//FIN IMPORTACIONES REPOSITORIO VARAIBLES

//IMPORTACIONES PARA PRUEBAS DE VARIABLES
import LeyendaRut from './pruebasDevariables/leyenda';
import InputDocumento from './pruebasDevariables/InputDocumento';
import EstadisticaDePrueba from './pruebasDevariables/estadisticaDePruebas';
import SelectVariablesCreadas from './pruebasDevariables/selectVariablesCreadas';
import LeyendaDecimal from './pruebasDevariables/leyendaDecimal';
import TablaDefinicionFormula from './pruebasDevariables/definicionFormula';
//FIN IMPORTACIONES PRUEBAS DE VARIABLES

//ICONS
import { IconDeviceFloppy } from '@tabler/icons';

function VariablesWorkShop() {
  return (
    <MainCard title="Variables Workshop">
      <SubCard title="Taller de variables">
        <Stack direction={{ xs: 'column', md: 'row' }} justify="center" spacing={2} mb={3}>
          <Grid container direction="column">
            <Grid item>
              <InputTipoPersona />
            </Grid>
            <Grid item>
              <InputPais />
            </Grid>
            <Grid item>
              <InputOrigen />
            </Grid>
            <Grid item mb={{ xs: 1 }}>
              <InputVariable />
            </Grid>
            <Grid item>
              <BotonGuardarVariable />
            </Grid>
            <Stack direction={{ xs: 'column', md: 'row' }} mt={{ md: 2 }} spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Grid item xs={12} md={5} sx={{ width: '100%' }}>
                <OperadorAsimetrico style={{ width: '100%' }} />
              </Grid>
              <Grid item sx={{ width: '100%' }} mb={{ xs: 1 }} md={4}>
                <InputConstanteK />
              </Grid>
              <Grid item sx={{ width: '100%' }} mb={{ xs: 3 }} pt={{ md: 3.3 }} md={4} xs={12} alignItems="center">
                <BotonGuardarVariable />
              </Grid>
            </Stack>
          </Grid>

          <Grid container direction="column">
            <Grid item pt={{ md: 3, xs: 5 }} mb={{ md: 3.4, xs: 1 }}>
              <InputNombreVariable />
            </Grid>
            <Stack direction={{ md: 'row', xs: 'column' }} spacing={1}>
              <Grid item md={4} xs={12} mb={{ md: 3.7 }}>
                <BotonNueva />
              </Grid>
              <Grid item md={4} xs={12} mb={{ md: 3.5 }}>
                <ValidarSintaxis />
              </Grid>
              <Grid item md={4} xs={12}>
                <BotonGuardar />
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </SubCard>
      {/**Repositorio de Variables */}
      <SubCard title="Repositorio de Variables">
        <Grid>
          <TablaRepositorioVariables />
        </Grid>
      </SubCard>
      {/**Fin Repositorio de Variables */}

      {/**Pruebas de Variables */}
      <SubCard title="Pruebas de Variables">
        <Stack direction={{ xs: 'column', md: 'row' }} justify="center" spacing={2}>
          <Grid container direction="column" mt={0.5}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mb={3}>
              <Grid item xs={12} md={4} sx={{ width: '100%' }}>
                <Typography
                  sx={{
                    color: '#6a6c6f',
                    fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
                    fontSize: '13px',
                    fontWeight: 700,
                    marginBottom: 1
                  }}
                >
                  Documento
                </Typography>
                <InputDocumento />
              </Grid>
              <Grid item xs={12} md={4} sx={{ width: '100%' }}>
                <Typography
                  sx={{
                    color: '#6a6c6f',
                    fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
                    fontSize: '13px',
                    fontWeight: 700,
                    marginBottom: 1
                  }}
                >
                  Variables Creadas
                </Typography>
                <SelectVariablesCreadas />
              </Grid>
              <Grid item xs={12} md={4} sx={{ width: '100%' }}>
                <Button sx={{ width: '100%', marginTop: { xs: 0, md: 3.3 } }} variant="contained" startIcon={<IconDeviceFloppy />}>
                  Guardar
                </Button>{' '}
              </Grid>
            </Stack>
            <Grid item sx={{ width: '100%' }}>
              <LeyendaRut />
            </Grid>
            <Grid item sx={{ width: '100%' }}>
              <EstadisticaDePrueba />
            </Grid>
          </Grid>

          <Grid container direction="column" justifyContent="flex-end" alignItems="center">
            <Grid item sx={{ width: '100%' }}>
              <LeyendaDecimal />
            </Grid>
            <Grid item sx={{ width: '100%' }}>
              <TablaDefinicionFormula />
            </Grid>
          </Grid>
        </Stack>
      </SubCard>
      {/**Fin Pruebas de Variables */}
    </MainCard>
  );
}

export default VariablesWorkShop;
