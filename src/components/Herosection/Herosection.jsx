import React from "react";
import images from "../../assets/img/images";
import Navbar from "../Navbar/Navbar";
import CtaButton from "../CtaButton/CtaButton";
import icons from "../../assets/icons/icons";
import HeroStats from "../HeroStats/HeroStats";
import Choose from "../Choose/Choose";

const Herosection = () => {
  const stats = [
    {
      icon: icons.heroIcon1,
      stat: "250",
      suffix: "k",
      title: "Assisted Students",
    },
    {
      icon: icons.heroIcon2,
      stat: "95",
      suffix: "%",
      title: "Satisfied Customers",
    },
  ];
  return (
    <div className="relative z-10">
      <div
        // className="w-full xl:h-[120vh] min-[1212px]:h-[95vh] min-[1168px]:h-[90vh] min-[1090px]:h-[85vh] lg:bg-bottom bg-no-repeat min-[1450px]:bg-cover min-[1168px]:bg-cover lg:bg-cover bg-cover min-[1600px]:bg-bottom bg-center"
        className="bg-cover min-[1500px]:h-[100vh] xl:h-[110vh] lg:h-[640px] min-[900px]:h-[570px] min-[540px]:h-[500px] h-[600px] bg-header"
        style={{
          backgroundImage: `url('${images.header}')`,
          // backgroundPosition: "-445px bottom",
          // backgroundPosition: "center bottom",
        }}
      >
        <Navbar />

        <div className="px-6 w-full ">
          <div className="flex lg:justify-between justify-center items-start gap-6 max-w-[1600px] mx-auto">
            <div className="flex flex-col min-[1416px]:gap-6 gap-4 min-[1450px]:mt-16 min-[1166px]:mt-8 mt-4">
              <img
                src={images.tasmiyah}
                alt=""
                className="aspect-auto xl:w-80 sm:w-60 w-48 lg:mx-0 mx-auto"
              />

              <div>
                <h3 className="text-white min-[1416px]:text-[64px] min-[1166px]:text-6xl lg:text-5xl sm:text-3xl text-2xl poppins-light sm:max-w-[600px] max-w-[300px] mx-auto leading-tight lg:text-start text-center">
                  Connecting Hearts to the{" "}
                  <span className="poppins-bold">Quran</span>
                </h3>
              </div>
              <div>
                <p className="text-white min-[1166px]:text-lg min-[1100px]:text-base text-sm max-w-[600px] lg:text-start text-center poppins-light">
                  At EmanTime, we believe that learning the Quran is not just
                  about reading words—it’s about building a lifelong bond with
                  the words of Allah.
                </p>
              </div>

              <CtaButton
                text="Book Your Free Trial Class Now"
                className="bg-white text-heroCta lg:mx-0 mx-auto"
                iconBg="bg-buttonBg/20"
              />
            </div>

            <div className="relative lg:block hidden">
              <img
                src={images.heroImg}
                alt=""
                className="object-contain -mt-12 min-[1600px]:w-[650px] min-[1500px]:w-[660px] min-[1450px]:w-[630px] xl:w-[580px] w-[560px]"
              />

              <HeroStats
                stats={stats[0]}
                className="absolute top-40 -right-6"
              />

              <HeroStats
                stats={stats[1]}
                className="absolute bottom-[16%] left-[0%]"
              />
            </div>
          </div>
        </div>
      </div>

      <Choose />
    </div>
  );
};

export default Herosection;
