import React from 'react';
//Icons
import { IconAlertCircle } from '@tabler/icons';

function LeyendaDecimal() {
  return (
    <div style={{ width: '100%' }}>
      <p>
        {' '}
        <IconAlertCircle color="#9E9E9E" />
        <em style={{ fontSize: '13px', color: '#9E9E9E' }}> Para ingresar decimales utilice el punto(.) Formato Ejemplo: 0.00</em>
      </p>
    </div>
  );
}

export default LeyendaDecimal;
