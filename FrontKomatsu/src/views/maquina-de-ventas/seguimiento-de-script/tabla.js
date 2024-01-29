import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Icons
// import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import PowerIcon from '@mui/icons-material/Power';
//Fin Icons
import { GridRowModes, DataGrid, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useState } from 'react';

const initialRows = [
  {
    id: 1,
    nombre: 'John Doe',
    codigo: '12465',
    creada: new Date('2023-01-15'),
    telefono: 'Whatsapp',
    autor: 'Rodrigo Alvarez',
    campaña: 'Si',
    activa: 'Activa'
  },
  {
    id: 2,
    nombre: 'Proyecto 1',
    codigo: '12465',
    creada: new Date('2023-01-15'),
    telefono: 'Whatsapp',
    autor: 'Rodrigo Alvarez',
    campaña: 'Si',
    activa: 'Activa'
  },
  {
    id: 3,
    nombre: 'Proyecto 2',
    codigo: '12465',
    creada: new Date('2023-01-15'),
    telefono: 'Whatsapp',
    autor: 'Rodrigo Alvarez',
    campaña: 'Si',
    activa: 'Activa'
  },
  {
    id: 4,
    nombre: 'Proyecto 3',
    codigo: '12465',
    creada: new Date('2023-01-15'),
    telefono: 'Whatsapp',
    autor: 'Rodrigo Alvarez',
    campaña: 'Si',
    activa: 'Activa'
  },
  {
    id: 5,
    nombre: 'Nombre 4',
    codigo: '12465',
    creada: new Date('2023-01-15'),
    telefono: 'Whatsapp',
    autor: 'Rodrigo Alvarez',
    campaña: 'Si',
    activa: 'Activa'
  }
];

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = Math.max(...initialRows.map((row) => row.id)) + 1;
//     setRows((oldRows) => [...oldRows, { id, nombre: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'nombre' }
//     }));
//   };

//   return (
//     <GridToolbarContainer style={{ marginBottom: 3 }}>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Agregar nuevo
//       </Button>
//     </GridToolbarContainer>
//   );
// }

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [openConectar, setOpenConectar] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'nombre', headerName: 'Nombre', width: 150, editable: true, flex: 10 },
    {
      field: 'codigo',
      headerName: 'Codigo',
      width: 150,
      editable: false,
      flex: 10
    },
    {
      field: 'creada',
      headerName: 'Creada',
      type: 'date',
      width: 150,
      editable: false,
      flex: 10
    },

    {
      field: 'telefono',
      headerName: 'Telefono',
      width: 150,
      editable: false,
      flex: 10
    },
    {
      field: 'autor',
      headerName: 'Autor',
      width: 150,
      editable: false,
      flex: 10
    },

    {
      field: 'activa',
      headerName: 'Activa',
      width: 150,
      editable: false,
      flex: 10
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      width: 150,
      flex: 10,
      cellClassName: 'actions',
      getActions: ({ id, nombre }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        const handleConectarClick = () => {
          setSelectedRow({ id, nombre });
          setOpenConectar(true);
        };

        const actions = [
          // Otras acciones existentes...

          <GridActionsCellItem
            key={`action-${id}`}
            icon={<PowerIcon />}
            label="Conectar"
            className="textPrimary"
            onClick={handleConectarClick}
            color="inherit"
          />
        ];

        if (isInEditMode) {
          actions.push(
            <GridActionsCellItem
              key={`action-${id}`}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main'
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={`action-${id}`}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          );
        } else {
          actions.push(
            <GridActionsCellItem
              key={`action-${id}`}
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              key={`action-${id}`}
              icon={<DeleteIcon />}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />
          );
        }

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
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        //slots={{
        //  toolbar: EditToolbar
        //}}
        slotProps={{
          toolbar: { setRows, setRowModesModel }
        }}
      />

      {/* Ventana emergente para "Conectar" */}
      <Dialog open={openConectar} onClose={() => setOpenConectar(false)}>
        <DialogTitle>{`Conectar a ${selectedRow ? selectedRow.nombre : ''}`}</DialogTitle>
        <DialogContent>
          {/* Aquí puedes agregar los campos para conectar */}

          {/* Fin de Agregar Campos */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConectar(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => setOpenConectar(false)} color="primary">
            Conectar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
