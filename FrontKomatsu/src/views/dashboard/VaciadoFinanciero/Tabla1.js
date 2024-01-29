import React from 'react';
import { Table } from 'react-bootstrap';

const TuComponente = () => {
  const datosTabla1 = [
    { activoscirculantes: 'Disponible' , fecha: '0' , algo: '0', var:'0' },
    { activoscirculantes: 'Depositos y Valores Negociables' , fecha: '0' , algo: '0', var:'0' },
    { activoscirculantes: 'Documentos y cuentas por cobrar' , fecha: '0' , algo: '0', var:'0' },
    { activoscirculantes: 'Documentos y cuentas por cobrar EERR' , fecha: '0' , algo: '0', var:'0' },
    { activoscirculantes: 'Existencias' , fecha: '0' , algo: '0', var:'0' },
    { activoscirculantes: 'Otros activos circulantes' , fecha: '0' , algo: '0', var:'0' },
    { activoscirculantes: 'Total Activo Circulante' , fecha: '0' , algo: '0', var:'0' },
   

    // ... más datos
  ];

  const datosTabla2 = [
    { activosfijos: 'Bienes Raices' , fecha: '0' , algo: '0', var:'0' },
    { activosfijos: '	Vehículos' , fecha: '0' , algo: '0', var:'0' },
    { activosfijos: 'Maquinarias y Equipos' , fecha: '0' , algo: '0', var:'0' },
    { activosfijos: 'Muebles y Utiles' , fecha: '0' , algo: '0', var:'0' },
    { activosfijos: 		'Otros activos fijos' , fecha: '0' , algo: '0', var:'0' },
    { activosfijos: 'Depreciación Acumulada (Menos)	' , fecha: '0' , algo: '0', var:'0' },
    { activosfijos: 'Total Activo Fijo	' , fecha: '0' , algo: '0', var:'0' },

   
  ];
  const datosTabla3 = [
    { activosplazo: 'Deudores de Largo Plazo' , fecha: '0' , algo: '0', var:'0' },
    { activosplazo: 'Inversiones Empresas. Relac. y Otras' , fecha: '0' , algo: '0', var:'0' },
    { activosplazo: 'Menor Valor Inversiones' , fecha: '0' , algo: '0', var:'0' },
    { activosplazo: 'Mayor Valor Inversiones (Menos)' , fecha: '0' , algo: '0', var:'0' },
    { activosplazo: 'Cuentas por Cobrar EERR' , fecha: '0' , algo: '0', var:'0' },
    { activosplazo: 'Otros Activos de Largo Plazo' , fecha: '0' , algo: '0', var:'0' },
    { activosplazo: 'Total Activos a largo Plazo' , fecha: '0' , algo: '0', var:'0' },


   
  ];
  const datosTabla4 = [
    { total: 'Total Activos' , fecha: '0' , algo: '0', var:'0' },
    

   
  ];

  
 

  return (
    <div style={{ overflowX: 'auto' }}>
      <h6> </h6>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
            <th>Activos Circulantes</th>
            <th> </th>
            <th> </th>
            <th>Var % </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla1.map((fila, index) => (
            <tr key={index}>
              <td>{fila.activoscirculantes}</td>
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
            <th>Activos Fijos</th>
            <th> </th>
            <th> </th>
            <th>Var % </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla2.map((fila, index) => (
            <tr key={index}>
              <td>{fila.activosfijos}</td>
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
            <th>Activos a Largo Plazo</th>
            <th> </th>
            <th> </th>
            <th>Var % </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla3.map((fila, index) => (
            <tr key={index}>
              <td>{fila.activosplazo}</td>
              <td>{fila.fecha}</td>
              <td>{fila.fecha}</td>
              <td>{fila.var}</td>
            </tr>
          ))}
        </tbody>
    

      

      
      </Table>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          
        </thead>
        <tbody>
          {datosTabla4.map((fila, index) => (
            <tr key={index}>
              <td>{fila.total}</td>
              <td>{fila.fecha}</td>
              <td>{fila.fecha}</td>
              <td>{fila.var}</td>
            </tr>
          ))}
        </tbody>
    

      

      
      </Table>
    </div>
  );
};

export default TuComponente;
