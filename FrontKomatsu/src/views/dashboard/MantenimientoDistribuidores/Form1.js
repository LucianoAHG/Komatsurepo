import React, { useState } from 'react';
import { Form, Col, Container, Row, Button, Alert } from 'react-bootstrap';
import './RiskForm.css';

const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      distribuidor: '',
      sap_code: '',
      rol_unico: ''
    }
  ]);
  const [error, setError] = useState(null);

  const handleInputChange = (id, field, value) => {
    setData((prevData) => prevData.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const handleConsultar = async () => {
    try {
      const selectedFields = ['distribuidor', 'sap_code', 'rol_unico'];
      const filterValues = {};
      data.forEach((item) => {
        selectedFields.forEach((field) => {
          filterValues[field] = item[field];
        });
      });

      // Construir la cadena de consulta con los valores del filtro
      const filterString = Object.entries(filterValues)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

      const response = await fetch(`http://127.0.0.1:5000/api/data?${filterString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Error al obtener datos del servidor');
      }

      const responseData = await response.json();

      // Actualizar los datos en el estado sin reemplazar la respuesta del servidor
      setData((prevData) => prevData.map((item) => {
        const newItem = responseData.data.find((serverItem) => serverItem.id === item.id);
        return newItem ? { ...item, ...newItem } : item;
      }));
      setError(null); // Limpiar mensaje de error si había alguno
    } catch (error) {
      console.error('Error:', error.message);
      setError('Error al obtener datos del servidor');
    }
  };

  const fields = [
    { label: 'Distribuidor', field: 'distribuidor', md: 8 },
    { label: 'Sap Code', field: 'sap_code', md: 4 },
    { label: 'Rol Unico', field: 'rol_unico', md: 4 }
  ];

  return (
    <Container fluid className="mt-3 mb-4 form-container">
      {error && <Alert variant="danger">{error}</Alert>}

      <Form>
        {data.map((item) => (
          <Row key={item.id} className="mb-3">
            {fields.map((field) => (
              <Col key={field.field} md={field.md}>
                <Form.Group controlId={`${field.field}-${item.id}`}>
                  <Form.Label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{field.label}</Form.Label>
                  <Form.Control
                    type="text"
                    value={item[field.field]}
                    onChange={(e) => handleInputChange(item.id, field.field, e.target.value)}
                    style={{ fontSize: '0.8rem' }}
                  />
                </Form.Group>
              </Col>
            ))}
          </Row>
        ))}
      </Form>

      <Row className="d-flex justify-content-end pe-3">
        <Col className="d-flex button-container justify-content-start">
          <Button variant="primary" className="mt-3 me-3" onClick={handleConsultar}>
            Consultar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EditableTable;
