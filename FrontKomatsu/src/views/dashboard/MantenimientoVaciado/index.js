import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App = () => {
  const initialFormData = {
    form1: {},
    form2: {},
    form3: {},
    form4: {},
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleFormChange = (formName, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [formName]: data,
    }));
  };

  const handleGuardar = () => {
    // Implementa la lógica para guardar los datos
    console.log("Datos guardados:", formData);
    setShowSnackbar(true);
  };

  const handleCancelar = () => {
    // Reiniciar los formularios al estado inicial
    setFormData(initialFormData);
    console.log("Formularios reiniciados");
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  const TitleWithBorder = ({ children }) => (
    <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>
      {children}
    </div>
  );

  return (
<Container fluid style={{ backgroundColor: 'white', padding: '20px', height: '100vh', overflowY: 'auto' }}>     
      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Mantenedor de Vaciados</h5>
          </TitleWithBorder>
          <Form1 onChange={(data) => handleFormChange("form1", data)} />
        </Col>
      </Row>

      {/* Sección: Activo Circulante */}
      <Row className="mb-4">
  <Col xs={12}>
    <TitleWithBorder>
      <h5>Activo Circulante</h5>
    </TitleWithBorder>
    <Form2 onChange={(data) => handleFormChange("form2", data)} />
  </Col>
</Row>


      {/* Sección: Activo Fijo */}
      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Activo Fijo</h5>
          </TitleWithBorder>
          <Form3 onChange={(data) => handleFormChange("form3", data)} />
        </Col>
      </Row>

      {/* Sección: Pasivo Circulante */}
      <Row>
        <Col xs={12}>
          <TitleWithBorder>
            <h5>Pasivo Circulante</h5>
          </TitleWithBorder>
          <Form4 onChange={(data) => handleFormChange("form4", data)} />
        </Col>
      </Row>

      {/* Botones de Guardar y Cancelar */}
      <Row className="mt-3">
  <Col xs={12} className="d-flex justify-content-start"> {/* Change justify-content-end to justify-content-start */}
    <Button variant="primary" className="me-2" onClick={handleGuardar}>
      Guardar
    </Button>
    <Button variant="primary" onClick={handleCancelar}>
      Cancelar
    </Button>
  </Col>
</Row>

<Snackbar
      open={showSnackbar}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity="success"
        style={{
          backgroundColor: '#009900',  // Color de fondo
          color: '#FFE4B5',             // Color del texto
        }}
      >
        Los datos se han guardado con éxito.
        {/* Puedes añadir un icono personalizado aquí si es necesario */}
      </Alert>
    </Snackbar>
  

    </Container>
  );
};

export default App;
