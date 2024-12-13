import React, { useState } from "react";
import images from "../../assets/img/images";
import { Link } from "react-router-dom";
import icons from "../../assets/icons/icons";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileNavigation from "./MobileNavigation";
import { handleScroll } from "../../utils/scrollToElement";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Navbar = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "Courses", isDropdown: true }, // No link for Courses
    { title: "Pricing", link: "/pricing" },
    { title: "Contact Us", link: "/contact" },
  ];

  const courses = [
    { title: "Tajweed Mastery", link: "/courses/tajweed" },
    { title: "Arabic Language", link: "/courses/arabic" },
    { title: "Islamic Studies", link: "/courses/islamic-studies" },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  return (
    <div className="w-full px-6 relative z-10">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <div
          style={{
            backgroundImage: `url('${images.logoBg}')`,
          }}
          className="xl:h-44 h-28 xl:w-44 w-28 bg-no-repeat bg-contain flex justify-center items-start"
        >
          <Link to={"/"}>
            <img
              src={images.logo}
              alt=""
              className="xl:w-[127px] w-[80px] object-contain"
            />
          </Link>
        </div>

        <nav className="lg:block hidden relative">
          <ul className="flex gap-8 items-center">
            {/* {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer h-28"
                onMouseEnter={() => item.isDropdown && setShowDropdown(true)}
                onMouseLeave={() => item.isDropdown && setShowDropdown(false)}
              >
                <div
                  className={`flex items-center gap-2 text-menuText font-medium hover:text-white transition-all duration-300 ${
                    item.isDropdown ? "cursor-pointer" : ""
                  }`}
                >
                  <Link to={item.link}>{item.title}</Link>
                  {item.isDropdown && (
                    <FaChevronDown
                      className={`text-sm transition-transform duration-300 group-hover:rotate-180`}
                    />
                  )}

                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>

                  {item.isDropdown && showDropdown && (
                    <ul className="absolute top-10 left-0 bg-white shadow-xl rounded-lg py-2 w-56 z-50 opacity-100 translate-y-2 transition-all duration-300 group-hover:translate-y-0">
                      {courses.map((course, i) => (
                        <li
                          key={i}
                          className="px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 rounded-md"
                        >
                          <Link to={course.link}>{course.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))} */}

            {navItems.map((item, index) => (
              <li key={index} className="relative group cursor-pointer h-8">
                {item.isDropdown ? (
                  <div
                    className={`relative ${showDropdown && "h-28"}`}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <div className="flex items-center gap-2 text-menuText font-medium hover:text-white transition-all duration-300">
                      <span>{item.title}</span>
                      <FaChevronDown
                        className={`text-sm transition-transform duration-300 ${
                          showDropdown ? "rotate-180" : ""
                        }`}
                      />
                      {/* <span
                        className={`absolute ${
                          showDropdown ? "bottom-20" : ""
                        } left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full`}
                      ></span> */}

                      {showDropdown && (
                        <ul className="absolute top-8 left-0 bg-white shadow-xl rounded-lg py-2 w-56 z-50 transition-all duration-300">
                          {courses.map((course, i) => (
                            <Link
                              key={i}
                              to={course.link}
                              className="px-4 py-2 hover:bg-gray-100 text-gray-800 transition-all duration-200 rounded-md block"
                            >
                              {course.title}
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="relative ">
                    <Link
                      to={item.link}
                      className="text-menuText font-medium hover:text-white transition-all duration-300"
                    >
                      {item.title}
                    </Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:block hidden">
          <SecondaryButton
            label="Claim Free Trial"
            className="bg-[#DB9E30]"
            buttonBg="bg-buttonBg text-white"
          />
        </div>

        <MobileNavigation />
      </div>
    </div>
  );
};

export default Navbar;
