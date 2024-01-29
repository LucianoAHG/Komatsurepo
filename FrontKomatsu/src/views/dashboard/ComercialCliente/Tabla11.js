import React from 'react';
import { Table } from 'react-bootstrap';

const TuComponente = () => {
  const datosTabla1 = [
    { calificacioncliente: 'Puntuacion' , fecha: '48'  },
    { calificacioncliente: 'Puntuacion Final', fecha: '144' },
    { calificacioncliente: 'Puntuacion Old RAAC', fecha: '20' },
    { calificacioncliente: 'Tipo Cliente', fecha: 'A' },
   
    // ... más datos
  ];

  const datosTabla2 = [
    { calificacioncliente: 'Puntuacion' , fecha: '48'  },
    { calificacioncliente: 'Puntuacion Final', fecha: '144' },
    { calificacioncliente: 'Puntuacion Old RAAC', fecha: '20' },
    { calificacioncliente: 'Tipo Cliente', fecha: 'A' },
   
  ];

  const datosTabla3 = [
    { calificacioncliente: 'Puntuacion' , fecha: '48'  },
    { calificacioncliente: 'Puntuacion Final', fecha: '144' },
    { calificacioncliente: 'Puntuacion Old RAAC', fecha: '20' },
    { calificacioncliente: 'Tipo Cliente', fecha: 'A' },
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th>Calificacion Cliente</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {datosTabla1.map((fila, index) => (
            <tr key={index}>
              <td>{fila.calificacioncliente}</td>
              <td>{fila.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th>Calificacion Cliente</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {datosTabla2.map((fila, index) => (
            <tr key={index}>
              <td>{fila.calificacioncliente}</td>
              <td>{fila.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th>Clasificacion Cliente</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {datosTabla3.map((fila, index) => (
            <tr key={index}>
              <td>{fila.calificacioncliente}</td>
              <td>{fila.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TuComponente;
