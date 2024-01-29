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

  // Datos de ejemplo
  const datosTabla1 = [
    { id: 1, estado: 'Ingresos de explotación ', fecha: '', porcentaje: '%', button: '', porcentaje2: '%', var: '0' },
    { id: 2, estado: 'Costos de explotación ', fecha: '', porcentaje: '%', porcentaje2: '%', var: '0' },
    { id: 3, estado: ' Margen de contribución', fecha: '', porcentaje: '%', porcentaje2: '%', var: '0' }
  ];

  const datosTabla2 = [
    { id: 4, estado2: 'Gastos de Admin. y Ventas', fecha: '0', algo: '0', var: '0' },
    { id: 5, estado2: '	Depreciación y amortización', fecha: '0', algo: '0', var: '0' },
    { id: 6, estado2: 'Resultado operacional', fecha: '0', algo: '0', var: '0' }
  ];

  const datosTabla3 = [
    { id: 7, estado3: 'Intereses Recibidos', fecha: '0', algo: '0', var: '0' },
    { id: 8, estado3: 'Gastos financieros', fecha: '0', algo: '0', var: '0' },
    { id: 9, estado3: 'Ingresos fuera de explotación', fecha: '0', algo: '0', var: '0' },
    { id: 10, estado3: 'Egresos fuera de explotación', fecha: '0', algo: '0', var: '0' },
    { id: 11, estado3: 'Resultado no Operacional', fecha: '0', algo: '0', var: '0' }
  ];

  const datosTabla4 = [
    { id: 12, estado4: 'Resultado antes de C.M ', fecha: '0', algo: '0', var: '0' },
    { id: 13, estado4: 'Corrección Monetaria ', fecha: '0', algo: '0', var: '0' }
  ];

  const datosTabla5 = [
    { id: 14, estado5: 'Resultado antes de C.M', fecha: '0', algo: '0', var: '0' },
    { id: 15, estado5: 'Corrección Monetaria', fecha: '0', algo: '0', var: '0' }
  ];

  const datosTabla6 = [
    { id: 16, estado6: 'Resultado antes de Impuestos', fecha: '0', algo: '0', var: '0' },
    { id: 17, estado6: '	Impuesto a la Renta	', fecha: '0', algo: '0', var: '0' },
    { id: 18, estado6: 'UTILIDAD (PÉRDIDA) EJERCICIO', fecha: '0', algo: '0', var: '0' }
  ];

  // Columnas de la tabla para activos circulantes
  const columnsTabla1 = [
    { field: 'estado', headerName: ' ', type: 'string', width: 200 },
    {
      field: 'fecha',
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
    { field: 'algo', headerName: '', type: 'number', width: 100 },
    { field: 'var', headerName: 'Var', type: 'number', width: 100 }
  ];

  const columnsTabla2 = [
    { field: 'estado2', headerName: '', type: 'string', width: 200 },
    { field: 'fecha', headerName: '', type: 'number', width: 100 },
    { field: 'algo', headerName: '', type: 'number', width: 100 },
    { field: 'var', headerName: 'Var', type: 'number', width: 100 }
  ];

  const columnsTabla3 = [
    { field: 'estado3', headerName: ' ', type: 'string', width: 200 },
    { field: 'fecha', headerName: ' ', type: 'number', width: 100 },
    { field: 'algo', headerName: '', type: 'number', width: 100 },
    { field: 'var', headerName: 'Var', type: 'number', width: 100 }
  ];

  const columnsTabla4 = [
    { field: 'estado4', headerName: ' ', type: 'string', width: 200 },
    { field: 'fecha', headerName: ' ', type: 'number', width: 100 },
    { field: 'algo', headerName: '', type: 'number', width: 100 },
    { field: 'var', headerName: 'Var', type: 'number', width: 100 }
  ];

  const columnsTabla5 = [
    { field: 'estado5', headerName: ' ', type: 'string', width: 200 },
    { field: 'fecha', headerName: ' ', type: 'number', width: 100 },
    { field: 'algo', headerName: '', type: 'number', width: 100 },
    { field: 'var', headerName: 'Var', type: 'number', width: 100 }
  ];

  const columnsTabla6 = [
    { field: 'estado6', headerName: ' ', type: 'string', width: 200 },
    { field: 'fecha', headerName: ' ', type: 'number', width: 100 },
    { field: 'algo', headerName: '', type: 'number', width: 100 },
    { field: 'var', headerName: 'Var', type: 'number', width: 100 }
  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '300vh', width: '100%' }}>
      {/* Tabla 1 */}
      <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
        <DataGrid rows={datosTabla1} columns={columnsTabla1} pageSize={7} localeText={localeText} />
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
