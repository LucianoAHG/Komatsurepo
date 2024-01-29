import React from 'react';
import { useFormik } from 'formik';
import { Container, Button, InputGroup } from 'react-bootstrap'; // Asumiendo que estás usando Bootstrap
import AddIcon from '@mui/icons-material/Add';
import 'react-datepicker/dist/react-datepicker.css';
import './Riskform3.css';


const RiskForm = () => {
  const [filas, setFilas] = React.useState([{ key: 1, name: 'nombreCliente' }]);
  
  const formik = useFormik({
    initialValues: filas.reduce((acc, fila) => ({ ...acc, [fila.name]: '' }), {}),
  });

  const agregarFila = () => {
    const nuevaFila = {
      key: filas.length + 1,
      name: `nuevaFila${filas.length + 1}`,
    };
    setFilas([...filas, nuevaFila]);
    formik.setValues({ ...formik.values, [nuevaFila.name]: '' });
  };

  const guardarDatos = () => {
    console.log('Datos guardados:', formik.values);
  };

  return (
    <div>
      <Container fluid className="risk-form-container">
        <form onSubmit={formik.handleSubmit} className="risk-form-grid">
          <table className="risk-form-table">
            <tbody>
              {filas.map((fila) => (
                <tr key={fila.key}>
                  <td>
                    <input
                      type="text"
                      id={fila.name}
                      name={fila.name}
                      onChange={formik.handleChange}
                      value={formik.values[fila.name]}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                <InputGroup>
            <Button
                onClick={agregarFila}
                variant="primary"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#1976D2', // Color celeste
                  marginLeft: '-40px',
                }}
              >
                <AddIcon />
              </Button>
            </InputGroup>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            {/* Puedes dejar este div vacío o agregar contenido adicional si es necesario */}
          </div>

         
        </form>
      </Container>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '-50px', marginLeft: '10px', marginBottom: '30px' }}>
            <Button
              type="submit"
              variant="primary"
              onClick={guardarDatos}
            >
              Guardar
            </Button>
          </div>
    </div>
  );
};

export default RiskForm;
