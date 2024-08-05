import React from "react";
import Layout from "../../common/Layout";
import hastelloyPipes from "../../../assets/allProductsImages/Hastelloy pipes.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const HastelloyPipes = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Hastelloy Pipes
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={hastelloyPipes}
                                    alt="Hastelloy Pipes"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Hastelloy pipes are made from nickel-molybdenum-chromium superalloys, known for their exceptional resistance to corrosion and high-temperature stability. They are widely used in industries that require high performance and reliability in harsh environments, including chemical processing, aerospace, and marine applications.
                                </p>
                                <p className="mb-2">
                                    The robust properties of Hastelloy pipes make them an ideal choice for applications that involve exposure to corrosive chemicals, high temperatures, and extreme pressure conditions. Their excellent resistance to oxidation and reducing environments contributes to their longevity and effectiveness.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Excellent resistance to corrosion and oxidation</li>
                                    <li>High-temperature strength and stability</li>
                                    <li>Resistant to stress-corrosion cracking</li>
                                    <li>Durable and reliable in extreme environments</li>
                                    <li>Good mechanical properties at high temperatures</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Hastelloy Pipes
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Hastelloy pipes offer superior resistance to a wide range of corrosive environments, including acids, chlorides, and other aggressive chemicals.
                                    </li>
                                    <li>
                                        High-Temperature Performance: They maintain their mechanical properties and strength at elevated temperatures, making them suitable for high-temperature applications.
                                    </li>
                                    <li>
                                        Stress-Corrosion Cracking Resistance: Hastelloy pipes are resistant to stress-corrosion cracking, which enhances their durability and reliability in challenging conditions.
                                    </li>
                                    <li>
                                        Excellent Mechanical Properties: They exhibit good tensile strength, fatigue resistance, and impact toughness, ensuring long-lasting performance.
                                    </li>
                                    <li>
                                        Versatility: Available in various grades, such as Hastelloy C-276 and Hastelloy B-3, to meet different application requirements and performance criteria.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Hastelloy Pipe Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Wide Range of Grades: Hastelloy pipes are available in several grades, including Hastelloy C-276, Hastelloy B-3, and Hastelloy X, each offering specific properties for different applications.
                                    </li>
                                    <li>
                                        Seamless and Welded Options: They come in both seamless and welded forms, providing flexibility for various operational needs.
                                    </li>
                                    <li>
                                        Aesthetic and Functional Finishes: Hastelloy pipes can be finished to meet both aesthetic and functional requirements, ensuring they perform well in both visible and harsh environments.
                                    </li>
                                    <li>
                                        Resistance to Scaling and Pitting: These pipes are designed to resist scaling and pitting, which helps maintain their functionality and appearance over time.
                                    </li>
                                    <li>
                                        High Chemical Resistance: Hastelloy pipes are suitable for handling a wide range of chemicals, enhancing their applicability in chemical processing and other industries.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Hastelloy Pipe Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Hastelloy C-276, Hastelloy B-3, Hastelloy X
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
                                        Standards and Specifications: ASTM B622, ASTM B619, ASTM B626, ASTM B775
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including annealed, pickled, and polished
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={hastelloyPipes}
                                alt="Hastelloy Pipes"
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

export default HastelloyPipes;
