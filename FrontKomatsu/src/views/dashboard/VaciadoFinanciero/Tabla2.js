import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const TuComponente = () => {
  const [datosAdicionales, setDatosAdicionales] = useState([]);

  const agregarDatoAdicional = (estado) => {
    setDatosAdicionales([...datosAdicionales, `Dato adicional para ${estado}`]);
  };

  const datosTabla1 = [
    { estado: 'Ingresos de explotación ', fecha: '➕', porcentaje: '%', button: '', porcentaje2: '%', var: '0' },
    { estado: 'Costos de explotación ', fecha: '➕', porcentaje: '%', porcentaje2: '%', var: '0' },
    { estado: ' Margen de contribución', fecha: '➕', porcentaje: '%', porcentaje2: '%', var: '0' }
  ];

  const datosTabla2 = [
    { estado2: 'Gastos de Admin. y Ventas', fecha: '0', algo: '0', var: '0' },
    { estado2: '	Depreciación y amortización', fecha: '0', algo: '0', var: '0' },
    { estado2: 'Resultado operacional', fecha: '0', algo: '0', var: '0' }
  ];
  const datosTabla3 = [
    { estado3: 'Intereses Recibidos', fecha: '0', algo: '0', var: '0' },
    { estado3: 'Gastos financieros', fecha: '0', algo: '0', var: '0' },
    { estado3: 'Ingresos fuera de explotación', fecha: '0', algo: '0', var: '0' },
    { estado3: 'Egresos fuera de explotación', fecha: '0', algo: '0', var: '0' },
    { estado3: 'Resultado no Operacional', fecha: '0', algo: '0', var: '0' }
  ];

  const datosTabla4 = [
    { estado4: 'Resultado antes de C.M ', fecha: '0', algo: '0', var: '0' },
    { estado4: 'Corrección Monetaria ', fecha: '0', algo: '0', var: '0' }
  ];
  const datosTabla5 = [
    { estado5: 'Resultado antes de C.M', fecha: '0', algo: '0', var: '0' },
    { estado5: 'Corrección Monetaria', fecha: '0', algo: '0', var: '0' }

    // ... más datos
  ];

  const datosTabla6 = [
    { estado6: 'Resultado antes de Impuestos', fecha: '0', algo: '0', var: '0' },
    { estado6: '	Impuesto a la Renta	', fecha: '0', algo: '0', var: '0' },
    { estado6: 'UTILIDAD (PÉRDIDA) EJERCICIO', fecha: '0', algo: '0', var: '0' }
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <h6>ESTADO DE RESULTADOS</h6>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th>% </th>
            <th></th>
            <th>%</th>
            <th>Var %</th>
          </tr>
        </thead>
        <tbody>
          {datosTabla1.map((fila, index) => (
            <tr key={index}>
              <td>{fila.estado}</td>
              <td>
                <button
                  onClick={() => agregarDatoAdicional(fila.estado)}
                  onKeyDown={(e) => e.key === 'Enter' && agregarDatoAdicional(fila.estado)}
                  tabIndex={0}
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                    background: 'none',
                    padding: '0'
                  }}
                >
                  ➕
                </button>
              </td>
              <td>{fila.porcentaje}</td>
              <td>
                <button
                  onClick={() => agregarDatoAdicional(fila.estado)}
                  onKeyDown={(e) => e.key === 'Enter' && agregarDatoAdicional(fila.estado)}
                  tabIndex={0}
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                    background: 'none',
                    padding: '0'
                  }}
                >
                  ➕
                </button>
              </td>
              <td>{fila.porcentaje2}</td>
              <td>{fila.var}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Mostrar los datos adicionales */}
      {datosAdicionales.length > 0 && (
        <div>
          <h6> </h6>
          <ul>
            {datosAdicionales.map((dato, index) => (
              <li key={index}>{dato}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Table for datosTabla2 */}
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th>Var % </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla2.map((fila, index) => (
            <tr key={index}>
              <td>{fila.estado2}</td>
              <td>{fila.fecha}</td>
              <td>{fila.algo}</td>
              <td>{fila.var}</td>
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
            <th>Var % </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla3.map((fila, index) => (
            <tr key={index}>
              <td>{fila.estado3}</td>
              <td>{fila.fecha}</td>
              <td>{fila.fecha}</td>
              <td>{fila.var}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h6> </h6>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th>Var % </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla4.map((fila, index) => (
            <tr key={index}>
              <td>{fila.estado4}</td>
              <td>{fila.fecha}</td>
              <td>{fila.fecha}</td>
              <td>{fila.var}</td>
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
            <th>Var % </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla5.map((fila, index) => (
            <tr key={index}>
              <td>{fila.estado5}</td>
              <td>{fila.fecha}</td>
              <td>{fila.fecha}</td>
              <td>{fila.var}</td>
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
            <th>Var % </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla6.map((fila, index) => (
            <tr key={index}>
              <td>{fila.estado6}</td>
              <td>{fila.fecha}</td>
              <td>{fila.fecha}</td>
              <td>{fila.var}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Mostrar los datos adicionales */}
      {datosAdicionales.length > 0 && (
        <div>
          <h6>Datos Adicionales</h6>
          <ul>
            {datosAdicionales.map((dato, index) => (
              <li key={index}>{dato}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TuComponente;
