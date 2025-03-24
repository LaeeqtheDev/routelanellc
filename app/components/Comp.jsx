"use client"
import React from "react";
import Image from "next/image";
import { ShieldCheck, DollarSign } from "lucide-react";

const ComplianceCheck = () => {
  const handlePayment = () => {
    window.open("https://wise.com/send-money/", "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12 bg-white shadow-xl rounded-2xl border border-gray-200">
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">Stay Compliant & Keep Hauling</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Ensure your truck meets all <strong>FMCSA requirements</strong> and avoid costly fines. 
          We handle everything from document checks to inspections so you can stay on the road.
        </p>

        {/* Checklist */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={24} />
            <span className="text-lg font-medium">DOT & CDL Compliance Check</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={24} />
            <span className="text-lg font-medium">Drug Testing & Medical Certificates</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={24} />
            <span className="text-lg font-medium">ELD & Hours of Service Verification</span>
          </div>
        </div>

        {/* CTA Button with Wise Redirect */}
        <button
          onClick={handlePayment}
          className="mt-6 flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl shadow-lg bg-white border-2 border-black text-black hover:bg-black hover:text-white transition transform hover:scale-105"
        >
          <DollarSign size={22} />
          Get Compliance Check – <span className="text-xl">$50</span>
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/comp.jpeg"
          alt="Compliance Check"
          width={500}
          height={350}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default ComplianceCheck;
