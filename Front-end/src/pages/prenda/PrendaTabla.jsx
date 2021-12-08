import React from "react";
import { Link } from "react-router-dom"

function PrendaTabla() {
   return (
      <div>

         <section className="tabla-pujas">
            <table border="1">
               <tbody>
                  <tr>
                     <p><b>Cierra en (horas - min - seg )</b></p>
                     <p>todavia no has pujado por este lote</p>
                  </tr>
                  <tr>
                     <td>
                        <p><b>Puja Actual $13300</b></p>
                        <input type="number" name="" id="" />
                        <input type="submit" value="Pujar" />
                     </td>
                  </tr>
                  <tr className="valores-puja">
                     <td className="valores-puja">
                        <div>
                           <p><b>pujador 13</b></p>
                        </div>
                        <div>
                           <p>(dia - mes - año) (hora - min -seg)</p>
                        </div>
                        <div>
                           <p>(precio)</p>
                        </div>
                     </td>
                     <tr>
                        <td>
                           <Link to="/prenda/pujas">
                              Ver Todas Las Pujas
                           </Link>
                        </td>
                     </tr>
                  </tr>
               </tbody>
            </table>
         </section>
      </div>
   )
}


export default PrendaTabla;