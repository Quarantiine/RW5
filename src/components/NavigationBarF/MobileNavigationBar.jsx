import { useEffect } from "react";
import { useState } from "react";

function MobileNavigationBar({
  setNavLinkHover,
  dropdowBox,
  navLinkHover,
  navbarTailwind2,
  navbarTailwind,
}) {
  const [hamburgerDropDown, setHamburgerDropDown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      return window.innerWidth > 1024 ? setHamburgerDropDown(false) : null;
    }, 100);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="w-full mx-auto justify-between 2xl relative h-24 items-center flex lg:hidden">
        <div className="flex pl-5 justify-center items-center flex-col text-center gap-2 cursor-default">
          <a href="/">
            <img
              className="cursor-pointer"
              src="https://ld-wp73.template-help.com/wordpress/prod_803/v1/wp-content/uploads/2020/02/logo.png"
              alt=""
            />
          </a>
          <p className="font-[Time-new-romen] text-sm text-gray-500 tracking-widest text-center">
            HOTEL
          </p>
        </div>
        <div
          className={`absolute top-[95px] w-full bg-white py-10 ${
            hamburgerDropDown
              ? "top-[95px] z-[0] h-fit overflow-visible opacity-100 cursor-default"
              : "top-[0px] z-[-1] h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center items-center w-[80%] mx-auto sm:w-[80%] [&>p]:cursor-pointer gap-7 text-black">
            <p className="hover:text-[#ff4157] text-[#ff4157]">Home</p>
            <div className="flex justify-center items-center relative">
              <div
                className="flex justify-center items-center gap-3 hover:text-[#ff4157] cursor-pointer"
                // onMouseOver={() => setNavLinkHover(true)}
                onClick={() => setNavLinkHover((btn) => !btn)}
                ref={dropdowBox}
              >
                <p className="">Rooms & Suites</p>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <div
                // onMouseLeave={() => setNavLinkHover(false)}
                onClick={() => setNavLinkHover((btn) => !btn)}
                className={`absolute top-0 left-0 w-full h-72 bg-transparent duration-300 pt-[25px] dropdown-btn ${
                  navLinkHover ? navbarTailwind2 : navbarTailwind
                }`}
              >
                <div className="relative z-[51] h-full bg-[#162541] text-white flex flex-col justify-center items-start gap-5 p-8 w-fit">
                  <p
                    className={`${
                      navLinkHover
                        ? "cursor-pointer hover:text-[#ff4157]"
                        : "cursor-default"
                    }`}
                  >
                    Single Room
                  </p>
                  <p
                    className={`${
                      navLinkHover
                        ? "cursor-pointer hover:text-[#ff4157]"
                        : "cursor-default"
                    }`}
                  >
                    Double Room
                  </p>
                  <p
                    className={`${
                      navLinkHover
                        ? "cursor-pointer hover:text-[#ff4157]"
                        : "cursor-default"
                    }`}
                  >
                    Family Room
                  </p>
                  <p
                    className={`${
                      navLinkHover
                        ? "cursor-pointer hover:text-[#ff4157]"
                        : "cursor-default"
                    }`}
                  >
                    Suite
                  </p>
                </div>
              </div>
            </div>
            <p className="hover:text-[#ff4157]">Dining & Bar</p>
            <p className="hover:text-[#ff4157]">Amenities</p>
            <p className="hover:text-[#ff4157]">Blog</p>
            <p className="hover:text-[#ff4157]">About us</p>
            <p className="hover:text-[#ff4157]">Contacts</p>
            <button className="text-white bg-[#ff4157] hover:bg-[#162541] py-3 px-10 rounded-sm">
              BOOKING
            </button>
          </div>
        </div>
        <span
          className="material-symbols-outlined text-3xl pr-5 text-black select-none cursor-pointer hover:scale-95"
          onClick={() => setHamburgerDropDown((btn) => !btn)}
        >
          {hamburgerDropDown ? `cancel` : `menu`}
        </span>
      </div>
    </>
  );
}
export default MobileNavigationBar;
