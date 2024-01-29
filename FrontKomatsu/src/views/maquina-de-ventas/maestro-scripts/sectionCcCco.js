import React from 'react';

function sectionCcCco() {
  return (
    <>
      <div className="row" id="copiasCorreo">
        <div className="col-md-6 col-xs-12">
          <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Cc</span>
          <input className="form-control" type="text" id="Cc" />
        </div>
        <div className="col-md-6 col-xs-12">
          <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Cco</span>
          <input className="form-control" type="text" id="Cco" />
        </div>
      </div>
    </>
  );
}

export default sectionCcCco;
