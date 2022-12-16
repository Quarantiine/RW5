import React, { useState, useRef } from "react";

const Carousel2 = () => {
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
		<>
			<div className="flex flex-col lg:flex-row text-center px-5 justify-evenly items-center gap-5 mx-auto w-full text-black">
				<h1 className="text-5xl font-[times-new-roman]">Straight, Curly, or Thick. Take Your Pick.</h1>
				<a className="underline" href="#/">
					LET’S EXPLORE
				</a>
			</div>
			<div className="relative">
				<span
					// onClick={() => carouselContainer.current.scrollBy(windowWidthCheck2 ? -300 : -500, 0)}
					onClick={() => carouselContainer.current.scrollBy(-300, 0)}
					className="cursor-pointer z-[2] absolute left-2 lg:hidden bg-black rounded-full text-2xl w-16 h-16 flex justify-center items-center text-white sm:left-40 top-40 material-symbols-outlined select-none"
				>
					keyboard_backspace
				</span>
				<div
					ref={carouselContainer}
					className={`carousel mt-0 rounded-lg w-[100%] mx-auto h-fit flex flex-col gap-12 justify-center items-center text-black scroll-smooth overflow-hidden`}
				>
					<div
						className={`select-none grid grid-cols-[auto_auto_auto_auto_auto_auto] justify-start items-start gap-10 mx-auto cursor-grab active:cursor-grabbing p-5 overflow-hidden`}
						ref={carouselRef}
						onMouseDown={handleMouseDown}
						style={{
							transform: `translateX(${x}px)`,
						}}
					>
						<div className="">
							<div className="carousel-box bg-pink-200 w-80 h-80 rounded-2xl relative overflow-hidden cursor-pointer">
								<img
									className="absolute w-full h-full hover:scale-110"
									src="//cdn.shopify.com/s/files/1/0010/9330/4381/collections/moisture_2x-min_8f152d0e-2f77-4119-a0aa-1961dd2ff0bc_400x.jpg?v=1632343745"
									alt="carousel 2 img"
									draggable={false}
								/>
							</div>
							<p className="mt-10 text-4xl font-serif">Intense Moisture</p>
						</div>
						<div className="carousel-box">
							<div className="bg-pink-200 w-80 h-80 rounded-2xl relative overflow-hidden cursor-pointer">
								<img
									className="absolute w-full h-full hover:scale-110"
									src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/clarify_2x-min_e7a9ddd8-a6cb-4ca7-8234-af01a9a7c42b_400x.jpg?v=1632349969"
									alt="carousel 2 img"
									draggable={false}
								/>
							</div>
							<p className="mt-10 text-4xl font-serif">Clarify Scalp</p>
						</div>
						<div className="carousel-box">
							<div className="bg-pink-200 w-80 h-80 rounded-2xl relative overflow-hidden cursor-pointer">
								<img
									className="absolute w-full h-full hover:scale-110"
									src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/defined-curl_2x-min_0096daa7-c7ee-428d-969e-0bcd885b1f1f_400x.jpg?v=1632350161"
									alt="carousel 2 img"
									draggable={false}
								/>
							</div>
							<p className="mt-10 text-4xl font-serif">Defined Curls</p>
						</div>
						<div className="carousel-box">
							<div className="bg-pink-200 w-80 h-80 rounded-2xl relative overflow-hidden cursor-pointer">
								<img
									className="absolute w-full h-full hover:scale-110"
									src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/more-volume_2x-min_40617fed-5929-4e73-95b6-080d88217b79_400x.jpg?v=1632340565"
									alt="carousel 2 img"
									draggable={false}
								/>
							</div>
							<p className="mt-10 text-4xl font-serif">More Volume</p>
						</div>
						<div className="carousel-box">
							<div className="bg-pink-200 w-80 h-80 rounded-2xl relative overflow-hidden cursor-pointer">
								<img
									className="absolute w-full h-full hover:scale-110"
									src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/frizziness_2x-min_303116fb-c19f-45f4-b5b3-fd1bb9b1f772_400x.jpg?v=1632340318"
									alt="carousel 2 img"
									draggable={false}
								/>
							</div>
							<p className="mt-10 text-4xl font-serif">Tame Frizziness</p>
						</div>
						<div className="carousel-box">
							<div className="bg-pink-200 w-80 h-80 rounded-2xl relative overflow-hidden cursor-pointer">
								<img
									className="absolute w-full h-full hover:scale-110"
									src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/vibrant-color_2x-min_3f89ff8f-becb-4a13-99b9-593d50ab5950_400x.jpg?v=1632342537"
									alt="carousel 2 img"
									draggable={false}
								/>
							</div>
							<p className="mt-10 text-4xl font-serif">Vibrant Color</p>
						</div>
					</div>
				</div>
				<span
					// onClick={() => carouselContainer.current.scrollBy(windowWidthCheck2 ? 300 : 500, 0)}
					onClick={() => carouselContainer.current.scrollBy(300, 0)}
					className="cursor-pointer z-[2] absolute right-2 lg:hidden bg-black rounded-full text-2xl w-16 h-16 flex justify-center items-center text-white sm:right-40 top-40 material-symbols-outlined select-none"
				>
					east
				</span>
			</div>
		</>
	);
};

export default Carousel2;
