import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { Typography, Grid, Button } from '@mui/material';
//importaciones de componentes
import SelectOpcion from './inputSelectOpcion';
import SelectVariable from './inputSelectCutOpcion';
import InputShortCode from './copyeInput';
import BotonPerfil from './botonPerfil';
import Switch from './swtich';
import TablaProspecto from './tablaProspecto';
import TablaControlDeVentas from './tablaControlVenta';
//FIN IMPORTACIONES COMPONENTES

//IMPORTACIONES DE ICONS
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
//FIN IMPORTACIONES ICONS

//Valores de las opciones del primer Select
const opcionesPorTabla = {
  ACTUALIZADO: ['Opción 1', 'Opción 2', 'Opción 3'],
  AGENDA_RAPIDA: ['Opción A', 'Opción B', 'Opción C'],
  ANTECEDENTES: ['Opción X', 'Opción Y', 'Opción Z']
  // ... define las opciones para otras tablas
};
//Fin valores opciones del primer select

//ARRAY CON TIPO DE PERFILES
const tiposDePerfiles = [
  'Cantidad de deuda',
  'Días legales',
  'Multiples deudas pocos dias',
  'Cantidad de días',
  'Concentracion de ambas variables',
  'Deuda creciente',
  'Deuda a la Baja',
  'Pagador diferido'
];
//FIN ARRAY CON TIPO DE PERFILES

//FUNCION DE TITULO MAS STYLE
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
//FIN FUNCION TITULO MAS STYLE

function EditorDataEntryExit() {
  //Inicio de Estados
  const [selectedValue, setSelectedValue] = useState('');
  const [opcionesTabla2, setOpcionesTabla2] = useState([]);
  //Fin Inicio de Estados
  //FUNCION MENEJADOR VARIABLE SEGUNDO SELECT
  const handleVariableChange = (value) => {
    setSelectedValue(value);
  };

  //FIN FUNCION MANEJADOR VARIABLE SEGUNDO SELECT

  //Manjador Funcion SelectOptcion
  const handleSelectOptionChange = (value) => {
    setOpcionesTabla2(opcionesPorTabla[value] || []);
  };
  //Fin manejador SelectOption
  return (
    <MainCard title="Editor de Data Entry Exit">
      <SubCard style={{ marginBottom: 15 }}>
        <Grid container direction="row" spacing={1} mb={2}>
          <Grid item md={3} sx={{ width: '100%' }}>
            <SelectOpcion onValueChange={handleSelectOptionChange} />
          </Grid>
          <Grid item md={3} sx={{ width: '100%' }}>
            <SelectVariable onVariableChange={handleVariableChange} tabla={opcionesTabla2} />
          </Grid>
          <Grid item md={3} sx={{ width: '100%' }}>
            <InputShortCode titulo={selectedValue} />
          </Grid>
          <Grid item md={3} sx={{ width: '100%' }}>
            <Button variant="contained" startIcon={<ContentCopyIcon />} sx={{ width: '100%' }}>
              Copiar
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={1} mb={2}>
          {tiposDePerfiles.map((perfil) => (
            <Grid key={perfil} item md={3} xs={12} sx={{ width: '100%' }}>
              <BotonPerfil perfil={perfil} />
            </Grid>
          ))}
        </Grid>
        <Grid container direction="row" spacing={1} justifyContent="center" alignItems="center" mb={2}>
          <Grid item md={1} xs={6} sx={{ width: '100%' }} mt={{ md: 1, xs: 1 }}>
            <TituloEstilos titulo={'Grabar'} />
          </Grid>
          <Grid item md={2} xs={6} sx={{ width: '100%' }}>
            <Switch />
          </Grid>
          <Grid item md={1} xs={6} sx={{ width: '100%' }} mt={{ md: 1, xs: 1 }}>
            <TituloEstilos titulo={'Editar'} />
          </Grid>
          <Grid item md={2} xs={6} sx={{ width: '100%' }}>
            <Switch />
          </Grid>
          <Grid item md={1} xs={6} sx={{ width: '100%' }} mt={{ md: 1, xs: 1 }}>
            <TituloEstilos titulo={'Cerrar'} />
          </Grid>
          <Grid item md={2} xs={6} sx={{ width: '100%' }}>
            <Switch />
          </Grid>
          <Grid item md={1} xs={6} sx={{ width: '100%' }} mt={{ md: 1, xs: 1 }}>
            <TituloEstilos titulo={'Eliminar'} />
          </Grid>
          <Grid item md={2} xs={6} sx={{ width: '100%' }}>
            <Switch />
          </Grid>
        </Grid>

        <Grid item>
          <TablaProspecto />
        </Grid>
      </SubCard>
      {/** CONTROL DE VENTAS */}
      <SubCard>
        <Grid container direction="row" spacing={1} mb={2}>
          {tiposDePerfiles.map((perfil) => (
            <Grid key={perfil} item md={3} xs={12} sx={{ width: '100%' }}>
              <BotonPerfil perfil={perfil} />
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <TablaControlDeVentas />
        </Grid>
      </SubCard>
      {/** FIN CONTROL DE VENTAS */}
    </MainCard>
  );
}

export default EditorDataEntryExit;
