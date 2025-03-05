"use client";
import React from "react";
import Image from "next/image";

const paymentPartners = [
  { name: "Wise", logo: "/wise.svg" },
  { name: "PayPal", logo: "/paypal.svg" },
  { name: "MoneyGram", logo: "/moneygram-seeklogo.png" },
  { name: "Zelle", logo: "/zelle.svg" }, // Add Zelle logo if available
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
            {paymentPartners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-2xl font-bold">{partner.name}</h3>
              </div>
            ))}
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
