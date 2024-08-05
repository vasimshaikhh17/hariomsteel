import React from "react";
import Layout from "../../common/Layout";
import valves from "../../../assets/allProductsImages/VALVES.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const Valves = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Valves
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={valves}
                                    alt="Valves"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Valves are crucial components in any fluid or gas handling system, used to control, direct, or regulate the flow of substances. They come in various types, including gate, globe, ball, and check valves, each designed to meet specific operational needs. Valves are essential for managing the flow rate, pressure, and direction of fluids or gases in diverse industries, such as oil and gas, water treatment, and manufacturing.
                                </p>
                                <p className="mb-2">
                                    Made from a variety of materials, valves are engineered to handle different pressures, temperatures, and corrosive environments, ensuring reliable and efficient system operation.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Control and regulate flow</li>
                                    <li>Available in various types and materials</li>
                                    <li>Essential for diverse industrial applications</li>
                                    <li>Helps in managing pressure and flow rate</li>
                                    <li>Durable and reliable performance</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Valves
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Versatility: Suitable for a wide range of applications, including high-pressure and high-temperature environments.
                                    </li>
                                    <li>
                                        Durable Construction: Made from robust materials to withstand harsh conditions and ensure long service life.
                                    </li>
                                    <li>
                                        Precise Control: Allows for accurate regulation of flow and pressure, enhancing system efficiency.
                                    </li>
                                    <li>
                                        Ease of Maintenance: Designed for easy installation, maintenance, and operation.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Available in materials resistant to corrosion and abrasion, ensuring longevity.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Valve Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Types: Includes gate valves, globe valves, ball valves, check valves, and more, each with specific applications.
                                    </li>
                                    <li>
                                        Material Options: Available in various materials such as stainless steel, brass, cast iron, and plastic.
                                    </li>
                                    <li>
                                        Size and Pressure Ratings: Available in a range of sizes and pressure ratings to meet different system requirements.
                                    </li>
                                    <li>
                                        Customization: Customizable in terms of size, material, and design to fit specific application needs.
                                    </li>
                                    <li>
                                        Performance: Ensures reliable performance and efficient flow control in various systems.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Valve Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Types: Gate, Globe, Ball, Check, and more
                                    </li>
                                    <li>
                                        Material Grades: Stainless Steel, Brass, Cast Iron, Plastic
                                    </li>
                                    <li>
                                        Size Range: From 1/4" to 24" in diameter, with custom sizes available upon request
                                    </li>
                                    <li>
                                        Pressure Rating: Varies depending on type and material, typically up to 6000 psi
                                    </li>
                                    <li>
                                        Standards and Specifications: ANSI, API, ISO, DIN
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including polished, coated, and painted
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={valves}
                                alt="Valves"
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

export default Valves;
