import React from "react";
import Layout from "../../common/Layout";
import nickelAlloyPipes from "../../../assets/allProductsImages/Nickel Alloy Pipes.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const NickelAlloyPipes = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Nickel Alloy Pipes
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={nickelAlloyPipes}
                                    alt="Nickel Alloy Pipes"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Nickel alloy pipes are made from a range of nickel-based alloys that are known for their excellent corrosion resistance, high strength, and stability in extreme environments. These pipes are utilized in industries where high performance and durability are required, such as in chemical processing, aerospace, marine, and power generation.
                                </p>
                                <p className="mb-2">
                                    The unique properties of nickel alloys, including resistance to oxidation, high temperatures, and various corrosive substances, make these pipes suitable for demanding applications where other materials might fail.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Exceptional resistance to corrosion and oxidation</li>
                                    <li>High strength and durability</li>
                                    <li>Good performance at elevated temperatures</li>
                                    <li>Excellent resistance to various chemicals</li>
                                    <li>Versatile in a wide range of industrial applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Nickel Alloy Pipes
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Nickel alloy pipes provide superior resistance to corrosive environments, including acids, bases, and saltwater.
                                    </li>
                                    <li>
                                        High Strength: These pipes exhibit high tensile strength, making them suitable for high-pressure applications.
                                    </li>
                                    <li>
                                        Temperature Tolerance: Nickel alloy pipes perform well at both high and low temperatures, maintaining their strength and integrity.
                                    </li>
                                    <li>
                                        Chemical Resistance: They are resistant to a wide range of chemicals, including aggressive substances found in chemical processing industries.
                                    </li>
                                    <li>
                                        Fabricability: Nickel alloy pipes can be easily fabricated, welded, and machined, offering flexibility in various applications.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Nickel Alloy Pipe Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Various Grades Available: Nickel alloy pipes come in different grades, such as Inconel, Hastelloy, and Monel, each with distinct properties for specific applications.
                                    </li>
                                    <li>
                                        Seamless and Welded Options: These pipes are available in both seamless and welded forms, providing options for different operational requirements.
                                    </li>
                                    <li>
                                        High Performance: Nickel alloy pipes offer superior performance in extreme conditions, including high temperatures and aggressive chemicals.
                                    </li>
                                    <li>
                                        Durability: The robust nature of nickel alloys ensures long-lasting performance and reliability.
                                    </li>
                                    <li>
                                        Customization: Nickel alloy pipes can be customized in terms of size, thickness, and finish to meet specific application needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Nickel Alloy Pipe Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Inconel, Hastelloy, Monel
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
                                src={nickelAlloyPipes}
                                alt="Nickel Alloy Pipes"
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

export default NickelAlloyPipes;
