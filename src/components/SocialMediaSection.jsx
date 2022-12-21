import { useEffect } from "react";
import { useModalSlideContentCtx, useModalSlideContext, useModalSlideNumberCtx, useOpenCloseModalCtx } from "../App";

const SocialMediaSection = () => {
	const [SMSImages1, SMSImages2, SMSImages3, SMSImages4, SMSImages5, SMSImages6, SMSImages7, SMSImages8, SMSImages9] =
		useModalSlideContext();
	const {
		setSlideModal1,
		setSlideModal2,
		setSlideModal3,
		setSlideModal4,
		setSlideModal5,
		setSlideModal6,
		setSlideModal7,
		setSlideModal8,
		setSlideModal9,
	} = useModalSlideContentCtx();

	const { openCloseModal, setOpenCloseModel } = useOpenCloseModalCtx();
	const { modalSlideNumber, setModalSlideNumber } = useModalSlideNumberCtx();

	const modal1Content = () => {
		setSlideModal1(true);
		setSlideModal2(false);
		setSlideModal3(false);
		setSlideModal4(false);
		setSlideModal5(false);
		setSlideModal6(false);
		setSlideModal7(false);
		setSlideModal8(false);
		setSlideModal9(false);
		setModalSlideNumber(0);
	};
	const modal2Content = () => {
		setSlideModal1(false);
		setSlideModal2(true);
		setSlideModal3(false);
		setSlideModal4(false);
		setSlideModal5(false);
		setSlideModal6(false);
		setSlideModal7(false);
		setSlideModal8(false);
		setSlideModal9(false);
		setModalSlideNumber(1);
	};
	const modal3Content = () => {
		setSlideModal1(false);
		setSlideModal2(false);
		setSlideModal3(true);
		setSlideModal4(false);
		setSlideModal5(false);
		setSlideModal6(false);
		setSlideModal7(false);
		setSlideModal8(false);
		setSlideModal9(false);
		setModalSlideNumber(2);
	};
	const modal4Content = () => {
		setSlideModal1(false);
		setSlideModal2(false);
		setSlideModal3(false);
		setSlideModal4(true);
		setSlideModal5(false);
		setSlideModal6(false);
		setSlideModal7(false);
		setSlideModal8(false);
		setSlideModal9(false);
		setModalSlideNumber(3);
	};
	const modal5Content = () => {
		setSlideModal1(false);
		setSlideModal2(false);
		setSlideModal3(false);
		setSlideModal4(false);
		setSlideModal5(true);
		setSlideModal6(false);
		setSlideModal7(false);
		setSlideModal8(false);
		setSlideModal9(false);
		setModalSlideNumber(4);
	};
	const modal6Content = () => {
		setSlideModal1(false);
		setSlideModal2(false);
		setSlideModal3(false);
		setSlideModal4(false);
		setSlideModal5(false);
		setSlideModal6(true);
		setSlideModal7(false);
		setSlideModal8(false);
		setSlideModal9(false);
		setModalSlideNumber(5);
	};
	const modal7Content = () => {
		setSlideModal1(false);
		setSlideModal2(false);
		setSlideModal3(false);
		setSlideModal4(false);
		setSlideModal5(false);
		setSlideModal6(false);
		setSlideModal7(true);
		setSlideModal8(false);
		setSlideModal9(false);
		setModalSlideNumber(6);
	};
	const modal8Content = () => {
		setSlideModal1(false);
		setSlideModal2(false);
		setSlideModal3(false);
		setSlideModal4(false);
		setSlideModal5(false);
		setSlideModal6(false);
		setSlideModal7(false);
		setSlideModal8(true);
		setSlideModal9(false);
		setModalSlideNumber(7);
	};
	const modal9Content = () => {
		setSlideModal1(false);
		setSlideModal2(false);
		setSlideModal3(false);
		setSlideModal4(false);
		setSlideModal5(false);
		setSlideModal6(false);
		setSlideModal7(false);
		setSlideModal8(false);
		setSlideModal9(true);
		setModalSlideNumber(8);
	};

	useEffect(() => {
		if (!openCloseModal) {
			setSlideModal1(false);
			setSlideModal2(false);
			setSlideModal3(false);
			setSlideModal4(false);
			setSlideModal5(false);
			setSlideModal6(false);
			setSlideModal7(false);
			setSlideModal8(false);
			setSlideModal9(false);
			setModalSlideNumber(0);
		}
	}, [
		openCloseModal,
		setSlideModal1,
		setSlideModal2,
		setSlideModal3,
		setSlideModal4,
		setSlideModal5,
		setSlideModal6,
		setSlideModal7,
		setSlideModal8,
		setSlideModal9,
		setModalSlideNumber,
	]);

	return (
		<>
			<div className="mt-32 flex flex-col justify-center items-center w-[80%] mx-auto text-black gap-10">
				<h1 className="text-4xl text-center">Insta-shop for that Instant Pop</h1>
				<div className="grid sm:grid-cols-3 gap-10 sm:gap-0 justify-center items-center">
					<div className="h-full rounded-xl sm:rounded-none sm:rounded-l-xl overflow-hidden grid grid-cols-2 justify-center items-center">
						<div
							onClick={() => {
								setOpenCloseModel(true);
								modal1Content();
								modalSlideNumber === 0 && modal1Content();
							}}
							className="img-1 w-full h-full overflow-hidden relative"
						>
							<img className="w-full h-full object-cover" src={SMSImages1} alt="social section img" />
							<div className="flex justify-center items-center absolute top-0 w-full h-full bg-black hover:opacity-80 opacity-0 cursor-pointer">
								<img src="\images\icons8-instagram.svg" alt="social icon" />
							</div>
						</div>
						<div
							onClick={() => {
								setOpenCloseModel(true);
								modal2Content();
								modalSlideNumber === 1 && modal2Content();
							}}
							className="w-full h-full overflow-hidden relative"
						>
							<img className="w-full h-full object-cover" src={SMSImages2} alt="social section img" />
							<div className="flex justify-center items-center absolute top-0 w-full h-full bg-black hover:opacity-80 opacity-0 cursor-pointer">
								<img src="\images\icons8-instagram.svg" alt="social icon" />
							</div>
						</div>
						<div
							onClick={() => {
								setOpenCloseModel(true);
								modal3Content();
								modalSlideNumber === 2 && modal3Content();
							}}
							className="w-full h-full overflow-hidden relative"
						>
							<img className="w-full h-full object-cover" src={SMSImages3} alt="social section img" />
							<div className="flex justify-center items-center absolute top-0 w-full h-full bg-black hover:opacity-80 opacity-0 cursor-pointer">
								<img src="\images\icons8-instagram.svg" alt="social icon" />
							</div>
						</div>
						<div
							onClick={() => {
								setOpenCloseModel(true);
								modal4Content();
								modalSlideNumber === 3 && modal4Content();
							}}
							className="w-full h-full overflow-hidden relative"
						>
							<img className="w-full h-full object-cover" src={SMSImages4} alt="social section img" />
							<div className="flex justify-center items-center absolute top-0 w-full h-full bg-black hover:opacity-80 opacity-0 cursor-pointer">
								<img src="\images\icons8-instagram.svg" alt="social icon" />
							</div>
						</div>
					</div>
					<div
						onClick={() => {
							setOpenCloseModel(true);
							modal5Content();
							modalSlideNumber === 4 && modal5Content();
						}}
						className="rounded-xl sm:rounded-none overflow-hidden relative grid grid-cols-1 justify-center items-center"
					>
						<img className="w-full h-full mx-auto" src={SMSImages5} alt="social section img" />
						<div className="flex flex-col text-sm justify-center items-center absolute top-0 w-full h-full bg-black opacity-80 cursor-pointer">
							<p className="text-white">SHOP OUR INSTAGRAM</p>
							<img src="\images\icons8-instagram.svg" alt="social icon" />
						</div>
					</div>
					<div className="h-full rounded-xl sm:rounded-none sm:rounded-r-xl overflow-hidden grid grid-cols-2 justify-center items-center">
						<div
							onClick={() => {
								setOpenCloseModel(true);
								modal6Content();
								modalSlideNumber === 5 && modal6Content();
							}}
							className="w-full h-full overflow-hidden relative"
						>
							<img className="w-full h-full object-cover" src={SMSImages6} alt="social section img" />
							<div className="flex justify-center items-center absolute top-0 w-full h-full bg-black hover:opacity-80 opacity-0 cursor-pointer">
								<img src="\images\icons8-instagram.svg" alt="social icon" />
							</div>
						</div>
						<div
							onClick={() => {
								setOpenCloseModel(true);
								modal7Content();
								modalSlideNumber === 6 && modal7Content();
							}}
							className="w-full h-full overflow-hidden relative"
						>
							<img className="w-full h-full object-cover" src={SMSImages7} alt="social section img" />
							<div className="flex justify-center items-center absolute top-0 w-full h-full bg-black hover:opacity-80 opacity-0 cursor-pointer">
								<img src="\images\icons8-instagram.svg" alt="social icon" />
							</div>
						</div>
						<div
							onClick={() => {
								setOpenCloseModel(true);
								modal8Content();
								modalSlideNumber === 7 && modal8Content();
							}}
							className="w-full h-full overflow-hidden relative"
						>
							<img className="w-full h-full object-cover" src={SMSImages8} alt="social section img" />
							<div className="flex justify-center items-center absolute top-0 w-full h-full bg-black hover:opacity-80 opacity-0 cursor-pointer">
								<img src="\images\icons8-instagram.svg" alt="social icon" />
							</div>
						</div>
						<div
							onClick={() => {
								setOpenCloseModel(true);
								modal9Content();
								modalSlideNumber === 8 && modal9Content();
							}}
							className="w-full h-full overflow-hidden relative"
						>
							<img className="w-full h-full object-cover" src={SMSImages9} alt="social section img" />
							<div className="flex justify-center items-center absolute top-0 w-full h-full bg-black hover:opacity-80 opacity-0 cursor-pointer">
								<img src="\images\icons8-instagram.svg" alt="social icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default SocialMediaSection;
