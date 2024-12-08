"use client"

import React, { useState } from "react";
import Image from "next/image";
import { LuArrowDownUp } from "react-icons/lu";
import CarCard from "./CarCards";

const Hero = () => {
  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-blue-400 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: "url('/Ellipse 40.png')", // Corrected syntax for inline style
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-3xl w-[272px] font-bold text-[#FFFFFF] mb-2">
              The Best Platform for Car Rental
            </h2>
            <p className="text-white mb-6 w-[284px]">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
              src="/1.png"
              alt="Car"
              width={340}
              height={108}
              className="mt-4 ml-40 object-cover"
            />
          </div>

          <div className="bg-blue-800 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-[#FFFFFF] w-[272px] mb-2">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-white mb-6 w-[284px]">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
              src="/2.png"
              alt="Car"
              width={340}
              height={108}
              className="mt-4 ml-40 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
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
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
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
    </div>
    </div>
  );
};

export default Hero;

export const PopularCarPage: React.FC = () => {
  const [cars, setCars] = useState([
    {
      name: "Koenigsegg",
      type: "Sports",
      image: "/p1.png",
      fuelCapacity: "90L",
      transmission: "Manual",
      capacity: "2 People",
      price: 99,
      favoriteIcon: "heart.png",
    },
    {
      name: "Nissan GT-R",
      type: "Sports",
      image: "/p2.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      favoriteIcon: "wheart.png",
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      image: "/p3.png",
      fuelCapacity: "70L",
      transmission: "Manual",
      capacity: "4 People",
      price: 96,
      favoriteIcon: "heart.png",
    },
    {
      name: "Nissan GT-R",
      type: "Sports",
      image: "/p4.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      favoriteIcon: "wheart.png",
    },
  ]);

  const handleFavoriteToggle = (index: number) => {
    const updatedCars = [...cars];
    const isFavorite = updatedCars[index].favoriteIcon === "heart.png";
    updatedCars[index].favoriteIcon = isFavorite ? "wheart.png" : "heart.png";
    setCars(updatedCars);
  };

  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold text-slate-400 mt-6 ml-4 text-left mb-8">
        Popular Car
        <span className="flex justify-end text-blue-600 font-medium">view all</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cars.map((car, index) => (
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

export const RecommendedCarPage: React.FC = () => {
  const cars = [
    {
      name: "All New Rush",
      type: "SUV",
      image: "/r1.png",
      fuelCapacity: "70L",
      transmission: "Manual",
      capacity: "6 People",
      price: 72,
      favoriteIcon: "wheart.png",
    },
    {
      name: "CR-V",
      type: "SUV",
      image: "/r2.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "6 People",
      price: 80,
      favoriteIcon: "heart.png",
    },
    {
      name: "All New Terios",
      type: "SUV",
      image: "/r3.png",
      fuelCapacity: "90L",
      transmission: "Manual",
      capacity: "6 People",
      price: 74,
      favoriteIcon: "wheart.png",
    },
    {
      name: "CR-V",
      type: "SUV",
      image: "/r4.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "6 People",
      price: 80,
      favoriteIcon: "heart.png",
    },
    {
      name: "MG ZX Exclusive",
      type: "Hatchback",
      image: "/r5.png",
      fuelCapacity: "70L",
      transmission: "Manual",
      capacity: "4 People",
      price: 76,
      favoriteIcon: "heart.png",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      image: "/r6.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "6 People",
      price: 80,
      favoriteIcon: "wheart.png",
    },
    {
      name: "MG ZX Exclusive",
      type: "Hatchback",
      image: "/r7.png",
      fuelCapacity: "90L",
      transmission: "Manual",
      capacity: "4 People",
      price: 74,
      favoriteIcon: "heart.png",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      image: "/r8.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "6 People",
      price: 80,
      favoriteIcon: "wheart.png",
    },
  ];

  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold text-slate-400 mt-6 ml-4 text-left mb-8">
        Recommended Car
        <span className="flex justify-end text-blue-600 font-medium">view all</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            car={car}
            index={index}
            handleFavoriteToggle={(index) => console.log("Favorite toggled", index)}
          />
        ))}
      </div>

      <Image
        src="/Show More.png"
        alt="Show More Button"
        width={156}
        height={44}
        className="mx-auto mt-6"
      />
    </div>
    </div>
  );
};