import "../../resources/css/bootstrap.css";
import "../../resources/css/style_propio.css";
import DatosJSON from "../../../mocks/inicioSubasta.json";
import CompPerdidasExt from "./CompPerdidasExt";
import axios from "axios";
import { Link } from "react-router-dom";
import regresar from "../../resources/img/regresar.png";
import { useState } from "react";
import CabMiPerfExt from "../../components/CabMiPerfExt"

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
      <div>
         {/* cabecera */}
         <CabMiPerfExt />

         <div className="pest-historial">
            <div className="titulo-historial">
               <Link to="/perfil-externo">
                  <img className="btn-regresar" src={regresar} alt="regresar" />
               </Link>
               <h1>Pujas Perdidas</h1>
            </div>
            <ul className="container lista">
               {DatosJSON.map((DatosJSON) => {
                  console.log(DatosJSON)
                  return <CompPerdidasExt key={DatosJSON.id} data={DatosJSON} />
               })}
            </ul>
         </div>
      </div>
   )
}

export default Perdidas;