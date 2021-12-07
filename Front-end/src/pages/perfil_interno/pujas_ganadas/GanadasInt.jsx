import React from "react";
import { Link } from "react-router-dom";
import '../../resources/css/bootstrap.css';
import '../../resources/css/style_propio.css';
import regresar from "../../resources/img/regresar.png"
import { useState } from "react"
import axios from "axios";
import HistGanadas from "./CompGanadasInt";
import DatosJSON from "../../../mocks/inicioSubasta.json"


function Ganadas() {
  const [server, setServer] = useState([])

  axios.get("http://localhost:3001/")
    .then(function (response) {
      console.log("llego La Informacion");
      setServer(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })

  return (
    <div className="pest-historial">
      <div className="titulo-historial">
        <Link to="/perfil-interno">
          <img className="btn-regresar" src={regresar} alt="regresar" />
        </Link>
        <h1>Pujas Ganadas</h1>

        {DatosJSON.map((DatosJSON) => {
          console.log(DatosJSON)
          return <HistGanadas key={DatosJSON.id} data={DatosJSON} />
        })}

      </div>
    </div>
  )
}


export default Ganadas;