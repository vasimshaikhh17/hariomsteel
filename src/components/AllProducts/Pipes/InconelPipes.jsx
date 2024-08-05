import React from "react";
import Layout from "../../common/Layout";
import inconelPipes from "../../../assets/allProductsImages/Inconel pipes.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const InconelPipes = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Inconel Pipes
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={inconelPipes}
                                    alt="Inconel Pipes"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Inconel pipes are high-performance pipes made from nickel-chromium-based alloys known for their excellent resistance to extreme temperatures and harsh environments. They are designed to perform well in high-temperature applications and corrosive environments, making them suitable for industries like aerospace, chemical processing, and power generation.
                                </p>
                                <p className="mb-2">
                                    The exceptional strength and oxidation resistance of Inconel pipes make them ideal for applications requiring durability and reliability under extreme conditions. They maintain their mechanical properties even in high-temperature and corrosive environments.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Outstanding high-temperature strength</li>
                                    <li>Excellent resistance to oxidation and corrosion</li>
                                    <li>Good thermal stability</li>
                                    <li>Resilient to thermal cycling and shock</li>
                                    <li>High tensile strength and durability</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Inconel Pipes
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        High-Temperature Strength: Inconel pipes retain their strength and integrity at elevated temperatures, making them suitable for extreme thermal conditions.
                                    </li>
                                    <li>
                                        Corrosion and Oxidation Resistance: They offer superior resistance to oxidation and corrosion, particularly in environments involving high-temperature gases and corrosive fluids.
                                    </li>
                                    <li>
                                        Thermal Stability: Inconel pipes are designed to maintain their mechanical properties in fluctuating temperature environments, reducing the risk of failure.
                                    </li>
                                    <li>
                                        Resistance to Thermal Cycling: They withstand the stresses of thermal cycling, which contributes to their longevity and reliability in various applications.
                                    </li>
                                    <li>
                                        High Strength-to-Weight Ratio: The high strength of Inconel pipes ensures they perform well under mechanical stress while being lightweight compared to other materials.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Inconel Pipe Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available in Various Grades: Inconel pipes come in different grades, such as Inconel 600, 625, and 718, each providing unique properties for specific applications.
                                    </li>
                                    <li>
                                        Seamless and Welded Options: Inconel pipes are offered in both seamless and welded forms to suit various operational requirements.
                                    </li>
                                    <li>
                                        Aesthetic and Functional Finishes: The surface of Inconel pipes can be finished to meet aesthetic and functional requirements, making them suitable for visible installations and harsh environments.
                                    </li>
                                    <li>
                                        Chemical Resistance: These pipes exhibit excellent resistance to a broad range of chemicals, enhancing their suitability for diverse industrial applications.
                                    </li>
                                    <li>
                                        High Resistance to Scaling and Pitting: Inconel pipes resist scaling and pitting, helping them maintain their performance over time.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Inconel Pipe Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Inconel Grades 600, 625, 718
                                    </li>
                                    <li>
                                        Size Range: From 1/8" to 24" in diameter, with custom sizes available upon request
                                    </li>
                                    <li>
                                        Wall Thickness: Available in various thicknesses, including Schedule 10, 40, and 80
                                    </li>
                                    <li>
                                        Pressure Rating: Class 150 to 2500, depending on the pipe size and wall thickness
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM B167, ASTM B168, ASTM B705, ASTM B829
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including annealed, pickled, and polished
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={inconelPipes}
                                alt="Inconel Pipes"
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

export default InconelPipes;
