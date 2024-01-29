import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const EditableTable = () => {
  const [data1] = useState([
    { id: 1, proveedor: ' SOCOFIN', totalcuotas: ' 0 ', cuotaspagadas: '0', cuotaspagar: '0', valorcuota: '0', cp: '0', lp: '0', total: '0', periodoeval: '0', periodoact: '0', variacion: '0', porcentaje: '0%' },
  ]);

  const [data2] = useState([
    { id: 1, proveedor: 'DICOM LEASING', totalcuotas: ' 0 ', cuotaspagadas: '0', cuotaspagar: '0', valorcuota: '0', cp: '0', lp: '0', total: '0', periodoeval: '0', periodoact: '0', variacion: '0', porcentaje: '0%' },
  ]);

  const [data3] = useState([
    { id: 1, proveedor: 'LEASING KCCA/KFCH', totalcuotas: ' 0 ', cuotaspagadas: '0', cuotaspagar: '5', valorcuota: '0', cp: '0', lp: '0', total: '0', periodoeval: '0', periodoact: '0', variacion: '0', porcentaje: '0%' },
  ]);

  const [data4] = useState([
    { id: 1, totalcp1: ' 0 ', totallp1: '0', totalgeneral1: '0', total1: '0', totalperiodo1: '0', porcentaje4: '0%' },
  ]);

  // Configuración de columnas para DataGrid
  const columns = [
    { field: 'proveedor', headerName: 'Proveedor', width: 150 },
    { field: 'totalcuotas', headerName: 'N° Total de Cuotas', width: 150 },
    { field: 'cuotaspagadas', headerName: 'Cuotas Pagadas', width: 150 },
    { field: 'cuotaspagar', headerName: 'Cuotas por Pagar', width: 150 },
    { field: 'valorcuota', headerName: 'Valor Cuota', width: 150 },
    { field: 'cp', headerName: 'C/P', width: 150 },
    { field: 'lp', headerName: 'L/P', width: 150 },
    { field: 'total', headerName: 'Total', width: 150 },
    { field: 'periodoeval', headerName: 'Periodo de Evaluacion', width: 150 },
    { field: 'periodoact', headerName: 'Periodo Actual', width: 150 },
    { field: 'variacion', headerName: 'Variacion', width: 150 },
    { field: 'porcentaje', headerName: 'Porcentaje', width: 150 },
  ];

  return (
    <div>
      <h6> </h6>
      {/* DataGrid 1 */}
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={data1} columns={columns} pageSize={5} />
      </div>

      <h6> </h6>
      {/* DataGrid 2 */}
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={data2} columns={columns} pageSize={5} />
      </div>

      <h6> </h6>
      {/* DataGrid 3 */}
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={data3} columns={columns} pageSize={5} />
      </div>

      <h6>TOTAL</h6>
      {/* DataGrid 4 */}
      <div style={{ height: 150, width: '100%' }}>
        <DataGrid rows={data4} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default EditableTable;
