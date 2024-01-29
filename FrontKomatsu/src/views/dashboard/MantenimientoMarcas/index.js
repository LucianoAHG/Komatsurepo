import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form1 from './Form1'



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
            <h5>Mantenedor de Marcas</h5>
          </TitleWithBorder>
            <Form1 />
          </Col>
         </Row>
        </Container>
  );
};

export default App;
