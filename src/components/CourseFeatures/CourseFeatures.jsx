import React from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CourseFeatures = ({ keyFeatures }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-6 pt-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-4 justify-center items-center">
        <div className="">
          <img src={icons.startIcon} alt="" />
        </div>

        <div>
          <h3 className="lg:text-5xl md:text-4xl text-3xl text-center poppins-bold">
            Key Features <span className="">of This Course</span>
          </h3>
        </div>

        <div className="w-full mt-12">
          <Slider {...settings}>
            {keyFeatures.map((item, index) => (
              <div key={index} className="flex flex-row items-center">
                <div className="flex flex-col gap-6 items-center relative">
                  <div className="p-4 rounded-full border-2 border-brownColor">
                    <img src={item.icon} alt="" width={60} />
                  </div>
                  <div>
                    <h3 className="lg:text-lg text-base lg:max-w-[290px] max-w-[200px] text-center">
                      {item.title}
                    </h3>
                  </div>

                  {(index < 2 || (index >= 2 && index < 2)) && (
                    <div className="absolute top-10 -right-[75%] w-[100%] mx-auto h-0.5 overflow-hidden">
                      <div
                        className="w-full h-full  mx-auto"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #DB9E30 50%, transparent 50%)",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-12">
          <button className="py-3 px-6 bg-buttonBg text-white rounded-full">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseFeatures;