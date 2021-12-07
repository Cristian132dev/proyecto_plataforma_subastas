import { Link } from "react-router-dom";
import facebook from "../resources/img/facebook.png";
import whatsapp from "../resources/img/whatsapp.png";
import "../resources/css/bootstrap.css";
import "../resources/css/style_propio.css";

const PiePagina = () => {
   return (
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
   );
}

export default PiePagina;