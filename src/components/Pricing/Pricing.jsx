import React, { useState } from "react";
import PricingCard from "./PricingCard";
import icons from "../../assets/icons/icons";
import CtaButton from "../CtaButton/CtaButton";
import images from "../../assets/img/images";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import TrialModal from "../TrialModal/TrialModal";

const Pricing = () => {
  const [openModal, setOpenModal] = useState(false);

  const priceBullets = [
    "Our Classes Are Taken By Qualified Arab Teachers",
    "Our Each Session Consist On 30 Minutes And It Is A One-One Session",
  ];

  const pricingPlan = [
    {
      title: "Starter",
      features: ["2 Classes Weekly", "8 Classes/Month", "4 Hours/Month"],
      price: "£/$40 /mo",
    },
    {
      title: "Standard",
      label: "Recommend",
      features: ["3 Classes Weekly", "12 Classes/Month", "6 Hours/Month"],
      price: "£/$55 /mo",
    },
    {
      title: "Standard Pro",
      label: "Recommend",
      features: ["4 Classes Weekly", "16 Classes/Month", "8 Hours/Month"],
      price: "£/$70 /mo",
    },
    {
      title: "Advanced",
      label: "Recommend",
      features: ["5 Classes Weekly", "20 Classes/Month", "10 Hours/Month"],
      price: "£/$90 /mo",
    },
    {
      title: "Quran Memorization",
      features: ["3 Classes Weekly", "1 Hour Session"],
      price: "£/$100 /mo",
    },
    {
      title: "Tajweed Mastery",
      features: [
        "Daily Classes (Mon-Fri)",
        "Quran Reading &",
        "Tajweed Certification",
      ],
      price: "£/$199 /mo",
    },
  ];

  const specialOffer = [
    "3 Free Trial Classes – Try us with no obligation.",
    "15% Discount for Siblings – Enroll your children together and save.",
    "20% Off Annual Plans – Commit to a year of growth and enjoy ",
  ];

  return (
    <div className="w-full px-6 xl:py-6 py-6 overflow-x-hidden relative">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-3">
        <div>
          <img
            src={icons.startIcon}
            alt=""
            className="min-[1400px]:w-16 w-14"
          />
        </div>
        <div>
          <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl text-center poppins-bold">
            Your Journey To Quran Mastery
          </h3>
        </div>
        <div>
          <h3 className="min-[1400px]:text-4xl xl:text-3xl md:text-2xl text-2xl text-center">
            Choose Your Plan
          </h3>
        </div>

        <div>
          <p className="text-center max-w-2xl font-medium sm:text-base text-sm text-black/65">
            Learning the Quran is an investment in your soul and the hereafter.
            At EmanTime, we ensure high-quality education is accessible to
            everyone.
          </p>
        </div>

        <ul className="flex flex-col gap-3 justify-center items-center">
          {priceBullets.map((bullet, index) => (
            <div className="flex flex-row gap-3 items-start" key={index}>
              <div className="w-5 h-5 border border-black rounded-full flex justify-center items-center flex-shrink-0">
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
              </div>
              <p className="font-semibold text-center">{bullet}</p>
            </div>
          ))}
        </ul>

        <div className="flex flex-row justify-center items-start flex-wrap gap-6 mt-4">
          {pricingPlan.map((pricing, index) => (
            <PricingCard pricing={pricing} key={index} />
          ))}
        </div>

        <div className="flex flex-col gap-5 items-center mt-6">
          <div>
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-textGradOne via-textGradTwo to-textGradThree min-[1400px]:text-4xl sm:text-3xl text-3xl font-semibold">
              Special Offers
            </h3>
          </div>

          <div className="flex justify-center items-center gap-12 flex-wrap">
            {specialOffer.map((offer, index) => (
              <div
                className="flex flex-row min-[620px]:items-center items-start gap-3"
                key={index}
              >
                <div className="flex-shrink-0">
                  <img src={icons.checkBlack} alt="" width={20} />
                </div>
                <h4 className="font-semibold xl:text-lg sm:text-base text-base text-center">
                  {offer}
                </h4>
              </div>
            ))}
          </div>

          <div className="flex min-[840px]:flex-row flex-col min-[840px]:gap-3 gap-6 justify-center items-center">
            <CtaButton
              text="Invest In Your Hereafter And Begin Your Journey Today"
              className="bg-brownColor text-white min-[1400px]:text-base text-sm"
              iconBg="bg-white"
              className2="group-hover:opacity-50 bg-[#DB9E30]"
              onClick={() => setOpenModal(true)}
            />
            {/* <button className="py-3 px-6 rounded-full shadow-2xl border border-black/10">
              Claim Your Free Trial Now
            </button> */}
            <SecondaryButton
              label="Claim Your Free Trial Now"
              className="bg-[#F5E4C5]"
              buttonBg="bg-white text-black drop-shadow-xl min-[1400px]:text-base text-sm"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>

        <div className="h-[1px] w-full bg-black/25 sm:mt-8 mt-8"></div>
      </div>

      <div className="absolute left-0 lg:top-0 top-[20%] overflow-hidden -z-20 md:block hidden">
        <img src={images.design2} alt="" />
      </div>

      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
};

export default Pricing;
