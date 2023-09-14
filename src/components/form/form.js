import "./form.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import hexToRgba from "hex-to-rgba";
import Campo from "../Campo/campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
	const [nombre, actualizarNombre] = useState("");
	const [puesto, actualizarPuesto] = useState("");
	const [foto, actualizarFoto] = useState("");
	const [equipo, actualizarEquipo] = useState("");

	const [titulo, actualizarTitulo] = useState("");
	const [color, actualizarColor] = useState("");

	const { registrarColaborador, crearEquipo } = props;

	const manejarEnvioEmpleado = (e) => {
		e.preventDefault();
		// console.log("Evento activado", e);
		let datosEmpleado = {
			id: uuid(),
			nombre,
			puesto,
			foto,
			equipo,
			fav: false,
		};
		registrarColaborador(datosEmpleado);
	};

	const manejarEnvioEquipo = (e) => {
		e.preventDefault();
		let datosEquipo = {
			id: uuid(),
			titulo,
			colorPrimario: color,
			colorSecundario: hexToRgba(color, 0.6),
		};
		// console.log(datosEquipo);
		crearEquipo(datosEquipo);
	};

	return (
		<section className="formulario flex justify-evenly flex-wrap lg:flex-nowrap gap-10 my-20 mx-12">
			{/* Form Colaborador */}
			<form
				onSubmit={manejarEnvioEmpleado}
				className="lg:w-[50%] p-10 relative drop-shadow-md rounded-2xl">
				<h2 className="text-3xl font-semibold pb-8 font-serif">
					Rellena el formulario para agregar al colaborador.
				</h2>
				<Campo
					titulo="Nombre"
					placeholder="Ingrese el Nombre"
					required
					valor={nombre}
					actualizarValor={actualizarNombre}
				/>
				<Campo
					titulo="Puesto"
					placeholder="Ingrese el Puesto"
					required
					valor={puesto}
					actualizarValor={actualizarPuesto}
				/>
				<Campo
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
			{/* Form Equipo */}
			<form onSubmit={manejarEnvioEquipo} className="lg:w-[50%] p-10 relative drop-shadow-md rounded-2xl">
				<h2 className="text-3xl font-semibold pb-8 font-serif">Rellena el formulario para agregar Equipo.</h2>
				<Campo
					titulo="Titulo"
					placeholder="Ingrese el Titulo"
					required
					valor={titulo}
					actualizarValor={actualizarTitulo}
				/>
				<Campo
					type="color"
					titulo="Color Primario"
					required
					valor={color}
					actualizarValor={actualizarColor}
				/>
				<Boton texto="Registrar Equipo" />
			</form>
		</section>
	);
};

export default Formulario;
