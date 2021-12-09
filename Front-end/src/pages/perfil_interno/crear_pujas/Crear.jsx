import React from "react";
import CabMiPerfInt from "../../components/CabMiPerfExt";
import { Link } from "react-router-dom";
import regresar from "../../resources/img/regresar.png"
import PiePagina from "../../components/PiePagina";
import ropa from "../../resources/img/ropa.jpg"

function Crear() {
   return (
      <div className="container" >

            <CabMiPerfInt />

         <div className="en-linea">
            <Link to="/perfil-interno">
               <img className="btn-regresar" src={regresar} alt="regresar" />
            </Link>
            <h1>Crear Una Subasta</h1>
         </div>

         <form action="">
            <div className="crear-subasta">

               <section>

                  <label htmlFor="nombreProducto">Nombre del Producto</label> <br />
                  <input type="text" id="nombreProducto" /> <br />

                  <label htmlFor="montoInicial">Monto Inicial de la Subasta</label> <br />
                  <input type="number" id="montoInicial" /> <br />

                  <label htmlFor="fechaInicial">Fecha y Hora Inicial de la Subasta</label> <br />
                  <input type="date" id="fechaInicial" /> <br />

                  <label htmlFor="fechaFinal">Fecha y Hora Final de la Subasta</label> <br />
                  <input type="date" id="fechaFinal" /> <br />

                  <label htmlFor="fechaLimite">Fecha y Hora Limite de la Subasta</label> <br />
                  <input type="date" id="fechaLimite" /> <br />

                  <label htmlFor="imagen">Imagen del Producto</label> <br />
                  <input type="file" id="imagen" accept="image/png, .jpeg, .jpg" /> <br />

                  <label htmlFor="descripcion">Descripcion</label> <br />
                  <textarea id="descripcion" cols="30" rows="10"></textarea> <br />

               </section>

               <section>
                  <p><small>Vista Previa de la Imagen</small></p>
                  <img src={ropa} alt="Imagen de la Prenda" />
                  <input type="submit" className="iniciarSesion" value="Finalizar" />
               </section>
            </div>
         </form>

         <PiePagina />
      </div >
   )
}

export default Crear;