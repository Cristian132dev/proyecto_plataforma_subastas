import React from "react";
import ropa from "../../resources/img/ropa.jpg";
import { Link } from "react-router-dom";

function CompHistorial(props) {
   const { data } = props;

   return (
      <div>
         <ul className="container lista">
            <li>
               <img className="img-historial" src={ropa} alt="imagen de prenda" />
            </li>
            <li>
               <span className="txt-historial">
                  <p>
                     <b> {data.nombre} </b>  ${data.precio} <br />
                     termina el (dia) a partir de las (hora) <br />
                     <small>codigo de subasta #{data.id} </small>
                  </p>
               </span>
            </li>
            <li>
               <Link className="btn-historial" to="/subasta"> Ver Subasta</Link>
               <Link className="btn-cancelar" to="">Cancelar</Link>
            </li>
         </ul>
      </div>
   )
}

export default CompHistorial;