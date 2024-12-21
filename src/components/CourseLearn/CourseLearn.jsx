import React, { useState } from "react";
import icons from "../../assets/icons/icons";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import TrialModal from "../TrialModal/TrialModal";
import { useLocation } from "react-router-dom";

const CourseLearn = ({ image, learnItems, reverse = false, bgColor }) => {
  const [openModal, setOpenModal] = useState(false);
  // const location = useLocation();

  console.log(location.pathname);

  return (
    <div
      className={`w-full px-6 py-12 overflow-x-hidden relative bg-gradient-to-r ${bgColor}`}
      // style={{
      //   backgroundImage: `url(${image})`,
      // }}
    >
      {location.pathname === "/courses/arabic" ? (
        <div
          className={`absolute xl:top-[15%] top-[20%] ${
            reverse
              ? "left-0 justify-start "
              : "min-[1450px]:right-24 xl:right-8 right-2 justify-end w-[40%]"
          } lg:flex hidden`}
        >
          <img
            src={image}
            alt=""
            className={` ${reverse ? "xl:w-full w-[80%] object-contain" : ""}`}
          />
        </div>
      ) : (
        <div
          className={`absolute top-0 ${
            reverse ? "left-0 justify-start " : "right-0 justify-end w-[90%]"
          } lg:flex hidden h-full `}
        >
          <img
            src={image}
            alt=""
            className={`h-full ${
              reverse ? "xl:w-full w-[80%] object-contain" : ""
            }`}
          />
        </div>
      )}
      <div
        className={`max-w-[1600px] mx-auto flex relative z-30 ${
          reverse ? "lg:justify-end justify-center" : "justify-start"
        }`}
      >
        <div className="flex flex-col w-full min-[1400px]:gap-10 xl:gap-8 gap-8 xl:max-w-[50%] lg:max-w-[53%]">
          <div>
            <img src={icons.startIcon} alt="" />
          </div>

          <div>
            <h3
              className={`${
                reverse ? "text-black" : "text-black"
              } xl:text-5xl md:text-4xl text-3xl leading-tight `}
            >
              What You Will <span className="poppins-bold">Learn</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 w-full place-content-start place-items-start xl:gap-6 lg:gap-3 gap-6">
            {learnItems.map((learn, index) => (
              <div
                className="flex flex-col xl:gap-4 gap-3 justify-center items-center w-full"
                key={index}
              >
                <div className="relative group w-fit">
                  <div
                    className={`absolute inset-0 translate-x-[4px] translate-y-[1px] rounded-full  opacity-0 transition-all duration-300 group-hover:opacity-100 bg-[#DB9E30]`}
                  />
                  <div className="p-4 relative rounded-full flex justify-center items-center shadow-lg bg-white">
                    <img src={learn.icon} alt="" className="xl:w-10 w-8" />
                  </div>
                </div>

                <div>
                  <h3
                    className={`xl:text-lg text-base text-center ${
                      reverse ? "text-black" : "text-black"
                    }`}
                  >
                    {learn.title}{" "}
                    <span className="poppins-bold">{learn.boldTitle}</span>
                  </h3>
                </div>

                <div>
                  <p
                    className={`${
                      reverse ? "text-black" : "text-black/65"
                    } text-center max-w-xs xl:text-base text-sm`}
                  >
                    {learn.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:mx-0 mx-auto">
            <SecondaryButton
              label="Learn More"
              className="bg-[#DB9E30]"
              buttonBg="bg-buttonBg text-white xl:text-base lg:text-sm md:text-base text-sm"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>
      </div>

      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
};

export default CourseLearn;
