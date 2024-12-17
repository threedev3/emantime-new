import React, { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "react-select";
import { toast } from "react-hot-toast";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getGCLID, getStoredGCLID, storeGCLID } from "../../utils/gclid";
import { getFullCountryName } from "../../utils/getCountryName";

const Form = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL_LOCAL;
  const IPINFO_TOKEN = import.meta.env.VITE_APP_IP_INFO_API_TOKEN;

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courses, setCourses] = useState([]);
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

  const navigate = useNavigate();

  const phoneUtil = PhoneNumberUtil.getInstance();

  const courseOptions = [
    { value: "Tajweed Mastery", label: "Tajweed Mastery" },
    { value: "Quran Reading", label: "Quran Reading" },
    { value: "Arabic Language", label: "Arabic Language" },
    { value: "Basic Qaida", label: "Basic Qaida" },
    { value: "Islamic Studies", label: "Islamic Studies" },
    { value: "One-to-One Counseling", label: "One-to-One Counseling" },
  ];

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

  useEffect(() => {
    console.log("Current defaultCountry:", defaultCountry);
  }, [defaultCountry]);

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

    if (courses.length === 0) {
      toast.error("Please select at least one course");
      return;
    }

    try {
      setIsLoading(true);

      // Fetch IP Info at submission time
      const ipInfo = await fetchIPInfo();

      // const gclid = localStorage.getItem("gclid");

      const formData = {
        full_name,
        email,
        phone,
        courses: courses.map((course) => course.value),
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

      console.log("Submitted lead:", response);
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      setIsLoading(false);
    }
  };
  return (
    <form
      className="flex justify-center items-center gap-6 flex-wrap"
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
    >
      <input
        type="text"
        className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
        placeholder="Full Name"
        value={full_name}
        onChange={(e) => setFullName(e.target.value)}
      />

      {defaultCountry && (
        <div className="w-80 relative">
          <PhoneInput
            defaultCountry={defaultCountry}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            className="bg-inputBg py-2 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
          />
        </div>
      )}
      <input
        type="text"
        className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="w-80">
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
              borderRadius: "12px",
              height: "60px",
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
