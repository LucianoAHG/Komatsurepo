// src/App.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './TuArchivoDeEstilos.css'; // Asegúrate de importar tu archivo de estilos

import Tabla1 from './Tabla1';
import Tabla21 from './Tabla21';
import Tabla2 from './Tabla2';
import Tabla3 from './Tabla3';
import Tabla6 from './Tabla6';
import Tabla7 from './Tabla7';
import Tabla8 from './Tabla8';
import Tabla9 from './Tabla9';
import Tabla10 from './Tabla10';
import Tabla11 from './Tabla11';
import Tabla12 from './Tabla12';
import Tabla13 from './Tabla13';
import Tabla14 from './Tabla14';

const TitleWithBorder = ({ children }) => (
  <div style={{ marginBottom: '10px', borderBottom: '2px solid #2196F3', paddingBottom: '5px', marginTop: '20px' }}>
    {children}
  </div>
);

const TableContainer = ({ children }) => (
  <div className="table" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', marginBottom: '20px' }}>
    {children}
  </div>
);



const App = () => {
  return (
    <div>
      <div className="full-screen-container">
        <div className="tables-container">
          <div className="table">
            <TitleWithBorder>
              <h5>Vaciado Financiero</h5>
              <p> Activos</p>
            </TitleWithBorder>
            <Tabla1 />
          </div>
          <div className="table">
            <TitleWithBorder>
              <h5> Balance Genereal </h5>
              <p>Pasivos</p>
            </TitleWithBorder>
            <Tabla21 />
          </div>
        </div>

        <div className="tables-container">
          <div className="table">
            <TitleWithBorder>
              <h5>Estado de Resultados</h5>
            </TitleWithBorder>
            <Tabla2 />
          </div>
          <div className="table">
            <TitleWithBorder>
              <h5>Análisis de Indicadores</h5>
            </TitleWithBorder>
            <Tabla3 />
          </div>
        </div>

        <Row>
          <Col xs={12} md={12}>
            <TitleWithBorder>
              <h5>Otros Ajustes Cashflow</h5>
            </TitleWithBorder>
            <Tabla6 />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <TitleWithBorder>
              <h5>Comentario Vaciado</h5>
            </TitleWithBorder>
            <Tabla7 />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <TitleWithBorder>
              <h5>Ultima Actualizacion Usuario</h5>
            </TitleWithBorder>
            <Tabla8 />
          </Col>
        </Row>

        <div className="tables-container" style={{ width: '210%', margin: '0 auto' }}>
          <TableContainer>
            <TitleWithBorder>
              <h5>Analisis de IVA</h5>
            </TitleWithBorder>
            <Tabla9 />
          </TableContainer>
        </div>

        <div className="tables-container" style={{ width: '210%', margin: '0 auto' }}>
          <TableContainer>
            <Tabla10 />
          </TableContainer>
        </div>

        <div className="tables-container" style={{ width: '100%', margin: '0 auto' }}>
          <Col xs={12} md={15}>
            <TitleWithBorder>
              <h5> Relacion IVA Debito-IVA</h5>
            </TitleWithBorder>
            <Tabla11 />
          </Col>
        </div>

        <Row>
          <Col xs={12}>
            <TitleWithBorder>
              <h5>Evolución de Compras y Ventas</h5>
            </TitleWithBorder>
            <Tabla12 />
          </Col>
        </Row>

        <div className="contenedor-con-fondo">
          <Row className="mb-3 mt-3">
            <Col xs={12} md={14} className="mb-3 mt-3 ml-3 mr-3">
              <TitleWithBorder>
                <h5>Vaciado DAI</h5>
              </TitleWithBorder>
              <Tabla13 />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={14}>
              <TitleWithBorder>
                <h5>Calificacion de Riesgo</h5>
              </TitleWithBorder>
              <Tabla14 />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default App;
