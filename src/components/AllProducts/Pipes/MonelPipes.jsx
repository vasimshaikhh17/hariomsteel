import React from "react";
import Layout from "../../common/Layout";
import monelPipes from "../../../assets/allProductsImages/Monel Pipes.jpeg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const MonelPipes = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Monel Pipes
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={monelPipes}
                                    alt="Monel Pipes"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Monel pipes are made from a nickel-copper alloy known for their exceptional resistance to corrosion, especially in seawater and other harsh environments. They offer a combination of strength and corrosion resistance, making them ideal for applications in marine environments, chemical processing, and oil and gas industries.
                                </p>
                                <p className="mb-2">
                                    The inherent properties of Monel pipes include excellent resistance to saltwater, high temperatures, and various acids. Their durability and strength make them a reliable choice for demanding industrial applications.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Outstanding resistance to seawater and other corrosive environments</li>
                                    <li>High strength and toughness</li>
                                    <li>Good resistance to high temperatures</li>
                                    <li>Excellent fatigue resistance</li>
                                    <li>Low thermal expansion</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Monel Pipes
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Monel pipes exhibit superior resistance to a wide range of corrosive environments, including seawater, acids, and alkalis.
                                    </li>
                                    <li>
                                        High Strength: These pipes have high tensile strength and are capable of withstanding significant mechanical stress.
                                    </li>
                                    <li>
                                        Temperature Tolerance: Monel pipes can endure high temperatures, making them suitable for use in both elevated and cryogenic conditions.
                                    </li>
                                    <li>
                                        Good Fabricability: They can be easily fabricated, welded, and machined, which adds to their versatility in various applications.
                                    </li>
                                    <li>
                                        Durability: The robust nature of Monel pipes ensures longevity and reduces the need for frequent replacements or maintenance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Monel Pipe Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available Grades: Monel pipes are offered in various grades, such as Monel 400 and Monel K-500, each with specific properties for different applications.
                                    </li>
                                    <li>
                                        Seamless and Welded Options: They are available in both seamless and welded forms to meet different application requirements.
                                    </li>
                                    <li>
                                        High Strength-to-Weight Ratio: Monel pipes provide high strength while maintaining a relatively lightweight profile.
                                    </li>
                                    <li>
                                        Aesthetic and Functional Finishes: The smooth and polished surface of Monel pipes enhances their appearance and functionality.
                                    </li>
                                    <li>
                                        Resistance to Scaling and Pitting: They resist scaling and pitting, which helps in maintaining their performance and appearance over time.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Monel Pipe Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Monel 400, Monel K-500
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
                                        Standards and Specifications: ASTM B163, ASTM B164, ASTM B725, ASTM B730
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including annealed, pickled, and polished
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={monelPipes}
                                alt="Monel Pipes"
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

export default MonelPipes;
