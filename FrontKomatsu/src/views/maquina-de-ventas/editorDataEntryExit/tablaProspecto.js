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
//Import Proyects
import Switch from './swtich';

const initialRows = [
  {
    id: 1,
    etiqueta: 'John Doe',
    campo: '{TBL_PROSPECTO_CHAT_WSP:NOMBRE}'
  },
  {
    id: 2,
    etiqueta: 'Apellido',
    campo: '{TBL_PROSPECTO_CHAT_WSP:APELLIDO}'
  },
  {
    id: 3,
    etiqueta: 'Correo',
    campo: '{TBL_PROSPECTO_CHAT_WSP:CORREO}'
  },
  {
    id: 4,
    etiqueta: 'Telefono',
    campo: '{TBL_PROSPECTO_CHAT_WSP:TELEFONO}'
  },
  {
    id: 5,
    etiqueta: 'Nacionalidad',
    campo: '{TBL_PROSPECTO_CHAT_WSP:NACIONALIDAD}'
  }
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = Math.max(...initialRows.map((row) => row.id)) + 1;
    setRows((oldRows) => [...oldRows, { id, etiqueta: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'etiqueta' }
    }));
  };

  return (
    <GridToolbarContainer style={{ margin: 2, marginBottom: 3 }}>
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleClick}>
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
    { field: 'etiqueta', headerName: 'Etiqueta', width: 150, editable: true, flex: 4 },
    {
      field: 'campo',
      headerName: 'Campo',
      width: 150,
      editable: false,
      flex: 4
    },

    {
      field: 'activar/desactivar',
      headerName: 'Activar/Desactivar',
      width: 150,
      editable: false,
      flex: 3,
      align: 'center',
      headerAlign: 'center',
      renderCell: () => <Switch />
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      width: 150,
      flex: 4,
      cellClassName: 'actions',
      getActions: ({ id, etiqueta }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        const handleConectarClick = () => {
          setSelectedRow({ id, etiqueta });
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
        <DialogTitle>{`Conectar a ${selectedRow ? selectedRow.etiqueta : ''}`}</DialogTitle>
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
