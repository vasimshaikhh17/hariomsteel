import React from "react";
import Layout from "../../common/Layout";
import bulkheadConnector from "../../../assets/allProductsImages/BULKHEAD CONNECTOR.jpeg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const BulkheadConnector = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Bulkhead Connector
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={bulkheadConnector}
                                    alt="Bulkhead Connector"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Bulkhead connectors are essential components used to connect different systems or equipment through a barrier, such as a wall or panel. They provide a secure and reliable passage for fluids, gases, or electrical signals while maintaining the integrity of the barrier. These connectors are widely used in various industries, including aerospace, marine, and industrial applications.
                                </p>
                                <p className="mb-2">
                                    Bulkhead connectors offer durability and versatility, ensuring seamless connectivity and preventing leaks or disconnections.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High reliability and durability</li>
                                    <li>Ensures barrier integrity</li>
                                    <li>Versatile applications</li>
                                    <li>Prevents leaks and disconnections</li>
                                    <li>Easy installation and maintenance</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Bulkhead Connectors
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Robust Construction: Made from high-quality materials to withstand harsh conditions and heavy usage.
                                    </li>
                                    <li>
                                        Leak-Proof Design: Ensures no fluid or gas escapes, maintaining system efficiency and safety.
                                    </li>
                                    <li>
                                        Easy Installation: Designed for straightforward installation and maintenance.
                                    </li>
                                    <li>
                                        Versatility: Suitable for a wide range of applications across different industries.
                                    </li>
                                    <li>
                                        High Performance: Delivers reliable performance in demanding environments.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Bulkhead Connector Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Available in various materials, such as stainless steel, brass, and plastic, to suit different applications.
                                    </li>
                                    <li>
                                        Size Variations: Comes in multiple sizes to fit different barrier thicknesses and connection requirements.
                                    </li>
                                    <li>
                                        Customization: Customizable in terms of size, material, and finish to meet specific needs.
                                    </li>
                                    <li>
                                        High Durability: Resistant to wear, corrosion, and high pressure, ensuring long-term use.
                                    </li>
                                    <li>
                                        Sealing Options: Includes various sealing options to ensure leak-proof connections.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Bulkhead Connector Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Stainless Steel, Brass, Plastic
                                    </li>
                                    <li>
                                        Size Range: Multiple sizes available to fit different requirements
                                    </li>
                                    <li>
                                        Pressure Rating: Suitable for high-pressure applications
                                    </li>
                                    <li>
                                        Standards and Specifications: Meets industry standards for quality and performance
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including polished, matte, and coated
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={bulkheadConnector}
                                alt="Bulkhead Connector"
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

export default BulkheadConnector;
