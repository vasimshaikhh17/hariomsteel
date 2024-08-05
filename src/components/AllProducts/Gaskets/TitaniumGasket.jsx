import React from "react";
import Layout from "../../common/Layout";
import titaniumGasket from "../../../assets/allProductsImages/titanium-gaskets.jfif";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const TitaniumGasket = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Titanium Gaskets
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={titaniumGasket}
                                    alt="Titanium Gaskets"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Titanium gaskets are high-performance sealing components made from titanium, known for their exceptional strength, corrosion resistance, and ability to withstand extreme temperatures. They are commonly used in applications where high durability and reliability are required, particularly in harsh and demanding environments.
                                </p>
                                <p className="mb-2">
                                    Due to their excellent mechanical properties, titanium gaskets are ideal for industries such as aerospace, chemical processing, and marine applications. They offer a superior sealing solution for applications involving aggressive chemicals and high-pressure conditions.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Exceptional strength and durability</li>
                                    <li>Excellent corrosion and oxidation resistance</li>
                                    <li>High-temperature and pressure tolerance</li>
                                    <li>Suitable for harsh environments</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Titanium Gaskets
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        High Strength: Titanium gaskets offer outstanding mechanical strength, making them suitable for high-stress applications.
                                    </li>
                                    <li>
                                        Corrosion and Oxidation Resistance: Excellent performance in corrosive and oxidative environments, ensuring long-lasting service.
                                    </li>
                                    <li>
                                        Temperature and Pressure Resistance: Capable of withstanding extreme temperatures and high-pressure conditions without compromising performance.
                                    </li>
                                    <li>
                                        Lightweight: Provides high strength without adding significant weight, advantageous in aerospace and high-performance applications.
                                    </li>
                                    <li>
                                        Versatile Applications: Ideal for use in aerospace, chemical processing, and marine industries due to their superior properties.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Titanium Gasket Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Made from High-Grade Titanium: Ensures superior strength and durability in challenging conditions.
                                    </li>
                                    <li>
                                        Precision Engineered: Provides a reliable seal for various high-performance applications.
                                    </li>
                                    <li>
                                        Resistant to Extreme Conditions: Effective in environments with high temperatures, pressures, and corrosive substances.
                                    </li>
                                    <li>
                                        Lightweight Yet Strong: Offers a high strength-to-weight ratio, making it suitable for aerospace and other demanding industries.
                                    </li>
                                    <li>
                                        Customizable: Available in various sizes and designs to meet specific sealing requirements.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Titanium Gasket Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Titanium (commonly Grade 1, Grade 2, or Grade 5)
                                    </li>
                                    <li>
                                        Size Range: Available in various sizes to fit different applications
                                    </li>
                                    <li>
                                        Temperature Range: Suitable for extreme temperature environments
                                    </li>
                                    <li>
                                        Pressure Rating: Designed to handle high-pressure applications
                                    </li>
                                    <li>
                                        Standards and Specifications: Meets industry standards for high-performance sealing
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={titaniumGasket}
                                alt="Titanium Gaskets"
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

export default TitaniumGasket;
