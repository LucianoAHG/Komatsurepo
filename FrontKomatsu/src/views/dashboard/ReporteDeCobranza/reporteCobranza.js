import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import MainCard from 'ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';
// import SubCard from 'ui-component/cards/SubCard';
//import styled
import { Typography } from '@mui/material';
import { styled } from '@mui/material';
import { LinearProgress } from '@mui/material';

const columns = [
  { id: 'name', label: 'Tipo de Crédito', minWidth: 100 },
  { id: 'code', label: '1-11', minWidth: 100, align: 'right', format: (value) => `${value.toLocaleString(2)}%` },
  {
    id: 'seccion1',
    label: '1-12',
    minWidth: 100,
    align: 'right',
    format: (value) => `${value.toLocaleString(2)}%`
  },
  {
    id: 'seccion2',
    label: '1-2',
    minWidth: 100,
    align: 'right',
    format: (value) => `${value.toLocaleString(2)}%`
  },
  {
    id: 'seccion3',
    label: '1-3',
    minWidth: 100,
    align: 'right',
    format: (value) => `${value.toLocaleString(2)}%`
  },
  {
    id: 'seccion4',
    label: '1-4',
    minWidth: 100,
    align: 'right',
    format: (value) => `${value.toLocaleString(2)}%`
  },
  {
    id: 'seccion5',
    label: '1-5',
    minWidth: 100,
    align: 'right',
    format: (value) => `${value.toLocaleString(2)}%`
  },
  {
    id: 'seccion6',
    label: '1-6',
    minWidth: 100,
    align: 'right',
    format: (value) => `${value.toLocaleString(2)}%`
  },
  {
    id: 'seccion7',
    label: '1-7',
    minWidth: 100,
    align: 'right',
    format: (value) => `${value.toLocaleString(2)}%`
  }
];

function createData(name, code, seccion1, seccion2, seccion3, seccion4, seccion5, seccion6, seccion7) {
  // const seccion3 = seccion1 / seccion2;
  return { name, code, seccion1, seccion2, seccion3, seccion4, seccion5, seccion6, seccion7 };
}

const rows = [
  createData('0', 22, 54, 56, 48, 30, 98, 45, 23, 15),
  createData('< = 30', 23, 65, 51, 48, 30, 98, 45, 23, 15),
  createData('> 30 y <= 60', 40, 59, 50, 48, 30, 98, 45, 23, 15),
  createData('> 60 y <= 90', 51, 54, 50, 48, 30, 98, 45, 23, 15),
  createData('> 90 y <= 120', 52, 56, 57, 48, 30, 98, 45, 23, 15),
  createData('> 120 y <= 150', 52, 56, 52, 48, 30, 98, 45, 23, 15),
  createData('> 150 y <= 180', 52, 56, 58, 48, 30, 98, 45, 23, 15),
  createData('> 180', 52, 56, 53, 48, 30, 98, 45, 23, 15)
  // createData(30, 52, 51, 50, 48, 30, 98, 45, 23, 15),
  // createData(75, 52, 50, 53, 48, 30, 98, 45, 23, 15),
  // createData(85, 52, 54, 59, 48, 30, 98, 45, 23, 15),
  // createData(96, 52, 54, 55, 48, 30, 98, 45, 23, 15),
  // createData(12, 52, 54, 56, 48, 30, 98, 45, 23, 15),
  // createData(20, 52, 57, 58, 48, 30, 98, 45, 23, 15),
  // createData(180, 52, 55, 56, 48, 30, 98, 45, 23, 15)
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const theme = useTheme();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  /**funcion de control de colores **/
  const getCellColor = (value) => {
    if (value < 20) {
      return `${theme.palette.success.light}`;
    } else if (value > 20 && value < 40) {
      return `${theme.palette.success[200]}`;
    } else if (value >= 40 && value < 60) {
      return `${theme.palette.warning.main}`;
    } else if (value > 60 && value <= 100) {
      return `${theme.palette.error.main}`;
    }
  };
  /** Fin control de colores **/
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  /**Funcion tema linearprogress */
  const StyledLinearProgress = styled(LinearProgress)(({ progressColor }) => ({
    height: 25,
    borderRadius: 0,
    '& .MuiLinearProgress-bar': {
      borderRadius: 0,
      backgroundColor: progressColor || theme.palette.error.main
    },
    '&.MuiLinearProgress-determinate': {
      backgroundColor: theme.palette.grey[200]
    }
  }));
  //Fin funcion tema linearprogress

  //funcion contenedor progress
  const ProgressContainer = styled('div')`
    position: relative;
  `;
  //fin contenedor progress

  //texto
  const ValueText = styled(Typography)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black; /* Cambia el color según tus necesidades */
  `;
  //fin texto

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={1}></TableCell>
              <TableCell align="center" colSpan={8} style={{ background: `${theme.palette.primary[200]}` }}>
                Días de Mora Industria
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    top: 57,
                    minWidth: column.minWidth,
                    background: column.id === 'name' ? `${theme.palette.primary.light}` : `${theme.palette.primary.light}`,
                    color: column.id != 'name' ? `${theme.palette.grey[600]}` : 'inherit'
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column, columnIndex) => {
                    const value = row[column.id];
                    const cellColor = getCellColor(value);
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          backgroundColor: `${theme.palette.grey[50]}`,
                          borderBottom: `1px solid ${theme.palette.grey[200]}`,
                          borderRight: `1px solid ${theme.palette.grey[200]}`
                        }}
                      >
                        {/**Cambio de color en el style
                         * backgroundColor: columnIndex === 0 ? `${theme.palette.grey.main}` : cellColor ? cellColor : ' inherit',
                         *
                         */}
                        {/**linear progress */}

                        {columnIndex === 0 ? (
                          ''
                        ) : (
                          <ProgressContainer>
                            <StyledLinearProgress variant="determinate" value={value} progressColor={cellColor ? cellColor : ' inherit'} />
                            <ValueText>{`${value}%`}</ValueText>
                          </ProgressContainer>
                        )}

                        {columnIndex === 0 ? (column.format && typeof value === 'number' ? column.format(value) : value) : ''}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
