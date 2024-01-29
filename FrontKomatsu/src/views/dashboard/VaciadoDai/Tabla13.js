import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

const EditWindow = ({ open, handleClose, value, handleSave }) => {
  const [editedValue, setEditedValue] = React.useState(value);

  const handleInputChange = (event) => {
    setEditedValue(event.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Editar Valor</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" label="Nuevo Valor" type="text" fullWidth value={editedValue} onChange={handleInputChange} />
        <Button onClick={() => handleSave(editedValue)} color="primary">
          Guardar
        </Button>
      </DialogContent>
    </Dialog>
  );
};

const SimpleTable = () => {
  const [editCell1, setEditCell1] = React.useState({ rowId: null, field: null });
  const [editWindowOpen1, setEditWindowOpen1] = React.useState(false);

  // Estados para la segunda tabla
  const [editCell2, setEditCell2] = React.useState({ rowId: null, field: null });
  const [editWindowOpen2, setEditWindowOpen2] = React.useState(false);

  // Estados para la tercera tabla
  const [editCell3, setEditCell3] = React.useState({ rowId: null, field: null });
  const [editWindowOpen3, setEditWindowOpen3] = React.useState(false);

  // Estados para la cuarta tabla
  const [editCell4, setEditCell4] = React.useState({ rowId: null, field: null });
  const [editWindowOpen4, setEditWindowOpen4] = React.useState(false);

  const handleEditWindowSaveGeneric = (data, editCell, setEditWindowOpen, setEditCell) => {
    const updatedData = [...data];
    const editedRow = updatedData.find((row) => row.id === editCell.rowId);
    editedRow[editCell.field] = editedValue; // Change 'newValue' to 'editedValue'
    // data.setState no es una función, si los datos son de solo lectura, deberías actualizarlos directamente
    // Por ejemplo, si 'data' es un estado, deberías hacer algo como setData(updatedData);
    setEditWindowOpen(false);
    setEditCell({ rowId: null, field: null });
  };

  const datosTabla1 = [{ id: 1, mes: 'Total Activo Circulante	 ', iva: '➕', tasa: '➕', ventames: '' }];

  const datosTabla2 = [
    { id: 2, mes2: ' Total Pasivo Circulante	 ', iva2: '➕', tasa2: '➕', ventames2: '' },
    { id: 3, mes2: ' Total Pasivo Exigible	 ', iva2: '➕', tasa2: '➕', ventames2: '' }
  ];

  const datosTabla3 = [{ id: 4, mes3: 'Patrimonio Neto	 ', iva3: '➕', tasa3: '➕', ventames3: '' }];
  const datosTabla4 = [
    { id: 5, mes4: 'Ventas Anuales	 ', iva4: '➕', tasa4: '➕', ventames4: '' },
    { id: 6, mes4: 'Utilidad	 ', iva4: '➕', tasa4: '➕', ventames4: '' },
    { id: 7, mes4: 'Depreciación del Ejercicio	 ', iva4: '➕', tasa4: '➕', ventames4: '' },
    { id: 8, mes4: 'Intereses Pagados	 ', iva4: '➕', tasa4: '➕', ventames4: '' }
  ];

  const columnsTabla1 = [
    { field: 'mes', headerName: ' Periodos', type: 'string', width: 300 },
    {
      field: 'iva',
      headerName: '',
      width: 300,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setEditCell({ rowId: params.id, field: 'iva' });
            setEditWindowOpen(true);
          }}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    {
      field: 'tasa',
      headerName: ' ',
      width: 300,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setEditCell1({ rowId: params.id, field: 'tasa' });
            setEditWindowOpen1(true);
          }}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    { field: 'ventames', headerName: 'Variacion ', type: 'number', width: 200 }
  ];

  const columnsTabla2 = [
    { field: 'mes2', headerName: ' Pasivo', type: 'string', width: 300 },
    {
      field: 'iva2',
      headerName: '',
      width: 300,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setEditCell2({ rowId: params.id, field: 'iva2' });
            setEditWindowOpen2(true);
          }}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    {
      field: 'tasa2',
      headerName: ' ',
      width: 300,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setEditCell2({ rowId: params.id, field: 'tasa2' });
            setEditWindowOpen2(true);
          }}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    { field: 'ventames2', headerName: 'Variacion ', type: 'number', width: 200 }
  ];
  const columnsTabla3 = [
    { field: 'mes3', headerName: 'Patrimonio', type: 'string', width: 300 },
    {
      field: 'iva3',
      headerName: '',
      width: 300,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setEditCell3({ rowId: params.id, field: 'iva3' });
            setEditWindowOpen3(true);
          }}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    {
      field: 'tasa3',
      headerName: ' ',
      width: 300,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setEditCell3({ rowId: params.id, field: 'tasa3' });
            setEditWindowOpen3(true);
          }}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    { field: 'ventames3', headerName: 'Variacion ', type: 'number', width: 200 }
  ];
  const columnsTabla4 = [
    { field: 'mes4', headerName: ' Estado de Resultados', type: 'string', width: 300 },
    {
      field: 'iva4',
      headerName: '',
      width: 300,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setEditCell4({ rowId: params.id, field: 'iva4' });
            setEditWindowOpen4(true);
          }}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    {
      field: 'tasa4',
      headerName: ' ',
      width: 300,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setEditCell4({ rowId: params.id, field: 'tasa4' });
            setEditWindowOpen4(true);
          }}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    { field: 'ventames4', headerName: 'Variacion ', type: 'number', width: 200 }
  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      {/* Primera tabla - Activos Circulantes */}
      <DataGrid
        rows={datosTabla1}
        columns={columnsTabla1}
        pageSize={5}
        localeText={localeText}
        onEditCellChange={(params) => {
          if (editCell1.rowId !== params.id || editCell1.field !== params.field) {
            setEditCell1({ rowId: null, field: null });
          }
        }}
        isCellEditable={(params) => editCell1.rowId === params.id && editCell1.field === params.field}
      />
      <EditWindow
        open={editWindowOpen1}
        handleClose={() => setEditWindowOpen1(false)}
        value={editCell1.field ? datosTabla1.find((row) => row.id === editCell1.rowId)[editCell1.field] : ''}
        handleSave={() => handleEditWindowSaveGeneric(datosTabla1, editCell1, setEditWindowOpen1, setEditCell1)}
      />

      <div style={{ flex: '1 1 auto', overflow: 'auto', marginBottom: '16px' }}>
        <DataGrid
          rows={datosTabla2}
          columns={columnsTabla2}
          pageSize={5}
          localeText={localeText}
          onEditCellChange={(params) => {
            if (editCell2.rowId !== params.id || editCell2.field !== params.field) {
              setEditCell2({ rowId: null, field: null });
            }
          }}
          isCellEditable={(params) => editCell2.rowId === params.id && editCell2.field === params.field}
        />
        <EditWindow
          open={editWindowOpen2}
          handleClose={() => setEditWindowOpen2(false)}
          value={editCell2.field ? datosTabla2.find((row) => row.id === editCell2.rowId)[editCell2.field] : ''}
          handleSave={() => handleEditWindowSaveGeneric(datosTabla2, editCell2, setEditWindowOpen2, setEditCell2)}
        />
      </div>

      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid
          rows={datosTabla3}
          columns={columnsTabla3}
          pageSize={5}
          localeText={localeText}
          onEditCellChange={(params) => {
            if (editCell3.rowId !== params.id || editCell3.field !== params.field) {
              setEditCell3({ rowId: null, field: null });
            }
          }}
          isCellEditable={(params) => editCell3.rowId === params.id && editCell3.field === params.field}
        />
        <EditWindow
          open={editWindowOpen3}
          handleClose={() => setEditWindowOpen3(false)}
          value={editCell3.field ? datosTabla3.find((row) => row.id === editCell3.rowId)[editCell3.field] : ''}
          handleSave={() => handleEditWindowSaveGeneric(datosTabla3, editCell3, setEditWindowOpen3, setEditCell3)}
        />
      </div>

      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid
          rows={datosTabla4}
          columns={columnsTabla4}
          pageSize={5}
          localeText={localeText}
          onEditCellChange={(params) => {
            if (editCell4.rowId !== params.id || editCell4.field !== params.field) {
              setEditCell4({ rowId: null, field: null });
            }
          }}
          isCellEditable={(params) => editCell4.rowId === params.id && editCell4.field === params.field}
        />
        <EditWindow
          open={editWindowOpen4}
          handleClose={() => setEditWindowOpen4(false)}
          value={editCell4.field ? datosTabla4.find((row) => row.id === editCell4.rowId)[editCell4.field] : ''}
          handleSave={() => handleEditWindowSaveGeneric(datosTabla4, editCell4, setEditWindowOpen4, setEditCell4)}
        />
      </div>
    </div>
  );
};

export default SimpleTable;
