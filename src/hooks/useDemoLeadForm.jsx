import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { getGCLID, getStoredGCLID, storeGCLID } from "../utils/gclid";
import { trackEvent } from "../utils/analytics";

export const useDemoLeadForm = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL_LOCAL;

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courses, setCourses] = useState([]);
  const [promo_code, setPromoCode] = useState("");
  const [gclid, setGclid] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const phoneUtil = PhoneNumberUtil.getInstance();

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
      // Example: "/courses/quran-reading": "Quran Reading",
    };

    return pathMappings[path] || path;
  };

  const pagePath = window.location.pathname;

  const pageSource = getPageSource(pagePath);

  // const trackTikTokEvent = (eventName, eventData) => {
  //   if (window.ttq) {
  //     window.ttq.track(eventName, eventData);
  //   }
  // };

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
      toast.error("Failed to submit form. Please try again.");
      setIsLoading(false);

      throw error;
    }
  };

  // const handleSubmit = async (e, customSuccessCallback) => {
  //   e.preventDefault();

  //   // console.log(validPromoCodes);

  //   if (!full_name.trim()) {
  //     toast.error("Full Name is required");
  //     return false;
  //   }

  //   if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
  //     toast.error("Please enter a valid email address");
  //     return false;
  //   }

  //   try {
  //     const parsedPhone = phoneUtil.parse(phone);
  //     if (!phoneUtil.isValidNumber(parsedPhone)) {
  //       toast.error("Please enter a valid phone number");
  //       return false;
  //     }
  //   } catch (error) {
  //     toast.error("Invalid phone number format");
  //     return false;
  //   }

  //   // if (
  //   //   promo_code.trim() &&
  //   //   !validPromoCodes.includes(promo_code.trim().toUpperCase())
  //   // ) {
  //   //   toast.error("Invalid promo code. Please try again.");
  //   //   return false;
  //   // }

  //   if (
  //     promo_code.trim() &&
  //     !validPromoCodes.some(
  //       (code) => code.toLowerCase() === promo_code.trim().toLowerCase()
  //     )
  //   ) {
  //     toast.error("Invalid promo code. Please try again.");
  //     return false;
  //   }

  //   if (courses.length === 0) {
  //     toast.error("Please select at least one course");
  //     return false;
  //   }

  //   try {
  //     setIsLoading(true);

  //     const ipInfo = await fetchIPInfo();

  //     const formData = {
  //       full_name,
  //       email,
  //       phone,
  //       courses: courses.map((course) => course.value),
  //       promo_code,
  //       gclid,
  //       ...(ipInfo && {
  //         userLocation: {
  //           ip_address: ipInfo.ip,
  //           country: ipInfo.countryFullName,
  //           city: ipInfo.city,
  //           region: ipInfo.region,
  //         },
  //       }),
  //     };

  //     const response = await submitDemoLead(formData);

  //     const leadId = response.data && response.data._id;

  //     if (!leadId) {
  //       throw new Error("Failed to retrieve lead ID.");
  //     }

  //     // Track form submission
  //     trackEvent("demo_form_submission", {
  //       lead_id: leadId,
  //       courses: formData.courses,
  //       country: formData.userLocation?.country,
  //       has_promo: !!formData.promo_code,
  //       gclid: formData.gclid,
  //     });

  //     // // Track TikTok SubmitForm event
  //     // trackTikTokEvent("SubmitForm", {
  //     //   content_name: "Demo Class Registration",
  //     //   content_type: "form_submission",
  //     //   content_id: leadId,
  //     //   value: formData.courses.length,
  //     //   currency: "USD",
  //     //   email: formData.email,
  //     //   phone_number: formData.phone,
  //     //   external_id: leadId,
  //     //   ip: ipInfo?.ip,
  //     //   url: window.location.href,
  //     //   timestamp: Date.now(),
  //     //   event_id: `demo_form_${leadId}`,
  //     // });

  //     setIsLoading(false);
  //     toast.success("Form submitted successfully!");

  //     if (customSuccessCallback) {
  //       console.log("customSuccessCallback runs");
  //       customSuccessCallback(leadId);
  //     } else if (onSuccessCallback) {
  //       onSuccessCallback(leadId);
  //       console.log("onSuccessCallback runs");
  //     } else {
  //       window.location.href = `/enrollment-form/${leadId}`;
  //       console.log("else runs");
  //     }

  //     return true;
  //   } catch (error) {
  //     // Track form submission error
  //     trackEvent("demo_form_error", {
  //       error_message: error.message,
  //     });
  //     toast.error("Failed to submit form. Please try again.");
  //     setIsLoading(false);
  //     return false;
  //   }
  // };

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
    // Check if phone number has more than just the country code (typically country code is 1-3 digits)
    // This assumes the minimum length of a valid phone number (including country code) is 7 digits
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

  const handleSubmit = async (e, customSuccessCallback) => {
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

    const response = await submitDemoLead(formData);

    console.log("Response", response);

    const leadId = response.data?._id;

    if (!leadId) throw new Error("Failed to retrieve lead ID.");

    window.location.href = `/enrollment-form/${leadId}`;

    // try {
    //   const response = await submitDemoLead(formData);
    //   const leadId = response.data?._id;

    //   if (!leadId) throw new Error("Failed to retrieve lead ID.");

    //   try {
    //     trackEvent("demo_form_submission", {
    //       lead_id: leadId,
    //       courses: formData.courses,
    //       has_promo: !!formData.promo_code,
    //       gclid: formData.gclid,
    //     });
    //   } catch (trackError) {
    //     console.error("Tracking event failed:", trackError);
    //   }

    //   toast.success("Form submitted successfully!");

    //   if (customSuccessCallback) {
    //     customSuccessCallback(leadId);
    //   } else if (onSuccessCallback) {
    //     onSuccessCallback(leadId);
    //   } else {
    //     window.location.href = `/enrollment-form/${leadId}`;
    //   }
    // } catch (error) {
    //   toast.error("Failed to submit form. Please try again.");
    // } finally {
    //   setIsLoading(false);
    // }
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
    isLoading,
    courseOptions,
    handleSubmit,
    resetForm,
    pageSource,
  };
};
