import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

//Importar Proyectos

// ====== Estilos ======= //
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    outerWidth: '100%',
    borderRadius: 0,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}));

function SeccionInput() {
  // == estados Iniciales == //
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div
        style={{
          border: '1px solid rgba(200,200,200,0.5)',
          backgroundColor: 'white !important',
          padding: '10px',
          borderRadius: '2px'
        }}
      >
        <div className="row">
          <div className="col-xs12 col-md-4">
            <div className="form-body">
              <div className="form-group">
                <Typography>Canal de Entrada</Typography>

                <FormControl variant="standard" sx={{ width: '95%', marginBottom: 3 }}>
                  <InputLabel htmlFor="demo-customized-select-native">canal de entrada</InputLabel>
                  <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
                    <option aria-label="None" value="" />
                    <option value={12}>Todos</option>
                    <option value={10}>Whatsapp</option>
                    <option value={20}>Chat</option>
                    <option value={30}>Corre</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="col-xs12 col-md-4">
            <div className="form-body">
              <div className="form-group">
                <Typography>Funnel Comercia</Typography>

                <FormControl variant="standard" sx={{ width: '95%', marginBottom: 3 }}>
                  <InputLabel htmlFor="demo-customized-select-native">funnel comercial</InputLabel>
                  <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
                    <option aria-label="None" value="" />
                    <option value={10}>Prospecto</option>
                    <option value={10}>Cotización</option>
                    <option value={20}>Orden de compra</option>
                    <option value={30}>Cliente</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="col-xs12 col-md-4">
            <div className="form-body">
              <div className="form-group">
                <Typography>Producto</Typography>
                <FormControl variant="standard" sx={{ width: '95%', marginBottom: 3 }}>
                  <InputLabel htmlFor="demo-customized-select-native">Todos</InputLabel>
                  <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
                    <option aria-label="None" value="" />
                    <option value={10}>AST</option>
                    <option value={20}>GO911</option>
                    <option value={30}>MAF</option>
                    <option value={30}>Provida</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeccionInput;
