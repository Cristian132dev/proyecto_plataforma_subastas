import React from "react";
import ropa from "../resources/img/ropa.jpg"
import "../resources/css/style_propio.css"
import "../resources/css/bootstrap.css"
import { Link } from "react-router-dom";

const DataInicio = (props) => {
   const { data } = props;
   return (
      <div className="container">

         <section className="producto">
            <div className="text">
               <Link to="/prenda">
                  <img src={ropa} alt="imagen del producto" className="imagen" />
                  <p><b>{data.nombre}</b></p>
               </Link>
               <p>puja actual</p>
               <p>{data.precio}</p>
               <p>termina en (dia) a partir de las (hora)</p>
            </div>
         </section >
      </div >


   )
}

export default DataInicio;