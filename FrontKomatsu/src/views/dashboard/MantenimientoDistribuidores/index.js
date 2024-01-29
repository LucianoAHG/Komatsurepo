import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form1 from './Form1';
import Form2 from './Form2';

import Tabla3 from './Tabla3';
import Tabla4 from './Tabla4';
import Dialogos from './Dialogos';
import Form5 from './Form5';
import './RiskForm.css';

const TitleWithBorder = ({ children }) => (
  <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>{children}</div>
);

const App = () => {
  return (
    <Container fluid style={{ backgroundColor: 'white', padding: '20px', height: '100vh', overflowY: 'auto' }}>
      {/* Sección: Datos Demográficos */}
      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Mantenimiento de Distribuidores</h5>
          </TitleWithBorder>
          <Form1 />
        </Col>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Avales </h5>
          </TitleWithBorder>
          <Form2 />
        </Col>

        <Col xs={12}>
          <TitleWithBorder>
            <h5> Marcas</h5>
          </TitleWithBorder>
          <Tabla3 />
        </Col>
        <Col xs={12}>
          <TitleWithBorder>
            <h5> </h5>
          </TitleWithBorder>
          <Tabla4 />
        </Col>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Comentarios</h5>
          </TitleWithBorder>
          <Dialogos />
        </Col>
        <Col xs={12}>
          <TitleWithBorder>
            <h5> Indicadores </h5>
          </TitleWithBorder>
          <Form5 />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
