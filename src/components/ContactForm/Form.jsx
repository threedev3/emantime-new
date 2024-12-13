import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "react-select";
import { toast } from "react-hot-toast";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL_LOCAL;

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courses, setCourses] = useState([]);

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

      const formData = {
        full_name,
        email,
        phone,
        courses: courses.map((course) => course.value),
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
    >
      <input
        type="text"
        className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
        placeholder="Full Name"
        value={full_name}
        onChange={(e) => setFullName(e.target.value)}
      />

      <div className="w-80 relative">
        <PhoneInput
          defaultCountry="us"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          className="bg-inputBg py-2 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
        />
      </div>
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
