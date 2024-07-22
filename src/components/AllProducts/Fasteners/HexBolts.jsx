import React from "react";
import Layout from "../../common/Layout";
import hexBoltsImage from "../../../assets/allProductsImages/hex-bolt.jfif";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const HexBolts = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Hex Bolts
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={hexBoltsImage}
                                    alt="Hex Bolts"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Hex Bolts are standard fastening components characterized by their six-sided head, which allows for secure tightening with a wrench or socket. They are widely used in various industries including construction, automotive, and machinery due to their durability and strength. The hexagonal shape provides a greater surface area for applying torque, ensuring a tight and reliable connection.
                                </p>
                                <p className="mb-2">
                                    These bolts are available in various materials and sizes to accommodate different load requirements and environmental conditions.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Standard six-sided head for secure fastening</li>
                                    <li>Suitable for a wide range of applications</li>
                                    <li>Available in multiple materials and sizes</li>
                                    <li>Provides strong and reliable connections</li>
                                    <li>Easy to install with standard tools</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Hex Bolts
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Hexagonal Head: Allows for easy tightening and loosening with a wrench or socket.
                                    </li>
                                    <li>
                                        High Strength: Designed to withstand heavy loads and stresses.
                                    </li>
                                    <li>
                                        Versatile Use: Suitable for a variety of applications in different industries.
                                    </li>
                                    <li>
                                        Material Options: Available in materials like carbon steel, alloy steel, and stainless steel.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Options with coatings or finishes available for harsh environments.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Hex Bolt Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Commonly made from carbon steel, alloy steel, or stainless steel.
                                    </li>
                                    <li>
                                        Size Variations: Available in various diameters and lengths to fit different applications.
                                    </li>
                                    <li>
                                        Thread Types: Includes options for both coarse and fine threads.
                                    </li>
                                    <li>
                                        Load Ratings: Designed to meet specific load capacities and stress requirements.
                                    </li>
                                    <li>
                                        Customization: Can be customized in terms of size, material, and finish to meet specific needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Hex Bolt Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Carbon Steel, Alloy Steel, Stainless Steel
                                    </li>
                                    <li>
                                        Size Range: From 1/4" to 6" in diameter, with various lengths available
                                    </li>
                                    <li>
                                        Thread Types: Available in coarse and fine threads
                                    </li>
                                    <li>
                                        Strength Ratings: Designed for specific load capacities, with detailed ratings provided
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM A307, ASTM A325, ISO 4014
                                    </li>
                                    <li>
                                        Finish Options: Includes options such as galvanized, black oxide, and plain steel
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={hexBoltsImage}
                                alt="Hex Bolts"
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

export default HexBolts;
