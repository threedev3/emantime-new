import React, { useEffect, useState } from "react";
import images from "../../assets/img/images";
import Select from "react-select";
import { Country } from "country-state-city";
import TimePicker from "../TimePIcker/TimePicker";
import { Dialog, DialogTitle } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

const EnrollmentForm = ({ demoId }) => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL_LOCAL;

  const [timezones, setTimezones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    // Enrollment Details
    enrollment_type: "", // Multi-select
    number_of_students: null,
    applicant_gender: "",
    student_gender: "",
    learning_history: "",
    interested_courses: [], // Multi-select
    days_per_week: "",
    teacher_gender: "",
    trial_lesson_slot: {
      date: null,
      time: "",
    },
    country: {
      name: "",
      value: "",
    },
    time_zone: {
      name: "",
      value: "",
    },
    instruction_language: "",
    other_language: "",
    learning_goals: "",
    specific_needs: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);

  const generateTimeSlots = () => {
    const slots = [];
    let start = new Date();
    start.setHours(0, 0, 0, 0); // Start at 12:00 AM

    for (let i = 0; i < 48; i++) {
      const end = new Date(start.getTime() + 30 * 60 * 1000); // Add 30 minutes
      const formatTime = (time) =>
        time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

      slots.push(`${formatTime(start)} to ${formatTime(end)}`);
      start = end; // Move to next slot
    }

    return slots;
  };

  const customStyles = {
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
  };

  const enrollmentOptions = [
    { value: "Myself", label: "Myself" },
    { value: "A family member", label: "A family member" },
    { value: "Other", label: "Other" },
  ];

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const daysPerWeek = [
    { value: "1 day", label: "1 day" },
    { value: "2 days", label: "2 days" },
    { value: "3 days", label: "3 days" },
    { value: "4 days", label: "4 days" },
    { value: "5 days", label: "5 days" },
    { value: "6 days", label: "6 days" },
    { value: "7 days", label: "7 days" },
  ];
  const studentGenderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Both", label: "Both" },
  ];

  const handleInputChange = (e, field) => {
    const { value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: type === "number" ? parseInt(value) || 1 : value,
    }));
  };

  // Handler for radio button changes
  const handleRadioChange = (e, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSelectorChange = (field, selectedOption) => {
    if (field === "country") {
      const selectedCountry = Country.getCountryByCode(selectedOption.value);

      const countryTimezones = selectedCountry?.timezones || [];

      const filteredTimezones = Array.from(
        countryTimezones
          .reduce((map, item) => {
            if (!map.has(item.tzName)) {
              map.set(item.tzName, {
                label: item.tzName,
                value: item.gmtOffsetName,
              });
            }
            return map;
          }, new Map())
          .values()
      );

      setTimezones(filteredTimezones);

      setFormData((prev) => ({
        ...prev,
        country: {
          name: selectedOption.label, // Store the country name
          value: selectedOption.value, // Store the country code
        },
        time_zone: { name: "", value: "" }, // Reset timezone
      }));
    } else if (field === "time_zone") {
      setFormData((prev) => ({
        ...prev,
        time_zone: {
          name: selectedOption.label,
          value: selectedOption.value,
        },
      }));
    }
  };

  // Handler for select inputs with a single value
  const handleSingleSelectChange = (selectedOption, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: selectedOption ? selectedOption.value : "",
    }));
  };

  // Handler for multi-select inputs
  const handleMultiSelectChange = (newValues, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: newValues, // Update the specific field
    }));
  };

  // Date and time handlers
  const handleDateChange = (date) => {
    // Generate time slots when date is selected
    const slots = generateTimeSlots();
    setTimeSlots(slots);

    setFormData((prev) => ({
      ...prev,
      trial_lesson_slot: {
        ...prev.trial_lesson_slot,
        date: date,
      },
    }));
  };

  const handleTimeSelect = (time) => {
    setFormData((prev) => ({
      ...prev,
      trial_lesson_slot: {
        ...prev.trial_lesson_slot,
        time: time,
      },
    }));
    setIsModalOpen(false);
  };

  // Countries for select
  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const updateDemoLead = async (data) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/webLeads/demo/${demoId}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting demo lead:", error);
      throw error;
    }
  };

  const validateForm = () => {
    const requiredFields = [
      "enrollment_type",
      "number_of_students",
      "applicant_gender",
      "student_gender",
      "learning_history",
      "interested_courses",
      "days_per_week",
      "teacher_gender",
      "instruction_language",
      "trial_lesson_slot.date",
      "trial_lesson_slot.time",
      "country",
      "time_zone.name",
      "learning_goals",
      "specific_needs",
    ];

    const fieldNames = {
      enrollment_type: "Enrollment Type",
      number_of_students: "Number of Students",
      applicant_gender: "Applicant Gender",
      student_gender: "Student Gender",
      learning_history: "Learning History",
      interested_courses: "Interested Courses",
      days_per_week: "Days Per Week",
      teacher_gender: "Teacher Gender",
      instruction_language: "Instruction Language",
      "trial_lesson_slot.date": "Trial Lesson Date",
      "trial_lesson_slot.time": "Trial Lesson Time",
      country: "Country",
      "time_zone.name": "Time Zone",
      learning_goals: "Learning Goals",
      specific_needs: "Specific Needs",
    };

    for (let field of requiredFields) {
      const value = field.includes(".")
        ? formData[field.split(".")[0]][field.split(".")[1]]
        : formData[field];

      if (!value || (Array.isArray(value) && value.length === 0)) {
        const fieldName = fieldNames[field] || field; // Fallback to the raw field name if no mapping is provided
        toast.error(`Please fill in the ${fieldName} field`);
        return false;
      }
    }

    // Additional validation for "Other" option in instruction_language
    if (
      formData.instruction_language === "Other" &&
      (!formData.other_language || formData.other_language.trim() === "")
    ) {
      toast.error("Please fill in the Other Language field");
      return false;
    }
    return true;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      // Prepare data for submission
      const submissionData = {
        ...formData,
        trial_lesson_slot: {
          date: formData.trial_lesson_slot.date
            ? formData.trial_lesson_slot.date
            : null,
          time: formData.trial_lesson_slot.time,
        },
      };

      const response = await updateDemoLead(submissionData);

      setIsLoading(false);

      toast.success("Enrollment submitted successfully");
      console.log("Enrollment submitted", response);

      // Reset form data to initial state
      setFormData({
        enrollment_type: "", // Multi-select
        number_of_students: null,
        applicant_gender: "",
        student_gender: "",
        learning_history: "",
        interested_courses: [],
        teacher_gender: "",
        instruction_language: "",
        other_language: "",
        days_per_week: "",
        learning_goals: "",
        specific_needs: "",
        country: {
          name: "",
          value: "",
        },
        time_zone: {
          name: "",
          value: "",
        },
        trial_lesson_slot: {
          date: null,
          time: "",
        },
      });

      // Navigate to the thank-you page
      // navigate("/thank-you");
      window.location.href = "/thank-you";
    } catch (error) {
      console.error("Enrollment submission failed", error);
      toast.error("Failed to submit enrollment. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full px-6 xl:py-12 py-6 overflow-x-hidden relative">
      <div className="max-w-[1600px] mx-auto ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* First section  */}
          <div className="flex justify-between items-center gap-16">
            <div className="flex flex-col gap-8 w-full">
              <h3 className="lg:text-4xl md:text-3xl text-[24px] lg:max-w-2xl md:max-w-lg max-w-sm text-black ">
                Online Quran Tajweed Program{" "}
                <span className="poppins-bold">Enrollment Form</span>
              </h3>

              <div className="flex flex-col gap-4">
                <Select
                  options={enrollmentOptions}
                  value={enrollmentOptions.find(
                    (option) => option.value === formData.enrollment_type
                  )}
                  onChange={(option) =>
                    handleSingleSelectChange(option, "enrollment_type")
                  }
                  placeholder="Who are you enrolling for?"
                  className="rounded-xl  placeholder:text-black/65"
                  styles={customStyles}
                />
                <input
                  type="number"
                  value={formData.number_of_students}
                  onChange={(e) => handleInputChange(e, "number_of_students")}
                  className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 "
                  placeholder="How many students will be enrolling?"
                />

                <Select
                  options={genderOptions}
                  value={genderOptions.find(
                    (option) => option.value === formData.applicant_gender
                  )}
                  onChange={(option) =>
                    handleSingleSelectChange(option, "applicant_gender")
                  }
                  placeholder="Your Gender"
                  className="rounded-xl  placeholder:text-black/65"
                  styles={customStyles}
                />
                <Select
                  options={studentGenderOptions}
                  value={studentGenderOptions.find(
                    (option) => option.value === formData.student_gender
                  )}
                  onChange={(option) =>
                    handleSingleSelectChange(option, "student_gender")
                  }
                  placeholder="Student Gender"
                  className="rounded-xl  placeholder:text-black/65"
                  styles={customStyles}
                />
              </div>
            </div>

            <div className="md:block hidden w-full">
              <img src={images.enroll1} alt="" />
            </div>
          </div>
          {/* Second section  */}
          <div className="flex justify-between items-center gap-16">
            <div className="md:block hidden w-full">
              <img src={images.enroll2} alt="" />
            </div>
            <div className="flex flex-col gap-8 w-full">
              <h3 className="lg:text-4xl md:text-3xl text-[24px] lg:max-w-2xl md:max-w-lg max-w-sm text-black ">
                Have You Learned Quran Or Related{" "}
                <span className="poppins-bold">Subjects</span> Before?
              </h3>

              <div className="flex flex-col gap-6">
                {[
                  "No, it's my first time (Beginner)",
                  "Yes, at an intermediate level",
                  "Yes, at an advanced level",
                ].map((level) => (
                  <label key={level} className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="learning_history"
                      value={level}
                      checked={formData.learning_history === level}
                      onChange={(e) => handleRadioChange(e, "learning_history")}
                      className="form-radio w-5 h-5 accent-gradOne"
                    />
                    <span className="md:text-lg text-base text-black/65">
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          {/* Third section  */}
          <div className="flex justify-between items-center gap-16">
            <div className="flex flex-col gap-8 w-full">
              <h3 className="lg:text-4xl md:text-3xl text-[24px] lg:max-w-2xl md:max-w-lg max-w-sm text-black ">
                Course <span className="poppins-bold">Preferences</span>
              </h3>

              <div className="flex flex-col gap-6">
                <h3 className="lg:text-xl md:text-lg text-lg lg:max-w-2xl md:max-w-lg max-w-sm text-black ">
                  Which course(s) are you{" "}
                  <span className="poppins-bold">interested</span> in?
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    "Tajweed Mastery",
                    "Quran Reading",
                    "Arabic Language",
                    "Basic Qaida",
                    "Islamic Studies",
                    "One-to-One Counseling",
                  ].map((course) => (
                    <label key={course} className="flex items-center space-x-6">
                      <input
                        type="checkbox"
                        name="interested_courses"
                        value={course}
                        checked={formData.interested_courses.includes(course)}
                        onChange={(e) =>
                          handleMultiSelectChange(
                            e.target.checked
                              ? [...formData.interested_courses, course] // Add the course
                              : formData.interested_courses.filter(
                                  (item) => item !== course
                                ), // Remove the course
                            "interested_courses"
                          )
                        }
                        className="form-checkbox w-5 h-5 accent-gradOne hover:accent-gradOne"
                      />
                      <span className="md:text-lg text-base text-black/65">
                        {course}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="lg:text-xl md:text-lg text-lg lg:max-w-2xl md:max-w-lg max-w-sm text-black ">
                  How many days per week are you{" "}
                  <span className="poppins-bold">planning</span> to take
                  classes?
                </h3>
                <div className="flex flex-col gap-3">
                  <Select
                    options={daysPerWeek}
                    value={daysPerWeek.find(
                      (option) => option.value === formData.days_per_week
                    )}
                    onChange={(option) =>
                      handleSingleSelectChange(option, "days_per_week")
                    }
                    placeholder="Days Per Week"
                    className="rounded-xl  placeholder:text-black/65"
                    styles={customStyles}
                  />
                </div>
              </div>
            </div>
            <div className="md:block hidden w-full">
              <img src={images.enroll3} alt="" />
            </div>
          </div>
          {/* Fourth section  */}
          <div className="flex justify-between items-center gap-16">
            <div className="md:block hidden w-full">
              <img src={images.enroll4} alt="" />
            </div>
            <div className="flex flex-col gap-8 w-full">
              <h3 className="lg:text-4xl md:text-3xl text-[24px] lg:max-w-2xl md:max-w-lg max-w-sm text-black ">
                Do You Have A Preference For The{" "}
                <span className="poppins-bold">Teacher’s Gender?</span>
              </h3>

              <div className="flex flex-col gap-6">
                {["Male", "Female", "No Preference"].map((gender) => (
                  <label key={gender} className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="teacher_gender"
                      value={gender}
                      checked={formData.teacher_gender === gender}
                      onChange={(e) => handleRadioChange(e, "teacher_gender")}
                      className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                    />
                    <span className="md:text-lg text-base text-black/65">
                      {gender === "no-preference"
                        ? "No Preference"
                        : gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          {/* Fifth section  */}
          <div className="flex justify-between items-center gap-16">
            <div className="flex flex-col gap-8 w-full">
              <h3 className="lg:text-4xl md:text-3xl text-[24px] lg:max-w-2xl md:max-w-lg max-w-sm text-black ">
                Preferred Language Of{" "}
                <span className="poppins-bold">Instruction</span>
              </h3>

              <div className="flex flex-col gap-6">
                {["Arabic", "English", "Urdu", "Other"].map((language) => (
                  <label key={language} className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="instruction_language"
                      value={language}
                      checked={formData.instruction_language === language}
                      onChange={(e) =>
                        handleRadioChange(e, "instruction_language")
                      }
                      className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                    />
                    <span className="md:text-lg text-base text-black/65">
                      {language.charAt(0).toUpperCase() + language.slice(1)}
                    </span>
                  </label>
                ))}
                {formData.instruction_language === "Other" && (
                  <input
                    type="text"
                    value={formData.other_language}
                    onChange={(e) => handleInputChange(e, "other_language")}
                    className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-60"
                    placeholder="Other"
                  />
                )}
              </div>
            </div>

            <div className="md:block hidden w-full">
              <img src={images.enroll5} alt="" />
            </div>
          </div>
          {/* Sixth section  */}
          <div className="flex justify-between items-center gap-16">
            <div className="md:block hidden w-full">
              <img src={images.enroll6} alt="" />
            </div>
            <div className="flex flex-col gap-8 w-full">
              <h3 className="lg:text-4xl md:text-3xl text-[24px] lg:max-w-2xl md:max-w-lg max-w-sm text-black ">
                Scheduling <span className="poppins-bold">Preferences</span>
              </h3>

              <div className="flex flex-col gap-6">
                <div>
                  <DatePicker
                    selected={formData.trial_lesson_slot.date}
                    onChange={handleDateChange}
                    minDate={new Date()} // Disable past dates
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date for demo"
                    className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 text-black/65 w-full cursor-pointer"
                    onKeyDown={(e) => e.preventDefault()} // Prevent typing
                  />
                </div>

                {formData.trial_lesson_slot.date && (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 text-start text-black/65 w-full"
                  >
                    {formData.trial_lesson_slot.time || "Select a Time Slot"}
                  </button>
                )}

                {isModalOpen && (
                  <Dialog
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
                      <DialogTitle className="text-lg font-bold mb-4">
                        Select a Time Slot
                      </DialogTitle>
                      <div className="max-h-[400px] overflow-y-auto flex flex-col gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className="py-2 px-4 rounded-lg text-black/80 hover:bg-gradOne hover:text-white transition"
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-gradTwo to-gradThree text-white rounded-lg hover:bg-red-600 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog>
                )}
                <Select
                  options={countries}
                  value={
                    countries.find(
                      (option) =>
                        option.value === formData.country.value &&
                        option.label === formData.country.name
                    ) || ""
                  }
                  onChange={(selectedOption) =>
                    handleSelectorChange("country", selectedOption)
                  }
                  placeholder="Please Select Your Country"
                  className="rounded-xl  placeholder:text-black/65"
                  styles={customStyles}
                />
                <Select
                  options={timezones}
                  value={
                    timezones.find(
                      (option) =>
                        option.value === formData.time_zone.value &&
                        option.label === formData.time_zone.name
                    ) || ""
                  }
                  onChange={(selectedOption) =>
                    handleSelectorChange("time_zone", selectedOption)
                  }
                  placeholder="Please Select Your Timezone"
                  className="rounded-xl  placeholder:text-black/65"
                  styles={customStyles}
                  isDisabled={!formData.country}
                />
              </div>
            </div>
          </div>
          {/* Seventh section  */}
          <div className="flex justify-between items-center gap-16">
            <div className="flex flex-col gap-8 w-full">
              <h3 className="lg:text-4xl md:text-3xl text-[24px] lg:max-w-2xl md:max-w-lg max-w-sm text-black ">
                Additional <span className="poppins-bold">Details</span>
              </h3>

              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  value={formData.learning_goals}
                  onChange={(e) => handleInputChange(e, "learning_goals")}
                  className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-full"
                  placeholder="What are your primary learning goals or expectations?"
                />
                <input
                  type="text"
                  value={formData.specific_needs}
                  onChange={(e) => handleInputChange(e, "specific_needs")}
                  className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 "
                  placeholder="Do you have any specific learning needs or requirements?"
                />
              </div>
            </div>
            <div className="md:block hidden w-full">
              <img src={images.enroll7} alt="" />
            </div>
          </div>

          <div className="mt-6 mx-auto">
            <button
              type="submit"
              className="bg-gradOne text-white py-3 px-6 rounded-xl hover:bg-opacity-90 transition"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Enrollment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
