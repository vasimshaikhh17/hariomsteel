import React from "react";
import Layout from "../../common/Layout";
import socketWeldFlanges from "../../../assets/allProductsImages/socket-weld-flange.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const SocketWeldFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Socket Weld Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={socketWeldFlanges}
                                    alt="Socket Weld Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Socket weld flanges are a type of flange used in high-pressure applications. They are designed to be welded to the end of a pipe, providing a strong and reliable connection. The socket weld flange features a recessed area (or "socket") where the pipe fits inside, which is then welded around the outer edge to create a secure joint.
                                </p>
                                <p className="mb-2">
                                    This type of flange is commonly used in various industries, including oil and gas, chemical processing, and power generation, where a high-integrity and durable connection is essential. Socket weld flanges are particularly suitable for applications involving high pressure and temperature.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Provides a secure and strong connection</li>
                                    <li>Suitable for high-pressure and high-temperature applications</li>
                                    <li>Commonly used in oil and gas, chemical processing, and power generation</li>
                                    <li>Features a recessed area for pipe fitting and welding</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Socket Weld Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        High-Pressure Capability: Designed to withstand high pressures, making them ideal for demanding applications.
                                    </li>
                                    <li>
                                        High-Temperature Resistance: Suitable for use in high-temperature environments due to their robust construction.
                                    </li>
                                    <li>
                                        Secure Joint: The recessed socket design provides a strong, reliable connection that minimizes the risk of leaks.
                                    </li>
                                    <li>
                                        Material Variety: Available in various materials, including stainless steel, carbon steel, and alloy steel, to meet different application requirements.
                                    </li>
                                    <li>
                                        Easy Installation: The socket weld design allows for easier installation compared to other flange types, reducing the need for complex fittings.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Socket Weld Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Precision Machined: Ensures a precise fit and strong weld joint for reliable performance.
                                    </li>
                                    <li>
                                        Material Options: Available in a range of materials, including stainless steel, carbon steel, and alloy steel, to suit various operational needs.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with different finishes and coatings to enhance durability and resistance to corrosion.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with international standards such as ANSI, ASME, and API for compatibility and reliability.
                                    </li>
                                    <li>
                                        Versatile Application: Used in a variety of industries, including oil and gas, chemical processing, and power generation.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Socket Weld Flange Specifications
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
                                src={socketWeldFlanges}
                                alt="Socket Weld Flanges"
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

export default SocketWeldFlanges;
