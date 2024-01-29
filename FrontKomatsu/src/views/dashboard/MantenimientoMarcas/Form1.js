import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';
import './RiskForm.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
     
      tasadecambio: '',
    },
  ]);

  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (id, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSave = () => {
    // Add logic to save the data
    console.log('Data saved:', data);

    // Show snackbar on successful save
    setSnackbarOpen(true);
  };

  const handleCancel = () => {
    // Add logic to cancel the edits
    console.log('Edits canceled');
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  const fields = [
    
   
    { label: 'Nombre', field: 'tasadecambio', md: 10 },
  ];

  const monedaOptions = ['USD', 'EUR', 'GBP', 'JPY']; // Opciones para la moneda

  return (
    <Container fluid className="mt-3 mb-8 form-container">
      <Form>
        {data.map((item) => (
          <Row key={item.id} className="mb-9">
            {fields.map((field) => (
              <Col key={field.field} md={field.md}>
                <Form.Group controlId={`${field.field}-${item.id}`}>
                  <Form.Label
                    style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
                  >
                    {field.label}
                  </Form.Label>
                  {field.field === 'moneda' ? (
                    <Form.Select
                      value={item[field.field]}
                      onChange={(e) =>
                        handleInputChange(item.id, field.field, e.target.value)
                      }
                      style={{ fontSize: '0.8rem' }}
                    >
                      {monedaOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  ) : field.field === 'fecha' ? (
                    <>
                      <div style={{ marginBottom: '0.01rem' }}> </div>
                      <DatePicker
                        selected={item[field.field]}
                        onChange={(date) =>
                          handleInputChange(item.id, field.field, date)
                        }
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                      />
                    </>
                  ) : (
                    <Form.Control
                      type="text"
                      value={item[field.field]}
                      onChange={(e) =>
                        handleInputChange(item.id, field.field, e.target.value)
                      }
                      style={{ fontSize: '0.8rem' }}
                    />
                  )}
                </Form.Group>
                
              </Col>
            ))}
            
          </Row>
        ))}
        <div className="d-flex justify-content-end">
      <Row> {/* Elimina la clase 'mb-8' aquí */}
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
        {/* Snackbar for success message */}
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
