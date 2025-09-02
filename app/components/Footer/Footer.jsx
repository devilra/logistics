"use client";
import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-xl">LOGO</span>
            </div>

            <div className="flex items-center gap-4 text-2xl text-gray-700">
              <FaLinkedin className="cursor-pointer hover:text-blue-600" />
              <FaFacebook className="cursor-pointer hover:text-blue-500" />
              <FaYoutube className="cursor-pointer hover:text-red-600" />
              <FaXTwitter className="cursor-pointer hover:text-black" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Terms & conditions
            </a>
            <a href="#" className="hover:text-gray-900">
              Whistleblower
            </a>
            <a href="#" className="hover:text-gray-900">
              Data Privacy Notification
            </a>
            <a href="#" className="hover:text-gray-900">
              Cookie policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Cookie preferences
            </a>
            <a href="#" className="hover:text-gray-900">
              Brand protection
            </a>
            <a href="#" className="hover:text-gray-900">
              Unsolicited Submissions Policy
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <button className="px-5 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              Talk to an expert
            </button>
            <button className="px-5 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              Find local offices & information
            </button>
            <button className="px-5 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              Subscribe to our newsletter
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} All rights reserved | Developed by{" "}
          <span className="font-semibold hover:text-blue-600 cursor-pointer">
            Amigiwebster
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
