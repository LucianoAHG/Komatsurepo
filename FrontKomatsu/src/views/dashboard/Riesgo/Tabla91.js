import React from 'react';
import { Table } from 'react-bootstrap';


const TuComponente = () => {
  

  
  
    const datosTabla3 = [
      { mes: 'Enero	 ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Febrero	 ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Marzo	 ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Abril	 ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Mayo	 ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Junio ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Julio ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Agosto	 ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Septiembre	 ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Octubre	 ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Noviembre	 ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
      { mes: 'Diciembre ' , iva: '➕', tasa:'0%',ventames: '0', ventasexe:'➕', totalventas: '0' },
    ];

  
 

  return (
    <div style={{ overflowX: 'auto' }}>
     
     

      
      <h6>2016</h6>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
     
        <thead>
          <tr>
          <th> Mes </th>
            <th> IVA Debito </th>
            <th>Tasa </th>
            <th> Ventas Mensuales</th>
            <th> Ventas Exentas</th>
            <th>Total Ventas </th>
          </tr>
        </thead>
        <tbody>
          {datosTabla3.map((fila, index) => (
            <tr key={index}>
              <td>{fila.mes}</td>
              <td>{fila.iva}</td>
              <td>{fila.tasa}</td>
              <td>{fila.ventames}</td>
              <td>{fila.ventasexe}</td>
              <td>{fila.totalventas}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      

     
    </div>
  );
};

export default TuComponente;
