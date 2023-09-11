import "./equipo.css";
import hexToRgba from 'hex-to-rgba';
import Colaborador from "../Colaborador";

const Equipo = (props) => {
	const { id, titulo, bgSection, bgCard, underlineColor, colorPrimario, colorSecundario } = props.equipo;
	const { colaboradores, eliminarColaborador, actualizarColorEquipo } = props;

	const bgColorEquipo = {
		backgroundColor: hexToRgba(colorPrimario, 0.6)
	}
	const ColorUnderline = {
		borderColor:colorPrimario
	}

	// console.log(titulo, colaboradores.length > 0);

	return (
		<>
			{colaboradores.length > 0 && (
				// <section className={`equipo flex justify-center ${bgSection}`}>
				<section className={`equipo flex justify-center`} style={bgColorEquipo}>
					<div className="contenedor flex flex-col items-center text-center w-[80%] my-[34px] ">
						<input
							type="color"
							className="absolute right-[25px]"
							value={colorPrimario}
							onChange={(e) => {
								actualizarColorEquipo(e.target.value, id);
							}}
						/>
						{/* <h3 className={`font-serif text-[2rem] font-normal pb-2 border-b-4 ${underlineColor}`}> */}
						<h3 className={`font-serif text-[2rem] font-normal pb-2 border-b-4`} style={ColorUnderline}>
							{titulo}
						</h3>
						<div className="colaboradores flex justify-evenly flex-wrap pt-[52px] w-full">
							{/* <Colaborador bgCard={bgCard} /> */}
							{colaboradores.map((colaborador) => {
								// console.log(colaborador);
								return (
									<Colaborador
										key={colaborador.nombre}
										bgCard={colorPrimario}
										colaborador={colaborador}
										eliminarColaborador={eliminarColaborador}
									/>
								);
							})}
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Equipo;
