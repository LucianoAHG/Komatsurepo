import React, { useState } from 'react';
import { LinearProgress, Typography, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const CustomProgressBar = (props) => {
  const { row } = props;
  const average = (row.year2021 + row.year2022) / 2;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <LinearProgress variant="determinate" value={average} style={{ width: '700%' }} />
      <Typography variant="body2" style={{ marginTop: 8 }}>
        {`${average.toFixed(2)}%`}
      </Typography>
    </div>
  );
};
const DataTable = () => {
  const initialData = [
    { id: 1, producto: 'Ventas', year2021: 50, year2022: 75 },
    { id: 2, producto: 'Patrimonio Neto', year2021: 80, year2022: 90 },
    { id: 3, producto: 'EBITDA', year2021: 30, year2022: 60 },
    { id: 4, producto: 'Gastos Operacionales', year2021: 30, year2022: 60 },
    { id: 5, producto: 'Resultado Operacional', year2021: 30, year2022: 60 },
    { id: 6, producto: 'Cobertura de Caja', year2021: 30, year2022: 60 },
  ];

  const [data, setData] = useState(initialData);

  const handleDataChange = (params, newData) => {
    const updatedData = data.map((item) => (item.id === params.id ? { ...item, ...newData } : item));
    setData(updatedData);
  };

  const columns = [
    { field: 'producto', headerName: 'Producto', width: 300 },
    {
      field: 'year2021',
      headerName: '2021',
      width: 300,
      renderCell: (params) => <Typography variant="body2">{params.row.year2021}</Typography>,
    },
    {
      field: 'porcentaje',
      headerName: 'Porcentaje',
      width: 500,
      renderCell: (params) => <CustomProgressBar row={params.row} />,
    },
    {
      field: 'year2022',
      headerName: '2022',
      width: 500,
      renderCell: (params) => <Typography variant="body2">{params.row.year2022}</Typography>,
    },
  ];

  const rows = data.map((item) => ({
    id: item.id,
    producto: item.producto,
    year2021: item.year2021,
    year2022: item.year2022,
  }));

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Grid container style={{ flexGrow: 1 }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} onEditCellChangeCommitted={handleDataChange} />
      </Grid>
    </div>
  );
};

export default DataTable;
