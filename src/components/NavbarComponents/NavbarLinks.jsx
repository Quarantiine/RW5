import React from "react";

const NavbarLinks = ({
  shopDropDownRef,
  shopMouseEnter,
  setNewArrivalsLink,
  setNewArrivalsLink2,
  setNewArrivalsLink3,
  setNewArrivalsLink4,
  setNewArrivalsLink5,
  setNewArrivalsLink6,
  shopMouseLeave,
}) => {
  return (
    <div className="flex gap-5">
      <div className="line-container relative">
        <a
          ref={shopDropDownRef}
          onMouseOver={() => {
            shopMouseEnter();
            setNewArrivalsLink(true);
            setNewArrivalsLink2(false);
            setNewArrivalsLink3(false);
            setNewArrivalsLink4(false);
            setNewArrivalsLink5(false);
            setNewArrivalsLink6(false);
          }}
          onMouseLeave={shopMouseLeave}
          className="hover:text-[#fabdbd] text-sm font-thin"
          href="/#"
        >
          SHOP
        </a>
        <div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
      </div>
      <div className="line-container relative">
        <a className="hover:text-[#fabdbd] text-sm font-thin" href="/#">
          ABOUT US
        </a>
        <div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
      </div>
      <div className="line-container relative">
        <a className="hover:text-[#fabdbd] text-sm font-thin" href="/#">
          REWARDS
        </a>
        <div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
      </div>
      <div className="line-container relative">
        <a className="hover:text-[#fabdbd] text-sm font-thin" href="/#">
          TESTIMONIALS
        </a>
        <div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
      </div>
      <div className="line-container relative">
        <a className="hover:text-[#fabdbd] text-sm font-thin" href="/#">
          BLOG
        </a>
        <div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
      </div>
      <div className="line-container relative">
        <a className="hover:text-[#fabdbd] text-sm font-thin" href="/#">
          QUIZ
        </a>
        <div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
      </div>
    </div>
  );
};

export default NavbarLinks;
