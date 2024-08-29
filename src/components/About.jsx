import React from "react";
import OutImage from "../assets/out.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-gray-300 py-10 md:py-20 scroll-smooth">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <motion.div
          className="flex-1 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.8 }}
        >
          <img
            src={OutImage}
            alt="Kingsukh Guesthouse"
            className="w-[65%] md:w-[70%] h-auto rounded-lg shadow-lg ml-20"
          />
        </motion.div>
        <motion.div
          className="flex-1 text-center md:text-left md:mr-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.8 }}
        >
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ABOUT US!
          </p>
          <h2 className="text-gray-600 mb-4 font-bold md:text-3xl">
            The Best Holidays Start Here!
          </h2>
          <p className="text-gray-700 mb-6">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            <a
              href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA"
              className="text-blue-500 hover:text-blue-800 transition duration-300"
            >
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </a>
          </h4>
          <h4 className="text-xl font-semibold text-gray-800 mb-6">
            <a
              href="tel:+919007062180"
              className="text-blue-500 hover:text-blue-800 transition duration-300"
            >
              Contact us: +91 9007062180
            </a>
          </h4>
          <div>
            <button
              href="#"
              className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-500 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
