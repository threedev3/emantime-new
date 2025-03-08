import React from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";

const SpecialProgram = () => {
  const specialProgram = [
    "An Intensive & Highly Focused Approach – Just 1-2 hours a day for 3 days, designed to give you rapid improvement.",
    "Led by Expert Teachers – Our instructors have years of experience and a deep passion for teaching the Quran with excellence.",
    "Practical, Engaging & Interactive – A fully immersive experience with personalized feedback to help you master the art of Tajweed.",
    "Perfect for Those Who Want to Revise & Improve – If you have learned Tajweed before but need to refine your recitation, this course is perfect for you.",
    "Designed for Maximum Impact in Minimum Time – In just three days, you’ll see a visible improvement in your fluency and pronunciation.",
    "A Spiritual Investment for Ramadan – Strengthen your connection with the Quran and recite with confidence during Taraweeh, at home, and beyond.",
  ];

  return (
    <div className="w-full px-6 lg:py-12 py-6 bg-no-repeat lg:bg-top bg-center bg-cover overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto flex lg:flex-row lg:justify-between items-center lg:gap-8">
        <div>
          <img
            src={images.specialImg}
            alt=""
            className="w-[500px] object-contain lg:block hidden"
          />
        </div>
        <div className="flex flex-col xl:gap-8 gap-6">
          <div>
            <img
              src={icons.startIcon}
              alt=""
              className="min-[1400px]:w-16 w-14"
            />
          </div>
          <div>
            <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl xl:max-w-lg max-w-sm">
              Why This Program is <span className="poppins-bold">Special?</span>
            </h3>
          </div>
          <div className="flex flex-col xl:gap-6 gap-4 max-w-2xl">
            {specialProgram.map((item, index) => (
              <div
                className="flex flex-row gap-3 items-start justify-start"
                key={index}
              >
                <img
                  src={icons.check}
                  alt=""
                  className="w-5 h-5 flex-shrink-0 mt-1"
                />
                <p className=" font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProgram;
