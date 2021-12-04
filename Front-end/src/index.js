import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importacion de rutas
import Inicio from "./pages/inicio/Inicio";
import Login from "./pages/login/Login";
import Registro from "./pages/registro/Registro";
import Historial from "./pages/pujas_historial/Historial";
import Ganadas from "./pages/pujas_ganadas/Ganadas";
import Externo from "./pages/perfil_externo/Externo";
import Interno from "./pages/perfil_interno/Interno";
import Perdidas from "./pages/pujas_perdidas/Perdidas";

// rutas
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil-externo" element={<Externo />} />
        <Route path="/perfil-externo/historial" element={<Historial />} />
        <Route path="/perfil-externo/ganadas" element={<Ganadas />} />
        <Route path="/perfil-externo/perdidas" element={<Perdidas />} />
        <Route path="/perfil-interno" element={<Interno />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
