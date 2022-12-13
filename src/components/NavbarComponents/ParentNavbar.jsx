import { useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import NewArrivalsCategory from "./NewArrivalsCategory";
import BestSellersCategory from "./BestSellersCategory";
import ValueSetsCategory from "./ValueSetsCategory";
import HairNeedsCategory from "./HairNeedsCategory";
import CollectionCategory from "./CollectionCategory";
import ProductTypesCategory from "./ProductTypesCategory";

const ParentNavbar = () => {
	const [shopDropDown, setShopDropDown] = useState(false);
	const [newArrivalsLink, setNewArrivalsLink] = useState(false);
	const [newArrivalsLink2, setNewArrivalsLink2] = useState(false);
	const [newArrivalsLink3, setNewArrivalsLink3] = useState(false);
	const [newArrivalsLink4, setNewArrivalsLink4] = useState(false);
	const [newArrivalsLink5, setNewArrivalsLink5] = useState(false);
	const [newArrivalsLink6, setNewArrivalsLink6] = useState(false);
	const shopDropDownRef = useRef();

	const shopMouseEnter = () => {
		setShopDropDown(true);
		clearTimeout(shopDropDownRef.current);
	};
	const shopMouseLeave = () => {
		shopDropDownRef.current = setTimeout(() => {
			gsap.context(() => {
				gsap.to(".shop-dropdown", {
					opacity: 0,
				});
			});
			setTimeout(() => setShopDropDown(false), 400);
		}, 300);
	};

	const linkDetectionSystem = () => {
		setNewArrivalsLink(true);
		setNewArrivalsLink2(false);
		setNewArrivalsLink3(false);
		setNewArrivalsLink4(false);
		setNewArrivalsLink5(false);
		setNewArrivalsLink6(false);
	};
	const linkDetectionSystem2 = () => {
		setNewArrivalsLink(false);
		setNewArrivalsLink2(true);
		setNewArrivalsLink3(false);
		setNewArrivalsLink4(false);
		setNewArrivalsLink5(false);
		setNewArrivalsLink6(false);
	};
	const linkDetectionSystem3 = () => {
		setNewArrivalsLink(false);
		setNewArrivalsLink2(false);
		setNewArrivalsLink3(true);
		setNewArrivalsLink4(false);
		setNewArrivalsLink5(false);
		setNewArrivalsLink6(false);
	};
	const linkDetectionSystem4 = () => {
		setNewArrivalsLink(false);
		setNewArrivalsLink2(false);
		setNewArrivalsLink3(false);
		setNewArrivalsLink4(true);
		setNewArrivalsLink5(false);
		setNewArrivalsLink6(false);
	};
	const linkDetectionSystem5 = () => {
		setNewArrivalsLink(false);
		setNewArrivalsLink2(false);
		setNewArrivalsLink3(false);
		setNewArrivalsLink4(false);
		setNewArrivalsLink5(true);
		setNewArrivalsLink6(false);
	};
	const linkDetectionSystem6 = () => {
		setNewArrivalsLink(false);
		setNewArrivalsLink2(false);
		setNewArrivalsLink3(false);
		setNewArrivalsLink4(false);
		setNewArrivalsLink5(false);
		setNewArrivalsLink6(true);
	};

	return (
		<>
			<div className="bg-white border-b w-full h-20 flex justify-evenly items-center gap-5 text-black">
				<a href="/">
					<img
						className="w-48 cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/Luseta-logo.svg?v=163737035158898480941661964644"
						alt="Logo"
					/>
				</a>
				<div className="flex gap-5">
					<div className="line-container relative">
						<a
							ref={shopDropDownRef}
							onMouseOver={() => {
								shopMouseEnter();
								setNewArrivalsLink(true);
								setNewArrivalsLink2(false);
								setNewArrivalsLink3(false);
								setNewArrivalsLink4(false);
								setNewArrivalsLink5(false);
								setNewArrivalsLink6(false);
							}}
							onMouseLeave={shopMouseLeave}
							className="hover:text-[#fabdbd] text-sm font-semibold"
							href="/#"
						>
							SHOP
						</a>
						<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
					</div>
					<div className="line-container relative">
						<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
							ABOUT US
						</a>
						<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
					</div>
					<div className="line-container relative">
						<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
							REWARDS
						</a>
						<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
					</div>
					<div className="line-container relative">
						<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
							TESTIMONIALS
						</a>
						<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
					</div>
					<div className="line-container relative">
						<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
							BLOG
						</a>
						<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
					</div>
					<div className="line-container relative">
						<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
							QUIZ
						</a>
						<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
					</div>
				</div>
				<div className="flex gap-5">
					<span className="material-symbols-outlined cursor-pointer text-lg">favorite</span>
					<span className="material-symbols-outlined cursor-pointer text-lg">search</span>
					<span className="material-symbols-outlined cursor-pointer text-lg">person_filled</span>
					<span className="material-symbols-outlined cursor-pointer text-lg">shopping_bag</span>
				</div>
			</div>
			{shopDropDown && (
				<div
					onMouseOver={shopMouseEnter}
					onMouseLeave={shopMouseLeave}
					className="shop-dropdown bg-white border-t-1 shadow-md h-fit absolute w-full flex flex-col text-black py-14"
				>
					<div className="flex gap-24 justify-center items-start w-[100%] h-full mx-auto">
						<div className="flex flex-col justify-center items-start gap-5">
							<a
								onMouseOver={linkDetectionSystem}
								className={`${newArrivalsLink ? "text-black" : "text-gray-400"} text-sm hover:text-black`}
								href="/#"
							>
								NEW ARRIVALS
							</a>
							<a
								onMouseOver={linkDetectionSystem2}
								className={`${newArrivalsLink2 ? "text-black" : "text-gray-400"} text-sm hover:text-black`}
								href="/#"
							>
								BESTSELLERS
							</a>
							<a
								onMouseOver={linkDetectionSystem3}
								className={`${newArrivalsLink3 ? "text-black" : "text-gray-400"} text-sm hover:text-black`}
								href="/#"
							>
								VALUE SETS
							</a>
							<a
								onMouseOver={linkDetectionSystem4}
								className={`${newArrivalsLink4 ? "text-black" : "text-gray-400"} text-sm hover:text-black`}
								href="/#"
							>
								HAIR NEEDS
							</a>
							<a
								onMouseOver={linkDetectionSystem5}
								className={`${newArrivalsLink5 ? "text-black" : "text-gray-400"} text-sm hover:text-black`}
								href="/#"
							>
								COLLECTIONS
							</a>
							<a
								onMouseOver={linkDetectionSystem6}
								className={`${newArrivalsLink6 ? "text-black" : "text-gray-400"} text-sm hover:text-black`}
								href="/#"
							>
								PRODUCT TYPE
							</a>
						</div>
						{newArrivalsLink && <NewArrivalsCategory />}
						{newArrivalsLink2 && <BestSellersCategory />}
						{newArrivalsLink3 && <ValueSetsCategory />}
						{newArrivalsLink4 && <HairNeedsCategory />}
						{newArrivalsLink5 && <CollectionCategory />}
						{newArrivalsLink6 && <ProductTypesCategory />}
					</div>
					<div className="line-container relative ml-auto -translate-x-10 translate-y-10">
						<a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
							VIEW ALL NEW ARRIVALS
						</a>
						<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
					</div>
				</div>
			)}
		</>
	);
};
export default ParentNavbar;
