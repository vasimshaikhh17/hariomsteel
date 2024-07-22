import React from "react";
import Layout from "../../common/Layout";
import heavyHexNutsImage from "../../../assets/allProductsImages/Heavy-hex-nuts.webp";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const HeavyHexNutss = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Heavy Hex Nuts
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={heavyHexNutsImage}
                                    alt="Heavy Hex Nuts"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Heavy Hex Nuts are high-strength fastening components designed to pair with heavy hex bolts for securing various structures and machinery. They feature a thicker and wider design compared to standard hex nuts, providing increased load-bearing capacity and resistance to stress. Heavy Hex Nuts are commonly used in construction, industrial, and structural applications where high strength and durability are required.
                                </p>
                                <p className="mb-2">
                                    These nuts are ideal for use in environments subject to heavy loads and high-stress conditions, ensuring a secure and reliable connection.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength and load-bearing capacity</li>
                                    <li>Thicker and wider design for increased torque</li>
                                    <li>Suitable for heavy-duty applications</li>
                                    <li>Durable construction for long-term use</li>
                                    <li>Available in various materials and sizes</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Heavy Hex Nuts
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Superior Strength: Designed to handle high loads and stresses with ease.
                                    </li>
                                    <li>
                                        Durable Construction: Made from high-quality materials such as carbon steel, alloy steel, or stainless steel.
                                    </li>
                                    <li>
                                        Enhanced Torque Capability: The larger hex shape allows for greater torque during installation.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Options available with coatings to withstand harsh environments.
                                    </li>
                                    <li>
                                        Easy to Install: Compatible with standard tools for straightforward installation.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Heavy Hex Nut Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Typically available in carbon steel, stainless steel, and alloy steel.
                                    </li>
                                    <li>
                                        Size Variations: Available in various diameters and thicknesses to match different bolt sizes.
                                    </li>
                                    <li>
                                        High Load Ratings: Designed to handle substantial loads, with specific load ratings provided.
                                    </li>
                                    <li>
                                        Compliance: Meets industry standards and specifications for strength and performance.
                                    </li>
                                    <li>
                                        Finish Options: Various finishes available, including zinc-plated, hot-dip galvanized, and plain steel.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Heavy Hex Nut Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Carbon Steel, Alloy Steel, Stainless Steel
                                    </li>
                                    <li>
                                        Size Range: From 1/2" to 6" in diameter, with various thicknesses available
                                    </li>
                                    <li>
                                        Thread Type: Available in coarse and fine threads to suit different applications
                                    </li>
                                    <li>
                                        Load Ratings: Designed for high load capacities, with detailed ratings available
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM A194, ASTM A563, ASTM F436
                                    </li>
                                    <li>
                                        Finish Options: Includes options such as galvanized, black oxide, and plain steel
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={heavyHexNutsImage}
                                alt="Heavy Hex Nuts"
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

export default HeavyHexNutss;
