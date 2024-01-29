import * as React from 'react';
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


  const datosTabla1 = [
    { id:1,mes: 'Enero	 ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    {id:2, mes: 'Febrero	 ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    { id:3, mes: 'Marzo	 ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    {id:4, mes: 'Abril	 ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    {id:5, mes: 'Mayo	 ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    {id:6, mes: 'Junio ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    {id:7, mes: 'Julio ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    { id:8,mes: 'Agosto	 ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    { id:9,mes: 'Septiembre	 ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    {id:10, mes: 'Octubre	 ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    {id:11, mes: 'Noviembre	 ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },
    {id:12, mes: 'Diciembre ' , iva: '', tasa:'0%',ventames: '0', ventasexe:'19%', totalventas: '0' },

  ];
  const datosTabla2 = [
    {id:13, mes2: 'Enero	 ' , iva2: '', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    { id: 14,mes2: 'Febrero	 ' , iva2: '', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    { id:15,mes2: 'Marzo	 ' , iva2: '', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    { id:16,mes2: 'Abril	 ' , iva2: '', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    { id:17,mes2: 'Mayo	 ' , iva2: '', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    { id:18,mes2: 'Junio ' , iva2: '➕', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    { id:19,mes2: 'Julio ' , iva2: '➕', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    { id:20,mes2: 'Agosto	 ' , iva2: '➕', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    { id:21,mes2: 'Septiembre	 ' , iva2: '➕', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    {id:22, mes2: 'Octubre	 ' , iva2: '➕', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    { id:23,mes2: 'Noviembre	 ' , iva2: '➕', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
    {id:24, mes2: 'Diciembre ' , iva2: '➕', tasa2:'0%',ventames2: '0', ventasexe2:'19%', totalventas2: '0' },
  ];
  const datosTabla3 = [
    { id:25,mes3: 'Enero	 ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    { id:26,mes3: 'Febrero	 ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    { id:27,mes3: 'Marzo	 ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    { id:28,mes3: 'Abril	 ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    { id:29,mes3: 'Mayo	 ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    {id:30, mes3: 'Junio ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    {id:31, mes3: 'Julio ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    {id:32, mes3: 'Agosto	 ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    {id:33, mes3: 'Septiembre	 ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    {id:34, mes3: 'Octubre	 ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    {id:35, mes3: 'Noviembre	 ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
    { id:36,mes3: 'Diciembre ' , iva3: '➕', tasa3:'0%',ventames3: '0', ventasexe3:'19%', totalventas3: '0' },
  ];

  

  //Columnas de la tabla para activos circulantes
  
 
  
  const columnsTabla1 = [
    { field: 'mes', headerName: ' Mes', type: 'string', width: 200 },
     {
      field: 'iva',
      headerName: 'IVA Credito',
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
   
    {
      field: 'tasa',
      headerName: 'Remanente Credito Mes Anterior',
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
    { field: 'ventames', headerName: 'Credito Real por Comprass', type: 'number', width: 100 },
    { field: 'ventasexe', headerName: 'Tasa', type: 'number', width: 100 },
   
    { field: 'totalventas', headerName: 'Total Ventas', type: 'number', width: 100 },
  ];
  

  const columnsTabla2 = [
    { field: 'mes2', headerName: ' Mes', type: 'string', width: 200 },
    
     {
      field: 'iva2',
      headerName: 'IVA Credito',
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
   
    {
      field: 'tasa2',
      headerName: 'Remanente Credito Mes Anterior',
     
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
    { field: 'ventames2', headerName: 'Credito Real por Comprass', type: 'number', width: 100 },
    { field: 'ventasexe2', headerName: 'Tasa', type: 'number', width: 100 },
   
    { field: 'totalventas2', headerName: 'Total Ventas', type: 'number', width: 100 },
  ];


  const columnsTabla3 = [
    { field: 'mes3', headerName: ' Mes', type: 'string', width: 200 },
    {
      field: 'iva3',
      headerName: 'IVA Credito',
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
   
    {
      field: 'tasa3',
      headerName: 'Remanente Credito Mes Anterior',
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
    { field: 'ventames3', headerName: 'Credito Real por Comprass', type: 'number', width: 100 },
    { field: 'ventasexe3', headerName: 'Tasa', type: 'number', width: 100 },
   
    { field: 'totalventas3', headerName: 'Total Ventas', type: 'number', width: 100 },
  ];
 
  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', width: '100%' }}>
      {/* Tabla 1 */}
      <div style={{ flex: '1', overflow: 'auto', marginRight: '30px', maxWidth: '50%' }}>
        <div>
          <h4>2014</h4>
          <DataGrid rows={datosTabla1} columns={columnsTabla1} pageSize={7} localeText={localeText} />
        </div>
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
      <div style={{ flex: '1', overflow: 'auto', marginRight: '30px', maxWidth: '50%' }}>
        <div>
          <h4>2015</h4>
          <DataGrid rows={datosTabla2} columns={columnsTabla2} pageSize={5} localeText={localeText} />
        </div>
      </div>
  
      {/* Tabla 3 */}
      <div style={{ flex: '1', overflow: 'auto', maxWidth: '30%' }}>
        <div>
          <h4>2016</h4>
          <DataGrid rows={datosTabla3} columns={columnsTabla3} pageSize={5} localeText={localeText} />
        </div>
      </div>
    </div>
  );
};
export default SimpleTable;