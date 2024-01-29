import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import MainCard from 'ui-component/cards/MainCard';
import { Button, LinearProgress } from '@mui/material';
//icon
// import ArticleIcon from '@mui/icons-material/Article';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CancelIcon from '@mui/icons-material/Cancel';

{
  /**Definicion de Estados */
}
const Estado = {
  Deudor: 'Deudor',
  Pagado: 'Pagado',
  Renegociacion: 'Renegociación'
};
function createData(name, dato1, dato2, estado, dato3, dato4, dato5) {
  return {
    name,
    dato1,
    dato2,
    estado,
    dato3,
    dato4,
    dato5,
    detalle: [
      {
        canal: 'Whatstapp',
        asignado_mes: 895,
        recorrido_mes: 1233,
        veces: 10,
        cobro_mes: 500,
        cobro_mes_asignacion_porcentaje: 90,
        cobro_efectivo: 450,
        cobro_efectivo_porcentaje: 95
      },
      {
        canal: 'Sms',
        asignado_mes: 895,
        recorrido_mes: 1233,
        veces: 10,
        cobro_mes: 500,
        cobro_mes_asignacion_porcentaje: 90,
        cobro_efectivo: 450,
        cobro_efectivo_porcentaje: 95
      },
      {
        canal: 'Correo',
        asignado_mes: 895,
        recorrido_mes: 1233,
        veces: 10,
        cobro_mes: 500,
        cobro_mes_asignacion_porcentaje: 90,
        cobro_efectivo: 450,
        cobro_efectivo_porcentaje: 95
      }
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  // const [estado, setEstado] = React.useState('');
  //Funtion de cambio de estado
  const handleEstadoClick = (newEstado) => {
    onEstadoChange(row.name, newEstado);
  };
  {
    /**Funtion para el estado */
  }
  const renderEstadoIcon = () => {
    switch (row.estado) {
      case Estado.Deudor:
        return (
          <>
            <Button style={{ width: '100px' }} onClick={() => handleEstadoClick(Estado.Pagado)}>
              <ReportProblemIcon color="error" />
              <span style={{ color: 'red' }}>Moroso</span>
            </Button>
          </>
        );

      case Estado.Pagado:
        return (
          <>
            <Button style={{ width: '100px' }} onClick={() => handleEstadoClick(Estado.Renegociacion)}>
              <EventAvailableIcon color="success" />
              <span style={{ color: 'green' }}>Pagado</span>
            </Button>
          </>
        );

      case Estado.Renegociacion:
        return (
          <>
            <Button style={{ width: '100px' }} onClick={() => handleEstadoClick(Estado.Deudor)}>
              <CancelIcon color="warning" />
              <span style={{ color: 'orange' }}>Negociación</span>
            </Button>
          </>
        );
      default:
        return null;
    }
  };
  {
    /**Fin de funcion agregada para estado. */
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.dato1}</TableCell>
        <TableCell align="right">{row.dato2}</TableCell>
        <TableCell align="right">{renderEstadoIcon()}</TableCell>
        <TableCell align="right">{row.dato3}</TableCell>
        <TableCell align="right">
          <LinearProgress variant="determinate" value={row.dato4} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                detalle
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Canal</TableCell>
                    <TableCell>Asignado Mes</TableCell>
                    <TableCell align="right">recorrido_mes</TableCell>
                    <TableCell align="right">Total dato5 ($)</TableCell>
                    <TableCell align="rigth">Progress (%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detalle.map((detalleRow) => (
                    <TableRow key={detalleRow.canal}>
                      <TableCell component="th" scope="row">
                        {detalleRow.canal}
                      </TableCell>
                      <TableCell>{detalleRow.asignado_mes}</TableCell>
                      <TableCell align="right">{detalleRow.recorrido_mes}</TableCell>
                      <TableCell align="right">{Math.round(detalleRow.recorrido_mes * row.dato5 * 100) / 100}</TableCell>
                      <TableCell align="right">
                        <LinearProgress variant="determinate" value={(detalleRow.recorrido_mes / row.dato3) * 100} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    dato1: PropTypes.number.isRequired,
    dato3: PropTypes.number.isRequired,
    dato2: PropTypes.number.isRequired,
    // {/**Estado */}
    estado: PropTypes.oneOf([Estado.Deudor, Estado.Pagado, Estado.Renegociacion]).isRequired,
    // {/**Fin de estado */}
    detalle: PropTypes.arrayOf(
      PropTypes.shape({
        total: PropTypes.number.isRequired,
        recorrido_mes: PropTypes.number.isRequired,
        asignado_mes: PropTypes.number.isRequired,
        canal: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    dato5: PropTypes.number.isRequired,
    dato4: PropTypes.number.isRequired
  }).isRequired, //se agrega cambio de estado
  onEstadoChange: PropTypes.func.isRequired
};

const rows = [
  createData('Asignado mes', 159, 6.0, Estado.Deudor, 24, 4.0, 3.99),
  createData('MV', 237, 9.0, Estado.Pagado, 37, 4.3, 4.99),
  createData('Nissan', 262, 16.0, Estado.Renegociacion, 24, 6.0, 3.79),
  createData('Lg', 305, 3.7, Estado.Deudor, 67, 4.3, 2.5),
  createData('Codelco', 356, 16.0, Estado.Pagado, 49, 3.9, 1.5)
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Accion</TableCell>
            <TableCell align="right">dato1</TableCell>
            <TableCell align="right">dato2&nbsp;(%)</TableCell>
            <TableCell align="right">dato3&nbsp;(status)</TableCell>
            <TableCell align="right">dato4&nbsp;(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
