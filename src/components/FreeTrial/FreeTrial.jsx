import React, { useState } from "react";
import images from "../../assets/img/images";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import TrialModal from "../TrialModal/TrialModal";

const FreeTrial = ({ title, boldTitle, btnText, description }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className="w-full px-6 xl:py-6 py-6 overflow-x-hidden   flex justify-center items-center bg-[#160B00]"
      // style={{
      //   backgroundImage: `url('${images.freeTrialBg}')`,
      // }}
    >
      <div className="max-w-[1600px] mx-auto flex lg:flex-row flex-col justify-between items-center lg:gap-12 gap-6 h-full w-full">
        <div className="flex flex-col lg:items-start items-center min-[1400px]:gap-12 xl:gap-8 gap-6 h-full">
          <div>
            <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl min-[1400px]:max-w-xl md:max-w-md max-w-sm text-white lg:text-start text-center">
              {title} <span className="poppins-bold">{boldTitle}</span>
            </h3>
          </div>
          <div>
            <p className="min-[1400px]:text-lg xl:text-lg text-base min-[1400px]:max-w-xl md:max-w-md max-w-sm text-white lg:text-start text-center">
              {description}
            </p>
          </div>

          <div>
            <SecondaryButton
              label={btnText}
              className="bg-[#DB9E30]"
              buttonBg="bg-buttonBg text-white min-[1400px]:text-base text-sm"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>

        <div>
          <img
            src={images.trialImg}
            alt=""
            className="min-[1400px]:w-[760px] w-[460px] object-contain"
          />
        </div>
      </div>

      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
};

export default FreeTrial;
