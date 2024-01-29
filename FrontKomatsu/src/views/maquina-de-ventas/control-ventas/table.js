import * as React from 'react';

import Box from '@mui/material/Box';

import { DataGrid } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    total_registro: '19987456-6',
    registros_asignados: 'Empresa 1',
    fecha_registro: new Date('2023-01-15')
  },
  {
    id: 2,
    total_registro: '19987456-6',
    registros_asignados: 'Empresa 1',
    fecha_registro: new Date('2023-01-15')
  },
  {
    id: 3,
    total_registro: '19987456-6',
    registros_asignados: 'Empresa 1',
    fecha_registro: new Date('2023-01-15')
  },
  {
    id: 4,
    total_registro: '19987456-6',
    registros_asignados: 'Empresa 1',
    fecha_registro: new Date('2023-01-15')
  },
  {
    id: 5,
    total_registro: '19987456-6',
    registros_asignados: 'Empresa 1',
    fecha_registro: new Date('2023-01-15')
  }
];

const getDetailPanelContent = ({ row }) => <Box sx={{ p: 2 }}>{`Order #${row.id}`}</Box>;
const getDetailPanelHeight = () => 50;

export default function FullFeaturedCrudGrid() {
  const [detailPanelExpandedRowIds, setDetailPanelExpandedRowIds] = React.useState([]);

  const handleDetailPanelExpandedRowIdsChange = React.useCallback((newIds) => {
    setDetailPanelExpandedRowIds(newIds.length > 1 ? [newIds[newIds.length - 1]] : newIds);
  }, []);
  const columns = [
    {
      field: 'total_registro',
      headerName: 'Total registros',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
      flex: 5
    },
    {
      field: 'registros_asignados',
      headerName: 'Registros Asignados',
      width: 180,
      editable: true,
      flex: 5
    },
    {
      field: 'fecha_registro',
      headerName: 'Fecha registro',
      type: 'date',
      width: 220,
      editable: true,
      flex: 5
    }
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary'
        },
        '& .textPrimary': {
          color: 'text.primary'
        }
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getDetailPanelContent={getDetailPanelContent}
        getDetailPanelHeight={getDetailPanelHeight}
        detailPanelExpandedRowIds={detailPanelExpandedRowIds}
        onDetailPanelExpandedRowIdsChange={handleDetailPanelExpandedRowIdsChange}
      />
    </Box>
  );
}
