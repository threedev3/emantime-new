import React from "react";
import icons from "../../assets/icons/icons";

const CourseMatter = ({
  matterText,
  image,
  reverse = false,
  transparent = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden relative xl:flex xl:justify-start xl:items-center xl:gap-20 grid lg:grid-cols-2 gap-12 ${
        transparent ? "bg-transparent" : "bg-courseMatter"
      }`}
    >
      <div
        className={`lg:flex hidden ${
          reverse ? "order-2 justify-end w-full" : "order-1 justify-start"
        }  `}
      >
        <img src={image} alt="" className="" />
      </div>

      <div
        className={`flex flex-col gap-8 px-20 py-6 justify-center items-center  ${
          reverse ? "order-1 w-full " : "order-2"
        }`}
      >
        <div className="flex flex-col gap-8 max-w-2xl">
          <div>
            <img src={icons.startIcon} alt="" />
          </div>

          <div>
            <h3 className="text-black lg:text-5xl md:text-4xl text-3xl leading-tight max-w-sm">
              Why This Course <span className="poppins-bold">Matters</span>
            </h3>
          </div>

          <div>
            <p className="text-black/65 min-[1166px]:text-lg min-[1100px]:text-base text-sm max-w-4xl">
              {matterText}
            </p>
          </div>

          <div>
            <button className="py-3 px-6 rounded-full bg-brownColor text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMatter;
