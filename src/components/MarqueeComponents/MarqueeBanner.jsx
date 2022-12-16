import React, { useState, useEffect, useRef } from "react";
import MarqueeText from "./MarqueeText";

const MarqueeBanner = () => {
	const [marqueeText, setMarqueeText] = useState("make clean haircare fun");
	const container = useRef(null);

	useEffect(() => {
		const containerWidth = container.current.offsetWidth;
		const contentWidth = container.current.scrollWidth;

		// Start the marquee when the content is wider than the container
		if (contentWidth > containerWidth) {
			let currentPos = 0;

			setInterval(() => {
				currentPos -= 2;
				if (currentPos < -contentWidth) {
					currentPos = 0;
				}
				container.current.style.transform = `translateX(${currentPos}px)`;
			}, 50);
		}
	}, [container]);

	return (
		<>
			<div className="bg-[#fabdbd] w-full h-[200px] my-32 flex justify-center items-center overflow-hidden">
				<div ref={container} className={`marquee-container text-white flex justify-start items-center w-full gap-96`}>
					<MarqueeText marqueeText={marqueeText} />
					<MarqueeText marqueeText={marqueeText} />
				</div>
			</div>
			/
		</>
	);
};

export default MarqueeBanner;
