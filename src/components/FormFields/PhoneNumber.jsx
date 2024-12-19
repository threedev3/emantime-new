import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumber = ({ defaultCountry, value, onChange, className }) => {
  return (
    <PhoneInput
      defaultCountry={defaultCountry}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default PhoneNumber;
