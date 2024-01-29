import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form1 from './Form1'
import Tabla2 from './Tabla2'
import Tabla3 from './Tabla3'
import Tabla4 from './Tabla4'
import Tabla5 from './Tabla5'
import Tabla6 from './Tabla6'


const App = () => {
  const [ setFormData] = React.useState({
    form1: {},
  
  });

  const handleFormChange = (formName, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [formName]: data,
    }));
  };


  
const TitleWithBorder = ({ children }) => (
    <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>
      {children}
    </div>
  );

return (
  <Container fluid style={{ backgroundColor: 'white', padding: '20px', height: '100vh', overflowY: 'auto' }}>
  {/* Sección: Datos Demográficos */}
  <Row>
    <Col xs={12}>
      <TitleWithBorder>
        <h5> Listado General</h5>
      </TitleWithBorder>
      <Form1 onChange={(data) => handleFormChange("form1", data)} />
    </Col>
  </Row>

  <Row>
    <Col xs={12}>
      <TitleWithBorder>
        <h5> Historico</h5>
      </TitleWithBorder>
      <Tabla6 onChange={(data) => handleFormChange("tabla6", data)} />
    </Col>
  </Row>


  <Row>
    <Col xs={12}>
      <TitleWithBorder>
        <h5> Distribuidor:</h5>
      </TitleWithBorder>
      <Tabla2 onChange={(data) => handleFormChange("tabla2", data)} />
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
      <TitleWithBorder>
        <h5> Distribuidor:</h5>
      </TitleWithBorder>
      <Tabla3 onChange={(data) => handleFormChange("tabla3", data)} />
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
      <TitleWithBorder>
        <h5> Distribuidor: </h5>
      </TitleWithBorder>
      <Tabla4 onChange={(data) => handleFormChange("tabla4", data)} />
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
      <TitleWithBorder>
        <h5> Distribuidor: </h5>
      </TitleWithBorder>
      <Tabla5 onChange={(data) => handleFormChange("tabla4", data)} />
    </Col>
  </Row>


 

  
</Container>
);
};

export default App;