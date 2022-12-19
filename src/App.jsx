import { createContext, useContext, useState } from "react";
import Carousel1 from "./components/CarouselComponents/CarouselSection1/Carousel1";
import Carousel2 from "./components/CarouselComponents/CarouselSection2/Carousel2";
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

function Body() {
	const SMSImages = [
		"https://scontent.cdninstagram.com/v/t39.30808-6/319102519_5951872891503821_5159539415059999284_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=CD0fc7nMzPYAX948YKP&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCjQIVZs9Qoq32FuzTL0mBiKcT4DqlI4LN-hBJ0e5faPA&oe=63A1CFF6",
		"https://scontent.cdninstagram.com/v/t39.30808-6/319238325_5951837401507370_7786044835519186172_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rBOEtr__G10AX-AxBl4&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfA9xNPAPHlbgrQBB8B2QjsrMmzg-mQxLOBQlBcS7x5wYw&oe=63A2D822",
		"https://scontent.cdninstagram.com/v/t39.30808-6/318415746_5939679936056450_7984577288041872574_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iu5-eQptIkkAX-z7CA8&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCfpxdSgqqYT--pDm58ZvzlIO_nApBf9N3cuEZsdBIxgA&oe=63A1FDB8",
		"https://scontent.cdninstagram.com/v/t39.30808-6/318634856_5939661292724981_7483425749109891517_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=WlUKn6Q1rxUAX-niu7a&_nc_oc=AQkSz9qIurOnkczfNERKsCwk0JPQ1a6uKxFkX0jQV5vx47qHVageFzw7rnddew0sQBU&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfByh_LPMmQ_7NvH7FUpdkcRRL9oM4TF3iYJsLlR6glGdw&oe=63A2066B",
		"https://scontent.cdninstagram.com/v/t39.30808-6/319017327_5951949088162868_1217763189800073434_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=zEDmZ43AySQAX93n1mS&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfDOy6mNYzpeokvs0Mu1BLZCiD1wDIrJCfDdS91oHgHydw&oe=63A246BE",
		"https://scontent.cdninstagram.com/v/t39.30808-6/319076638_5951826878175089_1917445319181507940_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=vE8eKkvmMu0AX891xtA&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBSPgj7V1fqrmu6XzSM4DaHDLTsr7eg-Ob8B7OR5cvXZw&oe=63A26BDF",
		"https://scontent.cdninstagram.com/v/t39.30808-6/319115445_5951955911495519_3108085581204518116_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=5Iuy9nQhFgkAX-aCaRV&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfALsDwwmzNLeR3FUfZL3Ew3rNdT5p7kYOot6PmD0gSnwQ&oe=63A5810E",
		"https://scontent.cdninstagram.com/v/t39.30808-6/318477295_5944345928923184_4657238263232465832_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=8k6Iwe5rmqwAX-xB17w&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCm6lJtc0Ys4DfHoS3oDiDdrGLkpJO8LhgtCJWyF8HtPA&oe=63A34410",
		"https://scontent.cdninstagram.com/v/t39.30808-6/318236931_5939651536059290_4631408015035128246_n.png?stp=dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=SZXGE4jwDJoAX_uxOLp&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCDitiAbd5my0N1_blBugfvCxqJ1VyY7xg7qEvOQZCcmw&oe=63A35A49",
	];

	const [openCloseModal, setOpenCloseModel] = useState(false);

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
				</ModalSlideContentCtx.Provider>
			</OpenCloseModalCtx.Provider>
		</ModalSlideContext.Provider>
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
export default Body;
