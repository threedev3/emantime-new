import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";
import { handleScroll } from "../../utils/scrollToElement";
import TrialModal from "../TrialModal/TrialModal";

const navItems = [
  { title: "Home", link: "/" },
  {
    title: "Courses",
    isDropdown: true,
    dropdownItems: [
      { title: "Tajweed Mastery", link: "/courses/tajweed" },
      { title: "Arabic Language", link: "/courses/arabic" },
      { title: "Islamic Studies", link: "/courses/islamic-studies" },
    ],
  },
  { title: "Pricing", link: "/pricing" },
  { title: "Contact Us", link: "/contact-us" },
];

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close the dropdown whenever the menu is toggled
    if (isOpen) {
      setOpenDropdown(null);
    }
  };
  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <div className="lg:hidden">
      {/* <button
        onClick={toggleMenu}
        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        <BiMenu size={24} />
      </button> */}

      <img
        src={icons.bars}
        alt=""
        onClick={toggleMenu}
        className={`${
          location.pathname === "/terms-and-conditions" ? "invert" : ""
        }`}
      />

      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            {/* <h2 className="text-xl font-semibold">Menu</h2> */}
            <img
              src={images.logo}
              alt=""
              className="xl:w-[127px] w-[100px] object-contain"
            />
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-500 hover:text-gray-700"
              aria-label="Close mobile menu"
            >
              <CgClose size={24} />
            </button>
          </div>

          <nav className="flex-grow overflow-y-auto">
            <ul className="px-4 py-2">
              {navItems.map((item) => (
                <li key={item.title} className="mb-2">
                  {item.isDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="flex justify-between items-center w-full py-2 px-3 rounded-lg  hover:bg-gray-200 transition-colors duration-200"
                        aria-expanded={openDropdown === item.title}
                      >
                        {item.title}
                        {openDropdown === item.title ? (
                          <BiChevronUp size={20} />
                        ) : (
                          <BiChevronDown size={20} />
                        )}
                      </button>
                      <ul
                        className={`ml-4  space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                          openDropdown === item.title
                            ? "max-h-96 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <li key={dropdownItem.title}>
                            <a
                              href={dropdownItem.link}
                              onClick={toggleMenu}
                              className="block py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            >
                              {dropdownItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="block py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t ">
            <button
              className="bg-buttonBg xl:py-3 py-2 px-6 rounded-full text-white w-full relative z-20"
              onClick={() => {
                setOpenModal(true);
                setIsOpen(false);
              }}
            >
              Claim Free Trial
            </button>
          </div>
        </div>
      </div>
      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
};

export default MobileNavigation;
