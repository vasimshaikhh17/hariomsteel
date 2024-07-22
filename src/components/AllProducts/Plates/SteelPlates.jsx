import React from "react";
import Layout from "../../common/Layout";
import steelPlates from "../../../assets/allProductsImages/Steel Plates.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const SteelPlates = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Steel Plates
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={steelPlates}
                                    alt="Steel Plates"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Steel plates are fundamental components in various industries due to their strength, durability, and versatility. Made from carbon steel, alloy steel, or stainless steel, these plates are used in construction, manufacturing, and engineering applications. Their high tensile strength and resistance to impact and wear make them suitable for heavy-duty uses.
                                </p>
                                <p className="mb-2">
                                    Steel plates are available in a range of grades and sizes, making them adaptable to different operational requirements.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength and durability</li>
                                    <li>Resistance to impact and wear</li>
                                    <li>Versatility in applications</li>
                                    <li>Available in various grades and sizes</li>
                                    <li>Cost-effective and widely used</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Steel Plates
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Strength: Steel plates offer exceptional strength and can handle substantial loads and stresses.
                                    </li>
                                    <li>
                                        Durability: Known for their durability, steel plates resist wear and tear, making them ideal for demanding applications.
                                    </li>
                                    <li>
                                        Versatility: Available in various grades such as carbon steel, alloy steel, and stainless steel, each suited for specific needs.
                                    </li>
                                    <li>
                                        Fabrication: Steel plates can be easily cut, welded, and shaped to meet specific project requirements.
                                    </li>
                                    <li>
                                        Cost-Effective: Generally more affordable compared to other metals while providing reliable performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Steel Plate Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Grades: Includes various grades such as A36, A516, A572, and stainless steel grades like 304 and 316.
                                    </li>
                                    <li>
                                        Surface Finish: Available in hot-rolled, cold-rolled, and coated finishes.
                                    </li>
                                    <li>
                                        Thickness Range: Steel plates come in a wide range of thicknesses, from thin sheets to heavy plates.
                                    </li>
                                    <li>
                                        Fabrication: Can be processed into various shapes and sizes for specific applications.
                                    </li>
                                    <li>
                                        Standards: Complies with various industry standards and specifications for quality and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Steel Plate Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Carbon Steel (A36, A572), Alloy Steel (A514, A517), Stainless Steel (304, 316)
                                    </li>
                                    <li>
                                        Size Range: Custom sizes available, with standard plates typically up to 96" x 240"
                                    </li>
                                    <li>
                                        Thickness Range: From 0.125" to 12" thick, with custom thicknesses available upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM A36, ASTM A572, ASTM A514, ASTM A516
                                    </li>
                                    <li>
                                        Finish Options: Available in hot-rolled, cold-rolled, and various coatings
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={steelPlates}
                                alt="Steel Plates"
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

export default SteelPlates;
