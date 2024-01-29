import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
//prueba import de iconos
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import TextsmsIcon from '@mui/icons-material/Textsms';

// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CloseIcon from '@mui/icons-material/Close';
// import PowerIcon from '@mui/icons-material/Power';
import { IconSearch, IconMessage } from '@tabler/icons';
//GridActionCell

import { Button } from '@mui/material';

const ClienteIcon = ({ value }) => {
  if (value === 'si') {
    return <CheckCircleIcon style={{ color: 'green' }} />;
  } else if (value === 'no') {
    return <CancelIcon style={{ color: 'grey' }} />;
  } else {
    return null;
  }
};

const rows = [
  {
    id: 1,
    entrada: 'Whatsapp',
    mensaje: '¿Cómo funciona esto?',
    fechaGestion: '31-12-1990',
    semantica: 'Despedida',
    fechaProximaGestion: '05-02-1991',
    script: '-',
    cierre: 'icono aca y crear funcion',
    esCliente: 'si'
  },
  {
    id: 2,
    entrada: 'Correo',
    mensaje: 'Necesito más información',
    fechaGestion: 42,
    semantica: 'Saludo',
    fechaProximaGestion: '20-03-1991',
    script: 'Algo de script',
    cierre: 'icono de cierre',
    esCliente: 'no'
  },
  {
    id: 3,
    entrada: 'Correo',
    mensaje: '¿Cuánto tiempo dura?',
    fechaGestion: 45,
    semantica: 'Consulta',
    fechaProximaGestion: '15-04-1991',
    script: 'Script adicional',
    cierre: 'icono de cierre',
    esCliente: 'si'
  },
  {
    id: 4,
    entrada: 'Sms',
    mensaje: 'Estoy interesado en comprar',
    fechaGestion: 16,
    semantica: 'Saludo',
    fechaProximaGestion: '10-05-1991',
    script: 'Script de ejemplo',
    cierre: 'icono de cierre',
    esCliente: 'no'
  },
  {
    id: 5,
    entrada: 'WhatsApp',
    mensaje: 'Envíame más detalles',
    fechaGestion: null,
    semantica: 'Consulta',
    fechaProximaGestion: '01-06-1991',
    script: 'Script personalizado',
    cierre: 'icono de cierre',
    esCliente: 'no'
  },
  {
    id: 6,
    entrada: 'Sms',
    mensaje: 'Contactar en una semana',
    fechaGestion: 150,
    semantica: 'Consulta',
    fechaProximaGestion: '20-07-1991',
    script: 'Otro script',
    cierre: 'icono de cierre',
    esCliente: 'si'
  },
  {
    id: 7,
    entrada: 'Whatsapp',
    mensaje: '¿Tienen descuentos?',
    fechaGestion: 44,
    semantica: 'Consulta',
    fechaProximaGestion: '15-08-1991',
    script: 'Script avanzado',
    cierre: 'icono de cierre',
    esCliente: 'si'
  },
  {
    id: 8,
    entrada: 'Correo',
    mensaje: 'Quiero comprar este producto',
    fechaGestion: 36,
    semantica: 'Consulta',
    fechaProximaGestion: '10-09-1991',
    script: 'Script complejo',
    cierre: 'icono de cierre',
    esCliente: 'no'
  },
  {
    id: 9,
    entrada: 'Whatsapp',
    mensaje: 'Más detalles por favor',
    fechaGestion: 65,
    semantica: 'Saludo',
    fechaProximaGestion: '05-10-1991',
    script: 'Script detallado',
    cierre: 'icono de cierre',
    esCliente: 'si'
  }
];

export default function DataTable() {
  /** empiezan las headers */
  const columns = [
    // { field: 'id', headerName: 'ID Leads', type: 'number', width: 130 },
    {
      field: 'mensaje',
      headerName: 'Mensaje',
      width: 180,
      renderCell: (params) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 70,
            width: 150,
            backgroundColor: '#d9edf7',
            color: '#31708f',
            padding: 3,
            borderRadius: 3,
            whiteSpace: 'normal',
            wordWrap: 'break-word'
          }}
        >
          <TextsmsIcon />
          {`${params.value}`}
        </div>
      )
    },
    { field: 'entrada', headerName: 'Entrada', width: 130 },
    {
      field: 'fechaGestion',
      headerName: 'Fecha Gestión',
      width: 130,
      align: 'center'
    },
    {
      field: 'semantica',
      headerName: 'Semantica',
      width: 130,
      renderCell: (params) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            width: 100,
            backgroundColor: '#dff0d8',
            color: '#3c763d',
            margin: 2,
            padding: 4,
            borderRadius: 3,
            whiteSpace: 'normal',
            wordWrap: 'break-word'
          }}
        >
          <strong style={{ color: '#3c763d' }}>IA</strong> {`${params.value}`}
        </div>
      )
    },
    {
      field: 'fechaProximaGestion',
      headerName: 'Fecha Proxima Gestión',
      width: 130
    },

    {
      field: 'script',
      headerName: 'Script',
      width: 130
    },
    {
      field: 'cierre',
      headerName: 'Cierre',
      width: 130
    },
    {
      field: 'esCliente',
      headerName: 'Es Cliente',
      width: 130,
      align: 'center',
      renderCell: (params) => <ClienteIcon value={params.value} />
    },
    {
      field: 'acciones',
      headerName: 'Acciones',
      width: 180,
      cellClassName: 'actions',
      renderCell: () => (
        <div>
          <Button variant="primary" onClick={() => prompt('Buscar Detalle')}>
            <IconSearch />
          </Button>
          <Button variant="success" onClick={() => prompt('mensajes')}>
            <IconMessage />
          </Button>
        </div>
      )
    }
  ];
  /** Fin headers */
  return (
    <div style={{ height: 'auto', width: '100%', padding: 0, borderRadius: 0 }}>
      <DataGrid
        rowHeight={80}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
      />
    </div>
  );
}
