'use client'; // Ensure this component runs on the client side 
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // For heart icon
import Image from 'next/image';
import "../globals.css";

// Define the car type
type Car = {
  name: string;
  type: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  fuel: string;
  transmission: string;
  capacity: string;
  favorite: boolean;
};

// Array of car objects
const cars: Car[] = [
  { name: 'Koenigsegg', type: 'Sport', price: 99, oldPrice: null, image: '/c1.png', fuel: '90L', transmission: 'Manual', capacity: '2 People', favorite: false },
  { name: 'Nissan GT - R', type: 'Sport', price: 80, oldPrice: 100, image: '/c2.png', fuel: '80L', transmission: 'Manual', capacity: '2 People', favorite: false },
  { name: 'Rolls-Royce', type: 'Sport', price: 96, oldPrice: null, image: '/c3.png', fuel: '70L', transmission: 'Manual', capacity: '4 People', favorite: false },
  { name: 'All New Rush', type: 'SUV', price: 72, oldPrice: 80, image: '/c4.png', fuel: '70L', transmission: 'Manual', capacity: '6 People', favorite: false },
  { name: 'CR - V', type: 'SUV', price: 80, oldPrice: null, image: '/c5.png', fuel: '80L', transmission: 'Manual', capacity: '6 People', favorite: true },
  { name: 'All New Terios', type: 'SUV', price: 74, oldPrice: null, image: '/c6.png', fuel: '60L', transmission: 'Manual', capacity: '4 People', favorite: false },
];

const CarRental = () => {
  const [carsState, setCars] = useState(cars);

  const handleFavoriteToggle = (index: number) => {
    const updatedCars = [...carsState];
    updatedCars[index].favorite = !updatedCars[index].favorite;
    setCars(updatedCars);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Type</h2>
            <ul className="mb-6">
              {['Sport (10)', 'SUV (12)', 'MPV (16)', 'Sedan (20)', 'Coupe (14)', 'Hatchback (14)'].map((type, index) => (
                <li key={index} className="mb-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-gray-700">{type}</span>
                  </label>
                </li>
              ))}
            </ul>
            <h2 className="text-lg font-semibold mb-4">Capacity</h2>
            <ul className="mb-6">
              {['2 Person (10)', '4 Person (14)', '6 Person (12)', '8 or More (16)'].map((capacity, index) => (
                <li key={index} className="mb-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-gray-700">{capacity}</span>
                  </label>
                </li>
              ))}
            </ul>
            <h2 className="text-lg font-semibold mb-4">Price</h2>
            <div className="mb-6">
              <input type="range" min="0" max="100" className="w-full" />
              <div className="text-gray-700 mt-2">Max. $100.00</div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex flex-col w-full lg:w-3/4">
            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-top mb-6">
              <div
                className="p-6 rounded-lg shadow-lg h-[350px]"
                style={{
                  backgroundImage: "url('/img2.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h2 className="text-4xl font-bold text-white mb-4">Sports car with the best design and acceleration</h2>
                <p className="text-white mb-6">Safety and comfort while driving a futuristic and elegant sports car.</p>
                <Image
                  src="/aa.png"
                  alt="Car"
                  width={340}
                  height={108}
                  className="mt-4 ml-40 object-cover"
                />
              </div>

              {/* Nissan GT-R Section */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">Nissan GT – R</h2>
                <p className="text-gray-500 mt-4">
                  NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4 text-gray-500">
                  <div>
                    <span>Type</span>
                    <p className="font-semibold text-gray-900">Car</p>
                  </div>
                  <div>
                    <span>Sport</span>
                  </div>
                  <div>
                    <span>Capacity</span>
                    <p className="font-semibold text-gray-900">2 Person</p>
                  </div>
                  <div>
                    <span>Steering</span>
                    <p className="font-semibold text-gray-900">Manual</p>
                  </div>
                  <div>
                    <span>Gasoline</span>
                    <p className="font-semibold text-gray-900">70L</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">$80.00</span>
                    <span className="text-gray-500">/ days</span>
                    <p className="text-gray-400 line-through">$100.00</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Rent Now</button>
                </div>
              </div>
            </div>

            {/* Cars Gallery Section */}
            
            <div className="grid grid-cols-3 gap-1 mb-6 mr-[600px] mt-[-150px]">
              <Image src="/d2.png" alt="Silver sports car" width={156} height={100} className="rounded-lg" />
              <Image src="/d3.png" alt="Car interior dashboard" width={156} height={100} className="rounded-lg" />
              <Image src="/d4.png" alt="Car interior seats" width={156} height={100} className="rounded-lg" />
            </div>

            {/* Reviews Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Alex Stanton</h3>
                  <p className="text-gray-500">CEO at Bukalapak</p>
                  <p className="mt-2 text-gray-600">
                    We are very happy with the service from the MORENT App. Morent has a low price and a large variety of cars with good and comfortable facilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Skylar Dias</h3>
                  <p className="text-gray-500">CEO at Amazon</p>
                  <p className="mt-2 text-gray-600">
                    We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Cars Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {carsState.map((car, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="relative">
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-60 object-cover"
                    />
                    <button
                      className={`absolute top-2 right-2 text-2xl ${car.favorite ? 'text-red-500' : 'text-gray-400'}`}
                      onClick={() => handleFavoriteToggle(index)}
                    >
                      {car.favorite ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{car.name}</h3>
                  <p className="text-gray-600">{car.type}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <span className="text-lg font-bold">${car.price}</span>
                      {car.oldPrice && <span className="text-gray-500 line-through ml-2">${car.oldPrice}</span>}
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Rent Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;
