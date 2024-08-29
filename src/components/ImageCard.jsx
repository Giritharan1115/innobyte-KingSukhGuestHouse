import React from "react";

const ImageCard = ({ src, alt }) => (
  <div className="p-2">
    <img
      src={src}
      alt={alt}
      className="w-full h-auto object-cover rounded-lg shadow-md"
    />
  </div>
);

export default ImageCard;
