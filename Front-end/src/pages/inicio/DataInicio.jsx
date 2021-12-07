import React from "react";
import ropa from "../resources/img/ropa.jpg"
import "../resources/css/style_propio.css"
import "../resources/css/bootstrap.css"

const DataInicio = (props) => {
   const { data } = props;
   return (
      <div className="container">

         <section className="producto">
            <img src={ropa} alt="imagen del producto" className="imagen" />
            <div className="text">
               <p><b>{data.nombre}</b></p>
               <p>puja actual</p>
               <p>{data.precio}</p>
               <p>termina en (dia) a partir de las (hora)</p>
            </div>
         </section>

      </div>
   )
}

export default DataInicio;