import React, { useState } from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { useParams } from "react-router-dom";
import TrialModal from "../TrialModal/TrialModal";

const CourseOverview = ({ image, overviewText, reverse = false }) => {
  const [openModal, setOpenModal] = useState(false);

  const { slug } = useParams();
  return (
    <div className="w-full px-6 py-12 overflow-x-hidden relative">
      <div
        className={`max-w-[1600px] mx-auto flex lg:justify-between lg:items-center gap-12 ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        <div className={`${reverse ? "lg:order-2" : ""} lg:block hidden`}>
          {/* <img src={image} alt="" className="rounded-2xl object-contain" /> */}
          {slug === "tajweed" ? (
            <div className="relative group w-fit">
              <div
                className={`absolute inset-0 translate-x-[10px] translate-y-[6px] rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100 bg-[#DB9E30]`}
              />
              <img
                src={image}
                alt=""
                className="rounded-xl relative transition-all duration-200 ease-out hover:-translate-y-1 active:translate-y-0"
              />
            </div>
          ) : (
            <img src={image} alt="" className="rounded-2xl object-contain" />
          )}
        </div>

        <div className="flex flex-col xl:gap-8 gap-6">
          <div>
            <img src={icons.startIcon} alt="" />
          </div>

          <div>
            <h3 className="text-black xl:text-5xl md:text-4xl text-3xl leading-tight poppins-bold">
              Course <span className="">Overview</span>
            </h3>
          </div>

          <div>
            <p className="text-black/65 min-[1166px]:text-lg min-[1100px]:text-base md:text-base text-sm lg:max-w-[900px] ">
              {overviewText}
            </p>
          </div>

          <div>
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

export default CourseOverview;
