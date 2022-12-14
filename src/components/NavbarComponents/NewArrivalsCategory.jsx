const NewArrivalsCategory = ({ linkCategory }) => {
	return (
		<>
			<span
				onClick={() => linkCategory.current.scrollBy(-400, 0)}
				className="xl:hidden material-symbols-outlined text-5xl select-none cursor-pointer flex justify-center items-center absolute top-32 text-white border bg-black border-black z-[2] left-48 rounded-full hover:opacity-50"
			>
				arrow_left
			</span>
			<span
				onClick={() => linkCategory.current.scrollBy(400, 0)}
				className="xl:hidden material-symbols-outlined text-5xl select-none cursor-pointer flex justify-center items-center absolute top-32 text-white border bg-black border-black z-[2] right-3 rounded-full hover:opacity-50"
			>
				arrow_right
			</span>
			<div
				ref={linkCategory}
				className="link-category flex gap-10 justify-start xl:justify-center items-center w-fit overflow-x-scroll overflow-hidden pr-10"
			>
				<div className="link-img-container flex flex-col justify-center items-center gap-3">
					<div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
						<img
							className="w-full h-full hover:scale-110"
							src="//cdn.shopify.com/s/files/1/0010/9330/4381/products/glossypearlDuo_300x.jpg?v=1664458796"
							alt="new arrival img"
						/>
						<span className="material-symbols-outlined hover:text-white absolute top-2 right-2">favorite</span>
					</div>
					<p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">Glossy Pearl Duo</p>
				</div>
				<div className="link-img-container flex flex-col justify-center items-center gap-3">
					<div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
						<img
							className="w-full h-full hover:scale-110"
							src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/1GlossyPearlHairSerum_300x.jpg?v=1664458838"
							alt="new arrival img"
						/>
						<span className="material-symbols-outlined hover:text-white absolute top-2 right-2">favorite</span>
					</div>
					<p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
						Glossy Pearl Hair Shining Serum
					</p>
				</div>
				<div className="link-img-container flex flex-col justify-center items-center gap-3">
					<div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
						<img
							className="w-full h-full hover:scale-110"
							src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/Glossy-Pearl-Hair-Mask_300x.gif?v=1664458816"
							alt="new arrival img"
						/>
						<span className="material-symbols-outlined hover:text-white absolute top-2 right-2">favorite</span>
					</div>
					<p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">Glossy Pearl Hair Mask</p>
				</div>
				<div className="link-img-container flex flex-col justify-center items-center gap-3">
					<div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
						<img
							className="w-full h-full hover:scale-110"
							src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/Biotin_CollagenShampooPouch_300x.jpg?v=1653577757"
							alt="new arrival img"
						/>
						<span className="material-symbols-outlined hover:text-white absolute top-2 right-2">favorite</span>
					</div>
					<p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
						Biotin & Collagen Shampoo Pouch
					</p>
				</div>
			</div>
		</>
	);
};

export default NewArrivalsCategory;
