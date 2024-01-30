import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const dataTabla1 = [{ id: 1, nombre: '' }];

const dataTabla2 = [{ id: 5, producto: '' }];

const dataTabla3 = [{ id: 9, ciudad: '', poblacion: '48' }];

const Tabla1 = () => {
  const columns = [{ field: 'nombre', headerName: 'Productos', width: 300 }];

  return <DataGrid rows={dataTabla1} columns={columns} pageSize={3} />;
};

const Tabla2 = () => {
  const columns = [{ field: 'producto', headerName: 'Participacion', width: 300 }];

  return <DataGrid rows={dataTabla2} columns={columns} pageSize={3} />;
};

const Tabla3 = () => {
  const columns = [{ field: 'ciudad', headerName: 'Socios', width: 300 }];

  return <DataGrid rows={dataTabla3} columns={columns} pageSize={3} />;
};

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: '20px', width: '100%' }}>
      <div>
        <h2> </h2>
        <Tabla1 />
      </div>
      <div>
        <h2> Participacion </h2>
        <Tabla2 />
      </div>
      <div>
        <h2> Partners/ShareHolder </h2>
        <Tabla3 />
      </div>
    </div>
  );
};

export default App;
