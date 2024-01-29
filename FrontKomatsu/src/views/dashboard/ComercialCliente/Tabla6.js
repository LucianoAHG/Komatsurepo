import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';



const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      proveedor: 'Socofin',
      rut: '7.299.547-3',
      razonsocial: 'CORREA CANELO RANULFO ENRIQUE',
      porcentaje: '0',
      fchaactividad: '-',
      creditos: '0',
      dmorosa: ' 0',
      dvencida: '0',
      contingente: '0',
      lineadispo: '0',
    },
    // Agrega más filas según sea necesario
  ]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const buttonStyle = {
    background: 'none',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
  };

  const iconStyle = {
    color: 'blue',
    fontSize: '24px',
  };

  const handleEdit = (id) => {
    // Aquí puedes implementar la lógica para abrir el diálogo y establecer la fila seleccionada
    setSelectedRow(data.find((row) => row.id === id));
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  const handleSearch = (id) => {
    // Aquí puedes implementar la lógica para buscar información en la fila con el ID proporcionado
    console.log(`Buscar información en fila con ID: ${id}`);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveEdit = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en la fila editada
    console.log('Guardar cambios');
    setOpenDialog(false);
  };



  const columns1 = [
    { field: 'proveedor', headerName: 'Proveedor', width: 200 },
    { field: 'rut', headerName: 'Rut', width: 200 },
    { field: 'razonsocial', headerName: 'Razon Social', width: 200 },
    { field: 'porcentaje', headerName: '% Part', width: 200 },
    { field: 'fchaactividad', headerName: 'Fch. Act', width: 100 },
    { field: 'creditos', headerName: 'Creditos Com...', width: 100 },
    { field: 'dmorosa', headerName: 'D. Morosa', width: 100 },
    { field: 'dvencida', headerName: 'D. Vencida', width: 100 },
    { field: 'contingente', headerName: 'Contingente', width: 100 },
    { field: 'lineadispo', headerName: 'Linea Disponible', width: 100 },
    

    {
      field: 'editar',
      headerName: 'Editar',
      width: 100,
      renderCell: (params) => (
        <div>
          <div style={{ marginRight: '10px', display: 'inline-block' }}>
            <button style={buttonStyle} onClick={() => handleEdit(params.row.id)}>
              <EditIcon style={iconStyle} />
            </button>
          </div>
        </div>
      ),
    },
    {
      field: 'borrar',
      headerName: 'Borrar',
      width: 100,
      renderCell: (params) => (
        <div>
          <div style={{ marginRight: '10px', display: 'inline-block' }}>
            <button style={buttonStyle} onClick={() => handleDelete(params.row.id)}>
              <DeleteIcon style={iconStyle} />
            </button>
          </div>
        </div>
      ),
    },
    {
      field: 'buscar',
      headerName: 'Buscar',
      width: 100,
      renderCell: (params) => (
        <div>
          <div style={{ marginRight: '10px', display: 'inline-block' }}>
            <button style={buttonStyle} onClick={() => handleSearch(params.row.id)}>
              <SearchIcon style={iconStyle} />
            </button>
          </div>
        </div>
      ),
    },
  ];


// Datos de ejemplo para la segunda tabla
const rows2 = [
  { id: 2, proveedor2: 'Equifax', fchaactividad: '0', nimpagos: '0', totalimpagos: '0', acciones: '' },
  // Agrega más filas según sea necesario
];

// Configuración de columnas para la segunda tabla
const columns2 = [
  { field: 'proveedor2', headerName: 'Proveedor', width: 200 },
  { field: 'fchaactividad', headerName: 'Fch Act.', width: 200 },
  { field: 'nimpagos', headerName: 'N° Impagos', width: 200 },
  { field: 'totalimpagos', headerName: 'Total Impagos', width: 100 },
  { field: 'acciones', headerName: 'Accion', width: 100 },
];

// Configuración del mensaje cuando no hay datos
const noDataMessage = 'No hay datos para mostrar';

// Configuración de texto local
const localeText = {
  noRowsLabel: noDataMessage,
};



  return (
    <div>
    <div style={{ height: 300, width: '100%' }}>
    <h6>Socios (info en M$)</h6>
      <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={data} columns={columns1} pageSize={5} localeText={localeText} />

      </div>
    </div>
    <h6> </h6>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows2} columns={columns2} pageSize={5} localeText={localeText} />
      </div>
    {/* Diálogo de Edición */}
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>Editar Fila</DialogTitle>
      <DialogContent>
        {/* Aquí debes renderizar los campos de edición con los datos de selectedRow */}
        {/* Por ejemplo: */}
        <input type="text" value={selectedRow?.proveedor || ''} onChange={(e) => console.log(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSaveEdit} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
};


export default EditableTable;
