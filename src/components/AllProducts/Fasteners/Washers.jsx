import React from "react";
import Layout from "../../common/Layout";
import washersImage from "../../../assets/allProductsImages/washers.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const Washers = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Washers
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={washersImage}
                                    alt="Washers"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Washers are essential components used in various fastening applications to distribute the load of a fastener and prevent damage to the surfaces being joined. They come in various shapes and materials, providing support and stability in assemblies. Washers help to improve the integrity of the joint and prevent loosening over time due to vibration or thermal expansion.
                                </p>
                                <p className="mb-2">
                                    They are widely used in construction, automotive, and machinery industries to ensure secure and stable connections.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Distributes load evenly to prevent surface damage</li>
                                    <li>Helps prevent loosening of fasteners</li>
                                    <li>Available in various shapes and materials</li>
                                    <li>Enhances stability and integrity of assemblies</li>
                                    <li>Used in diverse industries including construction and automotive</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Washers
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Load Distribution: Helps distribute the load of a fastener evenly to reduce stress on the surface.
                                    </li>
                                    <li>
                                        Vibration Resistance: Prevents loosening due to vibrations and thermal expansion.
                                    </li>
                                    <li>
                                        Various Types: Includes flat washers, spring washers, and lock washers to suit different applications.
                                    </li>
                                    <li>
                                        Material Options: Available in materials like steel, stainless steel, brass, and plastic.
                                    </li>
                                    <li>
                                        Versatile Use: Suitable for a wide range of fastening applications across different industries.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Washer Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Commonly made from steel, stainless steel, brass, or plastic, depending on the application.
                                    </li>
                                    <li>
                                        Types: Includes flat washers, spring washers, and lock washers, each serving a specific purpose.
                                    </li>
                                    <li>
                                        Size Variations: Available in a range of sizes to fit different fasteners and applications.
                                    </li>
                                    <li>
                                        Customization: Can be customized in terms of size, material, and finish to meet specific needs.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Options available for environments that require resistance to corrosion and wear.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Washer Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Steel, Stainless Steel, Brass, Plastic
                                    </li>
                                    <li>
                                        Size Range: Available in various diameters and thicknesses
                                    </li>
                                    <li>
                                        Types: Flat Washers, Spring Washers, Lock Washers
                                    </li>
                                    <li>
                                        Standards and Specifications: Compliant with standards like ANSI, DIN, and ISO
                                    </li>
                                    <li>
                                        Finish Options: Includes options such as zinc-plated, galvanized, and coated for corrosion resistance
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={washersImage}
                                alt="Washers"
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
                                If you require any further information, please do not hesitate to contact us.
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

export default Washers;
