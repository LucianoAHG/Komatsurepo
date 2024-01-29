import React from 'react';
//Icons
import { IconAlertCircle } from '@tabler/icons';

function LeyendaRut() {
  return (
    <div>
      <p>
        {' '}
        <IconAlertCircle color="#9E9E9E" />
        <em style={{ fontSize: '13px', color: '#9E9E9E' }}>
          {' '}
          Ingrese un rut y seleccione la variable a examinar, el sistema buscará el log del registro mas actual de una evaluación. En caso
          de no encontrar registros de log, realice una nueva evaluación.
        </em>
      </p>
    </div>
  );
}

export default LeyendaRut;
