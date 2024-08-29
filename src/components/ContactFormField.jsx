import React from "react";

const ContactFormField = ({ label, type, value, onChange, name }) => {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
        {label}
      </span>
    </div>
  );
};

export default ContactFormField;
