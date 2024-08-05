import React from "react";
import Layout from "../../common/Layout";
import duplexSteelGasket from "../../../assets/allProductsImages/duplex-steel-gasket.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const DuplexSteelGasket = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Duplex Steel Gaskets
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={duplexSteelGasket}
                                    alt="Duplex Steel Gaskets"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Duplex steel gaskets are high-performance sealing solutions made from duplex stainless steel, which combines both austenitic and ferritic stainless steel to offer superior mechanical properties. These gaskets are designed for demanding applications requiring high strength, corrosion resistance, and durability.
                                </p>
                                <p className="mb-2">
                                    Duplex steel gaskets are particularly valued in industries such as oil and gas, chemical processing, and marine due to their excellent resistance to stress corrosion cracking, pitting, and erosion. They provide a reliable seal in high-pressure and high-temperature environments.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength and durability</li>
                                    <li>Excellent resistance to corrosion and stress corrosion cracking</li>
                                    <li>Good performance in high-pressure and high-temperature conditions</li>
                                    <li>Enhanced resistance to pitting and erosion</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Duplex Steel Gaskets
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Duplex steel gaskets offer excellent resistance to various forms of corrosion, including pitting, crevice corrosion, and stress corrosion cracking.
                                    </li>
                                    <li>
                                        High Strength: The duplex structure provides high tensile strength and toughness, making these gaskets suitable for high-pressure applications.
                                    </li>
                                    <li>
                                        Thermal Stability: Capable of maintaining performance under fluctuating temperatures and extreme conditions.
                                    </li>
                                    <li>
                                        Erosion Resistance: Designed to resist erosion and wear, ensuring longevity in abrasive environments.
                                    </li>
                                    <li>
                                        Versatile Applications: Ideal for use in oil and gas, chemical processing, and marine industries.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Duplex Steel Gasket Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Made from Duplex Stainless Steel: Combines austenitic and ferritic properties for enhanced performance.
                                    </li>
                                    <li>
                                        Precision Engineered: Ensures a reliable seal and fits various industrial applications.
                                    </li>
                                    <li>
                                        Customizable: Available in a range of sizes, thicknesses, and designs to meet specific requirements.
                                    </li>
                                    <li>
                                        Industry Applications: Suitable for demanding environments in the oil and gas, chemical processing, and marine sectors.
                                    </li>
                                    <li>
                                        Long-Term Reliability: Designed for extended service life and dependable performance under harsh conditions.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Duplex Steel Gasket Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Duplex Stainless Steel (typically UNS S32205 or UNS S32750)
                                    </li>
                                    <li>
                                        Size Range: Available in various sizes and thicknesses to accommodate different applications
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

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={duplexSteelGasket}
                                alt="Duplex Steel Gaskets"
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

export default DuplexSteelGasket;
