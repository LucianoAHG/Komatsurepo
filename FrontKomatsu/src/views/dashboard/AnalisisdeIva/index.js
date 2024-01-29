// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';  // Agrega la importación del archivo de estilos
import Tabla1 from './Tabla1';
import Tabla21 from './Tabla21';
import Tabla2 from './Tabla2';
import Tabla3 from './Tabla3';

import Tabla6 from './Tabla6';
import Tabla7 from './Tabla7';
import Tabla8 from './Tabla8';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  { useState } from 'react';



const TitleWithBorder = ({ children }) => (
  <div style={{ marginBottom: '10px', borderBottom: '2px solid blue', paddingBottom: '5px', marginTop: '20px' }}>
    {children}
  </div>
);

const App = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    // Generar números aleatorios para llenar las tablas
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const randomNumber3 = Math.floor(Math.random() * 100) + 1;
  
    console.log(date);
    // Aquí puedes actualizar las tablas según la lógica específica
    // Supongamos que las funciones para actualizar las tablas son así:
    updateTable1(randomNumber1);
    updateTable2(randomNumber2);
    updateTable3(randomNumber3);
  
    // Puedes ajustar estas funciones según la implementación real de tus tablas
  };
  
  // Ejemplo de funciones de actualización de tablas (puedes ajustar según tus necesidades)
  const updateTable1 = (data) => {
    // Lógica para actualizar Tabla1 con el nuevo número
    console.log("Actualizando Tabla1 con:", data);
  };
  
  const updateTable2 = (data) => {
    // Lógica para actualizar Tabla2 con el nuevo número
    console.log("Actualizando Tabla2 con:", data);
  };
  
  const updateTable3 = (data) => {
    // Lógica para actualizar Tabla3 con el nuevo número
    console.log("Actualizando Tabla3 con:", data);
  };
  


  return (
    <Container fluid className="app-container">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          handleDateChange(date);
        }}
        dateFormat="dd/MM/yyyy"
      />

      <div className="tables-container">
        {/* Bloque para ACTIVOS y PASIVOS */}
        <div className="table">
          <TitleWithBorder>
            <h5>ACTIVOS</h5>
          </TitleWithBorder>
          <Tabla1 />
        </div>
        <div className="table">
          <TitleWithBorder>
            <h5>PASIVOS</h5>
          </TitleWithBorder>
          <Tabla21 />
        </div>
      </div>

      {/* Bloque para Estado de Resultados y Análisis de Indicadores */}
      <div className="tables-container">
        <div className="table">
          <TitleWithBorder>
            <h5>Estado de Resultados</h5>
          </TitleWithBorder>
          {/* Utiliza el componente adecuado para el Estado de Resultados, por ejemplo, Tabla12 */}
          <Tabla2 />
        </div>
        <div className="table">
          <TitleWithBorder>
            <h5>Análisis de Indicadores</h5>
          </TitleWithBorder>
          {/* Utiliza el componente adecuado para el Análisis de Indicadores, por ejemplo, Tabla13 */}
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
            <h5>Ultima Actualizacion Usuario </h5>
          </TitleWithBorder>
          <Tabla8 />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
