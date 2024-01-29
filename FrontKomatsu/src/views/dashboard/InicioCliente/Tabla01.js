import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const SimpleTable = () => {
  // Datos de ejemplo
  const rows = [
   
  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Oper',type: 'number', width: 70 },
    { field: 'firstName', headerName: 'Rut',type: 'number', width: 130 },
    { field: 'lastName', headerName: 'Empresa', width: 300 },
    { field: 'age', headerName: 'Ejecutivo', width: 150 },
    { field: 'monto', headerName: 'Monto USD', type: 'number', width: 110 },
    { field: 'fechaini', headerName: 'Fch. Inicio', type: 'number', width: 110 },
    { field: 'fecharech', headerName: 'Fch. Rech.', type: 'number', width: 110 },
    { field: 'ej', headerName: 'EJ',  width: 60 },
    { field: 'asc', headerName: 'ASC',  width: 60 },
    { field: 'ac', headerName: 'AC',  width: 60 },
    { field: 'jfc', headerName: 'JFC',  width:60  },
    { field: 'jc', headerName: 'JC',  width: 60 },
    { field: 'sgc', headerName: 'SGC',  width: 60 },
    { field: 'gcc', headerName: 'GCC',  width: 60 },
    { field: 'cfo', headerName: 'CFO',  width: 60 },
    { field: 'gg', headerName: 'GG',  width: 60 },
    { field: 'cfovip', headerName: 'CFO VIP',  width: 60 },
    { field: 'ceo', headerName: 'CEO',  width: 60 },
    { field: 'hecho', headerName: 'Hecho',  width: 60 },
    { field: 'ppt', headerName: 'PPT',  width: 60 },
    { field: 'pdf', headerName: 'PDF',  width: 60 },
    { field: 'subirpdf', headerName: 'Subir PDF',  width: 110 },
    { field: 'subirppt', headerName: 'Subir PPT',  width: 110 },

  ];
 // Configuración del mensaje cuando no hay datos
 const noDataMessage = 'No hay datos para mostrar';

 // Configuración de texto local
 const localeText = {
   noRowsLabel: noDataMessage,
 };
 console.log(rows);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        localeText={localeText}
      />
    </div>
  );
};

export default SimpleTable;
