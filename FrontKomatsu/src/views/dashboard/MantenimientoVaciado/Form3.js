import React  from 'react';
import { useFormik } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import './Riskform3.css';
import {  Container } from 'react-bootstrap';






const RiskForm = () => {


  const formik = useFormik({
    initialValues: {
      bienes: '',
      vehiculos: '',
      maquinaria: '',
      
      deprecacion: '',
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
                  <label htmlFor="nombreCliente">Bienes</label>
                </td>
            <td>
              <input
                type="number"
                id="bienes"
                name="bienes"
                onChange={formik.handleChange}
                value={formik.values.bienes}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="vehiculos">Vehiculos</label>
            </td>
            <td>
              <input
                type="text"
                id="vehiculos"
                name="vehiculos"
                onChange={formik.handleChange}
                value={formik.values.vehiculos}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="maquinaria">Maquinaria</label>
            </td>
            <td>
              <input
                type="text"
                id="maquinaria"
                name="maquinaria"
                onChange={formik.handleChange}
                value={formik.values.maquinaria}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="deprecacion">Deprecacion</label>
            </td>
            <td>
              <input
                type="text"
                id="deprecacion"
                name="deprecacion"
                onChange={formik.handleChange}
                value={formik.values.deprecacion}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="otros">Otros</label>
            </td>
            <td>
              <input
                type="text"
                id="otros"
                name="otros"
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
