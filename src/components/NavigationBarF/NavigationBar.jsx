import { useEffect, useState, useRef } from "react";
import DesktopTabletNavigationBar from "./DesktopTabletNavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";

function NavigationBar() {
  const [navLinkHover, setNavLinkHover] = useState(false);
  const dropdowBox = useRef();

  const navbarTailwind = "z-[-1] translate-y-20 opacity-0";
  const navbarTailwind2 = "z-[0] translate-y-0 opacity-1";

  return (
    <>
      <div className="bg-black w-full h-fit py-4 flex justify-center text-white">
        <div className="w-[95%] sm:w-[80%] mx-auto flex lg:flex-row flex-col lg:justify-between justify-center gap-2 items-center">
          <div className="flex justify-center items-center gap-5">
            <div className="flex justify-center items-center text-[14px] gap-2">
              <span className="material-symbols-outlined text-[16px]">map</span>
              <p>410 S Missouri St, Indianapolis, IN 46225, USA</p>
            </div>
            <div className="flex justify-center items-center text-[14px] gap-2">
              <span className="material-symbols-outlined text-[16px]">
                call
              </span>
              <p className="hover:text-[#ff4157] cursor-pointer">
                1 777 999 5000
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center [&>img]:w-4 gap-7">
            <img
              className="cursor-pointer"
              src="\images\icons8-twitter-60.png"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="\images\icons8-facebook-f-48.png"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="\images\icons8-instagram-100.png"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="\images\icons8-whatsapp-100.png"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="\images\icons8-snapchat-96.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="main-nav relative w-full">
        <div className="z-[50] bg-white w-full h-fit flex justify-around items-center">
          <MobileNavigationBar
            setNavLinkHover={setNavLinkHover}
            dropdowBox={dropdowBox}
            navLinkHover={navLinkHover}
            navbarTailwind2={navbarTailwind2}
            navbarTailwind={navbarTailwind}
          />
          <DesktopTabletNavigationBar
            setNavLinkHover={setNavLinkHover}
            dropdowBox={dropdowBox}
            navLinkHover={navLinkHover}
            navbarTailwind2={navbarTailwind2}
            navbarTailwind={navbarTailwind}
            onClick={() => {
              setNavLinkHover(true);
            }}
          />
        </div>
      </div>
    </>
  );
}
export default NavigationBar;
