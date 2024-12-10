import React from "react";
import icons from "../../assets/icons/icons";

const HeroStats = ({ stats, className }) => {
  return (
    <div
      className={`xl:p-4 p-2 bg-white rounded-2xl flex flex-row xl:gap-3 gap-2 items-center w-fit ${className}`}
    >
      <div>
        <img src={stats.icon} alt="" className="xl:w-12 w-10 object-contain" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">
          {stats.stat} <span>{stats.suffix}</span>
        </h3>
        <p className="xl:text-base text-sm">{stats.title}</p>
      </div>
    </div>
  );
};

export default HeroStats;
