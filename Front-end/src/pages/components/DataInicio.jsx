import React from "react";
import ropa from "../../resources/img/ropa.jpg"
import "../../resources/css/style_propio.css"
import "../../resources/css/bootstrap.css"

const DataInicio = (props) => {
	const { data } = props;
	return (
		<div>
			<main className="container">
				<section className="producto">
					<img src={ropa} alt="imagen del producto" className="imagen" />
					<div className="text">
						<p><b>{data.nombrePuja}</b></p>
						<p>puja actual</p>
						<p>{data.precioPuja}</p>
						<p>termina en (dia) a partir de las (hora)</p>
					</div>
				</section>
			</main>
		</div>
	)
}

export default DataInicio;