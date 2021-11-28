import './App.css';
import './css/bootstrap.css';
import './css/style-inicio-plataforma.css';


function App2() {
    return (
            <><header className="container">
                <ul>
                    <li><img className="logoCabecera" src={window.location.origin + '/img/logoColsubastas.jpeg'} alt="Logo Colsubastas" /> </li>{/* <!-- logo de colsubastas --> */}
                    <li><p className="tituloEmpresa"> Colsubastas</p></li>
                    <li><input type="search" name="busqueda" className="busqueda" placeholder="buscador..." /></li>
                    <li><input type="image" title="buscar" className="btnBusqueda" src={window.location.origin + '/img/lupa.png'}  alt="buscar" /></li>
                    <li><a href="" className="iniciarSesion">Iniciar Sesion</a></li>
                </ul>
            </header><div className="login">
                <div className="celda-login">
                    <div className="titulo">
                        <h1>!Bienvenido de Vuelta¡</h1>
                    </div>

                    <div className="formulario-login">
                        <div className="grupo-opciones">
                            <input type="email" className="login-correo" value="" placeholder="correo electronico" id="correo" />
                            <label className="login-contraseña-icon fui-user" for="login-name"></label>
                        </div>

                        <div className="grupo-opciones">
                            <input type="password" className="login-contraseña" value="" placeholder="contraseña" id="password"/>
                            <label className="login-contraseña-icon fui-lock" for="login-pass"></label>
                        </div>

                        <a className="btn btn-primary btn-large btn-block" href="#">Iniciar Sesion</a>
                        <a className="login-link" href="">has olvidado tu contraseña?</a>
                        <div className="registro-login">
                            <h1>¿Usuario Nuevo?</h1>
                            <a className="btnCrea" href="#">crea tu cuenta gratis</a>
                        </div>
                    </div>
                </div>
            </div></>
            )

    }

export default App2;