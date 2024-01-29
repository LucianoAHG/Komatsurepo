import React, {  } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const SimpleTable = () => {
  // Datos de ejemplo
  const [rows, setRows] = React.useState([
    {
      id: '1',
      firstName: 'Transporte carga carretera',
    },
    {
      id: '16',
      firstName: 'Preparacion del terreno, excavaciones y movimientos de tierra',
      lastName: '',
    },
    {
      id: '19',
      firstName: 'Alquiler de maquinaria y equipo de construcción e ingeniería civil',
      lastName: '',
    },
  ]);

  // Función para manejar la eliminación
  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  // Configuración de columnas
  const columns = [
    { field: 'id', headerName: 'Codigo', type: 'number', width: 100 },
    { field: 'firstName', headerName: 'Actividades SII', type: 'string', width: 900 },
    {
      field: 'deleteButton',
      headerName: 'Eliminar',
      width: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <IconButton
          style={{ color: 'blue' }}
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  return (
    <div style={{ height: 350, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText} />
    </div>
  );
};

export default SimpleTable;
