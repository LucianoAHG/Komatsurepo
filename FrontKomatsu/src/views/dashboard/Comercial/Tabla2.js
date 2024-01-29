import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const SimpleTable = () => {
  // Datos de ejemplo
  const rows = [
    {
     id: '1140864787',
     firstName: 'Edwin Willy Martinez Puchoc',
     lastName: 'Edwin Willy Martinez Puchoc',
    },


  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Rut', type: 'number', width: 200 },
    { field: 'firstName', headerName: 'Empresa', type: 'string', width: 300 },
    { field: 'lastName', headerName: 'Nombre', width: 300 },
 
    
  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  console.log(rows);

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText} />
    </div>
  );
};

export default SimpleTable;
