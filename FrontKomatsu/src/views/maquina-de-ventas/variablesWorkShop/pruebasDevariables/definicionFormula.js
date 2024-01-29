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
    nombre: 'Subgerente de Operaciones'
  },
  {
    id: 2,
    nombre: 'Subgerente Comercial'
  },
  {
    id: 3,
    nombre: 'Jefe de desarrollo'
  },
  {
    id: 4,
    nombre: 'Gerente de Negocios'
  },
  {
    id: 5,
    nombre: 'Encargado Contabilidad'
  }
];

export default function TablaDefinicionFormula() {
  const columns = [
    { field: 'nombre', headerName: 'nombre', width: 150, editable: true, flex: 6 },
    { field: 'tipo_persona', headerName: 'Tipo Persona', width: 150, editable: true, flex: 6 },
    { field: 'creada', headerName: 'Creada', width: 150, type: 'date', editable: true, flex: 6 },
    { field: 'probada', headerName: 'Probada', width: 150, editable: true, flex: 6 },
    { field: 'activa', headerName: 'Activa', width: 150, editable: true, flex: 6 },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      width: 150,
      flex: 6,
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
      <DataGrid autoHeight rows={initialRows} columns={columns} disableColumnMenu disableColumnSelector disableColumnReorder />
    </Box>
  );
}
