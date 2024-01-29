// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Tabla13 from './Tabla13';

const TitleWithBorder = ({ children }) => (
  <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>{children}</div>
);

const App = () => {
  return (
    <Container fluid style={{ backgroundColor: 'white', padding: '20px', height: '100vh', overflowY: 'auto' }}>
      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Vaciado Dai</h5>
          </TitleWithBorder>
          <Tabla13 />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
