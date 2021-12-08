import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function FormLogin() {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log(`Correo Electronico: ${email} \n Contraseña: ${password}`)

      e.target.reset()
      setEmail('')
      setPassword('')
   }

   return (
      <div>
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

      </div>
   )
}

export default FormLogin;