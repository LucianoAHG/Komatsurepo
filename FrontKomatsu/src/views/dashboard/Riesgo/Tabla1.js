import * as React from 'react';
import { useState } from 'react'; // Import useState hook
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
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
  const [activosCirculantes, setActivosCirculantes] = useState([
    { id: 1, activoscirculantes: 'Disponible', fecha: '0', algo: '0', var: '0' },
    { id: 2, activoscirculantes: 'Depositos y Valores Negociables', fecha: '0', algo: '0', var: '0' },
    { id: 3, activoscirculantes: 'Documentos y cuentas por cobrar', fecha: '0', algo: '0', var: '0' },
    { id: 4, activoscirculantes: 'Documentos y cuentas por cobrar EERR', fecha: '0', algo: '0', var: '0' },
    { id: 5, activoscirculantes: 'Existencias', fecha: '0', algo: '0', var: '0' },
    { id: 6, activoscirculantes: 'Otros activos circulantes', fecha: '0', algo: '0', var: '0' },
    { id: 7, activoscirculantes: 'Total Activo Circulante', fecha: '0', algo: '0', var: '0' }

    // Más filas si es necesario
  ]);

  const [activosFijos, setActivosFijos] = useState([
    { id: 8, activosfijos: 'Bienes Raices', fecha: '0', algo: '0', var: '0' },
    { id: 9, activosfijos: 'Vehículos', fecha: '0', algo: '0', var: '0' },
    { id: 10, activosfijos: 'Maquinarias y Equipos', fecha: '0', algo: '0', var: '0' },
    { id: 11, activosfijos: 'Muebles y Utiles', fecha: '0', algo: '0', var: '0' },
    { id: 12, activosfijos: 'Otros activos fijos', fecha: '0', algo: '0', var: '0' },
    { id: 13, activosfijos: 'Depreciación Acumulada (Menos)', fecha: '0', algo: '0', var: '0' },
    { id: 14, activosfijos: 'Total Activo Fijo', fecha: '0', algo: '0', var: '0' }
  ]);

  const [activosPlazo, setActivosPlazo] = useState([
    { id: 15, activosplazo: 'Deudores de Largo Plazo', fecha: '0', algo: '0', var: '0' },
    { id: 16, activosplazo: 'Inversiones Empresas. Relac. y Otras', fecha: '0', algo: '0', var: '0' },
    { id: 17, activosplazo: 'Menor Valor Inversiones', fecha: '0', algo: '0', var: '0' },
    { id: 18, activosplazo: 'Mayor Valor Inversiones (Menos)', fecha: '0', algo: '0', var: '0' },
    { id: 19, activosplazo: 'Cuentas por Cobrar EERR', fecha: '0', algo: '0', var: '0' },
    { id: 20, activosplazo: 'Otros Activos de Largo Plazo', fecha: '0', algo: '0', var: '0' },
    { id: 21, activosplazo: 'Total Activos a largo Plazo', fecha: '0', algo: '0', var: '0' }
  ]);
  const generateRandomNumber = () => Math.floor(Math.random() * 100); // Helper function for random numbers

  const handleAddClick = (tableType) => {
    // Clone the current state of the table data based on the tableType
    let newTableData = [];
    let setNewTableData = null;

    switch (tableType) {
      case 'circulantes':
        newTableData = [...activosCirculantes];
        setNewTableData = setActivosCirculantes;
        break;
      case 'fijos':
        newTableData = [...activosFijos];
        setNewTableData = setActivosFijos;
        break;
      case 'plazo':
        newTableData = [...activosPlazo];
        setNewTableData = setActivosPlazo;
        break;
      default:
        break;
    }

    // Add a new row with random numeric data
    newTableData.push({
      id: newTableData.length + 1,
      activoscirculantes: `Nuevo Activo ${newTableData.length + 1}`,
      fecha: generateRandomNumber(),
      algo: generateRandomNumber(),
      var: generateRandomNumber()
    });

    // Update the state with the new data
    setNewTableData(newTableData);
  };

  const columnsCirculantes = [
    { field: 'activoscirculantes', headerName: 'Activos Circulantes', type: 'string', width: 300 },
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
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },

    { field: 'fecha', headerName: '', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },

    {
      field: 'fecha3',
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
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    { field: 'algo', headerName: ' ', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
    { field: 'var', headerName: 'Var', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` }
  ];

  // Columnas de la tabla para activos fijos
  const columnsFijos = [
    { field: 'activosfijos', headerName: 'Activos Fijos', type: 'string', width: 300 },
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
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },

    { field: 'fecha', headerName: '', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },

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
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },

    { field: 'var', headerName: 'Var', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` }
  ];

  const columnsPlazo = [
    { field: 'activosplazo', headerName: 'Activos Largo Plazo', type: 'string', width: 300 },
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
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },

    { field: 'fecha', headerName: '', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
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
            cursor: 'pointer'
          }}
        >
          <AddIcon />
        </Button>
      )
    },
    { field: 'algo', headerName: '', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` },
    { field: 'var', headerName: 'Var', type: 'number', width: 200, valueFormatter: ({ value }) => `${value}%` }
  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <div style={{ flex: '1 1 auto', overflow: 'auto', marginBottom: '16px' }}>
        <DataGrid rows={activosCirculantes} columns={columnsCirculantes} pageSize={5} />
        <Modal open={isModalOpen} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              p: 2
            }}
          >
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

      <div style={{ flex: '1 1 auto', overflow: 'auto', marginBottom: '16px' }}>
        {/* Add onClick handlers for each button to indicate the table type */}
        <Button onClick={() => handleAddClick('circulantes')}>Add Row</Button>
        <DataGrid rows={activosCirculantes} columns={columnsCirculantes} pageSize={5} />
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
