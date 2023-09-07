import "./App.css";
import { useState } from "react";
import Header from "./components/header/header";
import Formulario from "./components/form/form";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
	const equipos = [
		{
			titulo: "Programación",
			bgCard: "bg-equipo-pr-card",
			bgSection: "bg-equipo-pr-fondo",
			underlineColor: "border-b-equipo-pr-card",
		},
		{
			titulo: "Front End",
			bgCard: "bg-equipo-fe-card",
			bgSection: "bg-equipo-fe-fondo",
			underlineColor: "border-b-equipo-fe-card",
		},
		{
			titulo: "Data Science",
			bgCard: "bg-equipo-ds-card",
			bgSection: "bg-equipo-ds-fondo",
			underlineColor: "border-b-equipo-ds-card",
		},
		{
			titulo: "DevOps",
			bgCard: "bg-equipo-do-card",
			bgSection: "bg-equipo-do-fondo",
			underlineColor: "border-b-equipo-do-card",
		},
		{
			titulo: "UX y Diseño",
			bgCard: "bg-equipo-ud-card",
			bgSection: "bg-equipo-ud-fondo",
			underlineColor: "border-b-equipo-ud-card",
		},
		{
			titulo: "Móvil",
			bgCard: "bg-equipo-mov-card",
			bgSection: "bg-equipo-mov-fondo",
			underlineColor: "border-b-equipo-mov-card",
		},
		{
			titulo: "Innovación y  Gestión",
			bgCard: "bg-equipo-ig-card",
			bgSection: "bg-equipo-ig-fondo",
			underlineColor: "border-b-equipo-ig-card",
		},
	];

	const [mostrarForm, actualizarForm] = useState(false);
	const [colaboradores, actualizarColaboradores] = useState([]);

	const cargarForm = () => {
		actualizarForm(!mostrarForm);
	};

	const registrarColaborador = (colaborador) => {
		// console.log("Nuevo colaborador", colaborador);
		// spread operator
		actualizarColaboradores([...colaboradores, colaborador]);
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

			{equipos.map((equipo, index) => {
				return (
					<Equipo
						equipo={equipo}
						key={equipo.titulo}
						colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
					/>
				);
			})}
			 
			<Footer />
		</div>
	);
}

export default App;
