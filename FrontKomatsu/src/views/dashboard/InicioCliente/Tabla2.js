import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';



const SimpleTable = () => {

  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleSearchClick = (row) => {
    setSelectedRow(row);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  
  const rows = [
    {
      id: '4398',
      firstName: '76.362.333-5',
      lastName: 'SEVEN RENT A CAR SPA',
      age: 1500,
      hecho: 'Solicitud 4398 no finalizada',
      usuario: 'YEZEEL',
      accion: 'Terminar y enviar solicitud 4398',
      accion2: 'ver',
    },
    {
      id: '4493',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      ages: 0,
      hecho: 'Solicitud 4493 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4493	',
      accion2: 'ver',
    },
    {
      id: '4491',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4491 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4491	',
      accion2: 'ver',
    },
    {
      id: '4490',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4490 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4490	',
      accion2: 'ver',
    },
    {
      id: '4487',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4487 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4487	',
      accion2: 'ver',
    },
    {
      id: '4486',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4486 no finalizada',
      usuario: 'Usuario',
      accion: 'Terminar y enviar solicitud 4486	',
      accion2: 'ver',
    },
    {
      id: '4408',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 0,
      hecho: 'Solicitud 4408 no finalizada',
      usuario: 'YEZEEL	',
      accion: 'Terminar y enviar solicitud 4408	',
      accion2: 'ver',
    },
    {
      id: '4404',
      firstName: '85.272.800-0	',
      lastName: 'CIA CONTRACTUAL MINERA CANDELARIA	',
      age: '32.000.000',
      hecho: 'Solicitud 4404 no finalizada	',
      usuario: 'YEZEEL	',
      accion: 'Terminar y enviar solicitud 4404	',
      accion2: 'ver',
    },
    {
      id: '4400	',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA	',
      age: '200.000',
      hecho: 'Solicitud 4400	 no finalizada',
      usuario: 'YEZEEL	',
      accion: 'Terminar y enviar solicitud 4400	',
      accion2: 'ver',
    },
    {
      id: '4398	',
      firstName: '76.362.333-5	',
      lastName: 'SEVEN RENT A CAR SPA',
      age: 1500,
      hecho: 'Solicitud 4398	 no finalizada',
      usuario: 'YEZEEL	',
      accion: 'Terminar y enviar solicitud 4398	',
      accion2: 'Ver'
    },


  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Oper', type: 'number', width: 70 },
    { field: 'firstName', headerName: 'Rut', type: 'string', width: 130 },
    { field: 'lastName', headerName: 'Empresa', width: 400 },
    { field: 'age', headerName: 'Monto', type: 'number', width: 200 },
    { field: 'hecho', headerName: 'Hecho', width: 200 },
    { field: 'usuario', headerName: 'Ejecutivo', width: 200 },
    { field: 'accion', headerName: 'Accion', width: 300 },
    {
      field: 'accion2',
      headerName: '',
      width: 110,
      renderCell: (params) => (
        <IconButton
          color="primary"
          onClick={() => handleSearchClick(params.row)}
        >
          <SearchIcon />
        </IconButton>
      ),
    },
  ];
  const renderModalContent = () => {
    if (!selectedRow) {
      return null;
    }

    return (
      <Box>
        <h2>{selectedRow.accion}</h2>
        {/* Add more details or content as needed */}
        <button
          onClick={handleCloseModal}
          style={{
            backgroundColor: '#2196F3', // Color de fondo del botón
            color: 'white', // Color del texto del botón
            padding: '8px 12px', // Espaciado interno del botón
            border: 'none', // Sin borde
            borderRadius: '5px', // Bordes redondeados
            cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
            fontSize: '14px', // Tamaño de la letra
          }}
        >
          Cerrar
        </button>
      </Box>
    );
  };
  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  console.log(rows);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText} />
      <Modal open={!!selectedRow} onClose={handleCloseModal}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'white', // Color de fondo de la ventana emergente
      boxShadow: 24, // Sombra
      p: 5,
      borderRadius: 5, // Bordes redondeados
    }}
  >
    {renderModalContent()}
  </Box>
</Modal>
    </div>
  );
};

export default SimpleTable;
