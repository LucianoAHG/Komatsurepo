import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import Dropzone from 'react-dropzone';

const options = [
  { value: 'cc', label: 'Cc' },
  { value: 'co', label: 'Co' },
];

const YourFormComponent = () => {
  const [form1, setForm1] = useState({
    nombre: '',
    cobranza: '',
    canal: '',
    estado: '',
    archivos: [],
  });

  const [form2, setForm2] = useState({
    nombre: '',
    cobranza: '',
    canal: '',
    estado: '',
    archivos: [],
  });

  const [form3, setForm3] = useState({
    nombre: '',
    cobranza: '',
    canal: '',
    estado: '',
    archivos: [],
  });

  const handleFileDrop = (acceptedFiles, formSetter) => {
    formSetter((prevForm) => ({ ...prevForm, archivos: acceptedFiles }));
  };

  const handleSubmit = (event, form) => {
    event.preventDefault();
    console.log('Nombre:', form.nombre);
    console.log('Cobranza:', form.cobranza);
    console.log('Canal:', form.canal);
    console.log('Estado:', form.estado);
    console.log('Archivos:', form.archivos);
  };

  const dropzoneStyles = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const renderForm = (form, setForm) => (
    <form onSubmit={(event) => handleSubmit(event, form)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Financiamiento</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Ingrese Nombre"
            value={form.nombre}
            onChange={(e) => setForm((prevForm) => ({ ...prevForm, nombre: e.target.value }))}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Linea Vigente Utilizada</InputLabel>
            <Select
              value={form.cobranza}
              onChange={(e) => setForm((prevForm) => ({ ...prevForm, cobranza: e.target.value }))}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Canal"
            value={form.canal}
            onChange={(e) => setForm((prevForm) => ({ ...prevForm, canal: e.target.value }))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Estado"
            value={form.estado}
            onChange={(e) => setForm((prevForm) => ({ ...prevForm, estado: e.target.value }))}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Archivos</Typography>
        </Grid>
        <Grid item xs={12}>
          <Dropzone onDrop={(acceptedFiles) => handleFileDrop(acceptedFiles, setForm)} accept="image/*,application/pdf">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                <p>Arrastra y suelta archivos aquí, o haz clic para seleccionar archivos.</p>
              </div>
            )}
          </Dropzone>
          {form.archivos.length > 0 && (
            <Typography variant="body2">Archivos seleccionados: {form.archivos.map((file) => file.name).join(', ')}</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );

  return (
    <>
      {renderForm(form1, setForm1)}
      {renderForm(form2, setForm2)}
      {renderForm(form3, setForm3)}
    </>
  );
};

export default YourFormComponent;