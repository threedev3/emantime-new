import React, { useState } from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InlineSvg from "../SVGImage/SVGImage";

const Programs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasonItems = [
    {
      title: "Quran Reading and Tajweed Mastery",
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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
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

  return (
    <div className="w-full px-6 py-12  overflow-hidden relative">
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

        <div className="w-full mt-12">
          <Slider {...settings}>
            {reasonItems.map((item, index) => (
              <div
                key={index}
                className={`min-h-52 w-full relative group ${
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
                <div className="absolute inset-0 flex flex-col items-center justify-center min-[1500px]:gap-8 xl:gap-4 min-[960px]:gap-3 md:gap-8 gap-4">
                  <div className="">
                    {hoveredIndex === index ? (
                      <img src={images.arabic3} alt="" />
                    ) : (
                      <img src={images.arabic4} alt="" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl max-w-[200px] text-center font-semibold group-hover:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div>
                    <ul className="text-center min-[1500px]:max-w-[90%] max-w-[80%] mx-auto flex flex-col xl:gap-2 gap-1">
                      {item.description.map((item, index) => (
                        <li className="xl:text-sm min-[960px]:text-xs min-[716px]:text-sm text-xs group-hover:text-white">
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

        <div className="h-[1px] w-full bg-black/25 sm:mt-12 mt-8"></div>
      </div>

      <div className="absolute right-0 top-0 overflow-hidden -z-10">
        <img src={images.design1} alt="" />
      </div>
    </div>
  );
};

export default Programs;