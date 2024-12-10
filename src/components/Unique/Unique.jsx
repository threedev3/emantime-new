import React from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";
import { handleScroll } from "../../utils/scrollToElement";

const Unique = () => {
  return (
    <div className="w-full px-6 xl:py-12 py-6 overflow-x-hidden relative">
      <div className="max-w-[1600px] mx-auto ">
        <div className="flex justify-between items-center gap-8">
          <div className="lg:block hidden">
            <img src={images.uniqueImg} alt="" />
          </div>
          <div className="flex flex-col xl:gap-8 gap-3 ">
            <div>
              <img src={icons.startIcon} alt="" />
            </div>
            <div>
              <img src={images.arabic2} alt="" className="" />
            </div>

            <div>
              <h3 className="xl:text-5xl md:text-4xl text-3xl max-w-lg text-black">
                What Makes{" "}
                <span className="poppins-bold">EmanTime Unique?</span>
              </h3>
            </div>

            <ul className="flex flex-col xl:gap-3 gap-2 ml-4">
              <li className="text-black text-base list-disc ">
                Struggling to find qualified teachers who truly understand your
                needs?
              </li>
              <li className="text-black text-base list-disc ">
                Facing challenges in balancing busy schedules with consistent
                learning?
              </li>
              <li className="text-black text-base list-disc ">
                Worried about keeping your children engaged or finding a
                female-friendly environment?
              </li>
            </ul>

            <div className=" ml-3">
              <button
                className="py-3 px-6 bg-buttonBg text-white rounded-full"
                onClick={() => handleScroll("contact")}
              >
                Get Enrolled
              </button>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-black/25 sm:mt-16 mt-8"></div>
      </div>
      <div className="absolute left-0 -top-36 overflow-hidden -z-20">
        <img src={images.design3} alt="" />
      </div>
    </div>
  );
};

export default Unique;
