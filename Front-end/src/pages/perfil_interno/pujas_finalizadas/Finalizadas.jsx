import regresar from "../../resources/img/regresar.png"
import '../../resources/css/bootstrap.css';
import '../../resources/css/style_propio.css';
import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import CompFinalizadas from "../pujas_disponibles/ComPujaSubastas";
import DatosJSON from "../../../mocks/inicioSubasta.json"
import CabMiPerfExt from "../../components/CabMiPerfExt";
import PiePagina from "../../components/PiePagina"


function Finalizadas() {
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
               <div className="en-linea">
                  <Link to="/perfil-externo">
                     <img className="btn-regresar" src={regresar} alt="regresar" />
                  </Link>
               </div>
               <h1>Subastas Finalizadas dada la Fecha</h1>
            </div>

            <form>
               <div className="filtro">
                  <label htmlFor="fechaInicial">Fecha Inicial</label> <br />
                  <input type="text" id="fechaInicial" /> <br />

                  <label htmlFor="fechaFinal">Fecha final</label> <br />
                  <input type="text" id="fechaFinal" /> <br />

                  <input type="submit" value="Filtrar" /> <br />
               </div>
            </form>

            {DatosJSON.map((DatosJSON) => {
               return <CompFinalizadas key={DatosJSON.id} data={DatosJSON} />
            })}
         </div>


         <PiePagina />
      </div >
   )
}


export default Finalizadas;