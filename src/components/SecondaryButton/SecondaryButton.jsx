import React from "react";
import { handleScroll } from "../../utils/scrollToElement";

const SecondaryButton = ({
  label,
  className,
  buttonBg,
  redirect = "contact",
}) => {
  return (
    <div className="relative group w-fit">
      <div
        className={`absolute inset-0 translate-x-[4px] translate-y-[1px] rounded-full  opacity-0 transition-all duration-300 group-hover:opacity-65 ${className}`}
      />

      <button
        className={` relative ${buttonBg} xl:py-3 py-2 px-6 rounded-full font-semibold
  transition-all duration-200 ease-out
  hover:-translate-y-1
  active:translate-y-0`}
        onClick={() => handleScroll(redirect)}
      >
        {label}
      </button>
    </div>
  );
};

export default SecondaryButton;
