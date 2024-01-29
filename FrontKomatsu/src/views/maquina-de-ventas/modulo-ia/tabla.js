import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Icons
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import PowerIcon from '@mui/icons-material/Power';
//Fin Icons
import { GridRowModes, DataGrid, GridToolbarContainer, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useState } from 'react';

const initialRows = [
  {
    id: 1,
    productoSolicitado: 'John Doe',
    solicitante: '25',
    fecha: new Date('2023-01-15'),
    estado: 'Aprobado'
  },
  {
    id: 2,
    productoSolicitado: 'Proyecto 1',
    solicitante: 'Rjs156132',
    fecha: new Date('2023-01-25'),
    estado: 'Pendiente a revisión'
  },
  {
    id: 3,
    productoSolicitado: 'Proyecto 2',
    solicitante: '25',
    fecha: new Date('2023-02-15'),
    estado: '56965311048',
    autor: 'Rodrigo Alvarez',
    activa: 'activado'
  },
  {
    id: 4,
    productoSolicitado: 'Proyecto 3',
    solicitante: '41564',
    fecha: new Date('2023-03-01'),
    estado: '1564898465',
    autor: 'Rodrigo Alvarez',
    activa: 'activado'
  },
  {
    id: 5,
    productoSolicitado: 'Nombre 4',
    solicitante: 'alphanumeric789',
    fecha: new Date('2022-01-20'),
    estado: '54689843651',
    autor: 'Rodrigo Alvarez',
    activa: 'activado'
  }
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = Math.max(...initialRows.map((row) => row.id)) + 1;
    setRows((oldRows) => [...oldRows, { id, productoSolicitado: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'productoSolicitado' }
    }));
  };

  return (
    <GridToolbarContainer style={{ marginBottom: 3 }}>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Agregar nuevo
      </Button>
    </GridToolbarContainer>
  );
}

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
    { field: 'productoSolicitado', headerName: 'Producto Solicitado', width: 150, editable: true, flex: 5 },
    {
      field: 'solicitante',
      headerName: 'Solicitante',
      width: 150,
      editable: false,
      flex: 5
    },
    {
      field: 'fecha',
      headerName: 'Fecha',
      type: 'date',
      width: 150,
      editable: false,
      flex: 5
    },
    {
      field: 'estado',
      headerName: 'Estado',
      width: 150,
      editable: false,
      flex: 5
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      width: 150,
      flex: 5,
      cellClassName: 'actions',
      getActions: ({ id, productoSolicitado }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        const handleConectarClick = () => {
          setSelectedRow({ id, productoSolicitado });
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
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel }
        }}
      />

      {/* Ventana emergente para "Conectar" */}
      <Dialog open={openConectar} onClose={() => setOpenConectar(false)}>
        <DialogTitle>{`Conectar a ${selectedRow ? selectedRow.productoSolicitado : ''}`}</DialogTitle>
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
