"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle, UserPlus, Phone } from "lucide-react";

const TrustedLoadboards = () => {
  const loadboards = [
    "DAT Load Board",
    "Truckstop",
    "123Loadboard",
    "Direct Freight",
    "Convoy",
    "Uber Freight",
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center md:items-center gap-12">
      {/* Left Side - Image (Centered Vertically) */}
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <Image
          src="/ts.avif"
          alt="Loadboards"
          width={650}
          height={400}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-[50%]">
        <h2 className="text-4xl font-bold mb-6">Trusted Loadboards We Use</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We <strong>find and book loads</strong> directly from your preferred loadboards, ensuring you get <strong>maximum freight opportunities</strong>.
          <br />
          RouteLane <strong>covers the cost</strong> of these premium platforms, allowing you to operate without additional expenses.
          <br />
          <strong>You maintain full control</strong>—we use your existing account while keeping your credentials secure.
        </p>

        {/* Loadboard List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {loadboards.map((board, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <CheckCircle className="text-green-600" size={24} />
              <span className="text-lg font-semibold">{board}</span>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://account.dat.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-white border-black border-2 text-black hover:bg-black transition hover:text-white text-center"
          >
            <UserPlus size={20} /> Add Seat
          </a>
          <a
            href="tel:+18282036854"
            className="flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-black text-white hover:bg-gray-800 transition text-center"
          >
            <Phone size={20} /> Call Our Agent
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrustedLoadboards;
