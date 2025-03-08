import React from "react";
import icons from "../../assets/icons/icons";

const TajweedCrashText = () => {
  return (
    <div className="w-full px-6 py-12 bg-no-repeat lg:bg-top bg-center bg-cover overflow-hidden relative mt-10 -z-10">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-8">
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
    </div>
  );
};

export default TajweedCrashText;
