import React, { useEffect, useState } from "react";
import FullName from "../FormFields/FullName";
import PhoneNumber from "../FormFields/PhoneNumber";
import Email from "../FormFields/Email";
import SelectCourse from "../FormFields/SelectCourse";
import { getGCLID, getStoredGCLID, storeGCLID } from "../../utils/gclid";
import toast from "react-hot-toast";
import axios from "axios";
import * as Sentry from "@sentry/react";
// import { getFullCountryName } from "../../utils/getCountryName";

const Form = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  // const IPINFO_TOKEN = import.meta.env.VITE_APP_IP_INFO_API_TOKEN;

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courses, setCourses] = useState([]);
  const [gclid, setGclid] = useState("");
  const [defaultCountry, setDefaultCountry] = useState(null);
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

  // const fetchIPInfo = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://ipinfo.io/json?token=${IPINFO_TOKEN}`
  //     );
  //     const ipInfo = response.data;

  //     const countryFullName = getFullCountryName(ipInfo.country);
  //     const countryCode = ipInfo.country.toLowerCase();

  //     return {
  //       ...ipInfo,
  //       countryFullName,
  //       countryCode,
  //     };
  //   } catch (error) {
  //     console.error("Error fetching IP information:", error);
  //     return null;
  //   }
  // };

  useEffect(() => {
    // const setInitialCountry = async () => {
    //   try {
    //     const ipInfo = await fetchIPInfo();
    //     setDefaultCountry((ipInfo && ipInfo.countryCode) || "us");
    //   } catch (error) {
    //     setDefaultCountry("us");
    //     console.error("Error setting initial country:", error);
    //   }
    // };

    storeGCLID();
    const currentGCLID = getGCLID() || getStoredGCLID();
    if (currentGCLID) {
      setGclid(currentGCLID);
    }

    // setInitialCountry();
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

    if (courses.length === 0) {
      toast.error("Please select at least one course");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // const ipInfo = await fetchIPInfo();

    const formData = {
      full_name,
      email,
      phone,
      courses: courses.map((course) => course.value),
      gclid,
      page_source: pageSource,
      // ...(ipInfo && {
      //   userLocation: {
      //     ip_address: ipInfo.ip,
      //     country: ipInfo.countryFullName,
      //     city: ipInfo.city,
      //     region: ipInfo.region,
      //   },
      // }),
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

  return (
    <form
      className="flex justify-center items-center gap-6 flex-wrap"
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
    >
      <FullName
        className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
        value={full_name}
        onChange={(e) => setFullName(e.target.value)}
      />

      {/* {defaultCountry && ( */}
      <div className="w-80 relative">
        <PhoneNumber
          // defaultCountry={defaultCountry}
          defaultCountry="us"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          className="bg-inputBg py-2 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
        />
      </div>
      {/* )} */}

      <Email
        className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="w-80">
        <SelectCourse
          options={courseOptions}
          value={courses}
          onChange={setCourses}
        />
      </div>
      <button
        type="submit"
        className={`bg-gradient-to-r from-gradTwo to-gradThree text-white text-xl py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80  ${
          isLoading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
