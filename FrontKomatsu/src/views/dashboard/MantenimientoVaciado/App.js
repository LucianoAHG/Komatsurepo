import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Formulario from './views/dashboard/MantenimientoDistribuidores/Formulario'; // Ajusta la ruta según tu estructura de carpetas

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          {/* Definir tus rutas aquí */}
          <Route path="/formulario" component={Formulario} />
          {/* Añadir más rutas según sea necesario */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
