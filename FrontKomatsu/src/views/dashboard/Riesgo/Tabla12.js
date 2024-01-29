import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import LineChart from './LineChart';

const SimpleTable = () => {
  // Datos de ejemplo
  const rows = [
    { id: 1, mes: 'Enero	 ', iva: '0', tasa: '0', ventames: '0' },
    { id: 2, mes: 'Febrero	 ', iva: '0', tasa: '0', ventames: '0' },
    { id: 3, mes: 'Marzo	 ', iva: '0', tasa: '0', ventames: '0' },
    { id: 4, mes: 'Abril	 ', iva: '0', tasa: '0', ventames: '0' },
    { id: 5, mes: 'Mayo	 ', iva: '0', tasa: '0', ventames: '0' },
    { id: 6, mes: 'Junio ', iva: '0', tasa: '0', ventames: '0' },
    { id: 7, mes: 'Julio ', iva: '0', tasa: '0', ventames: '0' },
    { id: 8, mes: 'Agosto	 ', iva: '0', tasa: '0', ventames: '0' },
    { id: 9, mes: 'Septiembre	 ', iva: '0', tasa: '0', ventames: '0' },
    { id: 10, mes: 'Octubre	 ', iva: '0', tasa: '0', ventames: '0' },
    { id: 11, mes: 'Noviembre	 ', iva: '0', tasa: '0', ventames: '0' },
    { id: 12, mes: 'Diciembre ', iva: '0', tasa: '0', ventames: '0' },
    { id: 13, mes: 'Totales', iva: '0', tasa: '0', ventames: '0' }
  ];

  // Columnas de la tabla
  const columns = [
    { field: 'mes', headerName: 'Mes', type: 'string', width: 130 },
    { field: 'iva', headerName: 'Ventas MM', type: 'number', width: 300 },
    { field: 'tasa', headerName: 'Compras MM', type: 'number', width: 150 },
    { field: 'ventames', headerName: 'Margen Comercial', type: 'number', width: 200 }
  ];

  console.log(rows);

  return (
    <div>
      <div style={{ height: 300, width: '100%', backgroundColor: 'white' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
      <div style={{ height: '50%', width: '100%', marginTop: '20px', backgroundColor: 'white' }}>
        <LineChart data={rows} />
      </div>
    </div>
  );
};

export default SimpleTable;
