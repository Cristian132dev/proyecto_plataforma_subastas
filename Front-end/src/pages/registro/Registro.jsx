// import { Link } from "react-router-dom";
import "../resources/css/bootstrap.css"
import "../resources/css/style_propio.css"



function Registro() {
    return(
        <div>
            <h1 className="titulo-registro">Crea tu cuenta</h1>
            <div  className="tabla-registro">

            <form>
                <input type="text" placeholder="Nombre Completo" required/> <br />

                <label htmlFor="tipo-identidad">tipo de Documento</label> <br />
                <select name="tipo-identidad" className="tipo-identidad" value="Tipo de Documento" required>
                    <option value="CC">Cedula de Ciudadania</option>
                    <option value="TI">Tarjeta de Identidad</option>
                </select ><br />

                <input type="number" placeholder="Numero de Identificacion" required/> <br />

                <label htmlFor="fecha-exp">Fecha de expedicion del documento</label> <br />
                <input type="date" name="fecha-exp" className="fecha-exp" required /> <br />

                <label htmlFor="fecha-nac">Fecha de Nacimiento</label> <br />
                <input type="date" name="fecha-nac" className="fecha-nac" required /> <br />

                <input type="email" name="correo" className="correo-registro" placeholder="Direccion de Correo Electronico"/> <br />

                <input type="password" name="password" className="password" placeholder="contraseña" required/> <br />

                <input type="submit" value="Crear Una Cuenta" className="btnCrea"/> <br />
            </form>
        </div>
    </div>
    )
}

export default Registro;