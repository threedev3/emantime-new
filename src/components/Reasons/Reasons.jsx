import React, { useState } from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InlineSvg from "../SVGImage/SVGImage";

const Reasons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasonItems = [
    {
      icon: icons.reasonIcon1,
      title: "Spiritual Growth Focus",
      description:
        "EmanTime guides your Quran learning journey, enriching your heart, mind, and soul for both this life and the hereafter.",
    },
    {
      icon: icons.reasonIcon2,
      title: "World-Class Tutors",
      description:
        "Certified Egyptian tutors with expertise in Quranic studies, Tajweed, and Arabic, dedicated to your spiritual and academic growth.",
    },
    {
      icon: icons.reasonIcon3,
      title: "Tailored Learning",
      description:
        "Specializing in safe, engaging environments for women and children, helping them deepen their understanding of the Quran.",
    },
    {
      icon: icons.reasonIcon4,
      title: "Flexible Learning",
      description:
        "Customizable schedules to fit your lifestyle, allowing you to learn at your own pace.",
    },
    {
      icon: icons.reasonIcon5,
      title: "Global Community",
      description:
        "Join learners worldwide (US, UK, Australia, Europe, Asia) in a trusted Quranic and Islamic education community.",
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const svgColor = "#FFF5D8";
  const svgHoverColor = "#DB9E30";

  return (
    <div
      className="w-full px-6 py-12 bg-no-repeat lg:bg-top bg-center bg-cover overflow-x-hidden"
      style={{
        backgroundImage: `url('${images.mosque2}')`,
      }}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-3">
        <div>
          <img src={icons.startIcon} alt="" />
        </div>
        <div>
          <img
            src={images.arabic1}
            alt=""
            className="lg:w-72 w-60 object-contain"
          />
        </div>

        <div>
          <h3 className="lg:text-5xl md:text-4xl text-3xl text-center">
            Why <span className="poppins-bold">EmanTime?</span>
          </h3>
        </div>

        <div>
          <p className="text-center max-w-lg italic font-medium sm:text-base text-sm">
            “The best of you are those who learn the Quran and teach it.”
            (Prophet Muhammad, PBUH)
          </p>
        </div>

        <div className="w-full mt-12">
          <Slider {...settings}>
            {reasonItems.map((item, index) => (
              <div
                key={index}
                className={`min-h-80 w-full relative group ${
                  [0, 2, 4].includes(index) ? "min-[620px]:mt-12" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                // style={{
                //   backgroundColor:
                //     hoveredIndex === index ? "#DB9E30" : "transparent",
                //   transition: "background-color 0.3s ease-in-out", // Smooth transition for inline styles
                // }}
              >
                <InlineSvg
                  url={images.cardImgSvg}
                  color={svgColor}
                  hoverColor={svgHoverColor}
                  isHovered={hoveredIndex === index}
                  className="mx-auto w-[96%]"
                />
                {/* <img
                  src={images.cardImgSvg}
                  alt=""
                  className="mx-auto w-[96%]"
                /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                  <div className="">
                    <img src={item.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl max-w-[160px] text-center font-semibold group-hover:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-base text-center max-w-[90%] mx-auto group-hover:text-white">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reasons;