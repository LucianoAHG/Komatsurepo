// material-ui
// import { Typography } from '@mui/material';
import React, { useState } from 'react';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
//import seccion pais
import SeleccionPais from './seleccionePais/seleccionPais';
import BotonSeleccionPais from './seleccionePais/botonSeleccionPais';
//fin import Seccion Pais

//Seccion seleccionar moneda
import InputMoneda from './inputMoneda/inputMoneda.js';
import InputPais from './inputMoneda/inputPais';
import BotonAddMoneda from './inputMoneda/botonmoneda';
import OptionMoneda from './inputMoneda/grupoMoneda';
//Fin seccion input moneda

//seccion diaferiado
import InputFecha from './seleccionDiasFeriados/inputFecha';
import InputDiaFeriado from './seleccionDiasFeriados/inputDiaFeriado';
import BotonAgregarDiaFeriado from './seleccionDiasFeriados/agregarDiaFeriado';
import TablaDiaFeriado from './seleccionDiasFeriados/tabla';
//fin seccion dia feriado
//dia de la semana
import InputDiaDeLaSemana from './seleccionHorarioHabil/diaDeLaSemana';
import InputHoraDesde from './seleccionHorarioHabil/horaDesde';
import InputHoraHasta from './seleccionHorarioHabil/horaHasta';
import BotonHorarioHabil from './seleccionHorarioHabil/botonAddHorarioHabil';
import TablaHorarioHabil from './seleccionHorarioHabil/tabla';
//Importar componentes Modulo IA
import InputNumericoIA from './moduloIA/inputNumeroIA';
import InputSelectMultipleIA from './moduloIA/inputMultiSelect';
import BotonGuardarModuloIA from './moduloIA/botonGuardar';
import TituloRangoConversacion from './moduloIA/tituloRangoDeConversacion';
import TituloLimiteFrasesConversacion from './moduloIA/tituloLimiteFrasesConversacion';
import TituloLearningAdministradorScript from './moduloIA/tituloLearningAdministradorScript';
import SwitchIA from './moduloIA/swtichIA';
import TituloRespuestaAutomaticaIA from './moduloIA/respuestaAutomaticaIATitulo';
import BotonModuloIAGuardar from './moduloIA/botonGuardar';
//Fin importación componentes modulo IA

//Importaciones Calculo
import TituloCalculo from './calculo/tituloCalculo';
import InputCalculo from './calculo/inputCalculo';
import BotonGuardarCalculo from './calculo/botonCalculo';
//Fin importaciones Calculo

//Importaciones Administrador Script
import TituloAdministradorScript from './administrador-script/tituloAdministradorScript';
import SwitchAdministradorScript from './administrador-script/switchAdministradorScript';
//Fin importaciones Administrador Script

// Import Data Exit
import DataExit from './dataExit/tabla';
// Import Data exit

//Import Semaforo
import TituloFormatoTiempo from './semaforo/tituloFormatoTiempo';
import TituloLuzAmarilla from './semaforo/tituloLuzAmarilla';
import TituloLuzRoja from './semaforo/tituloLuzRoja';
import TituloIA from './semaforo/tituloIA';
import BotonGuardarLuzAmarilla from './semaforo/botonGuardarLuzAmarilla';
import BotonGuardarFormatoTiempo from './semaforo/botonGuardarFormatoTiempo';
import BotonGuardarLuzRoja from './semaforo/botonGuardarLuzRoja';
import BotonGuardarIA from './semaforo/botonGuardarIA';
import InputOpcionesSemaforo from './semaforo/multiSelectSemaforo';
import InputSemaforoNumber from './semaforo/inputNumberSemaforo';
//Fin import Semaforo
//componentes Mui

import { Grid, Divider } from '@mui/material';
import Switches from './seleccionePais/grupoPaises';

// //Datepicker import
// import dayjs from 'dayjs';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import { createTheme, ThemeProvider } from '@mui/material/styles';

// ==============================|| SAMPLE PAGE ||============================== //

