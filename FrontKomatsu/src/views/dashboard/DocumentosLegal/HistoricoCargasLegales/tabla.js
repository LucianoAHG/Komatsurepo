import React from 'react';
import DataTable from './DataTable'; // Ajusta la ruta según tu estructura de archivos

const App = () => {
  const data = [
    { requerimiento: 'Req1', documento: 'Doc1', fechaCarga: '2023-01-01', estado: 'Activo', id: 1 },
    { requerimiento: 'Req2', documento: 'Doc2', fechaCarga: '2023-01-02', estado: 'Inactivo', id: 2 },
    // Agrega más datos según sea necesario
  ];

  return (
    <div>
      <h1>Tabla de Requerimientos</h1>
      <DataTable data={data} />
    </div>
  );
};

export default App;
