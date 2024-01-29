import React, { useState } from 'react';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Riskform3.css';
import { Row, Col, Button, Container } from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const RiskForm = () => {
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombreCliente: '',
      fechaEvaluacion: new Date(),
      montoCredito: '',
      calificacionRiesgo: '',
      comentarios: '',
      puntuacionFinal: '',
      raac: '',
      tipo: ''
    },

    onSubmit: (values) => {
      console.log(values);
      setSnackbarOpen(true);
    }
  });

  const closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Container fluid className="risk-form-container">
        <form onSubmit={formik.handleSubmit} className="risk-form-grid">
          <table className="risk-form-table">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="fechaEvaluacion">Fecha</label>
                </td>
                <td>
                  <DatePicker
                    id="fechaEvaluacion"
                    name="fechaEvaluacion"
                    selected={formik.values.fechaEvaluacion}
                    onChange={(date) => formik.setFieldValue('fechaEvaluacion', date)}
                    dateFormat="dd/MM/yyyy" // Establece el formato de la fecha
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="nombreCliente">Años en Komatsu</label>
                </td>
                <td>
                  <input
                    type="number"
                    id="nombreCliente"
                    name="nombreCliente"
                    onChange={formik.handleChange}
                    value={formik.values.nombreCliente}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="montoCredito">Comportamiento de Pago</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="montoCredito"
                    name="montoCredito"
                    onChange={formik.handleChange}
                    value={formik.values.montoCredito}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="puntuacionFinal">Credito Promedio</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="puntuacionFinal"
                    name="puntuacionFinal"
                    onChange={formik.handleChange}
                    value={formik.values.puntuacionFinal}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="raac">Linea Amarilla</label>
                </td>
                <td>
                  <input type="text" id="raac" name="raac" onChange={formik.handleChange} value={formik.values.raac} />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="slbc">SBLC</label>
                </td>
                <td>
                  <input type="text" id="slbc" name="slbc" onChange={formik.handleChange} value={formik.values.slbc} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="garantias">Otras garantias</label>
                </td>
                <td>
                  <input type="text" id="garantias" name="garantias" onChange={formik.handleChange} value={formik.values.garantias} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="deuda">Deuda SAP</label>
                </td>
                <td>
                  <input type="text" id="deuda" name="deuda" onChange={formik.handleChange} value={formik.values.deuda} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="embi">EMBI+</label>
                </td>
                <td>
                  <input type="text" id="embi" name="embi" onChange={formik.handleChange} value={formik.values.embi} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Container>

      <Row className="mt-3 justify-content-start">
        <Col md={6}>
          <Button
            variant="primary"
            className="btn btn-primary me-2"
            onClick={() => {
              formik.resetForm();
              setSnackbarOpen(true);
            }}
            type="submit"
          >
            Guardar
          </Button>
          <Button
            variant="primary"
            className="btn btn-primary me-2"
            onClick={() => {
              formik.resetForm();
              setSnackbarOpen(true);
            }}
            type="submit"
          >
            Cancelar
          </Button>
        </Col>
      </Row>

      {/* Snackbar */}
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MuiAlert
          onClose={closeSnackbar}
          severity="success"
          sx={{ width: '130%', backgroundColor: '#009900 ', color: '#FFE4B5' }}
          iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" style={{ color: '#FFE4B5' }} /> }}
        >
          Los datos se han guardado con éxito.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default RiskForm;
