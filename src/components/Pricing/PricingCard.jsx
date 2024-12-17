import React, { useState } from "react";
import { handleScroll } from "../../utils/scrollToElement";
import TrialModal from "../TrialModal/TrialModal";

const PricingCard = ({ pricing }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative flex flex-col items-center gap-8 p-6 rounded-2xl shadow-lg border border-black/10 min-w-80 overflow-hidden group bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-gradOne via-gradTwo to-gradThree opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-0"></div>

      <div className="flex flex-col items-center gap-3 min-h-20 relative ">
        <h3 className="text-black poppins-bold text-[26px] group-hover:text-white">
          {pricing.title}
        </h3>
        {pricing.label && (
          <p className="text-black/55 text-xl group-hover:text-white">{`(${pricing.label})`}</p>
        )}
      </div>

      <ul className="flex flex-col gap-4 items-center min-h-28 relative">
        {pricing.features.map((feature, index) => (
          <li className="text-xl group-hover:text-white" key={index}>
            {feature}
          </li>
        ))}
      </ul>

      <h4 className="font-semibold text-2xl group-hover:text-white relative">
        {pricing.price}
      </h4>

      <button
        className="bg-black py-3 px-6 rounded-full text-white text-lg font-semibold group-hover:text-black group-hover:bg-white relative"
        onClick={() => setOpenModal(true)}
      >
        Sign Up Today!
      </button>

      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
};

export default PricingCard;
