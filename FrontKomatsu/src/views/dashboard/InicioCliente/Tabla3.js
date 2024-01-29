import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import jsPDF from 'jspdf';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const SimpleTable = () => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [selectedRowData, setSelectedRowData] = React.useState(null);

  const handlePdfClick = (params) => {
    const pdf = new jsPDF();
    pdf.text(`Información de la fila con ID: ${params.id}`, 10, 10);
    pdf.save('documento.pdf');
    setSelectedRowData(params.data);
    
  };


  const downloadPPT = (pptUrl) => {
    console.log(`Descargando PPT desde: ${pptUrl}`);
    // Implementa la lógica necesaria para descargar el PPT según tus requerimientos
    // ...
  };

  const handlePptClick = (params) => {
    downloadPPT(params.ppt);
  };

  const handleSearchClick = (params) => {
    setSelectedRowData(params.data);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Resto del código...
  const rows = [
    {
      id: '4494',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 'Usuario Prueba',
      montoUSD: '150.000'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '		01-12-2023 11:17',
      fechaultima: '01-12-2023 12:44',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },
    {
      id: '4489',
      firstName: '76.176.916-2',
      lastName: 'SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 'Usuario Prueba',
      montoUSD: '30.000'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '		30-11-2023 10:48',
      fechaultima: '30-11-2023 11:02',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },
    {
      id: '4495',
      firstName: '76.450.505-0',
      lastName: 'INEL SPA',
      age: 'YEZEEL IBARRA',
      montoUSD: '293.000'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '	01-12-2023 11:17',
      fechaultima: '01-12-2023 12:44',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },{
      id: '4474',
      firstName: '24287',
      lastName: 'M&H GROUP S.A.C.',
      age: 'YEZEEL IBARRA',
      montoUSD: '885.000'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '	15-11-2023 15:33',
      fechaultima: '15-11-2023 16:51',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },{
      id: '4473',
      firstName: '	20296',
      lastName: 'BIDDLE INC S.A.C.',
      age: 'YEZEEL IBARRA	',
      montoUSD: '419.500'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '	03-11-2023 15:31',
      fechaultima: '10-11-2023 08:48',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },{
      id: '4472	',
      firstName: '	24086',
      lastName: 'ANGELES MINERIA Y CONSTRUCCIÓN S.A.C	',
      age: 'YEZEEL IBARRA	',
      montoUSD: '885.000'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '	24-10-2023 15:53	',
      fechaultima: '	25-10-2023 09:34',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },{
      id: '4471',
      firstName: '78.016.820-K',
      lastName: 'CONPAX MAQUINARIAS SPA	',
      age: 'YEZEEL IBARRA	',
      montoUSD: '1.000.000	'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '	20-10-2023 09:44',
      fechaultima: '24-10-2023 10:44',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },{
      id: '4457	',
      firstName: '	76.951.770-7',
      lastName: 'SOCIEDAD DE INVERSIONES OROCUP LIMITADA',
      age: 'YEZEEL IBARRA',
      montoUSD: '1.000.000'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '		27-09-2023 22:11',
      fechaultima: '28-09-2023 09:16',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },{
      id: '4456	',
      firstName: '76.362.333-5	',
      lastName: '	SEVEN RENT A CAR SPA',
      age: 'YEZEEL IBARRA',
      montoUSD: '0'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '	27-09-2023 18:47',
      fechaultima: '27-09-2023 18:51',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },{
      id: '4455',
      firstName: '	76.253.942-K',
      lastName: 'ANSER MINING LIMITADA	',
      age: 'YEZEEL IBARRA	',
      montoUSD: '0'	,
      hecho: 'Tiene una nueva solicitud modificada',
      accion: 'Solicitud para ser analizada',
      fechainicio: '		27-09-2023 18:25',
      fechaultima: '	27-09-2023 18:50',
      accion2: 'ver',
      pdf: '',
      ppt: '',
    },
    


  ];

  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Oper', type: 'number', width: 70 },
    { field: 'firstName', headerName: 'Rut', type: 'string', width: 130 },
    { field: 'lastName', headerName: 'Empresa', width: 300 },
    { field: 'age', headerName: 'Ejecutivo',  width: 150 },
    { field: 'montoUSD', headerName: 'Monto', type: 'number', width: 150 },
    { field: 'hecho', headerName: 'Hecho', width: 200 },
    { field: 'accion', headerName: 'Accion', width: 200 },
    { field: 'fechainicio', headerName: 'Fecha Inicio', width: 110 },
    { field: 'fechaultima', headerName: 'Fecha Termino', width: 110 },
    {
      field: 'pdf',
      headerName: 'PDF',
      width: 110,
      renderCell: (params) => (
        <IconButton color="primary" onClick={() => handlePdfClick(params)}>
          <PictureAsPdfIcon />
        </IconButton>
      ),
    },
    {
      field: 'ppt',
      headerName: 'PPT',
      width: 110,
      renderCell: (params) => (
        <IconButton color="primary" onClick={() => handlePptClick(params)}>
          <SlideshowIcon />
        </IconButton>
      ),
    },
    {
      field: 'accion2',
      headerName: 'Accion',
      width: 110,
      renderCell: (params) => (
        <IconButton color="primary" onClick={() => handleSearchClick(params)}>
          <SearchIcon />
        </IconButton>
      ),
    },
  ];


return (
  <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>Información detallada</DialogTitle>
<DialogContent>
  {selectedRowData ? (
    <div>
      <Typography>ID: {selectedRowData.id}</Typography>
      <Typography>Rut: {selectedRowData.firstName}</Typography>
      <Typography>Empresa: {selectedRowData.lastName}</Typography>
      {/* Agrega más información según tus necesidades */}
    </div>
  ) : (
    <Typography>No se ha seleccionado ninguna fila.</Typography>
  )}

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SimpleTable;

