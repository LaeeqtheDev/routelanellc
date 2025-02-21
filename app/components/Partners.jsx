"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// Sample partner data
const partners = [
  { name: "TQL", logo: "/partner-1.jpg" },
  { name: "LANDSTAR", logo: "/partner-2.jpeg" },
  { name: "AXLE LOGISICS", logo: "/partner-3.png" },
  { name: "COYOTE LOGISICS", logo: "/partner-4.png" },
  { name: "CH ROBINSON", logo: "/partner-5.jpg" },
  { name: "XPO", logo: "/partner-6.jpg" },
];

// Duplicate the array so it scrolls seamlessly
const repeatedPartners = [...partners, ...partners];

const Partners = () => {
  return (
    <section className="py-12">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-4 text-gray-500">
        Leading Brokerage Companies
      </h2>
      {/* Description Paragraph */}
      <p className="text-center text-lg text-gray-600 mb-8">
        We proudly collaborate with industry leaders to deliver exceptional logistics solutions.
      </p>

      {/* Scrolling Logos Container */}
      <div className="overflow-hidden w-full relative">
        <motion.div
          className="flex w-max"
          // Animate the container from 0% to -50% (left), repeating infinitely
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60, // Adjust to control speed
            repeat: Infinity, // Loop forever
            ease: "linear",
          }}
        >
          {repeatedPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-24 relative mx-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain filter grayscale"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
