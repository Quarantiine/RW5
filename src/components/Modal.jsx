import React from "react";

const Modal = () => {
	return (
		<>
			<div className="bg-black w-full h-full opacity-70 fixed z-[200]"></div>
			<div className="flex fixed z-[201] w-full h-full justify-center items-center">
				<div className=" w-[850px] h-[550px] bg-white"></div>
			</div>
		</>
	);
};

export default Modal;
