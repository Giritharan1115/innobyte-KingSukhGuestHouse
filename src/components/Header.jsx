import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Rooms from "./Rooms";
import Contact from "./Contact";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-20 flex items-center justify-between">
        <div className="flex items-center space-x-0">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold"><a href="#hero">King Sukh Guest House</a></span>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#hero" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-gray-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="#rooms" className="hover:text-gray-300">
              Rooms
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="pt-2">
        {" "}
        {/* Adjust padding for fixed navbar */}
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="rooms">
          <Rooms />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Header;
