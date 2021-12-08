import React from "react";
import Cabecera from "../components/Cabecera";
import PiePagina from "../components/PiePagina";
import "../resources/css/style_propio.css"
import "../resources/css/bootstrap.css"

import PrendaInfo from "./PrendaInfo";
import PrendaTabla from "./PrendaTabla";

function Prenda() {
   return (
      <div>
         <Cabecera />

         <div className="container">

         <PrendaInfo />

         <PrendaTabla />

         </div>

         <PiePagina />
      </div>
   )
}

export default Prenda;