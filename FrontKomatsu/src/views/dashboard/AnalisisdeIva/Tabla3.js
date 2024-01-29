import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BiError } from "react-icons/bi";


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
  
  const ErrorIcon  = ({ value, color }) => (
    <div style={{ color: color }}>{value === '⚠️' ? <BiError /> : ''}</div>
 
    );

  const datosTabla1 = [
    { id:1, analisis: 'K de Trabajo' , fecha: '⚠️', algo: '%', cosa: '⚠️'},
    { id:2, analisis: 'Kp sobre Pat.', fecha: '⚠️', algo: '%', cosa: '⚠️' },
    { id:3, analisis: ' Ut. Acum. sobre Pat.', fecha: '⚠️', algo: '%', cosa: '⚠️' },
    { id:4, analisis: ' Retiros sobre Ut. Ej.', fecha: '⚠️', algo: '%', cosa: '⚠️' }
  ];
  const datosTabla2 = [
    { id:5,analisis2: 'Activo - Pasivo',  fecha2: '⚠️', algo2: '%', cosa2: '⚠️' },
    { id:6,analisis2: 'Utilidad Balance General',  fecha2: '⚠️', algo2: '%', cosa2: '⚠️' },
    { id:7,analisis2: 'Utilidad Estado de Resultado', fecha2: '⚠️', algo2: '%', cosa2: '⚠️' },
    { id:8,analisis2: '	Diferencia',  fecha2: '⚠️', algo2: '%', cosa2: '⚠️' },
  ];
  const datosTabla3 = [
    { id:1, analisis3: 'K de Trabajo' , fecha5: '⚠️', algo5: '%', cosa5: '⚠️'},
    { id:2, analisis3: 'Kp sobre Pat.', fecha5: '⚠️', algo5: '%', cosa5: '⚠️' },
    { id:3, analisis3: ' Ut. Acum. sobre Pat.', fecha5: '⚠️', algo5: '%', cosa5: '⚠️' },
    { id:4, analisis3: ' Retiros sobre Ut. Ej.', fecha5: '⚠️', algo5: '%', cosa5: '⚠️' }
  ];

  const datosTabla4 = [
    { id:5,analisis4: 'Activo - Pasivo',  fecha6: '⚠️', algo6: '%', cosa6: '⚠️' },
    { id:6,analisis4: 'Utilidad Balance General',  fecha6: '⚠️', algo6: '%', cosa6: '⚠️' },
    { id:7,analisis4: 'Utilidad Estado de Resultado', fecha6: '⚠️', algo6: '%', cosa6: '⚠️' },
    { id:8,analisis4: '	Diferencia',  fecha6: '⚠️', algo2: '%', cosa6: '⚠️' },
  ];
  const datosTabla5 = [
    { id:9,porcion: 'Porcion Corriente Largo Plazo' , cuadratura: '➕', deuda: '', cosa3: '➕' },
    {id:10,porcion: 'Cuadratura Deuda Socofin' , cuadratura: '➕', deuda: '', cosa3: '➕' },
    { id:11,porcion: 'Cuadratura Deuda Socofin (-)' , cuadratura: '➕', deuda: '', cosa3: '➕' },
    
  ];

  const datosTabla6 = [
    {id:13, porcion2: 'Porción Corriente de Largo Plazo',  documentos: '➕', algo4: '- ', cosa4: '➕', },
    {id:14, porcion2: 'Documentos por Pagar de Largo Plazo',  documentos: '➕', algo4: ' -', cosa4: '➕', },
    {id:15, porcion2: 'Otros activos fijos',  documentos: '➕', algo4: ' -', cosa4: '➕', },
  ];

  //Columnas de la tabla para activos circulantes
  const columnsTabla1 = [
    { field: 'analisis', headerName: '', type: 'string', width: 200 },
    { field: 'fecha', headerName: ' ', type: 'string', width: 200 , renderCell: (params) => <ErrorIcon value={params.value} color="#0D70C9" />},
   
    { field: 'algo', headerName: '%', type: 'number', width: 100 },
    {
      field: 'cosa',
      headerName: 'Var %',
      type: 'number',
      width: 100,
      renderCell: (params) => <ErrorIcon value={params.value} color="#0D70C9" />
         },
  ];
  

  const columnsTabla2 = [
    { field: 'analisis2', headerName: 'Verificacion', type: 'string', width: 200 },
    { field: 'fecha', headerName: '', type: 'number', width: 100, renderCell: (params) => <ErrorIcon value={params.value} color="#0D70C9" /> },
    { field: 'algo', headerName: '', type: 'number', width: 100 },
    { field: 'cosa2', headerName: 'Var', type: 'number', width: 100, renderCell: (params) => <ErrorIcon value={params.value} color="#0D70C9" /> },
  ];

  const columnsTabla3 = [
    { field: 'analisis3', headerName: 'SOCOFIN', type: 'string', width: 200 },
    { field: 'fecha5', headerName: '', type: 'number', width: 100, renderCell: (params) => <ErrorIcon value={params.value} color="#0D70C9" /> },
    { field: 'algo5', headerName: '', type: 'number', width: 100 },
    { field: 'cosa5', headerName: 'Var', type: 'number', width: 100 , renderCell: (params) => <ErrorIcon value={params.value} color="#0D70C9" />},
  ];

  const columnsTabla4 = [
    { field: 'analisis4', headerName: 'DICOM LEASING', type: 'string', width: 200 },
    { field: 'afecha6', headerName: ' ', type: 'string', width: 200 , renderCell: (params) => <ErrorIcon value={params.value} color="#0D70C9" />},
    { field: 'algo6', headerName: '%', type: 'number', width: 100 },
    { field: 'cosa6', headerName: 'Var %', type: 'number', width: 100, renderCell: (params) => <ErrorIcon value={params.value} color="#0D70C9" /> },
  ];
  const columnsTabla5 = [
    { field: 'porcion', headerName: ' ', type: 'string', width: 200 },
    {
      field: 'documentos',
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
   
    { field: 'algo4', headerName: '', type: 'number', width: 100 },

    {
      field: 'cosa4',
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
  ];
  const columnsTabla6 = [
    { field: 'porcion2', headerName: ' ', type: 'string', width: 200 },
    {
      field: 'documentos',
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
   
    { field: 'algo4', headerName: '', type: 'number', width: 100 },

    {
      field: 'cosa4',
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
  ];
 
  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '300vh', width: '100%' }}>
      {/* Tabla 1 */}
      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid rows={datosTabla1} columns={columnsTabla1} pageSize={7} localeText={localeText} />
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

      {/* Tabla 2 */}
      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid rows={datosTabla2} columns={columnsTabla2} pageSize={5} localeText={localeText} />
      </div>

      {/* Tabla 3 */}
      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid rows={datosTabla3} columns={columnsTabla3} pageSize={5} localeText={localeText} />
      </div>

      {/* Tabla 4 */}
      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid rows={datosTabla4} columns={columnsTabla4} pageSize={5} localeText={localeText} />
      </div>
      {/* Tabla 5 */}
      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid rows={datosTabla5} columns={columnsTabla5} pageSize={5} localeText={localeText} />
      </div>
      {/* Tabla 6 */}
      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid rows={datosTabla6} columns={columnsTabla6} pageSize={5} localeText={localeText} />
      </div>

    </div>
  );
};

export default SimpleTable;