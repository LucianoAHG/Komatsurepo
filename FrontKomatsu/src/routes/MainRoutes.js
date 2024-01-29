import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const InicioCliente = Loadable(lazy(() => import('views/dashboard/InicioCliente/index')));

//RUTA DE PRUEba
const TEST = Loadable(lazy(() => import('views/dashboard/DatosPersonales')));
//const MiInicio= Loadable(lazy(() => import('views/dashboard/Home')));
const Comercial = Loadable(lazy(() => import('views/dashboard/Comercial')));
//const Cliente = Loadable(lazy(() => import('views/dashboard/ComercialResumen/index')));
const InformeComercial = Loadable(lazy(() => import('views/dashboard/InformeComercial')));

const ComercialCliente = Loadable(lazy(() => import('views/dashboard/ComercialCliente/')));

const Dashboard = Loadable(lazy(() => import('views/dashboard/Dashboard/')));

const TasasdeCambio = Loadable(lazy(() => import('views/dashboard/TasasdeCambio/')));

const MantenimientoMarcas = Loadable (lazy(() => import ('views/dashboard/MantenimientoMarcas')));
const HistoricoDistribuidores = Loadable (lazy(() => import ('views/dashboard/HistoricoDistribuidores')));
const MantenedorProductos = Loadable (lazy(() => import ('views/dashboard/MantenedorProductos')));


//Ruta riesgo
const CalificacionRiesgo = Loadable(lazy(() => import('views/dashboard/CalificacionRiesgo/index.js')));
//const DescripcionGiro = Loadable(lazy(() => import('views/dashboard/DescripcionGiro/index')));
const Reportes = Loadable(lazy(() => import('views/dashboard/Reportes')));
const Reporteskpi = Loadable(lazy(() => import('views/dashboard/ReportesKPI')));
//ruta iva 
const AnalisisIva = Loadable(lazy(() => import('views/dashboard/AnalisisdeIva/index.js')));
//const AnalisisIva2 = Loadable(lazy(() => import('views/dashboard/AnalisisdeIva/index.js')));

//ruta balance financiero
const DatosCuantitativos = Loadable(lazy(() => import('views/dashboard/DatosCuantitativos')));
const VaciadoFinancieros = Loadable(lazy(() => import('views/dashboard/VaciadoFinanciero')));
const VaciadoDAI = Loadable(lazy(() => import('views/dashboard/VaciadoDai')));
const Riesgo = Loadable(lazy(() => import('views/dashboard/Riesgo')));

//Ruta creditos
const AntecedentesCreditos = Loadable(lazy(() => import('views/dashboard/AntecedentesCredito')));
const OperacionCredito = Loadable(lazy(() => import('views/dashboard/OperacionCredito')));


//ruta de carga de documentos
const DocumentoLegal = Loadable(lazy(() => import('views/dashboard/DocumentosLegal')));
//const ComiteClientes = Loadable(lazy(() => import('views/dashboard/ComiteClientes')));
//const Facturas = Loadable(lazy(() => import('views/dashboard/DatosDemograficos')));
const MantenimientoVaciado = Loadable(lazy(() => import('views/dashboard/MantenimientoVaciado')));
//const DocumentosLegales = Loadable(lazy(() => import('views/dashboard/DocumentosLegales/cargasdocumentos/CargaDocumentos.js')));

// dashboard routing
//Main route
const MainRoute = Loadable(lazy(() => import('views/dashboard/Default')));
const MantenimientoDistribuidores = Loadable(lazy(() => import('views/dashboard/MantenimientoDistribuidores')));
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const ModuloDeCargas = Loadable(lazy(() => import('views/dashboard/cargarDeudor/CargarDeudor')));
const HistoricoCargasMasivas = Loadable(lazy(() => import('views/dashboard/cargarDeudor/HistoricoCargasMasivas/index')));
const AdmninistradorEventos = Loadable(lazy(() => import('views/dashboard/SeleccionadorEventos')));
const RecorridoDeCartera = Loadable(lazy(() => import('views/dashboard/RecorridoDeCartera')));
const ControlDeRecupero = Loadable(lazy(() => import('views/dashboard/ReporteDeCobranza')));
const CalificacionPerfiles = Loadable(lazy(() => import('views/maquina-de-ventas/calificacionPerfiles')));
const InteligenciaPayments = Loadable(lazy(() => import('views/dashboard/InteligenciaPayments')));
const GeneradorDeModelos = Loadable(lazy(() => import('views/dashboard/generadorDeModelos/index')));
const EstrategiaDeCobranza = Loadable(lazy(() => import('views/dashboard/estrategiaDeCobranza')));

//const DocumentosLegales = Loadable(lazy(() => import('views/dashboard/DocumentosLegales/cargasdocumentos')));

//Maquina de Ventas Routes

