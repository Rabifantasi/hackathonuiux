'use client'; // Ensure this component runs on the client side
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';  // For heart icon
import Image from 'next/image';

// Define the car type
type Car = {
  name: string;
  type: string;
  price: number;
  oldPrice?: number | null;
  image: string; // Image field for car images
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
      <div className="flex flex-col lg:flex-row">
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
        
        <div className="flex flex-col w-full lg:w-3/4 gap-6">
          <div className="max-w-5xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2">
              <div className="flex mt-6">
  {/* Sports car with the best design section */}
  <div className="bg-blue-600 p-6 rounded-lg w-1/2">
    <h2 className="text-white text-4xl font-semibold">
      Sports car with the best design and acceleration
    </h2>
    <p className="text-white mt-2">
      Safety and comfort while driving a futuristic and elegant sports car.
    </p>
    <Image
  src="/d1.png"
  alt="Silver sports car"
  width={500} // Specify the width (adjust as needed)
  height={300} // Specify the height (adjust as needed)
  className="mt-4 rounded-lg"
/>
  </div>

  {/* Nissan GT-R Section */}
  <div className="bg-white p-4 rounded-lg shadow-md w-1/2 ml-6">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-2xl font-semibold">Nissan GT - R</h2>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            <i className="fas fa-star"></i>
          </span>
          <span className="text-yellow-500">
            <i className="fas fa-star"></i>
          </span>
          <span className="text-yellow-500">
            <i className="fas fa-star"></i>
          </span>
          <span className="text-yellow-500">
            <i className="fas fa-star"></i>
          </span>
          <span className="text-gray-300">
            <i className="fas fa-star"></i>
          </span>
          <span className="text-gray-500 ml-2">Reviewer</span>
        </div>
        <p className="mt-4 text-gray-600">
          NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.
        </p>
        <div className="mt-4">
          <div className="flex justify-between text-gray-600">
            <span>Type Car</span>
            <span>Sport</span>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <span>Steering</span>
            <span>Manual</span>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <span>Capacity</span>
            <span>2 Person</span>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <span>Gasoline</span>
            <span>70L</span>
          </div>
        </div>
      </div>
      <div>
        <i className="fas fa-heart text-red-500"></i>
      </div>
    </div>
    <div className="mt-4">
      <span className="text-2xl font-semibold">$80.00</span>
      <span className="text-gray-400 line-through ml-2">$100.00</span>
      <span className="text-gray-500">/ day</span>
    </div>
    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
      Rent Now
    </button>
  </div>
</div>
     
            
                <div className="flex mt-4 space-x-4">
                <Image
  src="/d2.png"
  alt="Silver sports car"
  width={156}
  height={14}
  className="border-4 border-blue-500 rounded-lg"
/>

<Image
  src="/d3.png"
  alt="Car interior dashboard"
  width={156}
  height={14}
  className="rounded-lg"
/>

<Image
  src="/d4.png"
  alt="Car interior seats"
  width={156}
  height={14}
  className="rounded-lg"
/>
                </div>
              </div>
            </div>
            

            {/* Reviews Section */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Reviews</h2>
                <span className="bg-blue-500 text-white py-1 px-3 rounded-full">13</span>
              </div>
              <div className="mt-4">
                <div className="flex items-start space-x-4">
                
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">Alex Stanton</h3>
                        <span className="text-gray-500">CEO at Bukalapak</span>
                      </div>
                      <span className="text-gray-500">21 July 2022</span>
                    </div>
                    <p className="mt-2 text-gray-600">
                      We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
                    </p>
                    <div className="flex mt-2">
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-gray-300">
                        <i className="fas fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mt-4">
                  
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">Skylar Dias</h3>
                        <span className="text-gray-500">CEO at Amazon</span>
                      </div>
                      <span className="text-gray-500">20 July 2022</span>
                    </div>
                    <p className="mt-2 text-gray-600">
                      We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
                    </p>
                    <div className="flex mt-2">
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-gray-300">
                        <i className="fas fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Main Car Section Below Reviews */}
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
  width={500}
  height={500}
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