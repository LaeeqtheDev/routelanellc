"use client";
import React from "react";
import Image from "next/image";
import { DollarSign, CreditCard, Coins, Send } from "lucide-react";

const paymentPartners = [
  { name: "Wise", color: "text-green-600", icon: DollarSign },
  { name: "PayPal", color: "text-blue-600", icon: CreditCard },
  { name: "MoneyGram", color: "text-yellow-600", icon: Coins },
  { name: "Zelle", color: "text-purple-600", icon: Send },
];

const PaymentPartners = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Text & Payment Partner Cards */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Payment Partners
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Our trusted partners for seamless international transactions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {paymentPartners.map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center"
                >
                  <Icon className={`h-12 w-12 ${partner.color} mb-4`} />
                  <h3 className="text-2xl font-bold">{partner.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
        {/* Right Column: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/partnerbank.png" // Replace with your actual image path
            alt="Payment Partners"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentPartners;
