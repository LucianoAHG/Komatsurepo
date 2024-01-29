import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const SimpleTable = () => {
  // Datos de ejemplo
  const rows = [
    {  id: 'USD', firstName: '	228.117,60', lastName: '	%', age: '	15,00', valor: '6.530.441,00', },


  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Moneda', width: 200 },
    { field: 'firstName', headerName: ' ', type: 'string', width: 300 },
    { field: 'lastName', headerName: 'Porcentaje', width: 200 },
    { field: 'age', headerName: ' ', width: 200 },
    { field: 'valor', headerName: 'Valor Insoluto Actual ', width: 200 },
    
  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  console.log(rows);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText} />
    </div>
  );
};

export default SimpleTable;
