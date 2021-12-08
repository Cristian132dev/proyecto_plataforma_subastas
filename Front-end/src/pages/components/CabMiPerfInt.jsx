import logoEmpresa from "../resources/img/logoColsubastas.jpeg";
import lupa from "../resources/img/lupa.png";
import { Link } from "react-router-dom";

function CabMiPerfInt() {
   return (
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
            <li><input type="search" name="busqueda" className="busqueda" placeholder="buscador..." required /></li>
            <li><input type="image" title="buscar" className="btnBusqueda" src={lupa} alt="buscar" /></li>
            <li>
               <Link to="/perfil-interno" className="iniciarSesion">
                  Mi Perfil
               </Link>
            </li>
         </ul>
      </header>
   )
}

export default CabMiPerfInt;
