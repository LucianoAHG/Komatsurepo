import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      moneda: '',
      fecha: new Date(),
      tasadecambio: ''
    }
  ]);

  const [tasadeCambio, setTasaDeCambio] = useState(0);
  const [tasasDeCambio, setTasasDeCambio] = useState({
    USD: 912.06,
    EUR: 0.85,
    CLP: 800,
    UF: 36.81, // Reemplaza con la tasa de cambio correcta para UF
    ARS: 98.75, // Reemplaza con la tasa de cambio correcta para ARS
    PEN: 3.78, // Reemplaza con la tasa de cambio correcta para PEN
    COP: 3850, // Reemplaza con la tasa de cambio correcta para COP
    UYU: 45.6, // Reemplaza con la tasa de cambio correcta para UYU
    PYG: 6400, // Reemplaza con la tasa de cambio correcta para PYG
    PAB: 1.0, // Reemplaza con la tasa de cambio correcta para PAB
    BOL: 6.96 // Reemplaza con la tasa de cambio correcta para BOL
  });

  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    // You can perform side effects here when component mounts or when tasadeCambio changes
    console.log('useEffect triggered');
  }, [tasadeCambio]);
  const handleInputChange = (id, field, value) => {
    if (field === 'moneda') {
      const nuevaTasaDeCambio = obtenerTasaDeCambio(value);
      setTasaDeCambio(nuevaTasaDeCambio);

      // Actualiza las tasas de cambio en el estado
      setTasasDeCambio((prevTasasDeCambio) => ({
        ...prevTasasDeCambio,
        [value]: nuevaTasaDeCambio
      }));

      // Actualiza la data con la nueva moneda y tasa de cambio
      setData((prevData) => prevData.map((item) => (item.id === id ? { ...item, [field]: value, tasadecambio: nuevaTasaDeCambio } : item)));
    } else {
      // Si el campo no es "moneda", actualiza la data como antes
      setData((prevData) => prevData.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
    }
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const obtenerTasaDeCambio = (monedaSeleccionada) => {
    const tasasDeCambio = {
      USD: 912.06,
      EUR: 0.85,
      CLP: 800,
      UF: 36.81, // Reemplaza con la tasa de cambio correcta para UF
      ARS: 98.75, // Reemplaza con la tasa de cambio correcta para ARS
      PEN: 3.78, // Reemplaza con la tasa de cambio correcta para PEN
      COP: 3850, // Reemplaza con la tasa de cambio correcta para COP
      UYU: 45.6, // Reemplaza con la tasa de cambio correcta para UYU
      PYG: 6400, // Reemplaza con la tasa de cambio correcta para PYG
      PAB: 1.0, // Reemplaza con la tasa de cambio correcta para PAB
      BOL: 6.96 // Reemplaza con la tasa de cambio correcta para BOL
    };

    return tasasDeCambio[monedaSeleccionada] || 0;
  };

  const handleSave = () => {
    console.log('Data saved:', data);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  const fields = [
    { label: 'Moneda', field: 'moneda', md: 2 },
    { label: 'Fecha', field: 'fecha', md: 2 },
    { label: 'Tasa de Cambio', field: 'tasadecambio', md: 3 }
  ];

  const monedaOptions = ['USD', 'EUR', 'CLP', 'UF', 'ARS', 'PEN', 'COP', 'UYU', 'PYG', 'PAB', 'BOL'];

  return (
    <Container fluid className="mt-3 mb-8 form-container">
      <Form>
        {data.map((item) => (
          <Row key={item.id} className="mb-9">
            {fields.map((field) => (
              <Col key={field.field} md={field.md}>
                <Form.Group controlId={`${field.field}-${item.id}`}>
                  <Form.Label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{field.label}</Form.Label>
                  {field.field === 'moneda' ? (
                    <>
                      <Form.Select
                        value={item[field.field]}
                        onChange={(e) => handleInputChange(item.id, field.field, e.target.value)}
                        style={{ fontSize: '0.8rem' }}
                      >
                        <option value="">Seleccione una moneda</option>
                        {monedaOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Form.Select>
                      <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>
                        {tasasDeCambio[item[field.field]]} {item[field.field]}
                      </div>
                    </>
                  ) : field.field === 'fecha' ? (
                    <>
                      <div style={{ marginBottom: '0.01rem' }}> </div>
                      <DatePicker
                        selected={item[field.field]}
                        onChange={(date) => handleInputChange(item.id, field.field, date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                      />
                    </>
                  ) : (
                    <Form.Control
                      type="text"
                      value={item[field.field]}
                      onChange={(e) => handleInputChange(item.id, field.field, e.target.value)}
                      style={{ fontSize: '0.8rem' }}
                    />
                  )}
                </Form.Group>
              </Col>
            ))}
          </Row>
        ))}
        <div className="d-flex justify-content-end">
          <Row>
            <Col md={12} className="mb-0" style={{ marginTop: '-70px' }}>
              <Button variant="primary" className="me-2" onClick={handleSave}>
                Guardar
              </Button>
              <Button variant="primary" onClick={handleCancel}>
                Cancelar
              </Button>
            </Col>
          </Row>
        </div>
        {/* Snackbar para el mensaje de éxito */}
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={closeSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <MuiAlert
            onClose={closeSnackbar}
            severity="success"
            sx={{ width: '130%', backgroundColor: '#009900 ', color: '#FFE4B5' }}
            iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" style={{ color: '#FFE4B5' }} /> }}
          >
            Los datos se han guardado con éxito.
          </MuiAlert>
        </Snackbar>
      </Form>
    </Container>
  );
};

export default EditableTable;
