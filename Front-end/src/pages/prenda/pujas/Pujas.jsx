import React from "react";
import Cabecera from "../../components/Cabecera";
import CompPujas from "./CompPujas";
import {Link} from "react-router-dom";
import regresar from "../../resources/img/regresar.png"

function Pujas() {
   return (
      <div>
         <Cabecera />
         <div className="pest-historial">
            <div className="titulo-historial">
               <div className="en-linea">
                  <Link to="/prenda">
                     <img className="btn-regresar" src={regresar} alt="regresar" />
                  </Link>
                  <h1>Todas las Pujas</h1>
               </div>

               <CompPujas />
            </div>
         </div>
      </div>
   )
}

export default Pujas;