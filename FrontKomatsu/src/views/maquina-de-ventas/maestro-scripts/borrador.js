import React from 'react';
// // material-ui
// import { Typography } from '@mui/material';
//componentes
//ICONS
import SaveIcon from '@mui/icons-material/Save';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
//
import TextField from '@mui/material/TextField/';
// project imports
import SectionInputs from './sectionInputs';
import SectionCcCco from './sectionCcCco';
import Tabla from './table';

//components
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { Grid } from '@mui/material';
//componentes
import Buttons from '../../../ui-component/Buttons/Buttons';
//Theme
import { useTheme } from '@mui/material/styles';
import { Container } from 'react-bootstrap';
//Estilos personalizado de componentes Mui
// import { styled } from '@mui/material';

// import { useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

function SamplePage() {
  // //Definir MenuProps
  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250
  //     }
  //   }
  // };
  // function getStyles(name, personName, theme) {
  //   return {
  //     fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  //   };
  // }
  // //Fin definir MenuProps

  // //Instancia de estados
  // const [optionfunnel, setOptionFunnel] = useState(['']);
  // const [optioncanal, setOptionCanal] = useState(['']);
  // //Fin instancia de estados

  // //datos de los selectores
  // const optionFunnel = ['Cotización', 'Correo', 'Compra', 'Up Sell', 'Reclamo', 'hi'];
  // const optionCanal = ['Correo', 'Sms', 'Whatsapp'];
  // // Fin datos selectores

  // //Funcion de manejadores option funnel
  // const handleChangeOptionFunnel = (event) => {
  //   const {
  //     target: { value }
  //   } = event;
  //   setOptionFunnel(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value
  //   );
  //   setSelectedValues(typeof value === 'string' ? value.split(',') : value);
  // };
  // //Fin funcion manejador de option funnel

  // //Inifio funcion manejador Canal
  // const HandlerChangeOptionCanal = (event) => {
  //   const {
  //     target: { value }
  //   } = event;
  //   setOptionCanal(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value
  //   );
  //   setSelectedValues(typeof value === 'string' ? value.split(',') : value);
  // };
  /**Funcion para cambiar el estilo de TextField */
  // const StyledLinearProgress = styled(LinearProgress)(({ progressColor }) => ({
  //   height: 25,
  //   borderRadius: 0,
  //   '& .MuiLinearProgress-bar': {
  //     borderRadius: 0,
  //     backgroundColor: progressColor || theme.palette.error.main
  //   },
  //   '&.MuiLinearProgress-determinate': {
  //     backgroundColor: theme.palette.grey[200]
  //   }
  // }));
  /** Fin funcion TextField */

  //Fin manejador canal
  const theme = useTheme();
  const optionStyle = {
    fontSize: '15px',
    color: 'grey'
  };

  return (
    <MainCard title="Administrador Script" colordivider="blue">
      <div className="fixed-navbar fixed-sidebar">
        <div id="wrapper">
          <div className="content animate-panel">
            <div className="row">
              <div className="col-lg-12">
                <div className="hpanel hblue">
                  <div className="panel-body">
                    <Grid pb={1}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="pull-right" style={{ textAlign: 'right' }}>
                            <Container>
                              <Buttons
                                label={'guardar escript'}
                                onclick={() => {
                                  console.log('boton press');
                                }}
                                tipo={'button'}
                                variante={'small'}
                                icon={<SaveIcon />}
                              />
                            </Container>
                          </div>
                        </div>
                      </div>
                      <Container style={{ marginBottom: 5 }}>
                        <SectionInputs />
                      </Container>
                      <Container>
                        <SectionCcCco />
                      </Container>
                    </Grid>
                    <Container>
                      <div className="row">
                        <div className="col-md-3 col-xs-12">
                          <div className="form-group">
                            <span className="control-span" style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>
                              Fecha Inicio Vigencia:
                            </span>
                            <div className="input-group date">
                              <input type="text" className="form-control datetimepicker" id="fechaInicioVig" />
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-calendar"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                          <div className="form-group">
                            <span className="control-span" style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>
                              Fecha Fin Vigencia:
                            </span>
                            <div className="input-group date">
                              <input type="text" className="form-control datetimepicker" id="fechaFinVig" />
                              <span className="input-group-addon">
                                <i className="glyphicon glyphicon-calendar"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                          <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Campaña</span>
                          <select className="form-control" id="cmboxCampania" defaultValue={1}>
                            <option value="1" selected="">
                              ¿Si?
                            </option>
                            <option value="0">¿No?</option>
                          </select>
                        </div>
                        <div className="col-md-3 col-xs-12">
                          <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Estado</span>
                          <select className="form-control" id="cmboxEstado" defaultValue={1}>
                            <option style={optionStyle} value="1">
                              Cargado
                            </option>
                            <option value="2">Visado</option>
                            <option value="2">Producción con reparos</option>
                            <option value="2">Sin reparos</option>
                          </select>
                        </div>

                        <Container style={{ paddingTop: '30px' }}>
                          <SubCard title="Archivos Adjuntos">
                            <div className="col-md-12 col-lg-12" id="archivoAdjunto">
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-12 col-lg-12" style={{ marginBottom: 8 }}>
                                    <div style={{ border: `1px solid ${theme.palette.grey[200]}`, padding: 4 }}>
                                      <input type="file" name="archivosubido" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-12 col-lg-12">
                                    <div className="table-responsive">
                                      <table id="" className="table table-bordered dataTable no-footer">
                                        <thead>
                                          <tr>
                                            <th>Nombre</th>
                                            <th>Creada</th>
                                            <th>Acciones</th>
                                          </tr>
                                        </thead>
                                        <tbody></tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SubCard>
                        </Container>
                        <Container style={{ paddingBottom: '20px', paddingTop: '20px' }}>
                          <SubCard title="Agregar Variables">
                            <div className="col-md-12 col-lg-12">
                              <div className="hpanel hblue">
                                <div className="panel-body">
                                  <div className="row">
                                    <div className="col-md-4">
                                      <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Tabla</span>
                                      <select className="form-control form1" id="tabla" defaultValue={1}>
                                        {/*onChange="listarCampos()"*/}
                                      </select>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="form-group">
                                        <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Variable</span>
                                        <select className="form-control form1" id="variable" defaultValue={1}>
                                          {/*onChange="generateShortcode()"*/}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="form-group">
                                        <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Shortcode</span>
                                        <div className="input-group">
                                          <input className="form-control" type="text" id="shortcode" /*value={''}*/ disabled={''} />
                                          <Buttons icon={<ContentCopyIcon />} label={'Copiar Shortcut'} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SubCard>
                        </Container>
                        <Container style={{ marginBottom: '10px' }}>
                          <div className="col-md-12">
                            <TextField
                              label="Cuerpo"
                              multiline
                              placeholder="Escribe aquí"
                              maxRows={10}
                              minRows={4}
                              sx={{
                                width: '100%',
                                padding: '1px',
                                fontSize: '16px',
                                borderColor: `${theme.palette.success[800]} !important`
                              }}
                            />
                          </div>
                        </Container>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container style={{ marginTop: '10px' }}>
          <SubCard title="Repositorio Script">
            <Tabla />
          </SubCard>
        </Container>
      </div>

      {/* <!-- App --> */}
      <script src="js/jquery-2.1.3.min.js"></script>
      <script src="vendor/bootstrap-3.3.6/js/bootstrap.min.js"></script>
      <script src="vendor/slimScroll/jquery.slimscroll.min.js"></script>
      <script src="vendor/metisMenu/metisMenu.min.js"></script>
      <script src="vendor/iCheck/icheck.min.js"></script>
      <script src="js/init.js?v=<%= D.VERSION%>"></script>
      {/* <!-- /App --> */}

      <script src="vendor/jquery_ui/jquery-ui.min.js"></script>
      <script src="vendor/datetimepicker/jquery.datetimepicker.full.min.js"></script>
      <script src="vendor/sweetalert/sweetalert-dev.js"></script>
      <script src="vendor/datatables.net-bs/js/jquery.dataTables.min.js"></script>
      <script src="vendor/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
      <script src="vendor/multiselect/js/bootstrap-multiselect.js"></script>
      <script src="js/jquery.validate.min.js"></script>
      <script src="js/messages_es.min.js"></script>
      <script src="js/homer.js"></script>
      <script src="js/loading.js"></script>
      <script src="js/default.js"></script>
      <script src="js/DataTable/buttons.html5.min.js" type="text/javascript"></script>
      <script src="js/DataTable/buttons.print.min.js" type="text/javascript"></script>
      <script src="js/DataTable/dataTables.buttons.min.js" type="text/javascript"></script>
      <script src="js/DataTable/buttons.flash.min.js" type="text/javascript"></script>
      <script src="plugins/sceditor-2.1.3/minified/sceditor.min.js"></script>
      <script src="plugins/sceditor-2.1.3/minified/formats/bbcode.js"></script>
      <script src="js/mod_administrador_script.js?v=<%= D.VERSION%>" type="text/javascript"></script>
    </MainCard>
  );
}

export default SamplePage;
