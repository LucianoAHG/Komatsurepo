import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';
import './RiskForm.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const EditableTable = () => {
  const [producto, setProducto] = useState('');

  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (value) => {
    setProducto(value);
  };

  const handleSave = async () => {
    try {
      // Modifica la estructura del objeto que se envía al backend
      const response = await fetch('http://127.0.0.1:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ producto: producto }) // Envía solo el campo 'producto'
      });

      if (!response.ok) {
        throw new Error('Error al guardar datos en el servidor');
      }

      // Mostrar la snackbar en caso de un guardado exitoso
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error:', error.message);
      // Puedes manejar el error de otra manera si es necesario
    }
  };

  const handleCancel = () => {
    // Agregar lógica para cancelar las ediciones
    console.log('Edits canceled');
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container fluid className="mt-3 mb-8 form-container">
      <Form>
        <Row className="mb-9">
          <Col md={10}>
            <Form.Group controlId="producto">
              <Form.Label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={producto}
                onChange={(e) => handleInputChange(e.target.value)}
                style={{ fontSize: '0.8rem' }}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Row>
            <Col md={12} className="mb-0" style={{ marginTop: '-40px' }}>
              <Button variant="primary" className="me-2" onClick={handleSave}>
                Guardar
              </Button>
              <Button variant="primary" onClick={handleCancel}>
                Cancelar
              </Button>
            </Col>
          </Row>
        </div>
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
