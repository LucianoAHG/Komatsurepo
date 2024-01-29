import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const SimpleTable = () => {
  // Datos de ejemplo
  const rows = [
    {  id: 'USD', firstName: '	1.520.784,00', lastName: '	0,00', age: '	%', valor: '1.520.784,00', accion: '100%', plazo:'24', gracia:'0' },


  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Moneda', width: 100 },
    { field: 'firstName', headerName: 'Negocio Total (IVA no incluido) ', type: 'string', width: 300 },
    { field: 'lastName', headerName: 'Pie', width: 200 },
    { field: 'age', headerName: 'Pie (%)', width: 200 },
    { field: 'valor', headerName: 'Credito ', width: 200 },
    { field: 'accion', headerName: '  ', width: 200 },
    { field: 'plazo', headerName: 'Plazo (Meses) ', width: 200 },
    { field: 'gracia', headerName: 'Gracia (Meses) ', width: 200 },
  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  console.log(rows);

  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText} />
    </div>
  );
};

export default SimpleTable;
