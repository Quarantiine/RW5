import React from "react";

const HeroSlideSystem = () => {
	return (
		<div className="w-full h-full relative overflow-hidden justify-end items-end hidden lg:flex">
			<img
				className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
				src="//cdn.shopify.com/s/files/1/0010/9330/4381/files/hair_masks.jpg?v=1669794848"
				alt="hero img"
				draggable={false}
			/>
			<div
				className={`hidden lg:flex bg-white w-52 z-[1] h-20 rounded-xl justify-center items-center text-black gap-10 mb-10 mr-32`}
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
