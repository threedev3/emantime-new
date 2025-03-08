import React from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";

const CourseSchedule = () => {
  const processItems = [
    {
      icon: icons.schedule1,
      title: "Dates",
      description: "Friday, Saturday & Sunday ",
      boldDescription: "(This Weekend Only!)",
    },
    {
      icon: icons.schedule2,
      title: "Duration",
      description: "1-2 hours per day",
    },
    {
      icon: icons.schedule3,
      title: " Online & Interactive",
      description: " Join from Anywhere in the World",
    },
    {
      icon: icons.schedule4,
      title: "Expert Quran Teacher",
      description: "Taught by Expert Quran Teachers with Years of Experience",
    },
    {
      icon: icons.schedule5,
      title: "Limited",
      description: "Time Ramadan Special Offer",
    },
  ];

  return (
    <div className="w-full px-6 lg:py-12 py-6 relative ">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-4 justify-center items-center">
        <div>
          <img
            src={icons.startIcon}
            alt=""
            className="min-[1400px]:w-16 w-14"
          />
        </div>

        <div>
          <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl text-center xl:max-w-md max-w-sm">
            Course <span className="poppins-bold">Details </span>&{" "}
            <span className="poppins-bold">Schedule</span>
          </h3>
        </div>

        {/* <div className="flex flex-row justify-between items-start w-full mt-12"> */}
        <div className="w-full mt-6 flex justify-center flex-wrap min-[1600px]:gap-10 min-[1400px]:gap-6 md:gap-3  gap-3">
          {processItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-start justify-between xl:w-[230px] w-[300px] min-[1400px]:px-6 px-3 xl:py-8 py-6 hover:shadow-2xl hover:rounded-2xl transition-all duration-300"
            >
              <div className="flex flex-col min-[1400px]:gap-6 gap-3 items-center relative w-full">
                <div className="xl:p-6 p-5 rounded-full border-2 border-brownColor relative">
                  <img
                    src={icons.check}
                    alt=""
                    className="absolute inset-0 xl:w-7 w-6"
                  />
                  <img src={item.icon} alt="" className="xl:w-12 w-10" />
                </div>
                <div>
                  <h3 className="min-[1400px]:text-lg text-base max-w-[160px] text-center font-semibold min-[1400px]:min-h-[52px] min-h-[44px]">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="xl:text-base text-sm max-w-[220px] text-center">
                    {item.description}
                  </p>
                  <p className="xl:text-base text-sm max-w-[220px] text-center poppins-bold">
                    {item.boldDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 -top-0 -z-10 ">
        <img
          src={images.design3}
          alt=""
          className="min-[1600px]:w-60 xl:w-36 w-[146px]"
        />
      </div>
      <div className="absolute right-0 -bottom-24 overflow-hidden -z-10">
        <img
          src={images.design1}
          alt=""
          className="min-[1600px]:w-60 xl:w-36 w-[150px]"
        />
      </div>

      <div className="bg-[#DB9E30] w-[110%] absolute -bottom-28 -left-5 right-0 flex flex-row whitespace-nowrap overflow-x-hidden px-6 py-8 transform lg:-rotate-[4deg] -rotate-6">
        <div className="flex animate-marquee-rtl gap-12">
          {Array(2)
            .fill(null)
            .map((_, duplicateIndex) => (
              <div
                className="flex gap-12 whitespace-nowrap"
                key={duplicateIndex}
              >
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-between gap-12 items-center h-full  whitespace-nowrap"
                    >
                      <p className="text-white font-medium text-lg">
                        Seats are filling fast—don't miss out!
                      </p>
                      <span className="inline-block w-4 h-4 bg-white rounded-full ml-4"></span>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
      <div className="bg-[#E3E3E3] w-[110%] absolute -bottom-28 -left-5 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-8 transform lg:rotate-[4deg] rotate-6">
        <div className="flex animate-marquee-ltr gap-12">
          {Array(2)
            .fill(null)
            .map((_, duplicateIndex) => (
              <div
                className="flex gap-12 whitespace-nowrap"
                key={duplicateIndex}
              >
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-between gap-12 items-center h-full  whitespace-nowrap"
                    >
                      <p className="text-black font-medium text-lg">
                        Seats are filling fast—don't miss out!
                      </p>
                      <span className="inline-block w-4 h-4 bg-black rounded-full ml-4"></span>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
      {/* <div className="bg-[#E3E3E3] w-full absolute -bottom-28 left-0 right-0 flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar px-6 py-8 transform -rotate-3">
        <div className="flex animate-marquee-ltr gap-12">
          {Array(2)
            .fill(null)
            .map((_, duplicateIndex) => (
              <div
                className="flex gap-12 whitespace-nowrap"
                key={duplicateIndex}
              >
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center gap-4 h-full w-[230px] whitespace-nowrap"
                    >
                      <p className="text-lg">
                        Seats are filling fast—don’t miss out!
                      </p>
                      <div className="w-8 h-8 rounded-full bg-black"></div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default CourseSchedule;
