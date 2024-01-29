import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const SimpleTable = () => {
  // Datos de ejemplo
  const rows = [
    {  id: 'KFCH', firstName: 'Antiguo', lastName: '21/11/2011', age: 'Transporte', tiposolicitud: 'LEASING', tiporaac: 'Completo', infoutilizada: 'BCE/EERR' },


  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Filial Solicitud', width: 200 },
    { field: 'firstName', headerName: 'Tipo Cliente', type: 'string', width: 200 },
    { field: 'lastName', headerName: 'Fecha Inicio Actividades', width: 200 },
    { field: 'tiposolicitud', headerName: 'Sector', width: 200 },
    { field: 'tiporaac', headerName: 'Tipo RAAC', type: 'string', width: 200 },
    { field: 'infoutilizada', headerName: 'Informacion Utilizada', width: 200 },
 
    
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
