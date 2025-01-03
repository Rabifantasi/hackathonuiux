'use client';

import React from 'react';
import Image from 'next/image';
import "../globals.css";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Billing Info */}
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Billing Info</h2>
              <span className="text-gray-500 text-sm">Step 1 of 4</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Please enter your billing info</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="border border-gray-300 p-3 rounded-lg w-full text-sm" />
              <input type="text" placeholder="Phone number" className="border border-gray-300 p-3 rounded-lg w-full text-sm" />
              <input type="text" placeholder="Address" className="border border-gray-300 p-3 rounded-lg w-full text-sm" />
              <input type="text" placeholder="Town or city" className="border border-gray-300 p-3 rounded-lg w-full text-sm" />
            </div>
          </div>

          {/* Rental Info */}
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Rental Info</h2>
              <span className="text-gray-500 text-sm">Step 2 of 4</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Please select your rental date</p>
            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="rentalType" className="form-radio" />
                  <span className="text-sm">Pick - Up</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <select className="border border-gray-300 p-3 rounded-lg w-full text-sm">
                    <option>Select your city</option>
                  </select>
                  <select className="border border-gray-300 p-3 rounded-lg w-full text-sm">
                    <option>Select your date</option>
                  </select>
                  <select className="border border-gray-300 p-3 rounded-lg w-full text-sm">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="rentalType" className="form-radio" />
                  <span className="text-sm">Drop - Off</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <select className="border border-gray-300 p-3 rounded-lg w-full text-sm">
                    <option>Select your city</option>
                  </select>
                  <select className="border border-gray-300 p-3 rounded-lg w-full text-sm">
                    <option>Select your date</option>
                  </select>
                  <select className="border border-gray-300 p-3 rounded-lg w-full text-sm">
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Payment Method</h2>
              <span className="text-gray-500 text-sm">Step 3 of 4</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Please enter your payment method</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="paymentMethod" className="form-radio" />
                  <span className="text-sm">Credit Card</span>
                </label>
                <div className="flex items-center space-x-2">
                  <i className="fab fa-cc-visa text-xl text-blue-600"></i>
                  <i className="fab fa-cc-mastercard text-xl text-red-600"></i>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="paymentMethod" className="form-radio" />
                  <span className="text-sm">PayPal</span>
                </label>
                <Image src="/PayPal.png" alt="PayPal" width={32} height={32} />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="paymentMethod" className="form-radio" />
                  <span className="text-sm">Bitcoin</span>
                </label>
                <Image src="/Bitcoin.png" alt="Bitcoin" width={32} height={32} />
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Confirmation</h2>
              <span className="text-gray-500 text-sm">Step 4 of 4</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">We are getting to the end. Just a few clicks, and your rental is ready!</p>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">I agree with sending Marketing and newsletter emails. No spam, promised!</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">I agree with our terms and conditions and privacy policy.</span>
              </label>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full text-sm">Rent Now</button>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <i className="fas fa-shield-alt text-xl text-blue-600"></i>
            <span className="text-gray-500 text-sm">All your data are safe</span>
          </div>
          <p className="text-gray-500 text-sm">We are using the most advanced security to provide you the best experience ever.</p>
        </div>

        {/* Right Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
          <p className="text-gray-500 text-sm mb-6">Prices may change depending on the length of the rental and the price of your rental car.</p>
          <div className="flex items-center mb-4">
            <Image src="/pp1.png" alt="Nissan GT - R" width={184} height={128} className="w-24 h-16 object-cover rounded-lg mr-4" />
            <div>
              <h3 className="text-sm font-semibold">Nissan GT - R</h3>
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star-half-alt text-yellow-500"></i>
                <span className="text-gray-500 text-xs ml-2">440+ Reviews</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Subtotal</span>
              <span className="font-semibold text-sm">$80.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Tax</span>
              <span className="font-semibold text-sm">$0</span>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <input type="text" placeholder="Apply promo code" className="border border-gray-300 p-3 rounded-lg w-full text-sm" />
              <button className="bg-blue-600 text-white px-4 py-3 rounded-lg text-sm">Apply now</button>
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-gray-500 text-sm">Total Rental Price</span>
              <span className="text-2xl font-semibold">$80.00</span>
            </div>
            <p className="text-gray-500 text-sm">Overall price and includes rental discount</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;