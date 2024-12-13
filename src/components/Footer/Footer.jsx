import React from "react";
import images from "../../assets/img/images";
import { Link } from "react-router-dom";
import icons from "../../assets/icons/icons";

const Footer = () => {
  return (
    // <div
    //   className="w-full px-6 py-12 bg-no-repeat lg:bg-top bg-center bg-cover overflow-x-hidden min-h-[80vh]"
    //   style={{
    //     backgroundImage: `url('${images.footerBg}')`,
    //   }}
    // >
    //   <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-3"></div>
    // </div>
    // <div className="w-full px-6 pt-12 pb-6 bg-footerBg relative min-[1400px]:mt-60 xl:mt-44 min-[760px]:mt-32 mt-16">
    <div className="w-full px-6 pt-12 pb-6 bg-footerBg relative ">
      {/* <div className="absolute min-[1831px]:-top-[63%] min-[1744px]:-top-[60%] min-[1597px]:-top-[55%] xl:-top-[39%] min-[1229px]:-top-[40%] min-[1075px]:-top-[35%] min-[1024px]:-top-[30%] min-[951px]:-top-[20%] min-[856px]:-top-[18%] min-[713px]:-top-[16%] min-[759px]:-top-[15%] min-[540px]:-top-[7%] min-[390px]:-top-[5.5%] -top-[5%] left-1/2 transform -translate-x-1/2">
        <img
          src={images.footerMosque}
          alt="Footer Mosque"
          className="w-full "
        />
      </div> */}
      <div className="max-w-[1600px] mx-auto ">
        {/* <div className="flex flex-row lg:justify-around items-start flex-wrap xl:gap-12 gap-6"> */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-12 gap-6">
          <div className="flex flex-col gap-6">
            <div>
              <img
                src={images.footerLogo}
                alt=""
                className="xl:w-40 w-36 object-contain"
              />
            </div>
            <div>
              <p className="text-white max-w-[300px] xl:text-base text-sm">
                We are available 24/7, and the sign-up process is extremely
                simple! For all new students, we provide 3 days Free trial of
                Quran Classes.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:gap-12 gap-8">
            <div className="relative">
              <h3 className="text-white xl:text-xl text-lg font-semibold">
                Quick Links
              </h3>
              <div className="absolute w-16 h-1 bg-white rounded-full mt-2"></div>
            </div>

            <ul className="flex flex-col gap-4 ">
              <li className="text-white xl:text-base text-sm">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white xl:text-base text-sm">
                <Link to="/courses/tajweed">Tajweed Mastery</Link>
              </li>
              <li className="text-white xl:text-base text-sm">
                <Link to="/courses/arabic">Arabic Language</Link>
              </li>
              <li className="text-white xl:text-base text-sm">
                <Link to="/courses/islamic-studies">Islamic Studies</Link>
              </li>
              <li className="text-white xl:text-base text-sm">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="text-white xl:text-base text-sm">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:gap-12 gap-8">
            <div className="relative">
              <h3 className="text-white xl:text-xl text-lg font-semibold">
                Quick Links
              </h3>
              <div className="absolute w-16 h-1 bg-white rounded-full mt-2"></div>
            </div>

            <ul className="flex flex-col gap-4">
              <li className="text-white xl:text-base text-sm">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="text-white xl:text-base text-sm">
                <Link to="/courses">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:gap-12 gap-8">
            <div className="relative">
              <h3 className="text-white xl:text-xl text-lg font-semibold">
                Official Info
              </h3>
              <div className="absolute w-16 h-1 bg-white rounded-full mt-2"></div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 items-center">
                <img src={icons.whatsappIcon} alt="" />
                <p className="text-white xl:text-base text-sm">
                  +44 20 3289 4228
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img src={icons.phoneIcon} alt="" />
                <p className="text-white xl:text-base text-sm">
                  +1 551-253-3039
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img src={icons.email} alt="" />
                <p className="text-white xl:text-base text-sm">
                  support@emantime.com
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <img src={icons.location} alt="" />
                <p className="text-white xl:text-base text-sm max-w-[280px]">
                  20-22 , Wenlock Road , N1 7GU , London, UK
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/35 sm:mt-12 mt-8"></div>

        <div className="mt-6">
          <p className="text-white xl:text-base text-sm text-center">
            © 2024 EmanTime. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
