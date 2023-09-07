import "./equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
	const { titulo, bgSection, bgCard, underlineColor } = props.equipo;
	const { colaboradores } = props;

	console.log(titulo, colaboradores.length > 0);
	
	return <>{colaboradores.length > 0 &&
		<section className={`equipo flex justify-center ${bgSection}`}>
			<div className="contenedor flex flex-col items-center text-center w-[80%] my-[34px] ">
				<h3 className={`font-serif text-[2rem] font-normal pb-2 border-b-4 ${underlineColor}`}>{titulo}</h3>
				<div className="colaboradores flex justify-evenly flex-wrap pt-[52px] w-full">
					{/* <Colaborador bgCard={bgCard} /> */}
					{colaboradores.map((colaborador,index) => {
						// console.log(colaborador);
						return <Colaborador key={colaborador.nombre} bgCard={bgCard} colaborador={colaborador}/>
						
					})}
				</div>
			</div>
		</section>
	}</>;
};

export default Equipo;
