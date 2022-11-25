import { useState } from "react";
import FlapImgSlide from "./FlapImgSlide";

function ContentSection2() {
  const [flapState1, setFlapState1] = useState(true);
  const [flapState2, setFlapState2] = useState(false);
  const [flapState3, setFlapState3] = useState(false);
  const [flapState4, setFlapState4] = useState(false);

  return (
    <>
      <div className="main-content-section-2 mt-[200px] mx-auto">
        <div className="flex flex-col gap-[80px] mx-auto w-[100%]">
          <div>
            <h1 className="text-5xl lg:text-7xl">The first all-in-one sales</h1>
            <h1 className="text-5xl lg:text-7xl">
              platform{" "}
              <span className="italic font-[serif] font-semibold text-[#d2d0fb]">
                optimized for growth.
              </span>
            </h1>
          </div>
          <div>
            <p className="text-xl lg:text-2xl flex flex-col">
              <span className="text-[#918f8d]">
                Complete with integrated sales and marketing tools
              </span>
              <span className="text-[#918f8d]">
                which track performance, automate workflows, and{" "}
              </span>
              <span className="text-[#918f8d]">manage payments.</span>
            </p>
          </div>
        </div>
        <div className="mt-[100px] lg:mt-[200px]">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-0 w-full">
            <FlapImgSlide
              flapState1={flapState1}
              flapState2={flapState2}
              flapState3={flapState3}
              flapState4={flapState4}
            />
            <div className="gap-10 mt-12 flex flex-col justify-center items-center h-[500px]">
              <div
                onClick={() => {
                  setFlapState1(true);
                  setFlapState2(false);
                  setFlapState3(false);
                  setFlapState4(false);
                }}
                className={`flex flex-col gap-6 border-b ${
                  flapState1
                    ? "pb-10 border-b-white hover:border-b-[white]"
                    : "pb-3 border-b-[#535250] hover:border-b-[#918f8d]"
                } cursor-pointer`}
              >
                <h1 className="text-4xl">CRM & Tasks</h1>
                <p
                  className={`flex flex-col ${
                    flapState1 ? "h-[auto]" : "h-0 overflow-hidden"
                  } ${flapState2 ? "h-0 overflow-hidden" : "h-full"} ${
                    flapState3 ? "h-0 overflow-hidden" : "h-full"
                  } ${flapState4 ? "h-0 overflow-hidden" : "h-full"}`}
                >
                  <span className="text-[#918f8d]">
                    Manage all of your leads and activities in one intuitive
                    interface.
                  </span>
                  <span className="text-[#918f8d]">
                    Optimized workflows make it fast and easy to see what you
                  </span>
                  <span className="text-[#918f8d]">
                    need to act on next to get the most out of your pipeline and
                  </span>
                  <span className="text-[#918f8d]">close more deals. </span>
                </p>
              </div>

              <div
                onClick={() => {
                  setFlapState1(false);
                  setFlapState2(true);
                  setFlapState3(false);
                  setFlapState4(false);
                }}
                className={`flex flex-col gap-6 border-b ${
                  flapState2
                    ? "pb-10 border-b-white hover:border-b-[white]"
                    : "pb-3 border-b-[#535250] hover:border-b-[#918f8d]"
                } cursor-pointer`}
              >
                <h1 className="text-4xl">Sequences</h1>
                <p
                  className={`flex flex-col ${
                    flapState2 ? "h-[auto]" : "h-0 overflow-hidden"
                  } ${flapState1 ? "h-0 overflow-hidden" : "h-full"} ${
                    flapState3 ? "h-0 overflow-hidden" : "h-full"
                  } ${flapState4 ? "h-0 overflow-hidden" : "h-full"}`}
                >
                  <span className="text-[#918f8d]">
                    Build, test, and execute multi-channel outreach strategies
                    to
                  </span>
                  <span className="text-[#918f8d]">
                    increase your reach and connect with your customers in the
                  </span>
                  <span className="text-[#918f8d]">
                    places they respond most to drive revenue. A/B test
                    templates
                  </span>
                  <span className="text-[#918f8d]">
                    and scripts to optimize messaging that converts your leads
                    into
                  </span>
                  <span className="text-[#918f8d]">customers at scale.</span>
                </p>
              </div>

              <div
                onClick={() => {
                  setFlapState1(false);
                  setFlapState2(false);
                  setFlapState3(true);
                  setFlapState4(false);
                }}
                className={`flex flex-col gap-6 border-b ${
                  flapState3
                    ? "pb-10 border-b-white hover:border-b-[white]"
                    : "pb-3 border-b-[#535250] hover:border-b-[#918f8d]"
                } cursor-pointer`}
              >
                <h1 className="text-4xl">Data & Analytics</h1>
                <p
                  className={`flex flex-col ${
                    flapState3 ? "h-[auto]" : "h-0 overflow-hidden"
                  } ${flapState2 ? "h-0 overflow-hidden" : "h-full"} ${
                    flapState1 ? "h-0 overflow-hidden" : "h-full"
                  } ${flapState4 ? "h-0 overflow-hidden" : "h-full"}`}
                >
                  <span className="text-[#918f8d]">
                    Keep track of everything that's happening in your campaigns
                    in
                  </span>
                  <span className="text-[#918f8d]">
                    real-time so you can maximize results and drive growth. 360-
                  </span>
                  <span className="text-[#918f8d]">
                    degree visibility lets you focus on what's important and
                    keeps
                  </span>
                  <span className="text-[#918f8d]">
                    you moving towards success.{" "}
                  </span>
                </p>
              </div>

              <div
                onClick={() => {
                  setFlapState1(false);
                  setFlapState2(false);
                  setFlapState3(false);
                  setFlapState4(true);
                }}
                className={`flex flex-col gap-6 border-b ${
                  flapState4
                    ? "pb-10 border-b-white hover:border-b-[white]"
                    : "pb-3 border-b-[#535250] hover:border-b-[#918f8d]"
                } cursor-pointer`}
              >
                <h1 className="text-4xl">Messaging</h1>
                <p
                  className={`flex flex-col ${
                    flapState4 ? "h-[auto]" : "h-0 overflow-hidden"
                  } ${flapState2 ? "h-0 overflow-hidden" : "h-full"} ${
                    flapState3 ? "h-0 overflow-hidden" : "h-full"
                  } ${flapState1 ? "h-0 overflow-hidden" : "h-full"}`}
                >
                  <span className="text-[#918f8d]">
                    Learn the most from campaigns and always be aware of what is
                  </span>
                  <span className="text-[#918f8d]">
                    happening with live data. As reps can see their earnings and
                  </span>
                  <span className="text-[#918f8d]">
                    companies can see what works and what doesn't so they can
                  </span>
                  <span className="text-[#918f8d]">act immediately.</span>
                </p>
              </div>
            </div>
            <div className="main-img-slide hidden xl:block relative xl:absolute lg:right-0">
              <div
                className={`absolute z-4 ${
                  flapState1 ? "opacity-100" : "opacity-0"
                } w-[100%] h-[100%] bg-[url(https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6258b44af77c2946b9435429_Leads%20-%20tasks.png)] bg-top bg-cover`}
              ></div>
              <div
                className={`absolute z-3 ${
                  flapState2 ? "opacity-100" : "opacity-0"
                } w-[100%] h-[100%] bg-[url("https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6258b510d134e78770401254_Sequences.png")] bg-top bg-cover`}
              ></div>
              <div
                className={`absolute z-2 ${
                  flapState3 ? "opacity-100" : "opacity-0"
                } w-[100%] h-[100%] bg-[url("https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6258b44bdc19af0fa8a18ab9_Analytics.png")] bg-top bg-cover`}
              ></div>
              <div
                className={`absolute z-1 ${
                  flapState4 ? "opacity-100" : "opacity-0"
                } w-[100%] h-[100%] bg-[url("https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6258b5190c41c0dea7ac83da_Messaging.png")] bg-top bg-cover`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContentSection2;
