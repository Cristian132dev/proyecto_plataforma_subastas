import React from "react";
import CabMiPerfInt from "../../components/CabMiPerfInt";
import PiePagina from "../../components/PiePagina";
import CompPujaSubastas from "./CompPujaSubastas";
import regresar from "../../resources/img/regresar.png";
import { Link } from "react-router-dom"

// const DatosJSON = null
function PujaSubastas() {
   return (
      <div>
         <CabMiPerfInt />

         <div className="pest-historial">
            <div className="titulo-historial en-linea">
               <Link to="/perfil-interno">
                  <img className="btn-regresar" src={regresar} alt="regresar" />
               </Link>
               <h1>Pujas Por Subasta</h1>
            </div>
            {/* <ul className="container lista">
               {DatosJSON.map((DatosJSON) => {
                  console.log(DatosJSON)
                  return <CompPujaSubastas key={DatosJSON.id} data={DatosJSON} />
               })}
            </ul> */}
         </div>
            <CompPujaSubastas />


         <PiePagina />
      </div>
   )

}
export default PujaSubastas;