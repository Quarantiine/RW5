import React, { useEffect, useState } from "react";
import MobileNavbarLinks from "./MobileNavbarLinks";

const MobileNavBar = ({ setMobileMenu, setHideLinks, hideLinks, mobileMenu }) => {
	const [hideMobileShopLinks, setHideMobileShopLinks] = useState(false);
	const [mobileShopLinks, setMobileShopLinks] = useState(false);
	const [mobileShopSubLinks, setMobileShopSubLinks] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			window.innerWidth > 1024 ? setHideLinks(true) : setHideLinks(false);
			window.innerWidth > 500 ? setMobileShopLinks(true) : setMobileShopLinks(false);
		}, 10);

		return () => clearInterval(interval);
	}, [hideLinks, setHideLinks, mobileShopLinks, setMobileShopLinks]);

	return (
		<>
			<div
				className={`fixed text-black top-0 ${
					hideLinks ? setMobileMenu(false) : null
				} p-10 z-[100] bg-white w-full h-full overflow-y-scroll`}
			>
				<span className="material-symbols-outlined cursor-pointer text-2xl mb-5" onClick={() => setMobileMenu(false)}>
					cancel
				</span>
				<div className="w-full">
					<div className="flex flex-col justify-center items-start gap-3 text-md">
						<React.Fragment>
							<div className="flex flex-col">
								<div className="line-container relative w-fit">
									<a className={`hover:text-[#fabdbd] ${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`} href="/#">
										<p
											onMouseOver={() => setHideMobileShopLinks(true)}
											onMouseLeave={() => setHideMobileShopLinks(false)}
											className="flex justify-start items-center gap-2"
										>
											SHOP <span className="material-symbols-outlined text-sm">east</span>
										</p>
									</a>
									<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
								</div>
								{mobileMenu && (
									<>
										{hideMobileShopLinks && (
											<div className="flex flex-col justify-center items-start gap-0 relative left-3 top-3 pb-5">
												<MobileNavbarLinks
													mobileShopLinks={mobileShopLinks}
													setHideMobileShopLinks={setHideMobileShopLinks}
												/>
											</div>
										)}
									</>
								)}
							</div>
							<div className="line-container relative">
								<a className={`hover:text-[#fabdbd] ${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`} href="/#">
									<p onMouseOver={null} className="flex justify-start items-center gap-2">
										ABOUT US
									</p>
								</a>
								<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
							</div>
							<div className="line-container relative">
								<a className={`hover:text-[#fabdbd] ${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`} href="/#">
									<p onMouseOver={null} className="flex justify-start items-center gap-2">
										REWARDS
									</p>
								</a>
								<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
							</div>
							<div className="line-container relative">
								<a className={`hover:text-[#fabdbd] ${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`} href="/#">
									<p onMouseOver={null} className="flex justify-start items-center gap-2">
										TESTIMONIALS
									</p>
								</a>
								<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
							</div>
							<div className="line-container relative">
								<a className={`hover:text-[#fabdbd] ${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`} href="/#">
									<p onMouseOver={null} className="flex justify-start items-center gap-2">
										BLOG
									</p>
								</a>
								<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
							</div>
							<div className="line-container relative">
								<a className={`hover:text-[#fabdbd] ${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`} href="/#">
									<p onMouseOver={null} className="flex justify-start items-center gap-2">
										QUIZ
									</p>
								</a>
								<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
							</div>
							<div className="line-container relative">
								<a className={`hover:text-[#fabdbd] ${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`} href="/#">
									<p onMouseOver={null} className="flex justify-start items-center gap-2">
										FAQ
									</p>
								</a>
								<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
							</div>
							<div className="line-container relative">
								<a className={`hover:text-[#fabdbd] ${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`} href="/#">
									<p onMouseOver={null} className="flex justify-start items-center gap-2">
										GET IN TOUCH
									</p>
								</a>
								<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
							</div>
							<div className="line-container relative">
								<a className={`hover:text-[#fabdbd] ${mobileShopLinks ? "text-2xl" : "text-sm"} font-thin`} href="/#">
									<p onMouseOver={null} className="flex justify-start items-center gap-2">
										WISHLIST <span className="material-symbols-outlined text-sm">favorite</span>
									</p>
								</a>
								<div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
							</div>
						</React.Fragment>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileNavBar;
