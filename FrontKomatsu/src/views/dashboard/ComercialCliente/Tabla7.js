import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DualTables = () => {
  // Datos de ejemplo para la primera tabla
  const [rows1, ] = React.useState([
    
     
    
    // Agrega más filas según sea necesario
  ]);

  // Configuración de columnas para la primera tabla
  const columns1 = [
    { field: 'proveedor', headerName: 'Proveedor', width: 200 },
    { field: 'rut', headerName: 'Rut', width: 200 },
    { field: 'razonsocial', headerName: 'Razon Social', width: 200 },
    { field: 'porcentaje', headerName: '% Part', width: 200 },
    { field: 'fchaactividad', headerName: 'Fch. Act', width: 100 },
    { field: 'creditos', headerName: 'Creditos Com...', width: 100 },
    { field: 'dmorosa', headerName: 'D. Morosa', width: 100 },
    { field: 'devencida', headerName: 'D. Vencida', width: 100 },
    { field: 'contingente', headerName: 'Contingente', width: 100 },
    { field: 'lineadispo', headerName: 'Linea Disponible', width: 100 },
    { field: 'editar2', headerName: 'Acciones', width: 100 },
    { field: 'borrar2', headerName: ' ', width: 100 },


  ];

  // Datos de ejemplo para la segunda tabla
  const [rows2, ] = React.useState([
    
    // Agrega más filas según sea necesario
  ]);

  // Configuración de columnas para la segunda tabla
  const columns2 = [
    { field: 'proveedor2', headerName: 'Proveedor', width: 200 },
    { field: 'fchaactividad', headerName: 'Fch Act.', width: 200 },
    { field: 'nimpagos', headerName: 'N° Impagos', width: 200 },
    { field: 'totalimpagos', headerName: 'Total Impagos', width: 100 },
    { field: 'acciones', headerName: 'Accion', width: 100 },
  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  return (
    <div>
      {/* Primera tabla */}
      <h6>Socios (info en M$)
</h6>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows1} columns={columns1} pageSize={5} localeText={localeText}  />
      </div>

      {/* Segunda tabla */}
      <h6> </h6>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows2} columns={columns2} pageSize={5} localeText={localeText}  />
      </div>
    </div>
  );
};

export default DualTables;
