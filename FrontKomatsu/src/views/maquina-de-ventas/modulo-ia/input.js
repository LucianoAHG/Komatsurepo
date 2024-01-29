import React from 'react';
import { styled } from '@mui/material/styles';
// import InputLabel from '@mui/material/InputLabel';
import { Typography, TextField, Button } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import NativeSelect from '@mui/material/NativeSelect';
// import InputBase from '@mui/material/InputBase';
// import PeopleIcon from '@mui/icons-material/People';
//Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

//Importar Proyectos

// ====== Estilos ======= //
// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3)
//   },
//   '& .MuiInputBase-input': {
//     outerWidth: '100%',
//     borderRadius: 0,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     height: '29px',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"'
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
//     }
//   }
// }));

// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: '#A0AAB4'
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#B2BAC2'
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#E0E3E7'
//     },
//     '&:hover fieldset': {
//       borderColor: '#B2BAC2'
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#6F7E8C'
//     }
//   }
// });

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
    borderRadius: 0
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 0
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style,
    borderRadius: 0
  }
});

function SeccionInput() {
  // == estados Iniciales == //
  //   const [age, setAge] = useState('');
  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
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
          <div className="col-xs12 col-md-12">
            <div className="form-body">
              <div className="form-group">
                <Typography style={{ marginBottom: '25px' }}>Ingrese Token</Typography>

                <FormControl variant="standard" sx={{ width: '95%', marginBottom: 3, borderRadius: 0 }}>
                  <ValidationTextField label="Token" variant="outlined" id="validation-outlined-input" />
                </FormControl>
              </div>
            </div>
          </div>

          {/* <CssTextField label="Custom CSS" id="custom-css-outlined-input" /> Boton otro estilo*/}

          <div className="col-xs12 col-md-12">
            <div className="form-body">
              <div className="form-group">
                <FormControl variant="standard" sx={{ width: '95%', marginTop: 3 }}>
                  <Button variant="contained" type="submit" startIcon={<AddCircleIcon />}>
                    Validar Token
                  </Button>
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
