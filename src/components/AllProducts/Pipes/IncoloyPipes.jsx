import React from "react";
import Layout from "../../common/Layout";
import incoloyPipes from "../../../assets/allProductsImages/Incoloy Pipes.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const IncoloyPipes = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Incoloy Pipes
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={incoloyPipes}
                                    alt="Incoloy Pipes"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Incoloy pipes are high-performance pipes made from nickel-chromium-based superalloys designed for high-temperature and high-corrosion environments. Known for their excellent oxidation and carburization resistance, these pipes are widely used in industries like aerospace, chemical processing, and power generation.
                                </p>
                                <p className="mb-2">
                                    The high nickel content in Incoloy pipes provides superior strength and resistance to thermal fatigue, making them suitable for extreme conditions. They are a preferred choice for applications where durability and longevity are critical.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Exceptional resistance to oxidation and carburization</li>
                                    <li>High tensile strength and durability</li>
                                    <li>Suitable for high-temperature environments</li>
                                    <li>Low thermal expansion</li>
                                    <li>Resistant to thermal fatigue</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Incoloy Pipes
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion and Oxidation Resistance: Incoloy pipes resist oxidation and carburization, making them ideal for high-temperature applications in corrosive environments.
                                    </li>
                                    <li>
                                        High Strength and Toughness: These pipes exhibit high strength and toughness, able to withstand significant mechanical stress and high temperatures without losing integrity.
                                    </li>
                                    <li>
                                        Excellent Thermal Stability: Incoloy pipes maintain their properties at elevated temperatures, offering reliable performance in extreme heat conditions.
                                    </li>
                                    <li>
                                        Resistance to Thermal Fatigue: They are designed to handle thermal cycling and thermal shock, which contributes to their longevity in harsh environments.
                                    </li>
                                    <li>
                                        Low Thermal Expansion: The low thermal expansion of Incoloy pipes ensures dimensional stability even under high-temperature conditions.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Incoloy Pipe Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Seamless and Welded Options: Available in both seamless and welded forms, Incoloy pipes offer flexibility for different applications.
                                    </li>
                                    <li>
                                        Varied Grades and Alloys: Incoloy pipes come in various grades, including Incoloy 800, 800H, and 800HT, each tailored for specific temperature and corrosion resistance needs.
                                    </li>
                                    <li>
                                        Aesthetic Qualities: The surface finish of Incoloy pipes can be polished to provide an aesthetically pleasing look for visible installations.
                                    </li>
                                    <li>
                                        Resistance to Scaling: These pipes resist scaling and fouling, maintaining their appearance and functionality over time.
                                    </li>
                                    <li>
                                        Chemical Resistance: Incoloy pipes are suitable for handling various chemicals, enhancing their applicability in chemical processing environments.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Incoloy Pipe Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Incoloy Grades 800, 800H, 800HT
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
                                        Standards and Specifications: ASTM B407, ASTM B515, ASTM B829, ASTM B677
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including annealed, pickled, and polished
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={incoloyPipes}
                                alt="Incoloy Pipes"
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

export default IncoloyPipes;
