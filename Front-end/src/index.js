import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importacion de rutas
import Inicio from "./pages/inicio/Inicio";
import Login from "./pages/login/Login";
import Registro from "./pages/registro/Registro";

import Prenda from "./pages/prenda/Prenda";
import Pujas from "./pages/prenda/pujas/Pujas";

import Externo from "./pages/perfil_externo/Externo";
import HistorialExt from "./pages/perfil_externo/pujas_historial/HistorialExt";
import GanadasExt from "./pages/perfil_externo/pujas_ganadas/GanadasExt";
import PerdidasExt from "./pages/perfil_externo/pujas_perdidas/PerdidasExt";

import Interno from "./pages/perfil_interno/Interno";
import HistorialInt from "./pages/perfil_interno/pujas_historial/HistorialInt"
import GanadasInt from "./pages/perfil_interno/pujas_ganadas/GanadasInt"
import PerdidasInt from "./pages/perfil_interno/pujas_perdidas/PerdidasInt"
import Crear from "./pages/perfil_interno/crear_pujas/Crear"
import Editar from "./pages/perfil_interno/editar_pujas/Editar"

// rutas
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route path="/prenda" element={<Prenda />} />
        <Route path="/prenda/pujas" element={<Pujas />} />

        <Route path="/perfil-externo" element={<Externo />} />
        <Route path="/perfil-externo/historial" element={<HistorialExt />} />
        <Route path="/perfil-externo/ganadas" element={<GanadasExt />} />
        <Route path="/perfil-externo/perdidas" element={<PerdidasExt />} />

        <Route path="/perfil-interno" element={<Interno />} />
        <Route path="/perfil-interno/historial" element={<HistorialInt />} />
        <Route path="/perfil-interno/ganadas" element={<GanadasInt />} />
        <Route path="/perfil-interno/perdidas" element={<PerdidasInt />} />
        <Route path="/perfil-interno/crear" element={<Crear />} />
        <Route path="/perfil-interno/editar" element={<Editar />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
