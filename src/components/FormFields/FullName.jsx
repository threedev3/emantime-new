import React from "react";

const FullName = () => {
  return (
    <input
      type="text"
      placeholder="Full Name"
      className={clsx(
        "block w-full py-4 pl-[60px] pr-3 rounded-lg border border-black/20 placeholder:text-black/65 bg-inputBg",
        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
      )}
      value={full_name}
      onChange={(e) => setFullName(e.target.value)}
    />
  );
};

export default FullName;
