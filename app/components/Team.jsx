"use client";
import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Syed Laeeq Ahmed",
    role: "CEO",
    description: "Leading the team with vision and passion.",
    avatar: "/avatar2.png", // Replace with your actual image path
  },
  {
    name: "M Adeel",
    role: "COO",
    description: "Overseeing operations with strategic insight.",
    avatar: "/avatar3.png", // Replace with your actual image path
  },
  {
    name: "Larry & Scott",
    role: "Dispatchers",
    description: "Ensuring smooth and efficient dispatching.",
    avatar: "/avatar5.png", // Replace with your actual image path
  },
  {
    name: "Kate L",
    role: "Sales Head",
    description: "Driving sales and building client relationships.",
    avatar: "/avatar6.png", // Replace with your actual image path
  },
];

const OurTeam = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Team</h2>
          <p className="text-lg text-gray-600">
            Meet the team that drives our success.
          </p>
        </header>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Column: Team Cards */}
          <div className="order-1 w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center"
                >
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column: Video */}
          <div className="order-2 relative w-full md:w-1/2 h-64 md:h-96">
            <video
              className="w-full h-full object-cover rounded-3xl"
              autoPlay
              loop
              muted
              playsInline
              src="/team.mp4" // Replace with your actual video path
              poster="/team-video-poster.jpg" // Optional poster image
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
