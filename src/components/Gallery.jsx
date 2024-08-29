import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import oneImage from "../assets/1.jpg";
import outImage from "../assets/out.jpg";
import ayodhyaImage from "../assets/ayodhya.webp";
import largeImage from "../assets/large.jpg";
import palashImage from "../assets/palash.webp";
import smallImage from "../assets/small.jpg";
import barantiImage from "../assets/baranti.webp";
import recepImage from "../assets/recep.jpg";
import flowerImage from "../assets/flower.jpg";
import room1Image from "../assets/room1.jpg";
import mithonDamImage from "../assets/mithonDam.webp";
import serviceImage from "../assets/service.jpg";

const Gallery = () => {
  const images = [
    { src: oneImage, alt: "Image 1" },
    { src: outImage, alt: "Image 2" },
    { src: ayodhyaImage, alt: "Image 3" },
    { src: largeImage, alt: "Image 4" },
    { src: palashImage, alt: "Image 5" },
    { src: smallImage, alt: "Image 6" },
    { src: barantiImage, alt: "Image 7" },
    { src: recepImage, alt: "Image 8" },
    { src: flowerImage, alt: "Image 9" },
    { src: room1Image, alt: "Image 10" },
    { src: serviceImage, alt: "Image 11" },
    { src: mithonDamImage, alt: "Image 12" },
  ];

  // Define breakpoints for responsive masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 3,
    500: 1,
  };

  return (
    <section id="gallery" className="bg-gray-200 py-10 md:py-20">
      <div className="text-center mb-4">
        <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          GALLERY
        </p>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <ImageCard src={image.src} alt={image.alt} />
          </motion.div>
        ))}
      </Masonry>
    </section>
  );
};

export default Gallery;
