import React from "react";

const RoomCard = ({ imageSrc, roomTitle, roomDescription, price, icons }) => {
  return (
    <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden max-w-md">
      <div className="relative">
        <img
          src={imageSrc}
          alt={roomTitle}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          {icons.map((icon, index) => (
            <span
              key={index}
              className={`bg-gray-100 p-2 rounded-full shadow-md ${icon.color}`}
            >
              {icon.element}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5 text-left">
        <h4 className="text-xl font-semibold text-gray-800">{roomTitle}</h4>
        <p className="text-gray-600 mt-2 mb-4">{roomDescription}</p>
        <h5 className="text-lg font-semibold text-gray-700">
          Starting from <span className="text-gray-800">{price}</span>
        </h5>
        <button
          href="#"
          className="block mt-4 w-full bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-500 transition"
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
