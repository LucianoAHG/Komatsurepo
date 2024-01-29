import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const SimpleTable = () => {
  // Datos de ejemplo
  const rows = [
    {  id: 'USD', firstName: '		0,00', lastName: '	0,00', age: '	0,00', valor: '0,00', accion: '	0,00', plazo:'	0,00', },


  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Moneda', width: 100 },
    { field: 'firstName', headerName: 'Venta Equipos (KCC) ', type: 'string', width: 200 },
    { field: 'lastName', headerName: 'Arriendo de Equipos (KCC2)', width: 200 },
    { field: 'age', headerName: 'Servicios y Rptos (KCC3)', width: 200 },
    { field: 'valor', headerName: 'Leasing (inc. Int. y gtos)(KCC4) ', width: 200 },
    { field: 'accion', headerName: '  Credito Latam (Eq. y Ser/Rptos)', width: 200 },
    { field: 'plazo', headerName: 'Total Vigente Utilizada ', width: 200 },

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
