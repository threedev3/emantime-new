import React from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";

const MasterQuran = () => {
  const masterQuran = [
    "How often have you wished you could recite the Quran flawlessly, with confidence and clarity? Have you ever found yourself hesitant, unsure if your pronunciation is correct?",
    "Ramadan is here—a time of blessings, reflection, and the Quran. This is your chance to honor the words of Allah by refining your recitation, improving your fluency, and perfecting your Tajweed.",
    "At EmanTime, we have designed a special 3-day intensive Tajweed crash course—a powerful, fast-track learning experience led by highly experienced teachers who have spent years helping students recite the Quran the way it was meant to be recited.",
    "This is not just another course—it’s a deeply immersive and result-driven program crafted to help you elevate your recitation in record time.",
  ];

  return (
    <div className="w-full px-6 lg:py-12 py-6 bg-no-repeat lg:bg-top bg-center bg-cover overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-8">
        <div>
          <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl text-center xl:max-w-lg lg:max-w-sm max-w-md">
            Master Quran Recitation with Confidence This{" "}
            <span className="poppins-bold">Ramadan!</span>
          </h3>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          {masterQuran.map((item, index) => (
            <p
              className="min-[1400px]:text-lg xl:text-lg text-base text-center max-w-3xl font-semibold"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="h-[1px] w-full bg-black/25 sm:mt-12 mt-8"></div>
      </div>
      <div className="absolute right-0 -top-24 overflow-hidden -z-10">
        <img src={images.design1} alt="" className="xl:w-60 w-[150px]" />
      </div>
      <div className="absolute left-0 -bottom-0 overflow-hidden -z-10">
        <img src={images.design3} alt="" className="xl:w-60 w-[150px]" />
      </div>
    </div>
  );
};

export default MasterQuran;
