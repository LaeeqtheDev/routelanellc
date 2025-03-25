"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle, UserPlus, Phone } from "lucide-react";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-3xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const TrustedLoadboards = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loadboards = [
    "DAT Load Board",
    "Truckstop",
    "123Loadboard",
    "Direct Freight",
    "Convoy",
    "Uber Freight",
  ];

  const handleConnect = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    setModalOpen(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center md:items-center gap-12">
      {/* Left Side - Image */}
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
          We <strong>find and book loads</strong> directly from your preferred loadboards, ensuring you get{" "}
          <strong>maximum freight opportunities</strong>.
          <br />
          RouteLane <strong>covers the cost</strong> of these premium platforms, allowing you to operate without additional expenses.
          <br />
          <strong>You maintain full control</strong>—we use your existing account while keeping your credentials secure.
        </p>

        {/* Loadboard List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {loadboards.map((board, index) => (
            <div key={index} className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm">
              <CheckCircle className="text-green-600" size={24} />
              <span className="text-lg font-semibold">{board}</span>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-start gap-4">
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
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-green-600 text-white border-2 border-green-600 hover:bg-white hover:text-green-600 transition"
          >
            Connect Your Loadboard
          </button>
        </div>
      </div>

      {/* Modal for Connect Your Loadboard */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Connect your DAT loadboard now</h2>
        <p className="text-gray-600 mb-6">
          Please enter your email and password. These credentials will be securely sent to us so that we can help manage your loadboard.
        </p>
        <form onSubmit={handleConnect} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg shadow-md border-2 border-black transition hover:bg-white hover:text-black"
          >
            Connect
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default TrustedLoadboards;
