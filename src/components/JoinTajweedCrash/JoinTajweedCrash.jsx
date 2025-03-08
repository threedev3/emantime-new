import React, { useState } from "react";
import icons from "../../assets/icons/icons";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import TrialModal from "../TrialModal/TrialModal";
import images from "../../assets/img/images";

const JoinTajweedCrash = () => {
  const [openModal, setOpenModal] = useState(false);

  const joinReasons = [
    "You have learned Tajweed before but need a revision to refine your skills.",
    "You want a fast, intensive program that helps you improve quickly.",
    "You struggle with fluency and need expert guidance to correct mistakes.",
    "You want to recite beautifully and confidently this Ramadan.",
  ];

  return (
    <div className="w-full px-6 lg:py-12 py-6 relative overflow-hidden mt-40">
      <div className="max-w-[1600px] mx-auto ">
        <div className="flex justify-between items-center gap-8 w-full">
          <div
            className={`flex flex-col gap-8  lg:justify-center items-center  `}
          >
            <div className={`flex flex-col gap-8 lg:w-auto w-full`}>
              <div>
                <img src={icons.startIcon} alt="" />
              </div>

              <div>
                <h3 className="text-black min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl leading-tight ">
                  Who Should <span className="poppins-bold">Join?</span>
                </h3>
              </div>

              <div className="flex flex-col gap-4 max-w-lg">
                {joinReasons.map((item, index) => (
                  <div
                    className="flex flex-row gap-3 items-start justify-start"
                    key={index}
                  >
                    <img
                      src={icons.check}
                      alt=""
                      className="w-5 h-5 flex-shrink-0 mt-1"
                    />
                    <p className="text-black font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`lg:flex hidden   `}>
            <img src={images.islamic.whyIslamic} alt="" className="w-[600px]" />
          </div>
        </div>
        {/* <div className="h-[1px] w-full bg-black/25 sm:mt-12 mt-8"></div> */}
      </div>

      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
};

export default JoinTajweedCrash;
