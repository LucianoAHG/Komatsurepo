import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import jsPDF from 'jspdf';
import { Button } from '@mui/material';
import { BiLock } from "react-icons/bi";

const SimpleTable = () => {


  const handlePdfClick = () => {
    const pdf = new jsPDF();
    pdf.text('Informacion del Cliente', 10, 10);
    pdf.save('archivo.pdf');
  };


  const handleEliminarClick = (params) => {
    const updatedRows = rows.filter((row) => row.id !== params.row.id);
    setRows(updatedRows);
  };

  const LockIcon  = ({ value, color }) => (
    <div style={{ color: color }}>{value === '🔒' ? <BiLock /> : ''}</div>
  );

  const [rows, setRows] = useState([
    { id: '4494', firstName: '	2023-12-01', lastName:'76.176.916-2', age:'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA', ejecutivo: 'Usuario Prueba', tiposolicitud: 'LEASING', montosolicitud: '171.000', estado: '🔒', ver: 'Ver',  },
    { id: '4493', firstName: '		2023-11-30', lastName:'76.176.916-2', age:'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA', ejecutivo: 'Usuario Prueba', tiposolicitud: 'LEASING', montosolicitud: '0', estado: '🔒', ver: 'Ver', },
    { id: '4492', firstName: '	2023-11-30', lastName:'76.176.916-2', age:'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA', ejecutivo: 'Usuario Prueba', tiposolicitud: 'LEASING', montosolicitud: '39.900', estado: '🔒', ver: 'Ver', },
    { id: '4491', firstName: '	2023-11-30', lastName:'76.176.916-2', age:'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA', ejecutivo: 'Usuario Prueba', tiposolicitud: 'LEASING', montosolicitud: '0', estado: '🔒', ver: 'Ver',  },
    { id: '4490', firstName: '	2023-11-30', lastName:'76.176.916-2', age:'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA', ejecutivo: 'Usuario Prueba', tiposolicitud: 'LEASING', montosolicitud: '0', estado: '🔒', ver: 'Ver',  },
  { id: '4488', firstName: '	2023-11-29', lastName:'76.176.916-2', age:'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA', ejecutivo: 'Usuario Prueba', tiposolicitud: 'LEASING', montosolicitud: '17.100', estado: '🔒', ver: 'Ver',  },
    { id: '4487', firstName: '	2023-11-29', lastName:'76.176.916-2', age:'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA', ejecutivo: 'Usuario Prueba', tiposolicitud: 'LEASING', montosolicitud: '0', estado: '🔒', ver: 'Ver', },
    { id: '4486', firstName: '	2023-11-29', lastName:'76.176.916-2', age:'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA', ejecutivo: 'Usuario Prueba', tiposolicitud: 'LEASING', montosolicitud: '0', estado: '🔒', ver: 'Ver',  },
    { id: '4484', firstName: '	2023-11-29', lastName:'76.176.916-2', age:'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA', ejecutivo: 'Usuario Prueba', tiposolicitud: 'LEASING', montosolicitud: '0', estado: '🔒', ver: 'Ver', },
  ]);

  const columns = [
    { field: 'id', headerName: 'Operacion',type: 'number', width: 100 },
    { field: 'firstName', headerName: 'Fecha',type: 'number', width: 130 },
    { field: 'lastName', headerName: 'Rut',type: 'number', width: 150 },
    { field: 'age', headerName: 'Empresa', width: 350 },
    { field: 'ejecutivo', headerName: 'Ejecutivo', type: 'number', width: 200 },
    { field: 'tiposolicitud', headerName: 'Tipo Solicitud', type: 'number', width: 110 },
    { field: 'montosolicitud', headerName: 'Monto Solicitud.', type: 'number', width: 110 },
    { field: 'estado', headerName: 'Estado',  width: 60 , renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" />},
    
    {
      field: 'pdf',
      headerName: 'PDF',
      width: 60,
      renderCell: (params) => (
        <IconButton
          color="primary"
          aria-label="PDF"
          onClick={() => handlePdfClick(params.row.id)}
        >
          <PictureAsPdfIcon />
        </IconButton>
      ),
    },
{
  field: 'ppt',
  headerName: 'PPT',
  width: 60,
  renderCell: (params) => (
    <IconButton
      color="primary"
      aria-label="PPT"
      onClick={() => handlePptButtonClick(params.row.id)}
    >
      <SlideshowIcon />
    </IconButton>
  ),
},
{
  field: 'eliminar',
  headerName: 'Eliminar',
  width: 80,
  renderCell: (params) => (
    <Button
      startIcon={<DeleteIcon style={{ color: 'blue' }} />}
      onClick={() => handleEliminarClick(params)}
    ></Button>
  ),
},
];
 
const noDataMessage = 'No hay datos para mostrar';

  const localeText = {
    noRowsLabel: noDataMessage,
  };
 


    return (
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5}  localeText={localeText}/>
    </div>
  );
};


export default SimpleTable;
