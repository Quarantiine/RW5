import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function ContentSection1() {

  useEffect(() => {
    gsap.context(() => {
      gsap.timeline({}).to(".para-mask-cover", {
        scrollTrigger: {
          // markers: true,
          start: "1000px center",
          end: "1850px 100%",
          scrub: true,
        },
        width: "0%",
      });
    });
  });

  return (
    <>
      <div className="">
        <div className="mx-auto mt-20 xl:mt-40 w-[70%] p-1 sm:p-5">
          <div className="flex flex-col gap-0 leading-[35px] lg:leading-[65px] w-full justify-start items-start text-lg sm:text-[30px] lg:text-[40px] 2xl:text-[60px]">
            <div className={`relative`}>
              <p className={`text-[white]`}>
                The most comprehensive revenue
              </p>
              <div
                className={`para-mask-cover absolute w-[100%] right-0 h-full duration-[1400ms] xl:duration-[1200ms] opacity-70 bg-black border-white top-0`}
              ></div>
            </div>
            <div className={`relative`}>
              <p className={`text-[white]`}>
                platform to effortlessly manage, refine,
              </p>
              <div
                className={`para-mask-cover absolute w-[100%] right-0 h-full duration-[1700ms] xl:duration-[1500ms] opacity-70 bg-black border-white top-0`}
              ></div>
            </div>
            <div className={`relative`}>
              <p className={`text-[white]`}>
                and scale your go-to-market strategy to
              </p>
              <div
                className={`para-mask-cover absolute w-[100%] right-0 h-full duration-[1900ms] xl:duration-[1700ms] opacity-70 bg-black border-white top-0`}
              ></div>
            </div>
            <div className={`relative`}>
              <p className={`text-[white]`}>
                generate opportunities.
              </p>
              <div
                className={`para-mask-cover absolute w-[100%] right-0 h-full duration-[2300ms] xl:duration-[2100ms] opacity-70 bg-black border-white top-0`}
              ></div>
            </div>
          </div>
          <div className="mt-[100px] w-[100%] p-1 lg:w-[610px] lg:ml-auto flex flex-col justify-start items-start text-md sm:text-2xl leading-[35px]">
            <p className={`text-[#918f8d]`}>
              Designed for companies looking to scale faster and more
            </p>
            <p className={`text-[#918f8d]`}>
              efficiently, SellX also provides access to premium, on-
            </p>
            <p className={`text-[#918f8d]`}>
              demand talent and an integrated toolset to help
            </p>
            <p className={`text-[#918f8d]`}>
              companies grow at lightning speed.
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
export default ContentSection1;
