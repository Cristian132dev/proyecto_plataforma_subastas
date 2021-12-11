import '../../resources/css/bootstrap.css';
import '../../resources/css/style_propio.css';
import axios from "axios";
import { useState } from "react";
import CompFinalizadas from "../pujas_finalizadas/CompFinalizadas";
import DatosJSON from "../../../mocks/inicioSubasta.json"
import CabMiPerfExt from "../../components/CabMiPerfExt";
import PiePagina from "../../components/PiePagina"
import { Link } from "react-router-dom"
import regresar from "../../resources/img/regresar.png"


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

         <div className="titulo-historial">
            <div className="en-linea">
               <Link to="/perfil-interno">
                  <img className="btn-regresar" src={regresar} alt="regresar" />
               </Link>
               <h1>Subastas Finalizadas dada la Fecha</h1>
            </div>
         </div>

         <div className="pagina-entera-finalizadas">
            <form>
               <div className="filtro">
                  <label htmlFor="fechaInicial">Fecha Inicial</label> <br />
                  <input type="date" id="fechaInicial" /> <br />

                  <label htmlFor="fechaFinal">Fecha final</label> <br />
                  <input type="date" id="fechaFinal" /> <br />

                  <input type="submit" value="Filtrar" /> <br />
               </div>
            </form>
            </div>

            {DatosJSON.map((DatosJSON) => {
               return <CompFinalizadas key={DatosJSON.id} data={DatosJSON} />
            })}


         <PiePagina />
      </div >
   )
}


export default Finalizadas;