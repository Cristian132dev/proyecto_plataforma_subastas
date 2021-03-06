import { Link } from "react-router-dom"
import CabMiPerfExt from "../components/CabMiPerfExt";
import PiePagina from "../components/PiePagina";
import '../resources/css/bootstrap.css';
import '../resources/css/style_propio.css';

function Perfil_externo() {
   return (
      <div>
         {/* cabecera */}
         <CabMiPerfExt
         />

         {/* pestaña izq */}
         <div className="pag-perfil">
            <div>
               <ul className="pest-perfil">
                  <li>
                     <Link className="btn-perfil" to="/perfil-externo/historial">Ver historial de pujas</Link>
                  </li> <br />
                  <li>
                     <Link className="btn-perfil" to="/perfil-externo/ganadas"> Pujas Ganadas</Link>
                  </li> <br />
                  <li>
                     <Link className="btn-perfil" to="/perfil-externo/perdidas">Pujas Perdidas</Link>
                  </li> <br />
               </ul>
            </div>

            {/* datos */}
            <main className="main-perfil">
               <h1 className="titulo">Mis Datos</h1>

               <form>
                  <label htmlFor="nombre-completo">Nombre Completo</label> <br />
                  <input type="text" name="nombre-ext" id="nombre-completo" required /> <br />

                  <label htmlFor="tipo-identidad">tipo de Documento</label> <br />
                  <select name="tipo-identidad-ext" id="tipo-identidad" value="Tipo de Documento" required>
                     <option value="CC">Cedula de Ciudadania</option>
                     <option value="TI">Tarjeta de Identidad</option>
                  </select ><br />

                  <label htmlFor="num-identificacion-ext">Numero de Identificacion</label> <br />
                  <input type="number" name="num-identificacion-ext" id="num-identificacion-ext" required /> <br />

                  <label htmlFor="fecha-exp">Fecha de expedicion del documento</label> <br />
                  <input type="date" name="fecha-exp-ext" id="fecha-exp" required /> <br />

                  <label htmlFor="fecha-nac">Fecha de Nacimiento</label> <br />
                  <input type="date" name="fecha-nac-ext" id="fecha-nac" required /> <br />

                  <label htmlFor="correo-registro">Correo Electronico</label> <br />
                  <input type="email" name="correo-ext" id="correo-registro" placeholder="Direccion de Correo Electronico" /> <br />

                  <label htmlFor="password">Contraseña</label> <br />
                  <input type="password" name="password-ext" id="password" required /> <br />

                  <input type="submit" value="Actualizar Datos" className="btnCrea" /> <br />

               </form>
            </main>
         </div>

         {/* Pie de pagina */}
         <PiePagina />
      </div>
   )
}

export default Perfil_externo;