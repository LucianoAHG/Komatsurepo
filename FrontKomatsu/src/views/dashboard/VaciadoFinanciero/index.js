// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Tabla1 from './Tabla2';
import Tabla2 from './Tabla2';
import Tabla3 from './Tabla3';

import Tabla6 from './Tabla6';
import Tabla7 from './Tabla7';
import Tabla8 from './Tabla8';

const TitleWithBorder = ({ children }) => (
  <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>{children}</div>
);

const App = () => {
  return (
    <Container fluid className="app-container">
      <div className="tables-container">
        {/* Bloque para ACTIVOS y PASIVOS */}
        <div className="table">
          <TitleWithBorder>
            <h5>ACTIVOS</h5>
          </TitleWithBorder>
          <Tabla1 />
        </div>
        <div className="table">
          <TitleWithBorder>
            <h5>PASIVOS</h5>
          </TitleWithBorder>
          <Tabla2 />
        </div>
      </div>

      {/* Bloque para Estado de Resultados y Análisis de Indicadores */}
      <div className="tables-container">
        <div className="table">
          <TitleWithBorder>
            <h5>Estado de Resultados</h5>
          </TitleWithBorder>
          {/* Utiliza el componente adecuado para el Estado de Resultados, por ejemplo, Tabla12 */}
          <Tabla2 />
        </div>
        <div className="table">
          <TitleWithBorder>
            <h5>Análisis de Indicadores</h5>
          </TitleWithBorder>

          {/* Utiliza el componente adecuado para el Análisis de Indicadores, por ejemplo, Tabla13 */}
          <Tabla3 />
        </div>
      </div>

      <Row>
        <Col xs={12} md={12}>
          <h5>Otros Ajustes Cashflow</h5>
          <Tabla6 />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h5>Comentario Vaciado</h5>
          <Tabla7 />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <h5>Ultima Actualizacion Usuario </h5>
          <Tabla8 />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
