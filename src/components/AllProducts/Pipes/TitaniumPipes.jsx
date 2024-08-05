import React from "react";
import Layout from "../../common/Layout";
import titaniumPipes from "../../../assets/allProductsImages/Titanium Pipes.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const TitaniumPipes = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Titanium Pipes
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={titaniumPipes}
                                    alt="Titanium Pipes"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Titanium pipes are known for their exceptional strength, lightweight properties, and excellent corrosion resistance. Made from titanium alloys, these pipes are commonly used in high-performance applications, including aerospace, marine, and chemical processing industries. Their resistance to oxidation and ability to withstand extreme temperatures make them ideal for challenging environments.
                                </p>
                                <p className="mb-2">
                                    Titanium pipes offer superior durability and reliability, making them a preferred choice for demanding applications where strength and corrosion resistance are critical.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength-to-weight ratio</li>
                                    <li>Exceptional corrosion resistance</li>
                                    <li>Resistance to extreme temperatures</li>
                                    <li>Good fatigue resistance</li>
                                    <li>Low thermal expansion</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Titanium Pipes
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Titanium pipes exhibit excellent resistance to corrosion, including resistance to seawater and various chemicals.
                                    </li>
                                    <li>
                                        Lightweight: Titanium is significantly lighter than steel, making these pipes easier to handle and install.
                                    </li>
                                    <li>
                                        High Strength: These pipes offer superior tensile strength and can withstand significant pressure and stress.
                                    </li>
                                    <li>
                                        Temperature Tolerance: Titanium pipes perform well at high temperatures, maintaining their strength and integrity.
                                    </li>
                                    <li>
                                        Low Thermal Expansion: The material has a low coefficient of thermal expansion, ensuring stability and precision in applications involving temperature fluctuations.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Titanium Pipe Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Various Grades Available: Titanium pipes come in different grades, such as Grade 1, Grade 2, and Grade 5, each offering specific properties for different applications.
                                    </li>
                                    <li>
                                        Seamless and Welded Options: Available in both seamless and welded forms to suit various operational needs.
                                    </li>
                                    <li>
                                        High Performance: Titanium pipes deliver excellent performance in demanding environments, including high pressure and high temperature applications.
                                    </li>
                                    <li>
                                        Durability: Known for their durability and resistance to wear and tear, ensuring long-term reliability.
                                    </li>
                                    <li>
                                        Customization: Titanium pipes can be customized in terms of size, thickness, and finish to meet specific application requirements.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Titanium Pipe Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Titanium Grade 1, Grade 2, Grade 5 (Ti-6Al-4V)
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
                                        Standards and Specifications: ASTM B337, ASTM B338, ASTM B861, ISO 5832-2
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including annealed, pickled, and polished
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={titaniumPipes}
                                alt="Titanium Pipes"
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

export default TitaniumPipes;
