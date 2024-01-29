import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './App.css';

const SimpleTable = () => {
  const generateData = (idOffset) => {
    const data = [];
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ];

    for (let i = 1; i <= 12; i++) {
      const id = idOffset + i;
      data.push({
        id,
        mes: months[i - 1],
        iva: '0',

        venta: '0',
        ventames: '0'
      });
    }

    return data;
  };

  // Crear datos para cada tabla
  const datosTabla1 = generateData(1);
  const datosTabla2 = generateData(13);
  const datosTabla3 = generateData(25);
  const datosTabla4 = generateData(37);
  const datosTabla5 = generateData(49);

  // Columnas comunes a todas las tablas
  const commonColumns = [
    { field: 'mes', headerName: 'Mes', type: 'string', width: 100 },
    { field: 'iva', headerName: 'IVA a Pagar', type: 'string', width: 200 },
    { field: 'venta', headerName: 'Venta - Compra', type: 'string', width: 200 }
    // Otras columnas comunes
    // ...
  ];

  const columnsTabla4 = [
    { field: 'mes', headerName: 'Total', type: 'string', width: 100 },
    { field: 'iva', headerName: 'Total', type: 'string', width: 200 },
    { field: 'ventames', headerName: 'Total', type: 'string', width: 200 }
    // Otras columnas específicas para la tabla 4
    // ...
  ];
  const columnsTabla5 = [
    { field: 'mes', headerName: 'Total', type: 'string', width: 100 },
    { field: 'iva', headerName: 'Total', type: 'string', width: 200 },
    { field: 'ventames', headerName: 'Total', type: 'string', width: 200 }
    // Otras columnas específicas para la tabla 4
    // ...
  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', width: '100%' }}>
      {/* Tabla 1 */}
      <div style={{ flex: '1', overflow: 'auto', marginRight: '20px', backgroundColor: '#fff', borderRadius: '10px', padding: '15px' }}>
        <div>
          <h6>Credito(Margen Comercial)</h6>
          <DataGrid rows={datosTabla1} columns={commonColumns} pageSize={7} localeText={localeText} />
        </div>
      </div>

      {/* Tabla 2 */}
      <div style={{ flex: '1', overflow: 'auto', marginRight: '20px', backgroundColor: '#fff', borderRadius: '10px', padding: '15px' }}>
        <div>
          <h4>2015</h4>
          <DataGrid rows={datosTabla2} columns={commonColumns} pageSize={7} localeText={localeText} />
        </div>
      </div>

      {/* Tabla 3 */}
      <div style={{ flex: '1', overflow: 'auto', marginRight: '20px', backgroundColor: '#fff', borderRadius: '10px', padding: '15px' }}>
        <div>
          <h4>2016</h4>
          <DataGrid rows={datosTabla3} columns={commonColumns} pageSize={7} localeText={localeText} />
        </div>
      </div>

      {/* Tabla 4 */}
      <div style={{ flex: '1', overflow: 'auto', marginRight: '20px', backgroundColor: '#fff', borderRadius: '10px', padding: '15px' }}>
        <div>
          <h4>Ventas</h4>
          <DataGrid rows={datosTabla4} columns={columnsTabla4} pageSize={7} localeText={localeText} />
        </div>
      </div>

      {/* Tabla 5 */}
      <div style={{ flex: '1', overflow: 'auto', backgroundColor: '#fff', borderRadius: '10px', padding: '15px' }}>
        <div>
          <h4>Compras</h4>
          <DataGrid rows={datosTabla5} columns={columnsTabla5} pageSize={7} localeText={localeText} />
        </div>
      </div>
    </div>
  );
};

export default SimpleTable;
