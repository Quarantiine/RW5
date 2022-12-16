import React from "react";

const SafetySection = () => {
	return (
		<div className="flex flex-wrap gap-10 justify-evenly w-[80%] mx-auto items-center text-center mt-32">
			<div className="flex flex-col gap-3 justify-center items-center">
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/value_props_-_cruelty-free.png?v=1628870707"
					alt="safety section img"
				/>
				<p className="text-sm">CRUELTY-FREE</p>
			</div>
			<div className="flex flex-col gap-3 justify-center items-center">
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/value_props_-_phosphate-free.png?v=1628870707"
					alt="safety section img"
				/>
				<p className="text-sm">SAFE ON COLOR-TREATED HAIR</p>
			</div>
			<div className="flex flex-col gap-3 justify-center items-center">
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/value_props_-_paraben-free.png?v=1628870707"
					alt="safety section img"
				/>
				<p className="text-sm">NATURE KNOWS BEST</p>
			</div>
			<div className="flex flex-col gap-3 justify-center items-center">
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/value_props_-_sulfate-free.png?v=1628870707"
					alt="safety section img"
				/>
				<p className="text-sm">SO LONG, SULFATES</p>
			</div>
			<div className="flex flex-col gap-3 justify-center items-center">
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/value_props_-_100_risk_free.png?v=1628870707"
					alt="safety section img"
				/>
				<p className="text-sm">100% RISK-FREE</p>
			</div>
		</div>
	);
};

export default SafetySection;
