import regresar from "../../resources/img/regresar.png"
import '../../resources/css/bootstrap.css';
import '../../resources/css/style_propio.css';
import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import CompHistorial from "./CompHistorialInt";
import DatosJSON from "../../../mocks/inicioSubasta.json"
import CabMiPerfInt from "../../components/CabMiPerfInt";

function Historial() {
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

      <div className="pest-historial">
         <div className="titulo-historial">
            <Link to="/perfil-interno">
               <img className="btn-regresar" src={regresar} alt="regresar" />
            </Link>
            <h1>Historial de Pujas</h1>
            {DatosJSON.map((DatosJSON) => {
               console.log(DatosJSON)
               return <CompHistorial key={DatosJSON.id} data={DatosJSON} />
            })}


         </div>

      </div>
      </div>
   )
}

export default Historial;