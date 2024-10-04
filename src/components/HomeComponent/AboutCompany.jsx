import React from "react";
import { Tilt } from "react-tilt";

// import factory from "../../assets/images/aboutcompany.jpeg";
import factory from "../../assets/images/about.webp";

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
              className="text-fontDefault mb-6 text-justify"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              We manufacture high tensile bolts & fasteners in bigger diameter
              bolt nuts & HV grade hot dip galvanized fasteners, We are the
              biggest manufacturer in India for bigger diameter bolts & nuts in
              high tensile and stainless steel grade and fasteners to major
              contractors and consultants undertaking these projects in India,
              USA, Europe, Asia, Africa and middle east regions in power
              renewable energy, wind & infrastructure division. We are also
              specialized manufacturers for stainless steel Bolts, nuts, Stud
              Bolts and washers which are used in water treatment, sewage
              treatment, waste water treatment and desalination plants. We
              specialize in manufacturing and exporting high Tensile Bolts &
              Fasteners in 8.8,10.9,12.9 grades and stainless steel
              A4-80,A4-70,A4,B8,B8M,GR8,304,316,310,321,410 Special Steel like
              Hastelloy, Inconel, Monel, Alloy 20,Titanium,Nitronic, & Duplex
              Steel
            </p>
            <p
              className="text-fontDefault mb-6 text-justify"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Whether small or big, we respect all our patrons and every care is
              taken to offer them a hassle-free and a pleasant business
              experience. We also deliver our orders in economic order
              quantities as well as in bulk and as a rule, our services and
              product’s quality always remains the same, apart from quantity or
              specification desired. In order to meet the off-hand need of our
              patron, we keep a wide range of standard items of outlets, pipe
              fittings, flanges, outlets and pipes from sizes ½” to 24”.
              Patrons’ need for special items is created with finest standards
              at a specific time. Equipped with this strength, Hariom Steel is
              mounting nationally and internationally to place it in the top
              position.
            </p>
            {/* <ul
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
            </ul> */}
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
              width={600}
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
