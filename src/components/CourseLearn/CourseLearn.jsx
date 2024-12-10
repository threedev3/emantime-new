import React from "react";
import icons from "../../assets/icons/icons";

const CourseLearn = ({ image, learnItems, reverse = false }) => {
  return (
    <div
      className="w-full px-6 py-20 overflow-x-hidden relative bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div
        className={`max-w-[1600px] mx-auto flex ${
          reverse ? "md:justify-end justify-center" : "justify-start"
        }`}
      >
        <div className="flex flex-col  gap-10 xl:max-w-[50%] lg:max-w-[60%]">
          <div>
            <img src={icons.startIcon} alt="" />
          </div>

          <div>
            <h3
              className={`${
                reverse ? "text-white" : "text-black"
              } lg:text-5xl md:text-4xl text-3xl leading-tight `}
            >
              What You Will <span className="poppins-bold">Learn</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 w-full place-content-start place-items-start gap-6">
            {learnItems.map((learn, index) => (
              <div className="flex flex-col gap-4 justify-center items-center w-full">
                <div className="p-4 rounded-full flex justify-center items-center shadow-lg bg-white">
                  <img src={learn.icon} alt="" width={40} />
                </div>

                <div>
                  <h3
                    className={`text-lg ${
                      reverse ? "text-white" : "text-black"
                    }`}
                  >
                    {learn.title}{" "}
                    <span className="poppins-bold">{learn.boldTitle}</span>
                  </h3>
                </div>

                <div>
                  <p
                    className={`${
                      reverse ? "text-white" : "text-black/65"
                    } text-center max-w-xs`}
                  >
                    {learn.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:mx-0 mx-auto">
            <button className="py-3 px-6 rounded-full bg-brownColor text-white ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearn;
