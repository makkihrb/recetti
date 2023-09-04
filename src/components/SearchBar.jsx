import React from "react";

const Searchbar = ({
  type,
  placeholder,
  required = false,
  value,
  name,
  handleInputChange,
  rightIcon,
}) => {
  return (
    <div className="relative">
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required={required}
        className={`bg-white border border-gray-300 placeholder-gray-500 text-gray-700 rounded-full focus:ring-2 focus:ring-red-500 focus:border-blue-500 block w-full py-2 px-4 outline-none transition duration-300 ease-in-out`}
      />
      {rightIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
