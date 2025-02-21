"use client";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Streamlining Trucking Logistics
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl">
            Delivering Success One Mile at a Time
          </p>
          <button className="mt-8 px-6 py-3 bg-black text-white border border-black rounded-md transition duration-300 hover:bg-white hover:text-black">
            Get Started
          </button>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/hero-bg.jpg"
            alt="Hero Background"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
