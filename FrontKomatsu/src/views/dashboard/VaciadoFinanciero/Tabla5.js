import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TuComponente = () => {
  const datosTabla1 = [
    { proveedor: 'Socofin' , dato: '		Porción Corriente de Largo Plazo', fecha: '➕', algo: '➕', cosa: '' },
    { proveedor: 'Socofin' , dato: '	Cuadratura Deuda Socofin', fecha: '➕', algo: '➕', cosa: '' },
    { proveedor: 'Socofin' , dato: 'Cuadratura Deuda Socofin (-)', fecha: '➕', algo: '➕', cosa: '' },
   

  ];
  const datosTabla2 = [
    { proveedor: 'Dicom Leasing' , dato: '		Porción Corriente de Largo Plazo', fecha: '➕', algo: '➕', cosa: '' },
    { proveedor: 'Dicom Leasing' , dato: '	Utilidad Balance General', fecha: '➕', algo: '➕', cosa: '' },
    { proveedor: 'Dicom Leasing' , dato: '			Utilidad Estado de Resultado', fecha: '➕', algo: '➕', cosa: '' },
    
    // ... más datos
  ];



  return (
    <div style={{ overflowX: 'auto' }}>
      <h6> 
</h6>
      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
          <th> Proveedor </th>
            <th>  </th>
            <th>  </th>
            <th>  </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datosTabla1.map((fila, index) => (
            <tr key={index}>
              <td>{fila.proveedor}</td>
              <td>{fila.dato}</td>
              <td>
            <Button variant="withe" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
      ➕
      </Button>
      </td>
      <td>
            <Button variant="withe" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
      ➕
      </Button>
      </td>
              <td>{fila.cosa}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table striped bordered hover style={{ width: '100%', minWidth: '100px' }}>
        <thead>
          <tr>
          <th> Proveedor </th>
            <th>  </th>
            <th>  </th>
            <th>  </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datosTabla2.map((fila, index) => (
            <tr key={index}>
              <td>{fila.proveedor}</td>
              <td>{fila.dato}</td>
              <td>
            <Button variant="withe" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
      ➕
      </Button>
      </td>
      <td>
            <Button variant="withe" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
      ➕
      </Button>
      </td>
              <td>{fila.cosa}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      
    </div>
  );
};

export default TuComponente;
