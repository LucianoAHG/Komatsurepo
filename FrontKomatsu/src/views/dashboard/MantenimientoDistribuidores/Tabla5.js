import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Container, Button } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import AddIcon from '@mui/icons-material/Add';
import './Riskform3.css';

const RiskForm = () => {
  const [filas1, setFilas1] = useState([{ key: 1, name: 'nombreCliente' }]);
  const [filas2, setFilas2] = useState([{ key: 1, name: 'nombreCliente2' }]);

  const formik1 = useFormik({
    initialValues: filas1.reduce((acc, fila) => ({ ...acc, [fila.name]: '' }), {})
  });

  const formik2 = useFormik({
    initialValues: filas2.reduce((acc, fila) => ({ ...acc, [fila.name]: '' }), {})
  });

  const agregarFila1 = () => {
    const nuevaFila = {
      key: filas1.length + 1,
      name: `nuevaFila${filas1.length + 1}`
    };
    setFilas1([...filas1, nuevaFila]);
    formik1.setValues({ ...formik1.values, [nuevaFila.name]: '' });
  };

  const agregarFila2 = () => {
    const nuevaFila = {
      key: filas2.length + 1,
      name: `nuevaFila${filas2.length + 1}`
    };
    setFilas2([...filas2, nuevaFila]);
    formik2.setValues({ ...formik2.values, [nuevaFila.name]: '' });
  };

  const guardarDatos = () => {
    // Implement the logic to save data here
  };

  const renderTableRows = (filas, formik) => {
    return filas.map((fila) => (
      <tr key={fila.key}>
        <td>
          <input type="text" id={fila.name} name={fila.name} onChange={formik.handleChange} value={formik.values[fila.name]} />
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <Container fluid className="risk-form-container">
        {/* Primer formulario */}
        <div>
          <h5 style={{ marginLeft: '20px' }}>Partners/ShareHolder</h5>
          <form onSubmit={formik1.handleSubmit} className="risk-form-grid">
            <table className="risk-form-table">
              <tbody>
                {renderTableRows(filas1, formik1)}
                <tr>
                  <td>
                    <Button
                      onClick={agregarFila1}
                      variant="primary"
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: '#1976D2', // Color celeste
                        marginLeft: '-40px'
                      }}
                    >
                      <AddIcon />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Container>

      {/* Botón de guardar */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '-30px', marginLeft: '7px', marginBottom: '50px' }}>
        <Button type="submit" variant="primary" onClick={guardarDatos}>
          Guardar
        </Button>
      </div>

      <Container fluid className="risk-form-container">
        {/* Segundo formulario */}
        <div>
          <h5 style={{ marginLeft: '20px' }}> Share</h5>
          <form onSubmit={formik2.handleSubmit} className="risk-form-grid">
            <table className="risk-form-table">
              <tbody>
                {renderTableRows(filas2, formik2)}
                <tr>
                  <td>
                    <Button
                      onClick={agregarFila2}
                      variant="primary"
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: '#1976D2', // Color celeste
                        marginLeft: '-40px'
                      }}
                    >
                      <AddIcon />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Container>

      {/* Botón de guardar */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '-30px', marginLeft: '10px', marginBottom: '37px' }}>
        <Button type="submit" variant="primary" onClick={guardarDatos}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default RiskForm;
