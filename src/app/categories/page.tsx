'use client'; // Ensure this component runs on the client side
import Image from 'next/image';  // Keep the Next.js Image component for optimized image loading
import { useState } from 'react';  // React hook for state management
import { FaHeart, FaRegHeart } from 'react-icons/fa';  // Use react-icons for heart icon
import { LuArrowDownUp } from 'react-icons/lu';  // Arrow icon from react-icons
import "../globals.css";

// Define the car type
type Car = {
  name: string;
  type: string;
  price: number;
  oldPrice?: number | null;
  image: string; // Change from img to image
  fuel: string;
  transmission: string;
  capacity: string;
  favorite: boolean;
};

// Array of car objects with `image` field instead of `img`
const cars: Car[] = [
  { name: 'Koenigsegg', type: 'Sport', price: 99, oldPrice: null, image: '/c1.png', fuel: '90L', transmission: 'Manual', capacity: '2 People', favorite: false },
  { name: 'Nissan GT - R', type: 'Sport', price: 80, oldPrice: 100, image: '/c2.png', fuel: '80L', transmission: 'Manual', capacity: '2 People', favorite: false },
  { name: 'Rolls-Royce', type: 'Sport', price: 96, oldPrice: null, image: '/c3.png', fuel: '70L', transmission: 'Manual', capacity: '4 People', favorite: false },
  { name: 'All New Rush', type: 'SUV', price: 72, oldPrice: 80, image: '/c4.png', fuel: '70L', transmission: 'Manual', capacity: '6 People', favorite: false },
  { name: 'CR - V', type: 'SUV', price: 80, oldPrice: null, image: '/c5.png', fuel: '80L', transmission: 'Manual', capacity: '6 People', favorite: true },
  { name: 'All New Terios', type: 'SUV', price: 74, oldPrice: null, image: '/c6.png', fuel: '60L', transmission: 'Manual', capacity: '4 People', favorite: false },
  { name: 'MGZX Exclucise', type: 'Hatchback', price: 76, oldPrice: 80, image: '/c7.png', fuel: '70L', transmission: 'Electric', capacity: '4 People', favorite: false },
  { name: 'New MGZS', type: 'SUV', price: 80, oldPrice: null, image: '/c8.png', fuel: '80L', transmission: 'Manual', capacity: '6 People', favorite: false },
  { name: 'MGZX Excite', type: 'Hatchback', price: 74, oldPrice: null, image: '/c9.png', fuel: '80L', transmission: 'Electric', capacity: '4 People', favorite: false }
];

const CarRental = () => {
  const [carsState, setCars] = useState(cars);  // Use useState to manage the cars and their favorite status

  // Function to handle toggling the favorite status of a car
  const handleFavoriteToggle = (index: number) => {
    const updatedCars = [...carsState];
    updatedCars[index].favorite = !updatedCars[index].favorite;
    setCars(updatedCars); // Update the state with the new favorite status
  };

  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="flex flex-col lg:flex-row gap-6"> {/* Added gap between sidebar and content */}
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

          {/* Pick-Up and Drop-Off Section in White Box */}
          <div className="flex flex-col w-full lg:w-3/4 gap-6">
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Pick-Up Section */}
      <div className="flex-1">
        <h3 className="text-lg font-medium mb-2">Pick-Up</h3> 
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="block bg-white">
            <label className="block text-sm mb-1"><b>Locations </b></label>
            <select className="w-full border rounded-md p-2 text-xs"> {/* Applying text-xs to make the text small */}
              <option>Select your city</option>
            </select>
          </div>
          <div className="block bg-white">
            <label className="block text-sm mb-1"><b>Date </b></label>
            <input type="date" className="w-full border rounded-md p-2 text-xs" /> {/* Applying text-xs here */}
          </div>
          <div className="block bg-white">
            <label className="block text-sm mb-1"><b>Time </b></label>
            <input type="time" className="w-full border rounded-md p-2 text-xs" /> {/* Applying text-xs here */}
          </div>
        </div>
      </div>

                {/* Arrow Button */}
                <div className="flex justify-center items-center">
                  <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
                    <LuArrowDownUp size={24} />
                  </button>
                </div>

                {/* Drop-Off Section */}
                <div className="flex-1">
  <h3 className="text-lg font-medium mb-2">Drop-Off</h3>  {/* Changed font-medium for better visibility */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="block bg-white">
      <label className="block text-sm mb-1">Locations</label>
      <select className="w-full border rounded-md p-2 text-xs">  {/* Apply text-xs to make the font small */}
        <option><b>Select your city </b></option>
      </select>
    </div>
    <div className="block bg-white">
      <label className="block text-sm mb-1"><b>Date </b></label>
      <input type="date" className="w-full border rounded-md p-2 text-xs" />  {/* Apply text-xs here */}
    </div>
    <div className="block bg-white">
      <label className="block text-sm mb-1"><b>Time </b></label>
      <input type="time" className="w-full border rounded-md p-2 text-xs" />  {/* Apply text-xs here */}
    </div>
  </div>
</div>
              </div>
            </div>

            {/* Main Content (Cars) */}
            <main className="w-full mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {carsState.map((car, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">{car.name}</h3>
                      <button onClick={() => handleFavoriteToggle(index)}>
                        {car.favorite ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <FaRegHeart className="text-gray-500" />
                        )}
                      </button>
                    </div>

                    <div className="text-gray-500 mb-2">{car.type}</div>
                    <Image
                      src={car.image}
                      alt={`${car.name} image`}
                      width={156}
                      height={44}
                      className="w-full h-auto object-cover mb-4 rounded-md"
                    />

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <i className="fas fa-gas-pump text-gray-500 mr-2"></i>
                        <span className="text-gray-700">{car.fuel}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-cogs text-gray-500 mr-2"></i>
                        <span className="text-gray-700">{car.transmission}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-user-friends text-gray-500 mr-2"></i>
                        <span className="text-gray-700">{car.capacity}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-semibold">
                          ${car.price}.00 <span className="text-gray-500 text-sm">/ day</span>
                        </div>
                        {car.oldPrice && (
                          <div className="text-gray-500 line-through">${car.oldPrice}.00</div>
                        )}
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Rent Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;