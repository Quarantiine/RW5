import React, { useEffect, useState } from "react";

const WhySection = () => {
	const [windowWidthCheck, setWindowWidthCheck] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			window.innerWidth < 1465 ? setWindowWidthCheck(true) : setWindowWidthCheck(false);
		});
		return () => clearInterval(interval);
	}, [windowWidthCheck, setWindowWidthCheck]);

	return (
		<div
			className={`w-[70%] ${
				windowWidthCheck ? "h-fit py-10" : "h-[600px]"
			} mx-auto mt-32 rounded-2xl flex justify-center items-center overflow-hidden ${
				windowWidthCheck ? "flex-col" : "flex-row"
			}`}
		>
			{!windowWidthCheck && (
				<div className="flex justify-center items-center w-full h-full z-[2] bg-[#fcdfdf]">
					<div className="flex flex-col justify-center items-center gap-10 w-[80%] bg-white h-fit py-10 rounded-xl text-black">
						<div className="flex flex-col justify-center items-center gap-5 text-center px-2">
							<h1 className="mb-2 text-4xl font-serif">Why you’ll love Luseta</h1>
							<p className="w-[80%]">
								Our mission is to break down the barriers to luxury, salon-quality hair care, bringing the Luseta
								experience to everyone.
							</p>
							<button className="p-5 select-none rounded-md text-white bg-[#fabdbd] hover:opacity-60">
								VIEW ALL COLLECTION
							</button>
						</div>
					</div>
				</div>
			)}
			<img
				className={`w-full h-full object-cover rounded-t-2xl lg:rounded-none ${
					windowWidthCheck ? "object-top" : "object-center"
				} hover:scale-110 z-[1]`}
				src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/why_you_will_love_luseta_600x.jpg?v=1631739753"
				alt="why img"
			/>
			{windowWidthCheck && (
				<div className="flex justify-center items-center w-full h-full z-[2] py-12 bg-[#fcdfdf] rounded-b-2xl">
					<div className="flex flex-col justify-center items-center gap-10 w-[80%] bg-white h-fit py-10 rounded-xl text-black">
						<div className="flex flex-col justify-center items-center gap-5 text-center px-2">
							<h1 className="mb-2 text-2xl sm:text-4xl font-serif">Why you’ll love Luseta</h1>
							<p className="w-[80%] text-md sm:text-xl">
								Our mission is to break down the barriers to luxury, salon-quality hair care, bringing the Luseta
								experience to everyone.
							</p>
							<button className="p-5 select-none rounded-md text-white bg-[#fabdbd] hover:opacity-60 text-sm sm:text-xl">
								VIEW ALL COLLECTION
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default WhySection;
