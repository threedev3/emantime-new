import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import images from "../../assets/img/images";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "react-select";
import FullName from "../FormFields/FullName";
import PhoneNumber from "../FormFields/PhoneNumber";
import Email from "../FormFields/Email";
import PromoCode from "../FormFields/PromoCode";
import SelectCourse from "../FormFields/SelectCourse";
import { EmailIcon, PromoIcon, UserIcon } from "../FormFields/FieldIcons";
import axios from "axios";
import toast from "react-hot-toast";
import * as Sentry from "@sentry/react";
import { getGCLID, getStoredGCLID, storeGCLID } from "../../utils/gclid";

const FieldSkeleton = ({ className = "" }) => (
  <div className="block w-full rounded-lg border border-black/20 text-black shadow-sm sm:text-sm sm:leading-6 bg-white mt-3">
    <div className="animate-pulse h-14 bg-gray-200 rounded-lg"></div>
  </div>
);

export default function TrialModal({ openModal, setOpenModal }) {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courses, setCourses] = useState([]);
  const [promo_code, setPromoCode] = useState("");
  const [gclid, setGclid] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const courseOptions = [
    { value: "Tajweed Crash Course", label: "Tajweed Crash Course" },
    { value: "Tajweed Mastery", label: "Tajweed Mastery" },
    { value: "Quran Reading", label: "Quran Reading" },
    { value: "Arabic Language", label: "Arabic Language" },
    { value: "Basic Qaida", label: "Basic Qaida" },
    { value: "Islamic Studies", label: "Islamic Studies" },
    { value: "One-to-One Counseling", label: "One-to-One Counseling" },
  ];

  const validPromoCodes = ["Hayma10", "Mariam10", "Walla10", "Meryem10"];

  // Function to map path to page source
  const getPageSource = (path) => {
    const pathMappings = {
      "/courses/tajweed-crash-course": "Tajweed Crash Course Page",
      "/": "Home Page",
      // Add more mappings as needed
    };

    return pathMappings[path] || path;
  };

  const pagePath = window.location.pathname;
  const pageSource = getPageSource(pagePath);

  useEffect(() => {
    storeGCLID();
    const currentGCLID = getGCLID() || getStoredGCLID();
    if (currentGCLID) {
      setGclid(currentGCLID);
    }
  }, []);

  const submitDemoLead = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${BASE_URL}/webLeads/demo`, data);
      toast.success("Form submitted successfully!");
      setIsLoading(false);
      return response.data;
    } catch (error) {
      console.error("Error submitting demo lead:", error);
      // 👉 Send the error to Sentry
      Sentry.captureException("Error submitting demo lead:", error);
      toast.error("Failed to submit form. Please try again.");
      setIsLoading(false);
      throw error;
    }
  };

  const validateForm = () => {
    if (!full_name.trim()) {
      toast.error("Full Name is required");
      return false;
    }

    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Enhanced phone validation
    const phoneNumberWithoutSpaces = phone.replace(/\s+/g, "");
    if (
      !phone.trim() ||
      phoneNumberWithoutSpaces.length < 8 ||
      phoneNumberWithoutSpaces.length > 20
    ) {
      toast.error("Please enter a complete phone number");
      return false;
    }

    if (
      promo_code.trim() &&
      !validPromoCodes.some(
        (code) => code.toLowerCase() === promo_code.trim().toLowerCase()
      )
    ) {
      toast.error("Invalid promo code. Please try again.");
      return false;
    }

    if (courses.length === 0) {
      toast.error("Please select at least one course");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = {
      full_name,
      email,
      phone,
      courses: courses.map((course) => course.value),
      promo_code,
      gclid,
      page_source: pageSource,
    };

    try {
      const response = await submitDemoLead(formData);
      const leadId = response.data?._id;

      if (!leadId) throw new Error("Failed to retrieve lead ID.");

      window.location.href = `/enrollment-form/${leadId}`;
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleClose = () => {
    setTimeout(() => {
      setOpenModal(false);
    }, 300);
  };

  return (
    <Transition appear={true} show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={handleClose}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center ">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="relative w-full mx-5 md:max-w-2xl min-[540px]:max-w-md max-w-[350px] rounded-xl bg-white xl:max-h-full lg:max-h-[580px]">
                <button
                  className="absolute top-3 right-3 text-white  z-30"
                  onClick={() => handleClose()}
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>
                <div className="flex justify-center items-center bg-gradient-to-r from-gradOne via-gradTwo to-gradThree rounded-t-xl xl:p-6 p-4">
                  <img
                    src={images.footerLogo}
                    alt=""
                    className="xl:w-44 w-36"
                  />
                </div>
                <div className="sm:px-8 px-4 xl:py-8 lg:py-4 py-6 xl:max-h-[550px] max-h-[420px] overflow-y-auto no-scrollbar">
                  <div className=" ">
                    <DialogTitle
                      as="h3"
                      className="sm:text-3xl text-2xl font-semibold  text-black text-center poppins-bold"
                    >
                      Start Your 7 Day Trial
                    </DialogTitle>
                    <p className="xl:my-4 my-2 sm:text-base text-sm text-black text-center">
                      Get Enrolled Now and find some special and amazing
                      discounts
                    </p>
                    <div className="w-full  mx-auto md:px-4">
                      <form
                        onSubmit={(e) => handleSubmit(e)}
                        onKeyDown={handleKeyDown}
                      >
                        <div>
                          <div className="relative mt-3 ">
                            <FullName
                              className={clsx(
                                "block w-full py-4 pl-[60px] pr-3 rounded-lg border border-black/20 placeholder:text-black/65 bg-inputBg",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                              )}
                              value={full_name}
                              onChange={(e) => setFullName(e.target.value)}
                            />

                            <UserIcon className="absolute top-4 left-3 w-6 fill-gradThree" />
                          </div>

                          <div className="relative mt-3">
                            <Email
                              className={clsx(
                                "block w-full py-4 pl-[60px] pr-3 rounded-lg border border-black/20 placeholder:text-black/65 bg-inputBg",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                              )}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />

                            <EmailIcon className="absolute top-4 left-3 w-6 fill-gradThree" />
                          </div>

                          <div className="block w-full rounded-lg  text-black shadow-sm sm:text-sm sm:leading-6 bg-white mt-3">
                            <PhoneNumber
                              defaultCountry={"us"}
                              value={phone}
                              onChange={(phone) => setPhone(phone)}
                              className={clsx(
                                "block w-full py-2 md:px-2 px-4 rounded-lg border border-black/20 placeholder:text-black/65 bg-inputBg",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                              )}
                            />
                          </div>

                          <div className="relative mt-3 ">
                            <PromoCode
                              className={clsx(
                                "block w-full py-4 pl-[60px] pr-3 rounded-lg border border-black/20 placeholder:text-black/65 bg-inputBg",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                              )}
                              value={promo_code}
                              onChange={(e) => setPromoCode(e.target.value)}
                            />

                            <PromoIcon className="absolute top-4 left-3 w-6 fill-gradThree" />
                          </div>

                          <div className="mt-3">
                            <SelectCourse
                              options={courseOptions}
                              value={courses}
                              onChange={setCourses}
                              variant="variant1"
                            />
                          </div>
                        </div>

                        <div className="mt-3 flex justify-center">
                          <Button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 md:w-32 w-full rounded-lg bg-gradient-to-r from-gradOne via-gradTwo to-gradThree py-2.5 px-4 text-base font-medium text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white "
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="animate-spin h-8 w-8"
                                fill="white"
                              >
                                <path
                                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                  opacity=".25"
                                />
                                <path
                                  d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                  className="spinner_ajPY"
                                />
                              </svg>
                            ) : (
                              "Get Enrolled"
                            )}
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
