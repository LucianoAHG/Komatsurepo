// ClientInfo.js
import React from 'react';

const ClientInfo = ({ nombre, rut, compañia }) => {
  return (
    <div style={{ position: 'absolute', top: 10, right: 10 }}>
      <p>{nombre}</p>
      <p>{rut}</p>
      <p>{compañia}</p>
    </div>
  );
};

export default ClientInfo;
