import React from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";

const PricingText = () => {
  return (
    <div className="w-full px-6 py-20 overflow-hidden relative ">
      <div className="absolute md:right-0 -right-20 md:-bottom-44 -bottom-72 overflow-hidden -z-10 ">
        <img src={images.design1} alt="" className="" />
      </div>
      <div className="absolute md:left-0 -left-20 md:-top-32 -top-48 overflow-hidden -z-10">
        <img src={images.design3} alt="" />
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center md:gap-12 gap-6">
        <div className="">
          <img src={icons.startIcon} alt="" />
        </div>

        <div>
          <h3 className="lg:text-5xl md:text-4xl text-3xl text-center">
            Our Economical <span className="poppins-bold">Pricing</span>
          </h3>
        </div>

        <div>
          <p className="text-center max-w-xl text-black/60 sm:text-base text-sm">
            For all new students, we provide a free one-week trial of Quran
            lessons. So what are you waiting for? Register Now
          </p>
        </div>

        <div>
          <button className="py-3 px-6 rounded-full bg-brownColor text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingText;
