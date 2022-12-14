import FreeShippingPopUp from "./components/FreeShippingPopUp";
import ParentHeroSection from "./components/HeroComponents/ParentHeroSection";
import ParentNavbar from "./components/NavbarComponents/ParentNavbar";

function Body() {
  return (
    <>
      <div>
        <FreeShippingPopUp />
        <ParentNavbar />
      </div>
      <div>
        <ParentHeroSection />
      </div>
    </>
  );
}
export default Body;
