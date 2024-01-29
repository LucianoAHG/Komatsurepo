// material-ui
import React from 'react';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import clsx from 'clsx';
import {
  TableBody,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
  lighten,
  LinearProgress
} from '@mui/material';
// import MainCard from 'ui-component/cards/MainCard';

import { Delete, FilterList } from '@mui/icons-material';

// project imports

// ==============================|| SAMPLE PAGE ||============================== //

function createData(
  topic,
  engagedConversations,
  volume,
  volumeChange,
  avgConversationHandleTime,
  avgCSAT,
  csatImpact,
  avgSentiment,
  sentimentImpact
) {
  return {
    topic,
    engagedConversations,
    volume,
    volumeChange,
    avgConversationHandleTime,
    avgCSAT,
    csatImpact,
    avgSentiment,
    sentimentImpact
  };
}
//========= Nuevos Datos ==========//

//========= Fin Nuevos Datos =====//
const rows = [
  createData('Topic 1', 150, 30, 10, 5, 4.5, 'High', 'Positive', 'Positive'),
  createData('Topic 2', 200, 40, 15, 8, 4.7, 'Medium', 'Neutral', 'Neutral'),
  createData('Topic 3', 120, 25, 8, 4, 4.2, 'Low', 'Negative', 'Negative'),
  createData('Topic 4', 80, 20, 5, 6, 4.0, 'Low', 'Negative', 'Negative'),
  createData('Topic 5', 100, 50, 12, 7, 4.6, 'Medium', 'Neutral', 'Neutral'),
  createData('Topic 6', 90, 15, 5, 5, 4.4, 'Low', 'Negative', 'Negative'),
  createData('Topic 7', 170, 35, 8, 4, 4.3, 'Medium', 'Neutral', 'Neutral'),
  createData('Topic 8', 60, 10, 2, 5, 3.8, 'Low', 'Negative', 'Negative'),
  createData('Topic 9', 110, 28, 7, 6, 4.1, 'Medium', 'Neutral', 'Neutral'),
  createData('Topic 10', 40, 12, 3, 4, 3.5, 'Low', 'Negative', 'Negative'),
  createData('Topic 11', 70, 22, 6, 5, 4.0, 'Low', 'Negative', 'Negative'),
  createData('Topic 12', 25, 15, 3, 3, 3.2, 'Low', 'Negative', 'Negative'),
  createData('Topic 13', 95, 10, 2, 8, 4.9, 'Medium', 'Neutral', 'Neutral'),
  createData('Topic 14', 200, 60, 18, 9, 4.7, 'High', 'Positive', 'Positive'),
  createData('Topic 15', 30, 5, 1, 5, 3.6, 'Low', 'Negative', 'Negative'),
  createData('Topic 16', 45, 18, 4, 4, 3.8, 'Low', 'Negative', 'Negative'),
  createData('Topic 17', 85, 28, 7, 7, 4.5, 'Medium', 'Neutral', 'Neutral'),
  createData('Topic 18', 110, 10, 2, 3, 3.9, 'Low', 'Negative', 'Negative'),
  createData('Topic 19', 75, 20, 5, 6, 4.2, 'Low', 'Negative', 'Negative'),
  createData('Topic 20', 150, 45, 12, 8, 4.6, 'Medium', 'Neutral', 'Neutral')
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'topic', numeric: false, disablePadding: true, label: 'Topic' },
  { id: 'engagedConversations', numeric: true, disablePadding: false, label: 'Engaged Conversations' },
  { id: 'volume', numeric: true, disablePadding: false, label: 'Volume' },
  { id: 'volumeChange', numeric: true, disablePadding: false, label: 'Volume Change' },
  { id: 'avgConversationHandleTime', numeric: true, disablePadding: false, label: 'Avg. Conversation Handle Time (min)' },
  { id: 'avgCSAT', numeric: true, disablePadding: false, label: 'Avg. CSAT' },
  { id: 'csatImpact', numeric: false, disablePadding: true, label: 'CSAT Impact' },
  { id: 'avgSentiment', numeric: true, disablePadding: false, label: 'Avg. Sentiment' },
  { id: 'sentimentImpact', numeric: false, disablePadding: true, label: 'Sentiment Impact' }
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = styled((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: '1 1 100%'
  }
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Datos
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterList />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const useStyles = styled((theme) => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
}));

export default function EnhancedTable() {
  const theme = useTheme();
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('engagedConversations');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.topic);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, topic) => {
    const selectedIndex = selected.indexOf(topic);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, topic);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (topic) => selected.indexOf(topic) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div style={{ border: '1px solid', color: `${theme.palette.grey[300]}`, borderRadius: 2 }}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table className={classes.table} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'} aria-label="enhanced table">
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.topic);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.topic)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.topic}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {row.topic}
                        </TableCell>
                        <TableCell align="right">
                          <LinearProgress variant="determinate" value={row.engagedConversations} />
                        </TableCell>
                        <TableCell align="right">{row.volume}</TableCell>
                        <TableCell align="right">{row.volumeChange}</TableCell>
                        <TableCell align="right">{row.avgConversationHandleTime}</TableCell>
                        <TableCell align="right">{row.avgCSAT}</TableCell>
                        <TableCell align="right">{row.csatImpact}</TableCell>
                        <TableCell align="right">{row.avgSentiment}</TableCell>
                        <TableCell align="right">{row.sentimentImpact}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={10} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" />
      </div>
    </div>
  );
}
