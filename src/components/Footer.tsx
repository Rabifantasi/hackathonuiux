"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { client } from "../sanity/lib/client";
import "../app/globals.css";

interface FooterData {
  branding: {
    brandName: string;
    brandDescription: string;
  };
  sections: {
    title: string;
    links: { label: string; url: string }[];
  }[];
  footerBottom: {
    copyrightText: string;
    bottomLinks: { label: string; url: string }[];
  };
  hideFooterRoutes: string[];
}

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await client.fetch(`*[_type == "footer"][0]`);
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  if (!footerData) return null;

  if (footerData.hideFooterRoutes?.includes(pathname)) {
    return null;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <footer className="bg-white border-t border-gray-200">
        <div className="px-4 sm:px-8 py-16 sm:py-20">
          {/* Branding Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h1 className="text-2xl font-bold text-blue-500">
                {footerData.branding?.brandName || "Default Brand"}
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                {footerData.branding?.brandDescription || "Default description."}
              </p>
            </div>

            {/* Footer Sections */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerData.sections?.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links?.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          className="text-sm text-gray-600 hover:text-blue-500"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600">
              {footerData.footerBottom?.copyrightText || "© Default Copyright"}
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {footerData.footerBottom?.bottomLinks?.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-sm text-gray-600 hover:text-blue-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
