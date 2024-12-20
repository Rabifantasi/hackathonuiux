import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-md">
      <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-wrap justify-between items-center">
        {/* Logo and Search Bar */}
        <div className="flex items-center gap-6 w-full md:w-auto">
          <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full md:w-[492px] h-[44px] p-2 pl-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute top-1/2 transform -translate-y-1/2 right-3 text-blue-500">
              <FiSearch size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4 md:mt-0 w-full md:w-auto">
          <ul className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
            <li className="font-poppins text-base font-normal hover:text-red-500">
              <Link href="/">Home</Link>
            </li>
            <li className="font-poppins text-base font-normal hover:text-red-500">
              <Link href="/categories">Categories</Link>
            </li>
            <li className="font-poppins text-base font-normal hover:text-red-500">
              <Link href="/details">Details</Link>
            </li>
            <li className="font-poppins text-base font-normal hover:text-red-500">
              <Link href="/payments">Payment</Link>
            </li>
            <li className="font-poppins text-base font-normal hover:text-red-500">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* Icons and Profile */}
        <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          <AiOutlineHeart className="text-gray-600 cursor-pointer" size={24} />
          <div className="relative cursor-pointer">
            <AiOutlineBell className="text-gray-600" size={24} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          <button className="text-gray-600 cursor-pointer">
            <FiSettings size={24} />
          </button>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/Image.png"
              width={44}
              height={44}
              alt="Profile Image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;