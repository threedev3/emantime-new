import React from "react";

const FullName = ({className, value, onChange}) => {
  return (
    <input
      type="text"
      placeholder="Full Name"
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default FullName;
