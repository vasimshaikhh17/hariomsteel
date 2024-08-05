import React from "react";
import Layout from "../../common/Layout";
import buttweldCross from "../../../assets/allProductsImages/Buttweld Cross.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const ButtweldCross = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Buttweld Cross
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={buttweldCross}
                                    alt="Buttweld Cross"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Buttweld Crosses are critical components used in piping systems to split or combine the flow of fluids. They feature four openings in a cross shape, allowing for connections at right angles. Buttweld Crosses are widely used in industries such as oil and gas, chemical processing, and power generation due to their strength and durability.
                                </p>
                                <p className="mb-2">
                                    These fittings ensure a secure and leak-proof connection, making them suitable for high-pressure and high-temperature applications.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Reliable and leak-proof connections</li>
                                    <li>High strength and durability</li>
                                    <li>Suitable for high-pressure applications</li>
                                    <li>Versatile usage in various industries</li>
                                    <li>Available in different materials and sizes</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Buttweld Crosses
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Robust Construction: Made from high-quality materials to withstand extreme conditions.
                                    </li>
                                    <li>
                                        Leak-Proof Design: Ensures no fluid escapes, maintaining system efficiency and safety.
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
                                    Buttweld Cross Characteristics
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
                                        Seamless and Welded Options: Available in both seamless and welded forms to suit various operational needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Buttweld Cross Specifications
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

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={buttweldCross}
                                alt="Buttweld Cross"
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

export default ButtweldCross;
