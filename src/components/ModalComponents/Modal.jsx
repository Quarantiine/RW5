import { useContext, useState } from "react";
import { useModalSlideContentCtx, useModalSlideContext, useOpenCloseModalCtx } from "../../App";
import ModalSlide from "./ModalSlide";

const Modal = () => {
	const { openCloseModal, setOpenCloseModel } = useOpenCloseModalCtx();
	const [SMSImages1, SMSImages2, SMSImages3, SMSImages4, SMSImages5, SMSImages6, SMSImages7, SMSImages8, SMSImages9] =
		useModalSlideContext();
	const {
		slideModal1,
		slideModal2,
		slideModal3,
		slideModal4,
		slideModal5,
		slideModal6,
		slideModal7,
		slideModal8,
		slideModal9,
	} = useModalSlideContentCtx();
	const modalSlideContent = [
		{
			image: SMSImages1,
			text1: "Oily, balanced or dry hair? Luseta has got you covered! 😉",
			text2: "We made a cheat sheet for your hair needs with our special duo blends.",
			text3: "Swipe left to know more ✨",
			text4:
				"We're here for you in any hair problems you're in. Find the perfect hair care through our website. Link in bio.👆🏼",
			hashTags:
				"#haircare #instahair #beauty #hair #hairstyles #hairinspo #parabenfree #hairgoals #sulfatefree #glutenfree #stronghair #haircare #beauty #hairserum #deepconditioning #teatree #mint #castoroil #hemp #macadamia #arganoil",
			tags: "LUSETABEAUTY // INSTAGRAM // 15 DECEMBER 2022",
		},
		{
			image: null,
			text1: "",
			text2: "",
			text3: "",
			text4: "",
			hashTags: "",
			tags: "",
		},
	];

	return (
		<>
			{openCloseModal && (
				<>
					<div onClick={() => setOpenCloseModel(false)} className="bg-[#746363B3] w-full h-full fixed z-[200]"></div>
					<div className="flex fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[201] w-[80%] lg:w-[60%] h-[95%] justify-center items-center bg-black">
						<div className="w-full h-full bg-white p-5">
							{slideModal1 && (
								<ModalSlide
									image={SMSImages1}
									text1={modalSlideContent[0].text1}
									text2={modalSlideContent[0].text2}
									text3={modalSlideContent[0].text3}
									text4={modalSlideContent[0].text4}
									hashTags={modalSlideContent[0].hashTags}
									tags={modalSlideContent[0].tags}
								/>
							)}
							{slideModal2 && (
								<ModalSlide
									image={SMSImages2}
									text1={modalSlideContent[1].text1}
									text2={modalSlideContent[1].text2}
									text3={modalSlideContent[1].text3}
									text4={modalSlideContent[1].text4}
									hashTags={modalSlideContent[1].hashTags}
									tags={modalSlideContent[1].tags}
								/>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default Modal;
