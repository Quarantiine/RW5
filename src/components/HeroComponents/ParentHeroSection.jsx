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

	let [slideNumber, setSlideNumber] = useState(1);
	let slideLimit = 2;

	const slideNumberSystem = () => {
		setSlideNumber(slideNumber + 1);
		slideNumber === 2 ? setSlideNumber(slideNumber - 1) : setSlideNumber(slideNumber + 1);
	};

	return (
		<div className="h-fit sm:h-[600px] overflow-hidden relative">
			<div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-black h-full w-full">
				{slideNumber === 1 ? (
					<div className="bg-[#e5deff] w-full lg:w-[800px] text-center xl:w-full h-full z-[1] flex flex-col justify-center items-center gap-8 pt-24 pb-16 px-5">
						<h1 className="text-7xl font-medium font-[times-new-roman]">Hydra Booster</h1>
						<h3 className="text-4xl font-[times-new-roman]">Say Goodbye to Dull Hair</h3>
						<p className="text-lg w-[67%] text-gray-500 font-extralight text-center">
							Our wide array of masks provide superior nourishment to bring dull hair back to live.
						</p>
						<button className="btn btn-black text-white text-sm px-12 sm:px-32 bg-black hover:opacity-70 py-8 flex flex-col justify-center items-center">
							HAIR WE GO
						</button>
						{!hideSlideContainer && (
							<div
								className={` flex mx-auto bg-white w-52 z-[1] h-20 rounded-xl justify-center items-center text-black gap-10 mb-10`}
							>
								<span
									onClick={slideNumberSystem}
									className="material-symbols-outlined hover:-translate-x-1 cursor-pointer select-none"
								>
									keyboard_backspace
								</span>
								<div className="flex justify-center items-center gap-1">
									{
										<>
											<span>{slideNumber}</span>
											<span>/</span>
											<span>{slideLimit}</span>
										</>
									}
								</div>
								<span
									onClick={slideNumberSystem}
									className="material-symbols-outlined hover:translate-x-1 cursor-pointer select-none"
								>
									east
								</span>
							</div>
						)}
					</div>
				) : (
					<div className="bg-[#ffecf5] w-full lg:w-[800px] text-center xl:w-full h-full z-[1] flex flex-col justify-center items-center gap-8 pt-24 pb-16 px-5">
						<h1 className="text-7xl font-medium font-[times-new-roman]">Time To Glow</h1>
						<h3 className="text-4xl font-[times-new-roman]">Glossy Pearl Duo</h3>
						<p className="text-lg w-[67%] text-gray-500 font-extralight text-center">
							Specially formulated with pearl extract + nutrient-rich ingredients, this power duo helps reinforce each
							strand to reflect luster, create a look of smooth, sleek hair.
						</p>
						<button className="btn btn-black text-white text-sm px-12 sm:px-32 bg-black hover:opacity-70 py-8 flex flex-col justify-center items-center">
							HAIR WE GO
						</button>
						{!hideSlideContainer && (
							<div
								className={` flex mx-auto bg-white w-52 z-[1] h-20 rounded-xl justify-center items-center text-black gap-10 mb-10`}
							>
								<span
									onClick={slideNumberSystem}
									className="material-symbols-outlined hover:-translate-x-1 cursor-pointer select-none"
								>
									keyboard_backspace
								</span>
								<div className="flex justify-center items-center gap-1">
									{
										<>
											<span>{slideNumber}</span>
											<span>/</span>
											<span>{slideLimit}</span>
										</>
									}
								</div>
								<span
									onClick={slideNumberSystem}
									className="material-symbols-outlined hover:translate-x-1 cursor-pointer select-none"
								>
									east
								</span>
							</div>
						)}
					</div>
				)}
				{hideSlideContainer && (
					<HeroSlideSystem slideLimit={slideLimit} slideNumberSystem={slideNumberSystem} slideNumber={slideNumber} />
				)}
			</div>
		</div>
	);
};

export default ParentHeroSection;
