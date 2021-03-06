import regresar from "../../resources/img/regresar.png"
import '../../resources/css/bootstrap.css';
import '../../resources/css/style_propio.css';
import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import CompDisponibles from "./CompDisponibles";
import DatosJSON from "../../../mocks/inicioSubasta.json"
import CabMiPerfInt from "../../components/CabMiPerfInt";
import PiePagina from "../../components/PiePagina"

function Disponibles() {
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
         <CabMiPerfInt />

         <div className="pest-historial">
            <div className="titulo-historial">
               <div className="en-linea">
                  <Link to="/perfil-interno">
                     <img className="btn-regresar" src={regresar} alt="regresar" />
                  </Link>
                  <h1>Subastas Disponibles</h1>
               </div>
               {DatosJSON.map((DatosJSON) => {
                  return <CompDisponibles key={DatosJSON.id} data={DatosJSON} />
               })}
            </div>
         </div>

         <PiePagina />
      </div>
   )
}


export default Disponibles;