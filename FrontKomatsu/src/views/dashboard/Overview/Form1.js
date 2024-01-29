import React, { useState} from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios'; // Import Axios
import './RiskForm.css';

const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nombre: '',
      sapcode: '',
      aval: '',
      rolunico: '',
    },
  ]);

  const handleInputChange = (id, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleConsultButtonClick = () => {
    // Make a request to the server or API using Axios
    axios.get('your-api-endpoint') // Replace 'your-api-endpoint' with the actual endpoint
      .then((response) => {
        // Update the data state with the received data
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const fields = [
    { label: 'Distribuidor', field: 'nombre', md: 8 },
    { label: 'Sap Code', field: 'sapcode', md: 4 },
    { label: 'Aval', field: 'aval', md: 8 },
    { label: 'Rol Unico', field: 'rolunico', md: 4 },
  ];

  return (
    <Container fluid className="mt-3 mb-4 form-container">
      {data.map((item) => (
        <Form key={item.id}>
          <Row key={item.id} className="mb-3">
            {fields.map((field) => (
              <Col key={field.field} md={field.md}>
                <Form.Group controlId={`${field.field}-${item.id}`}>
                  <Form.Label
                    style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
                  >
                    {field.label}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={item[field.field]}
                    onChange={(e) =>
                      handleInputChange(item.id, field.field, e.target.value)
                    }
                    style={{ fontSize: '0.8rem' }}
                  />
                </Form.Group>
              </Col>
            ))}
          </Row>
          {/* Botón de consulta */}
          <Row className="justify-content-start">
            <Col md={2} className="mb-0">
              <button
                className="btn btn-primary btn-consultar"
                onClick={handleConsultButtonClick}
                style={{ marginLeft: '-5px', color: 'white' }}
              >
                Consultar
              </button>
            </Col>
          </Row>
        </Form>
      ))}
    </Container>
  );
};

export default EditableTable;
