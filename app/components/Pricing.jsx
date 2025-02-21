"use client";
import React from "react";
import { 
  Package,    // For Box Truck
  Truck,      // For Dry Van
  Zap,        // For Hotshot
  Snowflake,  // For Reefer
  Check       // For bullet points
} from "lucide-react";

const truckPlans = [
  {
    name: "Box Truck",
    rate: "8% per load",
    icon: Package,
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    name: "Dry Van",
    rate: "5% per load",
    icon: Truck,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "Hotshot",
    rate: "5% per load",
    icon: Zap,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "Reefer",
    rate: "5% per load",
    icon: Snowflake,
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

const features = [
  "Booking load above $2rpm",
  "Approving rate con",
  "Pickup",
  "Delivery",
  "You get paid",
  "We get paid",
];

const Pricing = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading & Subtext */}
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Choose what fits you Best </h2>
          <p className="text-lg text-gray-600">
            Choose the best plan for your trucking operations
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {truckPlans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <div
                key={idx}
                className={`rounded-xl shadow p-6 flex flex-col justify-between 
                  ${plan.bgColor} ${plan.textColor} transition duration-300`}
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-200 rounded-full">
                      <Icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  </div>
                  <p className="text-lg font-medium mb-4">{plan.rate}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check
                        className={
                          plan.bgColor === "bg-black"
                            ? "text-white h-5 w-5"
                            : "text-black h-5 w-5"
                        }
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  className={`mt-auto px-4 py-2 rounded-md font-semibold 
                    border transition duration-300 
                    ${
                      plan.bgColor === "bg-black"
                        ? "bg-white text-black border-white hover:bg-black hover:text-white"
                        : "bg-black text-white border-black hover:bg-white hover:text-black"
                    }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
