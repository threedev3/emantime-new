import React from "react";
import images from "../../assets/img/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: false,
    className: "center",
    // centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1148,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 773,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialItems = [
    {
      avatar: images.avatar1,
      name: "Ayesha",
      country: "UK",
      numberOfStars: 5,
      review:
        "The teachers at EmanTime are phenomenal. My son looks forward to his Quran class every week!",
    },
    {
      avatar: images.avatar2,
      name: "Ahmed",
      country: "USA",
      numberOfStars: 4,
      review:
        "“I’ve always wanted to understand the Quran during Salah. Thanks to the Quranic Arabic program, I now feel a deeper connection to my prayers.”",
    },
    {
      avatar: images.avatar3,
      name: "Fatima",
      country: "Australia",
      numberOfStars: 5,
      review:
        "“As a working mom, I was worried about finding time for Quran lessons. EmanTime made it possible with their flexible schedule.”",
    },
  ];

  return (
    <div className="w-full px-6 xl:py-12 py-6 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-6">
        <div>
          <h3 className="lg:text-5xl md:text-4xl text-3xl text-center max-w-2xl ">
            Lives Transformed Through{" "}
            <span className="poppins-bold">Emantime</span>
          </h3>
        </div>

        <div>
          <p className="text-center max-w-4xl font-medium sm:text-base text-sm text-black/65">
            Your comments and thoughts are greatly appreciated. We can’t thank
            you enough fortaking the time to provide feedback on how we can
            better serve you. We appreciate you writing in to tell us what you
            think
          </p>
        </div>

        <div className="w-full ">
          {/* <Slider {...settings} className="w-full mx-auto"> */}
          <div className="w-full mx-auto flex justify-center items-start gap-6 flex-wrap">
            {testimonialItems.map((item, index) => (
              <TestimonialCard item={item} key={index} />
            ))}
          </div>
          {/* </Slider> */}
        </div>
      </div>

      <div className="absolute right-0 top-0 overflow-hidden -z-20">
        <img src={images.design1} alt="" className="md:w-60 w-[150px]" />
      </div>
    </div>
  );
};

export default Testimonials;
