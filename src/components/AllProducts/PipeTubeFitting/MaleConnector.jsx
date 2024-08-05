import React from "react";
import Layout from "../../common/Layout";
import maleConnector from "../../../assets/allProductsImages/MALE CONNECTOR.jpeg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const MaleConnector = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Male Connector
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={maleConnector}
                                    alt="Male Connector"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Male Connectors are essential components in fluid and gas systems, designed to provide a secure and leak-proof connection between pipes, tubes, or hoses. These connectors feature a male threaded end that screws into a female threaded fitting, ensuring a tight and reliable connection. Male Connectors are widely used in various industries, including plumbing, automotive, and industrial applications, due to their versatility and ease of use.
                                </p>
                                <p className="mb-2">
                                    Available in different materials and sizes, Male Connectors can accommodate various operational requirements, ensuring optimal performance in diverse environments.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Provides a secure and leak-proof connection</li>
                                    <li>High strength and durability</li>
                                    <li>Suitable for a wide range of applications</li>
                                    <li>Available in different materials and sizes</li>
                                    <li>Easy installation and maintenance</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Male Connectors
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        High-Quality Material: Made from durable materials to withstand extreme conditions.
                                    </li>
                                    <li>
                                        Secure Connection: Ensures a tight and reliable connection, preventing leaks.
                                    </li>
                                    <li>
                                        Versatility: Suitable for use with a variety of pipes, tubes, and hoses.
                                    </li>
                                    <li>
                                        Easy to Install: Designed for easy installation and removal.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Resistant to corrosion, ensuring longevity and reliability.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Male Connector Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Available in various materials, such as stainless steel, brass, and plastic, to suit different applications.
                                    </li>
                                    <li>
                                        Size Variations: Comes in multiple sizes to fit different connection requirements.
                                    </li>
                                    <li>
                                        Customization: Customizable in terms of size, material, and finish to meet specific needs.
                                    </li>
                                    <li>
                                        High Durability: Resistant to wear, corrosion, and high pressure, ensuring long-term use.
                                    </li>
                                    <li>
                                        Thread Types: Available in various thread types, including NPT, BSP, and metric, to suit different operational needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Male Connector Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Stainless Steel, Brass, Plastic
                                    </li>
                                    <li>
                                        Size Range: From 1/8" to 2" in diameter, with custom sizes available upon request
                                    </li>
                                    <li>
                                        Pressure Rating: Varies depending on material and size, typically up to 6000 psi
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM, ISO, SAE
                                    </li>
                                    <li>
                                        Thread Types: NPT, BSP, Metric
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including polished, plated, and coated
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={maleConnector}
                                alt="Male Connector"
                                className="w-full h-auto mb-6 rounded shadow-lg"
                                data-aos="flip-left"
                                data-aos-duration="1000"
                            />
                            <RelatedProducts />
                        </div>
                    </div>
                </div>

                <div className="parallax-section bg-cover bg-fixed bg-center py-12">
                    <div className="customContainer text-black p-6 ">
                        <div className="mb-6 text-center text-fontPrimary">
                            <h2
                                className="text-xl font-semibold mb-2"
                                data-aos="flip-right"
                                data-aos-duration="1000"
                            >
                                CONTACT US TO GET A QUICK QUOTE <br />
                                If you require any further information, Please do not hesitate to contact us.
                            </h2>
                            <button
                                className="bg-primary hover:bg-tertiary text-fontPrimary font-bold py-2 px-4 rounded"
                                onClick={() => { navigate('/contact-us') }}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MaleConnector;
