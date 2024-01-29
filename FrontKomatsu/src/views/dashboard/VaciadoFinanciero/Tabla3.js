import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TuComponente = () => {
  const datosTabla1 = [
    { analisis: 'K de Trabajo', fecha: '⚠️', algo: '%', cosa: '⚠️' },
    { analisis: 'Kp sobre Pat.', fecha: '⚠️', algo: '%', cosa: '⚠️' },
    { analisis: '		Ut. Acum. sobre Pat.', fecha: '⚠️', algo: '%', cosa: '⚠️' },
    { analisis: '	Retiros sobre Ut. Ej.', fecha: '⚠️', algo: '%', cosa: '⚠️' }

    // ... más datos
  ];

  const datosTabla2 = [
    { analisis2: 'Activo - Pasivo', fecha2: '⚠️', algo2: '%', cosa2: '⚠️' },
    { analisis2: 'Utilidad Balance General', fecha2: '⚠️', algo2: '%', cosa2: '⚠️' },
    { analisis2: 'Utilidad Estado de Resultado', fecha2: '⚠️', algo2: '%', cosa2: '⚠️' },
    { analisis2: '	Diferencia', fecha2: '⚠️', algo2: '%', cosa2: '⚠️' }
  ];
  const datosTabla3 = [
    { porcion: 'Porcion Corriente Largo Plazo', cuadratura: '➕', deuda: '', cosa3: '➕' },
    { porcion: 'Cuadratura Deuda Socofin', cuadratura: '➕', deuda: '', cosa3: '➕' },
    { porcion: 'Cuadratura Deuda Socofin (-)', cuadratura: '➕', deuda: '', cosa3: '➕' }

    // ... más datos
  ];

  const datosTabla4 = [
    { porcion2: 'Porción Corriente de Largo Plazo', documentos: '➕', algo4: '- ', cosa4: '➕' },
    { porcion2: 'Documentos por Pagar de Largo Plazo', documentos: '➕', algo4: ' -', cosa4: '➕' },
    { porcion2: 'Otros activos fijos', documentos: '➕', algo4: ' -', cosa4: '➕' }
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <h6> </h6>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th> Var % </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datosTabla1.map((fila, index) => (
            <tr key={index}>
              <td>{fila.analisis}</td>
              <td>{fila.fecha}</td>
              <td>{fila.algo}</td>
              <td>{fila.cosa}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th> Verificacion </th>
            <th> </th>
            <th> Var % </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datosTabla2.map((fila, index) => (
            <tr key={index}>
              <td>{fila.analisis2}</td>
              <td>{fila.fecha}</td>
              <td>{fila.algo}</td>
              <td>{fila.cosa}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h6> SOCOFIN</h6>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datosTabla1.map((fila, index) => (
            <tr key={index}>
              <td>{fila.analisis}</td>
              <td>{fila.fecha3}</td>
              <td>{fila.algo3}</td>
              <td>{fila.cosa3}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datosTabla2.map((fila, index) => (
            <tr key={index}>
              <td>{fila.analisis2}</td>
              <td>{fila.fecha2}</td>
              <td>{fila.algo2}</td>
              <td>{fila.cosa2}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h6> DICOM LEASING</h6>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla3.map((fila, index) => (
            <tr key={index}>
              <td>{fila.porcion}</td>

              <td>
                <Button variant="withe" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
                  ➕
                </Button>
              </td>
              <td>{fila.algo}</td>
              <td>
                <Button variant="withe" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
                  ➕
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla4.map((fila, index) => (
            <tr key={index}>
              <td>{fila.porcion2}</td>
              <td>
                <Button variant="withe" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
                  ➕
                </Button>
              </td>
              <td>{fila.algo4}</td>
              <td>
                <Button variant="withe" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
                  ➕
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TuComponente;
