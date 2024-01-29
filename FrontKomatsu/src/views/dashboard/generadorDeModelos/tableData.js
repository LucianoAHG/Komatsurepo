import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';

//import Icons

import { IconCalendar } from '@tabler/icons';

const rows = [
  {
    id: 1,
    nombre: 'arbol11',
    list: 'List of 15'
  },
  {
    id: 2,
    nombre: 'datos',
    list: '1018 obs. of 29 variables'
  },
  {
    id: 3,
    nombre: 'datos2',
    list: '1018 obs. of 29 variables'
  },
  {
    id: 4,
    nombre: 'Gama_bbdd_PN_Equis...',
    list: '1018 obs. of 29 variables'
  },
  {
    id: 5,
    nombre: 'Gama_bbdd_PN_Equis...',
    list: '1018 obs. of 29 variables'
  },
  {
    id: 6,
    nombre: 'Gama_bbdd_PN_Equis...',
    list: '1018 obs. of 29 variables'
  }
];

const columns = [
  { field: 'nombre', headerName: 'Data', width: 180, editable: false, flex: 2 },
  {
    field: ' list',
    headerName: '',
    width: 180,
    editable: false,
    flex: 7,
    renderCell: (params) => (
      <Grid container direction="row">
        <Grid item>{params.row.list}</Grid>
        <Grid item sx={{ marginLeft: 'auto' }}>
          <IconCalendar />
        </Grid>
      </Grid>
    )
  }
];

function TableData() {
  return (
    <div>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default TableData;
