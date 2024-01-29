// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tabla1 from './Tabla1';
import Tabla2 from './Tabla2';
import Tabla3 from './Tabla3';
import Tabla4 from './Tabla4';
import Tabla5 from './Tabla5';
import Tabla6 from './Tabla6';
import Tabla7 from './Tabla7';
import Tabla8 from './Tabla8';
import Tabla9 from './Tabla9';
import Tabla10 from './Tabla10';
import Tabla11 from './Tabla11';
import Tabla12 from './Tabla12';
import Tabla13 from './Tabla13';
import Tabla14 from './Tabla14';

const TitleWithBorder = ({ children }) => (
  <div style={{ marginBottom: '10px', borderBottom: '2px solid #2196F3', paddingBottom: '5px', marginTop: '20px' }}>
    {children}
  </div>
);

const App = () => {
  return (
    <Container fluid style={{ backgroundColor: 'white', padding: '20px', height: '100vh', overflowY: 'auto' }}>
      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Datos Operacion</h5>
          </TitleWithBorder>
          <Tabla1 />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Antecedentes del Crédito</h5>
            <h7>AVAL</h7>
          </TitleWithBorder>
          <Tabla2 />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <TitleWithBorder>
            <h6>Equipos a Financiar y Permanencia en Stock</h6>
          </TitleWithBorder>
          <Tabla3 />
        </Col>
        <Row></Row>
        <Col xs={12} md={12}>
          <TitleWithBorder>
            <h6>Margen del Negocio</h6>
          </TitleWithBorder>
          <Tabla4 />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <TitleWithBorder>
            <h6>Financiamiento</h6>
          </TitleWithBorder>
          <Tabla5 />
        </Col>
        <Col xs={12} md={12}>
          <TitleWithBorder>
            <h6>Antecedente Credito</h6>
          </TitleWithBorder>
          <Tabla6 />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h6>Linea Vigente Utilizada</h6>
          </TitleWithBorder>
          <Tabla7 />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <TitleWithBorder>
            <h6>Linea Final Aprobada </h6>
          </TitleWithBorder>
          <Tabla8 />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <TitleWithBorder>
            <h5>Observaciones</h5>
          </TitleWithBorder>
          <Tabla9 />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <TitleWithBorder>
            <h5>Garantias</h5>
          </TitleWithBorder>
          <Tabla10 />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={15}>
          <TitleWithBorder>
            <h5>Calificacion de Riesgo Cliente</h5>
          </TitleWithBorder>
          <Tabla11 />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Analisis de Riesgo Cliente</h5>
          </TitleWithBorder>
          <Tabla12 />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={14}>
          <TitleWithBorder>
            <h5>Deuda</h5>
          </TitleWithBorder>
          <Tabla13 />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={14}>
          <TitleWithBorder>
            <h5>Accion</h5>
          </TitleWithBorder>
          <Tabla14 />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
