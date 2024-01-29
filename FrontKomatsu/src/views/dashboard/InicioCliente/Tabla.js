import React from 'react';
import MainCard from 'ui-component/cards/MainCard';

const Tabla = ({ title, children }) => {
  return (
    <MainCard title={title}>
      <div style={{ backgroundColor: 'white', padding: '20px', height: '50vh', overflowY: 'auto' }}>
        {children}
      </div>
    </MainCard>
  );
};

export default Tabla;
