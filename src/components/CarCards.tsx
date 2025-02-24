"use client"; // Make this a Client Component

import React from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../app/globals.css";

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
    <div className="p-0">
      {/* White Card Container */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md h-auto sm:h-[380px] max-w-[350px] sm:max-w-[400px] md:max-w-[450px] flex flex-col justify-between">
        {/* Header: Car Name and Favorite Icon */}
        <div className="flex items-center mb-4">
          <h3 className="text-md sm:text-lg font-semibold">{car.name}</h3>
          <button
            onClick={() => handleFavoriteToggle(index)}
            className="ml-auto text-red-500 focus:outline-none"
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>

        {/* Car Type */}
        <p className="text-gray-500 text-sm mb-2">{car.type}</p>

        {/* Car Image */}
        <Image
          src={car.image}
          alt={`${car.name}`}
          width={280}
          height={150}
          className="object-cover rounded-md mb-4 mx-auto"
        />

        {/* Car Details */}
        <div className="text-gray-500 text-sm mb-4 text-center">
          <span>{car.fuelCapacity}</span> | <span>{car.transmission}</span> | <span>{car.capacity}</span>
        </div>

        {/* Price and Rent Button */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">${car.price}.00 / day</p>
          <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;