function SystemOption() {
  {
    /*======= Logica para que se agreguen tipo de monedas  ======== */
  }

  const [nombreMoneda, setNombreMoneda] = useState('');
  const [valorActualMoneda, setValorActualMoneda] = useState(['Dolar', 'Euro']);

  const handleNombreMonedaChange = (nombre) => {
    setNombreMoneda(nombre);
  };
  const handleAgregarClick = () => {
    setValorActualMoneda([...valorActualMoneda, nombreMoneda]);
  };
  //Eliminar Moneda
  const handleEliminarMoneda = (moneda) => {
    const updatedMonedas = valorActualMoneda.filter((m) => m !== moneda);
    setValorActualMoneda(updatedMonedas);
  };
  /* Fin logica para agregar monedas */

  {
    /*============= Funciones y estados para Paises ========= */
  }
  const InitialPaises = ['Chile', 'Colombia', 'Panama', 'Perú'];
  const [nombrePaises, setNombrePais] = useState('');
  const [valorActualPais, setValorActualPais] = useState(InitialPaises);

  const handleNombrePaisChange = (nombrePais) => {
    setNombrePais(nombrePais);
  };
  const handleAgregarPaisClick = () => {
    setValorActualPais([...valorActualPais, nombrePaises]);
  };
  //Eliminar Moneda
  const handleEliminarPais = (pais) => {
    const updatePaises = valorActualPais.filter((m) => m !== pais);
    setValorActualPais(updatePaises);
  };
  {
    /* Fin Funciones y estados para Paises */
  }
  return (
    <MainCard title="System Option">
      {/**************************Seccion Paises ********************/}
      <SubCard title="Selección País" style={{ marginBottom: 15 }}>
        {/* Input de Nombre de Pais */}
        <Grid container direction="row" justify="center" alignItems="center" spacing={2} mb={1}>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <SeleccionPais onNombrePaisChange={handleNombrePaisChange} />
          </Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }} md={3} xs={12}>
            <BotonSeleccionPais onClick={handleAgregarPaisClick} />
          </Grid>
        </Grid>
        {/* Fin Input de Nombre de Pais */}

        {/* Mostrar paises  */}
        <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
          {valorActualPais.map((valor, index) => (
            <Switches key={index} pais={valor} onDeletePais={handleEliminarPais} />
          ))}
        </Grid>
        {/* Fin Switches, eliminar y Paises */}
      </SubCard>
      {/*********************** Fin  Seccion Paises ********************/}

      {/********************** Seccion Monedas ************************/}
      <SubCard title="Seleccion Moneda" style={{ marginBottom: 15 }}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2} mb={1}>
          {/**Secicon Inputs */}
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputMoneda onNombreMonedaChange={handleNombreMonedaChange} />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputPais />
          </Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }} md={3} xs={12}>
            <BotonAddMoneda onClick={handleAgregarClick} />
          </Grid>
        </Grid>
        {/**Fin seccion inputs */}

        {/**Seccion activar monedas */}
        <Grid container direction="row" justify="center" alignItems="center">
          {valorActualMoneda.map((valor, index) => (
            <OptionMoneda key={index} moneda={valor} onDelete={handleEliminarMoneda} />
          ))}
          {/**Fin Seccion activar monedas */}
        </Grid>
      </SubCard>
      {/********************** Fin Seccion Monedas ************************/}

      {/************Subcard Dias Feriados ************/}
      <SubCard title="Seleccion Días Feriados" style={{ marginBottom: 15 }}>
        <Grid container direction="row" mb={1} justify="center" alignItems="center" spacing={2}>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputFecha />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputDiaFeriado />
          </Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }} md={3} xs={12}>
            <BotonAgregarDiaFeriado />
          </Grid>
        </Grid>
        {/* prueba */}

        {/* fin prueba */}
        <Grid container>
          <Grid item md={12} xs={12} sx={{ height: '100%' }}>
            <TablaHorarioHabil />
          </Grid>
        </Grid>
      </SubCard>
      {/************ Fin Subcard Dias Feriados ************/}

      {/********** SubCard Seleccion Horario Habil **************/}
      <SubCard title="Seleccion Horario Hábil" style={{ marginBottom: 15 }}>
        <Grid container direction="row" justify="center" alignItems="center" mb={1} spacing={2}>
          <Grid item sx={{ width: '100%' }} md={3} xs={12}>
            <InputDiaDeLaSemana />
          </Grid>
          <Grid item sx={{ width: '100%' }} md={3} xs={12} justifyContent="flex-start" alignItems="center">
            <InputHoraDesde />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputHoraHasta />
          </Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }} md={3} xs={12}>
            <BotonHorarioHabil />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} xs={12}>
            <TablaDiaFeriado />
          </Grid>
        </Grid>
      </SubCard>
      {/********** SubCard Seleccion Horario Habil **************/}
      {/************* Modulo IA *****************************/}
      <SubCard title="Seleccion Modulo IA" style={{ marginBottom: 15 }}>
        <Grid container direction="row" justify="center" alignItems="center" mb={{ xs: 3, md: 2 }} spacing={2}>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <TituloRangoConversacion />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputNumericoIA />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputSelectMultipleIA />
          </Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto', sm: '0px' }} sm={12} md={3} xs={12}>
            <BotonModuloIAGuardar />
          </Grid>
        </Grid>
        <Grid item mb={{ xs: 2 }} mt={{ xs: 2 }}>
          <Divider sx={{ display: { md: 'none' } }}></Divider>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" mb={{ xs: 3, md: 2 }} spacing={2}>
          <Grid item md={3} sx={{ width: '100%' }}>
            <TituloLimiteFrasesConversacion />
          </Grid>
          <Grid item md={3} sx={{ width: '100%' }}>
            <InputNumericoIA />
          </Grid>
          <Grid item md={3} sx={{ width: '100%' }}></Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }} md={3} xs={12}>
            <BotonGuardarModuloIA />
          </Grid>
        </Grid>
        <Grid item mb={{ xs: 2 }} mt={{ xs: 2 }}>
          <Divider sx={{ display: { md: 'none' } }}></Divider>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          <Grid item md={3} xs={8} sx={{ width: '100%' }}>
            <TituloLearningAdministradorScript />
          </Grid>
          <Grid item md={3} sx={{ width: '100%' }}>
            <SwitchIA />
          </Grid>
          <Grid item md={3} xs={8} sx={{ width: '100%' }}>
            <TituloRespuestaAutomaticaIA />
          </Grid>
          <Grid item md={3} sx={{ width: '100%' }}>
            <SwitchIA />
          </Grid>
        </Grid>
      </SubCard>
      {/*================= Fin Modulo IA ========================*/}
      {/*********** Modulo Calculo *********************/}
      <SubCard title="Calculo" style={{ marginBottom: 15 }}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <TituloCalculo />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputCalculo />
          </Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }} md={3} xs={12}>
            <BotonGuardarCalculo />
          </Grid>
        </Grid>
      </SubCard>
      {/*============= FIN Modulo Calculo ===================*/}

      {/*============= Modulo ADministrador Script ===================*/}
      <SubCard title=" Administrador de Script" style={{ marginBottom: 15 }}>
        <Grid container direction="row" justify="center" alignItems="center" mb={1}>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <TituloAdministradorScript />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <SwitchAdministradorScript />
          </Grid>
        </Grid>
      </SubCard>
      {/*============= FIN Modulo ADministrador Script ===================*/}

      {/*============= Modulo Seccion Data Exit ===================*/}
      <SubCard title="Seleccion Data Exit" style={{ marginBottom: 15 }}>
        <Grid container>
          <DataExit />
        </Grid>
      </SubCard>
      {/*============= Modulo Seccion Data Exit ===================*/}

      {/*============= Modulo Semaforo ===================*/}
      <SubCard title="Semaforo" style={{ marginBottom: 5 }}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <TituloFormatoTiempo />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputOpcionesSemaforo />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }}>
            <BotonGuardarFormatoTiempo />
          </Grid>
        </Grid>
        <Grid item mb={{ xs: 2 }} mt={{ xs: 2 }}>
          <Divider sx={{ display: { md: 'none' } }}></Divider>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center" spacing={2} mb={{ xs: 3, md: 2 }}>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <TituloLuzAmarilla />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputSemaforoNumber />
          </Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }} md={3} xs={12}>
            <BotonGuardarLuzAmarilla />
          </Grid>
        </Grid>
        <Grid item mb={{ xs: 2 }} mt={{ xs: 2 }}>
          <Divider sx={{ display: { md: 'none' } }}></Divider>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2} mb={{ xs: 3, md: 2 }}>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <TituloLuzRoja />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputSemaforoNumber />
          </Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }} md={3} xs={12}>
            <BotonGuardarLuzRoja />
          </Grid>
        </Grid>
        <Grid item mb={{ xs: 2 }} mt={{ xs: 2 }}>
          <Divider sx={{ display: { md: 'none' } }}></Divider>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <TituloIA />
          </Grid>
          <Grid item md={3} xs={12} sx={{ width: '100%' }}>
            <InputSemaforoNumber />
          </Grid>
          <Grid item sx={{ width: '100%' }} marginLeft={{ xs: '0px', md: 'auto' }} md={3} xs={12}>
            <BotonGuardarIA />
          </Grid>
        </Grid>
      </SubCard>
      {/*============= Modulo Semaforo ===================*/}
    </MainCard>
  );
}

export default SystemOption;
