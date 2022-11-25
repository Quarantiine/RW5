function FlapImgSlide({ flapState1, flapState2, flapState3, flapState4 }) {
  return (
    <>
      <div className="main-img-slide hidden sm:flex justify-center items-center xl:hidden relative xl:absolute lg:right-0">
        <div
          className={`absolute z-4 ${
            flapState1 ? "opacity-100" : "opacity-0"
          } w-[60%] h-[60%] lg:w-[100%] lg:h-[100%] bg-[url(https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6258b44af77c2946b9435429_Leads%20-%20tasks.png)] bg-top bg-cover`}
        ></div>
        <div
          className={`absolute z-3 ${
            flapState2 ? "opacity-100" : "opacity-0"
          } w-[60%] h-[60%] lg:w-[100%] lg:h-[100%] bg-[url("https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6258b510d134e78770401254_Sequences.png")] bg-top bg-cover`}
        ></div>
        <div
          className={`absolute z-2 ${
            flapState3 ? "opacity-100" : "opacity-0"
          } w-[60%] h-[60%] lg:w-[100%] lg:h-[100%] bg-[url("https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6258b44bdc19af0fa8a18ab9_Analytics.png")] bg-top bg-cover`}
        ></div>
        <div
          className={`absolute z-1 ${
            flapState4 ? "opacity-100" : "opacity-0"
          } w-[60%] h-[60%] lg:w-[100%] lg:h-[100%] bg-[url("https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/6258b5190c41c0dea7ac83da_Messaging.png")] bg-top bg-cover`}
        ></div>
      </div>
    </>
  );
}
export default FlapImgSlide;
