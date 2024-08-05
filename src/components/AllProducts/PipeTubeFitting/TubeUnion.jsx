import React from "react";
import Layout from "../../common/Layout";
import tubeUnion from "../../../assets/allProductsImages/TUBE UNION.jpeg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const TubeUnion = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Tube Union
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={tubeUnion}
                                    alt="Tube Union"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Tube Unions are vital components in piping systems, designed to allow for the easy assembly and disassembly of pipes or tubes. These fittings consist of three parts: a body, a nut, and a union end, which together enable the connection and separation of pipes or tubes without requiring the entire system to be dismantled. Tube Unions are commonly used in various applications, including plumbing, chemical processing, and industrial systems, where frequent maintenance or replacement of components is necessary.
                                </p>
                                <p className="mb-2">
                                    Made from high-quality materials, Tube Unions provide reliable performance and durability, ensuring leak-proof connections and ease of maintenance.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Facilitates easy assembly and disassembly</li>
                                    <li>Provides a secure and leak-proof connection</li>
                                    <li>Durable and resistant to wear</li>
                                    <li>Suitable for various applications</li>
                                    <li>Available in different materials and sizes</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Tube Unions
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Easy to Use: Designed for quick and simple assembly and disassembly without tools.
                                    </li>
                                    <li>
                                        Leak-Proof: Ensures a tight and reliable seal to prevent leaks.
                                    </li>
                                    <li>
                                        High Durability: Constructed from durable materials to withstand harsh conditions.
                                    </li>
                                    <li>
                                        Versatile: Suitable for a wide range of applications, including plumbing and industrial systems.
                                    </li>
                                    <li>
                                        Corrosion Resistant: Made from materials that resist corrosion, ensuring longevity and reliability.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Tube Union Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Available in various materials, such as stainless steel, brass, and plastic, to meet different application needs.
                                    </li>
                                    <li>
                                        Size Variations: Comes in multiple sizes to fit different pipe or tube diameters.
                                    </li>
                                    <li>
                                        Customizable: Customizable in terms of size, material, and finish to suit specific requirements.
                                    </li>
                                    <li>
                                        High Performance: Ensures reliable performance and ease of maintenance in various environments.
                                    </li>
                                    <li>
                                        Connection Types: Available in various connection types, including threaded and compression, to accommodate different systems.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Tube Union Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Stainless Steel, Brass, Plastic
                                    </li>
                                    <li>
                                        Size Range: From 1/8" to 6" in diameter, with custom sizes available upon request
                                    </li>
                                    <li>
                                        Pressure Rating: Varies depending on material and size, typically up to 3000 psi
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM, ISO, SAE
                                    </li>
                                    <li>
                                        Connection Types: Threaded, Compression
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including polished, plated, and coated
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={tubeUnion}
                                alt="Tube Union"
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

export default TubeUnion;
