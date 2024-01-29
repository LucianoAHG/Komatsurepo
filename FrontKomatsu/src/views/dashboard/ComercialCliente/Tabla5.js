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
    { id: 1, proveedor: 'SOCOFIN', totalcuotas: '', cuotaspagadas: '', cuotaspagar: '', valorcuota: '0', cp: '0', lp: '0', total: '0', periodoeval: '0', periodoact: '0' },
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
    // Filtrar las filas para eliminar la fila con el ID proporcionado
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



  const columns = [
    { field: 'proveedor', headerName: 'Proveedor', width: 150 },
    { field: 'totalcuotas', headerName: 'Fecha Act.', width: 150 },
    { field: 'cuotaspagadas', headerName: 'Creditos Comerciales', width: 150 },
    { field: 'cuotaspagar', headerName: 'Deuda Morosa', width: 150 },
    { field: 'valorcuota', headerName: 'Deuda Vencida', width: 150 },
    { field: 'cp', headerName: 'Contingente', width: 150 },
    { field: 'lp', headerName: 'Fecha. Act.', width: 150 },
    { field: 'total', headerName: 'Numero Impagos', width: 150 },
    { field: 'periodoeval', headerName: 'Total Impagos', width: 150 },

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





  return (
    <div>
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} />
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
