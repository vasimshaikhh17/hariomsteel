import React from "react";
import Layout from "../../common/Layout";
import nickelRoundBars from "../../../assets/allProductsImages/Nickel Round Bars.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const NickelRoundBars = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Nickel Round Bars
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={nickelRoundBars}
                                    alt="Nickel Round Bars"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Nickel round bars are highly valued for their exceptional strength, resistance to corrosion, and ability to withstand high temperatures. Made from pure nickel or nickel alloys, these bars are used in a variety of industrial applications, including aerospace, chemical processing, and marine environments.
                                </p>
                                <p className="mb-2">
                                    Nickel round bars offer superior mechanical properties and durability, making them suitable for demanding environments and applications requiring high performance.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength and toughness</li>
                                    <li>Excellent corrosion resistance</li>
                                    <li>Good thermal and electrical conductivity</li>
                                    <li>Resistance to oxidation and high temperatures</li>
                                    <li>Versatile applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Nickel Round Bars
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Nickel round bars offer exceptional resistance to corrosion, including resistance to seawater and various chemicals.
                                    </li>
                                    <li>
                                        High Strength: Provides excellent tensile strength and toughness, making them suitable for high-stress applications.
                                    </li>
                                    <li>
                                        Thermal Conductivity: Good thermal conductivity helps in maintaining performance in high-temperature environments.
                                    </li>
                                    <li>
                                        Electrical Conductivity: Nickel bars exhibit good electrical conductivity, useful in electrical applications.
                                    </li>
                                    <li>
                                        Oxidation Resistance: Resistant to oxidation, ensuring long-term durability and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Nickel Round Bar Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Composition: Made from pure nickel (Nickel 200) or nickel alloys (Nickel 201, Inconel, Monel).
                                    </li>
                                    <li>
                                        Surface Finish: Available in various finishes, including polished, brushed, and matte.
                                    </li>
                                    <li>
                                        Diameter Range: Nickel round bars come in a range of diameters, with custom sizes available upon request.
                                    </li>
                                    <li>
                                        Fabrication: Can be machined and shaped to meet specific design requirements.
                                    </li>
                                    <li>
                                        Standards: Complies with relevant industry standards for nickel materials.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Nickel Round Bar Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Nickel 200, Nickel 201, Inconel, Monel
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
                                        Standards and Specifications: ASTM B160, ASTM B164, ASTM B564
                                    </li>
                                    <li>
                                        Finish Options: Available in polished, brushed, and matte finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={nickelRoundBars}
                                alt="Nickel Round Bars"
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

export default NickelRoundBars;
