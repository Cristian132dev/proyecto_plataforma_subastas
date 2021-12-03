import { Link } from "react-router-dom";
import "../resources/css/bootstrap.css";
import "../resources/css/style_propio.css";
import logoEmpresa from "../resources/img/logoColsubastas.jpeg";
import lupa from "../resources/img/lupa.png"
import ropa from "../resources/img/ropa.jpg";
import facebook from "../resources/img/facebook.png"
import whatsapp from "../resources/img/whatsapp.png"



function Inicio() {
  return (
    <div>
      {/* cabecera */}
      <header className="container">
        <ul>
          <li><img className="logoCabecera" src={logoEmpresa} alt="Logo Colsubastas" /></li>
          <li><p className="tituloEmpresa"> Colsubastas</p></li>
          <li><input type="search" name="busqueda" className="busqueda" placeholder="buscador..." required /></li>
          <li><input type="image" title="buscar" className="btnBusqueda" src={lupa} alt="buscar" /></li>
          <li>
            <Link to="/login" className="iniciarSesion">
              iniciar Sesion
            </Link>
          </li>
        </ul>
      </header>

      {/* contenedor donde se muestran las prendas */}
      <main className="container">
        <section className="producto">
          <img src={ropa} alt="imagen del producto" className="imagen" />
          <div className="text">
            <p><b>subasta de ropa casual para hombre</b></p>
            <p>puja actual</p>
            <p>$ 130.000</p>
            <p>termina en (dia) a partir de las (hora)</p>
          </div>
        </section>
      </main>

      {/* pie de pagina */}
      <footer className="container">
        <ul className="pie-pagina">
          <li className="copyright">
            copyright&copy; 2021 - Colsubastas - prendas de vestir
          </li>

          <div className="contactenos">
            <h6 className="titulo-contactenos">Contactenos</h6> <br />

            <li className="redes-sociales">
              <Link to="whatsapp.com" target="_blank"> <img src={facebook} alt="Chat de WhatsApp" /> </Link>
              <Link to="facebook.com" target="_blank"> <img src={whatsapp} alt="Pagina de Facebook" /> </Link>
            </li>
            <li className="numeros">
              <p>
                Numeros de contacto: <br />
                311 507 64 87 <br />
                313 316 22 86 <br />
                314 313 01 39 <br />
              </p>
            </li>

          </div>  

        </ul>
      </footer>
    </div>
  )
}

export default Inicio;
