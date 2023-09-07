// import { useState } from "react";
import "./ListaOpciones.css";

const ListaOpciones = (props) => {
	// console.log(props.equipos);

	const manejarCambio = (e) => {
		// console.log("cambio", e.target.value);
		props.actualizarEquipo(e.target.value);
	};

	return (
		<div className="CampoTexto flex flex-col font-sans pb-8">
			<label className="pb-2 font-semibold">{props.titulo}</label>
			<select
				value={props.valor}
				className="focus:outline-none focus:ring focus:ring-cornflower pl-5 w-full h-20 drop-shadow-md"
				onChange={manejarCambio}>
				<option disabled hidden value="" defaultValue="">
					Seleccionar equipo
				</option>
				{props.equipos.map((equipo, index) => {
					return <option key={index} value={equipo}>{equipo}</option>;
				})}
			</select>
		</div>
	);
};

export default ListaOpciones;
