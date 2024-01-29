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
    {
        id: 2,
        firstName: '0',
        lastName: '0',
        age: '0',
        hecho: '0',
        usuario: '0',
        accion: '0',
        accion2: '0',
      },
  ];

  

  const columns = [
    { field: 'firstName', headerName: 'DB', type: 'number', width: 100 },
    { field: 'lastName', headerName: 'Sales', type: 'number', width: 150 },
    { field: 'age', headerName: 'Equilty', type: 'number', width: 200 },
    { field: 'hecho', headerName: 'EBITDA', type: 'number', width: 200 },
    { field: 'usuario', headerName: 'Operating Profit', type: 'number', width: 200 },
    { field: 'accion', headerName: 'Prifit / (Loss)', type: 'number', width: 200 },
    { field: 'firstName', headerName: 'Cash Coverage', type: 'number', width: 100 },
    { field: 'lastName', headerName: 'Leverage', type: 'number', width: 150 },
    { field: 'age', headerName: 'Leverage Finance', type: 'number', width: 200 },
    { field: 'hecho', headerName: 'ROA', type: 'number', width: 200 },
    { field: 'usuario', headerName: 'ROS', type: 'number', width: 200 },
    { field: 'accion', headerName: 'ROE', type: 'number', width: 200 },
    { field: 'firstName', headerName: 'Current KHSA Debt /Sales', type: 'number', width: 150 },
    { field: 'lastName', headerName: 'C.I Sales', type: 'number', width: 150 },
    { field: 'age', headerName: 'KHSA/ RAAC/ Score', type: 'number', width: 200 },
    { field: 'hecho', headerName: 'Simulated Credit Line', type: 'number', width: 200 },
    { field: 'usuario', headerName: 'DSO', type: 'number', width: 200 },
    { field: 'accion', headerName: 'SBLC', type: 'number', width: 200 },
    { field: 'hecho', headerName: 'Other Guarantee', type: 'number', width: 200 },
    { field: 'usuario', headerName: 'Comments', type: 'number', width: 200 },
    { field: 'accion', headerName: 'EMBI', type: 'number', width: 200 },
  ];

  

  const noDataMessage = 'No hay datos para mostrar';
  const localeText = {
    noRowsLabel: noDataMessage,
  };
  

  
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {aviso && (
            <div style={{ textAlign: 'center', padding: '10px', backgroundColor: '#e0e0e0' }}>
              {aviso}
            </div>
          )}
    
          <div style={{ height:300, width: '100%' }}>
            <DataGrid rows={rows1} columns={columns} pageSize={5} localeText={localeText} />
          </div>
    
          
    
          
    
          
          {selectedRow !== null && (
            <DetalleRow row={selectedRow} onClose={() => setSelectedRow(null)} />
          )}
        </div>
      );
    };
    

export default SimpleTable;
