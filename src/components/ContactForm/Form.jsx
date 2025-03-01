import React from "react";
import { useDemoLeadForm } from "../../hooks/useDemoLeadForm";
import FullName from "../FormFields/FullName";
import PhoneNumber from "../FormFields/PhoneNumber";
import Email from "../FormFields/Email";
import SelectCourse from "../FormFields/SelectCourse";

const Form = () => {
  const {
    full_name,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    courses,
    setCourses,
    isLoading,
    courseOptions,
    handleSubmit,
  } = useDemoLeadForm((leadId) => {
    window.location.href = `/enrollment-form/${leadId}`;
  });

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

      <div className="w-80 relative">
        <PhoneNumber
          defaultCountry={"us"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          className="bg-inputBg py-2 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-80"
        />
      </div>

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
