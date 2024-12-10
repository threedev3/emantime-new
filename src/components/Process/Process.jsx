import React from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Process = () => {
  const processItems = [
    {
      icon: icons.stepIcon1,
      title: "Register Online",
      description:
        "Complete our quick and easy sign-up process to reserve your spot.",
    },
    {
      icon: icons.stepIcon2,
      title: "Book Your Free Trial Lesson",
      description:
        "Experience a one-on-one session with one of our expert teachers.",
    },
    {
      icon: icons.stepIcon3,
      title: "Get Evaluated",
      description:
        "Receive a personalized learning plan tailored to your level and goals.",
    },
    {
      icon: icons.stepIcon4,
      title: "Start Your Journey",
      description:
        "Begin your classes and take the first steps toward mastering the Quran and deepening your spiritual connection.",
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    responsive: [
      //   {
      //     breakpoint: 1279,
      //     settings: {
      //       slidesToShow: 4,
      //       slidesToScroll: 1,
      //       infinite: true,
      //     },
      //   },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
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
    <div>
      <div className="w-full px-6 py-12 relative overflow-x-hidden">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-4 justify-center items-center">
          <div>
            <img src={icons.startIcon} alt="" />
          </div>

          <div>
            <h3 className="lg:text-2xl md:text-lg text-lg text-brownColor font-semibold">
              Your Next Steps
            </h3>
          </div>
          <div>
            <h3 className="lg:text-5xl md:text-4xl text-3xl text-center">
              Begin Your Journey <span className="poppins-bold">Today</span>
            </h3>
          </div>

          {/* <div className="flex flex-row justify-between items-start w-full mt-12"> */}
          <div className="w-full mt-12">
            <Slider {...settings}>
              {processItems.map((item, index) => (
                <div key={index} className="flex flex-row items-center">
                  <div className="flex flex-col gap-6 items-center relative">
                    <div className="p-6 rounded-full border-2 border-brownColor relative">
                      <img
                        src={icons.check}
                        alt=""
                        className="absolute inset-0 w-7"
                      />
                      <img src={item.icon} alt="" />
                    </div>
                    <div>
                      <h3 className="text-lg max-w-[160px] text-center font-semibold min-h-16 ">
                        {item.title}
                      </h3>
                    </div>
                    <div>
                      <p className="text-base max-w-[260px] text-center">
                        {item.description}
                      </p>
                    </div>

                    {(index < 2 || (index >= 2 && index < 3)) && (
                      <div className="absolute top-12 -right-[75%] w-[100%] mx-auto h-0.5 overflow-hidden">
                        <div
                          className="w-full h-full  mx-auto"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, #DB9E30 50%, transparent 50%)",
                            // backgroundSize: "20px 100%",
                          }}
                        />
                      </div>
                    )}

                    {/* {(index < 2 || (index >= 3 && index < 3)) && (
                    <div className="absolute top-10 left-[120%] w-48 h-0.5 overflow-hidden">
                      <div className="w-full h-full bg-brownColor" />
                    </div>
                  )}
                  {index >= 2 && index < 3 && (
                    <div className="absolute top-10 left-[105%] w-48 h-0.5 overflow-hidden">
                      <div className="w-full h-full bg-brownColor" />
                    </div>
                  )}
                  {(!index >= 2 || index < 4) && index < 4 && (
                    <div className="absolute top-10 left-[130%] w-48 h-0.5 overflow-hidden">
                      <div className="w-full h-full bg-brownColor" />
                    </div>
                  )} */}
                  </div>

                  {/* {index < chooseItems.length - 1 && (
                <div className="h-[2px] bg-brownColor w-32 mx-4"></div>
              )} */}
                </div>
              ))}
            </Slider>
          </div>
          <div className="h-[1px] w-full bg-black/25 sm:mt-12 mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Process;
