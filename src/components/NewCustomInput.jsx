import React from "react";

const NewCustomInput = ({ label, type, placeholder, required }) => {
  return (
    <div className="mb-4">
      <label htmlFor="" className="block text-gray-700">
        {label}
      </label>
      <input
        type={type}
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default NewCustomInput;
