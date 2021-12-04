import "../resources/css/bootstrap.css";
import "../resources/css/style_propio.css";
import ropa from "../resources/img/ropa.jpg";
import PiePagina from "../components/PiePagina";
import Cabecera from "../components/Cabecera";

function Inicio() {
	return (
		<div>
			{/* cabecera */}
			<Cabecera />

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
			<PiePagina />
		</div>
	)
}

export default Inicio;
