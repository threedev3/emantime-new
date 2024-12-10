import React from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";

const CourseFor = ({ courseFor, transparent = false }) => {
  return (
    <div className="w-full px-6 py-20 overflow-hidden relative">
      <div className="absolute md:right-0 -right-20 md:-bottom-44 -bottom-72 overflow-hidden -z-10 ">
        <img src={images.design1} alt="" className="" />
      </div>
      <div className="absolute md:left-0 -left-20 md:-top-32 -top-48 overflow-hidden -z-10">
        <img src={images.design3} alt="" />
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-8">
        <div>
          <img src={icons.startIcon} alt="" />
        </div>

        <div>
          <h3 className="text-black lg:text-5xl md:text-4xl text-3xl leading-tight ">
            Who This <span className="poppins-bold">Course</span> Is For
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {courseFor.map((item, index) => (
            <div className="flex flex-row gap-3 items-center justify-center">
              <img src={icons.check} alt="" className="w-6 h-6 flex-shrink-0" />
              <p className="text-black/65">{item}</p>
            </div>
          ))}
        </div>

        <div>
          <button className="py-3 px-6 rounded-full bg-brownColor text-white">
            Read More
          </button>
        </div>

        {transparent && (
          <div className="h-[2px] w-full bg-black/15 sm:mt-12 mt-8"></div>
        )}
      </div>
    </div>
  );
};

export default CourseFor;
