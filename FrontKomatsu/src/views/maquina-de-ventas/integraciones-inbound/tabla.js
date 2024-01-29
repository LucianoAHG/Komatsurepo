import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ListItemIcon } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
//Icons
import PowerIcon from '@mui/icons-material/Power';
import PowerOffIcon from '@mui/icons-material/PowerOff';

//Imagenes
// import WhatsappIcon from '../../../assets/images/inbound/whatsapp.png';
// import SmsIcon from '../../../assets/images/inbound/sms.png';
// import CorreoIcon from '../../../assets/images/inbound/correo.png';
// import ApisIcon from '../../../assets/images/inbound/api.png';

import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const rows = [
  {
    id: 1,
    fuente: 'Whatsapp',
    acciones: true
  },
  {
    id: 2,
    fuente: 'SMS',
    acciones: false
  },
  {
    id: 3,
    fuente: 'Correo',
    acciones: true
  },
  {
    id: 4,
    fuente: 'Apis',
    acciones: false
  }
];

export default function FullFeaturedCrudGrid() {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedFuente, setSelectedFuente] = useState(null);
  const [actions, setActions] = useState(rows);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    const updateActions = actions.map((action) => {
      if (action.fuente === selectedFuente) {
        return { ...action, acciones: true };
      }
      return console.log(action), action;
    });
    setActions(updateActions);
    setOpen(false);
  };

  const handlerDisconnect = () => {
    const updateActions = actions.map((action) => {
      if (action.fuente === selectedFuente) {
        return { ...action, acciones: false };
      }
      return console.log(action), action;
    });
    setActions(updateActions);
    setOpen(false);
  };

  const columns = [
    {
      field: 'fuente',
      headerName: 'Fuente',
      width: 100,
      flex: 1,
      align: 'left',
      headerAlign: 'left',
      editable: false
      // renderCell: (params) => (
      //  <div style={{ display: 'flex', alignItems: 'center' }}>
      //     <img
      //       src={
      //         params.row.fuente === 'Whatsapp'
      //           ? WhatsappIcon
      //           : params.row.fuente === 'SMS'
      //           ? SmsIcon
      //           : params.row.fuente === 'Correo'
      //           ? CorreoIcon
      //           : params.row.fuente === 'Apis'
      //           ? ApisIcon
      //           : ''
      //       }
      //       alt={params.row.fuente}
      //       style={{
      //         marginRight: '8px',
      //         width: '40px',
      //         height: '40px',
      //         border: '1px solid',
      //         borderColor: `${theme.palette.grey[300]}`,
      //         borderRadius: 8
      //       }}
      //     />
      //     {params.row.fuente}
      //   </div>
      // )
    },
    {
      field: 'acciones',
      headerName: 'Acciones',
      align: 'left',
      width: 150,
      editable: false,
      renderCell: (params) => (
        <Button
          onClick={() => {
            setSelectedFuente(params.row.fuente);
            setOpen(true);
          }}
          variant="outlined"
          color={params.row.acciones ? 'secondary' : 'primary'}
          style={{ width: '100%' }}
        >
          <ListItemIcon>
            {params.row.acciones ? (
              <PowerOffIcon fontSize="small" /> // Icono para Desconectar
            ) : (
              <PowerIcon fontSize="small" /> // Icono para Conectar
            )}
          </ListItemIcon>
          {params.row.acciones ? 'Desconectar' : 'Conectar'}
        </Button>
      )
    }
  ];

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        '& .actions': {
          color: 'text.secondary'
        },
        '& .textPrimary': {
          color: 'text.primary'
        }
      }}
    >
      <DataGrid H rows={rows} columns={columns} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Configurar ${selectedFuente}`}</DialogTitle>
        <DialogContent>
          {/* Aquí puedes agregar los campos de configuración */}
          {/* Por ejemplo: */}
          {/* <TextField label="Configuración 1" fullWidth />
          <TextField label="Configuración 2" fullWidth /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            Guardar
          </Button>
          <Button
            onClick={handlerDisconnect}
            // Coloca aquí la lógica para desconectar
            // Cambia el estado de la fila y el estado del botón

            color="secondary"
          >
            Desconectar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
