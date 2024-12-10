import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "react-select";
import { toast } from "react-hot-toast";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  const phoneUtil = PhoneNumberUtil.getInstance();

  const courseOptions = [
    { value: "Tajweed Mastery", label: "Tajweed Mastery" },
    { value: "Arabic Language", label: "Arabic Language" },
    { value: "Islamic Studies", label: "Islamic Studies" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!name.trim()) {
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

    // Success
    toast.success("Form submitted successfully!");
    navigate("/enrollment-form");
    console.log({
      name,
      email,
      phone,
      courses: courses.map((course) => course.value),
    });
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      {/* <input
            type="text"
            className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
            placeholder="Full Name"
          /> */}
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
          }}
          value={courses}
          onChange={setCourses}
        />
      </div>
      <input
        type="submit"
        className="bg-gradient-to-r from-gradTwo to-gradThree text-white text-xl py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80 cursor-pointer"
        value="Submit"
      />
    </form>
  );
};

export default Form;
