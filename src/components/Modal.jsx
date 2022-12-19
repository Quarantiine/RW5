import React from "react";

const Modal = () => {
	return (
		<>
			<div className="bg-black w-full h-full opacity-70 fixed z-[200]"></div>
			<div className="flex fixed z-[201] w-full h-full justify-center items-center">
				<div className=" w-[80%] xl:w-[60%] h-[95%] bg-white"></div>
			</div>
		</>
	);
};

export default Modal;
