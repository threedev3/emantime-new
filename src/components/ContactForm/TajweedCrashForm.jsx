import React from "react";
import images from "../../assets/img/images";
import Form from "./Form";
import icons from "../../assets/icons/icons";

const TajweedCrashForm = () => {
  return (
    <div
      className="w-full px-6 min-[1400px]:pt-12 pt-6 overflow-hidden relative "
      id="contact"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center min-[1400px]:gap-10 gap-6 xl:pb-6">
        <div>
          <img
            src={icons.startIcon}
            alt=""
            className="min-[1400px]:w-16 w-14"
          />
        </div>
        <div>
          <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl max-w-3xl mb-4 text-center leading-10">
            We'd Love Your To Hear Your Thoughts About EmanTime
          </h3>
        </div>

        <Form />

        <div className="h-[1px] w-full bg-black/25 sm:mt-12 mt-8"></div>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-8 mt-12">
        <div>
          <img
            src={icons.startIcon}
            alt=""
            className="min-[1400px]:w-16 w-14"
          />
        </div>
        {/* <div>
          <img
            src={images.arabic1}
            alt=""
            className="min-[1400px]:w-72 xl:w-60 w-52 object-contain"
          />
        </div> */}

        <div>
          <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl text-center xl:max-w-2xl lg:max-w-xl max-w-[590px]">
            3 Days. One Course. A Lifetime of{" "}
            <span className="poppins-bold">Beautiful Quran Recitation!</span>
          </h3>
        </div>
        <div>
          <p className="min-[1400px]:text-lg xl:text-lg text-base text-center max-w-3xl">
            This specially designed, high-impact crash course is your
            opportunity to honor the Quran, connect deeply with its words, and
            elevate your recitation to a level you’ve always wished for.
          </p>
        </div>
      </div>

      {/* <div className="absolute left-0 -top-36 overflow-hidden -z-20">
        <img src={images.design3} alt="" className="xl:w-auto md:w-48 w-40" />
      </div> */}
    </div>
  );
};

export default TajweedCrashForm;
