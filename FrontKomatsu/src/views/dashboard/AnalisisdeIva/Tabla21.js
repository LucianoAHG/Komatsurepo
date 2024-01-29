import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button'; // Import Button component
import AddIcon from '@mui/icons-material/Add'; 
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const SimpleTable = () => {

  const [isModalOpen, setModalOpen] = React.useState(false);
  const [editedCellValue, setEditedCellValue] = React.useState('');

  const handleButtonClick = (cellValue) => {
    setEditedCellValue(cellValue);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    // Agrega la lógica para guardar el valor actualizado de la celda aquí
    console.log('Valor actualizado:', editedCellValue);
    setModalOpen(false);
  };
  // Datos de ejemplo
  const activosCirculantes = [
    { id: 1, pasivoscirculantes: 'Deuda Bancaria Corto Plazo', fecha: '0', algo: '0', var: '0' },
  { id: 2, pasivoscirculantes: 'Porción Corriente de Largo Plazo', fecha: '0', algo: '0', var: '0' },
  { id: 3, pasivoscirculantes: 'Documentos y Cuentas por Pagar', fecha: '0', algo: '0', var: '0' },
  { id: 4, pasivoscirculantes: 'Cuentas por Pagar EERR', fecha: '0', algo: '0', var: '0' },
  { id: 5, pasivoscirculantes: 'Impuestos y Previsión por Pagar', fecha: '0', algo: '0', var: '0' },
  { id: 6, pasivoscirculantes: 'Otros Pasivos Circulantes', fecha: '0', algo: '0', var: '0' },
  { id: 7, pasivoscirculantes: 'Total Pasivo Circulante', fecha: '0', algo: '0', var: '0' },
   
    // Más filas si es necesario
  ];

  const activosFijos = [
    { id: 8, pasivoslargoplazo: 'Deuda Bancaria de Largo Plazo', fecha: '0', algo: '0', var: '0' },
    { id: 9, pasivoslargoplazo: 'Documentos por Pagar de Largo Plazo', fecha: '0', algo: '0', var: '0' },
    { id: 10, pasivoslargoplazo: 'Cuentas por Pagar EERR', fecha: '0', algo: '0', var: '0' },
    { id: 11, pasivoslargoplazo: 'Cuadratura Deuda Socofin', fecha: '0', algo: '0', var: '0' },
    { id: 12, pasivoslargoplazo: 'Otros pasivos largo plazo', fecha: '0', algo: '0', var: '0' },
    { id: 13, pasivoslargoplazo: 'Total Pasivo Largo Plazos', fecha: '0', algo: '0', var: '0' },
    { id: 14, pasivoslargoplazo: 'Total Pasivo Exigible', fecha: '0', algo: '0', var: '0' },
  ];

  const activosPlazo = [
    { id: 15, patrimonio: 'Capital pagado' , fecha: '0' , algo: '0', var:'0' },
    { id: 16,patrimonio: 'Revalor. Capital Propio y Reservas' , fecha: '0' , algo: '0', var:'0' },
    { id: 17,patrimonio: 'Utilidad (Pérdida) Acumulada' , fecha: '0' , algo: '0', var:'0' },
    { id: 18,patrimonio: 'Utilidad (Pérdida) del Ejercicio' , fecha: '0' , algo: '0', var:'0' },
    { id: 19,patrimonio: 'Divid. Provisorios./Ctas.Ctes. Socios' , fecha: '0' , algo: '0', var:'0' },
    { id: 20,patrimonio: 'Cuadratura Deuda Socofin (-)' , fecha: '0' , algo: '0', var:'0' },
    { id: 21,patrimonio: 'Retasación Técnica Activo Fijo' , fecha: '0' , algo: '0', var:'0' },
    { id: 22,patrimonio: 'Ajustes Patrimoniales (Menos)' , fecha: '0' , algo: '0', var:'0' },
    { id: 23,patrimonio: 'Total Patrimonio	' , fecha: '0' , algo: '0', var:'0' },
    { id: 24,patrimonio: 'TOTAL PASIVOS MAS PATRIMONIO' , fecha: '0' , algo: '0', var:'0' },


  
  ];


  // Columnas de la tabla para activos circulantes
  const columnsCirculantes = [
    { field: 'pasivoscirculantes', headerName: 'Pasivos Circulantes', type: 'string', width: 300 },
    {
      field: 'fecha2',
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <Button
          onClick={() => handleButtonClick(params.value)}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer',
          }}
        >
          <AddIcon />
        </Button>
      ),
    },
    
    { field: 'fecha', headerName: 'Fecha', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
    {
      field: 'fecha2',
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <Button
          onClick={() => handleButtonClick(params.value)}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer',
          }}
        >
          <AddIcon />
        </Button>
      ),
    },
    
    { field: 'algo', headerName: 'Algo', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
    { field: 'var', headerName: 'Var', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
  ];

  // Columnas de la tabla para activos fijos
  const columnsFijos = [
    { field: 'pasivoslargoplazo', headerName: 'Pasivos a Largo Plazo', type: 'string', width: 300 },
    {
      field: 'fecha2',
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <Button
          onClick={() => handleButtonClick(params.value)}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer',
          }}
        >
          <AddIcon />
        </Button>
      ),
    },
    
    { field: 'fecha', headerName: 'Fecha', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
    {
      field: 'fecha2',
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <Button
          onClick={() => handleButtonClick(params.value)}
          style={{
            borderRadius: '0',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            color: '#1976D2',
            cursor: 'pointer',
          }}
        >
          <AddIcon />
        </Button>
      ),
    },
    
    { field: 'algo', headerName: 'Algo', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
    { field: 'var', headerName: 'Var', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
  ];
const columnsPlazo =[
  { field: 'patrimonio', headerName: 'Patrimonio', type: 'string', width: 300 },
  {
    field: 'fecha2',
    headerName: '',
    width: 100,
    renderCell: (params) => (
      <Button
        onClick={() => handleButtonClick(params.value)}
        style={{
          borderRadius: '0',
          border: 'none',
          padding: '0',
          backgroundColor: 'transparent',
          color: '#1976D2',
          cursor: 'pointer',
        }}
      >
        <AddIcon />
      </Button>
    ),
  },
  
    { field: 'fecha', headerName: 'Fecha', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
    {
      field: 'fecha2',
      headerName: '',
      width: 100,
      renderCell: (params) => (
          <Button
            onClick={() => handleButtonClick(params.value)}
            style={{
              borderRadius: '0',
              border: 'none',
              padding: '0',
              backgroundColor: 'transparent',
              color: '#1976D2',
              cursor: 'pointer',
            }}
          >
            <AddIcon />
          </Button>
      ),
    },
    
    { field: 'algo', headerName: 'Algo', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
    { field: 'var', headerName: 'Var', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
]





  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      {/* Primera tabla - Activos Circulantes */}
      <div style={{ flex: '1 1 auto', overflow: 'auto', marginBottom: '16px' }}>
        <DataGrid rows={activosCirculantes} columns={columnsCirculantes} pageSize={5} localeText={localeText} />
        <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', p: 2 }}>
          <TextField
            label="Editar valor"
            variant="outlined"
            fullWidth
            value={editedCellValue}
            onChange={(e) => setEditedCellValue(e.target.value)}
          />
          <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
            Guardar
          </Button>
        </Box>
      </Modal>
      </div>
  
      {/* Segunda tabla - Activos Fijos */}
      <div style={{ flex: '1 1 auto', overflow: 'auto', marginBottom: '16px' }}>
        <DataGrid rows={activosFijos} columns={columnsFijos} pageSize={5} localeText={localeText} />
      </div>
  
      {/* Tercera tabla - Activos a Plazo */}
      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid rows={activosPlazo} columns={columnsPlazo} pageSize={5} localeText={localeText} />
      </div>
    </div>
  );
};

export default SimpleTable;
