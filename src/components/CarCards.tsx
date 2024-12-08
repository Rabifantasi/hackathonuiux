"use client"; // Make this a Client Component

import React from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type CarCardProps = {
  car: {
    name: string;
    type: string;
    price: number;
    image: string;
    fuelCapacity: string;
    transmission: string;
    capacity: string;
    favoriteIcon: string;
  };
  index: number;
  handleFavoriteToggle: (index: number) => void;
};

const CarCard: React.FC<CarCardProps> = ({ car, index, handleFavoriteToggle }) => {
  const isFavorite = car.favoriteIcon === "heart.png";

  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        {/* Car name */}
        <h3 className="text-lg font-semibold">{car.name}</h3>
        {/* Heart icon on the right side of the name */}
        <button
          onClick={() => handleFavoriteToggle(index)}
          className="ml-auto text-red-500 focus:outline-none"
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <p className="text-gray-500 text-sm mb-2">{car.type}</p>

      <Image
        src={car.image}
        alt={`${car.name}`}
        width={300}  // Adjust the width to a smaller value
        height={150}  // Adjust the height to a smaller value
        className="object-cover rounded-md mb-4"
      />

      <div className="flex justify-between items-center mb-4">
        <div className=" text-gray-700 text-sm justify-between items-center ">
          <span>{car.fuelCapacity}</span> | <span>{car.transmission}</span> | <span>{car.capacity}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">${car.price}.00 / day</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default CarCard;