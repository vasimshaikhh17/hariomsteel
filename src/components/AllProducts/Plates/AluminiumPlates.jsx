import React from "react";
import Layout from "../../common/Layout";
import aluminiumPlates from "../../../assets/allProductsImages/Aluminium Plates.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const AluminiumPlates = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Aluminium Plates
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={aluminiumPlates}
                                    alt="Aluminium Plates"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Aluminium plates are versatile and widely used in various industries due to their lightweight, durability, and excellent resistance to corrosion. These plates are manufactured from high-quality aluminium alloys and are used in applications ranging from aerospace and automotive to construction and manufacturing. Their properties make them ideal for use in environments where strength and reliability are crucial.
                                </p>
                                <p className="mb-2">
                                    Aluminium plates offer a balance of strength, weight, and corrosion resistance, making them suitable for a broad range of applications.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Lightweight and durable</li>
                                    <li>Excellent corrosion resistance</li>
                                    <li>Versatile applications</li>
                                    <li>High strength-to-weight ratio</li>
                                    <li>Customizable in thickness and size</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Aluminium Plates
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Lightweight: Aluminium plates are much lighter than steel, which makes them easier to handle and reduces transportation costs.
                                    </li>
                                    <li>
                                        High Strength: Despite their light weight, aluminium plates offer significant strength and rigidity.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Aluminium naturally forms a protective oxide layer, which makes it highly resistant to corrosion.
                                    </li>
                                    <li>
                                        Versatility: Suitable for a variety of applications, including structural components, panels, and decorative elements.
                                    </li>
                                    <li>
                                        Customizable: Available in different thicknesses, sizes, and finishes to meet specific requirements.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Aluminium Plate Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Alloy Options: Available in various aluminium alloys such as 2024, 6061, and 7075, each offering specific properties.
                                    </li>
                                    <li>
                                        Surface Finishes: Options include anodized, brushed, and polished finishes for aesthetic and functional purposes.
                                    </li>
                                    <li>
                                        Thickness Range: Available in a wide range of thicknesses to suit different application needs.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily cut, machined, and formed to meet specific design requirements.
                                    </li>
                                    <li>
                                        Thermal Conductivity: Good thermal conductivity, making it suitable for heat exchangers and other applications where heat dissipation is important.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Aluminium Plate Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: 2024, 6061, 7075, and other alloys
                                    </li>
                                    <li>
                                        Size Range: Custom sizes available, standard sizes include sheets up to 72" x 144"
                                    </li>
                                    <li>
                                        Thickness Range: From 0.020" to 6" thick, with custom thicknesses available upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM B209, AMS 4045, and other relevant standards
                                    </li>
                                    <li>
                                        Finish Options: Anodized, brushed, polished, or as-rolled
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={aluminiumPlates}
                                alt="Aluminium Plates"
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

export default AluminiumPlates;
