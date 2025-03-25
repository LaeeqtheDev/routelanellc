"use client";

import React, { useState } from "react";
import Image from "next/image";

// A simple reusable modal component
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

// ConnectYourLoadboard component
const ConnectYourLoadboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleConnect = (e) => {
    e.preventDefault();
    // For now, we log the credentials.
    // In a real application, call an API to securely process this data.
    console.log("Email:", email, "Password:", password);
    // Optionally close the modal and reset the form.
    setModalOpen(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-center">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-black text-white px-8 py-4 rounded-lg shadow-md border-2 border-black transition hover:bg-white hover:text-black"
      >
        Connect Your DAT Loadboard
      </button>

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

export default ConnectYourLoadboard;
