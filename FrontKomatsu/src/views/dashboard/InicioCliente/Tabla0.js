import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'; // Importa Modal y Form de react-bootstrap
import './TuComponente.css'; // Importa el archivo de estilos

const TuComponente = () => {
  const [carpetasExistentes, setCarpetasExistentes] = useState([]);
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nombreCarpeta, setNombreCarpeta] = useState('');

  const handleCrearCarpeta = () => {
    setMostrarModal(true);
  };

  const handleGuardarCarpeta = () => {
    // Realiza validaciones o lógica adicional si es necesario
    if (nombreCarpeta.trim() !== '') {
      setCarpetasExistentes([...carpetasExistentes, nombreCarpeta]);
      setMostrarAviso(true);
      setNombreCarpeta('');

      setTimeout(() => {
        setMostrarAviso(false);
      }, 3000);

      console.log(`Carpeta "${nombreCarpeta}" creada`);
      setMostrarModal(false); // Cierra el modal después de guardar la carpeta
    }
  };

  return (
    <div className="tu-componente">
      <h2 className="titulo"> </h2>
      <Button 
  onClick={handleCrearCarpeta} 
  style={{ 
    backgroundColor: '#2c85de',  // Cambiar color de fondo
    color: 'white',           // Cambiar color de texto
    borderRadius: '7px',      // Cambiar esquinas redondeadas
    padding: '5px 10px'       // Cambiar padding
  }}
>
  Crear Carpeta
</Button>
      {/* Mostrar el aviso solo si mostrarAviso es true */}
      {mostrarAviso && (
        <div className="aviso">
          Carpeta creada con éxito: {nombreCarpeta}
        </div>
      )}

      {/* Modal para crear una nueva carpeta */}
      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Carpeta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNombreCarpeta">
              <Form.Label>Nombre de la carpeta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre de la carpeta"
                value={nombreCarpeta}
                onChange={(e) => setNombreCarpeta(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setMostrarModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleGuardarCarpeta}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TuComponente;
