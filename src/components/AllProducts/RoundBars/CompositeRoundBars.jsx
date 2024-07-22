import React from "react";
import Layout from "../../common/Layout";
import compositeRoundBars from "../../../assets/allProductsImages/Composite Round Bars.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const CompositeRoundBars = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Composite Round Bars
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={compositeRoundBars}
                                    alt="Composite Round Bars"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Composite round bars are engineered materials made by combining two or more distinct materials to achieve superior properties. These bars are designed to provide a balance of strength, lightweight characteristics, and resistance to various environmental factors. Composite materials often include fibers or resins that enhance their mechanical and thermal performance.
                                </p>
                                <p className="mb-2">
                                    Ideal for applications where traditional metals might not suffice, composite round bars are used in aerospace, automotive, and other high-performance industries due to their enhanced properties.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength-to-weight ratio</li>
                                    <li>Enhanced corrosion resistance</li>
                                    <li>Good thermal stability</li>
                                    <li>Customizable properties</li>
                                    <li>Lightweight</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Composite Round Bars
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Strength-to-Weight Ratio: Composite round bars offer exceptional strength while being lighter than traditional metals.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Designed to resist corrosion and degradation, making them suitable for harsh environments.
                                    </li>
                                    <li>
                                        Thermal Stability: Maintains performance and stability in varying temperatures.
                                    </li>
                                    <li>
                                        Customizable: Properties can be tailored to meet specific application requirements, including stiffness, flexibility, and weight.
                                    </li>
                                    <li>
                                        Durability: Provides long-lasting performance with minimal maintenance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Composite Round Bar Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Composition: Typically made from a combination of fibers (such as carbon or glass) and resins.
                                    </li>
                                    <li>
                                        Surface Finish: Available in various finishes, including matte, glossy, and textured.
                                    </li>
                                    <li>
                                        Diameter Range: Composite round bars come in a range of diameters, with custom sizes available upon request.
                                    </li>
                                    <li>
                                        Fabrication: Can be machined and shaped to meet specific design requirements.
                                    </li>
                                    <li>
                                        Standards: Complies with relevant industry standards for composite materials.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Composite Round Bar Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Composite materials such as carbon fiber-reinforced polymer (CFRP) or glass fiber-reinforced polymer (GFRP)
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
                                        Standards and Specifications: ASTM D3039, ASTM D3518
                                    </li>
                                    <li>
                                        Finish Options: Available in matte, glossy, and textured finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={compositeRoundBars}
                                alt="Composite Round Bars"
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

export default CompositeRoundBars;
