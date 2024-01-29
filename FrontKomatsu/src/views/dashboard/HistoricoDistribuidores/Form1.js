import React, { useState } from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './RiskForm.css';

const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      año: null, // Cambiado a null para manejar fechas en lugar de cadenas
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
    console.log('Consultar estilo datagrid y cargar base de datos');
  };

  const fields = [
    { label: '', field: 'año', md: 12},
    // Agrega más campos según sea necesario
  ];

  return (
    <Container fluid className="mt-3 mb-8 form-container">
      <Form>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            {/* Encabezado para el campo "Año" */}
            <Row className="mb-8">
              <Col md={12}>
                <Form.Group controlId={`header-año-${item.id}`}>
                  <Form.Label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                    Año
                  </Form.Label>
                </Form.Group>
              </Col>
            </Row>

            {/* Datos del formulario */}
            <Row className="mb-8">
              {fields.map((field) => (
                <Col key={field.field} md={field.md}>
                  <Form.Group controlId={`${field.field}-${item.id}`}>
                    <Form.Label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                      {field.label}
                    </Form.Label>
                    {field.field === 'año' ? (
                      <DatePicker
                        selected={item[field.field]}
                        onChange={(date) =>
                          handleInputChange(item.id, field.field, date)
                        }
                        showYearPicker
                        dateFormat="yyyy"
                        className="form-control"
                      />
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

            {/* Botón de consulta */}
            <Row className="justify-content-end">
  <Col md={2} className="mb-0">
    <button
      className="btn btn-primary btn-consultar"
      onClick={handleConsultButtonClick}
      style={{ marginLeft: '10px', color: 'white' }}
    >
      Consultar
    </button>
  </Col>
</Row>


          </React.Fragment>
        ))}
      </Form>
    </Container>
  );
};

export default EditableTable;
