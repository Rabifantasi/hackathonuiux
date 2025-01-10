"use client";

import Image from "next/image";
import "../app/globals.css";
import React, { useState } from "react";
import CarCard from "./CarCards";
import { LuArrowDownUp } from "react-icons/lu";

type Car = {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  favoriteIcon: "heart.png" | "wheart.png";
};

type Main = {
  heroTitle1: string;
  heroDescription1: string;
  heroImage1background: string;
  heroImage1car: string;
  heroTitle2: string;
  heroDescription2: string;
  heroImage2background: string;
  heroImage2car: string;
  popularCars: Car[];
  recommendedCars: Car[];
};

const Hero = ({ data }: { data: Main }) => {
  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 mt-[20px] sm:mt-[10px]">
      <div className="bg-gray-1000 min-h-screen flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hero Card 1 */}
            <div
              className="bg-blue-400 p-6 rounded-lg shadow-md"
              style={{
                backgroundImage: "url('/img1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-3xl w-full font-bold text-[#FFFFFF] mb-2">
                {data.heroTitle1}
              </h2>
              <p className="text-white mb-6 w-full">{data.heroDescription1}</p>
              <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-base">
                Rental Car
              </button>
              <Image
                src={data.heroImage1car}
                alt="Car"
                width={340}
                height={108}
                className="mt-4 ml-0 md:ml-40 object-cover"
              />
            </div>

            {/* Hero Card 2 */}
            <div
              className="bg-blue-800 p-6 rounded-lg shadow-md"
              style={{
                backgroundImage: "url('/img2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-3xl font-bold text-[#FFFFFF] w-full mb-2">
                {data.heroTitle2}
              </h2>
              <p className="text-white mb-6 w-full">{data.heroDescription2}</p>
              <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Rental Car
              </button>
              <Image
                src={data.heroImage2car}
                alt="Car"
                width={340}
                height={108}
                className="mt-4 ml-0 md:ml-40 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
  <div className="flex-1">
    <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm mb-1">Location</label>
        <select className="w-full border rounded-md p-2"><option>Select your city</option></select>
      </div>
      <div>
        <label className="block text-sm mb-1">Date</label>
        <input type="date" className="w-full border rounded-md p-2" />
      </div>
      <div>
        <label className="block text-sm mb-1">Time</label>
        <input type="time" className="w-full border rounded-md p-2" />
      </div>
    </div>
  </div>
  <div>
    <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
      <LuArrowDownUp />
    </button>
  </div>
  <div className="flex-1">
    <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm mb-1">Location</label>
        <select className="w-full border rounded-md p-2"><option>Select your city</option></select>
      </div>
      <div>
        <label className="block text-sm mb-1">Date</label>
        <input type="date" className="w-full border rounded-md p-2" />
      </div>
      <div>
        <label className="block text-sm mb-1">Time</label>
        <input type="time" className="w-full border rounded-md p-2" />
      </div>
    </div>
  </div>
</div>

          
        </section>

        {/* Popular Car Section */}
        <PopularCarPage cars={data.popularCars} />

        {/* Recommended Car Section */}
        <RecommendedCarPage cars={data.recommendedCars} />
      </div>
    </div>

  );
};


export default Hero;



export const PopularCarPage: React.FC<{ cars: Car[] }> = ({ cars }) => {
  const [favoriteCars, setFavoriteCars] = useState(cars);

  const handleFavoriteToggle = (index: number) => {
    const updatedCars = [...favoriteCars];
    const isFavorite = updatedCars[index].favoriteIcon === "heart.png";
    updatedCars[index].favoriteIcon = isFavorite ? "wheart.png" : "heart.png";
    setFavoriteCars(updatedCars);
  };

  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 mt-12">
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-slate-400 text-left mb-8">
          Popular Cars
          <span className="flex justify-end text-blue-600 font-medium">
            View All
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteCars.map((car, index) => (
            <CarCard
              key={index}
              car={car}
              index={index}
              handleFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const RecommendedCarPage: React.FC<{ cars: Car[] }> = ({ cars }) => {
  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 mt-12">
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-slate-400 text-left mb-8">
          Recommended Cars
          <span className="flex justify-end text-blue-600 font-medium">
            View All
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard
              key={index}
              car={car}
              index={index}
              handleFavoriteToggle={() =>
                console.log("Favorite toggled", index)
              }
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md sm:px-6 sm:py-3 sm:text-base"
            aria-label="Show More"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};
