import React from "react";
import Layout from "../../common/Layout";
import steelRoundBars from "../../../assets/allProductsImages/Steel Round Bars.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const SteelRoundBars = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Steel Round Bars
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={steelRoundBars}
                                    alt="Steel Round Bars"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Steel round bars are known for their high strength, durability, and versatility. Made from various steel alloys, these bars are used in a wide range of applications, including construction, manufacturing, and engineering. Their robustness and ability to withstand heavy loads make them ideal for structural and mechanical uses.
                                </p>
                                <p className="mb-2">
                                    Steel round bars come in various grades and sizes, allowing for customization based on specific application requirements.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength and durability</li>
                                    <li>Versatility in applications</li>
                                    <li>Good machinability</li>
                                    <li>Resistance to wear and tear</li>
                                    <li>Variety of grades available</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Steel Round Bars
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Strength: Steel round bars offer high tensile strength, making them suitable for structural and load-bearing applications.
                                    </li>
                                    <li>
                                        Durability: Provides excellent resistance to wear and tear, ensuring long-term reliability.
                                    </li>
                                    <li>
                                        Versatility: Can be used in a wide range of applications, from construction to machinery.
                                    </li>
                                    <li>
                                        Machinability: Steel round bars are relatively easy to machine, allowing for precise cuts and shapes.
                                    </li>
                                    <li>
                                        Variety: Available in different grades and sizes to meet specific application needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Steel Round Bar Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Grades: Includes various steel grades such as ASTM A36, AISI 1018, AISI 1045, and Alloy Steel.
                                    </li>
                                    <li>
                                        Surface Finish: Available in different finishes, including hot-rolled, cold-rolled, and polished.
                                    </li>
                                    <li>
                                        Diameter Range: Steel round bars are available in a range of diameters, with custom sizes available upon request.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily cut, machined, and shaped to meet specific design requirements.
                                    </li>
                                    <li>
                                        Standards: Complies with industry standards for steel materials.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Steel Round Bar Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Steel (ASTM A36, AISI 1018, AISI 1045, Alloy Steel)
                                    </li>
                                    <li>
                                        Diameter Range: Custom diameters available, with standard bars typically ranging from 1/4" to 12" in diameter
                                    </li>
                                    <li>
                                        Length: Available in standard lengths, with custom lengths upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM A36, ASTM A572, ASTM A513
                                    </li>
                                    <li>
                                        Finish Options: Available in hot-rolled, cold-rolled, and polished finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={steelRoundBars}
                                alt="Steel Round Bars"
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

export default SteelRoundBars;
