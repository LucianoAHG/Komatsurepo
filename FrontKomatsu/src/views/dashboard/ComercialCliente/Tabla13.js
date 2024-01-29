import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const EditableTable = () => {
  const [data1] = useState([
    { totalcuotas: ' 0 ', cuotaspagadas: '0', cuotaspagar: '0', valorcuota: '0', cp: '0', lp: '0', total: '0', periodoeval: '0', periodoact: '0', variacion: '0', porcentaje: '0%' },
  ]);

  const [data2] = useState([
    { totalcuotas: ' 0 ', cuotaspagadas: '0', cuotaspagar: '0', valorcuota: '0', cp: '0', lp: '0', total: '0', periodoeval: '0', periodoact: '0', variacion: '0', porcentaje: '0%' },
  ]);

  const [data3] = useState([
    { totalcuotas: ' 0 ', cuotaspagadas: '0', cuotaspagar: '5', valorcuota: '0', cp: '0', lp: '0', total: '0', periodoeval: '0', periodoact: '0', variacion: '0', porcentaje: '0%' },
  ]);
  const [data4] = useState([
    { totalcp: ' 0 ',totallp: '0', totalgeneral: '0', total: '0', totalperiodo: '0',  porcentaje: '0%' },
  ]);

  return (
    <div>
      <h6>SOCOFIN 1</h6>
      <Table striped bordered hover size="sm">
        <caption></caption>
        <thead>
          <tr>
            <th>N° Total de Cuotas</th>
            <th>Cuotas Pagadas</th>
            <th>Cuotas por Pagar</th>
            <th>Valor Cuota</th>
            <th>C/P</th>
            <th>L/P</th>
            <th>Total</th>
            <th>Periodo de Evaluacion</th>
            <th>Periodo Actual</th>
            <th>Variacion</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item) => (
            <tr key={item.id}>
              <td>{item.totalcuotas}</td>
              <td>{item.cuotaspagadas}</td>
              <td>{item.cuotaspagar}</td>
              <td>{item.valorcuota}</td>
              <td>{item.cp}</td>
              <td>{item.lp}</td>
              <td>{item.total}</td>
              <td>{item.periodoeval}</td>
              <td>{item.periodoact}</td>
              <td>{item.variacion}</td>
              <td>{item.porcentaje}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
          </tr>
        </tfoot>
      </Table>

      <h6>DICOM LEASING</h6>
      <Table striped bordered hover size="sm">
        <caption></caption>
        <thead>
          <tr>
            <th>Total C/P</th>
            <th>Total L/P</th>
            <th>Total General</th>
            <th>Total</th>
            <th>Total &</th>
            
          </tr>
        </thead>
        <tbody>
          {data2.map((item) => (
            <tr key={item.id}>
              <td>{item.totalcp}</td>
              <td>{item.totallp}</td>
              <td>{item.totalgeneral}</td>
              <td>{item.total}</td>
              <td>{item.porcentaje}</td>
              
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
          </tr>
        </tfoot>
      </Table>

      <h6>LEASING KCCA/KFCH</h6>
      <Table striped bordered hover size="sm">
        <caption></caption>
        <thead>
          <tr>
            <th>N° Total de Cuotas</th>
            <th>Cuotas Pagadas</th>
            <th>Cuotas por Pagar</th>
            <th>Valor Cuota</th>
            <th>C/P</th>
            <th>L/P</th>
            <th>Total</th>
            <th>Periodo de Evaluacion</th>
            <th>Periodo Actual</th>
            <th>Variacion</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {data3.map((item) => (
            <tr key={item.id}>
              <td>{item.totalcuotas}</td>
              <td>{item.cuotaspagadas}</td>
              <td>{item.cuotaspagar}</td>
              <td>{item.valorcuota}</td>
              <td>{item.cp}</td>
              <td>{item.lp}</td>
              <td>{item.total}</td>
              <td>{item.periodoeval}</td>
              <td>{item.periodoact}</td>
              <td>{item.variacion}</td>
              <td>{item.porcentaje}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        
        </tfoot>
      </Table>

      <h6>TOTAL</h6>
      <Table striped bordered hover size="sm">
        <caption></caption>
        <thead>
          <tr>
            <th>N° Total de Cuotas</th>
            <th>Cuotas Pagadas</th>
            <th>Cuotas por Pagar</th>
            <th>Valor Cuota</th>
            <th>C/P</th>
            <th>L/P</th>
            <th>Total</th>
            <th>Periodo de Evaluacion</th>
            <th>Periodo Actual</th>
            <th>Variacion</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {data4.map((item) => (
            <tr key={item.id}>
              <td>{item.totalcuotas}</td>
              <td>{item.cuotaspagadas}</td>
              <td>{item.cuotaspagar}</td>
              <td>{item.valorcuota}</td>
              <td>{item.cp}</td>
              <td>{item.lp}</td>
              <td>{item.total}</td>
              <td>{item.periodoeval}</td>
              <td>{item.periodoact}</td>
              <td>{item.variacion}</td>
              <td>{item.porcentaje}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          
        </tfoot>
      </Table>
    </div>
  );
};


export default EditableTable;
