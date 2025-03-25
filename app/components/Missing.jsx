"use client";
import React from "react";
import Image from "next/image";

const accessories = [
  { 
    id: 1, 
    name: "Loadout Trailers", 
    image: "/loadout.png", 
    link: "https://www.amazon.com/s?k=loadout+trailers" 
  },
  { 
    id: 2, 
    name: "Flatbeds", 
    image: "/flatbed.png", 
    link: "https://www.amazon.com/s?k=flatbeds" 
  },
  { 
    id: 3, 
    name: "Pallet Jacks", 
    image: "/palletjack.png", 
    link: "https://www.amazon.com/s?k=pallet+jacks" 
  },
  { 
    id: 4, 
    name: "Tool Kits", 
    image: "/toolkit.png", 
    link: "https://www.amazon.com/s?k=tool+kits" 
  },
  { 
    id: 5, 
    name: "Ropes", 
    image: "/rope.png", 
    link: "https://www.amazon.com/s?k=ropes" 
  },
  { 
    id: 6, 
    name: "First Aids", 
    image: "/firstaid.png", 
    link: "https://www.amazon.com/s?k=first+aids" 
  },
];

const AccessoriesComponent = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-semibold text-center mb-4">
        Missing Out on Some <span className="font-bold text-orange-500">Accessories?</span> Buy Here!
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Get high-quality accessories to enhance your trucking experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-4 rounded-xl hover:shadow-lg hover:border-2 text-center flex flex-col items-center hover:bg-gray-200"
          >
            <div className="w-48 h-48 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                width={220}
                height={220}
                className="rounded-full object-contain max-w-full max-h-full"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black border-2 border-black transition"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesComponent;
