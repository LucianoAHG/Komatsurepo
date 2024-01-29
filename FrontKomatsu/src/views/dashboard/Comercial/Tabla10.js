import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const SimpleTable = () => {
  // Datos de ejemplo
  const rows = [
    {  id: 'USD', firstName: '		200', lastName: '	300', age: '		150', valor: '500', accion: '	100', plazo:'	1250', },


  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Moneda', width: 100 },
    { field: 'firstName', headerName: 'Venta Equipos (KCC) ', type: 'string', width: 200 },
    { field: 'lastName', headerName: 'Arriendo de Equipos (KCC2)', width: 200 },
    { field: 'age', headerName: 'Servicios y Rptos (KCC3)', width: 200 },
    { field: 'valor', headerName: 'Leasing (inc. Int. y gtos)(KCC4) ', width: 200 },
    { field: 'accion', headerName: '  Credito Latam (Eq. y Ser/Rptos)', width: 200 },
    { field: 'plazo', headerName: 'Total Vigente Utilizada ', width: 200 },

  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  console.log(rows);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 16 }}>
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText} />
      </div>

      <Paper elevation={3} style={{ width: '100%', marginTop: 16, padding: 16 }}>
        <Typography variant="h6" gutterBottom>
          Comentarios
        </Typography>
        <Typography variant="body1">
          Aquí puedes agregar tus comentarios o instrucciones adicionales.
        </Typography>
      </Paper>
    </div>
  );
};

export default SimpleTable;