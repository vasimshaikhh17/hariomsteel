import React from "react";
import Layout from "../../common/Layout";
import buttweldTee from "../../../assets/allProductsImages/Buttweld Tee.jpeg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const ButtweldTee = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Buttweld Tee
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={buttweldTee}
                                    alt="Buttweld Tee"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Buttweld Tees are crucial components in piping systems, designed to combine or divide fluid flow. They feature three openings and are typically used to connect pipes of different diameters or to reroute a section of the piping system. Buttweld Tees are widely used in industries such as oil and gas, chemical processing, and power generation due to their strength and versatility.
                                </p>
                                <p className="mb-2">
                                    These fittings come in two main types: Equal Tees and Reducing Tees, each designed for specific applications to meet various operational needs.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Combines or divides fluid flow</li>
                                    <li>High strength and durability</li>
                                    <li>Suitable for high-pressure applications</li>
                                    <li>Versatile usage in various industries</li>
                                    <li>Available in different materials and sizes</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Buttweld Tees
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Robust Construction: Made from high-quality materials to withstand extreme conditions.
                                    </li>
                                    <li>
                                        Smooth Flow: Ensures a smooth transition between different pipe sizes, maintaining flow efficiency.
                                    </li>
                                    <li>
                                        High Pressure Tolerance: Can handle high-pressure environments without compromising integrity.
                                    </li>
                                    <li>
                                        Versatility: Suitable for a wide range of applications across different industries.
                                    </li>
                                    <li>
                                        Easy Installation: Designed for straightforward installation and maintenance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Buttweld Tee Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Available in various materials, such as stainless steel, carbon steel, and alloy steel, to suit different applications.
                                    </li>
                                    <li>
                                        Size Variations: Comes in multiple sizes to fit different piping requirements.
                                    </li>
                                    <li>
                                        Customization: Customizable in terms of size, material, and finish to meet specific needs.
                                    </li>
                                    <li>
                                        High Durability: Resistant to wear, corrosion, and high pressure, ensuring long-term use.
                                    </li>
                                    <li>
                                        Equal and Reducing Options: Available in both equal and reducing forms to suit various operational needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Buttweld Tee Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Stainless Steel, Carbon Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: From 1/8" to 48" in diameter, with custom sizes available upon request
                                    </li>
                                    <li>
                                        Wall Thickness: Available in various thicknesses, including Schedule 10, 40, and 80
                                    </li>
                                    <li>
                                        Pressure Rating: Class 150 to 2500, depending on the pipe size and wall thickness
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM A234, ASTM A403, ASTM A815
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including annealed, pickled, and polished
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={buttweldTee}
                                alt="Buttweld Tee"
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

export default ButtweldTee;
