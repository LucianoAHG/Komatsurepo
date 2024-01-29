// import SectionInput from './seccionInput';
// import SectionPorcent from './seccionPorcentajes';
import Tabla from './tabla';

//ui-components and bootstrap components

import MainCard from 'ui-component/cards/MainCard';
// import SubCard from 'ui-component/cards/SubCard';
//import bootstrap-ract

// import { Container } from 'react-bootstrap';

// ==============================|| SAMPLE PAGE ||============================== //

// ========= Fin Buttons ============//
function MotorDeSeguimiento() {
  return (
    <MainCard title="Seguimiento de Script">
      <>
        <div id="wrapper">
          <div className="content animate-panel">
            <div className="row">
              <div className="col-lg-12">
                <div className="hpanel hblue">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-lg-12" style={{ display: 'default' }}>
                        {/******** Section Input **/}
                        {/* <Container style={{ marginBottom: '20px' }}>
                          <SectionInput />
                        </Container> */}
                        {/** Fin Section Input **/}
                      </div>

                      {/** Section Porcentajes **/}
                      <div className="col-lg-12">
                        {/* <Container
                          style={{
                            marginTop: '10px',
                            marginBottom: '10px'
                          }}
                        >
                          <SectionPorcent />
                        </Container> */}
                      </div>
                      {/** Fin Section Porcentajes **/}

                      {/**=========Inicio Seccion Tabla ======= **/}
                      <Tabla />
                      {/** ====== Fin Seccion Tabla =========== **/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MainCard>
  );
}

export default MotorDeSeguimiento;
