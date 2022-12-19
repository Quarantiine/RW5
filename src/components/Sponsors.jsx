import React from "react";

const Sponsors = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-center items-center w-full h-fit px-10 py-2 mt-12 gap-5 xl:gap-16">
			<p className="text-sm">THEY LOVE US</p>
			<div className="grid grid-cols-3 lg:flex justify-center items-center gap-5 xl:gap-16">
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/Bydie.png?v=1636050899"
					alt="sponser"
				/>
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/logos_-_allure_e1a66c37-0461-49c5-9b3a-3a258a7a88de.png?v=1628870707"
					alt="sponser"
				/>
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/life_Style_815e3369-10b6-46e2-97de-f7270c884c46.png?v=1636050631"
					alt="sponser"
				/>
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/logos_-_macy_s_f42c6682-95e0-4540-b6cf-81177ce26b40.png?v=1628870707"
					alt="sponser"
				/>
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/instyle.png?v=1632431076"
					alt="sponser"
				/>
				<img
					className="w-28"
					src="https://cdn.shopify.com/s/files/1/0010/9330/4381/files/logos_-_refinery_29_31770cc1-ff84-45f3-9bca-a22160f171e6.png?v=1628870707"
					alt="sponser"
				/>
			</div>
		</div>
	);
};

export default Sponsors;
