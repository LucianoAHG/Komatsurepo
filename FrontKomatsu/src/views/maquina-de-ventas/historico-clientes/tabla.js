import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { GridRowModes, DataGrid, GridToolbarContainer, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';

const initialRows = [
  {
    id: 1,
    dni: '19987456-6',
    razon_social: 'Nissan',
    fecha_creacion: new Date('2023-01-15')
  },
  {
    id: 2,
    dni: '16456123-k',
    razon_social: 'Santander',
    fecha_creacion: new Date('2022-11-20')
  },
  {
    id: 3,
    dni: '16626154-6',
    razon_social: 'RedCapital',
    fecha_creacion: new Date('2023-02-10')
  },
  {
    id: 4,
    dni: '14523012-0',
    razon_social: 'Petroamerica',
    fecha_creacion: new Date('2023-03-05')
  },
  {
    id: 5,
    dni: 'Penta',
    razon_social: 23,
    fecha_creacion: new Date('2022-12-18')
  }
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = Math.max(...initialRows.map((row) => row.id)) + 1;
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' }
    }));
  };

  return (
    <GridToolbarContainer style={{ margin: 3 }}>
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Agregar nuevo
      </Button>
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

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
    //{ field: 'name', headerName: 'Nombre', width: 180, editable: true, flex: 5 },
    {
      field: 'dni',
      headerName: 'DNI',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
      flex: 5
    },
    {
      field: 'razon_social',
      headerName: 'Razón Social',
      width: 180,
      editable: true,
      flex: 5
    },
    {
      field: 'fecha_creacion',
      headerName: 'Fecha Creación',
      type: 'date',
      width: 220,
      editable: true,
      flex: 5
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Opciones',
      width: 100,
      flex: 5,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
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
          ];
        }

        return [
          <GridActionsCellItem
            key={`action-${id}`}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem key={`action-${id}`} icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(id)} color="inherit" />
        ];
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
    </Box>
  );
}
