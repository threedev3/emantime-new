import React from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";

const CourseOverview = ({ image, overviewText, reverse = false }) => {
  return (
    <div className="w-full px-6 py-12 overflow-x-hidden relative">
      <div
        className={`max-w-[1600px] mx-auto flex lg:justify-between lg:items-center gap-6 ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        <div className={`${reverse ? "lg:order-2" : ""} lg:block hidden`}>
          <img src={image} alt="" className="rounded-2xl object-contain" />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <img src={icons.startIcon} alt="" />
          </div>

          <div>
            <h3 className="text-black lg:text-5xl md:text-4xl text-3xl leading-tight poppins-bold">
              Course <span className="">Overview</span>
            </h3>
          </div>

          <div>
            <p className="text-black/65 min-[1166px]:text-lg min-[1100px]:text-base text-sm lg:max-w-[600px] ">
              {overviewText}
            </p>
          </div>

          <div>
            <button className="py-3 px-6 rounded-full bg-brownColor text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
