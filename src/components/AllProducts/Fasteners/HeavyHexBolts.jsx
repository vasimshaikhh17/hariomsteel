import React from "react";
import Layout from "../../common/Layout";
import heavyHexBoltsImage from "../../../assets/allProductsImages/Heavy-Hex-Bolt.webp";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const HeavyHexBolts = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Heavy Hex Bolts
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={heavyHexBoltsImage}
                                    alt="Heavy Hex Bolts"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Heavy Hex Bolts are robust and high-strength fasteners used in demanding applications requiring enhanced load-bearing capacity. They are designed with a thicker and wider hex head compared to standard hex bolts, allowing for increased torque and stability. These bolts are commonly used in construction, heavy machinery, and structural applications where high strength and durability are essential.
                                </p>
                                <p className="mb-2">
                                    Ideal for securing heavy components and structures, Heavy Hex Bolts offer excellent performance under high-stress conditions, ensuring a secure and reliable connection.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Enhanced load-bearing capacity</li>
                                    <li>Thicker and wider hex head for increased torque</li>
                                    <li>Suitable for high-stress and demanding applications</li>
                                    <li>High strength and durability for long-term use</li>
                                    <li>Available in various materials and sizes</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Heavy Hex Bolts
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Superior Strength: Designed to handle high loads and stress.
                                    </li>
                                    <li>
                                        Durable Construction: Made from high-quality steel or stainless steel for durability.
                                    </li>
                                    <li>
                                        Enhanced Torque Capability: The larger hex head allows for greater torque during installation.
                                    </li>
                                    <li>
                                        Corrosion Resistant: Options available with protective coatings for harsh environments.
                                    </li>
                                    <li>
                                        Easy to Install: Compatible with standard tools and equipment for straightforward installation.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Heavy Hex Bolt Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Typically made from carbon steel, alloy steel, or stainless steel for various applications.
                                    </li>
                                    <li>
                                        Size Variations: Available in different diameters and lengths to suit specific needs.
                                    </li>
                                    <li>
                                        High Load Ratings: Rated for high loads and stress to ensure reliability.
                                    </li>
                                    <li>
                                        Compliance: Meets industry standards and specifications for performance and safety.
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including zinc-plated, hot-dip galvanized, and black oxide.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Heavy Hex Bolt Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Carbon Steel, Alloy Steel, Stainless Steel
                                    </li>
                                    <li>
                                        Size Range: From 1/2" to 4" in diameter, with various lengths available
                                    </li>
                                    <li>
                                        Thread Type: Available in coarse and fine threads to match different applications
                                    </li>
                                    <li>
                                        Load Ratings: Designed to handle significant loads, with detailed load capacities available upon request
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM A325, ASTM A490, ASTM F3125
                                    </li>
                                    <li>
                                        Finish Options: Includes options such as galvanized, black oxide, and plain steel
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={heavyHexBoltsImage}
                                alt="Heavy Hex Bolts"
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

export default HeavyHexBolts;
