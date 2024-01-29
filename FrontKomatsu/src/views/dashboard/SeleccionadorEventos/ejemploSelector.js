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

// materials Icon
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';

// ==============================|| SAMPLE PAGE ||============================== //

function Estrategia() {
  /** Funciones Cambio de Color **/
  const theme = useTheme();
  //Iniciacion de estados.
  //Estados para prueba de Seleccion en ventana emergente
  // const optionsArray = ['opcion 1', 'opcion 2', 'opcion 3'];
  // const initialRowsOption = [
  //   'Recordatorio de Pago de Fecha (cobranza)',
  //   'Verificación de promesa de pago',
  //   'Obtención de compromiso de pago 1er',
  //   'Obtención de compromiso de pago 2do',
  //   'Obtención de compromiso de pago 3er',
  //   'Llamada Negociación',
  //   'Propuesta de Pago',
  //   'Llamada de 2da Negociación',
  //   'Notificación publicación 1° cuota Dicom',
  //   'Notificación publicación 2° cuota Dicom',
  //   'Notificación de envío Cobranza Judicial',
  //   'Recordatorio en proceso de Cobranza Judicial'
  // ];
  const [selectedOption, setSelectedOption] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  //fin de estados prueba de ventana emergente
  //Funcion para manejo de estados ventana emergente
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDialogOpen(false);
  };
  const handleClickOpen = () => {
    setDialogOpen(true);
  };
  const handleClickClose = () => {
    setDialogOpen(false);
  };

  //fin funcion manejo de estados
  const [cellBackgroundColors, setCellBackgroundColors] = useState({});

  //Funcion para control de Edicion Header

  //Fin de edicion de Header

  //const para cerrar el cuadro de dialogo

  //fin par acerrar cuadro de dialogo
  /**Funcion para agregar un nuevo header */

  /**Fin funcion nuevo header */
  const rows = [
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
  ];
  //Datos iniciales para encabezados
  const InitialHeaders = ['', 'Preventiva', 'Informativa', 'Temprana', 'Compromisos', 'Negociación', 'Eventos'];
  //Estados para editar encabezados
  const [headers, setHeaders] = useState(InitialHeaders);
  //Funcion de edicion
  const handleHeaderEdit = (index) => {
    const newHeader = prompt('Editar nombre', headers[index]);
    if (newHeader !== null) {
      const newHeaders = [...headers];
      newHeaders[index] = newHeader;
      setHeaders(newHeaders);
    }
  };
  //Fin de funcion para editar encabezados.

  /***====== Editar, Constantes y Estados Iniciales ====================== ***/
  const initialRows = [
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
  ];

  const [filas, setFilas] = useState(initialRows);

  const handleRowsEdit = (index) => {
    const newRow = prompt('Edite su Script', filas[index]);
    if (newRow !== null) {
      const newFilas = [...filas];
      newFilas[index] = newRow;
      setFilas(newFilas);
    }
  };
  /*========== Fin Editar y estados iniciales ================================ */

  /*=============Editar segundo header  ================================ */
  const initialCols = [
    '-5',
    '-4',
    '-1',
    '0',
    '4',
    '5',
    '6',
    '10',
    '11',
    '15',
    '16',
    '20',
    '25',
    '26',
    '30',
    '33',
    '34',
    '43',
    '45',
    '50',
    '57',
    '58',
    '60',
    'evento'
  ];
  //estados iniciales
  const [cols, setCols] = useState(initialCols);
  // funcion para editar
  const handlerColsEdit = (index) => {
    const newCol = prompt('Edite su Script', cols[index]);
    if (newCol !== null) {
      const newCols = [...cols];
      newCols[index] = newCol;
      setCols(newCols);
    }
  };

  /*============= Fin Editar segundo header =========================== */
  const columns = [
    '-5',
    '-4',
    '-1',
    '0',
    '4',
    '5',
    '6',
    '10',
    '11',
    '15',
    '16',
    '20',
    '25',
    '26',
    '30',
    '33',
    '34',
    '43',
    '45',
    '50',
    '57',
    '58',
    '60',
    'evento'
  ];
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

  return (
    <div>
      <TableContainer style={{ maxHeight: '500px' }}>
        <Table spacing={2}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={1}></TableCell>

              <TableCell align="center" colSpan={3}>
                <Button sx={{ color: `${theme.palette.grey[500]}` }} variant="outlined" onClick={() => handleHeaderEdit(1)}>
                  {headers[1]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Button sx={{ color: `${theme.palette.grey[500]}` }} variant="outlined" onClick={() => handleHeaderEdit(2)}>
                  {headers[2]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={6}>
                <Button sx={{ color: `${theme.palette.grey[500]}` }} variant="outlined" onClick={() => handleHeaderEdit(3)}>
                  {headers[3]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={6}>
                <Button sx={{ color: `${theme.palette.grey[500]}` }} variant="outlined" onClick={() => handleHeaderEdit(4)}>
                  {headers[4]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={7}>
                <Button sx={{ color: `${theme.palette.grey[500]}` }} variant="outlined" onClick={() => handleHeaderEdit(5)}>
                  {headers[5]}
                </Button>
              </TableCell>
              <TableCell align="center" colSpan={1}>
                <Button sx={{ color: `${theme.palette.grey[500]}` }} variant="outlined" onClick={() => handleHeaderEdit(6)}>
                  {headers[6]}
                </Button>
              </TableCell>
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
              {/**Iteracion de encabezado */}
              {columns.map((column, index) => (
                <TableCell
                  key={column}
                  style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    backgroundColor: `${theme.palette.grey[50]}`
                  }}
                >
                  <Button sx={{ color: `${theme.palette.grey[500]}` }} variant="outlined" onClick={() => handlerColsEdit(index)}>
                    {cols[index]}
                  </Button>
                </TableCell>
              ))}
              {/**Fin iteracion encabezados */}
              <TableCell align="center" colSpan={1}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row}>
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
                  <Button sx={{ color: `${theme.palette.grey[500]}` }} variant="outlined" onClick={() => handleRowsEdit(index)}>
                    {filas[index]}
                  </Button>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    {selectedOption || filas[index]}
                  </Button>
                </TableCell>
                <OptionsDialog open={dialogOpen} handleClose={handleClickClose} options={rows} handleOptionClick={handleOptionClick} />
                {columns.map((column) => (
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
                    key={`${row}-${column}`}
                  >
                    <Button
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: cellBackgroundColors[`${row}-${column}`] || `${theme.palette.grey[200]}`
                      }}
                    ></Button>
                  </TableCell>
                ))}

                {/* Resto de las celdas vacías... */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
