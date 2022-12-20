import React from "react";

const Footer = () => {
	return (
		<div className="bg-[#f8f8f8] w-full h-fit flex flex-col xl:flex-row justify-center items-center gap-20 px-10 py-24">
			<div className="flex xl:hidden flex-col gap-4 justify-center items-start">
				<h1 className="text-black text-4xl font-serif font-thin">Get exclusive access & 10% off</h1>
				<div className="flex flex-col gap-2 w-full">
					<p className="text-gray-500 tracking-wider text-[15px]">when you sign up for our newsletter!</p>
					<input
						className="bg-white border py-2 w-full px-5 rounded-lg outline-none placeholder:text-black placeholder:text-[14px]"
						type="email"
						placeholder="Enter your email"
						autoComplete="email"
					/>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<p className="text-[12px] text-black">Birthday</p>
					<input
						type="date"
						className="bg-white border py-2 w-full px-5 rounded-lg outline-none text-black text-[14px]"
					/>
				</div>
				<button className=""></button>
				<div className="flex justify-start sm:justify-start w-full items-center gap-10 sm:gap-24">
					<img
						className="cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/icons-instagram-hover.svg?v=115998646429288716111661964635"
						alt="footer social media icons"
					/>
					<img
						className="cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/icons-facebook-hover.svg?v=44054727152851291471661964633"
						alt="footer social media icons"
					/>
					<img
						className="cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/icons-twitter-hover.svg?v=160998859298682235791661964640"
						alt="footer social media icons"
					/>
					<img
						className="cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/icons-pinterest-hover.svg?v=49190068485695744141661964637"
						alt="footer social media icons"
					/>
				</div>
				<p className="text-[12px]">
					© Luseta Beauty 2022 • <span className="cursor-pointer">Privacy Policy</span> •{" "}
					<span className="cursor-pointer">Terms Of Service</span>
				</p>
			</div>
			<div className="flex flex-wrap justify-start sm:justify-center items-start gap-20">
				<div className="flex flex-col gap-7">
					<h1 className="text-2xl font-serif font-extralight text-gray-400">Shop</h1>
					<div className="flex flex-col gap-4 text-gray-600 text-[13px] font-extralight">
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">By Collection</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">By Hair Need</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">New Arrivals</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Bestsellers</p>
					</div>
				</div>
				<div className="flex flex-col gap-7">
					<h1 className="text-2xl font-serif font-extralight text-gray-400">Learn</h1>
					<div className="flex flex-col gap-4 text-gray-600 text-[13px] font-extralight">
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Testimonials</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Blog</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Rewards</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">FAQ</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Shipping & Returns</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Privacy Policy</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">GDPR</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">CCPA</p>
					</div>
				</div>
				<div className="flex flex-col gap-7">
					<h1 className="text-2xl font-serif font-extralight text-gray-400">Contact</h1>
					<div className="flex flex-col gap-4 text-gray-600 text-[13px] font-extralight">
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Customer Service</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Press Inquiry</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Product Feedback</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Wholesale Inquiry</p>
						<p className="hover:text-[#fabdbd] cursor-pointer tracking-wider">Influencer Inquiry</p>
					</div>
				</div>
			</div>
			<div className="w-[1px] h-[400px] bg-gray-300 hidden xl:block"></div>
			<div className="hidden xl:flex flex-col gap-4 justify-center items-start">
				<h1 className="text-black text-4xl font-serif font-thin">Get exclusive access & 10% off</h1>
				<div className="flex flex-col gap-2 w-full">
					<p className="text-gray-500 tracking-wider text-[15px]">when you sign up for our newsletter!</p>
					<input
						className="bg-white border py-2 w-full px-5 rounded-lg outline-none placeholder:text-black placeholder:text-[14px]"
						type="email"
						placeholder="Enter your email"
						autoComplete="email"
					/>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<p className="text-[12px] text-black">Birthday</p>
					<input
						type="date"
						className="bg-white border py-2 w-full px-5 rounded-lg outline-none text-black text-[14px]"
					/>
				</div>
				<button className=""></button>
				<div className="flex justify-start w-full items-center gap-24">
					<img
						className="cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/icons-instagram-hover.svg?v=115998646429288716111661964635"
						alt="footer social media icons"
					/>
					<img
						className="cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/icons-facebook-hover.svg?v=44054727152851291471661964633"
						alt="footer social media icons"
					/>
					<img
						className="cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/icons-twitter-hover.svg?v=160998859298682235791661964640"
						alt="footer social media icons"
					/>
					<img
						className="cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/icons-pinterest-hover.svg?v=49190068485695744141661964637"
						alt="footer social media icons"
					/>
				</div>
				<p className="text-[12px]">
					© Luseta Beauty 2022 • <span className="cursor-pointer">Privacy Policy</span> •{" "}
					<span className="cursor-pointer">Terms Of Service</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
