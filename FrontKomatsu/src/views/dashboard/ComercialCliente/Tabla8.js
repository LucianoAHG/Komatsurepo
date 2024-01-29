import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Tab, Tabs, Button, TextField, MenuItem, Paper } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const DualTables = () => {
  const [rows1, setRows1] = React.useState([
    { id: 1, tipo: '', periodo: null, observaciones: '', documentos: '' },
  ]);





  const columns1 = [
    { field: 'tipo', headerName: 'Tipo', width: 200, renderCell: renderTipoCell },
    { field: 'periodo', headerName: 'Periodo', width: 200, renderCell: renderPeriodoCell },
    { field: 'observaciones', headerName: 'Observaciones', width: 200, renderCell: renderObservacionesCell },
    { field: 'documentos', headerName: 'Documentos', width: 200 },
  ];

  const CustomSelect = ({ label, value, onChange, items }) => {
    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          label={label}
        >
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  function renderTipoCell(params) {
    const tipoItems = [
      { value: 'Opción 1', label: 'DAI' },
      { value: 'Opción 2', label: 'Balance' },
      { value: 'Opción 3', label: 'IVA' },
    ];
  
    const menuItems = tipoItems.map((item, index) => (
      <MenuItem
        key={item.value}
        value={item.value}
        style={{ margin: index < tipoItems.length - 1 ? '10px 0' : '10' }}
      >
        {item.label}
      </MenuItem>
    ));

    return (
      <CustomSelect
      label="Tipo"
      value={params.value}
      onChange={(value) => handleCellChange(params.id, 'tipo', value)}
      items={tipoItems}
    >
      {menuItems}
    </CustomSelect>
  );
}

  function renderPeriodoCell(params) {
    return (
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DesktopDatePicker
          value={params.value}
          onChange={(date) => handleCellChange(params.id, 'periodo', date)}
          renderInput={(params) => <TextField {...params} fullWidth label="Periodo" />}
          openTo="year"
          views={['year', 'month']}
        />
      </LocalizationProvider>
    );
  }

  function renderObservacionesCell(params) {
    return (
      <TextField
        fullWidth
        variant="standard"
        label="Observaciones"
        value={params.value}
        onChange={(e) => handleCellChange(params.id, 'observaciones', e.target.value)}
      />
    );
  }

  const handleCellChange = (id, field, value) => {
    setRows1((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleFileUpload = (file) => {
    console.log('File uploaded:', file);
  };

  const handleFileInputChange = (event) => {
    const fileInput = event.target;

    if (fileInput.files.length > 0) {
      const uploadedFile = fileInput.files[0];

      // Handle file upload logic
      handleFileUpload(uploadedFile);

      // Update rows1 with the new data
      setRows1((prevRows) => [
        ...prevRows,
        {
          id: prevRows.length + 1,
          tipo: '',
          periodo: null,
          observaciones: '',
          documentos: uploadedFile.name,
        },
      ]);

      fileInput.value = ''; // Clear the file input if needed
    }
  };

  
  const classes = makeStyles((theme) => ({
    roundedButton: {
      borderRadius: 16,
    },
    formContainer: {
      padding: theme.spacing(2),
    },
    saveButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      borderRadius: 16,
      marginLeft: theme.spacing(2),
    },
  }))();

  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
      <Tab label="Adjuntar documentos financieros" style={{ color: 'black' }} />
        {/* Otras pestañas aquí... */}
      </Tabs>

      {selectedTab === 0 && (
        <div>
            <Paper style={{ width: '100%', padding: 16, marginBottom: 16, boxShadow: 'none', border: '1px solid lightgrey' }}>
          <TextField
  select
  fullWidth
  variant="standard"
  label="Tipo"
  value={rows1[0].tipo}
  onChange={(e) => handleCellChange(rows1[0].id, 'tipo', e.target.value)}
  SelectProps={{
    MenuProps: {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      getContentAnchorEl: null,
    },
  }}
  style={{ margin: '10px 0' }} // Ajusta según tus preferencias
>
  <div>
    <MenuItem value="Opción 1">DAI</MenuItem>
  </div>
  <div>
    <MenuItem value="Opción 2">BALANCE</MenuItem>
  </div>
  <div>
    <MenuItem value="Opción 3">IVA</MenuItem>
  </div>
</TextField>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker
                value={rows1[0].periodo}
                onChange={(date) => handleCellChange(rows1[0].id, 'periodo', date)}
                renderInput={(params) => <TextField {...params} fullWidth label="Periodo" />}
                openTo="year"
                views={['year', 'month']}
              />
            </LocalizationProvider>
            <TextField
              fullWidth
              variant="standard"
              label="Observaciones"
              value={rows1[0].observaciones}
              onChange={(e) => handleCellChange(rows1[0].id, 'observaciones', e.target.value)}
            />
            <input
              type="file"
              accept=".pdf"
              style={{ display: 'none' }}
              id="fileInput"
              onChange={handleFileInputChange}
            />
          </Paper>

          <Button
  onClick={() => document.getElementById('fileInput').click()}
  style={{
    backgroundColor: '#2c85de',
    borderRadius: 8,
    margin: '10px 0', // Ajusta según tus preferencias
    padding: '5px 10px', // Ajusta según tus preferencias
    fontSize: 14, // Ajusta según tus preferencias
  }}
  variant="contained"
  startIcon={<AttachFileIcon />}
  className={`${classes.roundedButton} ${classes.whiteText}`}
>
  Adjuntar PDF
</Button>


          
        </div>
      )}

      {selectedTab === 1 && (
        <div>
          {/* Contenido de la segunda pestaña */}
          {/* Puedes agregar el contenido que desees aquí */}
        </div>
      )}

      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows1} columns={columns1} pageSize={5}  />
      </div>
    </div>
  );
};

export default DualTables;
