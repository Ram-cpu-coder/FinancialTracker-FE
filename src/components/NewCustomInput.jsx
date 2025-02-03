import React from "react";

const NewCustomInput = ({ label, ...item }) => {
  return (
    <div className="mb-4">
      <label htmlFor="" className="block text-gray-700">
        {label}
      </label>
      <input
        className="w-full p-2 border border-gray-300 rounded-lg"
        {...item}
      />
    </div>
  );
};

export default NewCustomInput;
