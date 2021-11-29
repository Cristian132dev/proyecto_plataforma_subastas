import { Link } from "react-router-dom";
import "../resources/css/bootstrap.css";
import "../resources/css/style-inicio-plataforma.css";
import logoEmpresa from "../resources/img/logoColsubastas.jpeg";
import lupa from "../resources/img/lupa.png"
import ropa from "../resources/img/ropa.jpg";

function Inicio() {
  return (
    <><header className="container">
      <ul>
        <li><img  className="logoCabecera" src={logoEmpresa} alt="Logo Colsubastas" /></li>
        <li><p className="tituloEmpresa"> Colsubastas</p></li>
        <li><input type="search" name="busqueda" className="busqueda" placeholder="buscador..." required /></li>
        <li><input type="image" title="buscar" className="btnBusqueda" src={lupa} alt="buscar" /></li>
        <li>
          <Link to="/login" className="iniciarSesion">
            iniciar Sesion</Link>
          </li>
      </ul>
    </header>
      <main className="container">
        {/* <!-- todo: eliminar --> */}
        <h1>*aqui iran cada una de las prendas*</h1>
        <section className="producto">
          <img src={ropa} alt="imagen del producto" className="imagen" />
          <div className="text">
            <p><b>subasta de ropa casual para hombre</b></p>
            <p>puja actual</p>
            <p>$ 130.000</p>
            <p>termina en (dia) a partir de las (hora)</p>
          </div>
        </section>
      </main></>
  )
}

export default Inicio;