const MaestroDeudores = Loadable(lazy(() => import('views/maquina-de-ventas/maestro-deudores')));
const SeguimientoHumano = Loadable(lazy(() => import('views/maquina-de-ventas/seguimiento-humano')));
const HistoricoClientes = Loadable(lazy(() => import('views/maquina-de-ventas/historico-clientes')));
const Calendario = Loadable(lazy(() => import('views/maquina-de-ventas/calendario')));
const IngresoMetas = Loadable(lazy(() => import('views/maquina-de-ventas/ingreso-metas')));
const IntegracionesOutbound = Loadable(lazy(() => import('views/maquina-de-ventas/integraciones-outbound')));
const IntegracionesInbound = Loadable(lazy(() => import('views/maquina-de-ventas/integraciones-inbound')));
const MaestroScripts = Loadable(lazy(() => import('views/maquina-de-ventas/maestro-scripts/')));
const ModuloIA = Loadable(lazy(() => import('views/maquina-de-ventas/modulo-ia')));
const SeguimientoScript = Loadable(lazy(() => import('views/maquina-de-ventas/seguimiento-de-script')));
const Configuraciones = Loadable(lazy(() => import('views/maquina-de-ventas/configuracion')));
const Usuarios = Loadable(lazy(() => import('views/maquina-de-ventas/usuarios')));
const Perfiles = Loadable(lazy(() => import('views/maquina-de-ventas/Perfiles')));
const Ejecutivos = Loadable(lazy(() => import('views/maquina-de-ventas/Ejecutivos')));
const EditorDataEntryExit = Loadable(lazy(() => import('views/maquina-de-ventas/editorDataEntryExit')));
const EstadosEC2 = Loadable(lazy(() => import('views/maquina-de-ventas/estadosEC2')));
const VariablesWorkShop = Loadable(lazy(() => import('views/maquina-de-ventas/variablesWorkShop')));

//utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

//sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {

  
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <MantenimientoDistribuidores />,
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <MainRoute />
        }
      ]
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'datos-personales',
          element: <TEST />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'mantenimiento-de-distribuidores',
          element: <MantenimientoDistribuidores />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'mantenimiento-de-vaciado',
          element: <MantenimientoVaciado />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'dashboard-mantenimiento',
          element: <Dashboard />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'historico-distribuidores',
          element: <HistoricoDistribuidores />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path:'mantenedor-tasas-cambio',
          element: <TasasdeCambio />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path:'mantenedor-marcas',
          element: <MantenimientoMarcas />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path:'mantenedor-productos',
          element: <MantenedorProductos />
        }
      ]
    },
    
    {
      path: 'dashboard',
      children: [
        {
          path: 'inicio-cliente',
          element: <InicioCliente />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'comercial',
          element: <Comercial />
        }
      ]
    },
 
  
    {
      path: 'dashboard',
      children: [
        {
          path: 'vaciado-dai',
          element: <VaciadoDAI />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'reportes',
          element: <Reportes />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'riesgo',
          element: <Riesgo />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'informe-comercial',
          element: <InformeComercial />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'comercial-cliente',
          element: <ComercialCliente />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'documentos-legales',
          element: <DocumentoLegal />
        }
      ]
    },
 
    {
      path: 'dashboard',
      children: [
        {
          path: 'operacion-credito',
          element: <OperacionCredito />
        }
      ]
    },
 
    {
      path: 'dashboard',
      children: [
        {
          path: 'datos-cuantitativos',
          element: <DatosCuantitativos />
        }
      ]
    },
        {
      path: 'dashboard',
      children: [
        {
          path: 'antecedentes-credito',
          element: <AntecedentesCreditos />
        }
      ]
    },
   
    {
      path: 'dashboard',
      children: [
        {
          path: 'vaciado-financiero',
          element: <VaciadoFinancieros />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'analisis-iva',
          element: <AnalisisIva />
        }
      ]
    },
  
    {
      path: 'dashboard',
      children: [
        {
          path: 'calificacion-riesgo',
          element: <CalificacionRiesgo />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'reportes-kpi',
          element: <Reporteskpi />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'modulo-de-cargas',
          element: <ModuloDeCargas />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'estrategias-de-cobranza',
          element: <EstrategiaDeCobranza />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'historico-cargas-masivas',
          element: <HistoricoCargasMasivas />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'administrador-eventos',
          element: <AdmninistradorEventos />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'recorrido',
          element: <RecorridoDeCartera />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'control-recupero',
          element: <ControlDeRecupero />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'calificacion-perfiles',
          element: <CalificacionPerfiles />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'inteligencia',
          element: <InteligenciaPayments />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'generador-de-modelos',
          element: <GeneradorDeModelos />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'maestro-deudores',
          element: <MaestroDeudores />
        }
      ]
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'seguimiento-humano',
          element: <SeguimientoHumano />
        }
      ]
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'historico-clientes',
          element: <HistoricoClientes />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'calendario',
          element: <Calendario />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'ingreso-metas',
          element: <IngresoMetas />
        }
      ]
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'integraciones-outbound',
          element: <IntegracionesOutbound />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'integraciones-inbound',
          element: <IntegracionesInbound />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'maestro-scripts',
          element: <MaestroScripts />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'modulo-ia',
          element: <ModuloIA />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'seguimiento-script',
          element: <SeguimientoScript />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'configuraciones',
          element: <Configuraciones />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'usuarios',
          element: <Usuarios />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'perfiles',
          element: <Perfiles />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'ejecutivos',
          element: <Ejecutivos />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'editor-de-data-entry-exit',
          element: <EditorDataEntryExit />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'estados-ec2',
          element: <EstadosEC2 />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'variables-workshop',
          element: <VariablesWorkShop />
        }
      ]
    },
    /////////////Seccion Utils/////////////////////////
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
