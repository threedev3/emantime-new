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
      <div className="w-full px-6 xl:py-6 py-6 relative overflow-x-hidden">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-2 justify-center items-center">
          <div>
            <img
              src={icons.startIcon}
              alt=""
              className="min-[1400px]:w-16 w-14"
            />
          </div>

          <div>
            <h3 className="lg:text-2xl md:text-lg text-lg text-brownColor font-semibold">
              Your Next Steps
            </h3>
          </div>
          <div>
            <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl text-center">
              Begin Your Journey <span className="poppins-bold">Today</span>
            </h3>
          </div>

          {/* <div className="flex flex-row justify-between items-start w-full mt-12"> */}
          <div className="w-full mt-6 flex justify-center flex-wrap min-[1400px]:gap-10 md:gap-3  gap-3">
            {/* <Slider {...settings}> */}
            {processItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-start justify-between min-[1400px]:px-6 px-3 xl:py-8 py-6 hover:shadow-2xl hover:rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col min-[1400px]:gap-6 gap-3 items-center relative">
                  <div className="xl:p-6 p-5 rounded-full border-2 border-brownColor relative">
                    <img
                      src={icons.check}
                      alt=""
                      className="absolute inset-0 xl:w-7 w-6"
                    />
                    <img src={item.icon} alt="" className="xl:w-12 w-10" />
                  </div>
                  <div>
                    <h3 className="min-[1400px]:text-lg text-base max-w-[160px] text-center font-semibold min-[1400px]:min-h-[52px] min-h-[44px]">
                      {item.title}
                    </h3>
                  </div>
                  <div>
                    <p className="xl:text-base text-sm max-w-[260px] text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* </Slider> */}
          </div>
          <div className="h-[1px] w-full bg-black/25 sm:mt-4 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Process;
