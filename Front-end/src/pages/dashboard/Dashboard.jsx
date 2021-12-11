import React from "react";
import CabDashboard from "../components/CabDashboard"
import { Link } from "react-router-dom";
import lupa from "../resources/img/lupa.png"

function Dashboard() {
   return (
      <div>
         <CabDashboard />

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
                     <ul className="menu-desplegable">
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

            <div>
               <h1>Dasboard Administrativo</h1>
               <form>
                  <label htmlFor="buscar">Buscar usuario por Correo Electronico</label> <br />
                  <input type="search" id="buscar"/>
                  <img src={lupa} alt="Buscar" className="btnBusqueda"/>
               </form>

               <aside>
                  <form>
                     <label htmlFor="nombre">Nombre Completo</label> <br />
                     <input type="text" id="nombre" /> <br />

                     <label htmlFor="tipoDoc">Tipo de Documento</label> <br />
                     <input type="text" id="tipoDoc" /> <br />

                     <label htmlFor="numDoc">Numero de Documento</label> <br />
                     <input type="number" id="numDoc" /> <br />

                     <label htmlFor="fechaExp">Fecha de Expedicion</label> <br />
                     <input type="date" id="fechaExp" /> <br />

                     <label htmlFor="fechaNac">Fecha de Nacimiento</label> <br />
                     <input type="date" id="fechaNac"/> <br />

                     <label htmlFor="email">Correo Electronico</label> <br />
                     <input type="email" id="email" /> <br />

                     <label htmlFor="password"></label> <br />
                     <input type="password" id="password" /> <br />
                  </form>
               </aside>
            </div>

         </div>
      </div>
   )
}

export default Dashboard;