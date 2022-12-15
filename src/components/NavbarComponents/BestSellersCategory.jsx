const BestSellersCategory = ({ linkCategory }) => {
  return (
    <>
      <span
        onClick={() => linkCategory.current.scrollBy(-400, 0)}
        className="xl:hidden material-symbols-outlined text-5xl select-none cursor-pointer flex justify-center items-center absolute top-32 text-white border bg-black border-black z-[2] left-48 rounded-full hover:opacity-50"
      >
        arrow_left
      </span>
      <span
        onClick={() => linkCategory.current.scrollBy(400, 0)}
        className="xl:hidden material-symbols-outlined text-5xl select-none cursor-pointer flex justify-center items-center absolute top-32 text-white border bg-black border-black z-[2] right-3 rounded-full hover:opacity-50"
      >
        arrow_right
      </span>
      <div
        ref={linkCategory}
        className="link-category-2 flex xl:grid xl:grid-cols-4 gap-10 justify-start xl:justify-center items-center w-fit overflow-x-scroll overflow-y-hidden pr-10"
      >
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/1Biotin_Collagenduo_300x.jpg?v=1666826360"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Biotin & Collagen Bundle
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/3_dc7d11ab-0acf-423f-8d61-cd3bd59b6882_300x.jpg?v=1632346794"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Rose Oil Body Wash
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/ColorBrightening_886142c6-5af6-4ec0-96a1-31075411d310_300x.jpg?v=1636159570"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Color Brightening Bundle
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/052622KeratinSmoothDuo_300x.jpg?v=1653588765"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Keratin Bundle
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/G_20LUSETA_206_300x.gif?v=1653665136"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Curl Enhancing Leave-in Cream
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/BiotinB-Complex_300x.jpg?v=1636159273"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Biotin B-Complex Thickening Bundle
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/edited-LUSETA-GIF-3_1_300x.gif?v=1661824387"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Hemp Oil Complex Bundle
          </p>
        </div>
        <div className="link-img-container flex flex-col justify-center items-center gap-3">
          <div className="w-52 h-52 relative bg-pink-100 rounded-xl overflow-hidden mx-auto cursor-pointer flex justify-end items-start">
            <img
              className="w-full h-full hover:scale-110"
              src="https://cdn.shopify.com/s/files/1/0010/9330/4381/products/PerfectBondingno3_300x.jpg?v=1653662261"
              alt="new arrival img"
            />
            <span className="material-symbols-outlined hover:text-white absolute top-2 right-2">
              favorite
            </span>
          </div>
          <p className="hover:text-[#FABDBD] w-52 h-5 font-[times-new-roman] cursor-pointer">
            Perfect Bonding No.3 Restoring Leave-in Cream
          </p>
        </div>
      </div>
    </>
  );
};

export default BestSellersCategory;
