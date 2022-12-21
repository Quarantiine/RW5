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
		"https://scontent.cdninstagram.com/v/t39.30808-6/315590712_5881291738561937_3645521752237890134_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_4Y12Ej5oAcAX_MPoXY&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfB-UmoMrrOds_0PY-1l3pcxTW7g67jY7smYIj9_0nsu-g&oe=63A788FF",
		"https://scontent.cdninstagram.com/v/t39.30808-6/319238325_5951837401507370_7786044835519186172_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rBOEtr__G10AX-AxBl4&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfA9xNPAPHlbgrQBB8B2QjsrMmzg-mQxLOBQlBcS7x5wYw&oe=63A2D822",
		"https://scontent.cdninstagram.com/v/t39.30808-6/315593067_5881302905227487_8342548703236487455_n.png?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iRf7VXuGfZoAX9tg78T&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAAOjXjzs_Q3dLr0CfVHDryKXCISD3Xhq4eM8q9mGwzvg&oe=63A751DB",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/1Biotin_Collagenduo_1024x1024.jpg?v=1666826360",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/Biotin_Collagen_5259afee-6953-42e6-9a44-29ad12bc4e4b_1024x1024.jpg?v=1666823083s",
		"//cdn.shopify.com/s/files/1/0010/9330/4381/products/G_20LUSETA_206_1024x1024.gif?v=1653665136",
		"https://scontent.cdninstagram.com/v/t39.30808-6/319115445_5951955911495519_3108085581204518116_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=5Iuy9nQhFgkAX-aCaRV&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfALsDwwmzNLeR3FUfZL3Ew3rNdT5p7kYOot6PmD0gSnwQ&oe=63A5810E",
		"https://scontent.cdninstagram.com/v/t39.30808-6/318477295_5944345928923184_4657238263232465832_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=8k6Iwe5rmqwAX-xB17w&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCm6lJtc0Ys4DfHoS3oDiDdrGLkpJO8LhgtCJWyF8HtPA&oe=63A34410",
		"https://scontent.cdninstagram.com/v/t39.30808-6/318236931_5939651536059290_4631408015035128246_n.png?stp=dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=SZXGE4jwDJoAX_uxOLp&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCDitiAbd5my0N1_blBugfvCxqJ1VyY7xg7qEvOQZCcmw&oe=63A35A49",
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
