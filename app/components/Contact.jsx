"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:routelanellc@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/contact.png" // Replace with your actual image path
            alt="Contact Us"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full md:w-1/2">
          <header className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Contact Us Now
            </h2>
            <p className="text-lg text-gray-700">
              We'd love to hear from you. Fill out the form below to get in touch.
            </p>
          </header>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border rounded-md p-2"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border rounded-md p-2"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border rounded-md p-2"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mx-auto block px-6 py-3 bg-black text-white border border-black rounded-md transition duration-300 hover:bg-white hover:text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
