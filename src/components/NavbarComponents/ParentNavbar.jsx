const ParentNavbar = () => {
	return (
		<div className="bg-white border-b w-full h-20 flex justify-evenly items-center gap-5 text-black">
			<a href="/">
				<img
					className="w-48 cursor-pointer"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/Luseta-logo.svg?v=163737035158898480941661964644"
					alt="Logo"
				/>
			</a>
			<div className="flex gap-5">
				<div>
					<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
						SHOP
					</a>
					<div></div>
				</div>
				<div>
					<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
						ABOUT US
					</a>
					<div></div>
				</div>
				<div>
					<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
						REWARDS
					</a>
					<div></div>
				</div>
				<div>
					<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
						TESTIMONIALS
					</a>
					<div></div>
				</div>
				<div>
					<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
						BLOG
					</a>
					<div></div>
				</div>
				<div>
					<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
						QUIZ
					</a>
					<div></div>
				</div>
			</div>
			<div className="flex gap-5">
				<span className="material-symbols-outlined cursor-pointer text-lg">favorite</span>
				<span className="material-symbols-outlined cursor-pointer text-lg">search</span>
				<span className="material-symbols-outlined cursor-pointer text-lg">person_filled</span>
				<span className="material-symbols-outlined cursor-pointer text-lg">shopping_bag</span>
			</div>
		</div>
	);
};

export default ParentNavbar;
