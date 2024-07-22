import React from "react";
import Layout from "../../common/Layout";
import monelGasket from "../../../assets/allProductsImages/monel-gasket.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const MonelGasket = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Monel Gaskets
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={monelGasket}
                                    alt="Monel Gaskets"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Monel gaskets are high-performance sealing components made from Monel alloy, a nickel-copper alloy known for its excellent corrosion resistance and strength. These gaskets are designed to provide reliable sealing in various industrial applications, including those exposed to harsh environments, extreme temperatures, and aggressive chemicals.
                                </p>
                                <p className="mb-2">
                                    Monel gaskets are widely used in industries such as petrochemical, marine, aerospace, and chemical processing due to their superior resistance to corrosion, oxidation, and high-pressure conditions. They ensure a secure and durable seal, preventing leakage and maintaining system integrity.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Excellent resistance to corrosion and oxidation</li>
                                    <li>High strength and durability under extreme conditions</li>
                                    <li>Suitable for high-pressure and high-temperature applications</li>
                                    <li>Reliable sealing for aggressive chemicals and environments</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Monel Gaskets
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Monel gaskets offer exceptional resistance to corrosion from seawater, acids, and other harsh chemicals.
                                    </li>
                                    <li>
                                        High-Temperature Tolerance: Capable of withstanding high temperatures without compromising performance.
                                    </li>
                                    <li>
                                        Strength and Durability: Monel alloy provides high tensile strength and resistance to wear and tear, ensuring a long service life.
                                    </li>
                                    <li>
                                        Versatility: Suitable for a wide range of applications, including high-pressure and extreme environments.
                                    </li>
                                    <li>
                                        Compliance with Standards: Manufactured to meet industry standards for quality and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Monel Gasket Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Made from Monel Alloy: Provides excellent resistance to corrosion and high-temperature performance.
                                    </li>
                                    <li>
                                        Precision Engineered: Ensures a perfect fit and reliable sealing in various applications.
                                    </li>
                                    <li>
                                        Customizable: Available in various sizes and shapes to meet specific sealing requirements.
                                    </li>
                                    <li>
                                        Industry Applications: Ideal for use in petrochemical, marine, aerospace, and chemical processing industries.
                                    </li>
                                    <li>
                                        Long-Term Reliability: Designed to offer dependable performance over an extended service life.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Monel Gasket Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Monel Alloy (Nickel-Copper)
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
                                src={monelGasket}
                                alt="Monel Gaskets"
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

export default MonelGasket;
