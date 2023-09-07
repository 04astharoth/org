import "./TextInput.css";

const CampoTexto = (props) => {
	const manejarCambio = (e) => {
		props.actualizarValor(e.target.value);
	}
	
	return (
		<div className="CampoTexto flex flex-col font-sans pb-8">
			<label className="pb-2 font-semibold">{props.titulo}</label>
			<input
				className="placeholder:italic placeholder:text-slate-500 focus:outline-none focus:ring focus:ring-cornflower pl-5 w-full h-20 drop-shadow-md"
				placeholder={props.placeholder}
				type="text"
				name="name"
				required={props.required}
				value={props.valor}
				onChange={manejarCambio}
			/>
		</div>
	);
};

export default CampoTexto;
