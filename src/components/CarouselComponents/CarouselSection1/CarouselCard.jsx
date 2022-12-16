import React, { useEffect, useRef, useState } from "react";

const CarouselCard = ({ img1, img2, reviews, title, productSizeTab, price }) => {
	const [productSizes, setProductSizes] = useState(false);
	const [productSizeText, setProductSizeText] = useState("choose size");
	const [productSize, setProductSize] = useState(false);
	const [productSize2, setProductSize2] = useState(false);
	const [productSize3, setProductSize3] = useState(false);
	const [productSize4, setProductSize4] = useState(false);
	const [productSize5, setProductSize5] = useState(false);
	const productSizeRef = useRef();

	useEffect(() => {
		if (productSize) {
			setProductSize2(false);
			setProductSize3(false);
			setProductSize4(false);
			setProductSize5(false);
			setProductSizeText("16.9oz");
		}
		if (productSize2) {
			setProductSize(false);
			setProductSize3(false);
			setProductSize4(false);
			setProductSize5(false);
			setProductSizeText("33.8oz");
		}
		if (productSize3) {
			setProductSize2(false);
			setProductSize(false);
			setProductSize4(false);
			setProductSize5(false);
			setProductSizeText("Bundle");
		}
		if (productSize4) {
			setProductSize2(false);
			setProductSize3(false);
			setProductSize(false);
			setProductSize5(false);
			setProductSizeText("1.01oz");
		}
		if (productSize5) {
			setProductSize2(false);
			setProductSize3(false);
			setProductSize4(false);
			setProductSize(false);
			setProductSizeText("16.9oz");
		}
	});
	const openProductSizeTab = () => {
		setProductSizes(true);
		clearTimeout(productSizeRef.current);
	};

	const closeProductSizeTab = () => {
		productSizeRef.current = setTimeout(() => {
			setProductSizes(false);
		}, 250);
	};

	return (
		<div className="carousel-box flex flex-col justify-center items-start gap-5 select-none">
			<div className="relative w-[275px] h-[275px]">
				<span className="absolute top-5 z-[2] right-5 hover:text-white material-symbols-outlined cursor-pointer">
					favorite
				</span>
				<img
					className="absolute w-full h-full rounded-xl hover:opacity-0 z-[1]"
					src={img1}
					alt="carousel img"
					draggable={false}
				/>
				<img className="absolute w-full h-full rounded-xl" src={img2} alt="carousel img" draggable={false} />
			</div>
			<div className="flex flex-col justify-center items-start gap-10 w-full">
				<div className="flex flex-col justify-center items-start gap-1 cursor-pointer">
					<div className="flex justify-center items-center gap-1">
						<img className="w-32" src="/images/ratings.png" alt="rating img" draggable={false} />
						<p className="text-sm pt-[7px]">{reviews}</p>
					</div>
					<div className="flex justify-center items-center gap-5">
						<h2 className="">{title}</h2>
					</div>
				</div>
				<div className="flex flex-col text-sm justify-between items-center w-full h-auto gap-5">
					<div className="flex text-sm justify-between items-center w-full h-auto">
						{!productSizeTab && <p className="font-semibold">{price}</p>}
						{productSizeTab && (
							<p className="font-semibold">
								$
								{productSizeText === "16.9oz"
									? 32
									: "" || productSizeText === "33.8oz"
									? 64
									: "" || productSizeText === "Bundle"
									? 89
									: "" || productSizeText === "1.01oz"
									? 5
									: "" || productSizeText === "16.9oz"
									? 32
									: "$$$"}
							</p>
						)}
						{productSizeTab && (
							<div className="flex justify-center items-center gap-2 relative">
								<p
									ref={productSizeRef}
									onClick={openProductSizeTab}
									onMouseLeave={closeProductSizeTab}
									className="cursor-pointer"
								>
									{productSizeText}
								</p>
								<span className="material-symbols-outlined text-sm">
									{productSizes ? `arrow_downward` : `arrow_upward`}
								</span>
								<div
									onMouseOver={openProductSizeTab}
									onMouseLeave={closeProductSizeTab}
									onClick={() => setProductSizes(false)}
									className={`absolute top-5 [&>p]:cursor-pointer bg-white ${
										productSizes ? "border" : ""
									} border-black w-fit ${
										productSizes ? "h-fit" : "h-0"
									} z-[1] rounded-b-xl flex flex-col justify-center items-center [&>p]:px-3 [&>p]:py-1 [&>p]:w-full text-center overflow-hidden`}
								>
									<p onClick={() => setProductSize(true)} className="hover:bg-[#ffe2e2]">
										16.9oz
									</p>
									<p onClick={() => setProductSize2(true)} className="hover:bg-[#ffe2e2]">
										33.8oz
									</p>
									<p onClick={() => setProductSize3(true)} className="hover:bg-[#ffe2e2]">
										Bundle
									</p>
									<p onClick={() => setProductSize4(true)} className="hover:bg-[#ffe2e2]">
										1.01oz
									</p>
									<p onClick={() => setProductSize5(true)} className="hover:bg-[#ffe2e2] rounded-b-xl">
										16.9oz
									</p>
								</div>
							</div>
						)}
					</div>
					<div className="w-full h-auto">
						<button className="text-[12px] w-1/2 h-auto bg-transparent rounded-l-xl p-4 text-black hover:text-white hover:bg-black border border-black">
							ADD TO CART
						</button>
						<button className="text-[12px] w-1/2 h-auto bg-transparent rounded-r-xl p-4 text-black hover:text-white hover:bg-black border-r border-t border-b border-black">
							SUBSCRIBE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarouselCard;
