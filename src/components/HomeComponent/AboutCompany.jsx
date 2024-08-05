import React from "react";
import { Tilt } from "react-tilt";

import factory from "../../assets/images/aboutcompany.jpeg";

import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const AboutCompany = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-6 customContainer md:mt-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1 mt-6 md:mt-0 md:ml-6">
            <h1
              className="text-fontDefault text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              About Us
            </h1>
            <p
              className="text-fontDefault mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Our company is dedicated to providing top-quality industrial products that meet the rigorous demands of various industries. With a commitment to excellence and innovation, we offer a comprehensive range of products including pipes, tubes, flanges, fittings, fasteners, plates, gaskets, and round bars.
            </p>
            <p
              className="text-fontDefault mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              We pride ourselves on our precision manufacturing processes and adherence to stringent industry standards. Our products are designed to ensure durability, reliability, and optimal performance in a wide array of applications. Whether it's fluid handling, structural support, or specialized industrial needs, our solutions deliver the robustness and efficiency required to excel in challenging environments.
            </p>
            <ul
              className="list-none space-y-2 mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <li className="flex items-center">
                <FaCheck className="mr-2 size-6 text-primary" />
                <span className="text-fontDefault">
                  Trust us, we have the elements for success.
                </span>
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 size-6 text-primary" />
                <span className="text-fontDefault">
                  Excellence in every element we produce.
                </span>
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 size-6 text-primary" />
                <span className="text-fontDefault">
                  Your reliable partner in industrial solutions.
                </span>
              </li>
            </ul>
            <button
              className="bg-primary hover:bg-tertiary text-fontPrimary font-bold py-2 px-4 rounded"
              onClick={() => {
                navigate("/about-us");
              }}
            >
              Read More ➔
            </button>
          </div>
          <div
            className="w-full md:w-1/2 order-1 md:order-2 flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
              <img
                src={factory}
                alt="Industrial plant with chimneys emitting smoke"
                className="rounded-lg shadow-md lg:h-128 object-cover"
              />
            </Tilt>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutCompany;