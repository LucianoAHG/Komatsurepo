// import PropTypes from 'prop-types';
import React from 'react';

// // material-ui icons
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

import {
  // Box,
  Button,
  Grid,
  Typography
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
// import { gridSpacing } from 'store/constant';
import * as yup from 'yup';

/***Importación validador ***/
import { useFormik } from 'formik';
import SubCard from 'ui-component/cards/SubCard';

// import { style } from '@mui/system';

// chart data
// import chartData from './chart-data/total-growth-bar-chart';

// ==============================|| DASHBOARD DEFAULT - FORM CARGA DEUDOR||============================== //
/**  estilos input**/

function CargarDeudor() {
  const theme = useTheme();

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

  return (
    <div>
      <MainCard title="Modulo de Cargas" secondary={<SecondaryAction title="Cargas" icon={<InsertChartIcon fontSize="small" />} />}>
        <form noValidate onSubmit={formik.handleSubmit}>
          {/* <Divider component="li" /> */}
          {/** INICIO DEL PRIMER COMPONENTE **/}
          <Grid pb={3}>
            <SubCard title={<Typography variant="subtitle1">Carga de datos</Typography>}>
              <Grid
                container
                border={'1px solid'}
                borderColor={theme.palette.grey[300]}
                padding={1}
                justifyContent={{ xs: 'center', md: 'space-between' }}
              >
                <Grid item xs={6.5} md={7}>
                  <Grid pt={0.7}>
                    <Typography variant="subtitle1" color={theme.palette.grey[700]}>
                      Suba su archivo con datos
                    </Typography>
                  </Grid>
                </Grid>
                {/* <Grid md={4}></Grid> */}
                <Grid item xs={6} md={3} justifyContent={{ xs: 'flex-end' }}>
                  {' '}
                  <label htmlFor="contained-button-file">
                    <Button startIcon={<CloudUploadIcon />} variant="contained" color="primary" component="span" style={{ minWidth: 150 }}>
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
            </SubCard>
          </Grid>
          {/** Fin Carga de Datos  */}
          {/* <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />  linea divisora*/}
          {/** Inicio Selección de Asignaciones */}
          {/* <Grid pb={5}>
            <SubCard title={<Typography variant="subtitle1">Variables y Asignaciones</Typography>}>
              <Grid container border="1px solid" borderColor={theme.palette.grey[300]} padding={3}>
                <Grid item xs={12} md={5} pt={3} pb={5}>
                  <Grid>
                    <Typography variant="subtitle1" py={3} color={theme.palette.grey[700]}>
                      Seleccione Variables de Asignaciones
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={5} md={6} pt={2.5}>
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
              </Grid> */}
          {/** Fin selecicon de asignaciones**/}
          {/***************Seleccione una Empresa ********************************** **/}
          {/* <Grid container mt={3} border={'1px solid'} borderColor={theme.palette.grey[300]} padding={3}>
                <Grid item xs={12} md={4.9} pt={5}>
                  <Grid>
                    <Typography variant="subtitle1" color={theme.palette.grey[700]}>
                      Seleccione una empresa
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} pb={3} pt={3}>
                  <Grid>
                    <FormControl sx={{ m: 1, width: '90%' }}>
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
                <Grid container>
                  <Grid item xs={12} md={6.5} py={5} textAlign={{ xs: 'left', md: 'right' }}>
                    <Button>Asignar</Button>
                    <Button>Borrar</Button>
                  </Grid>
                </Grid>
              </Grid> 
            </SubCard>
          </Grid>*/}

          {/**  Fin CheckBox **/}
          {/******************************* Inicio Asignaciónes ***************************************/}
          {/* <Divider sx={{ flexGrow: 1 }} orientation="horizontal" /> linea divisora */}
          {/* <Grid pb={5}>
            <SubCard title={<Typography variant="subtitle1">Asignaciones</Typography>}>
              <Grid container border={'1px solid'} borderColor={theme.palette.grey[300]} padding={3}>
                <Grid item xs={12} md={5} pb={{ xs: 3, md: 5 }}>
                  <Grid pt={5}>
                    {' '}
                    <Typography variant="subtitle1" color={theme.palette.grey[700]}>
                      escriba sus asignaciones
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} pb={3} pt={3}>
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
            </SubCard>
          </Grid> */}

          {/** */}

          {/* FIN SIN USAR PAPER MULTISELECCION */}
          {/* <Divider sx={{ flexGrow: 1 }} orientation="horizontal" /> */}

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
