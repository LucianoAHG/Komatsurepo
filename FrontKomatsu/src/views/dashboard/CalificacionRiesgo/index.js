// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tabla1 from './Tabla1';
import Tabla12 from './Tabla12';


const TitleWithBorder = ({ children }) => (
  <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>
    {children}
  </div>
);
  
const App = () => {
  return (
    <Container fluid style={{ backgroundColor: 'white', padding: '20px', height: '100vh', overflowY: 'auto' }}>
      
      <Row>
        <Col xs={12}>
        <TitleWithBorder>
          <h5> Calificacion de Riesgo</h5>
          </TitleWithBorder>
          <Tabla1/>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
        <TitleWithBorder>
          <h5>Analisis de Riesgo Cliente</h5>
          </TitleWithBorder>
          <Tabla12/>
        </Col>
      </Row>

    </Container>
  );
};

export default App;
