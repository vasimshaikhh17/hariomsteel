import React from "react";
import {
  FaBox,
  FaUserTie,
  FaLightbulb,
  FaSmile,
  FaClock,
  FaTag,
} from "react-icons/fa"; // Importing icons from react-icons
import ab1 from "../../assets/images/banner12.cms";
import gst from "../../assets/images/HARIOM_GST-pages.webp";
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
            <section className="text-lg mb-4">
              About Hariom Steel
              <p>
                Founded in 2023, Hariom Steel has grown into a renowned
                manufacturer, supplier, and exporter of high-quality industrial
                products. We specialize in a diverse array of products including
                pipes, tubes, flanges, pipe/tube fittings, fasteners, plates,
                gaskets, and round bars.
                {/* With our ISO 9001:2015 certification from TUV Nord India, we uphold the highest standards of quality across all our offerings. */}
              </p>
              <br />
              <p>
                Quality is the cornerstone of our operations. We adhere strictly
                to ASME, ASTM, and other national and international standards,
                ensuring that every product meets the most rigorous quality and
                performance criteria.
              </p>
              <br />
              <p>
                At Hariom Steel, we believe in fostering a supportive and
                innovative work environment. Our team of experts and skilled
                laborers are dedicated to producing sustainable and cutting-edge
                solutions that keep pace with the ever-evolving market trends.
                Driven by enthusiasm and a commitment to excellence, our
                workforce consistently delivers products that offer exceptional
                value and reliability to our global clientele.
              </p>
            </section>
          </div>
        </div>

        {/* Why Choose Us Section */}
      
        {/* GST Registration Section */}

        <section className="mb-10">
          <div className="text-3xl font-extrabold text-fontPrimary text-center mb-10  bg-primary">
            <h1 className="pb-5 pt-5">Our Certificates</h1>
          </div>

          <div className="customContainer  px-4  flex flex-col md:flex-row justify-around">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src={gst}
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
