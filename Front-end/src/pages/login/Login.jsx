import '../resources/css/bootstrap.css';
import '../resources/css/style_propio.css';
import Cabecera from "../components/Cabecera";
import PiePagina from "../components/PiePagina";
import FormLogin from "../components/FormLogin";

function Login() {

	return (
		<div>
			{/* Cabecera 25.10*/}
			<Cabecera />
			{/* Formulario */}
			<FormLogin />
			{/* Pie de pagina */}
			<PiePagina />
		</div>
	)
}

export default Login;