import React from "react";
import Layout from "../../common/Layout";
import brassPlates from "../../../assets/allProductsImages/brass plates.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const BrassPlates = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Brass Plates
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={brassPlates}
                                    alt="Brass Plates"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Brass plates are known for their excellent machinability, high strength, and good corrosion resistance. Made from an alloy of copper and zinc, these plates are commonly used in various applications such as in machinery parts, decorative elements, and architectural features. Brass plates are prized for their aesthetic appeal and durability.
                                </p>
                                <p className="mb-2">
                                    The properties of brass make it suitable for applications that require a combination of strength, flexibility, and resistance to corrosion.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High machinability</li>
                                    <li>Good corrosion resistance</li>
                                    <li>Strength and durability</li>
                                    <li>Attractive appearance</li>
                                    <li>Versatile applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Brass Plates
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Machinability: Brass plates can be easily machined to complex shapes and sizes, making them ideal for precision parts.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Brass has good resistance to corrosion, including resistance to atmospheric and marine environments.
                                    </li>
                                    <li>
                                        Strength: Offers a high tensile strength and impact resistance, suitable for demanding applications.
                                    </li>
                                    <li>
                                        Aesthetic Appeal: Brass has a bright, gold-like appearance that enhances the visual appeal of finished products.
                                    </li>
                                    <li>
                                        Versatility: Used in a wide range of industries including automotive, construction, and electronics.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Brass Plate Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Alloy Composition: Typically composed of copper and zinc, with varying proportions depending on the desired properties.
                                    </li>
                                    <li>
                                        Surface Finish: Available in various finishes including polished, brushed, and matte to suit different applications.
                                    </li>
                                    <li>
                                        Thickness Range: Brass plates are available in various thicknesses to meet specific application requirements.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily cut, drilled, and shaped to meet precise design specifications.
                                    </li>
                                    <li>
                                        Thermal and Electrical Conductivity: Brass has good thermal and electrical conductivity, making it suitable for certain electrical and thermal applications.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Brass Plate Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: C26000, C28000, C36000, and other brass alloys
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
                                        Standards and Specifications: ASTM B36, ASTM B371, ASTM B455
                                    </li>
                                    <li>
                                        Finish Options: Available in polished, brushed, and other custom finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={brassPlates}
                                alt="Brass Plates"
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

export default BrassPlates;
