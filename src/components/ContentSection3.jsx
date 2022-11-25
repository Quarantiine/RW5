import { useEffect, useState, createContext } from "react";
const Slide1Context = createContext();

function ContentSection3() {
  const [clickedCheck, setClickedCheck] = useState(true);
  const [clickedCheck2, setClickedCheck2] = useState(false);
  const [clickedCheck3, setClickedCheck3] = useState(false);
  let [counter, setCounter] = useState(1);

  const slideSystem = () => {
    setCounter((counter += 1));

    if (counter === 1) {
      setClickedCheck(true);
    } else {
      setClickedCheck(false);
    }

    if (counter === 2) {
      setClickedCheck2(true);
    } else {
      setClickedCheck2(false);
    }

    if (counter === 3) {
      setClickedCheck3(true);
    } else {
      setClickedCheck3(false);
    }

    counter >= 3 ? setCounter(0) : setCounter(counter);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      slideSystem();
    }, 5000);

    return () => clearInterval(interval);
  });

  let avatarImgs = [
    "https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/625983fabf11bb2f4aa70dc0_AsadA.jpeg",
    "https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6331d95e687081593386e704_Derek%20Henmi.jpeg",
    "https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/625983faf0b49941bf9578e0_MithchL.jpeg",
  ];

  let avatarNames = ["Asad A.", "Mitch K.", "Derek H."];

  let avatarOccupations = [
    "Head of Business Development, Uber",
    "President & Co-Founder, Vivid",
    "Portfolio Director, WeWork",
  ];

  let avatarQuotes = [
    "SellX solves the universal problems revenue teams face when trying to scale quickly Difficulty finding talent, long hiring cycles & high turnover rates.",
    "The platform is what sold our team. This set SellX apart from the competition.",
    "One of the most innovative lead-gen platforms I've ever seen. It literally gets smarter as you use it.",
  ];

  return (
    <Slide1Context.Provider value={clickedCheck}>
      <div className="relative w-[70%] h-full mx-auto mt-0 sm:mt-20">
        <div
          className={`text-3xl sm:text-6xl leading-[50px] sm:leading-[80px] ${
            clickedCheck === true
              ? "opacity-100 block z-1 scale-100"
              : `opacity-0 z-[-1] scale-90`
          } w-full h-fit mt-40 absolute top-0 left-0 flex flex-col gap-10`}
        >
          <img
            className="w-20"
            src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/62598c35409a2539a9a5a798_quotemark.svg"
            alt=""
          />
          <div>
            <p>{avatarQuotes[0]}</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-10">
                <img className="w-20 rounded-full" src={avatarImgs[0]} alt="" />
                <div>
                  <p className="text-xl">{avatarNames[0]}</p>
                  <p className="text-sm opacity-50">{avatarOccupations[0]}</p>
                </div>
              </div>
              <div>
                {/* <span className="material-symbols-outlined select-none text-6xl cursor-pointer hover:scale-95 hover:opacity-80 rotate-90">
                  expand_circle_down
                </span>
                <span className="material-symbols-outlined select-none text-6xl cursor-pointer hover:scale-95 hover:opacity-80 -rotate-90">
                  expand_circle_down
                </span> */}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-3xl sm:text-6xl leading-[50px] sm:leading-[80px] ${
            clickedCheck2 === true
              ? "opacity-100 block z-1 scale-100"
              : `opacity-0 z-[-1] scale-90`
          } w-full h-fit mt-40 absolute top-0 left-0 flex flex-col gap-10 ${null}`}
        >
          <img
            className="w-20"
            src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/62598c35409a2539a9a5a798_quotemark.svg"
            alt=""
          />
          <div>
            <p>{avatarQuotes[1]}</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-10">
                <img className="w-20 rounded-full" src={avatarImgs[1]} alt="" />
                <div>
                  <p className="text-xl">{avatarNames[1]}</p>
                  <p className="text-sm opacity-50">{avatarOccupations[1]}</p>
                </div>
              </div>
              <div>
                {/* <span
                  onClick={() => clickedCheck}
                  className="material-symbols-outlined select-none text-6xl cursor-pointer hover:scale-95 hover:opacity-80 rotate-90"
                >
                  expand_circle_down
                </span>
                <span
                  onClick={() => clickedCheck}
                  className="material-symbols-outlined select-none text-6xl cursor-pointer hover:scale-95 hover:opacity-80 -rotate-90"
                >
                  expand_circle_down
                </span> */}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-3xl sm:text-6xl leading-[50px] sm:leading-[80px] ${
            clickedCheck3 === true
              ? "opacity-100 block z-1 scale-100"
              : `opacity-0 z-[-1] scale-90`
          } w-full h-fit mt-40 absolute top-0 left-0 flex flex-col gap-10 ${null}`}
        >
          <img
            className="w-20"
            src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/62598c35409a2539a9a5a798_quotemark.svg"
            alt=""
          />
          <div>
            <p>{avatarQuotes[2]}</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-10">
                <img className="w-20 rounded-full" src={avatarImgs[2]} alt="" />
                <div>
                  <p className="text-xl">{avatarNames[2]}</p>
                  <p className="text-sm opacity-50">{avatarOccupations[2]}</p>
                </div>
              </div>
              <div>
                {/* <span className="material-symbols-outlined select-none text-6xl cursor-pointer hover:scale-95 hover:opacity-80 rotate-90">
                  expand_circle_down
                </span>
                <span className="material-symbols-outlined select-none text-6xl cursor-pointer hover:scale-95 hover:opacity-80 -rotate-90">
                  expand_circle_down
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide1Context.Provider>
  );
}
export { Slide1Context };
export default ContentSection3;
