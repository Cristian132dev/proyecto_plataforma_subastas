import React from 'react';
import ReactDOM from 'react-dom';

// importacion de rutas
import Inicio from './pages/inicio/Inicio';
import Login from './pages/login/Login';
import Registro from './pages/registro/Registro';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// rutas
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Registro" element={<Registro/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);