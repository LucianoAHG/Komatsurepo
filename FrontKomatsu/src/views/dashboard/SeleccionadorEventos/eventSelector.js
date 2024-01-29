// material-ui
import { TableCell, TableHead, TableRow, TableBody, Table, TableContainer, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// project imports
// import MainCard from 'ui-component/cards/MainCard';
//react
import { React, useState } from 'react';
//importaciones para ventana emergente
// import { FormControl } from '@mui/material';
import OptionsDialog from './dialogOpcionesDeCanal';
import EditHeadersColsDialog from './dialogEditHeaders';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconEdit } from '@tabler/icons';

// ==============================|| SELECTOR DE EVENTOS PAGE ||============================== //

function Estrategia() {
  /** Funciones Cambio de Color **/
  const theme = useTheme();
  // Estados de ventana emergente editor header y columnas

  //ESTADOS DE VENTANA EMERGENTE EDITOR HEADER Y COLUMNAS

  //FUNCIONES PARA MANEJAR VENTANA DE EDITOR HEADER Y COLS

  //FIN FUNCIONES PARA MANEJAR VENTANA DE EDITOR HEADER Y COLS

  const [selectedOption, setSelectedOption] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [rowsOps, setRowsOps] = useState([
    'Recordatorio de Pago de Fecha (cobranza)',
    'Verificación de promesa de pago',
    'Obtención de compromiso de pago 1er',
    'Obtención de compromiso de pago 2do',
    'Obtención de compromiso de pago 3er',
    'Llamada Negociación',
    'Propuesta de Pago',
    'Llamada de 2da Negociación',
    'Notificación publicación 1° cuota Dicom',
    'Notificación publicación 2° cuota Dicom',
    'Notificación de envío Cobranza Judicial',
    'Recordatorio en proceso de Cobranza Judicial'
  ]);

  //fin de estados prueba de ventana emergente
  //Funcion para manejo de estados ventana emergente
  const handleOptionClick = (option) => {
    const updatedRows = [...rowsOps];
    updatedRows[selectedRowIndex] = option;
    setRowsOps(updatedRows);
    setSelectedOption(option);
    setDialogOpen(false);
  };
  const handleClickOpen = (index) => {
    setDialogOpen(true);
    setSelectedRowIndex(index);
  };
  const handleClickClose = () => {
    setDialogOpen(false);
    setSelectedRowIndex(null);
  };

  //fin funcion manejo de estados
  const [cellBackgroundColors, setCellBackgroundColors] = useState({});

  //Datos iniciales para encabezados
  // const InitialHeaders = ['', 'Preventiva', 'Informativa', 'Temprana', 'Compromisos', 'Negociación', 'Eventos'];
  const InitialHeaders = [
    { headerName: 'Preventiva', colSpan: 3, columns: [-5, -4, -1] },
    { headerName: 'Informativa', colSpan: 2, columns: [0, 4] },
    { headerName: 'Temprana', colSpan: 6, columns: [5, 6, 10, 11, 15, 16] },
    { headerName: 'Compromisos', colSpan: 6, columns: [20, 25, 26, 30, 33, 34] },
    { headerName: 'Negociación', colSpan: 6, columns: [43, 45, 50, 57, 58, 60] },
    { headerName: 'Eventos', colSpan: 1, columns: [1] }
  ];

  //================================Estados para editar encabezados==================================//
  // const AllHeaders = ['', 'Preventiva', 'Informativa', 'Temprana', 'Compromisos', 'Negociación', 'Eventos'];
  const [headers, setHeaders] = useState(InitialHeaders);
  //Funcion de edicion

  const handleHeaderEdit = (index, newHeader) => {
    const updateHeader = [...headers];
    updateHeader[index] = newHeader;
    setHeaders(updateHeader);
  };

  //Edicion de ColSpan
  // const handleColSpanEdit = (index, newColSpan) => {
  //   const updateColSapn = [...headers];
  //   updateColSapn[index] = newColSpan;
  //   setHeaders(updateColSapn);
  // };
  const handleColSpanEdit = (index, newColSpan) => {
    const updatedHeaders = [...headers];
    const headerToUpdate = { ...updatedHeaders[index] };

    // Actualiza el colSpan
    headerToUpdate.colSpan = newColSpan.colSpan;
    console.log('colspan nuevo', newColSpan);
    console.log('actualización colSapn :', headerToUpdate.colSpan);

    // Ajusta el array de columns en función de colSpan
    const currentColumnsLength = headerToUpdate.columns.length;
    console.log('largo aray column :', currentColumnsLength);

    if (newColSpan.colSpan > currentColumnsLength) {
      // Agrega valores vacíos al array de columns
      for (let i = currentColumnsLength; i < newColSpan.colSpan; i++) {
        headerToUpdate.columns.push('0'); // Puedes usar cualquier marcador apropiado
      }
    } else if (newColSpan.colSpan < currentColumnsLength) {
      // Elimina valores extras del array de columns
      headerToUpdate.columns = headerToUpdate.columns.slice(0, newColSpan.colSpan);
    }

    updatedHeaders[index] = headerToUpdate;
    console.log('update columnas actualizado', headerToUpdate);
    setHeaders(updatedHeaders);
  };

  const handleRowsEdit = (index) => {
    const newRow = prompt('Edite su Script', rowsOps[index]);
    if (newRow !== null) {
      const newFilas = [...rowsOps];
      newFilas[index] = newRow;
      setRowsOps(newFilas);
    }
  };
  /*========== Fin Editar y estados iniciales ================================ */

  const handleClick = (row, column) => {
    // Copiar el objeto de colores de fondo actual
    const newBackgroundColors = { ...cellBackgroundColors };

    // Constuir una clave unica para identificar la celda
    const cellKey = `${row}-${column}`;

    //Verificar si la celda está en el objeto de colores de fondo
    if (cellKey in newBackgroundColors) {
      //Si está, quitarlo (cambiar a blanco)
      delete newBackgroundColors[cellKey];
    } else {
      //Si no está, agregarlo (cambiar a verde)
      newBackgroundColors[cellKey] = '#88dc65';
    }
    setCellBackgroundColors(newBackgroundColors);
  };

  /**FUNCIONES PARA ABRIR DIALOG EDIT HEADERS AND COLUMNS */
  const [openeditHeaders, setOpeneditHeaders] = useState(false);
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState('');

  const handleEditHeaders = (index) => {
    setOpeneditHeaders(true);
    setSelectedHeaderIndex(index);
  };

  const handleCloseEditHeaders = () => {
    setOpeneditHeaders(false);
  };
  //FIN FUNCIONES PARA ABRIR DIALOG EDIT HEADERS AND COLUMNS

  return (
    <div>
      {console.log('seletedHeaderindex :', selectedHeaderIndex)}
      <EditHeadersColsDialog
        open={openeditHeaders}
        onClose={handleCloseEditHeaders}
        indexHeader={selectedHeaderIndex}
        headers={headers}
        onConfirmHeader={handleHeaderEdit}
        onConfirmColSpan={handleColSpanEdit}
      />
      <TableContainer style={{ maxHeight: 700 }}>
        <Table spacing={2}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {/**primera columna vacía */}
              {/**Iniciacion edicion iteracion de headers */}
              {headers.map((header, index) => (
                <TableCell key={header} colSpan={header.colSpan} align="center">
                  {/*console.log('index index:', index)*/}
                  {/*console.log('index header:', header)*/}
                  {/*console.log('colsSpan :', header.colSpan)*/}
                  <Button
                    sx={{
                      color: `${theme.palette.grey[500]}`,
                      borderColor: `${theme.palette.grey[200]}`,
                      boxShadow: `1px 4px 4px ${theme.palette.grey[300]}`
                    }}
                    variant="text"
                    onClick={() => handleEditHeaders(index)}
                  >
                    {header.headerName}
                  </Button>
                </TableCell>
              ))}
              {/**Fin de iteracion headers */}
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                colSpan={1}
                style={{
                  backgroundColor: `${theme.palette.grey[50]}`,
                  color: `${theme.palette.grey[500]}`
                }}
              >
                Canal
              </TableCell>

              {/**||**********************Iteracion de encabezado||****************** */}
              {headers.map((header, indexHeader) =>
                header.columns.map((column, columnIndex) => (
                  <TableCell
                    key={`${indexHeader}-${header.headerName}-${columnIndex}`}
                    style={{
                      position: 'sticky',
                      top: 0,
                      zIndex: 1,
                      backgroundColor: `${theme.palette.grey[50]}`
                    }}
                  >
                    {/*console.log('header Index :', index)*/}
                    {/*console.log('columns Index :', colIndex)*/}
                    <Button
                      variant="text"
                      sx={{
                        color: `${theme.palette.grey[500]}`,
                        borderColor: `${theme.palette.grey[200]}`,
                        boxShadow: `1px 4px 4px ${theme.palette.grey[300]}`
                      }}
                      onClick={handleEditHeaders}
                    >
                      {column}
                    </Button>
                  </TableCell>
                ))
              )}

              {/********************|| Fin iteracion encabezados **************||*******************/}
              <TableCell align="center" colSpan={1}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsOps.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  style={{
                    whiteSpace: 'nowrap',
                    background: `${theme.palette.primary.dark}`,
                    fontWeight: ' bold',
                    position: 'sticky',
                    left: '0',
                    zIndex: 1,
                    backgroundColor: `${theme.palette.grey[50]}`
                  }}
                >
                  <Button variant="text" sx={{ color: `${theme.palette.grey[500]}` }} onClick={() => handleRowsEdit(index)}>
                    <IconEdit />
                  </Button>
                  <Button
                    sx={{ color: `${theme.palette.grey[500]}`, borderColor: `${theme.palette.grey[200]}` }}
                    variant="text"
                    onClick={() => handleClickOpen(index)}
                  >
                    {rowsOps[index]}
                  </Button>
                </TableCell>
                {headers.map((head, headerIndex) =>
                  head.columns.map((column, columIndex) => (
                    <TableCell
                      align="center"
                      sx={{ height: 5 }}
                      style={{
                        // border: '1px solid #9c9c9c',
                        padding: '5px',
                        borderCollapse: 'separate',
                        borderSpacing: '10px',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleClick(row, column)}
                      key={`${headerIndex}-${columIndex}`}
                    >
                      <Button
                        variant="text"
                        style={{
                          width: '90%',
                          height: '90%',
                          boxShadow: `1px 4px 4px ${theme.palette.grey[300]}`,
                          backgroundColor: cellBackgroundColors[`${row}-${column}`] || `${theme.palette.grey[200]}`
                        }}
                      ></Button>
                    </TableCell>
                  ))
                )}

                {/* Resto de las celdas vacías... */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/**dialogo emergente para seleccion multiple */}
      <OptionsDialog
        open={dialogOpen}
        handleClose={handleClickClose}
        options={rowsOps}
        handleOptionClick={handleOptionClick}
        selectedOption={selectedOption}
      />

      {/**Dialogo emergente para editar encabezados */}

      {/**Fin de dialogo para editar encabezados */}
      <Grid container>
        <Grid item sx={{ margin: 1, padding: 1 }}>
          <Button>
            <div>
              <SaveIcon />
              Guardar
            </div>
          </Button>
          <Button>
            <div>
              <SettingsIcon />
              Por defecto
            </div>
          </Button>
          <Button>
            <div>
              <DeleteIcon />
              Limpiar
            </div>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Estrategia;

{
  /* <TableCell align="center" colSpan={3}>
                <Button
                  sx={{
                    color: `${theme.palette.grey[500]}`,
                    borderColor: `${theme.palette.grey[200]}`,
                    boxShadow: `1px 4px 4px ${theme.palette.grey[300]}`
                  }}
                  variant="text"
                  onClick={() => handleHeaderEdit(1)}
                >
                  {headers[1]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Button
                  sx={{
                    color: `${theme.palette.grey[500]}`,
                    borderColor: `${theme.palette.grey[200]}`,
                    boxShadow: `1px 4px 4px ${theme.palette.grey[300]}`
                  }}
                  variant="text"
                  onClick={() => handleHeaderEdit(2)}
                >
                  {headers[2]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={6}>
                <Button
                  sx={{
                    color: `${theme.palette.grey[500]}`,
                    borderColor: `${theme.palette.grey[200]}`,
                    boxShadow: `1px 4px 4px ${theme.palette.grey[300]}`
                  }}
                  variant="text"
                  onClick={() => handleHeaderEdit(3)}
                >
                  {headers[3]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={6}>
                <Button
                  sx={{ color: `${theme.palette.grey[500]}`, borderColor: `${theme.palette.grey[200]}` }}
                  variant="outlined"
                  onClick={() => handleHeaderEdit(4)}
                >
                  {headers[4]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={7}>
                <Button
                  sx={{
                    color: `${theme.palette.grey[500]}`,
                    borderColor: `${theme.palette.grey[200]}`,
                    boxShadow: `1px 4px 4px ${theme.palette.grey[300]}`
                  }}
                  variant="text"
                  onClick={() => handleHeaderEdit(5)}
                >
                  {headers[5]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={1}>
                <Button
                  sx={{
                    color: `${theme.palette.grey[500]}`,
                    borderColor: `${theme.palette.grey[200]}`,
                    boxShadow: `1px 4px 4px ${theme.palette.grey[300]}`
                  }}
                  variant="text"
                  onClick={() => handleHeaderEdit(6)}
                >
                  {headers[6]}
                </Button>
              </TableCell> */
}

/**Iteracion de las columnas independientes  */

{
  /* {columns.map((column, index) => (
                <TableCell
                  key={column}
                  style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    backgroundColor: `${theme.palette.grey[50]}`
                  }}
                >
                  {console.log('index cols:', index)}
                  <Button
                    sx={{
                      color: `${theme.palette.grey[500]}`,
                      borderColor: `${theme.palette.grey[200]}`,
                      boxShadow: `1px 4px 4px ${theme.palette.grey[300]}`
                    }}
                    variant="text"
                    onClick={() => handlerColsEdit(index)}
                  >
                    {cols[index]}
                  </Button>
                </TableCell>
              ))} */
}
/**Fin de iteracion de columnas de forma independiente */
// const columns = [
//   '-5',
//   '-4',
//   '-1',
//   '0',
//   '4',
//   '5',
//   '6',
//   '10',
//   '11',
//   '15',
//   '16',
//   '20',
//   '25',
//   '26',
//   '30',
//   '33',
//   '34',
//   '43',
//   '45',
//   '50',
//   '57',
//   '58',
//   '60',
//   'evento'
// ];
