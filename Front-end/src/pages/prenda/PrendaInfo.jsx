import React from "react";
import ropa from "../resources/img/ropa.jpg"

function PrendaInfo() {
   return (
      <div>
         <section className="datos-prenda">
            <h3><b>Nombre de Prenda</b></h3>
            <img src={ropa} alt="Imagen De Prenda" />
            <p><small>Termina (dia) a partir de las (hora) </small></p>
            <label htmlFor="descripcion">Descripcion</label> <br />
            <textarea name="" id="descripcion" cols="30" rows="10" disabled></textarea>
            <p><small>numero de subasta #()</small></p>
         </section>
      </div>
   )
}

export default PrendaInfo;