// src/componentes/Tabla4.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Tabla6 = () => {
  // Ejemplo de datos para la tabla
  const datosTabla6 = [
    
   
    // Agregar más datos según sea necesario
  ];

  return (
    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Oper</th>
            <th>Rut</th>
            <th>Empresa</th>
            <th>Ejecutivo</th>
            <th>Monto USD</th>
            <th>Fecha Inicio</th>
            <th>Fch. Rech</th>
            <th>EJ</th>
            <th>ASC</th>
            <th>AC</th>
            <th>JFS</th>
            <th>JC</th>
            <th>SGC</th>
            <th>GCC</th>
            <th>CFO</th>
            <th>GG</th>
            <th>CFO VP</th>
            <th>CEO</th>
            <th>Hecho</th>
            <th>PPT</th>
            <th>PDF</th>
            <th>Subir PDF</th>
            <th>Generar PDF</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datosTabla6.map((fila, index) => (
            <tr key={index}>
              <td>{fila.dato}</td>
              <td>{fila.operacion}</td>
              <td>{fila.rut}</td>
              <td>{fila.empresa}</td>
              <td>{fila.ejecutivo}</td>
              <td>{fila.montoUSD}</td>
              <td>{fila.fechainicio}</td>
              <td>{fila.fcharech}</td>
              <td>{fila.ej}</td>
              <td>{fila.asc}</td>
              <td>{fila.ac}</td>
              <td>{fila.jfs}</td>
              <td>{fila.jc}</td>
              <td>{fila.sgc}</td>
              <td>{fila.gcc}</td>
              <td>{fila.cfo}</td>
              <td>{fila.gg}</td>
              <td>{fila.cfovp}</td>
              <td>{fila.ceo}</td>
              <td>{fila.ppt}</td>
              <td>{fila.pdf}</td>
              <td>{fila.subirpdf}</td>
              <td>{fila.generarpdf}</td>
              <td>
                <Button variant="primary">PDF</Button> {/* Azul primario */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {datosTabla6.length === 0 && <p>No hay registros para mostrar</p>}
    </div>
  );
};

export default Tabla6;