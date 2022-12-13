import { useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FreeShippingPopUp = () => {
	const [hide, setHide] = useState(false);
	const popUp = useRef();

	const timedClose = () => {
		setTimeout(() => setHide(true), 1300);
		gsap.context(() => {
			gsap.to(".pop-up-container", {
				height: 0,
				overflow: "hidden",
				opacity: 0,
				duration: 0.2,
			});
		});
	};

	return (
		<>
			{!hide && (
				<div
					ref={popUp}
					className="pop-up-container relative bg-gray-100 text-black border w-full h-10 flex justify-center items-center"
				>
					<p>Free shipping on orders over $35</p>
					<span onClick={timedClose} className="cursor-pointer material-symbols-outlined absolute right-10">
						close
					</span>
				</div>
			)}
		</>
	);
};

export default FreeShippingPopUp;
