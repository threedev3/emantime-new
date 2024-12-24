import React, { useState } from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";
import { handleScroll } from "../../utils/scrollToElement";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import TrialModal from "../TrialModal/TrialModal";

const Unique = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full px-6 xl:py-6 py-6 overflow-x-hidden relative">
      <div className="max-w-[1600px] mx-auto ">
        <div className="flex justify-start items-center xl:gap-32 lg:gap-16 gap-12">
          <div className="lg:block hidden">
            <div className="relative group w-fit">
              <div
                className={`absolute inset-0 translate-x-[10px] translate-y-[6px] rounded-xl  opacity-0 transition-all duration-300 group-hover:opacity-25 bg-[#DB9E30]`}
              />
              <img
                src={images.uniqueImg}
                alt=""
                className="rounded-xl relative transition-all duration-200 ease-out hover:-translate-y-1 active:translate-y-0"
              />
            </div>
          </div>
          <div className="flex flex-col xl:gap-4 gap-3 ">
            <div>
              <img src={icons.startIcon} alt="" className="xl:w-16 w-14" />
            </div>
            <div>
              <img
                src={images.arabic2}
                alt=""
                className="min-[1400px]:w-48 xl:w-40 w-36 object-contain"
              />
            </div>

            <div>
              <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl max-w-lg text-black">
                What Makes{" "}
                <span className="poppins-bold">EmanTime Unique?</span>
              </h3>
            </div>

            <ul className="flex flex-col xl:gap-3 gap-2 ml-4">
              <li className="text-black md:text-base text-sm list-disc ">
                Struggling to find qualified teachers who truly understand your
                needs?
              </li>
              <li className="text-black md:text-base text-sm list-disc ">
                Facing challenges in balancing busy schedules with consistent
                learning?
              </li>
              <li className="text-black md:text-base text-sm list-disc ">
                Worried about keeping your children engaged or finding a
                female-friendly environment?
              </li>
            </ul>

            <SecondaryButton
              label="Get Enrolled"
              className="bg-[#DB9E30]"
              buttonBg="bg-buttonBg text-white min-[1400px]:text-base text-sm"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>

        <div className="h-[1px] w-full bg-black/25 sm:mt-12 mt-8"></div>
      </div>
      <div className="absolute left-0 -top-36 overflow-hidden -z-20 ">
        <img src={images.design3} alt="" className="md:w-60 w-[146px]" />
      </div>

      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
};

export default Unique;
