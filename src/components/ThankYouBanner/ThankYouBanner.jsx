import React from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";

const ThankYouBanner = ({ title, text }) => {
  return (
    <div className="relative z-10 ">
      <div
        // className="w-full xl:h-[120vh] min-[1212px]:h-[95vh] min-[1168px]:h-[90vh] min-[1090px]:h-[85vh] lg:bg-bottom bg-no-repeat min-[1450px]:bg-cover min-[1168px]:bg-cover lg:bg-cover bg-cover min-[1600px]:bg-bottom bg-center"
        // className="bg-cover min-[1500px]:h-[100vh] xl:h-[110vh] lg:h-[640px] min-[900px]:h-[570px] min-[540px]:h-[500px] h-[600px]"
        className=" xl:min-h-[70vh] lg:min-h-[500px] md:min-h-[500px] min-h-[400px] flex flex-col justify-center items-center"
        // style={{
        //   backgroundImage: `url('${images.thankBg}')`,
        //   backgroundPosition: "center center",
        // }}
      >
        <div className="px-6 md:py-6 py-6 h-full w-full flex flex-col justify-center items-center gap-4 ">
          <a href={"/"} className="mb-3">
            <img
              src={images.bigLogo}
              alt=""
              className="xl:w-[200px] w-[140px] object-contain"
            />
          </a>
          <div className="">
            <img src={icons.startIcon} alt="" />
          </div>

          <div>
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-gradTwo to-gradThree lg:text-5xl md:text-4xl text-3xl leading-tight text-center poppins-bold">
              {title}
            </h3>
          </div>
          <div>
            <p className="text-black/65 min-[1166px]:text-lg min-[1100px]:text-base text-sm max-w-[600px] text-center">
              {text}
            </p>
          </div>

          <video
            src={images.thankyouVideo}
            width={800}
            autoPlay
            muted
            loop
          ></video>
        </div>

        <a
          className="p-4 bg-gradient-to-r from-gradTwo to-gradThree text-white rounded-lg mb-6"
          href="/"
        >
          Back To Home
        </a>
      </div>
    </div>
  );
};

export default ThankYouBanner;
