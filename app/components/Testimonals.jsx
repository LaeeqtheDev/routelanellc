"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    client: "John Doe",
    testimonial: "This company is fantastic! They streamlined our operations.",
  },
  {
    client: "Jane Smith",
    testimonial: "Exceptional service and highly reliable.",
  },
  {
    client: "Michael Johnson",
    testimonial: "Their team is professional and very efficient.",
  },
  {
    client: "Emily Davis",
    testimonial: "I highly recommend their services for any logistics needs.",
  },
];

// Duplicate the testimonials array for seamless scrolling.
const repeatedTestimonials = [...testimonials, ...testimonials];

const ClientTestimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Hear what our clients have to say about our services.
          </p>
        </header>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Column: Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-96">
            <Image
              src="/clients.png" // Replace with your actual image path
              alt="Client Testimonials"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Right Column: Testimonials Marquee */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {repeatedTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-xs bg-white rounded-xl shadow p-6 m-4"
                >
                  <p className="text-gray-700 mb-4">"{item.testimonial}"</p>
                  <p className="text-lg font-semibold text-gray-800">
                    - {item.client}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
