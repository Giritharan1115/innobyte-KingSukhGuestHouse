import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/baranti.webp";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Hero bg"
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      />
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5, initialInView: false }}
        >
          Welcome to King Sukh Guest House
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold my-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5, initialInView: false }}
        >
          Make Yourself at Home in Our Guest House
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5, initialInView: false }}
        >
          --Simple-Unique-Friendly--
        </motion.p>
        <motion.button
          className="mt-6 px-8 py-3 bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true, amount: 0.5, initialInView: false }}
        >
          BOOK NOW
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
