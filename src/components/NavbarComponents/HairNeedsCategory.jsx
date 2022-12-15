const HairNeedsCategory = ({ linkCategory }) => {
  return (
    <>
      <span
        onClick={() => linkCategory.current.scrollBy(-400, 0)}
        className="xl:hidden material-symbols-outlined text-5xl select-none flex cursor-pointer justify-center items-center absolute top-32 text-white border bg-black border-black z-[2] left-48 rounded-full hover:opacity-80"
      >
        arrow_left
      </span>
      <span
        onClick={() => linkCategory.current.scrollBy(400, 0)}
        className="xl:hidden material-symbols-outlined text-5xl select-none flex cursor-pointer justify-center items-center absolute top-32 text-white border bg-black border-black z-[2] right-3 rounded-full hover:opacity-80"
      >
        arrow_right
      </span>
      <div
        ref={linkCategory}
        className="link-category-4 xl:grid xl:grid-cols-4 flex gap-10 justify-start xl:justify-center items-center w-fit overflow-x-scroll overflow-y-hidden pr-10"
      >
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/moisture_2x-min_8f152d0e-2f77-4119-a0aa-1961dd2ff0bc_300x.jpg?v=1632343745"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Intense Moisture
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/more-volume_2x-min_40617fed-5929-4e73-95b6-080d88217b79_300x.jpg?v=1632340565"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            More Volume
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/vibrant-color_2x-min_3f89ff8f-becb-4a13-99b9-593d50ab5950_300x.jpg?v=1632342537"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Vibrant Color
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/clarify_2x-min_e7a9ddd8-a6cb-4ca7-8234-af01a9a7c42b_300x.jpg?v=1632349969"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Clarify Scalp
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/defined-curl_2x-min_0096daa7-c7ee-428d-969e-0bcd885b1f1f_300x.jpg?v=1632350161"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Defined Curl
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/collections/frizziness_2x-min_303116fb-c19f-45f4-b5b3-fd1bb9b1f772_300x.jpg?v=1632340318"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Tame Frizziness
          </p>
        </div>
      </div>
    </>
  );
};

export default HairNeedsCategory;
