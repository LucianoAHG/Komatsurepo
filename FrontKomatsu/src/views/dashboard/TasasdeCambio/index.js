import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form1 from './Form1';

const App = () => {
  const [setFormData] = React.useState({
    form1: {}
  });

  const handleFormChange = (formName, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [formName]: data
    }));
  };

  const TitleWithBorder = ({ children }) => (
    <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>{children}</div>
  );

  return (
    <Container fluid style={{ backgroundColor: 'white', padding: '20px', height: '100vh', overflowY: 'auto' }}>
      {/* Sección: Datos Demográficos */}
      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5> Mantenedor Tasa de Cambio</h5>
          </TitleWithBorder>
          <Form1 onChange={(data) => handleFormChange('form1', data)} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
