import React from "react";
import Layout from "../../common/Layout";
import tubeTee from "../../../assets/allProductsImages/TUBE TEE.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const TubeTee = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Tube Tee
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={tubeTee}
                                    alt="Tube Tee"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Tube Tees are essential fittings in piping and tubing systems, designed to connect three sections of pipe or tube at a right angle. These fittings are commonly used in various industries, including chemical processing, oil and gas, and plumbing, to create branch connections and facilitate fluid or gas distribution.
                                </p>
                                <p className="mb-2">
                                    Tube Tees come in various sizes and materials to accommodate different operational requirements, ensuring reliable and leak-proof connections in diverse applications.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Connects three sections of pipe or tube</li>
                                    <li>High strength and durability</li>
                                    <li>Suitable for high-pressure applications</li>
                                    <li>Versatile usage in various industries</li>
                                    <li>Available in different materials and sizes</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Tube Tees
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Robust Construction: Made from high-quality materials to withstand extreme conditions.
                                    </li>
                                    <li>
                                        Secure Connections: Ensures tight and leak-proof connections, preventing fluid or gas leaks.
                                    </li>
                                    <li>
                                        Versatility: Suitable for use in a wide range of applications across different industries.
                                    </li>
                                    <li>
                                        Easy Installation: Designed for straightforward installation and maintenance.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Resistant to corrosion, ensuring longevity and reliability.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Tube Tee Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Available in various materials, such as stainless steel, carbon steel, and brass, to suit different applications.
                                    </li>
                                    <li>
                                        Size Variations: Comes in multiple sizes to fit different connection requirements.
                                    </li>
                                    <li>
                                        Customization: Customizable in terms of size, material, and finish to meet specific needs.
                                    </li>
                                    <li>
                                        High Durability: Resistant to wear, corrosion, and high pressure, ensuring long-term use.
                                    </li>
                                    <li>
                                        Connection Types: Available in various connection types, including threaded, welded, and compression, to suit different operational needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Tube Tee Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Stainless Steel, Carbon Steel, Brass
                                    </li>
                                    <li>
                                        Size Range: From 1/8" to 48" in diameter, with custom sizes available upon request
                                    </li>
                                    <li>
                                        Pressure Rating: Varies depending on material and size, typically up to 6000 psi
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM, ISO, SAE
                                    </li>
                                    <li>
                                        Connection Types: Threaded, Welded, Compression
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including polished, plated, and coated
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={tubeTee}
                                alt="Tube Tee"
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

export default TubeTee;
