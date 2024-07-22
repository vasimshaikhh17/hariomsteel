import React from "react";
import Layout from "../../common/Layout";
import zincRoundBars from "../../../assets/allProductsImages/Zinc Round Bars.jpeg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const ZincRoundBars = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Zinc Round Bars
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={zincRoundBars}
                                    alt="Zinc Round Bars"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Zinc round bars are widely used in various industrial applications due to their corrosion resistance, ease of machining, and good mechanical properties. Zinc, often used in alloy form, provides excellent protection against rust and degradation, making these bars ideal for components exposed to harsh environments.
                                </p>
                                <p className="mb-2">
                                    Commonly used in manufacturing and construction, zinc round bars offer durability and reliability, making them a versatile material choice for many projects.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Corrosion resistance</li>
                                    <li>Good machinability</li>
                                    <li>Versatile applications</li>
                                    <li>Durable and reliable</li>
                                    <li>Easy to work with</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Zinc Round Bars
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Zinc round bars offer excellent resistance to corrosion, protecting against rust and environmental damage.
                                    </li>
                                    <li>
                                        Machinability: Zinc is easy to machine, making it suitable for precise manufacturing and customization.
                                    </li>
                                    <li>
                                        Strength: Provides good strength and durability for various industrial applications.
                                    </li>
                                    <li>
                                        Versatility: Can be used in a wide range of applications including construction, automotive, and manufacturing.
                                    </li>
                                    <li>
                                        Cost-Effective: Generally more affordable compared to other metals, offering a budget-friendly option for many projects.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Zinc Round Bar Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Composition: Typically alloyed with other metals such as aluminum or copper to enhance properties.
                                    </li>
                                    <li>
                                        Surface Finish: Available in various finishes, including polished, brushed, and matte.
                                    </li>
                                    <li>
                                        Diameter Range: Zinc round bars come in a range of diameters, from small sizes to large bars.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily cut, drilled, and machined to meet specific requirements.
                                    </li>
                                    <li>
                                        Standards: Meets industry standards for quality and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Zinc Round Bar Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Zinc alloy, often combined with aluminum or copper
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
                                        Standards and Specifications: ASTM B69, ASTM B570
                                    </li>
                                    <li>
                                        Finish Options: Available in polished, brushed, and matte finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={zincRoundBars}
                                alt="Zinc Round Bars"
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

export default ZincRoundBars;
