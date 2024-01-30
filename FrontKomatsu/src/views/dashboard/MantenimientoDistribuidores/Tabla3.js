import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const MarcasDataGrid = ({ marcas, onAgregarClick }) => {
  const [nuevaMarca, setNuevaMarca] = useState('');

  // Definir las columnas del DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre de la Marca', width: 200 }
    // Agregar más columnas según tus necesidades
  ];

  // Mapear los datos de las marcas para crear las filas del DataGrid
  const rows = marcas
    ? marcas.map((marca) => ({
        id: marca.id,
        nombre: marca.nombre
        // Agregar más propiedades según tus necesidades
      }))
    : [];

  const handleAgregarClick = () => {
    // Agregar la nueva marca a la lista de marcas
    onAgregarClick(nuevaMarca);

    // Limpiar el campo de nueva marca después de agregar
    setNuevaMarca('');
  };

  return (
    <div style={{ height: 300, width: '100%' }}>
      <div style={{ marginBottom: '10px', display: 'flex' }}>
        <input
          type="text"
          placeholder="Nueva Marca"
          value={nuevaMarca}
          onChange={(e) => setNuevaMarca(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button onClick={handleAgregarClick} variant="contained" color="primary">
          Agregar
        </Button>
      </div>
      <DataGrid rows={rows} columns={columns} pageSize={5} disableSelectionOnClick />
    </div>
  );
};

export default MarcasDataGrid;
