import React from "react";
import Layout from "../../common/Layout";
import ringTypeJointFlanges from "../../../assets/allProductsImages/Ring-type-joint-flange.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const RingTypeJointFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Ring Type Joint Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={ringTypeJointFlanges}
                                    alt="Ring Type Joint Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Ring Type Joint (RTJ) flanges are precision-machined, high-integrity flanges designed for high-pressure and high-temperature applications. They feature a metal ring that sits in a machined groove on the flange face, creating a metal-to-metal seal when bolted together. This ensures a leak-proof connection, even under the most demanding conditions.
                                </p>
                                <p className="mb-2">
                                    RTJ flanges are commonly used in the oil and gas industry, petrochemical plants, and other industrial applications where a strong, durable seal is crucial. They are designed to withstand extreme temperatures and pressures, making them ideal for critical piping systems.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High-integrity, leak-proof seal</li>
                                    <li>Ideal for high-pressure and high-temperature applications</li>
                                    <li>Commonly used in oil and gas industries</li>
                                    <li>Designed for critical piping systems</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Ring Type Joint Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Metal-to-Metal Seal: Ensures a high-integrity seal, reducing the risk of leaks even in high-pressure environments.
                                    </li>
                                    <li>
                                        High-Pressure Capability: Designed to handle extreme pressures, making them suitable for demanding applications.
                                    </li>
                                    <li>
                                        Temperature Resistance: Capable of withstanding high temperatures, ensuring reliability in various thermal conditions.
                                    </li>
                                    <li>
                                        Durable Construction: Made from robust materials to provide long-lasting performance.
                                    </li>
                                    <li>
                                        Versatile Applications: Used in various industries, including oil and gas, petrochemical, and other industrial sectors.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Ring Type Joint Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Precision Machining: Ensures a perfect fit and reliable performance in sealing applications.
                                    </li>
                                    <li>
                                        Material Variety: Available in different materials, including stainless steel, carbon steel, and alloy steel, to meet various operational needs.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with different coatings and finishes to enhance corrosion resistance and durability.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with international standards such as ANSI, ASME, and API for compatibility and reliability.
                                    </li>
                                    <li>
                                        High Integrity: Provides a robust seal for critical piping systems.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Ring Type Joint Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard: ANSI, ASME, API
                                    </li>
                                    <li>
                                        Material Options: Stainless Steel, Carbon Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: Various sizes available to meet different pipeline requirements
                                    </li>
                                    <li>
                                        Pressure Rating: Suitable for high-pressure applications
                                    </li>
                                    <li>
                                        Finish Options: Available with various coatings and finishes to enhance durability
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={ringTypeJointFlanges}
                                alt="Ring Type Joint Flanges"
                                className="w-full h-auto mb-6 rounded shadow-lg"
                                data-aos="flip-left"
                                data-aos-duration="1000"
                            />
                            <RelatedProducts />
                        </div>
                    </div>
                </div>

                <div className="parallax-section bg-cover bg-fixed bg-center py-12">
                    <div className="max-w-6xl mx-auto text-black p-6 ">
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

export default RingTypeJointFlanges;
