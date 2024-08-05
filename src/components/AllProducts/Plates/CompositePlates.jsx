import React from "react";
import Layout from "../../common/Layout";
import compositePlates from "../../../assets/allProductsImages/CompositePlates.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const CompositePlates = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Composite Plates
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={compositePlates}
                                    alt="Composite Plates"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Composite plates are engineered materials that combine multiple components to achieve superior properties. These plates typically consist of a core material sandwiched between two outer layers of different materials, resulting in enhanced strength-to-weight ratios, improved durability, and additional functionalities. Commonly used in aerospace, automotive, and construction industries, composite plates offer a versatile solution for demanding applications.
                                </p>
                                <p className="mb-2">
                                    The composite construction allows for tailored properties such as lightweight construction, high impact resistance, and resistance to environmental factors.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength-to-weight ratio</li>
                                    <li>Enhanced impact resistance</li>
                                    <li>Excellent durability</li>
                                    <li>Customizable properties</li>
                                    <li>Resistance to environmental factors</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Composite Plates
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Lightweight: Composite plates are significantly lighter than traditional materials, making them ideal for applications where weight is a critical factor.
                                    </li>
                                    <li>
                                        High Strength: These plates offer high strength and rigidity while maintaining a low weight, suitable for structural applications.
                                    </li>
                                    <li>
                                        Impact Resistance: Composite materials are designed to absorb and dissipate impact energy, providing excellent protection against damage.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Many composites are resistant to corrosion, making them suitable for use in harsh environments.
                                    </li>
                                    <li>
                                        Customizability: The properties of composite plates can be tailored to meet specific performance requirements through the choice of core and outer materials.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Composite Plate Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Core Materials: Common core materials include honeycomb structures, foam cores, and balsa wood, each offering different performance benefits.
                                    </li>
                                    <li>
                                        Outer Layers: Typically made from high-strength materials such as fiberglass, carbon fiber, or aramid fibers to provide structural integrity.
                                    </li>
                                    <li>
                                        Manufacturing Techniques: Composite plates can be manufactured using techniques such as lay-up, vacuum bagging, and autoclave processing to achieve desired properties.
                                    </li>
                                    <li>
                                        Thermal Properties: Composites can be designed to withstand high temperatures and provide thermal insulation.
                                    </li>
                                    <li>
                                        Acoustic Properties: Some composites are designed to offer sound dampening and acoustic insulation benefits.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Composite Plate Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Core Types: Honeycomb, foam, balsa wood, and custom core materials
                                    </li>
                                    <li>
                                        Outer Layer Materials: Fiberglass, carbon fiber, aramid fiber, and other high-strength composites
                                    </li>
                                    <li>
                                        Thickness Range: Customizable based on application requirements
                                    </li>
                                    <li>
                                        Size Range: Available in various sizes, typically up to 96" x 120" with custom sizes upon request
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM D638, ASTM D790, ISO 527, ISO 14125
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes including smooth, textured, and custom coatings
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={compositePlates}
                                alt="Composite Plates"
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

export default CompositePlates;
