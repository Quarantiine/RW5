// import HeroSlideSystem from "./HeroSlideSystem";

const ParentHeroSection = () => {
  return (
    <div className="h-[780px] overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-black h-full w-full">
        <div className="bg-[#e5deff] w-full lg:w-[800px] text-center xl:w-full h-full z-[1] flex flex-col justify-center items-center gap-8 pb-20">
          <h1 className="text-7xl font-medium font-[times-new-roman]">
            Hydra Booster
          </h1>
          <h3 className="text-4xl font-[times-new-roman]">
            Say Goodbye to Dull Hair
          </h3>
          <p className="text-lg w-[67%] text-gray-500 font-extralight text-center">
            Our wide array of masks provide superior nourishment to bring dull
            hair back to live.
          </p>
          <button className="btn btn-black text-white text-sm px-32 bg-black hover:opacity-70 py-8 flex flex-col justify-center items-center">
            HAIR WE GO
          </button>
        </div>
        <div className="w-full h-full relative overflow-hidden justify-end items-end hidden lg:flex">
          <img
            className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
            src="//cdn.shopify.com/s/files/1/0010/9330/4381/files/hair_masks.jpg?v=1669794848"
            alt="hero img"
            draggable={false}
          />
          {/* <HeroSlideSystem /> */}
          <div
            className={`hidden lg:flex bg-white z-[1] w-52 h-20 bottom-10 right-40 rounded-xl justify-center items-center text-black gap-10 mb-10 mr-32`}
          >
            <span className="material-symbols-outlined hover:-translate-x-1 cursor-pointer select-none">
              keyboard_backspace
            </span>
            <div className="flex justify-center items-center gap-1">
              <span>1</span>
              <span>/</span>
              <span>2</span>
            </div>
            <span className="material-symbols-outlined hover:translate-x-1 cursor-pointer select-none">
              east
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentHeroSection;
