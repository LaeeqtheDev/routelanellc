"use client";
import React from "react";
import { Truck, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo: Truck Icon */}
        <Truck className="h-8 w-8 text-white" />
        {/* Social Icons */}
        <div className="flex space-x-4 cursor-pointer">
          <a href="https://www.instagram.com/routelanellc/" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 text-white hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/company/routelane" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-white hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
