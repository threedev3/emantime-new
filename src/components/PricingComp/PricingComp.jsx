import React from "react";
import PricingCard from "../Pricing/PricingCard";
import icons from "../../assets/icons/icons";
import CtaButton from "../CtaButton/CtaButton";
import images from "../../assets/img/images";

const PricingComp = () => {
  const pricingPlan = [
    {
      title: "Starter Plan",
      features: ["2 Classes Weekly", "8 Classes/Month", "4 Hours/Month"],
      price: "£/$40 /mo",
    },
    {
      title: "Standard Plan",
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
      title: "Advanced Plan",
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
      title: "Starter Plan",
      features: [
        "Daily Classes (Mon-Fri)",
        "Quran Reading &",
        "Tajweed Certification",
      ],
      price: "£/$199 /mo",
    },
  ];

  return (
    <div
      className="w-full px-6 py-12 overflow-x-hidden relative bg-pricingCompBg"
      id="pricingComp"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-8">
        <div>
          <h3 className="lg:text-4xl md:text-2xl text-2xl text-center">
            <span className="poppins-bold">Choose</span> Your Plan
          </h3>
        </div>

        <div className="flex flex-row justify-center items-start flex-wrap gap-6">
          {pricingPlan.map((pricing, index) => (
            <PricingCard pricing={pricing} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComp;
