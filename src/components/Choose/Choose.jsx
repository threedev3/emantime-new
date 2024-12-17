import React, { useEffect, useState } from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Choose = () => {
  const [isHomePage, setIsHomePage] = useState(false);

  // Check if the current page is the Home page
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true); // Home page logic
    } else {
      setIsHomePage(false); // Logic for other pages like Thank You page
    }
  }, [location.pathname]);

  const chooseItems = [
    {
      icon: icons.chooseIcon1,
      title: "Available 24/7",
    },
    {
      icon: icons.chooseIcon2,
      title: "Experts Teachers",
    },
    {
      icon: icons.chooseIcon3,
      title: "Get Free Trial For 7 Days",
    },
    {
      icon: icons.chooseIcon4,
      title: "Mentorship",
    },
    {
      icon: icons.chooseIcon5,
      title: "Certification",
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
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
        breakpoint: 650,
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
    <div className="w-full px-6 py-12 overflow-x-hidden relative">
      {isHomePage && (
        <div className="md:block hidden">
          <img
            src={images.chooseImg}
            alt=""
            className="absolute -top-6 z-50 min-[1500px]:w-24 xl:w-20 md:w-20 "
          />
        </div>
      )}

      <div className="max-w-[1600px] mx-auto flex flex-col gap-4 justify-center items-center">
        <div className="">
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
            Why <span className="poppins-bold">Choose Us</span>
          </h3>
        </div>

        <div>
          <p className="text-center max-w-5xl text-black/60 sm:text-base text-sm">
            Learn Quran online with the correct method of Tajweed recitation.
            Our professional tutors with several years of experience are in a
            prime position to help you or your child by conducting Online Quran
            Classes .
          </p>
        </div>

        <div className="w-full mt-12 flex justify-center flex-wrap md:gap-6  gap-3">
          {/* <Slider {...settings}> */}
          {chooseItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-start justify-between px-6 md:py-8 py-6 hover:shadow-2xl hover:rounded-2xl transition-all duration-300"
            >
              <div className="flex flex-col gap-6 items-center relative min-[1600px]:min-w-60  min-[1350px]:min-w-48 min-w-40">
                <div className="p-4 rounded-full border-2 border-brownColor">
                  <img src={item.icon} alt="" className="" />
                </div>
                <div>
                  <h3 className="text-lg  max-w-[160px] text-center">
                    {item.title}
                  </h3>
                </div>

                {/* {(index < 2 || (index >= 2 && index < 4)) && (
                  <div className="absolute top-10 right-[85%] left-[85%] w-[100%] mx-auto h-0.5 overflow-hidden">
                    <div
                      className="w-full h-full  mx-auto"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #DB9E30 50%, transparent 50%)",
                      }}
                    />
                  </div>
                )} */}
              </div>
            </div>
          ))}
          {/* </Slider> */}
        </div>

        <div className="mt-12">
          <SecondaryButton
            label="View More"
            className="bg-[#DB9E30]"
            buttonBg="bg-buttonBg text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
