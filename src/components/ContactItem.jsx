import React from "react";

const ContactItem = ({ icon: Icon, children }) => {
  return (
    <li className="flex items-center space-x-2">
      <Icon className="text-gray-500" />
      {children}
    </li>
  );
};

export default ContactItem;
