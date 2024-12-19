import React, { useEffect, useState } from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InlineSvg from "../SVGImage/SVGImage";
import useMediaQuery from "../../hooks/useMediaQuery";

const Programs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const reasonItems = [
    {
      title: "Quran Reading",
      description: [
        "Understand the Quran: Learn the language of the Quran and connect directly with its message.",
        "Essential Vocabulary: Master key Quranic words and phrases that appear frequently in the text.",
        "Deeper Comprehension: Unlock the meaning behind the verses during Salah and personal reflection.",
      ],
    },
    {
      title: "Tajweed Mastery",
      description: [
        "Beginner-Friendly: Start with the basics of Quranic reading and pronunciation.",
        "Perfect Your Tajweed: Learn to recite the Quran beautifully and accurately, following the rules of Tajweed.",
        "Advanced Recitation: For seasoned learners, refine your skills and recite with precision and eloquence.",
      ],
    },
    {
      title: "Quranic Arabic Program",
      description: [
        "Understand the Quran: Learn the language of the Quran and connect directly with its message.",
        "Essential Vocabulary: Master key Quranic words and phrases that appear frequently in the text.",
        "Deeper Comprehension: Unlock the meaning behind the verses during Salah and personal reflection.",
      ],
    },
    {
      title: "Arabic Language Program",
      description: [
        "For Everyday Use: Develop fluency in Modern Standard Arabic for communication and comprehension.",
        "Reading and Writing: Build foundational skills to read Arabic texts and write with confidence.",
        "Conversational Fluency: Engage in meaningful conversations and connect with the Arab world culturally and spiritually.",
      ],
    },
    {
      title: "Islamic Studies",
      description: [
        "Seerah of the Prophet (peace be upon him): Learn the life, character, and legacy of our beloved Prophet.",
        "Fiqh and Aqeedah: Understand the essentials of Islamic practices and beliefs.",
        "Hadith Studies: Gain insights into the sayings and teachings of the Prophet Muhammad (peace be upon him).",
      ],
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const svgColor = "#FFF5D8";
  const svgHoverColor = "#DB9E30";

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches);
  //   };

  //   // Initialize screen size check
  //   handleResize();

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup event listener on unmount
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="w-full px-6 xl:py-12 py-6 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-6">
        <div>
          <h3 className="lg:text-5xl md:text-4xl text-3xl text-center">
            Our <span className="poppins-bold">Programs</span>
          </h3>
        </div>

        <div>
          <p className="text-center max-w-lg font-medium lg:text-3xl sm:text-base text-sm text-black/65">
            A Path to Spiritual Enlightenment
          </p>
        </div>

        {isLargeScreen ? (
          <div className=" w-full mt-12">
            <Slider {...settings}>
              {reasonItems.map((item, index) => (
                <div
                  key={index}
                  className={`min-h-52 w-[380px] relative group  ${
                    [0, 2, 4].includes(index)
                      ? "xl:mt-16 lg:mt-12 md:mt-0 mt-0"
                      : ""
                  }`}
                >
                  <InlineSvg
                    url={images.cardImgSvg}
                    color={svgColor}
                    hoverColor={svgHoverColor}
                    isHovered={hoveredIndex === index}
                    className="mx-auto w-[96%]"
                  />

                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center min-[1500px]:gap-8 xl:gap-4 min-[960px]:gap-3 md:gap-8 gap-4"
                    onMouseEnter={() => isLargeScreen && setHoveredIndex(index)}
                    onMouseLeave={() => isLargeScreen && setHoveredIndex(null)}
                  >
                    <div className="">
                      {hoveredIndex === index ? (
                        <img src={images.arabic3} alt="" />
                      ) : (
                        <img src={images.arabic4} alt="" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl max-w-[200px] text-center font-semibold lg:group-hover:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div>
                      <ul className="text-center min-[1500px]:max-w-[90%] max-w-[80%] mx-auto flex flex-col xl:gap-2 gap-1">
                        {item.description.map((item, index) => (
                          <li
                            className="xl:text-sm min-[960px]:text-sm min-[716px]:text-sm min-[414px]:text-sm text-xs lg:group-hover:text-white"
                            key={index}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center gap-4 flex-wrap w-full mt-12">
            {reasonItems.map((item, index) => (
              <div
                key={index}
                className={`min-h-52 w-[380px] relative group  ${
                  [0, 2, 4].includes(index)
                    ? "xl:mt-24 lg:mt-12 md:mt-0 mt-0"
                    : ""
                }`}
              >
                <InlineSvg
                  url={images.cardImgSvg}
                  color={svgColor}
                  hoverColor={svgHoverColor}
                  isHovered={hoveredIndex === index}
                  className="mx-auto w-[96%]"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center min-[1500px]:gap-8 xl:gap-4 min-[960px]:gap-3 md:gap-8 gap-4">
                  <div className="">
                    {hoveredIndex === index ? (
                      <img src={images.arabic3} alt="" />
                    ) : (
                      <img src={images.arabic4} alt="" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl max-w-[200px] text-center font-semibold lg:group-hover:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div>
                    <ul className="text-center min-[1500px]:max-w-[90%] max-w-[80%] mx-auto flex flex-col xl:gap-2 gap-1">
                      {item.description.map((item, index) => (
                        <li
                          className="xl:text-sm min-[960px]:text-sm min-[716px]:text-sm min-[414px]:text-sm text-xs lg:group-hover:text-white"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="h-[1px] w-full bg-black/25 sm:mt-12 mt-8"></div>
      </div>

      <div className="absolute right-0 top-0 overflow-hidden -z-10">
        <img src={images.design1} alt="" className="md:w-60 w-[150px]" />
      </div>
    </div>
  );
};

export default Programs;
