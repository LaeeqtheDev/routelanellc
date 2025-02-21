"use client";
import React from "react";
import Image from "next/image";

const faqItems = [
  {
    question: "How do our dispatching services benefit both shippers and carriers?",
    answer:
      "Our services streamline logistics by ensuring prompt communication and efficient scheduling, boosting reliability and reducing downtime for both parties.",
  },
  {
    question: "What makes our relationship with brokers and carriers unique?",
    answer:
      "We prioritize transparent communication and personalized support, fostering long-term partnerships and trust between brokers and carriers.",
  },
  {
    question: "How do we support owner-operators?",
    answer:
      "We work closely with owner-operators, providing timely load assignments, competitive rates, and ongoing support to maximize their earnings.",
  },
  {
    question: "Why should I choose your dispatch services over others?",
    answer:
      "Our commitment to excellence, advanced technology, and strong industry relationships ensure efficient, reliable service that sets us apart.",
  },
  {
    question: "How do our services improve overall operational efficiency?",
    answer:
      "By leveraging real-time communication and optimized logistics strategies, we reduce delays and streamline operations for all parties.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: FAQ Content */}
        <div className="w-full md:w-1/2">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700">
              Learn how our services bridge the gap between shippers, brokers, and carriers.
            </p>
          </header>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Column: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/FAQ.png" // Replace with your actual image path
            alt="FAQ Illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
