import Carousel1 from "./components/CarouselComponents/CarouselSection1/Carousel1";
import Carousel2 from "./components/CarouselComponents/CarouselSection2/Carousel2";
import FreeShippingPopUp from "./components/FreeShippingPopUp";
import ParentHeroSection from "./components/HeroComponents/ParentHeroSection";
import MarqueeBanner from "./components/MarqueeComponents/MarqueeBanner";
import Modal from "./components/Modal";
import ParentNavbar from "./components/NavbarComponents/ParentNavbar";
import QuestionSection from "./components/QuestionSection";
import SafetySection from "./components/SafetySection";
import SocialMediaSection from "./components/SocialMediaSection";
import Sponsors from "./components/Sponsors";
import WhySection from "./components/WhySection";

function Body() {
	return (
		<>
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

			<>
				<br />
				<br />
				<br />
				<br />
			</>
		</>
	);
}
export default Body;
