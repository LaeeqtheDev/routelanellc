"use client";
import React from "react";
import Image from "next/image";

const paymentPartners = [
  { 
    name: "Wise", 
    logo: "/wise.svg", 
    signupLink: "https://wise.com/register" 
  },
  { 
    name: "PayPal", 
    logo: "/paypal.svg", 
    signupLink: "https://www.paypal.com/signup" 
  },
  { 
    name: "MoneyGram", 
    logo: "/moneygram-seeklogo.png", 
    signupLink: "https://secure.moneygram.com/signup" 
  },
  { 
    name: "Zelle", 
    logo: "/zelle.svg", 
    signupLink: "https://www.zellepay.com/get-started" 
  },
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
                className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-between border h-48 sm:h-52"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-lg font-semibold">{partner.name}</h3>
                <a
                  href={partner.signupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black border-2 border-black transition"
                >
                  Sign Up with {partner.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96 flex justify-center">
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
