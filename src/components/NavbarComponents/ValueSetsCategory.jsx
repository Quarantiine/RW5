const ValueSetsCategory = ({ linkCategory }) => {
  return (
    <>
      <span
        onClick={() => linkCategory.current.scrollBy(-400, 0)}
        className="xl:hidden material-symbols-outlined text-5xl flex select-none cursor-pointer justify-center items-center absolute top-32 text-white border bg-black border-black z-[2] left-48 rounded-full hover:opacity-80"
      >
        arrow_left
      </span>
      <span
        onClick={() => linkCategory.current.scrollBy(400, 0)}
        className="xl:hidden material-symbols-outlined text-5xl flex select-none cursor-pointer justify-center items-center absolute top-32 text-white border bg-black border-black z-[2] right-3 rounded-full hover:opacity-80"
      >
        arrow_right
      </span>
      <div
        ref={linkCategory}
        className="link-category-3 flex gap-10 justify-start xl:justify-center items-center w-fit overflow-x-scroll overflow-y-hidden pr-10"
      >
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/neverdull_box1_300x.jpg?v=1632347867"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            NeverDull Moment Box
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/UltimateBondingBox_300x.jpg?v=1632348165"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Ultimate Bonding Box
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/edited-G-LUSETA-2_300x.gif?v=1653665542"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Love Is In The Hair Set
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/magicwand6pcs_300x.jpg?v=1669684470"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Magic Wand Box
          </p>
        </div>
      </div>
    </>
  );
};

export default ValueSetsCategory;
