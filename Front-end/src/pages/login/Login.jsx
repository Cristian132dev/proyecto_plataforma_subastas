import { Link } from "react-router-dom";
import '../resources/css/bootstrap.css';
import '../resources/css/style-inicio-plataforma.css';
import logoEmpresa from "../resources/img/logoColsubastas.jpeg";
import lupa from "../resources/img/lupa.png"

function Login() {
    return (
        <div>
        <header className="container">
            <ul>
                <li>
                    <Link to="/">
                        <img  className="logoCabecera" src={logoEmpresa} alt="Logo Colsubastas" />
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
            <form className="login">
                <div className="celda-login">
                    <div className="titulo">
                        <h1>!Bienvenido de Vuelta¡</h1>
                    </div>
                    <div className="formulario-login">
                        <div className="grupo-opciones">
                            <input type="email" className="login-correo" placeholder="correo electronico" id="correo"  required/>
                        </div>
                        <div className="grupo-opciones">
                            <input type="password" className="login-contraseña" placeholder="contraseña" id="password" required />
                        </div>
                        <input type="submit" className="btn btn-primary btn-large btn-block" value="Inciar Sesion" />
                        <div className="registro-login">
                            <h1>¿Usuario Nuevo?</h1>
                            <Link to="/registro" className="btnCrea">crea tu cuenta gratis</Link>
                        </div>
                    </div>
                </div>
            </form>
            </div>
    )
}

export default Login;