import "./campo.css";

const Campo = (props) => {
	const manejarCambio = (e) => {
		props.actualizarValor(e.target.value);
	};

	const { type = "text" } = props;
	console.log(type);

	return (
		<div className="flex flex-col font-sans pb-8">
			<label className="pb-2 font-semibold">{props.titulo}</label>
			<input
				className={`campo campo-${type} placeholder:italic placeholder:text-slate-500 focus:outline-none focus:ring focus:ring-cornflower w-full drop-shadow-md`}
				placeholder={props.placeholder}
				name="name"
				type={type}
				required={props.required}
				value={props.valor}
				onChange={manejarCambio}
			/>
		</div>
	);
};

export default Campo;
