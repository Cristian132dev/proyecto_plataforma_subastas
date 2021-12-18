import React from "react";

function CompPujaSubastas() {
   return (
      <div>
         <form className="busqueda">
            <label htmlFor="search">ingrese codigo de subasta para buscar</label> <br />
            <input type="search" id="search" />
            <input type="submit" value="buscar" />
         </form>

         <div className="container">
            <table>
               <tr>
                  <td>pujador (id)</td>
                  <td>(dia - mes - año) (hora puja)</td>
                  <td>(precio)</td>
               </tr>
            </table>
         </div>
      </div>
   )
}

export default CompPujaSubastas;