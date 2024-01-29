import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const SimpleTable = () => {
  // Datos de ejemplo
  const rows = [
    {  id: 'Off- Shore loan. No down payment. 24 months. Monthly installments. Sales Tax (IGV) only paid in the first three installments. Finance Fee 0,5%. US Dollars currency. Promissory Note and all machines should be pledged in favor of KFCH. Risk sharing agreement KFCH/KMMP (50%-50%)	', firstName: '	Aumento de Flota', lastName: '	Comite Latam', age: '	Fija', valor: 'USD', accion: 'US$ + 7,95%', plazo:'Leasing',  },


  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Detalle Tipo Negocio', width: 100 },
    { field: 'firstName', headerName: ' Motivo de compra', type: 'string', width: 300 },
    { field: 'lastName', headerName: 'Tipo Negocio', width: 200 },
    { field: 'age', headerName: 'Tipo de cuota (Fija/Flotante) ', width: 200 },
    { field: 'valor', headerName: 'Moneda ', width: 200 },
    { field: 'accion', headerName: '	Tasa de interes ', width: 200 },
    { field: 'plazo', headerName: 'Clase Negocio ', width: 200 },
    
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
