import React from "react";
import icons from "../../assets/icons/icons";
import { handleScroll } from "../../utils/scrollToElement";

const CtaButton = ({
  text,
  className,
  iconBg,
  className2,
  redirect = "contact",
}) => {
  return (
    <div className="relative group w-fit lg:mx-0 mx-auto">
      <div
        className={`absolute inset-0 translate-x-[4px] translate-y-[1px] rounded-full  opacity-0 transition-all duration-300  ${className2}`}
      />
      <div
        className={`relative flex gap-1 items-center md:p-1 p-0.5 rounded-full max-w-fit cursor-pointer shadow-md ${className} 
        transition-all duration-200 ease-out
  hover:-translate-y-1
  active:translate-y-0
        `}
        onClick={() => handleScroll(redirect)}
      >
        <div
          className={` h-10 w-10 rounded-full flex-shrink-0 flex justify-center items-center ${iconBg}`}
        >
          <img src={icons.hand} alt="" className="w-6 object-contain" />
        </div>
        <h3 className=" min-[1100px]:text-base md:text-base text-sm capitalize tracking-tight p-3 font-semibold">
          {text}
        </h3>
      </div>
    </div>
  );
};

export default CtaButton;
