"use client";
import React from "react";
import Image from "next/image";
import { Truck, MapPin, FileText, Clipboard } from "lucide-react";

const services = [
  {
    title: "Dispatching",
    description: "Optimized dispatching for seamless operations.",
    icon: Truck,
  },
  {
    title: "Route Planning",
    description: "Efficient route planning to save time and fuel.",
    icon: MapPin,
  },
  {
    title: "Invoicing",
    description: "Accurate invoicing to streamline your financials.",
    icon: FileText,
  },
  {
    title: "Booking Load",
    description: "Simplified load booking for increased productivity.",
    icon: Clipboard,
  },
];

const OurServices = () => {
  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/services.png" // Replace with your actual image path in the public folder
            alt="Our Services"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        {/* Right Column: Services Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center ">
            We offer a range of services designed to optimize your operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer hover:text-green-500" >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center hover:text-green-500"
                >
                  <Icon className="h-10 w-10 text-gray-500 mb-2 hover:text-green-500 "  />
                  <h3 className="text-xl font-semibold text-gray-700 hover:text-green-500 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 hover:text-green-500 ">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
