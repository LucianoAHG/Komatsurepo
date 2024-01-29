import React from 'react';
import { Table, Badge } from 'react-bootstrap';

const TuComponente = () => {
  const datosTabla1 = [
    { proveedor: 'Socofin', dato: 'Activo - Pasivo', fecha: '0,00', algo: '%', cosa: '⚠️' },
    { proveedor: 'Socofin', dato: 'Utilidad Balance General', fecha: '0,00', algo: '%', cosa: '⚠️' },
    { proveedor: 'Socofin', dato: 'Utilidad Estado de Resultado', fecha: '⚠️', algo: '%', cosa: '⚠️' },
    { proveedor: 'Socofin', dato: 'Utilidad Estado de Resultado', fecha: '⚠️', algo: '%', cosa: '⚠️' },
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <h6>ANALISIS DE INDICADORES</h6>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th>Proveedor</th>
            <th></th>
            <th></th>
            <th>Var %</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datosTabla1.map((fila, index) => (
            <tr key={index}>
              <td>{fila.proveedor}</td>
              <td>{fila.dato}</td>
              <td>{fila.fecha}</td>
              <td>{fila.algo}</td>
              <td>
                {/* Usa el componente Badge para mostrar el icono */}
                {fila.cosa === '⚠️' && <Badge variant="warning">{fila.cosa}</Badge>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TuComponente;
