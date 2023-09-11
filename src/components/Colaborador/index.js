import "./colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = (props) => {
	const { foto, nombre, puesto, equipo, id } = props.colaborador;
	const { bgCard, eliminarColaborador } = props;
	return (
		<div className="colaborador w-[280px] mb-6 relative shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] rounded-[10px]">
			<AiFillCloseCircle
				className="absolute text-[25px] right-[-8px] top-[-8px] "
				onClick={() => eliminarColaborador(id)}
			/>
			{/* <div className={`encabezado ${bgCard} rounded-t-[10px] flex justify-center`}> */}
			<div className={`encabezado rounded-t-[10px] flex justify-center`} style={{ backgroundColor: bgCard }}>
				<img className="relative w-[100px] rounded-[50%] bottom-[-50px]" src={foto} alt="img_colaborador" />
			</div>
			<div className="info font-sans bg-[#FFFFFF] rounded-b-[10px] pt-[90px] pb-10 min-h-[205px] h-">
				<h4 className="text-cornflower font-lg leading-[22px] font-bold mb-2">{nombre}</h4>
				<h5 className="px-6 m-0 font-normal font-lg leading-[22px] text-[#212121]">{puesto}</h5>
			</div>
		</div>
	);
};

export default Colaborador;
