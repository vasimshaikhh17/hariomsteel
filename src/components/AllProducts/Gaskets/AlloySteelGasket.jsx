import React from "react";
import Layout from "../../common/Layout";
import alloySteelGasket from "../../../assets/allProductsImages/alloy-steel-gasket.webp";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const AlloySteelGasket = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Alloy Steel Gaskets
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={alloySteelGasket}
                                    alt="Alloy Steel Gaskets"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Alloy steel gaskets are robust sealing components made from alloy steel, which is a blend of carbon steel and other elements such as chromium, nickel, or molybdenum. These gaskets are designed to withstand high-pressure and high-temperature environments, making them suitable for demanding industrial applications.
                                </p>
                                <p className="mb-2">
                                    Alloy steel gaskets offer superior strength, durability, and resistance to extreme conditions, including high temperatures and aggressive chemicals. They are commonly used in sectors such as automotive, aerospace, oil and gas, and manufacturing, where reliable and durable sealing solutions are required.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength and durability</li>
                                    <li>Excellent performance in high-pressure and high-temperature environments</li>
                                    <li>Resistant to aggressive chemicals and corrosive substances</li>
                                    <li>Reliable sealing for various industrial applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Alloy Steel Gaskets
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        High Strength: Alloy steel gaskets are engineered to withstand high pressures and temperatures, providing a reliable seal in challenging conditions.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Alloy steel gaskets offer good resistance to corrosion and oxidation, ensuring longevity in various environments.
                                    </li>
                                    <li>
                                        Thermal Stability: Designed to perform well in fluctuating temperatures, maintaining their sealing properties even under extreme heat.
                                    </li>
                                    <li>
                                        Versatile Applications: Suitable for use in automotive, aerospace, oil and gas, and other industrial sectors.
                                    </li>
                                    <li>
                                        Compliance with Standards: Manufactured to meet industry standards for quality and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Alloy Steel Gasket Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Made from Alloy Steel: Provides enhanced strength and durability compared to standard carbon steel.
                                    </li>
                                    <li>
                                        Precision Engineered: Ensures a secure and reliable seal in various applications.
                                    </li>
                                    <li>
                                        Customizable: Available in various sizes, thicknesses, and designs to meet specific sealing requirements.
                                    </li>
                                    <li>
                                        Industry Applications: Ideal for use in high-pressure and high-temperature applications in automotive, aerospace, and manufacturing sectors.
                                    </li>
                                    <li>
                                        Long-Term Reliability: Designed for extended service life and dependable performance in demanding environments.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Alloy Steel Gasket Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Alloy Steel (including Chromium, Nickel, Molybdenum)
                                    </li>
                                    <li>
                                        Size Range: Available in various sizes and thicknesses to suit different applications
                                    </li>
                                    <li>
                                        Temperature Range: Suitable for high-temperature applications
                                    </li>
                                    <li>
                                        Pressure Rating: Designed to handle high-pressure conditions
                                    </li>
                                    <li>
                                        Compliance: Meets industry standards for performance and durability
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={alloySteelGasket}
                                alt="Alloy Steel Gaskets"
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

export default AlloySteelGasket;
