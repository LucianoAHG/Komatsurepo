import React  from 'react';
import { useFormik } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import './Riskform3.css';
import {  Container } from 'react-bootstrap';






const RiskForm = () => {


  const formik = useFormik({
    initialValues: {
      Disponible: '0,00',
      Deposito: '0,00',
      Documentos: '0,00',
      Cuentas: '0,00',
      Existencias: '0,00',
      Otros: '0,00',
    },


   
  });



  return (
    <div>
    <Container fluid className="risk-form-container">
    <form onSubmit={formik.handleSubmit} className="risk-form-grid">
      <table className="risk-form-table">
        <tbody>


          <tr>
          <td style={{ width: '55%', verticalAlign: 'top' }}>
                  <label htmlFor="nombreCliente">Disponible</label>
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
              <label htmlFor="montoCredito">Deposito</label>
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
              <label htmlFor="puntuacionFinal">Documentos</label>
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
              <label htmlFor="raac">Cuentas</label>
            </td>
            <td>
              <input
                type="text"
                id="raac"
                name="raac"
                onChange={formik.handleChange}
                value={formik.values.raac}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="slbc">Existencias</label>
            </td>
            <td>
              <input
                type="text"
                id="slbc"
                name="slbc"
                onChange={formik.handleChange}
                value={formik.values.slbc}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="garantias">Otros</label>
            </td>
            <td>
              <input
                type="text"
                id="garantias"
                name="garantias"
                onChange={formik.handleChange}
                value={formik.values.garantias}
              />
            </td>
          </tr>
         
        </tbody>
      </table>
      
      
      </form>
      </Container>
   
    

  

</div>
);
};



export default RiskForm;
