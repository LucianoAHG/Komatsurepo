import React, { useState } from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';
import './App.css';


const EditableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      rol: '76.176.916-2',
      razonsocial: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      nombrefantasia: 'CORREA Y CORREA LTDA',
      ejecutivo: 'PABLO MORALES',
      sucursal: 'Casa Matriz',
      telefono: ' ',
      email: 'pablo.morales@global.komatsu',
      inicioactiv: '2011-11-21',
      sectoreconomico: 'Transporte',
      tipocliente: 'Antiguo',
      direccion: 'RENGO 220',
      paginaweb: '',
      region: 'Region de Coquimbo',
      comuna: 'Los Vilos',
      telefono1: '55-2340490',
      telefono2: '',
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
    { label: 'Rol Unico Tributario', field: 'rol', md: 4 },
    { label: 'Razon Social', field: 'razonsocial', md: 6 },
    { label: 'Nombre Fantasia', field: 'nombrefantasia', md: 6 },
    { label: 'Ejecutivo', field: 'ejecutivo', md: 3 },
    { label: 'Sucursal', field: 'sucursal', md: 3 },
    { label: 'Telefono', field: 'telefono', md: 3 },
    { label: 'E-mail', field: 'email', md: 3 },
    { label: 'Inicio de Actividades', field: 'inicioactiv', md: 3 },
    { label: 'Sector Economico', field: 'sectoreconomico', md: 3 },
    { label: 'Tipo Cliente', field: 'tipocliente', md: 3 },
    { label: 'Direccion', field: 'direccion', md: 6 },
    { label: 'Pagina Web', field: 'paginaweb', md: 6 },
    { label: 'Region', field: 'region', md: 6 },
    { label: 'Comuna', field: 'comuna', md: 3 },
    { label: 'Telefono 1', field: 'telefono1', md: 3 },
    { label: 'Telefono 2', field: 'telefono2', md: 3 },
  ];

    return (
      <Container className="mt-3 mb-4 form-container">
        <Form>
          {data.map((item) => (
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
          ))}
        </Form>
      </Container>
    );
  };
  
export default EditableTable;