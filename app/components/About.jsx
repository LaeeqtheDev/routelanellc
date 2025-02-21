"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Text & Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            We are a passionate team dedicated to revolutionizing dispatching logistics.
            Our mission is to streamline operations and deliver exceptional service to our partners.
          </p>
          <button className="px-6 py-3 bg-black text-white border border-black rounded-md transition duration-300 hover:bg-white hover:text-black self-start">
            Meet Our Team
          </button>
        </div>
        {/* Right Column: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/aboutus.png" // Replace with your actual image path
            alt="About Us"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
