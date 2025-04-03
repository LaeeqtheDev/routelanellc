"use client";
import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const locations = [
  "154 White St, Hendersonville, NC 28739"
];

const OurLocations = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Text & Locations List Column */}
        <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Our Locations
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 text-center">
            We operate from two strategic locations:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border rounded-lg shadow"
              >
                <MapPin className="h-6 w-6 text-gray-500" />
                <span className="text-gray-700 text-lg">{location}</span>
              </div>
            ))}
          </div>
          {/* Updated Button with New Google Maps Link */}
          <a
            href="https://maps.app.goo.gl/nCwCL55xYsHLRiwf8?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 bg-black text-white border border-black rounded-md transition duration-300 hover:bg-white hover:text-black mx-auto text-center w-fit"
          >
            View All Locations
          </a>
        </div>
        {/* Image Column */}
        <div className="order-2 md:order-1 relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/location.png" // Replace with your actual image path
            alt="Our Locations"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurLocations;
