import { useState } from "react";
import gsap from "gsap/dist/gsap";

const FreeShippingPopUp = () => {
  const [hide, setHide] = useState(true);

  const timedClose = () => {
    gsap.context(() => {
      gsap.to(".pop-up-container", {
        height: 0,
        overflow: "hidden",
        opacity: 0,
        duration: 0.2,
      });
    });
    setTimeout(() => setHide(false), 1300);
  };

  return (
    <>
      {hide && (
        <div className="pop-up-container relative bg-gray-100 text-black w-full h-10 flex justify-center items-center">
          <p>Free shipping on orders over $35</p>
          <span
            onClick={timedClose}
            className="cursor-pointer material-symbols-outlined absolute right-10"
          >
            close
          </span>
        </div>
      )}
    </>
  );
};

export default FreeShippingPopUp;
