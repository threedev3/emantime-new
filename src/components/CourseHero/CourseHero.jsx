import React from "react";
import images from "../../assets/img/images";
import Navbar from "../Navbar/Navbar";
import CtaButton from "../CtaButton/CtaButton";
import icons from "../../assets/icons/icons";

const CourseHero = ({ title, text, boldTitle, image }) => {
  return (
    <div className="relative z-10">
      <div
        // className="w-full xl:h-[120vh] min-[1212px]:h-[95vh] min-[1168px]:h-[90vh] min-[1090px]:h-[85vh] lg:bg-bottom bg-no-repeat min-[1450px]:bg-cover min-[1168px]:bg-cover lg:bg-cover bg-cover min-[1600px]:bg-bottom bg-center"
        // className="bg-cover min-[1500px]:h-[100vh] xl:h-[110vh] lg:h-[640px] min-[900px]:h-[570px] min-[540px]:h-[500px] h-[600px]"
        className="bg-cover bg-black xl:min-h-[70vh] lg:min-h-[500px] md:min-h-[500px] min-h-[400px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center bottom",
        }}
      >
        <Navbar />

        <div className="p-6 h-full w-full flex flex-col justify-center items-center gap-6 min-[1400px]:mt-8 xl:mt-0 lg:mt-10">
          <div className="">
            <img src={icons.startIcon} alt="" />
          </div>

          <div>
            <h3 className="text-white xl:text-5xl md:text-4xl text-3xl leading-tight text-center poppins-bold max-w-md">
              {boldTitle} <span className="">{title}</span>
            </h3>
          </div>
          <div>
            <p className="text-white min-[1166px]:text-lg min-[1100px]:text-base text-base text-center min-[1166px]:max-w-md max-w-lg">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
