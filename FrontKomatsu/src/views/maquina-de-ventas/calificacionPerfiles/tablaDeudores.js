import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
//prueba import de iconos
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import TextsmsIcon from '@mui/icons-material/Textsms';

// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CloseIcon from '@mui/icons-material/Close';
// import PowerIcon from '@mui/icons-material/Power';
import { IconSearch, IconMessage, IconUser } from '@tabler/icons';
//GridActionCell

const BureauIcon = ({ value }) => {
  if (value === 'alto') {
    return <IconUser color="#FF3232" />; //es rojo
  } else if (value === 'medio') {
    return <IconUser color="#FF7632" />; //es naranjo
  } else if (value === 'bajo') {
    return <IconUser color="#FFE032" />; // es amarillo
  } else {
    return <IconUser color="#71DE21" />; //es verde
  }
};

const PjudIcon = ({ value }) => {
  //   if (value === 'alto') {
  //     return (
  //       <Button color="#FF3232" startIcon={<IconUser />}>
  //         Peligroso
  //       </Button>
  //     ); //es rojo <IconUser color="#FF3232" />
  //   } else if (value === 'medio') {
  //     return (
  //       <Button color="#FF7632" startIcon={<IconUser />}>
  //         Deudor
  //       </Button>
  //     ); //es naranjo<IconUser color="#FF7632" />
  //   } else if (value === 'bajo') {
  //     return (
  //       <Button color="#FFE032" startIcon={<IconUser />}>
  //         Deudor ocasional
  //       </Button>
  //     ); // es amarillo <IconUser color="#FFE032" />
  //   } else {
  //     return (
  //       <Button color="#71DE21" startIcon={<IconUser />}>
  //         Primera deuda
  //       </Button>
  //     ); //es verde <IconUser color="#71DE21" />
  //   }
  if (value === 'alto') {
    return <IconUser color="#FF3232" />; //es rojo
  } else if (value === 'medio') {
    return <IconUser color="#FF7632" />; //es naranjo
  } else if (value === 'bajo') {
    return <IconUser color="#FFE032" />; // es amarillo
  } else {
    return <IconUser color="#71DE21" />; //es verde
  }
};

const rows = [
  {
    id: 1,
    deudor: 'Gabriel Sid',
    protestos: '205',
    moras: '20',
    morasMonto: '10000000',
    leverage: '',
    bureau: 'alto',
    pjud: 'alto'
  },
  {
    id: 2,
    deudor: 'Adnres Lopez',
    protestos: '0',
    moras: 3,
    morasMonto: 600000,
    leverage: '',
    bureau: 'medio',
    pjud: 'alto'
  },
  {
    id: 3,
    deudor: 'Mario Toledo',
    protestos: '0',
    moras: 1,
    morasMonto: 45000,
    leverage: '',
    bureau: 'bajo',
    pjud: 'alto'
  },
  {
    id: 4,
    deudor: 'Mario Moreno Cantinflas',
    protestos: '0',
    moras: 0,
    morasMonto: 0,
    leverage: '',
    bureau: 'ninguno',
    pjud: 'alto'
  },
  {
    id: 5,
    deudor: 'Jose Ignacio Pradenas',
    protestos: '1',
    moras: '1',
    morasMonto: '1000000',
    leverage: '',
    bureau: 'medio',
    pjud: 'alto'
  },
  {
    id: 6,
    deudor: 'Pedro Piedra',
    protestos: '1',
    moras: '20',
    morasMonto: 15000000,
    leverage: '',
    bureau: 'alto',
    pjud: 'alto'
  },
  {
    id: 7,
    deudor: 'Jaquin Sabina',
    protestos: '30',
    moras: '6',
    morasMonto: 40000000,
    leverage: '',
    bureau: 'alto',
    pjud: 'alto'
  },
  {
    id: 8,
    deudor: 'Joaquin Perez',
    protestos: '0',
    moras: '1',
    morasMonto: 60000,
    leverage: '',
    bureau: 'bajo',
    pjud: 'alto'
  },
  {
    id: 9,
    deudor: 'Jaqueline Venavidez',
    protestos: '2',
    moras: '2',
    morasMonto: 100000,
    leverage: '',
    bureau: 'medio',
    pjud: 'alto'
  }
];

export default function DataTable() {
  /** empiezan las headers */
  const columns = [
    // { field: 'id', headerName: 'ID Leads', type: 'number', width: 130 },
    {
      field: 'deudor',
      headerName: 'Deudor',
      width: 180,
      flex: 6
    },
    { field: 'protestos', headerName: 'N° de Protestos', width: 130 },
    {
      field: 'morasMonto',
      headerName: 'Moras Monto',
      width: 130,
      align: 'center',
      flex: 6
    },
    {
      field: 'moras',
      headerName: 'Cantidad Moras',
      width: 130,
      flex: 6
    },
    {
      field: 'leveRage',
      headerName: 'Leverage',
      width: 130,
      flex: 6
    },

    {
      field: 'bureau',
      headerName: 'Bureau',
      width: 130,
      align: 'center',
      headerAlign: 'center',
      flex: 6,
      renderCell: (params) => <BureauIcon value={params.value} />
    },
    {
      field: 'pjud',
      headerName: 'Estado Legal',
      width: 130,
      align: 'center',
      flex: 6,
      renderCell: (params) => <PjudIcon value={params.value} />
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
