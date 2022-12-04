import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import BookRegistration from "./BookRegistration";

function HeaderSection() {
  const [slideContainerHover, setSlideContainerHover] = useState(false);
  const slideContainer = useRef(0);

  const draggableSlide = () => {
    slideContainer.current.addEventListener(
      "mousemove",
      (e) => {
        let breakPoint = 750;
        // console.log(e.pageX);

        if (e.pageX <= breakPoint) {
          slideContainer.current.addEventListener("mousedown", () => {
            slideContainer.current.scrollBy(-1000, 0);
          });
        } else if (e.pageX > breakPoint) {
          slideContainer.current.addEventListener("mousedown", () => {
            slideContainer.current.scrollBy(1000, 0);
          });
        }
      },
      1
    );
  };

  useEffect(() => {
    if (window.innerWidth <= 1620) {
      return console.log("Mobile/Tablet/Laptop");
    } else {
      draggableSlide();
    }
  });

  return (
    <>
      <div>
        <div
          className={`absolute duration-300 arrow-left left-10 sm:left-32 top-96 sm:top-64 cursor-pointer ${
            slideContainerHover ? "opacity-100" : "opacity-0"
          } hover:scale-110`}
          onMouseOver={() => setSlideContainerHover(true)}
          onMouseDown={() => slideContainer.current.scrollBy(-1000, 0)}
        >
          <span className="material-symbols-outlined text-white text-5xl">
            chevron_left
          </span>
        </div>
        <div
          ref={slideContainer}
          onMouseOver={() => setSlideContainerHover(true)}
          onMouseLeave={() => setSlideContainerHover(false)}
          className="slide-container cursor-default active:cursor-grabbing justify-start items-center w-full"
        >
          <div className="slide-box bg-[url(https://ld-wp73.template-help.com/wordpress/prod_803/v1/wp-content/uploads/2020/03/slider_picture1.jpg)] w-full h-[670px] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col text-white active:cursor-grabbing text-center relative z-[-1]">
            <h3 className="text-xl font-[Times-new-romen] tracking-[10px]">
              THE WOODS HOTEL
            </h3>
            <h1 className="header-title text-5xl px-5 sm:text-8xl">
              WE'RE A QUIET PLACE TO STAY AT
            </h1>
          </div>
          <div className="slide-box bg-[url(https://ld-wp73.template-help.com/wordpress/prod_803/v1/wp-content/uploads/2020/03/slider_picture2.jpg)] w-full h-[670px] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col text-white active:cursor-grabbing text-center relative z-[-1]">
            <h3 className="text-xl font-[Times-new-romen] tracking-[10px]">
              COMFORTABLE APARTMENTS
            </h3>
            <h1 className="header-title text-5xl px-5 sm:text-8xl">
              ENJOY YOUR STAY WHILE ON A BUSINESS TRIP
            </h1>
          </div>
          <div className="slide-box bg-[url(https://ld-wp73.template-help.com/wordpress/prod_803/v1/wp-content/uploads/2020/03/slider_picture3.jpg)] w-full h-[670px] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col text-white active:cursor-grabbing text-center relative z-[-1]">
            <h3 className="text-xl font-[Times-new-romen] tracking-[10px]">
              ROOMS & SUITES
            </h3>
            <h1 className="header-title text-5xl px-5 sm:text-8xl">
              THE INTRICATE AND ELEGANT, BUT COMFORTABLE
            </h1>
          </div>
        </div>
        <div
          className={`absolute duration-300 arrow-right right-10 sm:right-32 top-96 sm:top-64 cursor-pointer ${
            slideContainerHover ? "opacity-100" : "opacity-0"
          } hover:scale-110`}
          onMouseOver={() => setSlideContainerHover(true)}
          onMouseDown={() => slideContainer.current.scrollBy(1000, 0)}
        >
          <span className="material-symbols-outlined text-white text-5xl">
            chevron_right
          </span>
        </div>
      </div>
      <BookRegistration />
    </>
  );
}
export default HeaderSection;
