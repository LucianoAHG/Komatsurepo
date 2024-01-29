// src/App.js
import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'; // Importa el componente Form de react-bootstrap
import Tabla1 from './Tabla1';
import './App.css';

const TitleWithBorder = ({ children }) => (
  <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>
    {children}
  </div>
);

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Aquí puedes agregar lógica de búsqueda según tus necesidades
    // Puedes filtrar los datos en Tabla1 según el término de búsqueda, por ejemplo.
  };

  return (
    <Container fluid style={{ backgroundColor: 'white', padding: '20px', height: '300vh', overflowY: 'auto' }}>
      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h6 style={{ marginBottom: '20px' }}>Reporte en Linea / Completo</h6>
          </TitleWithBorder>

          {/* Barra de búsqueda */}
          <Form.Control
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ marginBottom: '10px' }}
          />

          <Tabla1 style={{ margin: '0 -10px' }} searchTerm={searchTerm} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
