// import { Link } from "react-router-dom";
import { useState } from 'react';
import '../resources/css/bootstrap.css';
import '../resources/css/style_propio.css';
import { Link } from 'react-router-dom';



function Registro() {
   const [nombreCompl, setNombreCompl] = useState("")
   const [tipoIdentidad, setTipoIdentidad] = useState("")
   const [fechaExp, setFechaExp] = useState("")
   const [fechaNac, setFechaNac] = useState("")
   const [numIdentificacion, setNumIdentificacion] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log(`
         Nombre Completo: ${nombreCompl} \n
         Tipo Identidad: ${tipoIdentidad} \n
         Fecha de Expedicion: ${fechaExp} \n
         Fecha de Nacimiento: ${fechaNac} \n
         Numero de identificacion: ${numIdentificacion} \n
         Email: ${email} \n
         Contraseña: ${password} \n`
      )

      e.target.reset()
      setNombreCompl("")
      setTipoIdentidad("")
      setFechaExp("")
      setFechaNac("")
      setNumIdentificacion("")
      setEmail('')
      setPassword('')
   }


   return (
      <div>
         <h1 className="titulo-registro">Crea tu cuenta</h1>
         <div className="tabla-registro">

            <form onSubmit={onSubmitHandler}>
               <input
                  type="text"
                  placeholder="Nombre Completo"
                  onChange={(e) => setNombreCompl(e.target.value)}
                  required /> <br />

               <label htmlFor="tipo-identidad">tipo de Documento</label> <br />
               <select
                  id='tipo-identidad'
                  onChange={(e) => setTipoIdentidad(e.target.value)}
                  required
                  value={tipoIdentidad}>
                     <option>seleccione</option>
                     <option value="cedula">Cedula de Ciudadania</option>
                     <option value="tarjeta">Tarjeta de Identidad</option>
               </select ><br />

               <input
                  type="number"
                  value={numIdentificacion}
                  placeholder="Numero de Identificacion"
                  onChange={(e) => setNumIdentificacion(e.target.value)}
                  required /> <br />

               <label htmlFor="fecha-exp">Fecha de expedicion del documento</label> <br />
               <input
                  type="date"
                  value={fechaExp}
                  onChange={(e) => setFechaExp(e.target.value)}
                  id="fecha-exp"
                  required /> <br />

               <label htmlFor="fecha-nac">Fecha de Nacimiento</label> <br />
               <input
                  type="date"
                  value={fechaNac}
                  onChange={(e) => setFechaNac(e.target.value)}
                  id="fecha-nac"
                  required /> <br />

               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="correo-registro"
                  placeholder="Direccion de Correo Electronico" /> <br />

               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="password"
                  placeholder="contraseña"
                  required /> <br />

               <input type="submit" value="Crear Una Cuenta" className="btnCrea" /> <br />

               <Link to="/login">¿Tienes cuenta? Inicia sesion</Link>
            </form>
         </div>
      </div>
   )
}

export default Registro;