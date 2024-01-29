import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridRowModes, GridRowEditStopReasons } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

const initialRows = [
  {
    id: 1,
    canal: 'Whatsapp',
    enero: 0,
    febrero: 0,
    marzo: '0',
    abril: '0',
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  },
  {
    id: 2,
    canal: 'Whatsapp',
    enero: 0,
    febrero: 0,
    marzo: '0',
    abril: '0',
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  },
  {
    id: 3,
    canal: 'Whatsapp',
    enero: 0,
    febrero: 0,
    marzo: '0',
    abril: '0',
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  },
  {
    id: 4,
    canal: 'Whatsapp',
    enero: 0,
    febrero: 0,
    marzo: '0',
    abril: '0',
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  },
  {
    id: 5,
    canal: 'Whatsapp',
    enero: 0,
    febrero: 0,
    marzo: '0',
    abril: '0',
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  }
];

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
    { field: 'canal', headerName: 'Canal', width: 100, editable: false },
    {
      field: 'enero',
      headerName: 'Enero',
      type: 'number',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'febrero',
      headerName: 'Febrero',
      type: 'number',
      align: 'left',
      width: 100,
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'marzo',
      headerName: 'Marzo',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'abril',
      headerName: 'Abril',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'mayo',
      headerName: 'Mayo',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'junio',
      headerName: 'Junio',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'julio',
      headerName: 'Julio',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'agosto',
      headerName: 'Agosto',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'septiembre',
      headerName: 'Septiembre',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'octubre',
      headerName: 'Octubre',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'noviembre',
      headerName: 'Noviembre',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'diciembre',
      headerName: 'Diciembre',
      width: 100,
      type: 'number',
      align: 'left',
      editable: true,
      renderCell: (params) => (
        <Button onClick={handleEditClick(params.id)} variant="outlined" color="info" style={{ width: '100%' }}>
          {params.value}
        </Button>
      )
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Opciones',
      width: 100,
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
        rowClassName={(params) => (params.row.isNew ? 'newRowStyle' : '')}
      />
    </Box>
  );
}
