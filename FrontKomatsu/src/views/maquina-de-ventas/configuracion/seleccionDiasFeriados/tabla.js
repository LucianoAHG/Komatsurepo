import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// //import Icons
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PowerIcon from '@mui/icons-material/Power';
//Fin Icons
import { DataGrid } from '@mui/x-data-grid';
// import { useState } from 'react';

//import dialog
// import AgregarCanal from './agregarCanal';
// import AsignarProducto from './asignarProducto';
// import ListTransfer from './listTransfer';

const initialRows = [
  {
    id: 1,
    fecha: new Date('2023-01-15'),
    feriado: '25',
    activa: 'activa'
  },
  {
    id: 2,
    fecha: new Date('2023-01-25'),
    feriado: '14',
    activa: 'activado'
  },
  {
    id: 3,
    fecha: new Date('2023-02-15'),
    feriado: '25',
    activa: 'Inactiva'
  },
  {
    id: 4,
    fecha: new Date('2023-02-15'),
    feriado: '25',
    activa: 'activado'
  },
  {
    id: 5,
    fecha: new Date('2023-02-15'),
    feriado: '28',
    activa: 'activado'
  }
];

export default function DiasFeriados() {
  const columns = [
    { field: 'fecha', type: 'date', headerName: 'Fecha', width: 150, editable: true, flex: 7 },
    {
      field: 'feriado',
      headerName: 'Feriado',
      width: 150,
      editable: true,
      flex: 7
    },

    {
      field: 'activa',
      headerName: 'Activa',
      width: 150,
      editable: false,
      flex: 7
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      width: 150,
      flex: 7,
      cellClassName: 'actions',
      getActions: () => {
        const actions = [<AddCircleIcon key="add" />, <PowerIcon key="power" />];

        return actions;
      }
    }
  ];

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        '& .actions': {
          color: 'text.secondary'
        },
        '& .textPrimary': {
          color: 'text.primary'
        }
      }}
    >
      <DataGrid autoHeight rows={initialRows} columns={columns} editMode="row" />
    </Box>
  );
}
