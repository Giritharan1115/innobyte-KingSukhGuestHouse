import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white">
      {children}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <a href="#home" className="text-xl font-bold">
            Kingsukh Guest House
          </a>
          <p className="mt-4 text-gray-400">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button
            href="#"
            className="inline-block mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-900"
          >
            BOOK NOW
          </button>
        </div>

        <div>
          <h4 className="text-lg font-semibold">QUICK LINKS</h4>
          <ul className="mt-4 space-y-2">
            <FooterLink href="#">Browse Destinations</FooterLink>
            <FooterLink href="#">Special Offers & Packages</FooterLink>
            <FooterLink href="#">Room Types & Amenities</FooterLink>
            <FooterLink href="#">Customer Reviews & Ratings</FooterLink>
            <FooterLink href="#">Travel Tips & Guides</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">OUR SERVICES</h4>
          <ul className="mt-4 space-y-2">
            <FooterLink href="#">Concierge Assistance</FooterLink>
            <FooterLink href="#">Flexible Booking Options</FooterLink>
            <FooterLink href="#">Airport Transfers</FooterLink>
            <FooterLink href="#">Wellness & Recreation</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">CONTACT US</h4>
          <ul className="mt-4 space-y-2">
            <FooterLink href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </FooterLink>
            <FooterLink href="mailto:kkghosh0099@gmail.com">
              kkghosh0099@gmail.com
            </FooterLink>
            <FooterLink href="tel:+919007062180">+91 9007062180</FooterLink>
          </ul>
          <div className="flex space-x-4 mt-4">
            <button href="#" className="text-white hover:text-blue-500">
              <FaFacebookF className="h-6 w-6" />
            </button>
            <button href="#" className="text-white hover:text-pink-500">
              <FaInstagram className="h-6 w-6" />
            </button>
            <button href="#" className="text-white hover:text-red-500">
              <FaYoutube className="h-6 w-6" />
            </button>
            <button href="#" className="text-white hover:text-blue-400">
              <FaTwitter className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-4 mt-8">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
