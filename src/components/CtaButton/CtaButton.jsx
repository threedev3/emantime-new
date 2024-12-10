import React from "react";
import icons from "../../assets/icons/icons";

const CtaButton = ({ text, className, iconBg }) => {
  return (
    <div
      className={`flex gap-1 items-center md:p-1 p-0.5 rounded-full max-w-fit cursor-pointer shadow-md ${className} `}
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
  );
};

export default CtaButton;
