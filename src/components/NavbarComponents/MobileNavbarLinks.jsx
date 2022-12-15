import React, { useState } from "react";

const MobileNavbarLinks = ({ mobileShopLinks, setHideMobileShopLinks }) => {
	const [mobileShopSubLinks, setMobileShopSubLinks] = useState(false);
	const [mobileShopSubLinks2, setMobileShopSubLinks2] = useState(false);
	const [mobileShopSubLinks3, setMobileShopSubLinks3] = useState(false);
	const [mobileShopSubLinks4, setMobileShopSubLinks4] = useState(false);
	const [mobileShopSubLinks5, setMobileShopSubLinks5] = useState(false);
	const [mobileShopSubLinks6, setMobileShopSubLinks6] = useState(false);

	const checkMobileClick1 = () => {
		setMobileShopSubLinks(!mobileShopSubLinks);
		setMobileShopSubLinks2(false);
		setMobileShopSubLinks3(false);
		setMobileShopSubLinks4(false);
		setMobileShopSubLinks5(false);
		setMobileShopSubLinks6(false);
	};
	const checkMobileClick2 = () => {
		setMobileShopSubLinks(false);
		setMobileShopSubLinks2(!mobileShopSubLinks2);
		setMobileShopSubLinks3(false);
		setMobileShopSubLinks4(false);
		setMobileShopSubLinks5(false);
		setMobileShopSubLinks6(false);
	};
	const checkMobileClick3 = () => {
		setMobileShopSubLinks(false);
		setMobileShopSubLinks2(false);
		setMobileShopSubLinks3(!mobileShopSubLinks3);
		setMobileShopSubLinks4(false);
		setMobileShopSubLinks5(false);
		setMobileShopSubLinks6(false);
	};
	const checkMobileClick4 = () => {
		setMobileShopSubLinks(false);
		setMobileShopSubLinks2(false);
		setMobileShopSubLinks3(false);
		setMobileShopSubLinks4(!mobileShopSubLinks4);
		setMobileShopSubLinks5(false);
		setMobileShopSubLinks6(false);
	};
	const checkMobileClick5 = () => {
		setMobileShopSubLinks(false);
		setMobileShopSubLinks2(false);
		setMobileShopSubLinks3(false);
		setMobileShopSubLinks4(false);
		setMobileShopSubLinks5(!mobileShopSubLinks5);
		setMobileShopSubLinks6(false);
	};
	const checkMobileClick6 = () => {
		setMobileShopSubLinks(false);
		setMobileShopSubLinks2(false);
		setMobileShopSubLinks3(false);
		setMobileShopSubLinks4(false);
		setMobileShopSubLinks5(false);
		setMobileShopSubLinks6(!mobileShopSubLinks6);
	};

	return (
		<>
			<React.Fragment>
				<a
					className={`${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`}
					onClick={checkMobileClick1}
					onMouseOver={() => {
						setHideMobileShopLinks(true);
					}}
					onMouseLeave={() => {
						setHideMobileShopLinks(false);
						// setMobileShopSubLinks(false);
					}}
					href="/#"
				>
					NEW ARRIVALS <span className="material-symbols-outlined text-sm">east</span>
				</a>
				{mobileShopSubLinks && (
					<div className="flex flex-col justify-center items-start gap-2 mt-2">
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="//cdn.shopify.com/s/files/1/0010/9330/4381/products/glossypearlDuo_300x.jpg?v=1664458796"
								alt="mobile link img"
							/>
							<p>Glossy Pearl Duo</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/1GlossyPearlHairSerum_300x.jpg?v=1664458838"
								alt="mobile link img"
							/>
							<p>Glossy Pearl Hair Shining Serum</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/Glossy-Pearl-Hair-Mask_300x.gif?v=1664458816"
								alt="mobile link img"
							/>
							<p>Glossy Pearl Hair Mask</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/Biotin_CollagenShampooPouch_300x.jpg?v=1653577757"
								alt="mobile link img"
							/>
							<p>Biotin & Collagen Shampoo Pouch</p>
						</div>
						<div className="line-container relative my-4">
							<a className="hover:text-[#fabdbd] text-sm font-semibold underline hover:no-underline" href="/#">
								VIEW ALL NEW ARRIVALS
							</a>
							<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
						</div>
					</div>
				)}
			</React.Fragment>

			<React.Fragment>
				<a
					className={`${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`}
					onClick={checkMobileClick2}
					onMouseOver={() => {
						setHideMobileShopLinks(true);
					}}
					onMouseLeave={() => {
						setHideMobileShopLinks(false);
						// setMobileShopSubLinks(false);
					}}
					href="/#"
				>
					BESTSELLERS <span className="material-symbols-outlined text-sm">east</span>
				</a>
				{mobileShopSubLinks2 && (
					<div className="flex flex-col justify-center items-start gap-2 mt-2">
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/1Biotin_Collagenduo_300x.jpg?v=1666826360"
								alt="mobile link img"
							/>
							<p>Biotin & Collagen Bundle</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/3_dc7d11ab-0acf-423f-8d61-cd3bd59b6882_300x.jpg?v=1632346794"
								alt="mobile link img"
							/>
							<p>Rose Oil Body Wash</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/ColorBrightening_886142c6-5af6-4ec0-96a1-31075411d310_300x.jpg?v=1636159570"
								alt="mobile link img"
							/>
							<p>Color Brightening Bundle</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/052622KeratinSmoothDuo_300x.jpg?v=1653588765"
								alt="mobile link img"
							/>
							<p>Keratin Bundle</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/G_20LUSETA_206_300x.gif?v=1653665136"
								alt="mobile link img"
							/>
							<p>Curl Enhancing Leave-in Cream</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/BiotinB-Complex_300x.jpg?v=1636159273"
								alt="mobile link img"
							/>
							<p>Biotin B-Complex Thickening Bundle</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/edited-LUSETA-GIF-3_1_300x.gif?v=1661824387"
								alt="mobile link img"
							/>
							<p>Hemp Oil Complex Bundle</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/PerfectBondingno3_300x.jpg?v=1653662261"
								alt="mobile link img"
							/>
							<p>Perfect Bonding No.3 Restoring Leave-in Cream</p>
						</div>
						<div className="line-container relative my-4">
							<a className="hover:text-[#fabdbd] text-sm font-semibold underline hover:no-underline" href="/#">
								VIEW ALL NEW ARRIVALS
							</a>
							<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
						</div>
					</div>
				)}
			</React.Fragment>

			<React.Fragment>
				<a
					className={`${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`}
					onClick={checkMobileClick3}
					onMouseOver={() => {
						setHideMobileShopLinks(true);
					}}
					onMouseLeave={() => {
						setHideMobileShopLinks(false);
						// setMobileShopSubLinks(false);
					}}
					href="/#"
				>
					VALUE SETS <span className="material-symbols-outlined text-sm">east</span>
				</a>
				{mobileShopSubLinks3 && (
					<div className="flex flex-col justify-center items-start gap-2 mt-2">
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/neverdull_box1_300x.jpg?v=1632347867"
								alt="mobile link img"
							/>
							<p>NeverDull Moment Box</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/UltimateBondingBox_300x.jpg?v=1632348165"
								alt="mobile link img"
							/>
							<p>Ultimate Bonding Box</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/edited-G-LUSETA-2_300x.gif?v=1653665542"
								alt="mobile link img"
							/>
							<p>Love Is In The Hair Set</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/magicwand6pcs_300x.jpg?v=1669684470"
								alt="mobile link img"
							/>
							<p>Magic Wand Box</p>
						</div>
						<div className="line-container relative my-4">
							<a className="hover:text-[#fabdbd] text-sm font-semibold underline hover:no-underline" href="/#">
								VIEW ALL NEW ARRIVALS
							</a>
							<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
						</div>
					</div>
				)}
			</React.Fragment>

			<React.Fragment>
				<a
					className={`${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`}
					onClick={checkMobileClick4}
					onMouseOver={() => {
						setHideMobileShopLinks(true);
					}}
					onMouseLeave={() => {
						setHideMobileShopLinks(false);
						// setMobileShopSubLinks(false);
					}}
					href="/#"
				>
					HAIR NEEDS <span className="material-symbols-outlined text-sm">east</span>
				</a>
				{mobileShopSubLinks4 && (
					<div className="flex flex-col justify-center items-start gap-2 mt-2">
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/moisture_2x-min_8f152d0e-2f77-4119-a0aa-1961dd2ff0bc_300x.jpg?v=1632343745"
								alt="mobile link img"
							/>
							<p>Intense Moisture</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/more-volume_2x-min_40617fed-5929-4e73-95b6-080d88217b79_300x.jpg?v=1632340565"
								alt="mobile link img"
							/>
							<p>More Volume</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/vibrant-color_2x-min_3f89ff8f-becb-4a13-99b9-593d50ab5950_300x.jpg?v=1632342537"
								alt="mobile link img"
							/>
							<p>Vibrant Color</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/clarify_2x-min_e7a9ddd8-a6cb-4ca7-8234-af01a9a7c42b_300x.jpg?v=1632349969"
								alt="mobile link img"
							/>
							<p>Clarify Scalp</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/defined-curl_2x-min_0096daa7-c7ee-428d-969e-0bcd885b1f1f_300x.jpg?v=1632350161"
								alt="mobile link img"
							/>
							<p>Defined Curl</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/frizziness_2x-min_303116fb-c19f-45f4-b5b3-fd1bb9b1f772_300x.jpg?v=1632340318"
								alt="mobile link img"
							/>
							<p>Tame Frizziness</p>
						</div>
						<div className="line-container relative my-4">
							<a className="hover:text-[#fabdbd] text-sm font-semibold underline hover:no-underline" href="/#">
								VIEW ALL NEW ARRIVALS
							</a>
							<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
						</div>
					</div>
				)}
			</React.Fragment>

			<React.Fragment>
				<a
					className={`${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`}
					onClick={checkMobileClick5}
					onMouseOver={() => {
						setHideMobileShopLinks(true);
					}}
					onMouseLeave={() => {
						setHideMobileShopLinks(false);
						// setMobileShopSubLinks(false);
					}}
					href="/#"
				>
					COLLECTIONS <span className="material-symbols-outlined text-sm">east</span>
				</a>
				{mobileShopSubLinks5 && (
					<div className="flex flex-col justify-center items-start gap-2 mt-2">
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/Biotin_Collagen_Collection_f0b53139-ba18-42ab-b3d9-7199f1e72e9c_300x.jpg?v=1632962914"
								alt="mobile link img"
							/>
							<p>Biotin & Collagen</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/Keratin_Collection_2cf1ad7d-93c7-4377-a669-cce0ff5f95ff_300x.jpg?v=1661290565"
								alt="mobile link img"
							/>
							<p>Keratin Smooth</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/color-brightening_2x-min_5d6e9b70-1769-4eea-b85f-0966d70e90d0_300x.jpg?v=1632963028"
								alt="mobile link img"
							/>
							<p>Color Brightening</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/glossy-pearl-bundle_a573d1b4-97cc-477c-a0d3-b98dacac203d_300x.gif?v=1664458863"
								alt="mobile link img"
							/>
							<p>Glossy Pearl</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/Rose1_899ffc5c-9fc1-4fd1-93cc-49f4d04a4066_300x.jpg?v=1632962982"
								alt="mobile link img"
							/>
							<p>Rose Oil</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/apple-cider_2x-min_7f980bfa-84b1-44c6-a8f6-a884f3d476a5_300x.jpg?v=1633111935"
								alt="mobile link img"
							/>
							<p>Apple Cider Vinegar</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/Curl_Enhancing_b31c602f-6054-463a-97d9-6b08d3028087_300x.jpg?v=1632963021"
								alt="mobile link img"
							/>
							<p>Curl Enhancing</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/Hemp_Complex_37ec7090-cc47-482b-a39c-df42c73ff138_300x.jpg?v=1634934776"
								alt="mobile link img"
							/>
							<p>Hemp Oil Complex</p>
						</div>
						<div className="line-container relative my-4">
							<a className="hover:text-[#fabdbd] text-sm font-semibold underline hover:no-underline" href="/#">
								VIEW ALL NEW ARRIVALS
							</a>
							<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
						</div>
					</div>
				)}
			</React.Fragment>

			<React.Fragment>
				<a
					className={`${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`}
					onClick={checkMobileClick6}
					onMouseOver={() => {
						setHideMobileShopLinks(true);
					}}
					onMouseLeave={() => {
						setHideMobileShopLinks(false);
						// setMobileShopSubLinks(false);
					}}
					href="/#"
				>
					PRODUCT TYPE <span className="material-symbols-outlined text-sm">east</span>
				</a>
				{mobileShopSubLinks6 && (
					<div className="flex flex-col justify-center items-start gap-2 mt-2">
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/bundle_2x-min_2011bf1a-1fad-4d1b-b5aa-f592773673dd_300x.jpg?v=1638308345"
								alt="mobile link img"
							/>
							<p>Bundles</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/Shop_All_-_Sub_Pages_2_0006_SHAMPOO_92049629-fee5-4ef4-be90-e5d3d4cb29ed_300x.jpg?v=1632346597"
								alt="mobile link img"
							/>
							<p>Shampoo</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/Shop_All_-_Sub_Pages_2_0005_CONDITIONER_ec72f85e-da67-4820-87c3-0e0f9ff9a2dc_300x.jpg?v=1632344740"
								alt="mobile link img"
							/>
							<p>Conditioner</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/1Hair_Treatment_Product_Hero_Template_4ce39893-6a2e-42ee-bbcc-9bee6dc99887_300x.jpg?v=1634937404"
								alt="mobile link img"
							/>
							<p>Treatment</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/Body_Care_6208f454-788c-4b62-b826-23b228465dfd_300x.jpg?v=1632347549"
								alt="mobile link img"
							/>
							<p>Body Care</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/Styling_Finishing_438ac040-0ff8-4ea0-879e-7d72ef66b17e_300x.jpg?v=1634936400"
								alt="mobile link img"
							/>
							<p>Styling & Finishing</p>
						</div>
						<div className="flex justify-start items-center gap-5 relative left-2 py-1">
							<img
								className="w-10 h-10 rounded-lg bg-gray-400"
								src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/minis_d180ae06-7534-4ede-ba40-c4bb80efd1cc_300x.gif?v=1632349163"
								alt="mobile link img"
							/>
							<p>Minis</p>
						</div>
						<div className="line-container relative my-4">
							<a className="hover:text-[#fabdbd] text-sm font-semibold underline hover:no-underline" href="/#">
								VIEW ALL NEW ARRIVALS
							</a>
							<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
						</div>
					</div>
				)}
			</React.Fragment>
		</>
	);
};

export default MobileNavbarLinks;
