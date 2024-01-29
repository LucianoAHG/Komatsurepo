// import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

// // material-ui icons
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
// import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField/';
import {
  // Box,
  Button,
  Checkbox,
  Divider,
  MenuItem,
  // Menu,
  // styled,
  // InputBase,
  Select,
  // NativeSelect,
  FormControl,
  FormControlLabel,
  // FormLabel,
  // FormGroup,
  // FormHelperText,
  Grid,
  // Paper,
  // IconButton,
  // InputAdornment,
  InputLabel,
  OutlinedInput,
  //Stack,
  Typography
  // useMediaQuery
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useTheme } from '@mui/material/styles';
// import { TextareaAutosize } from '@mui/material';

// third-party
// import ApexCharts from 'apexcharts';
// import Chart from 'react-apexcharts';

// project imports
// import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import * as yup from 'yup';

/***Importación validador ***/
import { useFormik } from 'formik';

// chart data
// import chartData from './chart-data/total-growth-bar-chart';

// ==============================|| DASHBOARD DEFAULT - FORM CARGA DEUDOR||============================== //
/**  estilos input**/

/**CONSTANTES PARA SELECTOR CON DATOS ENVIADOS**/
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  'Nissan-Marubeni',
  'Hites',
  'Coval',
  'Mundo Crédito',
  'AFP Provida',
  'Telefonica Chile',
  'Transformación digital Penta Financiero',
  'Citi'
];
function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}
/**FIN DE CONSTANTES PARA SELECTOR CON DATOS**/
function CargarDeudor() {
  const theme = useTheme();
  const labelStyle = {
    textAlign: 'right'
  };

  // Ejemplo con selector de datos
  const [empresa, setEmpresa] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setEmpresa(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    setSelectedValues(typeof value === 'string' ? value.split(',') : value);
  };

  /** INICIO FUNCION FORMIK Y VALIDACIONES **/
  const schema = yup.object().shape({
    asignaciones: yup.string().required(),
    file: yup.mixed().required(),
    radioOption: yup.bool().required().oneOf([true], 'Seleccione una opción'),
    empresa: yup.bool().required().oneOf([true], 'Seleccione una opción')
  });

  //funciones fomrik
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar'
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  /** FIN FUNCION FORMIK Y VALIDACIONES **/

  /*** Estilo boton y funciones ***/

  // const [selectedOption, setSelectedOption] = useState('');

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  //   const theme = useTheme();
  //   const customization = useSelector((state) => state.customization);

  //   const { navType } = customization;
  //   const { primary } = theme.palette.text;
  //   const darkLight = theme.palette.dark.light;
  //   const grey200 = theme.palette.grey[200];
  //   const grey500 = theme.palette.grey[500];

  //   const primary200 = theme.palette.primary[200];
  //   const primaryDark = theme.palette.primary.dark;
  //   const secondaryMain = theme.palette.secondary.main;
  //   const secondaryLight = theme.palette.secondary.light;
  return (
    <div>
      <MainCard title="Modulo de Cargas" secondary={<SecondaryAction icon={<InsertChartIcon fontSize="small" />} />}>
        <form noValidate onSubmit={formik.handleSubmit}>
          {/* <Divider component="li" /> */}
          <Grid container>
            <Grid item xs={5} spacing={gridSpacing}>
              <Grid>
                <Typography variant="subtitle1" color={theme.palette.grey[700]} pb={5}>
                  Suba su archivo con datos
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              {' '}
              <label htmlFor="contained-button-file">
                <Button startIcon={<CloudUploadIcon />} variant="contained" color="primary" component="span">
                  <input
                    accept="image/*"
                    style={{ display: 'none', background: `${theme.palette.primary.main}` }}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  Upload
                </Button>
              </label>
            </Grid>
          </Grid>
          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          <Grid container>
            <Grid item xs={5} md={5}>
              <Grid>
                <Typography variant="subtitle1" py={3} color={theme.palette.grey[700]}>
                  Seleccione Variables de Asignaciones
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={5} md={6}>
              <Grid>
                <Grid item xs={6}>
                  <FormControlLabel label="Provision" value={1} control={<Checkbox />} />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel label="Tramos Mora" control={<Checkbox />} />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel label="% de Cartera" control={<Checkbox />} />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel label="Ticket de Crédito" control={<Checkbox />} />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel label="Campaña Normalización" control={<Checkbox />} />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel label="Zona Geografica" control={<Checkbox />} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/**  prueba **/}
          <Grid container>
            <Grid item xs={5} md={5}>
              <Grid>
                <Typography variant="subtitle1" color={theme.palette.grey[700]}>
                  Seleccione una empresa
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={5} md={6}>
              <Grid>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">Empresas</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={empresa}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name} style={getStyles(name, empresa, theme)}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          <Grid container>
            <Grid item xs={5} md={5}>
              <Grid>
                {' '}
                <Typography variant="subtitle1" color={theme.palette.grey[700]}>
                  Asignaciones
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={5} md={6}>
              <Grid>
                <TextField
                  label="Ingrese aca sus Comentarios"
                  multiline
                  placeholder="Escribe aquí"
                  maxRows={4}
                  minRows={2}
                  sx={{
                    width: '100%',
                    padding: '8px',
                    fontSize: '16px',
                    borderColor: `${theme.palette.primary[200]} !important`,
                    borderRadius: '4px'
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* INICIO SIN USAR PAPER MULTISELECCION */}
          <Grid container>
            {/* Columna 1 */}
            <Grid item xs={12} md={6}>
              <div>
                <Typography variant="subtitle1" py={3} color={theme.palette.grey[700]}>
                  Seleccione Variables de Asignaciones
                </Typography>
                {/* Contenido del primer elemento */}
                <Grid container pl={3}>
                  <Grid item xs={6}>
                    <FormControlLabel label="Provision" value={1} control={<Checkbox />} />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel label="Tramos Mora" control={<Checkbox />} />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel label="% de Cartera" control={<Checkbox />} />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel label="Ticket de Crédito" control={<Checkbox />} />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel label="Campaña Normalización" control={<Checkbox />} />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel label="Zona Geografica" control={<Checkbox />} />
                  </Grid>
                </Grid>
              </div>
            </Grid>

            {/* Línea divisoria vertical */}
            <div style={{ borderLeft: '1px solid #ccc', height: '100%' }} />

            {/* Columna 2 */}
            <Grid item xs={12} md={5} sm={12}>
              <div>
                <Typography py={3} style={{ textAlign: 'center' }} variant="subtitle1" color={theme.palette.grey[700]}>
                  Seleccione una empresa
                </Typography>
                {/* Contenido del segundo elemento */}
                <Grid item style={labelStyle} pr={3}>
                  {/*  Ejemplo con lista de elementos, facil de ingresar datos */}
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Empresas</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={empresa}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, empresa, theme)}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* Fin ejemplo con lista de elementos */}
                </Grid>
                <Grid item>
                  <Typography style={{ textAlign: 'center' }} variant="subtitle1" pt={3} pl={3} color={theme.palette.grey[700]}>
                    Views Seleccionadas
                  </Typography>
                  <Grid
                    textAlign="right"
                    direction="row"
                    style={{
                      style: {
                        background: `${theme.palette.primary[200]} !important`
                      }
                    }}
                  >
                    {selectedValues.map((selectedValue, index) => (
                      <p key={index}>{selectedValue}</p>
                    ))}
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid>
              <Button>Asignar</Button>
              <Button>Borrar</Button>
            </Grid>
          </Grid>
          {/* FIN SIN USAR PAPER MULTISELECCION */}
          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          <Grid item xs={12} md={8}>
            <Grid py={2}>
              <Typography variant="subtitle1" color={theme.palette.grey[700]}>
                Asignaciones
              </Typography>
            </Grid>
            <Grid xs={12} md={8}>
              <TextField
                label="Ingrese aca sus Comentarios"
                multiline
                placeholder="Escribe aquí"
                maxRows={4}
                minRows={2}
                sx={{
                  width: '100%',
                  padding: '8px',
                  fontSize: '16px',
                  borderColor: `${theme.palette.primary[200]} !important`,
                  borderRadius: '4px'
                }}
              />
            </Grid>
          </Grid>
          <Button
            disableElevation
            variant="outlined"
            type="submit"
            sx={{
              cursor: 'pointer',
              m: 2,
              py: 0.5,
              px: 7,
              borderColor: `${theme.palette.primary.dark} !important`,
              background: `${theme.palette.primary.dark} !important`,
              color: `${theme.palette.grey[50]}!important`,
              fontWeight: 500,
              transition: 'background-color 0.3s, color 0.3s',
              '&:hover': {
                background: `${theme.palette.primary[800]} !important`,
                color: `${theme.palette.primary.light}!important`
              }
            }}
          >
            Agregar registro
          </Button>
        </form>
      </MainCard>
    </div>
  );
}

export default CargarDeudor;
