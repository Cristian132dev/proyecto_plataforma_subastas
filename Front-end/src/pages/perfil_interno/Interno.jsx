import { Link } from "react-router-dom"
import CabMiPerfInt from "../components/CabMiPerfInt";
import PiePagina from "../components/PiePagina";
import '../resources/css/bootstrap.css';
import '../resources/css/style_propio.css';

function Perfil_interno() {
   return (
      <div>
         {/* cabecera */}
         <CabMiPerfInt />

         {/* pestaña izq */}
         <div className="pag-perfil">
            <div>
               <ul className="pest-perfil">
                  <li>
                     <Link className="btn-perfil" to="/perfil-interno/historial">Ver historial de pujas</Link>
                  </li> <br />
                  <li>
                     <Link className="btn-perfil" to="/perfil-interno/ganadas"> Pujas Ganadas</Link>
                  </li> <br />
                  <li>
                     <Link className="btn-perfil" to="/perfil-interno/perdidas">Pujas Perdidas</Link>
                  </li> <br />
                  <li>
                     <Link className="btn-perfil" to="/perfil-interno/crear">Crear Subasta</Link>
                  </li> <br />
                  <li>
                     <Link className="btn-perfil" to="/perfil-interno/editar">Editar Subasta</Link>
                  </li> <br />

                  <li className="menu">
                     <Link className="btn-perfil" to="/perfil-interno">Ver Reporte</Link>
                     <ul  className="menu-desplegable">
                        <li>
                           <Link className="btn-perfil" to="/perfil-interno/pujas-subasta">Pujas Por Subasta</Link>
                        </li>
                        <li>
                           <Link className="btn-perfil" to="/perfil-interno/disponibles">Subastas Disponibles</Link>
                        </li>
                        <li>
                           <Link className="btn-perfil" to="/perfil-interno/finalizadas">Subastas Finalizadas por Fecha</Link>
                        </li>
                     </ul>
                  </li> <br />
               </ul>
            </div>

            {/* datos */}
            <main className="main-perfil">
               <h1 className="titulo">Mis Datos</h1>

               <form>
                  <label htmlFor="nombre-completo">Nombre Completo</label> <br />
                  <input type="text" name="nombre-int" id="nombre-completo" required /> <br />

                  <label htmlFor="tipo-identidad">tipo de Documento</label> <br />
                  <select name="tipo-identidad-int" id="tipo-identidad" value="Tipo de Documento" required>
                     <option value="CC">Cedula de Ciudadania</option>
                     <option value="TI">Tarjeta de Identidad</option>
                  </select ><br />

                  <label htmlFor="num-identificacion">Numero de Identificacion</label> <br />
                  <input type="number" name="num-identificacion-int" id="num-identificacion" required /> <br />

                  <label htmlFor="fecha-exp">Fecha de expedicion del documento</label> <br />
                  <input type="date" name="fecha-exp-int" id="fecha-exp" required /> <br />

                  <label htmlFor="fecha-nac">Fecha de Nacimiento</label> <br />
                  <input type="date" name="fecha-nac-int" id="fecha-nac" required /> <br />

                  <label htmlFor="correo-registro">Correo Electronico</label> <br />
                  <input type="email" name="correo-int" id="correo-registro" placeholder="Direccion de Correo Electronico" /> <br />

                  <label htmlFor="password">Contraseña</label> <br />
                  <input type="password" name="password-int" id="password" required /> <br />

                  <input type="submit" value="Actualizar Datos" className="btnCrea" /> <br />
               </form>
            </main>
         </div>

         {/* Pie de pagina */}
         <PiePagina />
      </div>
   )
}

export default Perfil_interno;