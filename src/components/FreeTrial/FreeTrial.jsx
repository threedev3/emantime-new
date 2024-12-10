import React from "react";
import images from "../../assets/img/images";

const FreeTrial = () => {
  return (
    <div
      className="w-full px-6 xl:py-12 py-6 bg-no-repeat bg-cover bg-center overflow-x-hidden  min-h-[488px] flex justify-center items-center"
      style={{
        backgroundImage: `url('${images.freeTrialBg}')`,
      }}
    >
      <div className="max-w-[1600px] mx-auto flex justify-center items-center gap-6 h-full">
        <div className="flex flex-col justify-center items-center gap-12 h-full">
          <div>
            <h3 className="lg:text-5xl md:text-4xl text-[28px] lg:max-w-2xl md:max-w-lg max-w-sm text-white text-center">
              Join the Thousands Who{" "}
              <span className="poppins-bold">Trust EmanTime</span>
            </h3>
          </div>

          <div>
            <button className="bg-buttonBg py-3 px-6 rounded-full text-white">
              Book Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
