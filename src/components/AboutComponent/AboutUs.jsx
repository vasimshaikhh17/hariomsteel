import React from "react";
import {
  FaBox,
  FaUserTie,
  FaLightbulb,
  FaSmile,
  FaClock,
  FaTag,
} from "react-icons/fa"; // Importing icons from react-icons
import ab1 from "../../assets/images/aboutus.jpg";
import certi from "../../assets/images/certi.png";
import Layout from "../common/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-sectionbg text-fontDefault">
        {/* Intro Section */}
        <div className="customContainer px-4 py-16 flex flex-col md:flex-row items-center justify-around">
          <div className="md:w-1/2">
            <img
              src={ab1}
              alt="Industry"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h1 className="text-4xl font-bold mb-4">About Our Industry</h1>
            <section className="text-lg mb-4 text-justify">
              <p>
                HARIOM STEEL is an ISO 9001 : 2015 Certified Company.
                Established in the year 2023 Hariom Steel is one of the
                prominent manufacturer supplier, and exporter of Fasteners and
                fittings in Various Ferrous and Non-Ferrous grade of Stainless
                Steel and High Nickel Alloys. We maintain total control on the
                quality of goods and use the latest technology to manufacture
                our products. We are one of the professional and upcoming
                Exporters, Suppliers and Manufacturers of Nickel Alloys,
                Titanium Alloys, Stainless Steel, Alloy Steel and Carbon Steel
                products. We have a large and accomplished stock of Fasteners
                and Fittings in different Sizes and Forms. We work with the key
                purpose of serving maximum patron satisfaction and are dedicated
                to steadily enhance the quality of our services & products, to
                create worth for our Patrons.
              </p>
              <br />
              <p className="text-justify">
                We supply pipes, tubes, fittings and flanges of major approved
                brands like MEGA ITALY, MELESI ITALY, ULMA FORGE, METALFAR,
                BEKAN JAPAN, ERNE FITTINGS, AND many more. Being an ISO
                certified Company our quality control team ensures that all the
                products are manufactured as per standard requirement referring
                to (ASME and ASTM) and all other national and international
                standards.
              </p>
              <br />
              <p className="text-justify">
                We follow a friendly work environment, where our employees are
                able to learn better. Our experts and skilled laborers help us
                build products that are sustainable in the ever-changing market
                trends. Our ever-ready team is highly enthusiastic and motivated
                to create products that offer exceptional value for money.
              </p>
            </section>
          </div>
        </div>

        {/* Why Choose Us Section */}

        {/* GST Registration Section */}

        <section className="mb-10">
          <div className="text-3xl font-extrabold text-fontPrimary text-center mb-10  bg-primary">
            <h1 className="pb-5 pt-5">Mission & Vision</h1>
          </div>

          <div className="customContainer  px-4  flex flex-col md:flex-row justify-around">
            <div className=" md:ml-8 md:mt-4">
              {/* <h2 className="text-2xl font-extrabold text-fontDefault mb-4 text-center">
                Our Mission & Vision
              </h2> */}
         
              <p className="text-lg  mb-4">
                <b>Our Mission </b>: To supply high-quality steel products, providing
                ancillary services and solutions to worldwide clients while
                using innovative technologies which are environment-friendly to
                motivate our employees to focus on continuous improvement,
                highest business standards, work ethics, and corporate
                citizenship. We are committed to exceeding the expectations of
                our customers by providing high-quality products & services. We
                aim to excel in everything we do.
              </p>
              <p className="text-lg  mb-4">
               <b>Our Vision </b> : To attain a leadership position in the Steel
                Industry through performance excellence by providing
                cost-effective metal packaging products.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="text-3xl font-extrabold text-fontPrimary text-center mb-10  bg-primary">
            <h1 className="pb-5 pt-5">Our Certificates</h1>
          </div>

          <div className="customContainer  px-4  flex flex-col md:flex-row justify-around">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src={certi}
                alt="GST Registration Certificate"
                className="w-full h-auto rounded-lg box-shadow2"
              />
            </div>
            <div className="md:w-1/2 md:ml-8 md:mt-4">
              <h2 className="text-2xl font-extrabold text-fontDefault mb-4">
                Our GST Registration Certificate
              </h2>
              <p className="text-lg  mb-4">
                We are proud to be a registered GST entity, ensuring that we
                comply with all legal requirements and regulations. Our GST
                registration is a testament to our commitment to transparency
                and ethical business practices. By maintaining a valid GST
                registration, we guarantee that our operations are conducted in
                accordance with the law, providing peace of mind to our clients
                and stakeholders.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-fontDefault text-center mb-8">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card Items */}
              <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="text-center">
                  <FaBox className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-fontDefault mb-4">
                    High-Quality Products
                  </h3>
                  <p className="text-gray-600">
                    We ensure that all our products meet the highest standards
                    of quality and durability.
                  </p>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="text-center">
                  <FaUserTie className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-fontDefault mb-4">
                    Expert Team
                  </h3>
                  <p className="text-gray-600">
                    Our team of experts is dedicated to providing the best
                    service and solutions for our clients.
                  </p>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="text-center">
                  <FaLightbulb className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-fontDefault mb-4">
                    Innovative Solutions
                  </h3>
                  <p className="text-gray-600">
                    We are committed to offering innovative solutions to meet
                    the evolving needs of the industry.
                  </p>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="text-center">
                  <FaSmile className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-fontDefault mb-4">
                    Customer Satisfaction
                  </h3>
                  <p className="text-gray-600">
                    Customer satisfaction is our top priority, and we strive to
                    exceed expectations with every project.
                  </p>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="text-center">
                  <FaClock className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-fontDefault mb-4">
                    Timely Delivery
                  </h3>
                  <p className="text-gray-600">
                    We understand the importance of timely delivery and ensure
                    all projects are completed on schedule.
                  </p>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="text-center">
                  <FaTag className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Competitive Pricing
                  </h3>
                  <p className="text-gray-600">
                    We offer competitive pricing without compromising on the
                    quality of our products and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
