import React, { useEffect, useState } from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InlineSvg from "../SVGImage/SVGImage";
import useMediaQuery from "../../hooks/useMediaQuery";

const TajweedReasons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const reasonItems = [
    {
      icon: icons.tajweedReason1,
      title: "Ramadan is the Month of the Quran",
      description:
        "Make the most of this sacred month by improving how you recite the Book of Allah.",
    },
    {
      icon: icons.tajweedReason2,
      title: "Recite with Confidence in Taraweeh",
      description:
        "Imagine standing in prayer, reciting beautifully and effortlessly, without hesitation.",
    },
    {
      icon: icons.tajweedReason3,
      title: "A Unique Opportunity",
      description:
        "This is a rarely offered crash course designed to deliver fast results.",
    },
    {
      icon: icons.tajweedReason4,
      title: "Limited Time, Maximum Impact ",
      description:
        "Just three days of dedication will transform your recitation forever.",
    },
    {
      icon: icons.tajweedReason5,
      title: "An Act of Worship with Lifelong Benefit",
      description:
        "Learning Tajweed is not just a skill—it’s a way to earn rewards every time you recite the Quran correctly.",
    },
  ];

  const svgColor = "#FFF5D8";
  const svgHoverColor = "#DB9E30";

  return (
    <div
      className="w-full px-6 lg:py-12 py-6 bg-no-repeat lg:bg-top bg-center bg-cover overflow-hidden relative"
      //   style={{
      //     backgroundImage: isLargeScreen ? `url('${images.mosque2}')` : `none`,
      //     backgroundColor: isLargeScreen ? "none" : "#EFF4F7",
      //   }}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-5">
        <div>
          <img
            src={icons.startIcon}
            alt=""
            className="min-[1400px]:w-16 w-14"
          />
        </div>
        {/* <div>
          <img
            src={images.arabic1}
            alt=""
            className="min-[1400px]:w-72 xl:w-60 w-52 object-contain"
          />
        </div> */}

        <div>
          <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl text-center xl:max-w-lg max-w-sm">
            Why Join This Course{" "}
            <span className="poppins-bold">During Ramadan? </span>
          </h3>
        </div>

        {/* <div>
          <p className="text-center max-w-lg italic font-medium sm:text-base text-sm">
            “The best of you are those who learn the Quran and teach it.”
            (Prophet Muhammad, PBUH)
          </p>
        </div> */}

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
        <div className="h-[1px] w-full bg-black/25 sm:mt-12 mt-8"></div>
      </div>

      <div className="absolute right-0 -top-24 overflow-hidden -z-10">
        <img src={images.design1} alt="" className="xl:w-60 w-[150px]" />
      </div>
    </div>
  );
};

export default TajweedReasons;
