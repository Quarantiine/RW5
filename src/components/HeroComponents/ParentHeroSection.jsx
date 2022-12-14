import { useEffect, useState } from "react";
import HeroSlideSystem from "./HeroSlideSystem";

const ParentHeroSection = () => {
	const [hideSlideContainer, setHideSlideContainer] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			window.innerWidth < 1024 ? setHideSlideContainer(false) : setHideSlideContainer(true);
		}, 10);

		return () => clearInterval(interval);
	}, [hideSlideContainer]);
	return (
		<div className="h-[780px] overflow-hidden relative">
			<div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-black h-full w-full">
				<div className="bg-[#e5deff] w-full lg:w-[800px] text-center xl:w-full h-full z-[1] flex flex-col justify-center items-center gap-8 pb-20 px-5">
					<h1 className="text-7xl font-medium font-[times-new-roman]">Hydra Booster</h1>
					<h3 className="text-4xl font-[times-new-roman]">Say Goodbye to Dull Hair</h3>
					<p className="text-lg w-[67%] text-gray-500 font-extralight text-center">
						Our wide array of masks provide superior nourishment to bring dull hair back to live.
					</p>
					<button className="btn btn-black text-white text-sm px-12 sm:px-32 bg-black hover:opacity-70 py-8 flex flex-col justify-center items-center">
						HAIR WE GO
					</button>
				</div>
				{hideSlideContainer && <HeroSlideSystem />}
			</div>
		</div>
	);
};

export default ParentHeroSection;
