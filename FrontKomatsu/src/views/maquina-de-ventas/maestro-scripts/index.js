import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { Grid, Typography, Button, TextField } from '@mui/material';

//IMPORTACIONES AGREGAR SCRIPT
import InputNombre from './guardarScript/inputNombre';
import SelectCobranza from './guardarScript/selectFunnelComercial';
import InputCc from './guardarScript/inputCc';
import InputCo from './guardarScript/inputCco';
import SelectCanal from './guardarScript/selectCanal';
import SelectCamapaña from './guardarScript/selectCamapaña';
import InputFechaInicio from './guardarScript/inputFechaInicio';
import InputFechaFinal from './guardarScript/inputFechaFinal';
import SelectEstado from './guardarScript/selectEstado';
//FIN IMPORTACIONES DE AGREGAR SCRIPT

//IMPORTACIONES ARCHIVO ADJUNTO
import TablaArchivosAdjuntos from './archivosAdjuntos/tablaArchivosAdjunto';
//FIN IMPORTACIONES ARCHIVO ADJUNTO

//IMPORTACIONES AGREGAR VARIABLES
import SelectTabla from './agregaVariables/selectTabla';
import SelectVariable from './agregaVariables/selectVariable';
import InputShortCode from './agregaVariables/inputShortCode';
//FIN IMPORTACIONES AGREGAR VARIABLES

//IMPORTAR TABLA
import Tabla from './tabla';
//FIN IMPORTAR TABLA

//ICONS IMPORTACIONES
import { IconDeviceFloppy } from '@tabler/icons';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

//IMPORT THEME
import { useTheme } from '@mui/material/styles';

const opcionesPorTabla = {
  ACTUALIZADO: ['Opción 1', 'Opción 2', 'Opción 3'],
  AGENDA_RAPIDA: ['Opción A', 'Opción B', 'Opción C'],
  ANTECEDENTES: ['Opción X', 'Opción Y', 'Opción Z']
  // ... define las opciones para otras tablas
};
function TituloEstilos({ titulo }) {
  return (
    <Typography
      sx={{
        color: '#6a6c6f',
        fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
        fontSize: '13px',
        fontWeight: 700,
        marginBottom: 1,
        width: '100%'
      }}
    >
      {titulo}
    </Typography>
  );
}

function Test() {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState('');

  const handleVariableChange = (value) => {
    setSelectedValue(value);
  };

  const [opcionesTabla2, setOpcionesTabla2] = useState([]);

  const handleChangeTabla = (value) => {
    setOpcionesTabla2(opcionesPorTabla[value] || []);
  };
  return (
    <MainCard title="Administrador Script">
      <div>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} md={4}>
            <TituloEstilos titulo={'Nombre'} />
            <InputNombre />
          </Grid>
          <Grid item xs={12} md={4}>
            <TituloEstilos titulo={'Seleccione Cobranza'} />
            <SelectCobranza />
          </Grid>
          <Grid item xs={12} md={4}>
            <TituloEstilos titulo={'Canal'} />
            <SelectCanal />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TituloEstilos titulo={'Cc'} />
            <InputCc />
          </Grid>
          <Grid item xs={12} md={4}>
            <TituloEstilos titulo={'Co'} />
            <InputCo />
          </Grid>
          <Grid item xs={12} md={4}>
            <TituloEstilos titulo={'Estado'} />
            <SelectEstado />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TituloEstilos titulo={'Fecha Inicio Vigencia'} />
            <InputFechaInicio />
          </Grid>
          <Grid item xs={12} md={4}>
            <TituloEstilos titulo={'Fecha Final'} />
            <InputFechaFinal />{' '}
          </Grid>
          <Grid item xs={12} md={4}>
            <TituloEstilos titulo={'Campaña'} />
            <SelectCamapaña />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item md={4} xs={12}>
            <Button variant="contained" sx={{ width: '100%' }} startIcon={<IconDeviceFloppy />}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </div>
      {/*============ Fin Agregar Script ========================*/}

      {/*============= SECCION ADJUNTAR ARCHIVO ===================*/}
      <SubCard title="Archivos Adjuntos" style={{ marginTop: '20px' }}>
        <Grid container spacing={1}>
          <Grid item md={12} sx={{ width: '100%' }}>
            <input type="file" name="archivosubido" className="form-control" />
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <TablaArchivosAdjuntos />
          </Grid>
        </Grid>
      </SubCard>
      <SubCard title="Agregar Variables">
        <Grid container spacing={2} mb={{ xs: 3, md: 3 }}>
          <Grid item xs={12} md={3} sx={{ width: '100%' }}>
            <TituloEstilos titulo={'Tabla'} />
            <SelectTabla onValueChange={handleChangeTabla} />
          </Grid>
          <Grid item xs={12} md={3} sx={{ width: '100%' }}>
            <TituloEstilos titulo={'Tabla'} />
            <SelectVariable onVariableChange={handleVariableChange} tabla={opcionesTabla2} />
          </Grid>
          <Grid item xs={12} md={3} sx={{ width: '100%' }}>
            <TituloEstilos titulo={'ShortCode'} />
            <InputShortCode titulo={selectedValue} />
          </Grid>
          <Grid item xs={12} md={3} sx={{ width: '100%' }}>
            <Button variant="contained" sx={{ width: '100%', marginTop: { md: 3.3 } }} startIcon={<ContentCopyIcon />}>
              Copiar
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Cuerpo"
            multiline
            placeholder="Escribe aquí"
            maxRows={10}
            minRows={4}
            sx={{
              width: '100%',
              padding: '1px',
              fontSize: '16px',
              borderColor: `${theme.palette.success[800]} !important`
            }}
          />
        </Grid>
      </SubCard>
      <SubCard title="Repositorio Script">
        <Grid container>
          <Grid item sx={{ width: '100%' }}>
            <Tabla />
          </Grid>
        </Grid>
      </SubCard>
    </MainCard>
  );
}

export default Test;
