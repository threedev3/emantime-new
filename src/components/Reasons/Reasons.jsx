import React, { useEffect, useState } from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InlineSvg from "../SVGImage/SVGImage";
import useMediaQuery from "../../hooks/useMediaQuery";

const Reasons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

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
      className="w-full px-6 py-6 bg-no-repeat lg:bg-top bg-center bg-cover overflow-x-hidden relative"
      style={{
        backgroundImage: isLargeScreen ? `url('${images.mosque2}')` : `none`,
        backgroundColor: isLargeScreen ? "none" : "#EFF4F7",
      }}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-1">
        <div>
          <img
            src={icons.startIcon}
            alt=""
            className="min-[1400px]:w-16 w-14"
          />
        </div>
        <div>
          <img
            src={images.arabic1}
            alt=""
            className="min-[1400px]:w-72 xl:w-60 w-52 object-contain"
          />
        </div>

        <div>
          <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl text-center">
            Why <span className="poppins-bold">EmanTime?</span>
          </h3>
        </div>

        <div>
          <p className="text-center max-w-lg italic font-medium sm:text-base text-sm">
            “The best of you are those who learn the Quran and teach it.”
            (Prophet Muhammad, PBUH)
          </p>
        </div>

        <div className="flex flex-row min-[1032px]:justify-around justify-center items-center gap-2 flex-wrap w-full md:mt-0 mt-4">
          {reasonItems.map((item, index) => (
            <div
              key={index}
              className={`min-h-60 min-[1600px]:w-[300px] min-[540px]:w-[240px] w-[260px] relative group ${
                [0, 2, 4].includes(index)
                  ? "xl:mt-16 lg:mt-12 md:mt-0 mt-0"
                  : ""
              }`}
              onMouseEnter={() => isLargeScreen && setHoveredIndex(index)}
              onMouseLeave={() => isLargeScreen && setHoveredIndex(null)}
            >
              <InlineSvg
                url={images.cardImgSvg}
                color={svgColor}
                hoverColor={svgHoverColor}
                isHovered={hoveredIndex === index}
                className="mx-auto w-[96%]"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center xl:gap-6 min-[540px]:gap-5 gap-10">
                <img src={item.icon} alt="" />
                <div>
                  <h3 className="xl:text-xl text-lg max-w-[160px] text-center font-semibold lg:group-hover:text-white">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="min-[1600px]:text-base text-sm text-center max-w-[80%] mx-auto lg:group-hover:text-white text-black/65">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="absolute left-0 top-36 overflow-hidden -z-10">
        <img src={images.design3} alt="" className="md:w-60 w-[240px] invert" />
      </div> */}
    </div>
  );
};

export default Reasons;
