import { createContext, useContext, useState } from "react";
import Carousel1 from "./components/CarouselComponents/CarouselSection1/Carousel1";
import Carousel2 from "./components/CarouselComponents/CarouselSection2/Carousel2";
import Footer from "./components/Footer";
import FreeShippingPopUp from "./components/FreeShippingPopUp";
import ParentHeroSection from "./components/HeroComponents/ParentHeroSection";
import MarqueeBanner from "./components/MarqueeComponents/MarqueeBanner";
import Modal from "./components/ModalComponents/Modal";
import ParentNavbar from "./components/NavbarComponents/ParentNavbar";
import QuestionSection from "./components/QuestionSection";
import SafetySection from "./components/SafetySection";
import SocialMediaSection from "./components/SocialMediaSection";
import Sponsors from "./components/Sponsors";
import WhySection from "./components/WhySection";

const ModalSlideContext = createContext();
const OpenCloseModalCtx = createContext();
const ModalSlideContentCtx = createContext();
const ModalSlideNumberCtx = createContext();

function Body() {
	const SMSImages = [
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/052622KeratinSmoothDuo_1024x1024.jpg?v=1653588765",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/1080luseta_product_final-9a_1024x1024.jpg?v=1669676735",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/G20LUSETA2010_1024x1024.gif?v=1669760166",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/1Biotin_Collagenduo_1024x1024.jpg?v=1666826360",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/Biotin_Collagen_5259afee-6953-42e6-9a44-29ad12bc4e4b_1024x1024.jpg?v=1666823083s",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/G_20LUSETA_206_1024x1024.gif?v=1653665136",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/keratinserum_1024x1024.jpg?v=1669755133",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/BiotinB-Complex_1024x1024.jpg?v=1636159273",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/BiotinBComplexDuo_1024x1024.jpg?v=1632344589",
	];

	const [openCloseModal, setOpenCloseModel] = useState(false);
	const [modalSlideNumber, setModalSlideNumber] = useState(0);

	const [slideModal1, setSlideModal1] = useState(false);
	const [slideModal2, setSlideModal2] = useState(false);
	const [slideModal3, setSlideModal3] = useState(false);
	const [slideModal4, setSlideModal4] = useState(false);
	const [slideModal5, setSlideModal5] = useState(false);
	const [slideModal6, setSlideModal6] = useState(false);
	const [slideModal7, setSlideModal7] = useState(false);
	const [slideModal8, setSlideModal8] = useState(false);
	const [slideModal9, setSlideModal9] = useState(false);

	return (
		<ModalSlideNumberCtx.Provider value={{ modalSlideNumber, setModalSlideNumber }}>
			<ModalSlideContext.Provider
				value={[
					SMSImages[0],
					SMSImages[1],
					SMSImages[2],
					SMSImages[3],
					SMSImages[4],
					SMSImages[5],
					SMSImages[6],
					SMSImages[7],
					SMSImages[8],
					SMSImages,
				]}
			>
				<OpenCloseModalCtx.Provider value={{ openCloseModal, setOpenCloseModel }}>
					<ModalSlideContentCtx.Provider
						value={{
							slideModal1,
							setSlideModal1,
							slideModal2,
							setSlideModal2,
							slideModal3,
							setSlideModal3,
							slideModal4,
							setSlideModal4,
							slideModal5,
							setSlideModal5,
							slideModal6,
							setSlideModal6,
							slideModal7,
							setSlideModal7,
							slideModal8,
							setSlideModal8,
							slideModal9,
							setSlideModal9,
						}}
					>
						<div className="mb-20">
							<Modal />
							<div className="fixed w-full z-50">
								<FreeShippingPopUp />
								<ParentNavbar />
							</div>
							<div className="relative top-20">
								<ParentHeroSection />
								<Sponsors />
							</div>
							<Carousel1 />
							<MarqueeBanner />
							<Carousel2 />
							<WhySection />
							<QuestionSection />
							<SafetySection />
							<SocialMediaSection />
						</div>
						<Footer />
					</ModalSlideContentCtx.Provider>
				</OpenCloseModalCtx.Provider>
			</ModalSlideContext.Provider>
		</ModalSlideNumberCtx.Provider>
	);
}
export function useModalSlideContext() {
	return useContext(ModalSlideContext);
}
export function useOpenCloseModalCtx() {
	return useContext(OpenCloseModalCtx);
}
export function useModalSlideContentCtx() {
	return useContext(ModalSlideContentCtx);
}
export function useModalSlideNumberCtx() {
	return useContext(ModalSlideNumberCtx);
}
export default Body;
