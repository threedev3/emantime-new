import React from "react";

const Email = ({ className, value, onChange }) => {
  return (
    <input
      type="text"
      className={className}
      placeholder="Email"
      value={value}
      onChange={onChange}
    />
  );
};

export default Email;
