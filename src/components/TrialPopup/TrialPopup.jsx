import { useEffect, useState } from "react";
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
import FullName from "../FormFields/FullName";
import PhoneNumber from "../FormFields/PhoneNumber";
import Email from "../FormFields/Email";
import PromoCode from "../FormFields/PromoCode";
import SelectCourse from "../FormFields/SelectCourse";
import { EmailIcon, PromoIcon, UserIcon } from "../FormFields/FieldIcons";
import axios from "axios";
import toast from "react-hot-toast";
import { getGCLID, getStoredGCLID, storeGCLID } from "../../utils/gclid";
import * as Sentry from "@sentry/react";

export default function TrialPopup({ openModal, setOpenModal }) {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 25000);

    return () => clearTimeout(timer);
  }, [setOpenModal]);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 25000);

    return () => clearTimeout(timer);
  }, [setOpenModal]);

  return (
    <Transition appear show={openModal}>
      <Dialog
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={setOpenModal}
      >
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full max-w-4xl mx-auto items-center justify-center ">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="relative mx-5 my-5 min-[914px]:flex min-[914px]:flex-row min-[914px]:h-full flex flex-col max-h-[1000px] min-[914px]:w-full w-[417px] max-w-full rounded-xl  bg-white overflow-auto no-scrollbar">
                <button
                  className="absolute top-3 right-3 min-[914px]:text-btnGradRight lg:text-black text-white cursor-pointer z-30"
                  onClick={() => setOpenModal(false)}
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>

                <div className="sticky w-full lg:max-w-[50%] lg:h-auto h-[500px]">
                  <img src={images.popupimg} alt="" className="h-full w-full" />
                </div>
                <div className="relative lg:py-16 py-4 px-4 w-full flex flex-col justify-center items-center lg:gap-4 gap-2 lg:max-w-[50%] h-full overflow-y-auto no-scrollbar">
                  <DialogTitle
                    as="h3"
                    className="lg:text-4xl text-3xl font-semibold text-black text-center"
                  >
                    <span className="italic lg:text-4xl text-3xl mr-1">07</span>{" "}
                    Days Trial Now!
                  </DialogTitle>
                  <p className="mt-2 sm:text-base text-sm text-black text-center">
                    Get Enrolled Now and find some special and amazing discounts
                  </p>
                  <div className="w-full max-w-md lg:px-4">
                    <form
                      onSubmit={(e) => handleSubmit(e)}
                      onKeyDown={handleKeyDown}
                    >
                      <div className="relative">
                        <FullName
                          className={clsx(
                            "block w-full py-3 pl-[56px] pr-3 rounded-lg shadow-sm placeholder:text-black/65 bg-inputBg",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          value={full_name}
                          onChange={(e) => setFullName(e.target.value)}
                        />

                        <UserIcon className="absolute top-3.5 left-3 w-5 fill-gradThree" />
                      </div>

                      <div className="relative mt-3">
                        <Email
                          className={clsx(
                            "block w-full py-3 pl-[56px] pr-3 rounded-lg shadow-sm placeholder:text-black/65 bg-inputBg",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <EmailIcon className="absolute top-3.5 left-3 w-5 fill-gradThree" />
                      </div>

                      <div className="block w-full rounded-lg  text-black shadow-sm sm:text-sm sm:leading-6 bg-white mt-3">
                        <PhoneNumber
                          defaultCountry={"us"}
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
                          className={clsx(
                            "block w-full py-1 md:px-4 px-4 rounded-lg shadow-sm placeholder:text-black/65 bg-inputBg",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                        />
                      </div>

                      <div className="relative mt-3 ">
                        <PromoCode
                          className={clsx(
                            "block w-full py-3 pl-[56px] pr-3 rounded-lg shadow-sm placeholder:text-black/65 bg-inputBg",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          value={promo_code}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />

                        <PromoIcon className="absolute top-3.5 left-3 w-5 fill-gradThree" />
                      </div>
                      <div className="mt-3">
                        <SelectCourse
                          options={courseOptions}
                          value={courses}
                          onChange={setCourses}
                          variant="variant2"
                        />
                      </div>

                      <div className="mt-4 flex justify-center">
                        <Button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-gradOne via-gradTwo to-gradThree py-3 px-4 sm:text-base text-sm font-medium text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white text-center"
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
                            "Claim Your 7 days free trial"
                          )}
                        </Button>
                      </div>
                    </form>
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
