import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { PhoneNumberUtil } from "google-libphonenumber";
import { getFullCountryName } from "../utils/getCountryName";
import { getGCLID, getStoredGCLID, storeGCLID } from "../utils/gclid";

export const useDemoLeadForm = (onSuccessCallback) => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const IPINFO_TOKEN = import.meta.env.VITE_APP_IP_INFO_API_TOKEN;

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courses, setCourses] = useState([]);
  const [promo_code, setPromoCode] = useState("");
  const [gclid, setGclid] = useState("");
  const [defaultCountry, setDefaultCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const phoneUtil = PhoneNumberUtil.getInstance();

  const courseOptions = [
    { value: "Tajweed Mastery", label: "Tajweed Mastery" },
    { value: "Quran Reading", label: "Quran Reading" },
    { value: "Arabic Language", label: "Arabic Language" },
    { value: "Basic Qaida", label: "Basic Qaida" },
    { value: "Islamic Studies", label: "Islamic Studies" },
    { value: "One-to-One Counseling", label: "One-to-One Counseling" },
  ];

  const validPromoCodes = ["SAVE10", "WELCOME", "TRIAL123"];

  const fetchIPInfo = async () => {
    try {
      const response = await axios.get(
        `https://ipinfo.io/json?token=${IPINFO_TOKEN}`
      );
      const ipInfo = response.data;

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
        setDefaultCountry((ipInfo && ipInfo.countryCode) || "us");
      } catch (error) {
        setDefaultCountry("us");
        console.error("Error setting initial country:", error);
      }
    };

    storeGCLID();
    const currentGCLID = getGCLID() || getStoredGCLID();
    if (currentGCLID) {
      setGclid(currentGCLID);
    }

    setInitialCountry();
  }, []);

  const submitDemoLead = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/webLeads/demo`, data);
      return response.data;
    } catch (error) {
      console.error("Error submitting demo lead:", error);
      throw error;
    }
  };

  const handleSubmit = async (e, customSuccessCallback) => {
    e.preventDefault();

    if (!full_name.trim()) {
      toast.error("Full Name is required");
      return false;
    }

    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    try {
      const parsedPhone = phoneUtil.parse(phone);
      if (!phoneUtil.isValidNumber(parsedPhone)) {
        toast.error("Please enter a valid phone number");
        return false;
      }
    } catch (error) {
      toast.error("Invalid phone number format");
      return false;
    }

    if (
      promo_code.trim() &&
      !validPromoCodes.includes(promo_code.trim().toUpperCase())
    ) {
      toast.error("Invalid promo code. Please try again.");
      return false;
    }

    if (courses.length === 0) {
      toast.error("Please select at least one course");
      return false;
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

      const leadId = response.data && response.data._id;

      if (!leadId) {
        throw new Error("Failed to retrieve lead ID.");
      }

      setIsLoading(false);
      toast.success("Form submitted successfully!");

      if (customSuccessCallback) {
        customSuccessCallback(leadId);
      } else if (onSuccessCallback) {
        onSuccessCallback(leadId);
      } else {
        window.location.href = `/enrollment-form/${leadId}`;
      }

      return true;
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      setIsLoading(false);
      return false;
    }
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCourses([]);
    setPromoCode("");
  };

  return {
    full_name,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    courses,
    setCourses,
    promo_code,
    setPromoCode,
    defaultCountry,
    isLoading,
    courseOptions,
    handleSubmit,
    resetForm,
  };
};
