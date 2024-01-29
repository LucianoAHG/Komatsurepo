// src/components/Tablas.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const CustomDataGrid = ({ columns, rowData }) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <DataGrid
        columns={columns.map((col) => ({
          ...col,
          headerClassName: 'custom-header',
          cellClassName: 'custom-cell',
        }))}
        rows={rowData}
        pageSize={5}
        spacingModel={{ rowHeight: 5, cellHeight: 40 }}
        
      />
    </div>
  );
};


const Tablas = () => {
  const columns = [
    { headerName: 'Ejecutivo', field: 'ejecutivo' , width: 200 },
    { headerName: 'Total', field: 'total' , width: 200 },
    { headerName: '%', field: 'porcentaje', width:200 },
    { headerName: 'Monto Prom. USD', field: 'montoprom', width: 200 },
    { headerName: 'Dia Prom. Regis.', field: 'diasprom' , width: 200},
    { headerName: 'Cant. Regis. Bitac', field: 'cantidad' , width: 200},
    { headerName: 'Totales', field: 'totales' },
  ];
  const columns2 = [
    { headerName: 'Ejecutivo', field: 'ejecutivo2', width: 200 },
    { headerName: 'Total', field: 'total2', width: 200 },
    { headerName: '%', field: 'porcentaje2', width: 200 },
    { headerName: 'Monto Prom. USD', field: 'montoprom2', width: 200 },
    { headerName: 'Dia Prom. Regis.', field: 'diasprom2' , width: 200},
    { headerName: 'Cant. Regis. Bitac', field: 'cantidad2', width: 200 },
    { headerName: 'Totales', field: 'totales2' },
  ];
    const columns3 = [
      { headerName: 'Ejecutivo', field: 'ejecutivo3' , width: 200},
      { headerName: 'Total', field: 'total3', width: 200 },
      { headerName: '%', field: 'porcentaje3' , width: 200},
      { headerName: 'Monto Prom. USD', field: 'montoprom3' , width: 200},
      { headerName: 'Dia Prom. Regis.', field: 'diasprom3', width: 200 },
      { headerName: 'Cant. Regis. Bitac', field: 'cantidad3', width: 200 },
      { headerName: 'Totales', field: 'totales3' },
    ];
    const columns4 = [
      { headerName: 'Ejecutivo', field: 'ejecutivo4', width: 200 },
      { headerName: 'Total', field: 'total4' , width: 200},
      { headerName: '%', field: 'porcentaje4' , width: 200},
      { headerName: 'Monto Prom. USD', field: 'montoprom4', width: 200 },
      { headerName: 'Dia Prom. Regis.', field: 'diasprom4' , width: 200},
      { headerName: 'Cant. Regis. Bitac', field: 'cantidad4' , width: 200},
      { headerName: 'Totales', field: 'totales4', width: 200 },
    ];

  const datosTabla1 = [
    {id:1,
      ejecutivo: 'Usuario 1',
      total: '0',
      porcentaje: '0.00',
    montoprom: '0',
    diasprom: '0',
    cantidad: '0',
    totales: '0',
    },
    {id:2,
      ejecutivo: 'Usuario 2',
      total: '0',
      porcentaje: '0.00',
      montoprom: '0',
      diasprom: '0',
      cantidad: '0',
      totales: '0',

    },

    {id:3,
      ejecutivo: 'Usuario 3',
      total: '0',
      porcentaje: '0.00',
      montoprom: '0',
      diasprom: '0',
      cantidad: '0',
    totales: '0',

    },
  ];

  const datosTabla2 = [
    {id:4,
      ejecutivo2: 'Usuario 1',
      total2: '0',
      porcentaje2: '0.00',
      montoprom2: '0',
      diasprom2: '0',
      cantidad2: '0',
      totales2:'0',
    },
    {id:5,
      ejecutivo2: 'Usuario 2',
      total2: '0',
      porcentaje2: '0.00',
      montoprom2: '0',
      diasprom2: '0',
      cantidad2: '0',
      totales2:'0',
    },
    {id:6,
      ejecutivo2: 'Usuario 3',
      total2: '0',
      porcentaje2: '0.00',
      montoprom2: '0',
      diasprom2: '0',
      cantidad2: '0',
    totales2:'0',

    },

  ];

  const datosTabla3 = [
   
  {id:7,
    ejecutivo3: 'Usuario 1',
    total3: '0',
    porcentaje3: '0.00',
    montoprom3: '0',
    diasprom3: '0',
    cantidad3: '0',
    totales3: '0',
  },
  {id:8,
    ejecutivo3: 'Usuario 2',
    total3: '0',
    porcentaje3: '0.00',
    montoprom3: '0',
    diasprom3: '0',
    cantidad3: '0',
    totales3: '0',
  },
  {id:9,
    ejecutivo3: 'Usuario 3',
    total3: '0',
    porcentaje3: '0.00',
    montoprom3: '0',
    diasprom3: '0',
    cantidad3: '0',
    totales3: '0',
  },

  ];

  const datosTabla4 = [
    {id:10,
      ejecutivo4: 'Usuario 1',
      total4: '0',
      porcentaje4: '0.00',
      montoprom4: '0',
      diasprom4: '0',
      cantidad4: '0',
      totales4: '0',
  
    },
    {id:11,
      ejecutivo4: 'Usuario 2',
      total4: '0',
      porcentaje4: '0.00',
      montoprom4: '0',
      diasprom4: '0',
      cantidad4: '0',
      totales4: '0',
    },
    {id:12,
      ejecutivo4: 'Usuario 3',
      total4: '0',
      porcentaje4: '0.00',
      montoprom4: '0',
      diasprom4: '0',
      cantidad4: '0',
      totales4: '0',
    },
  ];

  return (
    <div>
      <CustomDataGrid columns={columns} rowData={datosTabla1} />
      <CustomDataGrid columns={columns2} rowData={datosTabla2} />
      <CustomDataGrid columns={columns3} rowData={datosTabla3} />
      <CustomDataGrid columns={columns4} rowData={datosTabla4} />
      {/* Repeat the above line for other tables */}
    </div>
  );
};

export default Tablas;
