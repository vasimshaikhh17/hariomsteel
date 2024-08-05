import React from "react";
import "aos/dist/aos.css";
import refinary from "../../assets/images/factory.jpg";

const data = [
  { name: "Refineries", value: 90 },
  { name: "Oil and Gas Industry", value: 96 },
  { name: "Power Generation", value: 80 },
  { name: "Pharmaceutical Equipment", value: 85 },
  { name: "Pulp & Paper Industry", value: 88 },
];

const AnimatedBars = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6">
      <div className="w-full md:w-1/2 md:order-1" data-aos="flip-up">
        <img src={refinary} alt="Industry" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 md:pl-10 md:order-2" data-aos="flip-down">
        {data.map((item, index) => (
          <div className="mb-6" key={index}>
            <div className="flex justify-between text-lg mb-2">
              <span>{item.name}</span>
              <span>{item.value}%</span>
            </div>
            <div className="relative h-2 bg-gray-300 rounded">
              <div
                className="absolute h-2 bg-primary rounded"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBars;
