import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = () => {
  const initialData = [
    { id: 1, nombre: 'Ganancia', puntaje: '-',  puntaje2:'-' ,  },
    { id: 2, nombre: 'Costo de Ventas', puntaje: '-',  puntaje2:'-' ,  },
    { id: 3, nombre: 'Margen Bruto', puntaje: '-',  puntaje2:'-' ,  },
    { id: 4, nombre: 'Gastos Administrativos', puntaje: '-',  puntaje2:'-' ,  },
    { id: 5, nombre: 'Deprecacion', puntaje: '-',  puntaje2:'-' ,  },
    { id: 6, nombre: 'Costos de Operacion',puntaje: '-',  puntaje2:'-' ,  },
    { id: 7, nombre: 'Operacion de Ganancia (Loss)', puntaje: '-',  puntaje2:'-' ,  },
    { id: 8, nombre: 'Gastos de Finanzas', puntaje: '-',  puntaje2:'-' ,  },
    { id: 9, nombre: 'Finance Income', puntaje: '-',  puntaje2:'-' ,  },
    { id: 10, nombre: 'Other Income (Expenses)', puntaje: '-',  puntaje2:'-' ,  },
    { id: 11, nombre: 'Non-operating profit (loss', puntaje: '-',  puntaje2:'-' ,  },
    { id: 12, nombre: 'Profit (loss) before price-level rest', puntaje: '-',  puntaje2:'-' ,  },
    { id: 13, nombre: 'Price-level restatement account', puntaje: '-',  puntaje2:'-' ,  },
    { id: 14, nombre: 'Profit (loss) before income tax    ', puntaje: '-',  puntaje2:'-' ,  },
    { id: 15, nombre: 'Income tax expenses    ', puntaje: '-',  puntaje2:'-' ,  },
    { id: 16, nombre: 'Profit (loss) for the period    ', puntaje: '-',  puntaje2:'-' ,  },
  ];

  const [data, setData] = useState(initialData);
  



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
