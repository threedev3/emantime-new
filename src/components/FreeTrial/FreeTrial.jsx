import React, { useState } from "react";
import images from "../../assets/img/images";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import TrialModal from "../TrialModal/TrialModal";

const FreeTrial = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className="w-full px-6 xl:py-12 py-12 overflow-x-hidden  min-h-[488px] flex justify-center items-center bg-[#160B00]"
      // style={{
      //   backgroundImage: `url('${images.freeTrialBg}')`,
      // }}
    >
      <div className="max-w-[1600px] mx-auto flex lg:flex-row flex-col justify-between items-center gap-12 h-full w-full">
        <div className="flex flex-col lg:items-start items-center lg:gap-12 gap-6 h-full">
          <div>
            <h3 className="xl:text-5xl md:text-4xl text-[28px] lg:max-w-2xl md:max-w-lg max-w-sm text-white lg:text-start text-center">
              Join the Thousands Who{" "}
              <span className="poppins-bold">Trust EmanTime</span>
            </h3>
          </div>

          <div>
            <SecondaryButton
              label="Book Your Free Trial"
              className="bg-[#DB9E30]"
              buttonBg="bg-buttonBg text-white"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>

        <div>
          <img
            src={images.trialImg}
            alt=""
            className="lg:w-[760px] w-[500px] object-contain"
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
