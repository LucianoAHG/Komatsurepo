import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const dataTabla1 = [
  { id: 1, titulo: 'Años Komatusu' },
  { id: 2, titulo: 'Ventas Anuales' },
  { id: 3, titulo: 'Patrimonio' },
  { id: 4, titulo: 'Cobertura de Caja' },
  { id: 5, titulo: 'Leverage' }
];

const dataTabla2 = [
  { id: 6, formula: 'x>0 y x < 5 -> 1pt.  x>6y x<20 -> 3pt.' },
  { id: 7, formula: 'x>0 y x < 5 -> 1pt.  x>6y x<20 -> 3pt.' },
  { id: 8, formula: 'x>0 y x < 5 -> 1pt.  x>6y x<20 -> 3pt.' },
  { id: 9, formula: 'x>0 y x < 5 -> 1pt.  x>6y x<20 -> 3pt.' },
  { id: 10, formula: 'x>0 y x < 5 -> 1pt.  x>6y x<20 -> 3pt.' }
];

const dataTabla3 = [
  { id: 11, valor: '9', factor: '3', score: '3' },
  { id: 12, valor: '9', factor: '3', score: '3' },
  { id: 13, valor: '9', factor: '3', score: '3' },
  { id: 14, valor: '9', factor: '3', score: '3' },
  { id: 15, valor: '9', factor: '3', score: '3' }
];

const dataTabla4 = [
  { id: 16, valor2: '9', factor2: '3', score2: '3' },
  { id: 17, valor2: '9', factor2: '3', score2: '3' },
  { id: 18, valor2: '9', factor2: '3', score2: '3' },
  { id: 19, valor2: '9', factor2: '3', score2: '3' },
  { id: 20, valor2: '9', factor2: '3', score2: '3' }
];

const Tabla1 = () => {
  const columns = [{ field: 'titulo', headerName: 'Parametro', width: 250 }];

  return <DataGrid rows={dataTabla1} columns={columns} pageSize={3} />;
};

const Tabla2 = () => {
  const columns = [{ field: 'formula', headerName: 'Formula (TEMPORAL)', width: 300 }];

  return <DataGrid rows={dataTabla2} columns={columns} pageSize={3} />;
};

const Tabla3 = () => {
  const columns = [
    { field: 'valor', headerName: 'Valor', type: 'number', width: 100 },
    { field: 'factor', headerName: 'Factor', type: 'number', width: 900 },
    { field: 'score', headerName: 'Score', type: 'number', width: 700 }
  ];

  return <DataGrid rows={dataTabla3} columns={columns} pageSize={3} />;
};

const Tabla4 = () => {
  const columns = [
    { field: 'valor2', headerName: 'Valor', type: 'number', width: 100 },
    { field: 'factor2', headerName: 'Factor', type: 'number', width: 900 },
    { field: 'score2', headerName: 'Score', type: 'number', width: 700 }
  ];

  return <DataGrid rows={dataTabla4} columns={columns} pageSize={3} />;
};

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <h2> </h2>
        <Tabla1 />
      </div>

      <div style={{ flex: 1 }}>
        <h2> </h2>
        <Tabla2 />
      </div>

      <div style={{ flex: 1 }}>
        <h2> </h2>
        <Tabla3 />
      </div>

      <div style={{ flex: 1 }}>
        <h2> </h2>
        <Tabla4 />
      </div>
    </div>
  );
};

export default App;
