import ropa from "../resources/img/ropa.jpg";
import regresar from "../resources/img/regresar.png"
import "../resources/css/bootstrap.css";
import "../resources/css/style_propio.css";
import { Link } from "react-router-dom"

function Historial() {
    return (
        <div className="pest-historial">
            <div className="titulo-historial">
                <Link to="/perfil_externo">
                    <img className="btn-regresar" src={regresar} alt="regresar" />
                </Link>
                <h1>Historial de Pujas</h1>
            </div>
            <ul className="container lista">
                <li>
                    <img className="img-historial" src={ropa} alt="imagen de prenda" />
                </li>
                <li>
                    <span className="txt-historial">
                        <p>
                            <b> Nombre de prenda</b>  $130.000 <br />
                                termina el (dia) a partir de las (hora) <br />
                                <small>codigo de subasta #(numero) </small>
                            </p>
                    </span>
                </li>
                <li>
                    <Link  className="btn-historial" to="/subasta"> Ver Subasta</Link>
                    <Link className="btn-cancelar"to="">Cancelar</Link>
                </li>
            </ul>
        </div>
    )
}

export default Historial;