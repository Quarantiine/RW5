import React from "react";

const HeroSlideSystem = () => {
	return (
		<div>
			<div
				className={`hidden lg:flex bg-white z-[1] w-52 h-20 bottom-10 right-40 rounded-xl justify-center items-center text-black gap-10 mb-10 mr-32`}
			>
				<span className="material-symbols-outlined hover:-translate-x-1 cursor-pointer select-none">
					keyboard_backspace
				</span>
				<div className="flex justify-center items-center gap-1">
					<span>1</span>
					<span>/</span>
					<span>2</span>
				</div>
				<span className="material-symbols-outlined hover:translate-x-1 cursor-pointer select-none">east</span>
			</div>
		</div>
	);
};

export default HeroSlideSystem;
