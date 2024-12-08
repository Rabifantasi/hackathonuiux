import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200 shadow-md w-[1600px] h-[124px] pl-14 pr-20 ml-4 mr-4">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
        <div className="relative flex items-center pl-14">
          <input
            type="text"
            placeholder="Search something here"
            className="w-[492px] h-[44px] p-2 pl-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 text-blue-500">
            <FiSearch size={18} />
          </button>
        </div>
        <div className="container mx-auto flex justify-between items-center ml-30">
  <h1 className="text-2xl font-semibold"></h1>
  <ul className="flex flex-wrap gap-[24px]">
    <li className="font-poppins text-[16px] font-normal cursor-pointer hover:text-red-500">
      <Link href="/">Home</Link>
    </li>
    <li className="font-poppins text-[16px] font-normal cursor-pointer hover:text-red-500">
      <Link href="./categories">Categories</Link>
    </li>
    <li className="font-poppins text-[16px] font-normal cursor-pointer hover:text-red-500">
      <Link href="./details">Details</Link>
    </li>
    <li className="font-poppins text-[16px] font-normal cursor-pointer hover:text-red-500">
      <Link href="./payments">Payment</Link>
    </li>
    <li className="font-poppins text-[16px] font-normal cursor-pointer hover:text-red-500">
      <Link href="./dashboard">Dashboard</Link>
    </li>
  </ul>
</div>
      </div>
      <div className="flex items-center gap-4 pr-20">
        <AiOutlineHeart className="text-gray-600 cursor-pointer" size={24} />
        <div className="relative cursor-pointer">
          <AiOutlineBell className="text-gray-600" size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <button className="text-gray-600 cursor-pointer">
          <FiSettings size={24} />
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <Image
            src="/Image.png"
            width={44}
            height={44}
            alt="Profile Image"
            className="h-[44px] w-[44px] rounded-[22px] object-cover"
          />
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;

