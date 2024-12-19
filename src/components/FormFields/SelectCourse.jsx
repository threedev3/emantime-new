import React from 'react';
import Select from 'react-select';

const SelectCourse = ({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select Courses", 
  variant = 'default',
  className = '',
  isMulti = true,
  additionalStyles = {}
}) => {
  // Predefined style variants
  const styleVariants = {
    default: {
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
      variant1: {
        control: (base) => ({
          ...base,
          padding: "8px 16px",
          backgroundColor: "#d9d9d9",
          borderWidth: 1,
          borderColor: "rgb(0 0 0 / 0.2)",
          borderRadius: "8px",
          height: "58px",
          overflow: "auto",
        }),
      },
      variant2: {
        control: (base) => ({
          ...base,
          padding: "4px 16px",
          backgroundColor: "#d9d9d9",
          borderWidth: 0,
          borderColor: "rgb(0 0 0 / 0.2)",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
          height: "50px",
          overflow: "auto",
        }),
      }
    }
  };

  // Merge variant-specific styles with additional styles
  const mergedStyles = {
    control: styleVariants.default[variant]?.control || styleVariants.default.control,
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
      ...additionalStyles.menu,
    }),
    ...additionalStyles
  };

  return (
    <Select
      options={options}
      isMulti={isMulti}
      placeholder={placeholder}
      className={`rounded-xl placeholder:text-black/65 ${className}`}
      styles={mergedStyles}
      value={value}
      onChange={onChange}
    />
  );
};

export default SelectCourse;