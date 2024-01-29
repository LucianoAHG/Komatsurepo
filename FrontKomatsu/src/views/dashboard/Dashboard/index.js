import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form1 from './Form1';
import Tabla2 from './Tabla2';
import Tabla3 from './Tabla3';
import Tabla4 from './Tabla4';
import Tabla5 from './Tabla5';
import Tabla6 from './Tabla6';

const App = () => {
  const [formData, setFormData] = React.useState({
    form1: {},
    form2: {},
    tabla3: {},
    tabla4: {},
    tabla5: {},
    tabla6: {}
  });

  const handleFormChange = (formName, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [formName]: data
    }));
  };

  const handleSalir = () => {
    // Implementa la lógica para guardar los datos
    console.log('Salir:', formData);
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
            <h5> Dashboard</h5>
          </TitleWithBorder>
          <Form1 onChange={(data) => handleFormChange('form1', data)} />
        </Col>
      </Row>

      {/* Agregar espacio entre secciones */}
      <div style={{ margin: '20px 0' }}></div>

      {/* Sección: Activo Circulante */}
      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5> Resumen Financiero</h5>
          </TitleWithBorder>
          <Tabla2 onChange={(data) => handleFormChange('tabla2', data)} />
        </Col>
      </Row>
      <Row>
        <div style={{ margin: '50px 0' }}></div>
        <Col xs={20}>
          <TitleWithBorder>
            <h5> RAAC </h5>
          </TitleWithBorder>
          <Tabla4 onChange={(data) => handleFormChange('tabla4', data)} />
        </Col>
      </Row>

      <Row>
        <div style={{ margin: '50px 0' }}></div>
        <Col xs={20}>
          <TitleWithBorder>
            <h5> Puntaje RAAC </h5>
          </TitleWithBorder>
          <Tabla5 onChange={(data) => handleFormChange('tabla5', data)} />
        </Col>
      </Row>

      <Row>
        <div style={{ margin: '50px 0' }}></div>
        <Col xs={20}>
          <TitleWithBorder>
            <h5> Declaracion de Ingresos </h5>
          </TitleWithBorder>
          <Tabla6 onChange={(data) => handleFormChange('tabla6', data)} />
        </Col>
      </Row>

      {/* Agregar más espacio entre secciones */}
      <div style={{ margin: '80px 0' }}></div>

      {/* Sección: RAAC Distribuidores */}
      <Row>
        <Col xs={20}>
          <TitleWithBorder>
            <h5> RAAC Distribuidores</h5>
          </TitleWithBorder>
          <Tabla3 onChange={(data) => handleFormChange('tabla3', data)} />
        </Col>
      </Row>

      {/* Sección: RAAC Distribuidores */}

      <div style={{ marginTop: '23px', display: 'flex', justifyContent: 'flex-start' }}>
        {/* Botones de Guardar y Cancelar */}
        <Row>
          <Col xs={12} className="text-center">
            <button type="button" className="guardar-btn" onClick={handleSalir}>
              Salir
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default App;
