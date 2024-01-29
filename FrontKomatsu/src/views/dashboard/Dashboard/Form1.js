import React, { useState } from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';
import './RiskForm.css';
import './App.css';

const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      credito: '',
      sblc: '',
      otro: ''
    }
  ]);

  const handleInputChange = (id, field, value) => {
    setData((prevData) => prevData.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  return (
    <Container fluid className="mt-3 mb-8 form-container">
      <Form>
        <Row>
          <Col md={6}>
            <Form.Label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Linea de Credito</Form.Label>
          </Col>
          <Col md={3}>
            <Form.Label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>SBLC</Form.Label>
          </Col>
          <Col md={3}>
            <Form.Label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Otro</Form.Label>
          </Col>
        </Row>

        {data.map((item) => (
          <Row key={item.id} className="mb-8">
            <Col md={6}>
              <Form.Group controlId={`credito-${item.id}`}>
                <Form.Control
                  type="text"
                  value={item.credito}
                  onChange={(e) => handleInputChange(item.id, 'credito', e.target.value)}
                  style={{ fontSize: '0.8rem' }}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId={`sblc-${item.id}`}>
                <Form.Control
                  type="text"
                  value={item.sblc}
                  onChange={(e) => handleInputChange(item.id, 'sblc', e.target.value)}
                  style={{ fontSize: '0.8rem' }}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId={`otro-${item.id}`}>
                <Form.Control
                  type="text"
                  value={item.otro}
                  onChange={(e) => handleInputChange(item.id, 'otro', e.target.value)}
                  style={{ fontSize: '0.8rem' }}
                />
              </Form.Group>
            </Col>
          </Row>
        ))}
      </Form>
    </Container>
  );
};

export default EditableTable;
