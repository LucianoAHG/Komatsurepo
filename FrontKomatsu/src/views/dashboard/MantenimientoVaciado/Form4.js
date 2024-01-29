import React  from 'react';
import { useFormik } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import './RiskForm4.css';
import {  Container } from 'react-bootstrap';






const RiskForm = () => {


  const formik = useFormik({
    initialValues: {
      deuda: '',
      porcion: '',
      Documentos: '',
      Cuentas: '',
      impuestos: '',
      cuentasp: '',
      impuestosp: '',
      otros: '',
    
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
                  <label htmlFor="nombreCliente">Deuda Bancaria de Corto Plazo </label>
                </td>
            <td>
              <input
                type="number"
                id="deuda"
                name="deuda"
                onChange={formik.handleChange}
                value={formik.values.deuda}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="porcion">Porción Corriente de Largo Plazo</label>
            </td>
            <td>
              <input
                type="text"
                id="porcion"
                name="porcion"
                onChange={formik.handleChange}
                value={formik.values.porcion}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="Documentos">Documentos y Cuentas por Pagar
</label>
            </td>
            <td>
              <input
                type="text"
                id="Documentos"
                name="Documentos"
                onChange={formik.handleChange}
                value={formik.values.Documentos}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="cuentasp">Cuentas por Pagar Empresas Relac.
</label>
            </td>
            <td>
              <input
                type="cuentasp"
                id="cuentasp"
                name="cuentasp"
                onChange={formik.handleChange}
                value={formik.values.cuentasp}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="impuestosp">Impuestos y Previsión por Pagar
</label>
            </td>
            <td>
              <input
                type="text"
                id="impuestosp"
                name="impuestosp"
                onChange={formik.handleChange}
                value={formik.values.impuestosp}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="garantias">Otros Pasivos Circulantes
</label>
            </td>
            <td>
              <input
                type="text"
                id="garantias"
                name="garantias"
                onChange={formik.handleChange}
                value={formik.values.otros}
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