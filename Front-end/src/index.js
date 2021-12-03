import React from 'react';
import ReactDOM from 'react-dom';

// importacion de rutas
import Inicio from './pages/inicio/Inicio';
import Login from './pages/login/Login';
import Registro from './pages/registro/Registro';
import Historial from './pages/historial_pujas/Historial';
import Perfil_externo from './pages/perfil_externo/Perfil_externo';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// rutas
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/perfil_externo" element={<Perfil_externo/>} />
        <Route path="/perfil_externo/historial" element={<Historial/>} />+
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
