import { useState } from "react";
import { useModalSlideContext, useModalSlideNumberCtx, useOpenCloseModalCtx } from "../../App";

const ModalSlide = ({ image, text1, text2, text3, text4, hashTags, tags }) => {
	const [slideBtnClick, setSlideBtnClick] = useState(true);
	const [slideBtnClick2, setSlideBtnClick2] = useState(true);
	const { setOpenCloseModel } = useOpenCloseModalCtx();
	const { modalSlideNumber, setModalSlideNumber } = useModalSlideNumberCtx();
	const [
		SMSImages1,
		SMSImages2,
		SMSImages3,
		SMSImages4,
		SMSImages5,
		SMSImages6,
		SMSImages7,
		SMSImages8,
		SMSImages9,
		SMSImages,
	] = useModalSlideContext();

	const forward = () => {
		setSlideBtnClick(true);
		setSlideBtnClick2(false);
		setModalSlideNumber(modalSlideNumber + 1);
		return modalSlideNumber === SMSImages.length - 1 ? setModalSlideNumber(0) : modalSlideNumber;
	};

	const backwards = () => {
		setSlideBtnClick(false);
		setSlideBtnClick2(true);
		setModalSlideNumber(modalSlideNumber - 1);
		return modalSlideNumber === 0 ? setModalSlideNumber(SMSImages.length - 1) : modalSlideNumber;
	};

	return (
		<div className="modal-container grid grid-cols-1 h-full sm:grid-cols-[60%_40%] z-[202] w-full h-[100%] justify-center items-center gap-0 overflow-hidden overflow-y-scroll">
			<img className="h-full w-full object-cover" src={image} alt="modal product img" />
			{/* {loading && <div className="h-full w-full bg-pink-500 animate-pulse duration-[100]"></div>} */}

			<div className="h-full w-full bg-white px-4 flex flex-col justify-start gap-10">
				<div className="flex items-center px-5 pt-3 justify-between select-none">
					<div className="flex justify-center items-center gap-3">
						<span
							onClick={() => {
								backwards();
							}}
							className={`material-symbols-outlined cursor-pointer text-4xl text-black hover:text-pink-300`}
						>
							arrow_back_ios
						</span>
						<span
							onClick={() => {
								forward();
							}}
							className={`material-symbols-outlined cursor-pointer text-4xl text-black hover:text-pink-300`}
						>
							arrow_forward_ios
						</span>
					</div>
					<span
						onClick={() => setOpenCloseModel(false)}
						className="material-symbols-outlined text-black cursor-pointer text-4xl"
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

					<div className="text-center flex flex-wrap justify-center items-center gap-5 mt-5">
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
