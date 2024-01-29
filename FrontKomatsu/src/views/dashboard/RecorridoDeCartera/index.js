import Tabla from './seccionTabla';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

// ========= Fin Buttons ============//
function MotorDeSeguimiento() {
  return (
    <MainCard title="Recorrido de Cobranza">
      <>
        <div id="wrapper">
          <div className="content animate-panel">
            <div className="row">
              <div className="col-lg-12">
                <div className="hpanel hblue">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-lg-12" style={{ display: 'default' }}></div>

                      {/** Section Porcentajes **/}
                      <div className="col-lg-12"></div>
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
