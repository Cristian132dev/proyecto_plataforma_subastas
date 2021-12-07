import "../../resources/css/bootstrap.css";
import "../../resources/css/style_propio.css";
import DatosJSON from "../../../mocks/inicioSubasta.json";
import CompPerdidas from "./CompPerdidasInt";
import axios from "axios";
import { Link } from "react-router-dom";
import regresar from "../../resources/img/regresar.png";
import { useState } from "react";

function Perdidas() {
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
            <h1>Pujas Perdidas</h1>
         </div>
         <ul className="container lista">
            {DatosJSON.map((DatosJSON) => {
               console.log(DatosJSON)
               return <CompPerdidas key={DatosJSON.id} data={DatosJSON} />
            })}
         </ul>
      </div>
   )
}

export default Perdidas;