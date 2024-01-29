import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const dataTabla1 = [
  { id: 1, nombre: 'Puntuacion', edad: '48' },
  { id: 2, nombre: 'Puntuacion Final', edad: '144' },
  { id: 3, nombre: 'Puntuacion Old RAAC', edad: '20' },
  { id: 4, nombre: 'Tipo Cliente', edad: 'A' },
];

const dataTabla2 = [
  { id: 5, producto: 'Puntuacion', precio: '48' },
  { id: 6, producto: 'Puntuacion Final', precio: '144' },
  { id: 7, producto: 'Puntuacion Old RAAC', precio: '20' },
  { id: 8, producto: 'Tipo Cliente', precio: 'A' },
];

const dataTabla3 = [
  { id: 9, ciudad: 'Puntuacion', poblacion: '48' },
  { id: 10, ciudad: 'Puntuacion Final', poblacion: '144' },
  { id: 11, ciudad: 'Puntuacion Old RAAC', poblacion: '20' },
  { id: 12, ciudad: 'Tipo Cliente', poblacion: 'A' },
];

const Tabla1 = () => {
  const columns = [
 
    { field: 'nombre', headerName: 'Calificacion Cliente', width: 250 },
    { field: 'edad', headerName: 'Fecha', type: 'number', width: 100 },
  ];

  return <DataGrid rows={dataTabla1} columns={columns} pageSize={3} />;
};

const Tabla2 = () => {
  const columns = [
   
    { field: 'producto', headerName: 'Calificacion Cliente', width: 250 },
    { field: 'precio', headerName: 'Fecha', type: 'number', width: 100 },
  ];

  return <DataGrid rows={dataTabla2} columns={columns} pageSize={3} />;
};

const Tabla3 = () => {
  const columns = [
  
    { field: 'ciudad', headerName: 'Calificacion Cliente', width: 250 },
    { field: 'poblacion', headerName: 'Fecha', type: 'number', width: 100 },
  ];

  return <DataGrid rows={dataTabla3} columns={columns} pageSize={3} />;
};

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <h2> </h2>
        <Tabla1 />
      </div>

      <div>
        <h2> </h2>
        <Tabla2 />
      </div>

      <div>
        <h2> </h2>
        <Tabla3 />
      </div>
    </div>
  );
};

export default App;
