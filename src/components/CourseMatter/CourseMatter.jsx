import React from "react";
import icons from "../../assets/icons/icons";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const CourseMatter = ({
  matterText,
  image,
  reverse = false,
  transparent = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden relative xl:flex xl:justify-start xl:items-center xl:gap-20 grid lg:grid-cols-2 gap-12 ${
        transparent ? "bg-transparent" : "bg-courseMatter"
      }`}
    >
      <div
        className={`lg:flex hidden ${
          reverse ? "order-2 justify-end w-full" : "order-1 justify-start"
        }  `}
      >
        <img src={image} alt="" className="" />
      </div>

      <div
        className={`flex flex-col gap-8 px-6 py-6 lg:justify-center items-center  ${
          reverse ? "order-1 w-full " : "order-2"
        }`}
      >
        <div
          className={`flex flex-col gap-8 ${
            reverse ? "lg:max-w-2xl" : "lg:max-w-3xl"
          } lg:w-auto w-full`}
        >
          <div>
            <img src={icons.startIcon} alt="" />
          </div>

          <div>
            <h3 className="text-black xl:text-5xl md:text-4xl text-3xl leading-tight lg:max-w-sm">
              Why This Course <span className="poppins-bold">Matters</span>
            </h3>
          </div>

          <div>
            <p className="text-black/65 min-[1166px]:text-lg min-[1100px]:text-base md:text-base text-sm max-w-4xl">
              {matterText}
            </p>
          </div>

          <div>
            <SecondaryButton
              label="Read More"
              className="bg-[#DB9E30]"
              buttonBg="bg-buttonBg text-white xl:text-base lg:text-sm md:text-base text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMatter;
