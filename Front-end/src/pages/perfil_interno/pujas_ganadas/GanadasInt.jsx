import React from "react";
import { Link } from "react-router-dom";
import '../../resources/css/bootstrap.css';
import '../../resources/css/style_propio.css';
import { useState } from "react"
import axios from "axios";
import CompGanadasInt from "./CompGanadasInt";
import DatosJSON from "../../../mocks/inicioSubasta.json"
import CabMiPerfInt from "../../components/CabMiPerfInt";
import regresar from "../../resources/img/regresar.png"

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
    <div>
      {/* cabecera */}
      < CabMiPerfInt />

      {/* contenido */}
      <div className="pest-historial">

        <div className="titulo-historial">
          <div className="en-linea">
            <Link to="/perfil-interno">
              <img className="btn-regresar" src={regresar} alt="regresar" />
            </Link>
            <h1>Pujas Ganadas</h1>
          </div>
          {DatosJSON.map((DatosJSON) => {
            console.log(DatosJSON)
            return <CompGanadasInt key={DatosJSON.id} data={DatosJSON} />
          })}

        </div>
      </div>
    </div>
  )
}


export default Ganadas;