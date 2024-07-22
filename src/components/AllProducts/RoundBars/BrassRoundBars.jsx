import React from "react";
import Layout from "../../common/Layout";
import brassRoundBars from "../../../assets/allProductsImages/Brass Round Bars.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const BrassRoundBars = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Brass Round Bars
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={brassRoundBars}
                                    alt="Brass Round Bars"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Brass round bars are widely used in manufacturing and engineering applications due to their machinability, corrosion resistance, and attractive appearance. Made from an alloy of copper and zinc, brass round bars offer good mechanical properties and are often used in applications where both strength and aesthetic appeal are important.
                                </p>
                                <p className="mb-2">
                                    Commonly used in industries such as automotive, plumbing, and decorative arts, brass round bars provide a durable and versatile option for a wide range of applications.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Good machinability</li>
                                    <li>Corrosion resistance</li>
                                    <li>Attractive appearance</li>
                                    <li>High strength and durability</li>
                                    <li>Versatility in applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Brass Round Bars
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Machinability: Brass round bars are easy to machine, allowing for precise fabrication and customization.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Provides excellent resistance to corrosion, making it suitable for use in harsh environments.
                                    </li>
                                    <li>
                                        Appearance: Brass has a shiny, gold-like appearance that is often desirable for decorative and aesthetic applications.
                                    </li>
                                    <li>
                                        Strength: Offers good strength and durability, making it ideal for mechanical and structural components.
                                    </li>
                                    <li>
                                        Versatility: Suitable for a wide range of applications, from plumbing fittings to ornamental parts.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Brass Round Bar Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Composition: Made from an alloy of copper and zinc, with variations such as C36000 (Free-Cutting Brass) and C26000 (Cartridge Brass).
                                    </li>
                                    <li>
                                        Surface Finish: Available in various finishes, including polished, brushed, and matte.
                                    </li>
                                    <li>
                                        Diameter Range: Brass round bars are available in a range of diameters, with custom sizes available upon request.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily machined, cut, and shaped to meet specific design needs.
                                    </li>
                                    <li>
                                        Standards: Complies with industry standards for brass materials.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Brass Round Bar Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Brass (C36000, C26000, C46400)
                                    </li>
                                    <li>
                                        Diameter Range: Custom diameters available, with standard bars typically ranging from 1/8" to 12" in diameter
                                    </li>
                                    <li>
                                        Length: Available in standard lengths, with custom lengths upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM B16, ASTM B36, ASTM B124
                                    </li>
                                    <li>
                                        Finish Options: Available in polished, brushed, and matte finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={brassRoundBars}
                                alt="Brass Round Bars"
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

export default BrassRoundBars;
