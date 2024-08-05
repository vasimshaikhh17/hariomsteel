import React from "react";
import Layout from "../../common/Layout";
import bronzePlates from "../../../assets/allProductsImages/bronze plates.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const BronzePlates = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Bronze Plates
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={bronzePlates}
                                    alt="Bronze Plates"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Bronze plates are known for their excellent machinability, high strength, and corrosion resistance. Made from an alloy of copper and tin, these plates are commonly used in various applications such as bearings, bushings, and architectural elements. Bronze is also valued for its wear resistance and ability to maintain a good surface finish.
                                </p>
                                <p className="mb-2">
                                    Bronze plates provide a combination of durability, strength, and aesthetic appeal, making them suitable for a wide range of applications.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength and durability</li>
                                    <li>Excellent machinability</li>
                                    <li>Good corrosion resistance</li>
                                    <li>Wear-resistant</li>
                                    <li>Versatile applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Bronze Plates
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Machinability: Bronze plates are easy to machine and can be cut, drilled, and shaped with high precision.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Bronze has excellent resistance to corrosion, particularly in marine and industrial environments.
                                    </li>
                                    <li>
                                        Strength and Durability: Offers high tensile strength and resistance to wear, making it suitable for heavy-duty applications.
                                    </li>
                                    <li>
                                        Aesthetic Appeal: Bronze has a distinctive appearance that can add a decorative touch to various products.
                                    </li>
                                    <li>
                                        Versatility: Used in a variety of industries including machinery, construction, and art.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Bronze Plate Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Alloy Composition: Typically composed of copper and tin, with varying proportions to achieve desired properties.
                                    </li>
                                    <li>
                                        Surface Finish: Available in various finishes including polished, brushed, and matte.
                                    </li>
                                    <li>
                                        Thickness Range: Bronze plates are available in different thicknesses to meet specific application needs.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily fabricated and customized for specific designs and applications.
                                    </li>
                                    <li>
                                        Thermal and Electrical Conductivity: Good conductivity, suitable for certain electrical and thermal applications.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Bronze Plate Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: C51000, C52100, C54400, and other bronze alloys
                                    </li>
                                    <li>
                                        Size Range: Custom sizes available, with standard sheets typically up to 72" x 144"
                                    </li>
                                    <li>
                                        Thickness Range: From 0.020" to 6" thick, with custom thicknesses available upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM B139, ASTM B584, ASTM B670
                                    </li>
                                    <li>
                                        Finish Options: Available in polished, brushed, and other custom finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={bronzePlates}
                                alt="Bronze Plates"
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

export default BronzePlates;
