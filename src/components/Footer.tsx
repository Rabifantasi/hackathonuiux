"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "../app/globals.css";

const Footer: React.FC = () => {
  const pathname = usePathname();

  // Define the route where the footer should not appear
  const hideFooterOnRoutes = ["/last-page"];

  // Check if the current route matches any route in the list
  if (hideFooterOnRoutes.includes(pathname)) {
    return null; // Do not render footer on these routes
  }

  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <footer className="bg-white border-t border-gray-200">
        <div className="px-8 py-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 mt-[-50px]">
              <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
              <p className="text-sm text-gray-600 mt-2">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
            <div className="lg:col-span-3 lg:flex lg:justify-end space-x-8 ml-[500px] mt-[-80px] mb-[20px]">
              {/* About Section */}
              <div className="w-full sm:w-1/2 md:w-1/3 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">About</h2>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Featured
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Partnership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Business Relation
                    </a>
                  </li>
                </ul>
              </div>
              {/* Community Section */}
              <div className="w-full sm:w-1/2 md:w-1/3 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Community</h2>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Invite a friend
                    </a>
                  </li>
                </ul>
              </div>
              {/* Socials Section */}
              <div className="w-full sm:w-1/2 md:w-1/3 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Socials</h2>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600">© 2022 MORENT. All rights reserved</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                Privacy & Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
