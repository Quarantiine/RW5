function DesktopTabletNavigationBar({
  setNavLinkHover,
  dropdowBox,
  navLinkHover,
  navbarTailwind2,
  navbarTailwind,
}) {
  return (
    <>
      <div
        className={`2xl:w-[80%] w-[95%] mx-auto h-24 justify-between 2xl items-center hidden lg:flex`}
      >
        <div className="flex justify-center items-center flex-col text-center gap-2 cursor-default">
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
        <div className="flex justify-center items-center [&>p]:cursor-pointer gap-7 text-black">
          <p className="hover:text-[#ff4157] text-[#ff4157]">Home</p>
          <div className="flex justify-center items-center relative">
            <div
              className="flex justify-center items-center gap-3 hover:text-[#ff4157] cursor-pointer"
              onMouseOver={() => {
                setNavLinkHover(true);
              }}
              ref={dropdowBox}
            >
              <p className="">Rooms & Suites</p>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
            <div
              onMouseLeave={() => setNavLinkHover(false)}
              className={`absolute top-0 left-0 w-40 h-72 bg-transparent duration-300 px-4 pt-[60px] dropdown-btn ${
                navLinkHover ? navbarTailwind2 : navbarTailwind
              }`}
            >
              <div className="relative h-full bg-[#162541] text-white flex flex-col justify-center items-start gap-5 p-8 w-64">
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
    </>
  );
}
export default DesktopTabletNavigationBar;
