import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions, Typography } from '@mui/material';
import { Divider, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';
//IMPORT THEME
import { useTheme } from '@mui/material';
import { useEffect } from 'react';

const EditHeadersColsDialog = ({ open, onClose, indexHeader, headers, onConfirmHeader, onConfirmColSpan }) => {
  const [header, setHeader] = useState('');
  const [cols, setCols] = useState([]);
  const [colSpan, setColSpan] = useState('');

  ///////////////////// FUNCIONES PARA RECUPERAR DATOS A MODIFICAR ////////////////////////////////////////
  /**FUNCION PARA TRAER EL NOMBRE DEL HEADER, SE TRAEN TODOS, Y LUEGO SE ACCEDE CON INDEX- */
  console.log('indexHeaders', indexHeader);
  useEffect(() => {
    if (indexHeader != null && headers[indexHeader]) {
      const headerInfo = headers[indexHeader].headerName;
      setHeader(headerInfo);
      console.log('header+index :', headers[indexHeader].headerName);
    }
  }, [indexHeader, headers]);
  //FIN DE FUNCION PARA TRAER NOMBRE DEL HEADER.

  //FUNCION PARA SACAR EL NOMBRE DE COLUMNA
  useEffect(() => {
    if (indexHeader != null && headers[indexHeader]) {
      setCols(headers[indexHeader].columns);
      console.log('columns :', cols);
    }
  });
  //   //FIN FUNCION PARA EL NOMBRE DE LA COLUMNA

  //   //FUNCION PARA SACAR EL COLSPAN
  useEffect(() => {
    if (indexHeader != null && headers[indexHeader]) {
      setColSpan(headers[indexHeader].colSpan);
      console.log('colSpan :', headers[indexHeader].colSpan);
    }
  }, [indexHeader, headers]);
  //FIN FUNCION PARA SACAR EL COLSPAN

  ///////////////// MANEJADORES DE EVENTOS ////////////////////////////////////////////////////
  //FUNCION PARA IR CAMBIANDO EL NOMBRE
  const handleHeaderName = (e) => {
    setHeader(e.target.value);
  };

  //FUNCION PARA IR CAMBIANDO EL COLSPAN
  //   const handleColSpan = (e) => {
  //     setColSpan(e.target.value);
  //   };

  //Funcion para agregar Columnas o eliminar columnas

  //FUNCION PARA GUARDAR CAMBIOS
  const addColumns = () => {
    setColSpan(colSpan + 1);
  };

  const lessColumns = () => {
    setColSpan(colSpan - 1);
  };

  const handleSaveHeader = () => {
    const updateHeader = { ...headers[indexHeader], headerName: header };
    onConfirmHeader(indexHeader, updateHeader);
    onClose();
  };

  const handleSaveColSpan = () => {
    if (colSpan > 0) {
      const updateColSapn = { ...headers[indexHeader], colSpan: colSpan };
      onConfirmColSpan(indexHeader, updateColSapn);
      onClose();
    }
  };

  const theme = useTheme();
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle
        sx={{
          p: 2,
          fontSize: 25,
          color: '#36a9e1',
          backgroundColor: `${theme.palette.grey[50]}`,
          borderBottom: `2px solid ${theme.palette.grey[300]}`
        }}
      >
        <Grid container direction="row">
          <Grid item md={12}>
            Edite sus Encabezados y columnas
          </Grid>
        </Grid>
        <Grid item sx={{ mt: 2 }}></Grid>
      </DialogTitle>
      <DialogTitle mb={1} sx={{ fontSize: 20, color: `${theme.palette.grey[500]}`, fontWeight: 600 }}>
        Editar Títulos
      </DialogTitle>

      <DialogContent>
        <Grid container direction="row">
          <Grid item md={7} xs={12}>
            <Typography sx={{ fontSize: 15, fontWeight: 500, color: `${theme.palette.grey[500]}` }}>ingrese un valor</Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography sx={{ fontSize: 15, fontWeight: 500, color: `${theme.palette.grey[500]}` }}>Eliminar columna</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item md={7} xs={12} mt={0.5} sx={{ width: '90%' }}>
            <TextField
              sx={{ width: '50%' }}
              autoFocus
              margin="dense"
              value={header}
              id="header"
              label="ingrese un valor"
              fullWidth
              onChange={handleHeaderName}
              //value={inputHeader}
              //onChange={handleInputHeaderChange}
            />
          </Grid>
          <Grid item md={4} mt={2} xs={12}>
            <Button variant="contained">Eliminar Columna</Button>
          </Grid>
        </Grid>
        <Grid container direction="row" mt={2}>
          <Grid item md={12} xs={12} sx={{ width: '100%' }}>
            <Button sx={{ width: '100%' }} variant="contained" onClick={handleSaveHeader}>
              Guardar Titulo
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
      <Divider sx={{ border: `1px solid ${theme.palette.grey[300]}` }}></Divider>
      <DialogTitle sx={{ fontSize: 20, color: `${theme.palette.grey[500]}`, fontWeight: 600 }}> Editar Columnas</DialogTitle>
      <DialogContent></DialogContent>
      {/***************************  Inicio editar columnas *********************** */}
      <DialogContent>
        <Grid container direction="row" spacing={1}>
          <Grid item md={6} xs={12}>
            <Typography sx={{ fontSize: 15, fontWeight: 500, color: `${theme.palette.grey[500]}` }}>agregar y eliminar columnas</Typography>
          </Grid>

          <Grid item md={1} sx={{ width: '100%' }} justyfy="center" alignItems="center">
            <Typography p={1} sx={{ border: `1px solid ${theme.palette.grey[300]}`, width: '100%', textAlign: ' center' }}>
              {colSpan > 0 ? colSpan : 'agrega al menos una columna'}
            </Typography>
          </Grid>
          <Grid item md={2} xs={12} sx={{ width: '100%' }}>
            <Button sx={{ width: '100' }} variant="contained" onClick={addColumns}>
              add
            </Button>
          </Grid>
          <Grid item md={1} xs={12}>
            <Button variant="contained" onClick={colSpan > 0 ? lessColumns : ''}>
              less
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" mt={3}>
          <Grid item sx={{ width: '100%' }} xs={12}>
            <Button variant="contained" sx={{ width: '100%' }} onClick={handleSaveColSpan}>
              Guardar Columnas
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSaveHeader}>
          Guardar
        </Button>
        <Button variant="contained" onClick={onClose}>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditHeadersColsDialog;
/**<TextField
          autoFocus
          margin="dense"
          id="columnas"
          label="ingrese un valor"
          fullWidth
          //value={inputCols}
          //onChange={handleInputColsChange}
        /> */
/** <TextField
          autoFocus
          margin="dense"
          id="colspan"
          disabled
          fullWidth
          //value={inputCols}
          onChange={handleColSpan}
        /> */
