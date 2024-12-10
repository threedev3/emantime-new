import React, { useEffect, useState } from "react";
import images from "../../assets/img/images";
import Select from "react-select";
import { Country } from "country-state-city";
import TimePicker from "../TimePIcker/TimePicker";
import { Dialog, DialogTitle } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EnrollmentForm = () => {
  const [timezones, setTimezones] = useState([]);

  const [formData, setFormData] = useState({
    // Enrollment Details
    enrollment_type: "", // Multi-select
    number_of_students: 1,
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
    country: "",
    time_zone: null,
    instruction_language: "",
    other_language: "",
    learning_goals: "",
    specific_needs: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  //   const [trialLessonSlot, setTrialLessonSlot] = useState({
  //     date: "",
  //     time: "",
  //   });

  //   useEffect(() => {
  //     console.log("Trial Lesson Slot", trialLessonSlot);
  //   }, [trialLessonSlot]);

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

  const timeSlots = generateTimeSlots();

  const handleDateChange = (date) => {
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

  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

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

  // Handler functions to update form state
  const handleEnrollmentTypeChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      enrollment_type: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleNumberOfStudentsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      number_of_students: parseInt(e.target.value) || 1,
    }));
  };

  const handleApplicantGenderChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      applicant_gender: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleStudentGenderChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      student_gender: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleLearningHistoryChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      learning_history: e.target.value,
    }));
  };

  const handleInterestedCoursesChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      interested_courses: selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [],
    }));
  };

  const handleDaysPerWeekChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      days_per_week: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleTeacherGenderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      teacher_gender: e.target.value,
    }));
  };

  //   const handleDateChange = (date) => {
  //     setFormData(prev => ({
  //       ...prev,
  //       trial_lesson_slot: {
  //         ...prev.trial_lesson_slot,
  //         date: date
  //       }
  //     }));
  //   };

  //   const handleTimeSelect = (time) => {
  //     setFormData(prev => ({
  //       ...prev,
  //       trial_lesson_slot: {
  //         ...prev.trial_lesson_slot,
  //         time: time
  //       }
  //     }));
  //     setIsModalOpen(false);
  //   };

  const handleCountryChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      country: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleTimeZoneChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      time_zone: selectedOptions
        ? {
            name: selectedOptions.label,
            value: selectedOptions.value,
          }
        : null,
    }));
  };

  const handleInstructionLanguageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      instruction_language: e.target.value,
    }));
  };

  const handleOtherLanguageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      other_language: e.target.value,
    }));
  };

  const handleLearningGoalsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      learning_goals: e.target.value,
    }));
  };

  const handleSpecificNeedsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      specific_needs: e.target.value,
    }));
  };

  // Submit handler (you'll implement API call here)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your API call to submit formData
    console.log("Form Data:", formData);
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
                  placeholder="Who are you enrolling for?"
                  className="rounded-xl  placeholder:text-black/65"
                  styles={customStyles}
                />
                <input
                  type="number"
                  className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 "
                  placeholder="How many students will be enrolling?"
                />

                <Select
                  options={genderOptions}
                  placeholder="Your Gender"
                  className="rounded-xl  placeholder:text-black/65"
                  styles={customStyles}
                />
                <Select
                  options={studentGenderOptions}
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
                <label className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="experience"
                    value="beginner"
                    className="form-radio w-5 h-5 accent-gradOne"
                  />
                  <span className="md:text-lg text-base text-black/65">
                    No, it’s my first time (Beginner)
                  </span>
                </label>
                <label className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="experience"
                    value="intermediate"
                    className="form-radio w-5 h-5 accent-gradOne"
                  />
                  <span className="md:text-lg text-base text-black/65">
                    Yes, at an intermediate level
                  </span>
                </label>
                <label className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="experience"
                    value="advanced"
                    className="form-radio w-5 h-5 accent-gradOne"
                  />
                  <span className="md:text-lg text-base text-black/65">
                    Yes, at an advanced level
                  </span>
                </label>
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
                  <label className="flex items-center space-x-6">
                    <input
                      type="checkbox"
                      name="tajweed"
                      value="tajweed"
                      className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                    />
                    <span className="md:text-lg text-base text-black/65">
                      Tajweed
                    </span>
                  </label>
                  <label className="flex items-center space-x-6">
                    <input
                      type="checkbox"
                      name="quran-reading"
                      value="quran-reading"
                      className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                    />
                    <span className="md:text-lg text-base text-black/65">
                      Quran Reading
                    </span>
                  </label>
                  <label className="flex items-center space-x-6">
                    <input
                      type="checkbox"
                      name="arabic-language"
                      value="arabic-language"
                      className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                    />
                    <span className="md:text-lg text-base text-black/65">
                      Arabic Language
                    </span>
                  </label>
                  <label className="flex items-center space-x-6">
                    <input
                      type="checkbox"
                      name="qaida"
                      value="qaida"
                      className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                    />
                    <span className="md:text-lg text-base text-black/65">
                      Basic Qaida
                    </span>
                  </label>
                  <label className="flex items-center space-x-6">
                    <input
                      type="checkbox"
                      name="islamic"
                      value="islamic"
                      className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                    />
                    <span className="md:text-lg text-base text-black/65">
                      Islamic Studies
                    </span>
                  </label>
                  <label className="flex items-center space-x-6">
                    <input
                      type="checkbox"
                      name="one-to-one-counseling"
                      value="one-to-one-counseling"
                      className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                    />
                    <span className="md:text-lg text-base text-black/65">
                      One-to-One Counseling
                    </span>
                  </label>
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
                <label className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                  />
                  <span className="md:text-lg text-base text-black/65">
                    Male
                  </span>
                </label>
                <label className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                  />
                  <span className="md:text-lg text-base text-black/65">
                    Female
                  </span>
                </label>
                <label className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="gender"
                    value="no-preference"
                    className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                  />
                  <span className="md:text-lg text-base text-black/65">
                    No Preference
                  </span>
                </label>
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
                <label className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="language"
                    value="arabic"
                    className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                  />
                  <span className="md:text-lg text-base text-black/65">
                    Arabic
                  </span>
                </label>
                <label className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="language"
                    value="english"
                    className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                  />
                  <span className="md:text-lg text-base text-black/65">
                    English
                  </span>
                </label>
                <label className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="language"
                    value="urdu"
                    className="form-radio w-5 h-5 accent-gradOne hover:accent-gradOne"
                  />
                  <span className="md:text-lg text-base text-black/65">
                    Urdu
                  </span>
                </label>
                <input
                  type="text"
                  className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-60"
                  placeholder="Other"
                />
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
                    placeholderText="Pick a date"
                    className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 text-black/65 w-full cursor-pointer"
                    onKeyDown={(e) => e.preventDefault()} // Prevent typing
                  />
                </div>

                <div>
                  <button
                    onClick={() =>
                      formData.trial_lesson_slot.date && setIsModalOpen(true)
                    }
                    className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 text-start text-black/65 w-full"
                  >
                    {formData.trial_lesson_slot.time || "Select a Time"}
                  </button>
                  {!formData.trial_lesson_slot.date && (
                    <span className="text-red-600 text-sm">
                      Please select a date first.
                    </span>
                  )}
                </div>

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
                  placeholder="Please Select Your Country"
                  className="rounded-xl  placeholder:text-black/65"
                  styles={customStyles}
                />
                <Select
                  //   options={genderOptions}
                  isMulti
                  placeholder="Please Select Your Timezone"
                  className="rounded-xl  placeholder:text-black/65"
                  styles={customStyles}
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
                  className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 w-full"
                  placeholder="What are your primary learning goals or expectations?"
                />
                <input
                  type="text"
                  className="bg-inputBg py-4 px-6 rounded-xl border border-black/20 placeholder:text-black/65 "
                  placeholder="Do you have any specific learning needs or requirements?"
                />
              </div>
            </div>
            <div className="md:block hidden w-full">
              <img src={images.enroll6} alt="" />
            </div>
          </div>

          <div className="mt-6 mx-auto">
            <button
              type="submit"
              className="bg-gradOne text-white py-3 px-6 rounded-xl hover:bg-opacity-90 transition"
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
