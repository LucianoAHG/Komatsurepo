// TuComponente.js
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TuComponente = ({ mostrarDatosTemporales, abrirDatosTemporales, cerrarDatosTemporales }) => {
  return (
    <>
      <td>
        <Button
          variant="primary"
          style={{ padding: '0.1rem 0.3rem', fontSize: '0.8rem' }}
          onClick={abrirDatosTemporales}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </td>

      {/* Modal para mostrar los datos temporales */}
      <Modal show={mostrarDatosTemporales} onHide={cerrarDatosTemporales}>
        <Modal.Header closeButton>
          <Modal.Title>Datos Temporales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Aquí puedes colocar el contenido de tus datos temporales */}
          {/* Por ejemplo, podrías usar un componente para mostrar los datos */}
          <p>Contenido de datos ...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarDatosTemporales}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TuComponente;
