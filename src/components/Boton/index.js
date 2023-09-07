import "./Boton.css";

const Boton = (props) => {
	return (
		<button className="py-6 px-8 text-white font-bold text-xl bg-cornflower font-sans rounded-lg hover:text-palegreen">
			{props.texto}
		</button>
	);
};

export default Boton;
