import React, { useEffect, useRef, useState } from "react";
import NewArrivalsCategory from "./NewArrivalsCategory";
import BestSellersCategory from "./BestSellersCategory";
import ValueSetsCategory from "./ValueSetsCategory";
import HairNeedsCategory from "./HairNeedsCategory";
import CollectionCategory from "./CollectionCategory";
import ProductTypesCategory from "./ProductTypesCategory";
import NavbarLinks from "./NavbarLinks";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MobileNavBar from "./MobileNavBar";
gsap.registerPlugin(ScrollTrigger);

const ParentNavbar = () => {
  const [shopDropDown, setShopDropDown] = useState(false);
  const [newArrivalsLink, setNewArrivalsLink] = useState(false);
  const [newArrivalsLink2, setNewArrivalsLink2] = useState(false);
  const [newArrivalsLink3, setNewArrivalsLink3] = useState(false);
  const [newArrivalsLink4, setNewArrivalsLink4] = useState(false);
  const [newArrivalsLink5, setNewArrivalsLink5] = useState(false);
  const [newArrivalsLink6, setNewArrivalsLink6] = useState(false);
  const shopDropDownRef = useRef();
  const [hideLinks, setHideLinks] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [closeWarning, setCloseWarning] = useState(false);
  const linkCategory = useRef();

  const shopMouseEnter = () => {
    setShopDropDown(true);
    clearTimeout(shopDropDownRef.current);
  };
  const shopMouseLeave = () => {
    shopDropDownRef.current = setTimeout(() => {
      gsap.context(() => {
        gsap.to(".shop-dropdown", {
          opacity: 0,
          transition: 0.1,
        });
      });
      setTimeout(() => setShopDropDown(false), 300);
    }, 300);
  };

  const linkDetectionSystem = () => {
    setNewArrivalsLink(true);
    setNewArrivalsLink2(false);
    setNewArrivalsLink3(false);
    setNewArrivalsLink4(false);
    setNewArrivalsLink5(false);
    setNewArrivalsLink6(false);
  };
  const linkDetectionSystem2 = () => {
    setNewArrivalsLink(false);
    setNewArrivalsLink2(true);
    setNewArrivalsLink3(false);
    setNewArrivalsLink4(false);
    setNewArrivalsLink5(false);
    setNewArrivalsLink6(false);
  };
  const linkDetectionSystem3 = () => {
    setNewArrivalsLink(false);
    setNewArrivalsLink2(false);
    setNewArrivalsLink3(true);
    setNewArrivalsLink4(false);
    setNewArrivalsLink5(false);
    setNewArrivalsLink6(false);
  };
  const linkDetectionSystem4 = () => {
    setNewArrivalsLink(false);
    setNewArrivalsLink2(false);
    setNewArrivalsLink3(false);
    setNewArrivalsLink4(true);
    setNewArrivalsLink5(false);
    setNewArrivalsLink6(false);
  };
  const linkDetectionSystem5 = () => {
    setNewArrivalsLink(false);
    setNewArrivalsLink2(false);
    setNewArrivalsLink3(false);
    setNewArrivalsLink4(false);
    setNewArrivalsLink5(true);
    setNewArrivalsLink6(false);
  };
  const linkDetectionSystem6 = () => {
    setNewArrivalsLink(false);
    setNewArrivalsLink2(false);
    setNewArrivalsLink3(false);
    setNewArrivalsLink4(false);
    setNewArrivalsLink5(false);
    setNewArrivalsLink6(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth > 1024) {
        setHideLinks(true);
      } else {
        setShopDropDown(false);
        setHideLinks(false);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [hideLinks, setHideLinks]);

  useEffect(() => {
    const mainNavbarCtx = gsap.context(() => {
      gsap.to(".main-navbar", {
        scrollTrigger: {
          // markers: true,
          trigger: ".main-navbar",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        boxShadow: "0px 15px 20px rgba(0,0,0,0.1)",
      });
    });

    return () => mainNavbarCtx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".warning-pop-up", {
        translateY: 0,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {!closeWarning && (
        <div className="warning-pop-up flex bg-yellow-100 w-[600px] gap-5 justify-center z-[105] items-center px-10 text-center py-5 absolute top-20 left-1/2 -translate-x-1/2 border-2 border-yellow-500 rounded-xl text-black -translate-y-96">
          <p>
            ITS BEST TO VIEW THE WEBSITE WITH A{" "}
            <span className="italic text-yellow-700">
              WIDTH OF 1025 OR HIGHER
            </span>{" "}
            IF YOU ARE ON A <span className="text-yellow-700">COMPUTER</span>
          </p>
          <span
            className="material-symbols-outlined cursor-pointer"
            onClick={() => setCloseWarning(true)}
          >
            close
          </span>
        </div>
      )}
      <div className="bg-white main-navbar border-b w-full h-20 flex justify-evenly items-center gap-5 text-black px-3">
        {!hideLinks && (
          <div className="flex gap-5">
            <span
              onClick={() => setMobileMenu(true)}
              className="material-symbols-outlined cursor-pointer text-lg"
            >
              menu
            </span>
            <span className="material-symbols-outlined cursor-pointer text-lg">
              search
            </span>
          </div>
        )}
        <a href="/">
          <img
            className="w-48 cursor-pointer"
            src="https://cdn.shopify.com/s/files/1/0010/9330/4381/t/99/assets/Luseta-logo.svg?v=163737035158898480941661964644"
            alt="Logo"
          />
        </a>
        <React.Fragment>
          {hideLinks && (
            <NavbarLinks
              shopDropDownRef={shopDropDownRef}
              shopMouseEnter={shopMouseEnter}
              setNewArrivalsLink={setNewArrivalsLink}
              setNewArrivalsLink2={setNewArrivalsLink2}
              setNewArrivalsLink3={setNewArrivalsLink3}
              setNewArrivalsLink4={setNewArrivalsLink4}
              setNewArrivalsLink5={setNewArrivalsLink5}
              setNewArrivalsLink6={setNewArrivalsLink6}
              shopMouseLeave={shopMouseLeave}
            />
          )}
        </React.Fragment>
        <div className="flex gap-5">
          {hideLinks && (
            <>
              <span className="material-symbols-outlined cursor-pointer text-lg">
                favorite
              </span>
              <span className="material-symbols-outlined cursor-pointer text-lg">
                search
              </span>
            </>
          )}
          <span className="material-symbols-outlined cursor-pointer text-lg">
            person_filled
          </span>
          <span className="material-symbols-outlined cursor-pointer text-lg">
            shopping_bag
          </span>
        </div>
      </div>
      {shopDropDown && (
        <div
          onMouseOver={shopMouseEnter}
          onMouseLeave={shopMouseLeave}
          className="shop-dropdown bg-white px-5 border-t-1 shadow-md h-fit absolute w-full flex flex-col text-black py-14 z-[100]"
        >
          <div className="flex gap-24 justify-center items-start w-[100%] h-full mx-auto">
            <div className="flex flex-col justify-center items-start gap-5">
              <a
                onMouseOver={linkDetectionSystem}
                className={`${
                  newArrivalsLink ? "text-black" : "text-gray-400"
                } text-sm hover:text-black`}
                href="/#"
              >
                NEW ARRIVALS
              </a>
              <a
                onMouseOver={linkDetectionSystem2}
                className={`${
                  newArrivalsLink2 ? "text-black" : "text-gray-400"
                } text-sm hover:text-black`}
                href="/#"
              >
                BESTSELLERS
              </a>
              <a
                onMouseOver={linkDetectionSystem3}
                className={`${
                  newArrivalsLink3 ? "text-black" : "text-gray-400"
                } text-sm hover:text-black`}
                href="/#"
              >
                VALUE SETS
              </a>
              <a
                onMouseOver={linkDetectionSystem4}
                className={`${
                  newArrivalsLink4 ? "text-black" : "text-gray-400"
                } text-sm hover:text-black`}
                href="/#"
              >
                HAIR NEEDS
              </a>
              <a
                onMouseOver={linkDetectionSystem5}
                className={`${
                  newArrivalsLink5 ? "text-black" : "text-gray-400"
                } text-sm hover:text-black`}
                href="/#"
              >
                COLLECTIONS
              </a>
              <a
                onMouseOver={linkDetectionSystem6}
                className={`${
                  newArrivalsLink6 ? "text-black" : "text-gray-400"
                } text-sm hover:text-black`}
                href="/#"
              >
                PRODUCT TYPE
              </a>
            </div>
            {newArrivalsLink && (
              <NewArrivalsCategory linkCategory={linkCategory} />
            )}
            {newArrivalsLink2 && (
              <BestSellersCategory linkCategory={linkCategory} />
            )}
            {newArrivalsLink3 && (
              <ValueSetsCategory linkCategory={linkCategory} />
            )}
            {newArrivalsLink4 && (
              <HairNeedsCategory linkCategory={linkCategory} />
            )}
            {newArrivalsLink5 && (
              <CollectionCategory linkCategory={linkCategory} />
            )}
            {newArrivalsLink6 && (
              <ProductTypesCategory linkCategory={linkCategory} />
            )}
          </div>
          <div className="line-container relative ml-auto -translate-x-10 translate-y-10">
            <a className="hover:text-[#fabdbd] text-sm font-semibold" href="/#">
              VIEW ALL NEW ARRIVALS
            </a>
            <div className="line bg-[#fabdbd] duration-500 h-[2px] absolute bottom-0"></div>
          </div>
        </div>
      )}
      {mobileMenu && (
        <MobileNavBar
          setMobileMenu={setMobileMenu}
          setHideLinks={setHideLinks}
          hideLinks={hideLinks}
          mobileMenu={mobileMenu}
        />
      )}
    </>
  );
};
export default ParentNavbar;
