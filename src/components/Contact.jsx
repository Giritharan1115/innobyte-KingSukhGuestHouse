import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactItem from "./ContactItem";
import ContactFormField from "./ContactFormField";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      className="py-10 bg-gray-300 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4">
              CONTACT INFO!
            </h2>
            <ul className="space-y-4">
              <ContactItem icon={FaMapMarkerAlt}>
                <p className="text-gray-900">
                  Beside Barshal Water Tank, Manpur, Barhanti, <br />
                  West Bengal 723156
                </p>
              </ContactItem>
              <ContactItem icon={FaEnvelope}>
                <a
                  href="mailto:kkghosh0099@gmail.com"
                  className="text-gray-900 hover:underline"
                >
                  kkghosh0099@gmail.com
                </a>
              </ContactItem>
              <ContactItem icon={FaPhone}>
                <a
                  href="tel:+919007062180"
                  className="text-gray-900 hover:underline"
                >
                  +91 9007062180
                </a>
              </ContactItem>
            </ul>
            <ul className="flex space-x-4 mt-48">
              <li>
                <button href="#" className="text-blue-500 hover:text-blue-300">
                  <FaFacebookF className="text-2xl" />
                </button>
              </li>
              <li>
                <button href="#" className="text-pink-600 hover:text-pink-400">
                  <FaInstagram className="text-2xl" />
                </button>
              </li>
              <li>
                <button href="#" className="text-blue-400 hover:text-blue-200">
                  <FaTwitter className="text-2xl" />
                </button>
              </li>
              <li>
                <button href="#" className="text-blue-700 hover:text-blue-500">
                  <FaLinkedinIn className="text-2xl" />
                </button>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-4">
              SEND A MESSAGE
            </h2>
            <form>
              <ContactFormField
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <ContactFormField
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <ContactFormField
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <ContactFormField
                label="Mobile Number"
                type="number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              <div className="relative mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                  Write your message here...
                </span>
              </div>
              <input
                type="submit"
                value="Send"
                className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-500 transition"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
