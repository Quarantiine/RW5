import FreeShippingPopUp from "./components/FreeShippingPopUp";
import ParentHeroSection from "./components/HeroComponents/ParentHeroSection";
import ParentNavbar from "./components/NavbarComponents/ParentNavbar";
import Sponsors from "./components/Sponsors";

function Body() {
  return (
    <>
      <div className="fixed w-full z-50">
        <FreeShippingPopUp />
        <ParentNavbar />
      </div>
      <div className="relative top-20">
        <ParentHeroSection />
        <Sponsors />
      </div>

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
