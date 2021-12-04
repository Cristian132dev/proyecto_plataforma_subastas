import { Link } from "react-router-dom";
import '../resources/css/bootstrap.css';
import '../resources/css/style_propio.css';
import Cabecera from "../components/Cabecera";
import PiePagina from "../components/PiePagina";

function Login() {
    return (
        <div>
            {/* Cabecera */}
            <Cabecera />

            {/* Formulario */}
            <form className="login">
                <div className="celda-login">
                    <div className="titulo">
                        <h1>!Bienvenido de Vuelta¡</h1>
                    </div>
                    <div className="formulario-login">
                        <div className="grupo-opciones">
                            <input type="email" className="login-correo" placeholder="correo electronico" id="correo" required />
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

            {/* Pie de pagina */}
            <PiePagina />
        </div>
    )
}

export default Login;