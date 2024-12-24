import React from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-white mx-2 min-[1400px]:px-6 px-3 py-8 flex flex-col gap-6 items-center shadow-sm border border-black/10 min-[1400px]:min-h-[390px] min-h-[410px] relative xl:w-[360px] w-[320px] overflow-hidden">
      <div className="absolute right-0 top-0 w-28 h-28 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[200%] h-[200%] bg-emerald-800 rotate-45 transform origin-right " />
      </div>

      <div>
        <img src={item.avatar} alt="" />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h3 className="font-semibold text-xl">{item.name}</h3>
        <p className="text-base">{item.country}</p>
      </div>

      <div className="flex gap-2 items-center">
        {Array(item.numberOfStars)
          .fill(null)
          .map((_, index) => (
            <img src={icons.starIcon} alt="Star" width={20} key={index} />
          ))}
      </div>

      <div>
        <p className="text-black/65 italic text-base text-center">
          {item.review}
        </p>
      </div>

      <div className="absolute -bottom-6 right-0">
        <img src={images.quote} alt="" />
      </div>
    </div>
  );
};

export default TestimonialCard;
