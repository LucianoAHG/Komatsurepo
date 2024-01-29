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
  Paper,
} from '@mui/material';

const options = [
  { value: 'cc', label: 'Credito Consumo' },
  { value: 'co', label: 'Credito Automotriz' },
  { value: 'cc', label: 'Tarjeta Credito' },
  { value: 'co', label: 'Co' },
];

const YourFormComponent = () => {
  const [form1, setForm1] = useState({
    nombre: '',
    cobranza: '',
    canal: '',
    estado: '',
    archivos: [],
    campo5: '',
    campo6: '',
    campo7: '',
    campo8: '',
  });

  const handleSubmit = (event, form) => {
    event.preventDefault();
    console.log('Nombre:', form.nombre);
    console.log('Cobranza:', form.cobranza);
    console.log('Canal:', form.canal);
    console.log('Estado:', form.estado);
    console.log('Archivos:', form.archivos);
    console.log('Campo 5:', form.campo5);
    console.log('Campo 6:', form.campo6);
    console.log('Campo 7:', form.campo7);
    console.log('Campo 8:', form.campo8);
  };

  const renderForm = (form, setForm) => (
    <Paper elevation={3} style={{ padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
      <form onSubmit={(event) => handleSubmit(event, form)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h9">Datos Operacion del Credito</Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Rol Unico Tributario"
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
            <TextField
              fullWidth
              label="Monto"
              value={form.campo5}
              onChange={(e) => setForm((prevForm) => ({ ...prevForm, campo5: e.target.value }))}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Moneda"
              value={form.campo6}
              onChange={(e) => setForm((prevForm) => ({ ...prevForm, campo6: e.target.value }))}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Ejecutivo"
              value={form.campo7}
              onChange={(e) => setForm((prevForm) => ({ ...prevForm, campo7: e.target.value }))}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Aprobado / Rechazado"
              value={form.campo8}
              onChange={(e) => setForm((prevForm) => ({ ...prevForm, campo8: e.target.value }))}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Guardar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );

  return <>{renderForm(form1, setForm1)}</>;
};

export default YourFormComponent;
