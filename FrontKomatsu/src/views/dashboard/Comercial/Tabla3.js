import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  dialogWidth: {
    maxWidth: '6500px',
    marginBottom: '15px',
  },
  textFieldWidth: {
    width: '100%',
    marginBottom: '25px',
     // Add your desired margin between text fields here
  },
  dialogContent: {
    margin: '300px',
    marginBottom: '25px',
  },
});

const SimpleTable = () => {
  const [rows, setRows] = useState([
    { id: 1, equipo: 'Linea de Equipos', permanenciaStock: '0 Dias', lugarOperacion: 'Faenas Propias', valor: '1.520.784,00' },
    // Agrega más filas si es necesario
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editedData, setEditedData] = useState({
    id: null,
    equipo: '',
    permanenciaStock: '',
    lugarOperacion: '',
    valor: '',
  });

  const classes = useStyles();

  const handleEditClick = (id, rowData) => {
    setEditedData(rowData);
    setOpenDialog(true);
  };

  const handleSaveClick = () => {
    setOpenDialog(false);
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === editedData.id ? { ...row, ...editedData } : row))
    );
  };

  const handleDeleteClick = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };


  const columns = [
    { field: 'id', headerName: 'Equipo', width: 200 },
    { field: 'permanenciaStock', headerName: 'Permanencia de Stock', type: 'string', width: 300 },
    { field: 'lugarOperacion', headerName: 'Lugar Operacion', width: 200 },
    { field: 'valor', headerName: 'Valor', width: 200 },
    {
      field: 'editar',
      headerName: 'Editar',
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton color="primary" onClick={() => handleEditClick(params.id, params.row)}>
            <EditIcon />
          </IconButton>
        
        </>
      ),
    },
    {
      field: 'borrar',
      headerName: 'Borrar',
      width: 200,
      renderCell: (params) => (
        <>
          <IconButton color="primary" onClick={() => handleDeleteClick(params.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];
  
  const localeText = {
    noRowsLabel: 'No hay datos para mostrar',
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText} />

    <Dialog open={openDialog} onClose={handleDialogClose} className={classes.dialogWidth}>
      <DialogTitle>Editar Datos</DialogTitle>
      <DialogContent>
      <TextField
  label="Equipo"
  name="equipo"
  value={editedData.equipo}
  onChange={handleInputChange}
  fullWidth
  className={classes.textFieldWidth}
  style={{
    marginBottom: '15px', // Añade un margen inferior
    marginTop: '10px' // 
  }}
/>
<TextField
  label="Permanencia de Stock"
  name="permanenciaStock"
  value={editedData.permanenciaStock}
  onChange={handleInputChange}
  fullWidth
  style={{ marginBottom: '15px' }} // Añade un margen inferior
/>
<TextField
  label="Lugar Operacion"
  name="lugarOperacion"
  value={editedData.lugarOperacion}
  onChange={handleInputChange}
  fullWidth
  style={{ marginBottom: '15px' }} // Añade un margen inferior
/>
<TextField
  label="Valor"
  name="valor"
  value={editedData.valor}
  onChange={handleInputChange}
  fullWidth
  style={{ marginBottom: '10px' }} // Añade un margen inferior
/>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancelar</Button>
        <Button onClick={handleSaveClick} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
};

export default SimpleTable;