import React from "react";
import images from "../../assets/img/images";
import Navbar from "../Navbar/Navbar";
import icons from "../../assets/icons/icons";
import TajweedNavbar from "../Navbar/TajweedNavbar";

const TajweedCrashHero = () => {
  return (
    <div className="relative z-10">
      <div
        // className="w-full xl:h-[120vh] min-[1212px]:h-[95vh] min-[1168px]:h-[90vh] min-[1090px]:h-[85vh] lg:bg-bottom bg-no-repeat min-[1450px]:bg-cover min-[1168px]:bg-cover lg:bg-cover bg-cover min-[1600px]:bg-bottom bg-center"
        // className="bg-cover min-[1500px]:h-[100vh] xl:h-[110vh] lg:h-[640px] min-[900px]:h-[570px] min-[540px]:h-[500px] h-[600px]"
        className="bg-cover bg-[#051d17] xl:min-h-[75vh] lg:min-h-[500px] md:min-h-[500px] min-h-[400px]"
        style={{
          backgroundImage: `url(${images.tajweebCrashBg})`,
          backgroundPosition: "center top",
        }}
      >
        <TajweedNavbar />
        <div className="max-w-[1600px] mx-auto flex lg:flex-row flex-col lg:justify-between items-center lg:gap-8 min-[1400px]:mt-16 lg:mt-4 mt-10 md:pb-0 pb-3">
          <div className="p-6 h-full w-full flex flex-col lg:justify-start lg:items-start justify-center items-center lg:gap-6 gap-3 min-[1400px]:mt-8 xl:mt-0 lg:mt-10">
            <div className="">
              <img
                src={images.heroArabic}
                alt=""
                className="md:w-[250px] w-[200px]"
              />
            </div>

            <div>
              <h3 className="text-white xl:text-[44px] xl:leading-snug md:text-4xl text-3xl leading-tight lg:text-start text-center xl:max-w-xl max-w-lg">
                Perfect Your{" "}
                <span className="poppins-bold">Quran Recitation</span> in Just 3
                Days
              </h3>
            </div>
            <div>
              <p className="text-white min-[1166px]:text-xl min-[1100px]:text-lg text-lg min-[1166px]:max-w-md lg:text-start text-center max-w-lg">
                A Special Ramadan{" "}
                <span className="poppins-bold">Tajweed Crash Course</span>
              </p>
            </div>
          </div>

          <div>
            <img
              src={images.heroImgTajweedCrash}
              alt=""
              className="lg:w-[700px] md:w-[500px] w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TajweedCrashHero;
