"use client";
import React from "react";
import Image from "next/image";
import { Truck, CheckCircle, Clock, Users, Star, Clipboard } from "lucide-react";

const stats = [
  { metric: "Total Dispatches", value: "5,000", icon: Truck },
  { metric: "On-Time Deliveries", value: "95%", icon: CheckCircle },
  { metric: "Average Delivery Time", value: "1.2 days", icon: Clock },
  { metric: "Active Drivers", value: "120", icon: Users },
  { metric: "Customer Satisfaction", value: "4.8/5", icon: Star },
  { metric: "Loads Booked", value: "3,200", icon: Clipboard },
];

const Statistics = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Goals Accomplished</h2>
          <p className="text-lg text-gray-600">
            Our success is measured by these impressive numbers.
          </p>
        </header>
        {/* Responsive Two-Column Layout */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Cards Column (mobile order-1, desktop order-2) */}
          <div className="order-1 md:order-2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
                  >
                    <div className="p-4 bg-gray-100 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 text-center">
                      {stat.metric}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Image Column (mobile order-2, desktop order-1) */}
          <div className="order-2 md:order-1 relative w-full md:w-1/2 h-64 md:h-96">
            <Image
              src="/stats.png" // Replace with your actual image path in the public folder
              alt="Statistics Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
