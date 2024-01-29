import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
{
  /*GridActionsCellItem, GridToolbarContainer, GridRowEditStopReasons,GridRowModes*/
}
import { DataGrid } from '@mui/x-data-grid';

const initialRows = [
  {
    id: 1,
    total_registro: '150000',
    registros_asignados: '300',
    usuario: 'Diego Montenegro',
    fecha_registro: new Date('2023-05-16')
  },
  {
    id: 2,
    total_registro: '123159',
    registros_asignados: '450',
    usuario: 'Alejandro Paris',
    fecha_registro: new Date('2023-08-15')
  },
  {
    id: 3,
    total_registro: '502456',
    registros_asignados: '456',
    usuario: 'Martin del Prado',
    fecha_registro: new Date('2023-07-14')
  },
  {
    id: 4,
    total_registro: '301789',
    registros_asignados: '123',
    usuario: 'Antonio Peredo',
    fecha_registro: new Date('2023-09-15')
  },
  {
    id: 5,
    total_registro: '412378',
    registros_asignados: '789',
    usuario: 'Andrés Perez',
    fecha_registro: new Date('2023-02-15')
  }
];

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = Math.max(...initialRows.map((row) => row.id)) + 1;
//     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' }
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
  //   const [rows, setRows] = React.useState(initialRows);
  //   const [rowModesModel, setRowModesModel] = React.useState({});

  //   const handleRowEditStop = (params, event) => {
  //     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
  //       event.defaultMuiPrevented = true;
  //     }
  //   };

  // const handleEditClick = (id) => () => {
  //   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  // };

  // const handleSaveClick = (id) => () => {
  //   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  // };

  // const handleDeleteClick = (id) => () => {
  //   setRows(rows.filter((row) => row.id !== id));
  // };

  // const handleCancelClick = (id) => () => {
  //   setRowModesModel({
  //     ...rowModesModel,
  //     [id]: { mode: GridRowModes.View, ignoreModifications: true }
  //   });

  //   const editedRow = rows.find((row) => row.id === id);
  //   if (editedRow.isNew) {
  //     setRows(rows.filter((row) => row.id !== id));
  //   }
  // };

  // const processRowUpdate = (newRow) => {
  //   const updatedRow = { ...newRow, isNew: false };
  //   setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
  //   return updatedRow;
  // };

  // const handleRowModesModelChange = (newRowModesModel) => {
  //   setRowModesModel(newRowModesModel);
  // };

  const columns = [
    {
      field: 'total_registro',
      headerName: 'Total registros',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
      flex: 4
    },
    {
      field: 'registros_asignados',
      headerName: 'Registros Asignados',
      width: 180,
      editable: true,
      flex: 4
    },
    {
      field: 'usuario',
      headerName: 'Usuario',
      width: 180,
      editable: false,
      flex: 4
    },
    {
      field: 'fecha_registro',
      headerName: 'Fecha registro',
      type: 'date',
      width: 220,
      editable: true,
      flex: 4
    }
    // {
    //  field: 'actions',
    //  type: 'actions',
    //  headerName: 'Opciones',
    //  width: 100,
    // flex: 5
    // }
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
        rows={initialRows}
        columns={columns}
        // editMode="row"
        // rowModesModel={rowModesModel}
        // onRowModesModelChange={handleRowModesModelChange}
        // onRowEditStop={handleRowEditStop}
        // processRowUpdate={processRowUpdate}
        // slots={{
        //   toolbar: EditToolbar
        // }}
        // slotProps={{
        //   toolbar: { setRows, setRowModesModel }
        // }}
      />
    </Box>
  );
}
