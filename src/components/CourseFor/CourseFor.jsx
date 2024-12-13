import React from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const CourseFor = ({ courseFor, transparent = false }) => {
  return (
    <div
      className={`w-full px-6 xl:pt-12 ${
        transparent ? "pb-6" : "pb-12"
      } pt-12 overflow-hidden relative`}
    >
      <div className="absolute md:right-0 -right-10 md:-bottom-0 -bottom-10 overflow-hidden -z-10 ">
        <img src={images.design1} alt="" className="xl:w-52 md:w-40 w-32" />
      </div>
      <div className="absolute md:left-0 -left-10 md:-top-32 -top-32 overflow-hidden -z-10">
        <img src={images.design3} alt="" className="xl:w-auto md:w-48 w-40" />
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-8">
        <div>
          <img src={icons.startIcon} alt="" />
        </div>

        <div>
          <h3 className="text-black xl:text-5xl md:text-4xl text-3xl leading-tight text-center">
            Who This <span className="poppins-bold">Course</span> Is For
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {courseFor.map((item, index) => (
            <div className="flex flex-row gap-3 items-start justify-center">
              <img src={icons.check} alt="" className="w-6 h-6 flex-shrink-0" />
              <p className="text-black/65">{item}</p>
            </div>
          ))}
        </div>

        <div>
          <SecondaryButton
            label="Read More"
            className="bg-[#DB9E30]"
            buttonBg="bg-buttonBg text-white xl:text-base lg:text-sm md:text-base text-sm"
          />
        </div>

        {transparent && (
          <div className="h-[2px] w-full bg-black/15 sm:mt-8 mt-8"></div>
        )}
      </div>
    </div>
  );
};

export default CourseFor;
