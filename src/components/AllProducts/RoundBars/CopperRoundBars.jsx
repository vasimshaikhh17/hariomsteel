import React from "react";
import Layout from "../../common/Layout";
import copperRoundBars from "../../../assets/allProductsImages/Copper Round Bars.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const CopperRoundBars = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Copper Round Bars
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={copperRoundBars}
                                    alt="Copper Round Bars"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Copper round bars are widely utilized in various industries due to their excellent conductivity, corrosion resistance, and ease of fabrication. Copper's superior thermal and electrical conductivity makes these bars ideal for applications in electrical systems, plumbing, and industrial manufacturing.
                                </p>
                                <p className="mb-2">
                                    Copper round bars are valued for their high strength, ductility, and resistance to oxidation, making them suitable for a broad range of industrial and engineering applications.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Excellent electrical and thermal conductivity</li>
                                    <li>Corrosion resistance</li>
                                    <li>High strength and ductility</li>
                                    <li>Ease of fabrication and machining</li>
                                    <li>Versatile applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Copper Round Bars
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Electrical Conductivity: Copper round bars provide superior electrical conductivity, making them ideal for electrical applications.
                                    </li>
                                    <li>
                                        Thermal Conductivity: High thermal conductivity ensures efficient heat transfer in various applications.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Copper resists corrosion and oxidation, maintaining its performance in various environments.
                                    </li>
                                    <li>
                                        Fabrication: Easy to cut, drill, and machine, allowing for precise and custom manufacturing.
                                    </li>
                                    <li>
                                        Strength: Offers a balance of strength and ductility, making it suitable for demanding applications.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Copper Round Bar Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Composition: Pure copper or copper alloys, such as bronze or brass.
                                    </li>
                                    <li>
                                        Surface Finish: Available in various finishes, including polished, brushed, and matte.
                                    </li>
                                    <li>
                                        Diameter Range: Copper round bars come in a range of diameters, from small sizes to large bars.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily shaped and machined to meet specific needs.
                                    </li>
                                    <li>
                                        Standards: Meets industry standards for quality and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Copper Round Bar Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Pure Copper (C11000), Copper Alloys (C26000, C28000)
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
                                        Standards and Specifications: ASTM B187, ASTM B224
                                    </li>
                                    <li>
                                        Finish Options: Available in polished, brushed, and matte finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={copperRoundBars}
                                alt="Copper Round Bars"
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

export default CopperRoundBars;
