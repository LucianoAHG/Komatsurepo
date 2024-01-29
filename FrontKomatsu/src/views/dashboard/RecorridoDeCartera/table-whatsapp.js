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
import MainCard from 'ui-component/cards/MainCard';
import { Button, LinearProgress } from '@mui/material';
//icon
// import ArticleIcon from '@mui/icons-material/Article';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CancelIcon from '@mui/icons-material/Cancel';
//import proyecto

{
  /**Definicion de Estados */
}
const Estado = {
  Deudor: 'Deudor',
  Pagado: 'Pagado',
  Renegociacion: 'Renegociación'
};
function createData(
  resultados,
  asignado_mes,
  recorrido_mes,
  estado,
  veces,
  cobro_mes_porcentaje,
  cobro_efectivo,
  cobro_efectivo_porcentaje
) {
  return {
    resultados,
    asignado_mes,
    recorrido_mes,
    estado,
    veces,
    cobro_mes_porcentaje,
    cobro_efectivo,
    cobro_efectivo_porcentaje,
    detalle: [
      {
        pagos: 12,
        recorrido_hoy: 100,
        cobro_diario: 3,
        cobro_diario_partido_recorrido: '56%'
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
    onEstadoChange(row.resultados, newEstado);
  };
  {
    /**Funtion para el estado */
  }
  const renderEstadoIcon = () => {
    switch (row.estado) {
      case Estado.Deudor:
        return (
          <>
            <Button variant="text" color="error" style={{ width: '100px' }} onClick={() => handleEstadoClick(Estado.Pagado)}>
              <ReportProblemIcon color="error" />
              <span style={{ color: 'red' }}>Moroso</span>
            </Button>
          </>
        );

      case Estado.Pagado:
        return (
          <>
            <Button variant="text" color="success" style={{ width: '100px' }} onClick={() => handleEstadoClick(Estado.Renegociacion)}>
              <EventAvailableIcon color="success" />
              <span style={{ color: 'green' }}>Pagado</span>
            </Button>
          </>
        );

      case Estado.Renegociacion:
        return (
          <>
            <Button variant="text" color="warning" style={{ width: '100px' }} onClick={() => handleEstadoClick(Estado.Deudor)}>
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
          {row.resultados}
        </TableCell>
        <TableCell align="right">{row.asignado_mes}</TableCell>
        <TableCell align="right">{row.recorrido_mes}</TableCell>
        <TableCell align="right">{renderEstadoIcon()}</TableCell>
        <TableCell align="right">{row.veces}</TableCell>
        <TableCell align="right">
          <LinearProgress variant="determinate" value={row.cobro_mes_porcentaje} />
        </TableCell>
        <TableCell align="right">{row.cobro_efectivo}</TableCell>
        <TableCell align="right">
          <LinearProgress variant="determinate" value={row.cobro_efectivo_porcentaje} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h4" gutterBottom component="div">
                Detalle
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Pagos</TableCell>
                    <TableCell>Recorrido hoy</TableCell>
                    <TableCell>Cobrado hoy</TableCell>
                    <TableCell align="right">Cobro vs Recorrido(%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detalle.map((detalleRow) => (
                    <TableRow key={detalleRow.pagos}>
                      <TableCell component="th" scope="row">
                        {detalleRow.pagos}
                      </TableCell>
                      <TableCell>{detalleRow.recorrido_hoy}</TableCell>
                      <TableCell align="right">{detalleRow.cobro_diario}</TableCell>
                      <TableCell align="right">
                        <LinearProgress variant="determinate" value={(detalleRow.cobro_diario / row.recorrido_hoy) * 100} />
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
    asignado_mes: PropTypes.number.isRequired,
    veces: PropTypes.number.isRequired,
    recorrido_mes: PropTypes.number.isRequired,
    // {/**Estado */}
    estado: PropTypes.oneOf([Estado.Deudor, Estado.Pagado, Estado.Renegociacion]).isRequired,
    // {/**Fin de estado */}
    detalle: PropTypes.arrayOf(
      PropTypes.shape({
        total: PropTypes.number.isRequired,
        recorrido_mes: PropTypes.number.isRequired,
        resultados: PropTypes.number.isRequired,
        canal: PropTypes.string.isRequired
      })
    ).isRequired,
    resultados: PropTypes.string.isRequired,
    cobro_efectivo: PropTypes.number.isRequired,
    cobro_mes_porcentaje: PropTypes.number.isRequired
  }).isRequired, //se agrega cambio de estado
  onEstadoChange: PropTypes.func.isRequired
};

const rows = [
  createData('Resultados', 1000, 6.0, Estado.Deudor, 500, 50, 40, 90)
  //   createData('Resultados', 237, 9.0, Estado.Pagado, 37, 4.3, 4.99, 80),
  //   createData('Resultados', 262, 16.0, Estado.Renegociacion, 24, 6.0, 3.79, 50),
  //   createData('Resultados', 305, 3.7, Estado.Deudor, 67, 4.3, 2.5, 50),
  //   createData('Resultados', 356, 16.0, Estado.Pagado, 49, 3.9, 1.5, 50)
];

export default function CollapsibleTable() {
  return (
    <MainCard>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Resultados</TableCell>
              <TableCell align="right">asignado_mes</TableCell>
              <TableCell align="right">recorrido_mes&nbsp;(%)</TableCell>
              <TableCell align="right">veces&nbsp;(status)</TableCell>
              <TableCell align="right">Cobro Mes</TableCell>
              <TableCell align="right">Cobros mes/Asig&nbsp;(%)</TableCell>
              <TableCell align="right">Cobro Efectivos</TableCell>
              <TableCell align="right">Cobro Efectivos/Cobros(%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.resultados} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
