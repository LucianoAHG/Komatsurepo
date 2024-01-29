import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';


const DetalleRow = ({ row, onClose }) => {
  // Lógica para mostrar detalles
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Detalles</DialogTitle>
      <DialogContent>
        <p>ID: {row.id}</p>
        {/* Agrega más detalles según tu estructura de datos */}
        <button onClick={onClose}>Cerrar</button>
      </DialogContent>
    </Dialog>
  );
};





const SimpleTable = () => {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [aviso, setAviso] = React.useState(null);
  const [selectUserInfo, setSelectedUserInfo] = React.useState(null);
  

  const navigate = useNavigate();

  const handleIconClick =  (params) => {
    const usuarioInfo =  obtenerInformacionDelUsuario(params.id);
    setSelectedUserInfo(usuarioInfo);
    setAviso(true)
    
    navigate('/dashboard/comercial-cliente');
  };

console.log("info usuario :", selectUserInfo)

  const rows = [
    {
      id: '4398',
      firstName: '76.362.333-5',
      lastName: 'SEVEN RENT A CAR SPA',
      age: 1500,
      hecho: 'Solicitud 4398 no finalizada',
      usuario: 'YEZEEL',
      accion: 'Terminar y enviar solicitud 4398',
      accion2: 'ver',
    },
    {
      id: '4493',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4493 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4493	',
      accion2: 'ver',
    },
    {
      id: '4491',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4491 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4491	',
      accion2: 'ver',
    },
    {
      id: '4490',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4490 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4490	',
      accion2: 'ver',
    },
    {
      id: '4487',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4487 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4487	',
      accion2: 'ver',
    },
    {
      id: '4486',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4486 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4486	',
      accion2: 'ver',
    },
    {
      id: '4408',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4408 no finalizada',
      usuario: 'YEZEEL	',
      accion: 'Terminar y enviar solicitud 4408	',
      accion2: 'ver',
    },
    {
      id: '4404',
      firstName: '85.272.800-0	',
      lastName: 'CIA CONTRACTUAL MINERA CANDELARIA	',
      age: '32.000.000',
      hecho: 'Solicitud 4404 no finalizada	',
      usuario: 'YEZEEL	',
      accion: 'Terminar y enviar solicitud 4404	',
      accion2: 'ver',
    },
    {
      id: '4400	',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA	',
      age: '200.000',
      hecho: 'Solicitud 4400	 no finalizada',
      usuario: 'YEZEEL	',
      accion: 'Terminar y enviar solicitud 4400	',
      accion2: 'ver',
    },
    {
      id: '4398	',
      firstName: '76.362.333-5	',
      lastName: 'SEVEN RENT A CAR SPA',
      age: 1500,
      hecho: 'Solicitud 4398	 no finalizada',
      usuario: 'YEZEEL	',
      accion: 'Terminar y enviar solicitud 4398	',
      accion2: 'Ver'
    },

  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Oper', type: 'number', width: 70 },
    { field: 'firstName', headerName: 'Rut', type: 'string', width: 130 },
    { field: 'lastName', headerName: 'Empresa', width: 400 },
    { field: 'age', headerName: 'Monto', type: 'number', width: 200 },
    { field: 'hecho', headerName: 'Hecho', width: 200 },
    { field: 'usuario', headerName: 'Ejecutivo', width: 200 },
    { field: 'accion', headerName: 'Accion', width: 300 },
    {
      field: 'accion2',
      headerName: 'Accion',
      width: 110,
      renderCell: (params) => (
        <IconButton color="primary" onClick={() => handleIconClick(params)}>
           <VisibilityIcon />
        </IconButton>
      ),
    },
  ];


  const noDataMessage = 'No hay datos para mostrar';
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  
  return (
    <div style={{ height: 400, width: '100%' }}>
    {aviso && (
      <div style={{ textAlign: 'center', padding: '10px', backgroundColor: '#e0e0e0' }}>
        {aviso}
      </div>
    )}

    <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText} />

    {selectedRow !== null && (
      <DetalleRow row={rows[selectedRow]} onClose={() => setSelectedRow(null)} />
    )}
  </div>
);
};

const obtenerInformacionDelUsuario = (userId) => {
  // Simula una llamada a la API o lógica de búsqueda
  return `Información simulada para el usuario con ID ${userId}`;
};

export default SimpleTable;