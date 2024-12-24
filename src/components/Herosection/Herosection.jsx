import React, { useState } from "react";
import images from "../../assets/img/images";
import Navbar from "../Navbar/Navbar";
import CtaButton from "../CtaButton/CtaButton";
import icons from "../../assets/icons/icons";
import HeroStats from "../HeroStats/HeroStats";
import Choose from "../Choose/Choose";
import TrialModal from "../TrialModal/TrialModal";

const Herosection = () => {
  const [openModal, setOpenModal] = useState(false);

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
        // className="bg-cover xl:h-custom min-[1166px]:h-[580px] lg:h-[550px] min-[900px]:h-[570px] min-[540px]:h-[470px] h-[500px] bg-header bg-gradThree"
        className="bg-cover  bg-header bg-gradThree"
        style={{
          // backgroundImage: `url('${images.header}')`,
          backgroundImage: `url('${images.heroMosque}')`,
          backgroundPosition: "center top",
          // backgroundPosition: "center top",
        }}
      >
        <Navbar />

        <div className="px-6 w-full ">
          <div className="flex lg:justify-between justify-center items-start gap-6 max-w-[1600px] mx-auto">
            <div className="flex flex-col min-[1416px]:gap-5 lg:gap-3 sm:gap-6 gap-4 min-[1450px]:mt-16 min-[1166px]:mt-10 lg:mt-10 min-[1166px]:mb-10 lg:mb-0 sm:mt-14 min-[540px]:mt-4 sm:mb-14 min-[540px]:mb-4 mt-12 mb-12">
              <img
                src={images.tasmiyah}
                alt=""
                className=" min-[1500px]:w-72 xl:w-[270px] sm:w-60 w-48 lg:mx-0 mx-auto object-contain"
              />

              <div>
                <h3 className="text-white min-[1416px]:text-[64px] min-[1166px]:text-[52px] lg:text-5xl sm:text-3xl text-2xl poppins-light min-[1400px]:max-w-[600px] sm:max-w-[560px] max-w-[280px] lg:mx-0 mx-auto leading-tight lg:text-start text-center">
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
                className="bg-white text-heroCta lg:mx-0 mx-auto min-[1400px]:text-base text-sm"
                iconBg="bg-buttonBg/20"
                className2="group-hover:opacity-20 bg-[#ffffff]"
                onClick={() => setOpenModal(true)}
              />
            </div>

            <div className="relative lg:block hidden">
              <img
                src={images.heroImg}
                alt=""
                className="object-contain min-[1450px]:-mt-[140px] xl:-mt-[100px] -mt-[74px] min-[1600px]:w-[700px] min-[1500px]:w-[680px] min-[1450px]:w-[640px] xl:w-[530px] w-[560px]"
              />

              <HeroStats
                stats={stats[0]}
                className="absolute top-40 -right-6"
              />

              <HeroStats
                stats={stats[1]}
                className="absolute bottom-[19%] left-[0%]"
              />
            </div>
          </div>
        </div>
        {openModal ? (
          <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
        ) : null}
      </div>

      {/* <Choose /> */}
    </div>
  );
};

export default Herosection;
