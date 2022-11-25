import { useEffect, useRef } from "react";

function HeaderSection() {
  const defaultClasses = {
    color: ["#918f8d"],
  };
  const { color } = defaultClasses;

  const counter = useRef();
  const counter2 = useRef();

  const counterSystem = () => {
    let n = 0;
    let n2 = 0;

    let int = setInterval(() => {
      counter.current.textContent = parseFloat((n += 0.036).toFixed(2));
      if (counter.current.textContent >= 1.69) {
        n = 1.69;
        clearInterval(int);
      }
    }, 60);

    let int2 = setInterval(() => {
      counter2.current.textContent = parseFloat((n2++).toFixed(0));
      if (counter2.current.textContent >= 209) {
        n2 = 209;
        clearInterval(int2);
      }
    }, 5);

    return () => {
      clearInterval(int);
      clearInterval(int2);
    };
  };

  useEffect(() => {
    counterSystem();
  });

  return (
    <>
      <div className="w-[100%] flex flex-col xl:flex-row px-10 justify-center items-center gap-[100px] mx-auto pb-10">
        <div className="w-[auto] h-fit pr-0 xl:pr-[100px] xl:border-r border-r-[rgb(145,143,141,0.2)]">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col text-center">
              <h1 className="text-white text-[60px] sm:text-[80px] lg:text-[120px] leading-none lg:leading-[125px]">
                Control your
              </h1>
              <h1 className="text-white text-[60px] sm:text-[80px] lg:text-[120px] leading-none lg:leading-[125px]">
                go-to-market
              </h1>
              <h1 className="text-white text-[60px] sm:text-[80px] lg:text-[120px] leading-none lg:leading-[125px]">
                <span className="text-[#cbc4b7] font-[serif] italic font-semibold">
                  motions here.
                </span>
              </h1>
              <img
                className="m-auto w-[80%] sm:w-[400px] lg:w-[80%]"
                src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dc7572d22f05ba26fd34_hero-underline.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col text-center">
              <p className={`w-aut0 text-[${color[0]}] mt-10 text-2xl`}>
                Fill your pipeline by gathering real market feedback,
              </p>
              <p className={`text-[${color[0]}] mt-0 text-2xl`}>
                experimenting & refining your strategy.
              </p>
            </div>
            <button className="text-black bg-white p-5 mt-12 hover:bg-transparent border hover:text-white">
              Get started today
            </button>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-12">
              <img
                src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dd659ce77e4c3cd68d7c_Andreessen-logo.svg"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dd64f8220dd236c6ef45_Sparkcapital-logo.svg"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dd6598ac894e28c92dc9_YCombinator-logo.svg"
                alt=""
              />
            </div>
            <p className={`text-[${color[0]}] text-[9px] mt-10 opacity-50`}>
              Trusted by companies at top funds.
            </p>
          </div>
        </div>
        <div className="w-[auto] h-fit flex flex-col border-none sm:border px-1 sm:p-10 xl:border-none md:flex-row xl:flex-col justify-center items-center text-center gap-[70px]">
          <img
            className="w-20"
            src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/62504cfd352c175957bd4417_workfromx-hash.svg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center text-center gap-[70px]">
            <div>
              <p className="flex justify-center items-center">
                <span className="text-6xl tracking-tight font-[serif] font-semibold">
                  $
                </span>
                <span
                  ref={counter}
                  className="text-6xl tracking-tight font-[serif] font-semibold"
                >
                  0
                </span>
                <span className="text-6xl tracking-tight font-[serif] font-semibold">
                  M
                </span>
              </p>
              <p className={`text-sm mt-4 text-[${color[0]}]`}>
                Earned to date by Reps
              </p>
            </div>
            <div>
              <p className="flex justify-center items-center">
                <span className="text-6xl tracking-tight font-[serif] font-semibold">
                  $
                </span>
                <span
                  ref={counter2}
                  className="text-6xl tracking-tight font-[serif] font-semibold"
                >
                  0
                </span>
                <span className="text-6xl tracking-tight font-[serif] font-semibold">
                  M
                </span>
              </p>
              <p className={`text-sm mt-4 text-[${color[0]}]`}>
                Closed won by companies to date
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              className="w-[60px] rounded-full"
              src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6258a6c9dd240f2e91c0da09_Eitan.jpeg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-5">
              <p>A truly game-changing sales </p>
              <p>platform for the emerging skilled</p>
              <p>economy.</p>
            </div>
            <p className={`mt-5 text-[10px] text-[${color[0]}]`}>
              Eitan Saban, Prev. sales exec. Adobe
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderSection;
