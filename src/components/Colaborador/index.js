import "./colaborador.css";

const Colaborador = (props) => {
	const { bgCard } = props;
	const { equipo, foto, nombre, puesto } = props.colaborador;
	return (
		<div className="colaborador w-[280px] mb-6 relative shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] rounded-[10px]">
			<div className={`encabezado ${bgCard} rounded-t-[10px] flex justify-center`}>
				<img
					className="relative w-[100px] rounded-[50%] bottom-[-50px]"
					src={foto}					
					alt="img_colaborador"
				/>
			</div>
			<div className="info font-sans bg-[#FFFFFF] rounded-b-[10px] pt-[90px] pb-10 min-h-[100px]">
				<h4 className="text-cornflower font-lg leading-[22px] font-bold mb-2">{nombre}</h4>
				<h5 className="px-6 m-0 font-normal font-lg leading-[22px] text-[#212121]">{puesto}</h5>
			</div>
		</div>
	);
};

export default Colaborador;
