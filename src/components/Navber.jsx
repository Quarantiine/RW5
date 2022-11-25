import { useState, useEffect } from "react";

function Navbar() {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [mainNavDropDown, setMainNavDropDown] = useState(false);

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBackToTop(true);

      window.scrollY <= 100 ? setBackToTop(false) : setBackToTop(true);
    });
  }, [backToTop]);

  return (
    <>
      <div
        className={`bg-[rgba(0,0,0,0.5)] w-full ${
          mainNavDropDown === true
            ? "h-full translate-y-0"
            : "h-[auto] -translate-y-[350px]"
        } py-5 backdrop-blur-md flex flex-col lg:flex-row lg:h-auto justify-center lg:justify-between lg:translate-y-0 2xl:justify-center 2xl:gap-[200px] items-center gap-10 px-10 fixed z-50`}
      >
        <a href="/">
          <img
            className={`w-[100px] cursor-pointer`}
            src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61a96fcf4b3208fe334c74f8_white.svg"
            alt="logo"
          />
        </a>
        <div
          className={`flex flex-col lg:flex-row gap-5 text-[12px] font-medium text-white justify-center items-start lg:items-center`}
        >
          <p className="cursor-pointer hover:text-[#918f8d]">PLATFORM</p>
          <p className="cursor-pointer hover:text-[#918f8d]">SALES REPS</p>
          <p className="cursor-pointer hover:text-[#918f8d]">PRICING</p>
          <div className="flex justify-center items-center gap-0 select-none hover:[#918f8d] relative">
            <div
              onMouseOver={() => setDropdown1(true)}
              className="flex justify-center items-center gap-0 cursor-default"
            >
              <p>SOLUTIONS</p>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <div
              onMouseLeave={() => setDropdown1(false)}
              className="absolute top-0 left-0 flex justify-center items-center"
            >
              <div
                className={`z-50 dropdown-text flex justify-center items-center bg-white ${
                  dropdown1 === true
                    ? "h-[100px] overflow-visible"
                    : "h-0 overflow-hidden"
                } w-[200px] relative top-8 left-0`}
              >
                <div
                  className={`w-full flex flex-col justify-center items-center gap-y-0 text-center transition duration-[200ms] ${
                    dropdown1 === true ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p
                    className={`text-black cursor-pointer text-[16px] hover:bg-gray-300 py-2 w-full`}
                  >
                    Market Research
                  </p>
                  <p
                    className={`text-black cursor-pointer text-[16px] hover:bg-gray-300 py-2 w-full`}
                  >
                    Outbound Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-0 select-none hover:text-[#918f8d] relative">
            <div
              onMouseOver={() => setDropdown2(true)}
              className="flex justify-center items-center gap-0 cursor-default"
            >
              <p>MORE</p>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <div
              onMouseLeave={() => setDropdown2(false)}
              className="absolute top-0 left-0 flex justify-center items-center"
            >
              <div
                className={`z-50 dropdown-text flex justify-center items-center bg-white ${
                  dropdown2 === true
                    ? "h-[180px] overflow-visible"
                    : "h-0 overflow-hidden"
                } w-[200px] relative top-8 left-0`}
              >
                <div
                  className={`w-full flex flex-col justify-center items-center gap-y-0 text-center duration-[1000ms] ${
                    dropdown2 === true ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p
                    className={`text-black cursor-pointer text-[16px] hover:bg-gray-300 py-2 w-full`}
                  >
                    SDR Cost Calculator
                  </p>
                  <p
                    className={`text-black cursor-pointer text-[16px] hover:bg-gray-300 py-2 w-full`}
                  >
                    Our Vetting Process
                  </p>
                  <p
                    className={`text-black cursor-pointer text-[16px] hover:bg-gray-300 py-2 w-full`}
                  >
                    Blog
                  </p>
                  <p
                    className={`text-black cursor-pointer text-[16px] hover:bg-gray-300 py-2 w-full`}
                  >
                    Newsroom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex justify-between items-center`}>
          <button className="bg-transparent py-[6px] px-4 text-[13px] text-white hover:text-[#918f8d]">
            Login
          </button>
          <button className="bg-white text-black border py-[6px] px-4 text-[13px] hover:text-white hover:bg-transparent hover:border">
            Sign Up
          </button>
        </div>
        <div
          onClick={() => setMainNavDropDown((current) => !current)}
          className={`cursor-pointer flex justify-center items-center text-center lg:hidden ${
            mainNavDropDown === true ? "rotate-180" : "rotate-0"
          }`}
        >
          <span className="material-symbols-outlined text-4xl">
            expand_circle_down
          </span>
        </div>
      </div>

      <div
        onClick={(e) => window.scrollBy(e, -window.scrollY)}
        className={`back-to-top fixed ${
          backToTop === true ? "bottom-10" : "-bottom-10"
        } right-10 cursor-pointer select-none z-50`}
      >
        <span className="material-symbols-outlined text-4xl">arrow_upward</span>
      </div>
    </>
  );
}
export default Navbar;
