"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";

const OnboardingSteps = () => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let element = ref.current;
    let svg = element?.querySelector("path");

    if (!svg || typeof svg.getTotalLength !== "function") return;

    const length = svg.getTotalLength();
    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        scrub: 2.5,
        onUpdate: (self) => {
          const draw = length * self.progress;
          svg.style.strokeDashoffset = length - draw;
        },
      },
    });

    gsap.utils.toArray(".step").forEach((step, index, steps) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: step,
            start: index === steps.length - 1 ? "top 85%" : "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const steps = [
    { title: "MC (Motor Carrier Number)", description: "A unique identifier for your trucking business issued by the FMCSA." },
    { title: "W9 Form", description: "Essential for tax reporting, required for trucking businesses operating in the U.S." },
    { title: "NOA (Notice of Assignment)", description: "Confirms your operating authority and compliance with regulations." },
    { title: "COI (Certificate of Insurance)", description: "Proof of insurance coverage required to operate legally." },
    { title: "CDL (Commercial Driver’s License)", description: "Mandatory for drivers operating commercial vehicles. This allows you to operate large trucks legally and safely." }
  ];

  return (
    <div className="relative flex flex-col items-center w-full px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Carrier Onboarding Process</h2>
      <p className="text-lg text-center text-gray-600 max-w-2xl mb-8">
        Follow these steps to get started with our trucking services.
      </p>

      <div ref={ref} className="relative w-full max-w-3xl h-[750px] flex flex-col items-center justify-center overflow-hidden">
        <svg viewBox="0 0 52 2047" className="absolute w-full h-full">
          <path
            strokeWidth="6px"
            className="svg-path"
            d="M26 0V314C12 314 1 326 1 339C1 352 11 364 26 364C41 364 51 353 51 339C51 325 28 318 26 339V636V654.5C13.5 654.5 1 664 1 679C1 694 12 703 26 703C40 703 50.5 692.5 50.5 679C49.2307 664.367 26 660 26 679V979V994.5C13.5 994.5 0.999993 1003.5 1 1019C1.00001 1034.5 12.3457 1044.15 26 1043.5C36.5163 1043 50.4852 1035.18 50.5 1019C50.5148 1002.82 28.4963 1000.64 26 1019V1327C26 1327 26 1333.7 26 1338C13 1338 1 1348.5 1 1363C1 1377.5 13.5 1388 26 1388C38.5 1388 50.9422 1381.19 51 1363C51.0578 1344.81 26 1346 26 1363C26 1380 26 1670 26 1670V1678.5C12.5 1678.5 1 1687.5 1 1703C1 1718.5 14 1727.5 26 1727.5C38 1727.5 50.5 1719 50.5 1703C50.5 1687 26 1687 26 1703C26 1719 26 2049 26 2049"
            stroke="black"
          />
        </svg>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`step absolute flex items-center w-full max-w-md opacity-0  ${
              index % 2 === 0 ? "left-0 justify-start text-left" : "right-0 justify-end text-right"
            }`}
            style={{ top: `${10 + index * 18}%`, paddingBottom: index === steps.length - 1 ? "50px" : "0px" }}
          >
            <div className="bg-white p-4 shadow-lg rounded-lg max-w-xs">
              <h3 className="font-bold text-2xl">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Documents Button */}
     <div className="flex"> 
     <a
        href="mailto:routelanellc@gmail.com?subject=Carrier Onboarding Documents"
        className="mt-6 flex items-center gap-1 bg-white border-black border-2 text-black font-semibold py-4 px-12 rounded-lg shadow-md hover:bg-black transition-all hover:text-white text-lg"
      >
         <Mail size={22} />
        Submit Documents
      </a>
     </div>
    </div>
  );
};

export default OnboardingSteps;
