import React, { useState } from 'react';
import { Table, Button, Form, FormGroup, FormControl } from 'react-bootstrap';

const Tabla10 = () => {
  const [comentario, setComentario] = useState('');

  // Ejemplo de datos para la tabla
  const datosTabla10 = [
    {
      moneda: 'USD',
      ventaequipo: 200,
      arriendoequipo: 300,
      servicios: 150,
      leasing: 500,
      creditolatam: 100,
      total: 1250,
    },
    // Agregar más datos según sea necesario
  ];

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  return (
    <div>
      <div style={{ overflowX: 'auto' }}>
        <Table striped bordered hover style={{ width: '200%', minWidth: '800px' }}>
          <thead>
            <tr>
              <th>Moneda</th>
              <th>Venta Equipos (KCC)</th>
              <th>Arriendo de Equipos (KCC2)</th>
              <th>Servicios y Rptos (KCC3)</th>
              <th>Leasing (inc. Int. y gtos)(KCC4)</th>
              <th>Credito Latam (Eq. y Ser/Rptos)</th>
              <th>Total Vigente Utilizada</th>
            </tr>
          </thead>
          <tbody>
            {datosTabla10.map((fila, index) => (
              <tr key={index}>
                <td>{fila.moneda}</td>
                <td>{fila.ventaequipo}</td>
                <td>{fila.arriendoequipo}</td>
                <td>{fila.servicios}</td>
                <td>{fila.leasing}</td>
                <td>{fila.creditolatam}</td>
                <td>{fila.total}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <Table striped bordered hover>
          {/* Encabezado de la tabla (agrega encabezados según tus necesidades) */}
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Valor</th>
              {/* ... Más columnas */}
            </tr>
          </thead>
          <tbody>
            {datosTabla10.map((fila, index) => (
              <tr key={index}>
                <td>{/* Contenido de la celda 1 */}</td>
                <td>0</td>
                {/* ... Más celdas */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Form>
          <FormGroup>
            <Form.Label>Comentario:</Form.Label>
            <FormControl
              as="textarea"
              rows={3}
              value={comentario}
              onChange={handleComentarioChange}
            />
          </FormGroup>
          <Button variant="primary">Guardar Comentario</Button>
        </Form>
      </div>
    </div>
  );
};

export default Tabla10;
