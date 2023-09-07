import "./MiOrg.css";

const MiOrg = (props) => {
	
	return (
		<section className="flex justify-center my-20">
			<div className="flex justify-center items-center w-[80%] py-8">
				<h3 className="absolute text-cornflower font-serif text-[40px] font-normal pb-5 border-b-4 border-b-cornflower">
					Mi Organización
				</h3>
				<img className="cursor-pointer ml-auto" src="/img/add.png" alt="add_btn" onClick={props.cargarForm} />
			</div>
		</section>
	);
};

export default MiOrg;
