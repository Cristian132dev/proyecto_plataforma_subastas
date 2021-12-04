import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// importacion de rutas
import Inicio from './pages/inicio/Inicio';
import Login from './pages/login/Login';
import Registro from './pages/registro/Registro';
import Historial from './pages/pujas_historial/Historial';
import Ganadas from './pages/pujas_ganadas/Ganadas';
import Perfil_externo from './pages/perfil_externo/Perfil_externo';
import Perfil_interno from './pages/perfil_interno/Perfil_interno';
import Perdidas from './pages/pujas_perdidas/Perdidas';

// rutas
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/perfil-externo" element={<Perfil_externo/>} />
        <Route path="/perfil-externo/historial" element={<Historial/>} />
        <Route path="/perfil-externo/ganadas" element={<Ganadas/>} />
        <Route path="/perfil-externo/perdidas" element={<Perdidas/>} />
        <Route path="/perfil-interno" element={<Perfil_interno/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
