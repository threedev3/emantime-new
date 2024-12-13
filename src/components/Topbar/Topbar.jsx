import React from "react";
import images from "../../assets/img/images";

const Topbar = () => {
  return (
    <div className="py-4 px-6 w-full">
      <div className="max-w-[1600px] mx-auto flex sm:justify-end justify-center items-center">
        <div className="flex sm:gap-12 gap-6 items-center">
          <div className="flex sm:gap-3 gap-2 items-center">
            <div>
              <img
                src={images.whatsapp}
                alt=""
                className="sm:w-10 w-8 object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold sm:text-base text-xs">
                +44 20 3289 4228
              </h3>
            </div>
          </div>
          <div className="flex sm:gap-3 gap-2 items-center">
            <div>
              <img
                src={images.phone}
                alt=""
                className="sm:w-10 w-8 object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold sm:text-base text-xs">
                +1 551-253-3039
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
