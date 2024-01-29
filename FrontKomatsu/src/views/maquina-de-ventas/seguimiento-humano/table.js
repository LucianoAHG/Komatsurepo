import * as React from 'react';
import {
  DataGrid,
  //GridToolbar,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector
} from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid } from '@mui/material';
//Icons
import { IconSearch, IconMessage, IconCirclePlus, IconChartPie } from '@tabler/icons';

const columns = [
  { field: 'id', headerName: 'ID', width: 70, cellClassName: 'theme-grid' },
  { field: 'ejecutivo', headerName: 'Ejecutivo', width: 130, cellClassName: 'theme-grid' },
  { field: 'cliente', headerName: 'Cliente', width: 130, cellClassName: 'theme-grid' },
  {
    field: 'contacto',
    headerName: 'Contacto',
    cellClassName: 'theme-grid',
    type: 'number',
    width: 130
  },
  {
    field: 'fechaGestion',
    headerName: 'Fecha de Festión',
    cellClassName: 'theme-grid',
    width: 130
  },
  {
    field: 'producto',
    headerName: 'Producto',
    width: 130,
    cellClassName: 'theme-grid'
  },
  {
    field: 'tipoGestion',
    headerName: 'Tipo Gestión',
    width: 130,
    cellClassName: 'theme-grid'
  },
  {
    field: 'estadoNegocio',
    headerName: 'Estado Negocio',
    width: 130,
    cellClassName: 'theme-grid'
  },
  {
    field: 'canalDeSalida',
    headerName: 'Canal de salida',
    width: 130,
    cellClassName: 'theme-grid'
  },
  {
    field: 'cierre',
    headerName: 'Cierre',
    width: 130,
    cellClassName: 'theme-grid',
    renderCell: () => (
      <div>
        <Button>
          <IconChartPie />
        </Button>
      </div>
    )
  },
  {
    field: 'opciones',
    headerName: 'Opciones',
    width: 300,
    cellClassName: 'theme-grid',
    renderCell: () => (
      <Grid container spacing={1}>
        <Grid item>
          <Button size="small" variant="contained" onClick={() => prompt('Buscar Detalle')}>
            <IconSearch />
          </Button>
        </Grid>
        <Grid item>
          <Button size="small" variant="contained" onClick={() => prompt('mensajes')}>
            <IconMessage />
          </Button>
        </Grid>
        <Grid item>
          <Button size="small" variant="contained" onClick={() => prompt('mensajes')}>
            <IconCirclePlus />
          </Button>
        </Grid>
      </Grid>
    )
  }
];

const rows = [
  {
    id: 1,
    cliente: 'Snow',
    ejecutivo: 'Jon',
    contacto: 78537532313,
    fechaGestion: '20-03-2020',
    prodcuto: 'Producto',
    tipoGestion: 'Tipo Gestion',
    estadoNegocio: 'Aprobado',
    canalDeSalida: 'Whatstapp'
  },
  {
    id: 1,
    cliente: 'Snow',
    ejecutivo: 'Jon',
    contacto: 123123453,
    fechaGestion: '20-03-2020',
    prodcuto: 'Producto',
    tipoGestion: 'Tipo Gestion',
    estadoNegocio: 'Aprobado',
    canalDeSalida: 'Whatstapp'
  },
  {
    id: 1,
    cliente: 'Snow',
    ejecutivo: 'Jon',
    contacto: 569123456,
    fechaGestion: '20-03-2020',
    prodcuto: 'Producto',
    tipoGestion: 'Tipo Gestion',
    estadoNegocio: 'Aprobado',
    canalDeSalida: 'Whatstapp'
  },
  {
    id: 1,
    cliente: 'Danilo',
    ejecutivo: 'Juan',
    contacto: 569789456,
    fechaGestion: '20-03-2020',
    prodcuto: 'Producto',
    tipoGestion: 'Tipo Gestion',
    estadoNegocio: 'Aprobado',
    canalDeSalida: 'Whatstapp'
  },
  {
    id: 1,
    cliente: 'Andres',
    ejecutivo: 'Ismael',
    contacto: 569123456,
    fechaGestion: '20-03-2020',
    prodcuto: 'Producto',
    tipoGestion: 'Tipo Gestion',
    estadoNegocio: 'Aprobado',
    canalDeSalida: 'Whatstapp'
  },
  {
    id: 1,
    cliente: 'Snow',
    ejecutivo: 'Jon',
    contacto: 569753159,
    fechaGestion: '20-03-2020',
    prodcuto: 'Producto',
    tipoGestion: 'Tipo Gestion',
    estadoNegocio: 'Aprobado',
    canalDeSalida: 'Whatstapp'
  },
  {
    id: 1,
    cliente: 'Juan Perez',
    ejecutivo: 'Daniela Ortiz',
    contacto: 569145256,
    fechaGestion: '20-03-2020',
    prodcuto: 'Producto',
    tipoGestion: 'Tipo Gestion',
    estadoNegocio: 'Aprobado',
    canalDeSalida: 'SMS'
  },
  {
    id: 1,
    cliente: 'Snow',
    ejecutivo: 'Jon',
    contacto: 569789412,
    fechaGestion: '20-03-2020',
    prodcuto: 'Producto',
    tipoGestion: 'Tipo Gestion',
    estadoNegocio: 'Aprobado',
    canalDeSalida: 'Telefonica'
  },
  {
    id: 1,
    cliente: 'Snow',
    ejecutivo: 'Jon',
    contacto: 569784412,
    fechaGestion: '20-03-2020',
    prodcuto: 'Producto',
    tipoGestion: 'Tipo Gestion',
    estadoNegocio: 'Aprobado',
    canalDeSalida: 'Whatstapp'
  }
];

function CustomToolbar() {
  const theme = useTheme();
  return (
    <GridToolbarContainer style={{ marginBottom: 4 }}>
      <GridToolbarColumnsButton style={{ color: `${theme.palette.grey[500]}`, paddingRight: 4 }} />
      <GridToolbarFilterButton style={{ color: `${theme.palette.grey[500]}`, paddingRight: 4 }} />
      <GridToolbarDensitySelector style={{ color: `${theme.palette.grey[500]}`, paddingRight: 4 }} />
      <GridToolbarExport style={{ color: `${theme.palette.grey[500]}` }} />
    </GridToolbarContainer>
  );
}

export default function DataTable() {
  // const theme = useTheme();
  return (
    <div style={{ height: 600, width: '100%' }}>
      <Box
        sx={{
          height: 600,
          width: '100%',
          '& .theme-grid': {
            backgroundColor: '#c6e8c7'
          }
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: CustomToolbar
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 }
            }
          }}
        />
      </Box>
    </div>
  );
}
