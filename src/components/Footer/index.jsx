import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer w-full h-[213px] flex">
			<div className="h-full w-[80%] mx-auto flex items-center justify-between">
				<div className="redes flex gap-8">
					<a href="/">
						<img src="/img/facebook.png" alt="facebook" />
					</a>
					<a href="/">
						<img src="/img/twitter.png" alt="twitter" />
					</a>
					<a href="/">
						<img src="/img/instagram.png" alt="instagram" />
					</a>
				</div>
				<img className="ml-[33%] mr-auto" src="/img/logo.png" alt="logo" />
				<strong className=" font-sans font-normal text-white">Desarrollado por Alura - JGVM - 2023</strong>
			</div>
		</footer>
	);
};

export default Footer;
