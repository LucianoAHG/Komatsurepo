import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';
import Tabla0 from './Tabla0';
import Tabla01 from './Tabla01';
import Tabla1 from './Tabla1';
import Tabla2 from './Tabla2';
import Tabla3 from './Tabla3';
import Tabla4 from './Tabla4';
import Tabla5 from './Tabla5';


const App = () => {
  const mainCardStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    textAlign: 'right',
  };

  const wrapperStyle = {
    border: '2px solid white', // Set border style as needed
    borderRadius: '10px', // Set border radius as needed
    overflow: 'hidden', // Ensure the content doesn't overflow the border
    backgroundColor: 'white', // Set background color as needed
  };

  const titleStyle = {
    marginBottom: '10px',
    borderBottom: '2px solid blue',
    paddingBottom: '5px',
    marginTop: '20px',
    textAlign: 'left', // Align column headers to the left
  };

  const specialClientTitleStyle = {
    marginBottom: '10px',
    marginTop: '20px',
    textAlign: 'left', // Align column headers to the left
  };

  const rowStyle = {
    justifyContent: 'space-between', // Align items within the row
  };

  return (
    <>
      <Typography
        sx={{
          color: '#2196F3',
          fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
          fontSize: '13px',
          fontWeight: 700,
          marginBottom: 1,
          width: '100%',
        }}
      ></Typography>
      <div style={mainCardStyle}>
        <MainCard title="Inicio Cliente">
          {/* Contenido del componente MainCard */}
        </MainCard>
      </div>
      <div style={wrapperStyle}>
        <Container fluid style={{ padding: '20px', height: '80vh', overflowY: 'auto' }}>
          <Row style={rowStyle}>
            <Col xs={12} md={30}>
              <h4 style={specialClientTitleStyle}>Carpeta de Cliente</h4>
              <Tabla0 />
            </Col>
            <Col xs={12} md={12}>
              <h4 style={titleStyle}>Tareas</h4>
              <Tabla1 />
            </Col>
            <Col xs={12} md={12}>
              <h4 style={titleStyle}>Requiere su acción</h4>
              <Tabla2 />
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs={12} md={12}>
              <h4 style={titleStyle}>Requiere su aprobación</h4>
              <Tabla3 />
            </Col>
            <Col xs={12} md={12}>
              <h4 style={titleStyle}>En Comité</h4>
              <Tabla4 />
            </Col>
          </Row>
          <Row style={rowStyle}>
            <Col xs={12} md={12}>
              <h4 style={titleStyle}>Línea Operación Aprobada</h4>
              <Tabla5 />
            </Col>
            
            <Col xs={12} md={12}>
              <h4 style={titleStyle}>Línea Operación Rechazada</h4>
              <Tabla01 />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
