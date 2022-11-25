import Navbar from "./components/Navber";
import HeaderSection from "./components/HeaderSection";
import ContentSection1 from "./components/ContentSection1";
import ContentSection2 from "./components/ContentSection2/ContentSection2";
import ContentSection3 from "./components/ContentSection3";
import ContentSection4 from "./components/ContentSection4";

function Body() {
  return (
    <div className="main-body-container">
      <Navbar />
      <div className="inner-body-container relative top-[170px] pb-[100px] z-1">
        <HeaderSection />
        <div className="content-container">
          <ContentSection1 />
          <ContentSection2 />
          <ContentSection3 />
          <div
            className={`mt-[800px] sm:mt-[1300px] md:mt-[1200px] lg:mt-[1100px] xl:mt-[1000px]`}
          >
            <ContentSection4 />
          </div>
        </div>
        <p className="text-center mt-52 text-7xl font-mono tracking-[100px]">THE END</p>
      </div>
    </div>
  );
}
export default Body;
