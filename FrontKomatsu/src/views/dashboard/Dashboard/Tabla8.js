import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = () => {
  const initialData = [
    { id: 1, nombre: 'Equity', puntaje: '$ -',  puntaje2:'$ -' , },
    { id: 2, nombre: 'Paid in Capital', puntaje: ' ',  puntaje2:'' ,  },
    { id: 3, nombre: 'ROS',puntaje: '10,9%',  puntaje2:'23,4%' , },
    { id: 4, nombre: 'ROE',puntaje: '10,6%',  puntaje2:'25,4%' ,  },
    { id: 5, nombre: 'Linea de Credito v/s Equidad',puntaje: '42,1%',  puntaje2:'27,1%' ,   },
    { id: 6, nombre: 'Linea de Credito v/s Ventas', puntaje: '43,3%',  puntaje2:'25,0%' ,   },
    { id: 7, nombre: 'Riesgo Pais (EMBGI/+)', puntaje: '-',  puntaje2:'-' ,  },
   
  ];

  const [data, setData] = useState(initialData);
  const [selectedYear, setSelectedYear] = useState('2021');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleDataChange = (params, newData) => {
    const updatedData = data.map((item) => (item.id === params.id ? { ...item, ...newData } : item));
    setData(updatedData);
  };

  const columns = [
 
    {
      field: 'puntaje',
      headerName: 'Puntaje',
      width: 600,
      renderCell: (params) => <Typography variant="body">{params.row.puntaje}</Typography>,
    },
    {
        field: 'nombre',
        headerName: 'Nombre',
        width: 800,
        renderCell: (params) => <Typography variant="body">{params.row.nombre}</Typography>,
      },
      
      {
        field: 'puntaje2',
        headerName: 'Puntaje',
        width: 500,
        renderCell: (params) => <Typography variant="body">{params.row.puntaje2}</Typography>,
      },
   
  ];

  const rows = data.map((item) => ({
    id: item.id,
    valores: item.valores,
    puntaje: item.puntaje,
    nombre: item.nombre,
    valores2: item.valores2,
    puntaje2: item.puntaje2,
  }));



  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      

      <Grid container style={{ flexGrow: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          onEditCellChangeCommitted={handleDataChange}
          components={{
            Toolbar: () => (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <Typography variant="h4">2001</Typography>
                <Typography variant="h4">2022</Typography>
              </div>
            ),
          }}
        />
      </Grid>
    </div>
  );
};

export default DataTable;
