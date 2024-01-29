// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tabla1 from './Tabla1';
import Tabla2 from './Tabla2';
import Tabla3 from './Tabla3';
import Tabla4 from './Tabla4';
import Tabla5 from './Tabla5';
import Tabla51 from './Tabla51';
import Tabla6 from './Tabla6';
import Tabla7 from './Tabla7';
import Tabla8 from './Tabla8';
import Tabla9 from './Tabla9';

const TitleWithBorder = ({ children }) => (
  <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>
    {children}
  </div>
);

const App = () => {
  return (
    <Container fluid style={{ backgroundColor: 'white', padding: '20px', height: '100vh', overflowY: 'auto' }}>
      {/* Sección: Datos Demográficos */}
      <Row>
        <Col xs={12}>
        <TitleWithBorder>
          <h5>Datos Demográficos</h5>
        </TitleWithBorder>
          <Tabla1 />
        </Col>
      </Row>

      {/* Sección: Giros */}
      <Row>
        <Col xs={12}>
        <TitleWithBorder>
          <h5>Giros</h5>
          </TitleWithBorder>
          <h7></h7>
          <Tabla2 />
        </Col>
      </Row>

      {/* Sección: Contactos y Descripcion del Giro */}
      <Row>
        <Col xs={12} md={12}>
        <TitleWithBorder>
          <h5>Contactos</h5>
          </TitleWithBorder>
          <Tabla3 />
        </Col>
        <Col xs={12} md={12}>
        <TitleWithBorder>
          <h5>Descripcion del Giro</h5>
         </TitleWithBorder>
          <Tabla4 />
        </Col>
      </Row>

      {/* Sección: Informe Comercial del Cliente y Socios y Empresas Relacionadas */}
      <Row>
  <Col xs={12} md={12}>
    <TitleWithBorder>
      <h5>Informe Comercial del Cliente</h5>
    </TitleWithBorder>
    <Tabla5 />
  </Col>

  <Col xs={12} md={12}>
    <TitleWithBorder>
      {/* Remove the empty h5 tag */}
    </TitleWithBorder>
    <Tabla51 />
  </Col>

  <Col xs={12} md={12}>
    <TitleWithBorder>
      <h5>Socios y Empresas Relacionadas</h5>
    </TitleWithBorder>
    <Tabla6 />
  </Col>
</Row>

      {/* Sección: Otra sección (¿Puedes proporcionar un título?) */}
      <Row>
        <Col xs={12}>
          <h5> </h5>
          <Tabla7 />
        </Col>
      </Row>

      {/* Sección: Datos Cuantitativos */}
      <Row>
        <Col xs={12}>
        <TitleWithBorder>
          <h5>Datos Cuantitativos</h5>
          </TitleWithBorder>
          <Tabla8 />
        </Col>
      </Row>

      <>
  {/* Sección: Solicitudes */}
  <TitleWithBorder>
    <h5>Solicitudes</h5>
  </TitleWithBorder>
  <Tabla9 />
</>
    </Container>
  );
};

export default App;
