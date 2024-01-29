import React, { useState } from 'react';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './RiskForm.css';
import Modal from 'react-modal';
import './App.css';

const RiskForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
      setModalOpen(true);
    }
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="risk-form-grid">
        <table className="risk-form-table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="fechaEvaluacion">Fecha:</label>
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
                <label htmlFor="nombreCliente">Clasificacion Cliente:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="nombreCliente"
                  name="nombreCliente"
                  onChange={formik.handleChange}
                  value={formik.values.nombreCliente}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="montoCredito">Puntuacion:</label>
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
                <label htmlFor="puntuacionFinal">Puntuacion Final:</label>
              </td>
              <td>
                <input
                  type="number"
                  id="puntuacionFinal"
                  name="puntuacionFinal"
                  onChange={formik.handleChange}
                  value={formik.values.puntuacionFinal}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="raac">Puntuacion Old RAAC:</label>
              </td>
              <td>
                <input type="text" id="raac" name="raac" onChange={formik.handleChange} value={formik.values.raac} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="tipo">Tipo Cliente:</label>
              </td>
              <td>
                <input type="text" id="tipo" name="tipo" onChange={formik.handleChange} value={formik.values.tipo} />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          className="Enviar"
          style={{
            backgroundColor: '#2c85de', // Cambia el color de fondo a tu preferencia
            color: '#ffffff', // Cambia el color del texto a tu preferencia
            padding: '8px 10px', // Ajusta el relleno según sea necesario
            border: 'none', // Elimina el borde si lo deseas
            borderRadius: '5px', // Ajusta la esquina redondeada según sea necesario
            cursor: 'pointer', // Cambia el cursor al pasar el ratón
            width: '100px' // Ajusta el ancho según sea necesario
          }}
        >
          Enviar
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Datos del formulario"
        className="popup" // Aplica la clase CSS para centrar la ventana emergente
      >
        <h3>Datos recién ingresados:</h3>
        <p>
          <strong>Fecha Evaluación:</strong> {new Date(formik.values.fechaEvaluacion).toLocaleDateString()}
        </p>
        <p>
          <strong>Calificacion Cliente:</strong> {formik.values.nombreCliente}
        </p>

        <p>
          <strong>Puntuacion:</strong> {formik.values.montoCredito}
        </p>
        <p>
          <strong>Puntuacion Final:</strong> {formik.values.puntuacionFinal}
        </p>

        <p>
          <strong>Puntuacion Old RAAC:</strong> {formik.values.raac}
        </p>
        <p>
          <strong>Tipo Cliente:</strong> {formik.values.tipo}
        </p>

        {/* Agrega más campos según tus necesidades */}
        <button
          onClick={closeModal}
          style={{
            backgroundColor: '#2c85de', // Cambia el color de fondo a tu preferencia
            color: '#ffffff', // Cambia el color del texto a tu preferencia
            padding: '8px 10px', // Ajusta el relleno según sea necesario
            border: 'none', // Elimina el borde si lo deseas
            borderRadius: '8px', // Ajusta la esquina redondeada según sea necesario
            cursor: 'pointer', // Cambia el cursor al pasar el ratón
            textDecoration: 'none' // Elimina el subrayado
          }}
        >
          Cerrar
        </button>
      </Modal>
    </>
  );
};

export default RiskForm;
