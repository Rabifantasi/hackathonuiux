"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "../app/globals.css";

const Footer: React.FC = () => {
  const pathname = usePathname();

  const hideFooterOnRoutes = ["/last-page"];

  if (hideFooterOnRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <footer className="bg-white border-t border-gray-200">
        <div className="px-4 sm:px-8 py-16 sm:py-20">
          {/* Footer Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Branding Section */}
            <div className="lg:col-span-1">
              <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
              <p className="text-sm text-gray-600 mt-2">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
            {/* Footer Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">About</h2>
                <ul className="space-y-2">
                  {["How it works", "Featured", "Partnership", "Business Relation"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Community Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Community</h2>
                <ul className="space-y-2">
                  {["Events", "Blog", "Podcast", "Invite a friend"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Socials Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Socials</h2>
                <ul className="space-y-2">
                  {["Discord", "Instagram", "Twitter", "Facebook"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600">© 2022 MORENT. All rights reserved.</p>
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
