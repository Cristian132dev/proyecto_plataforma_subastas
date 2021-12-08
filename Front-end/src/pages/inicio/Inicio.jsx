import "../resources/css/bootstrap.css";
import "../resources/css/style_propio.css";
import DatosJSON from "../../mocks/inicioSubasta.json";
import DataInicio from "./DataInicio";
import axios from "axios";
import PiePagina from "../components/PiePagina";
import Cabecera from "../components/Cabecera";
import { useState } from "react";

function Inicio() {
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
         <Cabecera />

         {/* contenedor donde se muestran las prendas */}
         {DatosJSON.map((DatosJSON) => {
            console.log(DatosJSON)
            return <DataInicio key={DatosJSON.id} data={DatosJSON} />
         })}

         {/* pie de pagina */}
         <PiePagina />
      </div>
   )


}

export default Inicio;
