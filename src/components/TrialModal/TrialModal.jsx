import { useState, Fragment, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Description, Field, Input } from "@headlessui/react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import images from "../../assets/img/images";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-hot-toast";
import { PhoneNumberUtil } from "google-libphonenumber";
import { getFullCountryName } from "../../utils/getCountryName";
import { getGCLID, getStoredGCLID, storeGCLID } from "../../utils/gclid";

export default function TrialModal({ openModal, setOpenModal }) {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL_LOCAL;
  const IPINFO_TOKEN = import.meta.env.VITE_APP_IP_INFO_API_TOKEN;

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courses, setCourses] = useState([]);
  const [promo_code, setPromoCode] = useState("");
  const [gclid, setGclid] = useState("");
  const [defaultCountry, setDefaultCountry] = useState(null);


  const [isLoading, setIsLoading] = useState(false);

  // API service for submitting demo lead
  const submitDemoLead = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/webLeads/demo`, data);
      return response.data;
    } catch (error) {
      console.error("Error submitting demo lead:", error);
      throw error;
    }
  };

  const phoneUtil = PhoneNumberUtil.getInstance();

  const courseOptions = [
    { value: "Tajweed Mastery", label: "Tajweed Mastery" },
    { value: "Quran Reading", label: "Quran Reading" },
    { value: "Arabic Language", label: "Arabic Language" },
    { value: "Basic Qaida", label: "Basic Qaida" },
    { value: "Islamic Studies", label: "Islamic Studies" },
    { value: "One-to-One Counseling", label: "One-to-One Counseling" },
  ];

  // Predefined valid promo codes
  const validPromoCodes = ["SAVE10", "WELCOME", "TRIAL123"];

  // Function to fetch IP and Location Information
  const fetchIPInfo = async () => {
    try {
      const response = await axios.get(
        `https://ipinfo.io/json?token=${IPINFO_TOKEN}`
      );
      const ipInfo = response.data;

      // Convert country code to full name
      const countryFullName = getFullCountryName(ipInfo.country);
      const countryCode = ipInfo.country.toLowerCase();

      return {
        ...ipInfo,
        countryFullName,
        countryCode,
      };
    } catch (error) {
      console.error("Error fetching IP information:", error);
      return null;
    }
  };

  useEffect(() => {
    const setInitialCountry = async () => {
      try {
        const ipInfo = await fetchIPInfo();
        if (ipInfo && ipInfo.countryCode) {
          console.log("country code", ipInfo.countryCode);

          // Add this debug log to see the actual value being set
          console.log("Setting default country to:", ipInfo.countryCode);
          setDefaultCountry(ipInfo.countryCode);
        } else {
          // Fallback to 'us' if no country code is found
          setDefaultCountry("us");
        }
      } catch (error) {
        console.error("Error setting initial country:", error);
      }
    };

    // Capture and store GCLID when component mounts
    storeGCLID();

    // Set GCLID from URL or localStorage
    const currentGCLID = getGCLID() || getStoredGCLID();
    if (currentGCLID) {
      setGclid(currentGCLID);
    }

    // Call the function to set initial country
    setInitialCountry();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!full_name.trim()) {
      toast.error("Full Name is required");
      return;
    }

    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const parsedPhone = phoneUtil.parse(phone);
      if (!phoneUtil.isValidNumber(parsedPhone)) {
        toast.error("Please enter a valid phone number");
        return;
      }
    } catch (error) {
      toast.error("Invalid phone number format");
      return;
    }

    // Validate the promo code
    if (
      promo_code.trim() &&
      !validPromoCodes.includes(promo_code.trim().toUpperCase())
    ) {
      toast.error("Invalid promo code. Please try again.");
      return;
    }

    if (courses.length === 0) {
      toast.error("Please select at least one course");
      return;
    }

    try {
      setIsLoading(true);

      const ipInfo = await fetchIPInfo();

      const formData = {
        full_name,
        email,
        phone,
        courses: courses.map((course) => course.value),
        promo_code,
        gclid,
        ...(ipInfo && {
          userLocation: {
            ip_address: ipInfo.ip,
            country: ipInfo.countryFullName,
            city: ipInfo.city,
            region: ipInfo.region,
          },
        }),
      };

      const response = await submitDemoLead(formData);

      // Extract the ID from the API response
      const leadId = response.data?._id; // Ensure the ID is retrieved safely

      if (!leadId) {
        throw new Error("Failed to retrieve lead ID.");
      }

      setIsLoading(false);

      toast.success("Form submitted successfully!");

      // navigate(`/enrollment-form/${leadId}`);
      window.location.href = `/enrollment-form/${leadId}`;

      // console.log("Submitted lead:", response);
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      setIsLoading(false);
    }
  };

  const onSuccess = () => {
    setOpenModal(false);
    // navigate("/enrollment");
  };

  const handleClose = () => {
    // Allow time for the closing transition to complete
    setTimeout(() => {
      setOpenModal(false);
    }, 300); // Match this with the duration of the leave transition
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
                        onSubmit={(e) => handleSubmit(e, onSuccess)}
                        onKeyDown={handleKeyDown}
                      >
                        <div className="relative mt-3 ">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className={clsx(
                              "block w-full py-4 pl-[60px] pr-3 rounded-lg border border-black/20 placeholder:text-black/65 bg-inputBg",
                              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                            )}
                            value={full_name}
                            onChange={(e) => setFullName(e.target.value)}
                          />

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="absolute top-4 left-3 w-6 fill-gradThree"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>

                        <div className="relative mt-3">
                          <input
                            type="email"
                            placeholder="Email Address"
                            className={clsx(
                              "block w-full py-4 pl-[60px] pr-3 rounded-lg border border-black/20 placeholder:text-black/65 bg-inputBg",
                              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                            )}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="absolute top-4 left-3 w-6 fill-gradThree"
                          >
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                          </svg>
                        </div>

                        {defaultCountry && (
                          <div className="block w-full rounded-lg  text-black shadow-sm sm:text-sm sm:leading-6 bg-white mt-3">
                            <PhoneInput
                              defaultCountry={defaultCountry}
                              value={phone}
                              onChange={(phone) => setPhone(phone)}
                              className={clsx(
                                "block w-full py-2 md:px-2 px-4 rounded-lg border border-black/20 placeholder:text-black/65 bg-inputBg",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                              )}
                            />
                          </div>
                        )}

                        <div className="relative mt-3 ">
                          <input
                            type="text"
                            placeholder="Promo Code"
                            className={clsx(
                              "block w-full py-4 pl-[60px] pr-3 rounded-lg border border-black/20 placeholder:text-black/65 bg-inputBg",
                              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                            )}
                            value={promo_code}
                            onChange={(e) => setPromoCode(e.target.value)}
                          />

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="absolute top-4 left-3 w-6 fill-gradThree"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="mt-3">
                          <Select
                            options={courseOptions}
                            isMulti
                            placeholder="Select Courses"
                            className="rounded-xl  placeholder:text-black/65"
                            styles={{
                              control: (base) => ({
                                ...base,
                                padding: "8px 16px",
                                backgroundColor: "#d9d9d9",
                                borderWidth: 1,
                                borderColor: "rgb(0 0 0 / 0.2)",
                                borderRadius: "8px",
                                height: "58px",
                                overflow: "auto",
                              }),
                              dropdownIndicator: (provided, state) => ({
                                ...provided,
                                color: "rgb(0 0 0 / 0.6)",
                                paddingRight: "0.5rem",
                                display: state.isDisabled ? "none" : "block",
                              }),
                              indicatorSeparator: () => ({ display: "none" }),
                              placeholder: (base) => ({
                                ...base,
                                color: "rgba(0, 0, 0, 0.65)",
                              }),
                              menu: (base) => ({
                                ...base,
                                position: "absolute",
                                zIndex: 100,
                              }),
                            }}
                            value={courses}
                            onChange={setCourses}
                          />
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
