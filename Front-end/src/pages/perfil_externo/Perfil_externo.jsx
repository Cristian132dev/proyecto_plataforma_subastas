import { Link } from "react-router-dom"
import "../resources/css/bootstrap.css"
import "../resources/css/style_propio.css"
import logoEmpresa from "../resources/img/logoColsubastas.jpeg";
import lupa from "../resources/img/lupa.png"
/* import ropa from "../resources/img/ropa.jpg";
import facebook from "../resources/img/facebook.png"
import whatsapp from "../resources/img/whatsapp.png"
 */
function Perfil_externo() {
    return (
        <div>
            {/* cabecera */}
            <header className="container">
                <ul>
                    <li>
                        <Link to="/">
                            <img className="logoCabecera" src={logoEmpresa} alt="Logo Colsubastas" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p className="tituloEmpresa"> Colsubastas</p>
                        </Link>
                    </li>
                    <li><input type="search" name="busqueda" className="busqueda" placeholder="buscador..." /></li>
                    <li><input type="image" title="buscar" className="btnBusqueda" src={lupa} alt="buscar" /></li>
                    <li><Link to="/login" className="iniciarSesion">Iniciar Sesion</Link></li>
                </ul>
            </header>

            {/* pestaña izq */}
            <div className="pag-perfil-ext">
                <div>
                    <ul className="pest-perfil-ext">
                        <li>
                            <Link className="btn-perfil-ext" to="/perfil_externo/historial">Ver historial de pujas</Link>
                        </li> <br />
                        <li>
                            <Link className="btn-perfil-ext" to="perfil_externo/ganado"> Pujas Ganadas</Link>
                        </li> <br />
                        <li>
                            <Link className="btn-perfil-ext" to="perfil_externo/perdido">Pujas Perdidas</Link>
                        </li> <br />
                    </ul>
                </div>

                {/* datos */}
                <main className="main-perfil-ext">
                    <h1 className="titulo">Mis Datos</h1>

                    <form>
                        <label htmlFor="nombre-completo">Nombre Completo</label> <br />
                        <input type="text" id="nombre-completo" required /> <br />

                        <label htmlFor="tipo-identidad">tipo de Documento</label> <br />
                        <select name="tipo-identidad" className="tipo-identidad" value="Tipo de Documento" required>
                            <option value="CC">Cedula de Ciudadania</option>
                            <option value="TI">Tarjeta de Identidad</option>
                        </select ><br />

                        <label htmlFor="password">Numero de Identificacion</label> <br />
                        <input type="number" id="password"  required /> <br />

                        <label htmlFor="fecha-exp">Fecha de expedicion del documento</label> <br />
                        <input type="date" name="fecha-exp" id="fecha-exp" required /> <br />

                        <label htmlFor="fecha-nac">Fecha de Nacimiento</label> <br />
                        <input type="date" name="fecha-nac" id="fecha-nac" required /> <br />

                        <label htmlFor="correo-registro">Correo Electronico</label> <br />
                        <input type="email" name="correo" id="correo-registro" placeholder="Direccion de Correo Electronico" /> <br />

                        <label htmlFor="password">Contraseña</label> <br />
                        <input type="password" name="password" id="password" required /> <br />

                    </form>
                </main>
            </div>
        </div>
    )
}

export default Perfil_externo;