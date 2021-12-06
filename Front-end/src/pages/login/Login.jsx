import { useState } from "react";
import { Link } from "react-router-dom";
import '../../resources/css/bootstrap.css';
import '../../resources/css/style_propio.css';
import Cabecera from "../components/Cabecera";
import PiePagina from "../components/PiePagina";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(`Correo Electronico: ${email} \n Contraseña: ${password}`)
  }


  return (
    <div>
      {/* Cabecera 25.10*/}
      <Cabecera />

      {/* Formulario */}
      <form className="login" onSubmit={onSubmitHandler}>
        <div className="celda-login">
          <div className="titulo">
            <h1>!Bienvenido de Vuelta¡</h1>
          </div>
          <div className="formulario-login">
            <div className="grupo-opciones">
              <input
                type="email"
                className="login-correo"
                placeholder="correo electronico"
                id="correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="grupo-opciones">
              <input
                type="password"
                className="login-contraseña"
                placeholder="contraseña"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
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