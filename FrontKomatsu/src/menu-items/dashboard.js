// assets
import {
  IconFileUpload,
  IconAdjustmentsAlt,
  IconDashboard,
  IconCompass,
  IconFileAnalytics,
  IconBulb,
  IconFileSpreadsheet,
  IconChessQueen,
  IconHexagons,
  IconAdjustmentsHorizontal,
  IconWallet,
  IconBrandSuperhuman,
  IconGitFork,
  IconHistory,
  IconCalendarEvent,
  IconChartArrowsVertical,
  IconBrandAirtable,
  IconBrandCodepen,
  IconCodeDots,
  IconBrandOpenSource,
  IconManualGearbox,
  IconSettings,
  IconUserCircle,
  IconUsers,
  IconId,
  IconFilter,
  IconChartDots2,
  IconStatusChange,
  IconVariable,
  IconShape2,
  IconAlertTriangle
} from '@tabler/icons';

import './styles.css';

// constant
const icons = {
  IconShape2,
  IconVariable,
  IconStatusChange,
  IconChartDots2,
  IconDashboard,
  IconFileUpload,
  IconAdjustmentsAlt,
  IconCompass,
  IconFileAnalytics,
  IconBulb,
  IconFileSpreadsheet,
  IconChessQueen,
  IconHexagons,
  IconAdjustmentsHorizontal,
  IconWallet,
  IconBrandSuperhuman,
  IconGitFork,
  IconHistory,
  IconCalendarEvent,
  IconChartArrowsVertical,
  IconBrandAirtable,
  IconBrandCodepen,
  IconCodeDots,
  IconBrandOpenSource,
  IconManualGearbox,
  IconSettings,
  IconUserCircle,
  IconUsers,
  IconId,
  IconFilter,
  IconAlertTriangle
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'mantenimiento',
      title: 'OverView',
      type: 'item',
      url: '/dashboard/mantenimiento-de-distribuidores',
      icon: IconGitFork,
      breadcrumbs: false
    },
    {
      id: 'mantenimiento2',
      title: 'Mantenimiento de Vaciado',
      type: 'item',
      url: '/dashboard/mantenimiento-de-vaciado',
      icon: IconManualGearbox,
      breadcrumbs: false
    },
    {
      id: 'mantenimiento3',
      title: 'Dashboard Mantenimiento',
      type: 'item',
      url: '/dashboard/dashboard-mantenimiento',
      icon: IconDashboard,
      breadcrumbs: false
    },

    {
      id: 'historico',
      title: 'Histórico Distribuidores',
      type: 'item',
      url: '/dashboard/historico-distribuidores',
      icon: IconFileAnalytics,
      breadcrumbs: false
    },

    {
      id: 'mantenedor',
      title: 'Mantenedor de Tasas de Cambio',
      type: 'item',
      url: '/dashboard/mantenedor-tasas-cambio',
      icon: IconBrandOpenSource,
      breadcrumbs: false
    },

    {
      id: 'mantenedor2',
      title: 'Mantenedor de Marcas',
      type: 'item',
      url: '/dashboard/mantenedor-marcas',
      icon: IconAdjustmentsHorizontal,
      breadcrumbs: false
    },

    {
      id: 'mantenedor3',
      title: 'Mantenedor de Productos',
      type: 'item',
      url: '/dashboard/mantenedor-productos',
      icon: IconFilter,
      breadcrumbs: false
    },

    {
      id: 'separador2',
      title: '',
      type: 'item',
      breadcrumbs: false,
      visible: false
    },

    {
      id: 'inicio',
      title: 'Inicio Cliente',
      type: 'item',
      url: '/dashboard/inicio-cliente',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'comercial',
      title: 'Resumen Comercial',
      type: 'item',
      url: '/dashboard/comercial',
      icon: IconFileAnalytics,
      breadcrumbs: false
    },

    {
      id: 'comercial cliente',
      title: 'Comercial Cliente',
      type: 'item',
      url: '/dashboard/comercial-cliente',
      icon: IconWallet,
      breadcrumbs: false
    },
    //{
    //id: 'CargaDocumentos',
    //title: 'Documentos Legales',
    //type: 'item',
    //url: '/dashboard/documentos-legales',
    //icon: icons.IconBulb
    //},

    // {
    //id: 'informe comercial',
    //title: 'Informe',
    //type: 'item',
    //url: '/dashboard/informe-comercial',
    //icon: icons.IconBulb
    // },

    // {
    // id: 'Datos cuantitativos',
    //title: 'Datos Financieros',
    //type: 'item',
    //url: '/dashboard/datos-cuantitativos',
    //icon: icons.IconBulb
    //},
    {
      id: 'Riesgo',
      title: 'Riesgo',
      type: 'item',
      url: '/dashboard/riesgo',
      icon: IconAlertTriangle,
      breadcrumbs: false
    },

    {
      id: 'Vaciado DAI',
      title: 'Vaciado DAI',
      type: 'item',
      url: '/dashboard/vaciado-dai',
      icon: IconFileSpreadsheet,
      breadcrumbs: false
    },
    {
      id: 'IVA',
      title: 'Analisis de IVA',
      type: 'item',
      url: '/dashboard/analisis-iva',
      icon: IconManualGearbox
    },
    {
      id: 'calificacion',
      title: 'Calificacion de Riesgo',
      type: 'item',
      url: '/dashboard/calificacion-riesgo',
      icon: icons.IconBulb,
      breadcrumbs: false
    },
    {
      id: 'reportes',
      title: 'Reportes',
      type: 'item',
      url: '/dashboard/reportes',
      icon: IconHistory,
      breadcrumbs: false
    },
    {
      id: 'reporteskpi',
      title: 'Reportes KPI',
      type: 'item',
      url: '/dashboard/reportes-kpi',
      icon: icons.IconBulb,
      breadcrumbs: false
    },

    {
      id: 'separador2',
      title: '',
      type: 'item',
      breadcrumbs: false,
      visible: false
    },

    {
      id: 'maestro-deudores',
      title: 'Maestro Deudores',
      type: 'item',
      url: '/dashboard/maestro-deudores',
      icon: icons.IconWallet,
      breadcrumbs: false
    },
    {
      id: 'modulo-de-cargas',
      title: 'Carga Datos',
      type: 'item',
      url: '/dashboard/modulo-de-cargas',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: 'inteligencia',
      title: 'Inteligencia Maquina',
      type: 'item',
      url: '/dashboard/inteligencia',
      icon: icons.IconHexagons,
      breadcrumbs: false
    },
    {
      id: 'generador-de-modelos',
      title: 'Generador de modelos',
      type: 'item',
      url: '/dashboard/generador-de-modelos',
      icon: icons.IconShape2,
      breadcrumbs: false
    },
    {
      id: 'seguimiento-humano',
      title: 'Seguimiento Humano',
      type: 'item',
      url: '/dashboard/seguimiento-humano',
      icon: icons.IconBrandSuperhuman
    },
    {
      id: 'control-recupero',
      title: 'Control Recupero',
      type: 'item',
      url: '/dashboard/control-recupero',
      icon: icons.IconFileAnalytics,
      breadcrumbs: false
    },
    {
      id: 'historico-clientes',
      title: 'Historico Clientes',
      type: 'item',
      url: '/dashboard/historico-clientes',
      icon: icons.IconHistory
    },
    {
      id: 'hostorico-cargas-masivas',
      title: 'Historico Cargas ',
      type: 'item',
      url: '/dashboard/historico-cargas-masivas',
      icon: icons.IconFileSpreadsheet,
      breadcrumbs: false
    },
    {
      id: 'calendario',
      title: 'Calendario Gestión',
      type: 'item',
      url: '/dashboard/calendario',
      icon: icons.IconCalendarEvent
    },

    {
      id: 'calificacion-perfiles',
      title: 'Calificación Perfiles',
      type: 'item',
      url: '/dashboard/calificacion-perfiles',
      icon: icons.IconFilter,
      breadcrumbs: false
    },

    {
      id: 'recorrido',
      title: 'Recorrido Cobranza',
      type: 'item',
      url: '/dashboard/recorrido',
      icon: icons.IconCompass,
      breadcrumbs: false
    },

    {
      id: 'estrategias-de-cobranza',
      title: 'Estrategia de cobranza',
      type: 'item',
      url: '/dashboard/estrategias-de-cobranza',
      icon: icons.IconChessQueen,
      breadcrumbs: false
    },

    {
      id: 'administrador-eventos',
      title: 'Administración de Eventos',
      type: 'item',
      url: '/dashboard/administrador-eventos',
      icon: icons.IconAdjustmentsAlt,
      breadcrumbs: false
    },

    {
      id: 'integraciones-outbound',
      title: 'Integraciones OutBound',
      type: 'item',
      url: '/dashboard/integraciones-outbound',
      icon: icons.IconBrandAirtable
    },

    {
      id: 'integraciones-inbound',
      title: 'Integraciones InBound',
      type: 'item',
      url: '/dashboard/integraciones-inbound',
      icon: icons.IconBrandCodepen
    },

    {
      id: 'maestro-scripts',
      title: 'Administrador Script',
      type: 'item',
      url: '/dashboard/maestro-scripts',
      icon: icons.IconCodeDots
    },

    {
      id: 'modulo-ia',
      title: 'Módulo IAs',
      type: 'item',
      url: '/dashboard/modulo-ia',
      icon: icons.IconBrandOpenSource
    },

    {
      id: 'seguimiento-script',
      title: 'Seguimiento de Script',
      type: 'item',
      url: '/dashboard/seguimiento-script',
      icon: icons.IconManualGearbox
    },
    {
      id: 'configuraciones',
      title: 'System Option',
      type: 'item',
      url: '/dashboard/configuraciones',
      icon: icons.IconSettings
    },

    {
      id: 'perfiles',
      title: 'Perfiles',
      type: 'item',
      url: '/dashboard/perfiles',
      icon: icons.IconId
    },

    {
      id: 'usuarios',
      title: 'Usuarios',
      type: 'item',
      url: '/dashboard/usuarios',
      icon: icons.IconUserCircle
    },

    {
      id: 'ejecutivos',
      title: 'Ejecutivos',
      type: 'item',
      url: '/dashboard/ejecutivos',
      icon: icons.IconUsers
    },

    {
      id: 'editor-de-data-entry-exit',
      title: 'Editor de Data Entry Exit',
      type: 'item',
      url: '/dashboard/editor-de-data-entry-exit',
      icon: icons.IconChartDots2
    },

    {
      id: 'estados-ec2',
      title: 'Estados EC2',
      type: 'item',
      url: '/dashboard/estados-ec2',
      icon: icons.IconStatusChange
    },

    {
      id: 'variables-workshop',
      title: 'Variables Workshop',
      type: 'item',
      url: '/dashboard/variables-workshop',
      icon: icons.IconVariable
    }
  ]
};

export default dashboard;
