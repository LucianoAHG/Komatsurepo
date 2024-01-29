

import IconButton from '@mui/material/IconButton';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GetAppIcon from '@mui/icons-material/GetApp';
import jsPDF from 'jspdf';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BiLock } from "react-icons/bi";
import { BiX } from "react-icons/bi";




// ... (rest of your imports)

const SimpleTable = () => {
  // ... (rest of your code)

  const [pdfFile, setPdfFile] = useState(null);
  const [pptFile, setPptFile] = useState(null);
  // Configuración del botón con los nuevos iconos
  const iconos = {
    success: <GetAppIcon style={{ color: 'green' }} />,
    locked: <CloudUploadIcon style={{ color: 'grey' }} />,
    upload: <CloudUploadIcon style={{ color: 'blue' }} />,
    download: <GetAppIcon style={{ color: 'black' }} />,
  };

  const CustomButton = (params) => (
    <IconButton
      color="primary"
      onClick={() => {
        console.log(`Clic en Generar PDF para la fila con id: ${params.id}`);
        generarPDF(params.row);
      }}
    >
      {iconos.success}
    </IconButton>
  );
  const CheckIcon = ({ value, color }) => (
    
      <div style={{ color: color }}>{value === '✅' ? <BiCheck /> : ''}</div>
    );

    const LockIcon  = ({ value, color }) => (
    <div style={{ color: color }}>{value === '🔒' ? <BiLock /> : ''}</div>
 
    );
    const BixIcon  = ({ value, color }) => (
      <div style={{ color: color }}>{value === '❌' ? <BiX /> : ''}</div>
   
      );
  

// Manejar el cambio en el campo de carga de PDF
const handlePdfFileChange = (event) => {
  setPdfFile(event.target.files[0]);
};

const handlePptFileChange = (event) => {
  setPptFile(event.target.files[0]);
};


  // Datos de ejemplo
  const rows = [
    {
      id: '4494',
      firstName: '76.176.916-2',
      lastName: '	SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 'Usuario Prueba',
      montoUSD: '150.000',
    
      ej: '✅',
      asc: '🔒',
      ac: '🔒',
      jfs: '🔒',
      jc: '🔒',
      sgc: '🔒',
      gcc: '🔒',
      cfo: '🔒',
      gg: '🔒',
      cfovp: '🔒',
      ceo: '🔒',
      ver: '🔒',
      ppt: '❌',
      pdf: '❌',
      subirpdf: '⬆️',
     subirppt: '⬆️',
      generarpdf: '⬆️',
    },
   
      {
        id: '4493',
      firstName: '76.176.916-2',
      lastName: '	SOCIEDAD COMERCIAL CORREA Y CORREA LIMITADA',
      age: 'Usuario Prueba',
        montoUSD: '30.000',
      
        ej: '✅',
        asc: '🔒',
        ac: '🔒',
        jfs: '🔒',
        jc: '🔒',
        sgc: '🔒',
        gcc: '🔒',
        cfo: '🔒',
        gg: '🔒',
        cfovp: '🔒',
        ceo: '🔒',
        ver: '🔒',
        ppt: '❌',
        pdf: '❌',
        subirpdf: '⬆️',
        subirppt: '⬆️',
         generarpdf: '⬆️',
  
      },
      {
        id: '4475',
        firstName: '	76.450.505-0',
        lastName: '	INEL SPA',
        age: 'YEZEEL IBARRA',
        montoUSD: '293.000',
 
        ej: '✅',
        asc: '🔒',
        ac: '🔒',
        jfs: '🔒',
        jc: '🔒',
        sgc: '🔒',
        gcc: '🔒',
        cfo: '🔒',
        gg: '🔒',
        cfovp: '🔒',
        ceo: '🔒',
        ver: '🔒',
        ppt: '❌',
        pdf: '❌',
        subirpdf: '⬆️',
       subirppt: '⬆️',
        generarpdf: '⬆️',
      },
     
        {
          id: '4474',
          firstName: '24287',
          lastName: 'M&H GROUP S.A.C.	',
          age: 'YEZEEL IBARRA',
          montoUSD: '885.000	',
         
          ej: '✅',
          asc: '🔒',
          ac: '🔒',
          jfs: '🔒',
          jc: '🔒',
          sgc: '🔒',
          gcc: '🔒',
          cfo: '🔒',
          gg: '🔒',
          cfovp: '🔒',
          ceo: '🔒',
          ver: '🔒',
          ppt: '❌',
          pdf: '❌',
          subirpdf: '⬆️',
          subirppt: '⬆️',
           generarpdf: '⬆️',
    
        },
        {
          id: '4473',
          firstName: '20296',
          lastName: '	BIDDLE INC S.A.C.',
          age: 'YEZEEL IBARRA	',
          montoUSD: '419.500	',
       
          ej: '✅',
          asc: '🔒',
          ac: '🔒',
          jfs: '🔒',
          jc: '🔒',
          sgc: '🔒',
          gcc: '🔒',
          cfo: '🔒',
          gg: '🔒',
          cfovp: '🔒',
          ceo: '🔒',
          ver: '🔒',
          ppt: '❌',
          pdf: '❌',
          subirpdf: '⬆️',
         subirppt: '⬆️',
          generarpdf: '⬆️',
        },
       
          {
            id: '4472',
            firstName: '	24086',
            lastName: 'ANGELES MINERIA Y CONSTRUCCIÓN S.A.C',
            age: 'YEZEEL IBARRA',
            montoUSD: '885.000',
           
            ej: '✅',
            asc: '🔒',
            ac: '🔒',
            jfs: '🔒',
            jc: '🔒',
            sgc: '🔒',
            gcc: '🔒',
            cfo: '🔒',
            gg: '🔒',
            cfovp: '🔒',
            ceo: '🔒',
            ver: '🔒',
            ppt: '❌',
            pdf: '❌',
            subirpdf: '⬆️',
            subirppt: '⬆️',
             generarpdf: '⬆️',
      
          },
          {
            id: '4471',
            firstName: '78.016.820-K	',
            lastName: 'CONPAX MAQUINARIAS SPA	',
            age: 'YEZEEL IBARRA',
            montoUSD: '1.000.000	',
            
            ej: '✅',
            asc: '🔒',
            ac: '🔒',
            jfs: '🔒',
            jc: '🔒',
            sgc: '🔒',
            gcc: '🔒',
            cfo: '🔒',
            gg: '🔒',
            cfovp: '🔒',
            ceo: '🔒',
            ver: '🔒',
            ppt: '❌',
            pdf: '❌',
            subirpdf: '⬆️',
           subirppt: '⬆️',
            generarpdf: '⬆️',
          },
         
            {
              id: '4457',
              firstName: '76.951.770-7',
              lastName: 'SOCIEDAD DE INVERSIONES OROCUP LIMITADA',
              age: 'YEZEEL IBARRA',
              montoUSD: '1.000.000',
           
              ej: '✅',
              asc: '🔒',
              ac: '🔒',
              jfs: '🔒',
              jc: '🔒',
              sgc: '🔒',
              gcc: '🔒',
              cfo: '🔒',
              gg: '🔒',
              cfovp: '🔒',
              ceo: '🔒',
              ver: '🔒',
              ppt: '❌',
              pdf: '❌',
              subirpdf: '⬆️',
              subirppt: '⬆️',
               generarpdf: '⬆️',
        
            },
            {
              id: '4456',
              firstName: '	76.362.333-5',
              lastName: 'SEVEN RENT A CAR SPA',
              age: 'YEZEEL IBARRA',
              montoUSD:  0,
              
              ej: '✅',
              asc: '🔒',
              ac: '🔒',
              jfs: '🔒',
              jc: '🔒',
              sgc: '🔒',
              gcc: '🔒',
              cfo: '🔒',
              gg: '🔒',
              cfovp: '🔒',
              ceo: '🔒',
              ver: '🔒',
              ppt: '❌',
              pdf: '❌',
              subirpdf: '⬆️',
             subirppt: '⬆️',
              generarpdf: '⬆️',
            },
           
              {
                id: '4455',
                firstName: '76.253.942-K',
                lastName: '	ANSER MINING LIMITADA',
                age: 'YEZEEL IBARRA',
                montoUSD: 0,
               
                ej: '✅',
                asc: '🔒',
                ac: '🔒',
                jfs: '🔒',
                jc: '🔒',
                sgc: '🔒',
                gcc: '🔒',
                cfo: '🔒',
                gg: '🔒',
                cfovp: '🔒',
                ceo: '🔒',
                ver: '🔒',
                ppt: '❌',
                pdf: '❌',
                subirpdf: '⬆️',
                subirppt: '⬆️',
                 generarpdf: '⬆️',
          
              },

  ];

  const generarPDF = (rowData) => {
    const pdf = new jsPDF();
    Object.keys(rowData).forEach((key, index) => {
      const yPosition = 20 + index * 10;
      pdf.text(20, yPosition, `${key}: ${rowData[key]}`);
    });
  
    // Si hay un archivo PPT adjunto, añadir al PDF
    if (pptFile) {
      pdf.addPage();
      pdf.text(20, 20, 'Contenido del archivo PPT:');
      // Aquí puedes agregar el contenido del archivo PPT al PDF según tus requisitos
    }
  
    // Si hay un archivo PDF adjunto, añadir al PDF
    if (pdfFile) {
      pdf.addPage();
      pdf.text(20, 20, 'Contenido del archivo PDF:');
      // Aquí puedes agregar el contenido del archivo PDF al PDF según tus requisitos
    }
  
    pdf.save(`documento_${rowData.id}.pdf`);
  };
  



  // Columnas de la tabla
  const columns = [
    { field: 'id', headerName: 'Oper', type: 'number', width: 70 },
    { field: 'firstName', headerName: 'Rut', type: 'string', width: 130 },
    { field: 'lastName', headerName: 'Empresa', width: 300 },
    { field: 'age', headerName: 'Ejecutivo', width: 150 },
    { field: 'montoUSD', headerName: 'Monto USD', type: 'number', width: 150 },
    { field: 'ej', headerName: 'EJ',  width: 60, renderCell: (params) => <CheckIcon value={params.value} color="#439E1C" /> },
    { field: 'asc', headerName: 'ASC',  width: 60, renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" />},
    { field: 'ac', headerName: 'AC',  width: 60, renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" />},
    { field: 'jfs', headerName: 'JFC',  width:60, renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" />  },
    { field: 'jc', headerName: 'JC',  width: 60,renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" /> },
    { field: 'sgc', headerName: 'SGC',  width: 60, renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" /> },
    { field: 'gcc', headerName: 'GCC',  width: 60, renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" /> },
    { field: 'cfo', headerName: 'CFO',  width: 60,renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" /> },
    { field: 'gg', headerName: 'GG',  width: 60, renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" /> },
    { field: 'cfovp', headerName: 'CFO VIP',  width: 60,renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" />},
    { field: 'ceo', headerName: 'CEO',  width: 60,renderCell: (params) => <LockIcon value={params.value} color="#0D70C9" /> },
   
    { field: 'ppt', headerName: 'PPT',  width: 60 ,renderCell: (params) => <BixIcon value={params.value} color="#CC0000" /> },
    { field: 'pdf', headerName: 'PDF',  width: 60 ,renderCell: (params) => <BixIcon value={params.value} color="#CC0000" />},
    {
      field: 'subirpdf',
      headerName: 'Subir PDF',
      width: 110,
      renderCell: (params) => (
        <>
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={handlePdfFileChange}
            ref={(input) => {
              params.inputRef = input;
            }}
          />
          <IconButton
            color="primary"
            onClick={() => {
              console.log(`Clic en Subir PDF para la fila con id: ${params.id}`);
              params.inputRef.click();
            }}
          >
            <PictureAsPdfIcon />
          </IconButton>
        </>
      ),
    },
    {
      field: 'subirppt',
      headerName: 'Subir PPT',
      width: 110,
      renderCell: (params) => (
        <>
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={handlePptFileChange}
            ref={(input) => {
              params.inputRef = input;
            }}
          />
          <IconButton
            color="primary"
            onClick={() => {
              console.log(`Clic en Subir PPT para la fila con id: ${params.id}`);
              params.inputRef.click();
            }}
          >
            <SlideshowIcon />
          </IconButton>
        </>
      ),
    },
    
    {
      field: 'generarpdf',
      headerName: 'Generar PDF',
      width: 110,
      renderCell: CustomButton,
    },
  ];
  // Configuración del mensaje cuando no hay datos
  const noDataMessage = 'No hay datos para mostrar';

  // Configuración de texto local
  const localeText = {
    noRowsLabel: noDataMessage,
  };

  console.log(rows);

  return (
    <div style={{ height: 400, width: '100%' }}>
    {/* Render selected file names or messages based on the state */}
    {pdfFile && <p>Selected PDF file: {pdfFile.name}</p>}
    {pptFile && <p>Selected PPT file: {pptFile.name}</p>}
    <CheckIcon color="#000" />
    <DataGrid rows={rows} columns={columns} pageSize={5} localeText={localeText} />
  </div>
);
  };

export default SimpleTable;