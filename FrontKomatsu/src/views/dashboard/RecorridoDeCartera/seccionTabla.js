import * as React from 'react';
import {
  DataGrid,
  //GridToolbar,
  GridToolbarContainer,
  // GridToolbarColumnsButton,
  // GridToolbarFilterButton,
  GridToolbarExport
  // GridToolbarDensitySelector
} from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';

const columns = [
  // { field: 'id', headerName: 'ID', width: 70, cellClassName: 'theme-grid', hide: true },
  { field: 'canal', headerName: 'Canal', width: 130, cellClassName: 'theme-grid' },
  { field: 'asignado_mes', headerName: 'Asignado mes', width: 130, cellClassName: 'theme-grid' },
  { field: 'recorrido_mes', headerName: 'Recorrido mes', width: 130, cellClassName: 'theme-grid' },
  {
    field: 'veces',
    headerName: 'Veces',
    cellClassName: 'theme-grid',
    type: 'number',
    width: 130
  },
  {
    field: 'cobro_mes',
    headerName: 'Cobro mes',
    cellClassName: 'theme-grid',
    width: 130
  },
  {
    field: 'cobro_mes_porcentaje',
    headerName: 'Porcentajes Cobro /Asig mes (%)',
    width: 130,
    cellClassName: 'theme-grid',
    renderCell: (params) => (
      <div>
        <LinearProgress variant="determinate" value={params.value} />
        <div>{params.value}%</div>
      </div>
    )
  },
  {
    field: 'cobro_efectivo',
    headerName: 'Cobro efectivo',
    width: 130,
    cellClassName: 'theme-grid'
  },
  {
    field: 'cobro_efectivo_porcentaje',
    headerName: 'Cobro efectivo / % Cobro',
    width: 130,
    cellClassName: 'theme-grid',
    renderCell: (params) => (
      <div>
        <LinearProgress variant="determinate" value={params.value} />
        <div>{params.value}%</div>
      </div>
    )
  },
  {
    field: 'cobro_diario',
    headerName: 'Cobro diario)',
    width: 130,
    cellClassName: 'theme-grid'
  },
  {
    field: 'recorrido_diario',
    headerName: 'Recorrido Hoy',
    width: 130,
    cellClassName: 'theme-grid'
  },
  {
    field: 'cobro_diario_porcentaje',
    headerName: 'Cobro Hoy/ (%)Recorrido',
    width: 130,
    cellClassName: 'theme-grid',
    renderCell: (params) => (
      <div>
        <LinearProgress variant="determinate" value={params.value} />
        <div>{params.value}%</div>
      </div>
    )
  }
];

const rows = [
  {
    id: 1,
    canal: 'Whatsapp',
    recorrido_mes: '8000',
    asignado_mes: '890',
    veces: 10,
    cobro_mes: '490',
    cobro_mes_porcentaje: '90',
    cobro_efectivo: '400',
    cobro_efectivo_porcentaje: 90,
    cobro_diario: '1',
    recorrido_diario: '100',
    cobro_diario_porcentaje: '10'
  },
  {
    id: 2,
    canal: 'Sms',
    recorrido_mes: '8000',
    asignado_mes: '1500',
    veces: 6,
    cobro_mes: 1000,
    cobro_efectivo: '500',
    cobro_efectivo_porcentaje: 30,
    cobro_mes_porcentaje: '50',
    cobro_diario: '1',
    recorrido_diario: '100',
    cobro_diario_porcentaje: '10'
  },
  {
    id: 3,
    canal: 'Correo',
    recorrido_mes: '15000',
    asignado_mes: '6000',
    veces: 6,
    cobro_mes: '3000',
    cobro_efectivo: '1500',
    cobro_efectivo_porcentaje: 45,
    cobro_mes_porcentaje: '50',
    cobro_diario: '0',
    recorrido_diario: '0',
    cobro_diario_porcentaje: '0'
  }
];

function CustomToolbar() {
  const theme = useTheme();
  return (
    <GridToolbarContainer style={{ marginBottom: 4 }}>
      {/* <GridToolbarColumnsButton style={{ color: `${theme.palette.grey[500]}`, paddingRight: 4 }} />
      <GridToolbarFilterButton style={{ color: `${theme.palette.grey[500]}`, paddingRight: 4 }} />
      <GridToolbarDensitySelector style={{ color: `${theme.palette.grey[500]}`, paddingRight: 4 }} /> */}
      <GridToolbarExport style={{ color: `${theme.palette.grey[500]}` }} />
    </GridToolbarContainer>
  );
}

export default function DataTable() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <Box
        sx={{
          height: 'auto',
          width: '100%'
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
