import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = () => {
  const initialData = [
    { id: 1, nombre: 'Años con Komatsu', puntaje: 0, valores: 0, valores2: 0, puntaje2:0 , },
    { id: 2, nombre: 'Venta Anual (USDMM)', puntaje: 1, valores: '13.869', valores2: 23.985, puntaje2:2 ,  },
    { id: 3, nombre: 'Segmento',puntaje: 'Pequeño', valores: 'Pequeño', valores2: 'Medio', puntaje2:'Medio'  },
    { id: 4, nombre: 'Igualdad (USDM)', puntaje: 3, valores: '14249', valores2: 3, puntaje2:22.109 ,  },
    { id: 5, nombre: 'Covertura Cash', puntaje: -3, valores: '0,13', valores2: 2, puntaje2:'2,75' ,   },
    { id: 6, nombre: 'Fecha de Vencimiento', puntaje: 1, valores: 'Bueno', valores2: 'Normal', puntaje2:0 ,   },
    { id: 7, nombre: 'Leverage', puntaje: 3, valores: 0.98, valores2: 0.32, puntaje2:3  },
    { id: 8, nombre: 'DSO', puntaje: 2, valores: 0, valores2: 0, puntaje2:2  },
    { id: 9, nombre: 'Garantias Adicionales',puntaje: 0, valores:'0%', valores2: '0%', puntaje2:0 ,  },
    { id: 10, nombre: 'Cash Colateral (SBLC)', puntaje: 'Pequeña', valores: 'Pequeña', valores2: 'Medio', puntaje2:'Medio' ,  },
    { id: 11, nombre: 'Informacion Publica', puntaje: 'Positivo', valores: 'Si', valores2: 'Si', puntaje2:'Positiva' ,  },
    { id: 12, nombre: 'Sin Ligitacion', puntaje: 0, valores: 0, valores2: 0, puntaje2:0 ,    },
    { id: 13, nombre: 'Verificar Direccion', puntaje: 0, valores: 0, valores2: 0, puntaje2:0 ,    },
  ];

  const [data, setData] = useState(initialData);



  const handleDataChange = (params, newData) => {
    const updatedData = data.map((item) => (item.id === params.id ? { ...item, ...newData } : item));
    setData(updatedData);
  };

  const columns = [
    {
      field: 'valores',
      headerName: 'Valor',
      width: 300,
      renderCell: (params) => <Typography variant="body">{params.row.valores}</Typography>,
    },
    {
      field: 'puntaje',
      headerName: 'Puntaje',
      width: 300,
      renderCell: (params) => <Typography variant="body">{params.row.puntaje}</Typography>,
    },
    {
        field: 'nombre',
        headerName: 'Nombre',
        width: 600,
        renderCell: (params) => <Typography variant="body">{params.row.nombre}</Typography>,
      },
      {
        field: 'valores2',
        headerName: 'Valor',
        width: 300,
        renderCell: (params) => <Typography variant="body">{params.row.valores2}</Typography>,
      },
      {
        field: 'puntaje2',
        headerName: 'Puntaje',
        width: 300,
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
