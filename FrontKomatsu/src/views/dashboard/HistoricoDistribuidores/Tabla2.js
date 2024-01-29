import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import './RiskForm.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const DetalleRow = ({ row, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Detalles</DialogTitle>
      <DialogContent>
        <form>
          <TextField label="ID" value={row.id} disabled fullWidth />
          <TextField label="Ventas" value={row.firstName} disabled fullWidth />
          <TextField label="EBITDA" value={row.lastName} disabled fullWidth />
          <TextField label="Costo Operacional" value={row.age} disabled fullWidth />
          <TextField label="ROA" value={row.hecho} disabled fullWidth />
          <TextField label="ROE" value={row.usuario} disabled fullWidth />
          <TextField label="SBLC" value={row.accion} disabled fullWidth />
        </form>
        <button onClick={onClose}>Cerrar</button>
      </DialogContent>
    </Dialog>
  );
};

const SimpleTable = () => {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [aviso] = React.useState(null);
  const [selectUserInfo,] = React.useState(null);

  

  console.log("info usuario :", selectUserInfo);

  const rows1 = [
    {
      id: 1,
      firstName: '0',
      lastName: '0',
      age: '0',
      hecho: '0',
      usuario: '0',
      accion: '0',
      accion2: '0',
    },
  ];

  const rows2 = [
    {
      id: 2,
      firstName2: '0',
      lastName2: '0',
      age2: '0',
      hecho2: '0',
      usuario2: '0',
      accion2: '0',
    
    },
  ];

  const columns = [
    { field: 'firstName', headerName: 'Ventas', type: 'number', width: 100 },
    { field: 'lastName', headerName: 'EBITDA', type: 'number', width: 150 },
    { field: 'age', headerName: 'Costo Operacional', type: 'number', width: 200 },
    { field: 'hecho', headerName: 'ROA', type: 'number', width: 200 },
    { field: 'usuario', headerName: 'ROE', type: 'number', width: 200 },
    { field: 'accion', headerName: 'SBLC', type: 'number', width: 200 },
  ];

  const columns2 = [
    { field: 'firstName2', headerName: 'Patrimonio', type: 'number', width: 100 },
    { field: 'lastName2', headerName: 'Cobertura de Caja', type: 'number', width: 150 },
    { field: 'age2', headerName: 'Leverage', type: 'number', width: 200 },
    { field: 'hecho2', headerName: 'ROS', type: 'number', width: 200 },
    { field: 'usuario2', headerName: 'DSO', type: 'number', width: 200 },
    { field: 'accion2', headerName: 'EMBI', type: 'number', width: 200 },
  ];

  const noDataMessage = 'No hay datos para mostrar';
  const localeText = {
    noRowsLabel: noDataMessage,
  };
  const [comments, setComments] = React.useState('');

  
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {aviso && (
            <div style={{ textAlign: 'center', padding: '10px', backgroundColor: '#e0e0e0' }}>
              {aviso}
            </div>
          )}
    
          <div style={{ height: 180, width: '100%' }}>
            <DataGrid rows={rows1} columns={columns} pageSize={5} localeText={localeText} />
          </div>
    
          
    
          <div style={{ height: 180, width: '100%' }}>
            <DataGrid rows={rows2} columns={columns2} pageSize={5} localeText={localeText} />
          </div>
    
          <TextField
  label="Comentarios"
  multiline
  rows={4}
  variant="outlined"
  value={comments}
  onChange={(e) => setComments(e.target.value)}
  style={{ marginTop: '16px', width: '100%', backgroundColor: 'white', borderRadius: 0,  }}
/>
          {selectedRow !== null && (
            <DetalleRow row={selectedRow} onClose={() => setSelectedRow(null)} />
          )}
        </div>
      );
    };
    


export default SimpleTable;
