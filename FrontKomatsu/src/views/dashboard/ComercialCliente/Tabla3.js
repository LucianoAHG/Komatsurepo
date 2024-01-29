import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const SimpleTable = () => {
  // Datos de ejemplo
  const [rows, ] = React.useState([
    {
      id: '',
      firstName: '',
      lastName:'',
      age:'',
    },
    {
      id: '',
      firstName: '',
      lastName:'',
      age:'',
    },
    {
      id: '',
      firstName: '',
      lastName:'',
      age:'',
    },
  ]);

  // Configuración de columnas
  const columns = [
    { field: 'id', headerName: 'Nombre',  width: 200 },
    { field: 'firstName', headerName: 'Cargo', type: 'string', width: 300 },
    { field: 'lastName', headerName: 'Email', width: 300 },
    { field: 'age', headerName: 'Telefono', width: 300 },
    
  ];

  

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  return (
    <div style={{ height: 150, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText}  />
    </div>
  );
};

export default SimpleTable;
