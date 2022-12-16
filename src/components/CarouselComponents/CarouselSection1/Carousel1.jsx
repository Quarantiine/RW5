import React, { useState, useRef, useEffect } from "react";
import CarouselCards from "./CarouselCards";

const Carousel1 = () => {
	const startPosition = 20;
	const [x, setX] = useState(startPosition);
	const carouselContainer = useRef(null);
	const carouselRef = useRef(null);

	const handleMouseDown = (e) => {
		let startX = e.pageX - x;
		// console.log(startX);

		const onMouseMove = (e) => {
			const windowWidth = window.innerWidth - startPosition;
			const carouselMaxWidth = carouselRef.current.offsetWidth;
			const newX = e.pageX - startX;
			setTimeout(() => {
				if (newX < startPosition && newX > windowWidth - carouselMaxWidth) {
					setX(newX);
				}
			}, 1);
		};

		const onMouseUp = () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		};

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
	};

	return (
		<div className="relative">
			<span
				// onClick={() => carouselContainer.current.scrollBy(windowWidthCheck2 ? -300 : -500, 0)}
				onClick={() => carouselContainer.current.scrollBy(-400, 0)}
				className="cursor-pointer z-[2] absolute left-2 lg:hidden bg-black rounded-full text-2xl w-16 h-16 flex justify-center items-center text-white sm:left-40 top-1/2 translate-y-1/2 material-symbols-outlined select-none"
			>
				keyboard_backspace
			</span>
			<div
				ref={carouselContainer}
				className={`carousel mt-40 rounded-lg w-[100%] mx-auto h-fit flex flex-col gap-12 justify-center items-center text-black scroll-smooth overflow-hidden`}
			>
				<div className="flex flex-col text-center px-5 justify-center items-center gap-5 mx-auto w-full">
					<h1 className="text-5xl font-[times-new-roman]">The Faves</h1>
					<p className="text-xl">Squeaky-clean ingredients. Silky smooth feelings. Luseta. There ain’t no better.</p>
				</div>
				<div
					className={`grid grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto] justify-start items-start gap-10 mx-auto cursor-grab active:cursor-grabbing p-5`}
					ref={carouselRef}
					onMouseDown={handleMouseDown}
					style={{
						transform: `translateX(${x}px)`,
					}}
				>
					<CarouselCards />
				</div>
			</div>
			<span
				// onClick={() => carouselContainer.current.scrollBy(windowWidthCheck2 ? 300 : 500, 0)}
				onClick={() => carouselContainer.current.scrollBy(400, 0)}
				className="cursor-pointer z-[2] absolute right-2 lg:hidden bg-black rounded-full text-2xl w-16 h-16 flex justify-center items-center text-white sm:right-40 top-1/2 translate-y-1/2 material-symbols-outlined select-none"
			>
				east
			</span>
		</div>
	);
};

export default Carousel1;
