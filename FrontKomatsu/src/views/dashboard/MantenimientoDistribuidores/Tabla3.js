import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const MarcasDataGrid = ({ marcas }) => {
  // Definir las columnas del DataGrid
  const columns = [
    { field: 'nombre', headerName: 'Nombre de la Marca', width: 200 },
    
    // Agregar más columnas según tus necesidades
  ];

  // Mapear los datos de las marcas para crear las filas del DataGrid
  const rows = marcas
    ? marcas.map((marca) => ({
        id: marca.id, // Asumiendo que tienes un identificador único para cada marca
        nombre: marca.nombre,
       
        // Agregar más propiedades según tus necesidades
      }))
    : [];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
};

export default MarcasDataGrid;
