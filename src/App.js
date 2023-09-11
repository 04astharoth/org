import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "./components/header/header";
import Formulario from "./components/form/form";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
	const [equipos, actualizarEquipos] = useState([
		{
			id: uuid(),
			titulo: "Programación",
			bgCard: "bg-equipo-pr-card",
			bgSection: "bg-equipo-pr-fondo",
			underlineColor: "border-b-equipo-pr-card",
			colorPrimario: "#57C278",
			colorSecundario: "#D9F7E9",
		},
		{
			id: uuid(),
			titulo: "Front End",
			bgCard: "bg-equipo-fe-card",
			bgSection: "bg-equipo-fe-fondo",
			underlineColor: "border-b-equipo-fe-card",
			colorPrimario: "#82CFFA",
			colorSecundario: "#E8F8FF",
		},
		{
			id: uuid(),
			titulo: "Data Science",
			bgCard: "bg-equipo-ds-card",
			bgSection: "bg-equipo-ds-fondo",
			underlineColor: "border-b-equipo-ds-card",
			colorPrimario: "#A6D157",
			colorSecundario: "#F0F8E2",
		},
		{
			id: uuid(),
			titulo: "DevOps",
			bgCard: "bg-equipo-do-card",
			bgSection: "bg-equipo-do-fondo",
			underlineColor: "border-b-equipo-do-card",
			colorPrimario: "#E06B69",
			colorSecundario: "#FDE7E8",
		},
		{
			id: uuid(),
			titulo: "UX y Diseño",
			bgCard: "bg-equipo-ud-card",
			bgSection: "bg-equipo-ud-fondo",
			underlineColor: "border-b-equipo-ud-card",
			colorPrimario: "#DB6EBF",
			colorSecundario: "#FAE9F5",
		},
		{
			id: uuid(),
			titulo: "Móvil",
			bgCard: "bg-equipo-mov-card",
			bgSection: "bg-equipo-mov-fondo",
			underlineColor: "border-b-equipo-mov-card",
			colorPrimario: "#FFBA05",
			colorSecundario: "#FFF5D9",
		},
		{
			id: uuid(),
			titulo: "Innovación y  Gestión",
			bgCard: "bg-equipo-ig-card",
			bgSection: "bg-equipo-ig-fondo",
			underlineColor: "border-b-equipo-ig-card",
			colorPrimario: "#FF8A29",
			colorSecundario: "#FFEEDF",
		},
	]);

	const [mostrarForm, actualizarForm] = useState(false);
	const [colaboradores, actualizarColaboradores] = useState([
		{
			id: uuid(),
			equipo: "Front End",
			foto: "https://github.com/harlandlohora.png",
			nombre: "Harland Lohora",
			puesto: "Instructor",
		},
		{
			id: uuid(),
			equipo: "Programación",
			foto: "https://github.com/genesysrm.png",
			nombre: "Genesys Rondón",
			puesto: "Desarrolladora de software e instructora",
		},
		{
			id: uuid(),
			equipo: "UX y Diseño",
			foto: "https://github.com/JeanmarieAluraLatam.png",
			nombre: "Jeanmarie Quijada",
			puesto: "Instructora en Alura Latam",
		},
		{
			id: uuid(),
			equipo: "Programación",
			foto: "https://github.com/christianpva.png",
			nombre: "Christian Velasco",
			puesto: "Head de Alura e Instructor",
		},
	]);

	const cargarForm = () => {
		actualizarForm(!mostrarForm);
	};

	const registrarColaborador = (colaborador) => {
		// console.log("Nuevo colaborador", colaborador);
		// spread operator
		actualizarColaboradores([...colaboradores, colaborador]);
	};

	const eliminarColaborador = (id) => {
		console.log("eliminando colaborador", id);
		const colaboradorEliminados = colaboradores.filter((colaborador) => colaborador.id !== id);
		actualizarColaboradores(colaboradorEliminados);
	};

	const actualizarColorEquipo = (color, id) => {
		console.log("actualizando: ", id, color);
		const equiposActualizados = equipos.map((equipo) => {
			if (equipo.id === id) {
				equipo.colorPrimario = color;
			}
			return equipo;
		});

		actualizarEquipos(equiposActualizados);
	};

	return (
		<div>
			<Header />
			{/* {mostrarForm ? <Formulario /> : <></>} */}
			{mostrarForm && (
				<Formulario
					equipos={equipos.map((equipo) => equipo.titulo)}
					registrarColaborador={registrarColaborador}
				/>
			)}

			<MiOrg cargarForm={cargarForm} />

			{equipos.map((equipo) => {
				return (
					<Equipo
						key={equipo.titulo}
						equipo={equipo}
						colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
						eliminarColaborador={eliminarColaborador}
						actualizarColorEquipo={actualizarColorEquipo}
					/>
				);
			})}

			<Footer />
		</div>
	);
}

export default App;
