import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
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
          <div className="col-lg-2">
            <div className="form-body">
              <div className="form-group">
                <span>Duration</span>

                <FormControl variant="standard" sx={{ width: '100%', marginBottom: 3 }}>
                  <InputLabel htmlFor="demo-customized-select-native">Duration</InputLabel>
                  <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="form-body">
              <div className="form-group">
                <span>Channel</span>
                <FormControl variant="standard" sx={{ width: '100%', marginBottom: 3 }}>
                  <InputLabel htmlFor="demo-customized-select-native">Channel</InputLabel>
                  <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="form-body">
              <div className="form-group">
                <span>Queue</span>
                <FormControl variant="standard" sx={{ width: '100%', marginBottom: 3 }}>
                  <InputLabel htmlFor="demo-customized-select-native">Queue</InputLabel>
                  <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="form-body">
              <div className="form-group">
                <span>Agent</span>
                <FormControl variant="standard" sx={{ width: '100%', marginBottom: 3 }}>
                  <InputLabel htmlFor="demo-customized-select-native">Agent</InputLabel>
                  <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="form-body">
              <div className="form-group">
                <span>Conversation status</span>
                <FormControl variant="standard" sx={{ width: '100%', marginBottom: 3 }}>
                  <InputLabel htmlFor="demo-customized-select-native">Conversation status</InputLabel>
                  <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="form-body">
              <div className="form-group">
                <span>Timezone</span>
                <FormControl variant="standard" sx={{ width: '100%', marginBottom: 3 }}>
                  <InputLabel htmlFor="demo-customized-select-native">Timezone</InputLabel>
                  <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
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
