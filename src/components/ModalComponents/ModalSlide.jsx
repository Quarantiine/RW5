import { useState } from "react";
import { useOpenCloseModalCtx } from "../../App";

const ModalSlide = ({ image, text1, text2, text3, text4, hashTags, tags }) => {
	const { setOpenCloseModel } = useOpenCloseModalCtx();
	const [loading, setLoading] = useState(true);

	return (
		<div className="modal-container grid grid-cols-[60%_40%] z-[202] w-full h-[100%] justify-center items-center gap-0 overflow-hidden overflow-y-scroll">
			<img onLoad={() => setLoading(false)} className="h-full object-cover" src={image} alt="modal product img" />
			{loading && <div className="h-full w-full bg-pink-500 animate-pulse duration-[100]"></div>}

			<div className="h-full w-full bg-white px-4 flex flex-col justify-start gap-10">
				<div className="flex items-center px-5 pt-3 justify-between select-none">
					<div className="flex justify-center items-center gap-3 text-black">
						<span className="material-symbols-outlined cursor-pointer text-4xl">arrow_back_ios</span>
						<span className="material-symbols-outlined cursor-pointer text-4xl">arrow_forward_ios</span>
					</div>
					<span
						onClick={() => setOpenCloseModel(false)}
						class="material-symbols-outlined text-black cursor-pointer text-4xl"
					>
						close
					</span>
				</div>

				<div className="flex flex-col">
					<div className="text-center text-[10px] sm:text-sm flex flex-col gap-7">
						{text1 && <p className="text-black">{text1}</p>}
						{text2 && <p className="text-black">{text2}</p>}
						{text3 && <p className="text-black">{text3}</p>}
						{text4 && <p className="text-black">{text4}</p>}
						{hashTags && <p className="text-black font-semibold">{hashTags}</p>}
						{tags && <p className="text-gray-500 cursor-pointer">{tags}</p>}
					</div>

					<div className="text-center flex flex-wrap justify-center items-center gap-5">
						<img className="w-6 cursor-pointer" src="/images/icons8-facebook.png" alt="social icon" />
						<img className="w-6 cursor-pointer" src="/images/icons8-gmail.png" alt="social icon" />
						<img className="w-6 cursor-pointer" src="/images/icons8-twitter.png" alt="social icon" />
						<img className="w-6 cursor-pointer" src="/images/icons8-pinterest.png" alt="social icon" />
						<span className="material-symbols-outlined text-black font-bold cursor-pointer">link</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalSlide;
