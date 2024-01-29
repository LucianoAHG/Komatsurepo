import React from 'react';
import './App.css';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';

function App() {
  return (
    <div className="App">
      <h1>Mi Aplicación</h1>
      <Profile />
      <hr />
      <ChangePassword />
    </div>
  );
}

export default App;
