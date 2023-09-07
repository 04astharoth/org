import "./header.css";

function Header() {
	return (
		<header className="flex flex-wrap flex-col justify-end items-start text-white">
			<h1 className="text-4xl font-bold font-serif">Personas y equipos</h1>
            <h3 className="font-sans leading-loose">organizados en un solo lugar.</h3>
		</header>
	);
}

export default Header;
