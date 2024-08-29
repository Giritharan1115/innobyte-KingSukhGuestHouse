import React from "react";
import RoomCard from "./RoomCard";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaPaintBrush,
  FaShieldAlt,
  FaWifi,
  FaTv,
} from "react-icons/fa";
import room1 from "../assets/small.jpg";
import room2 from "../assets/large.jpg";

const Rooms = () => {
  const icons = [
    { element: <FaHeart />, color: "text-red-500" },
    { element: <FaPaintBrush />, color: "text-blue-500" },
    { element: <FaShieldAlt />, color: "text-green-500" },
    { element: <FaWifi />, color: "text-yellow-500" },
    { element: <FaTv />, color: "text-purple-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-10 px-5 bg-gray-200 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.8 }}
      variants={containerVariants}
    >
      <motion.p
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        variants={cardVariants}
      >
        OUR LIVING ROOMS!
      </motion.p>
      <motion.h2
        className="text-gray-600 mb-4 font-bold md:text-3xl"
        variants={cardVariants}
      >
        The Most Memorable Rest Time Starts Here!
      </motion.h2>
      <motion.div
        className="flex justify-center space-x-8"
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <RoomCard
            imageSrc={room1}
            roomTitle="Cozy Haven Room"
            roomDescription="Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation..!"
            price="Rs. 1000/night"
            icons={icons}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <RoomCard
            imageSrc={room2}
            roomTitle="Spacious Serenity Suite"
            roomDescription="Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance..!"
            price="Rs. 1500/night"
            icons={icons}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Rooms;
