import React, { useState } from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './RiskForm.css';

const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nombre: '',
      año: '',
      moneda: '',
    },
  ]);

  const handleInputChange = (id, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const fields = [
    { label: 'Distribuidor', field: 'nombre', md: 8 },
    { label: 'Año', field: 'año', md: 2}, // Changed from 6 to 4
    { label: 'Moneda', field: 'moneda', md: 2 },
  ];

  const monedaOptions = ['USD', 'EUR', 'CLP', 'UF', 'ARS', 'PEN', 'COP', 'UYU', 'PYG', 'PAB', 'BOL'];


  return (
    <Container fluid className="mt-2 mb-5 form-container">
      <Form>
        {data.map((item) => (
          <Row key={item.id} className="mb-8">
            {fields.map((field) => (
              <Col key={field.field} md={field.md}>
                <Form.Group controlId={`${field.field}-${item.id}`}>
                  {field.field === 'año' ? (
                    <>
                      <Form.Label
                        style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
                      >
                        {field.label}
                      </Form.Label>
                      <Col>
                        <DatePicker
                          selected={item[field.field]}
                          onChange={(date) =>
                            handleInputChange(item.id, field.field, date)
                          }
                          dateFormat="yyyy"
                          showYearDropdown
                          yearDropdownItemNumber={10}
                          scrollableYearDropdown
                          className="form-control"
                        />
                      </Col>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </Form.Group>
              </Col>
            ))}
          </Row>
        ))}
      </Form>
    </Container>
  );
};

export default EditableTable;
