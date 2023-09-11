import "./form.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import CampoTexto from "../input/TextInput";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
	const [nombre, actualizarNombre] = useState("");
	const [puesto, actualizarPuesto] = useState("");
	const [foto, actualizarFoto] = useState("");
	const [equipo, actualizarEquipo] = useState("");

	const { registrarColaborador } = props;

	const manejarEnvio = (e) => {
		e.preventDefault();
		// console.log("Evento activado", e);
		let datosEmpleado = {
			nombre,
			puesto,
			foto,
			equipo,
			id: uuid(),
		};
		registrarColaborador(datosEmpleado);
	};

	return (
		<section className="formulario flex justify-center my-20">
			<form onSubmit={manejarEnvio} className="w-[80%] px-24 py-8 drop-shadow-md rounded-2xl">
				<h2 className="text-3xl font-semibold pb-8 font-serif">
					Rellena el formulario para agregar al colaborador.
				</h2>
				<CampoTexto
					titulo="Nombre"
					placeholder="Ingrese el Nombre"
					required
					valor={nombre}
					actualizarValor={actualizarNombre}
				/>
				<CampoTexto
					titulo="Puesto"
					placeholder="Ingrese el Puesto"
					required
					valor={puesto}
					actualizarValor={actualizarPuesto}
				/>
				<CampoTexto
					titulo="Foto"
					placeholder="Ingresar Enlace de Foto"
					required
					valor={foto}
					actualizarValor={actualizarFoto}
				/>
				<ListaOpciones
					titulo="Equipo"
					valor={equipo}
					actualizarEquipo={actualizarEquipo}
					equipos={props.equipos}
				/>
				<Boton texto="Crear" />
			</form>
		</section>
	);
};

export default Formulario;
