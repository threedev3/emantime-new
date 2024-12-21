import React from "react";
import images from "../../assets/img/images";
import Navbar from "../Navbar/Navbar";
import CtaButton from "../CtaButton/CtaButton";
import icons from "../../assets/icons/icons";
import TermsNavbar from "../Navbar/TermsNavbar";

const TermsHeader = ({ title, text, boldTitle }) => {
  return (
    <div className="relative z-10">
      <div
        // className="w-full xl:h-[120vh] min-[1212px]:h-[95vh] min-[1168px]:h-[90vh] min-[1090px]:h-[85vh] lg:bg-bottom bg-no-repeat min-[1450px]:bg-cover min-[1168px]:bg-cover lg:bg-cover bg-cover min-[1600px]:bg-bottom bg-center"
        // className="bg-cover min-[1500px]:h-[100vh] xl:h-[110vh] lg:h-[640px] min-[900px]:h-[570px] min-[540px]:h-[500px] h-[600px]"
        className="xl:min-h-[70vh] lg:min-h-[500px] md:min-h-[500px] min-h-[400px]"
      >
        <TermsNavbar />

        <div className="p-6 sm:py-16 py-10 h-full w-full flex flex-col justify-center items-center gap-10 min-[1400px]:mt-8 xl:mt-0 lg:mt-10">
          <div>
            <h3 className="text-black lg:text-5xl md:text-4xl text-3xl leading-tight text-center poppins-bold">
              {boldTitle} <span className="">{title}</span>
            </h3>
          </div>
          <div>
            <p className="text-black/65 min-[1166px]:text-lg min-[1100px]:text-base text-sm max-w-[600px] text-center">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsHeader;
