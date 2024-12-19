import React from "react";

const PromoCode = ({ className, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Promo Code"
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default PromoCode;
