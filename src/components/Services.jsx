import React from "react";
import {
  MdSecurity,
  MdRoomService,
  MdRestaurant,
  MdDirections,
} from "react-icons/md";
import ServiceImg from "../assets/service.jpg";
import { motion } from "framer-motion";

const ServiceItem = ({ Icon, text, index }) => (
  <motion.li
    className={`flex items-center space-x-4`}
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
    viewport={{ once: false, amount: 0.8 }} 
  >
    <Icon className="text-2xl text-gray-600" />
    <span className="text-lg text-gray-700">{text}</span>
  </motion.li>
);

const Services = () => {
  const services = [
    { Icon: MdSecurity, text: "High Class Security" },
    { Icon: MdRoomService, text: "24/7 Room Service" },
    { Icon: MdRestaurant, text: "Restaurant" },
    { Icon: MdDirections, text: "Tourist Guide Support" },
  ];

  return (
    <section className="py-12 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            OUR SERVICES!
          </p>
          <h2 className="text-gray-600 mb-4 md:text-3xl font-bold">
            Strive Only For The Best
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-center">
          <ul className="space-y-6 ml-36">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                Icon={service.Icon}
                text={service.text}
                index={index}
              />
            ))}
          </ul>
          <div className="flex justify-center md:justify-end">
            <img
              src={ServiceImg}
              alt="Service"
              className="rounded-lg shadow-lg mr-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
