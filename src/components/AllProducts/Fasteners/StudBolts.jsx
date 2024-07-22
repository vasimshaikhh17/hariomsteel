import React from "react";
import Layout from "../../common/Layout";
import studBoltsImage from "../../../assets/allProductsImages/Stud-bolt.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const StudBolts = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Stud Bolts
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={studBoltsImage}
                                    alt="Stud Bolts"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Stud Bolts are versatile fastening components used in various applications to secure two or more parts together. Unlike regular bolts, stud bolts are designed with threads along their entire length, allowing for a strong and stable connection. They are commonly used in machinery, construction, and automotive applications where high-strength and reliability are required.
                                </p>
                                <p className="mb-2">
                                    Stud bolts offer flexibility in assembly and disassembly, making them ideal for situations that require frequent maintenance or adjustments.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Threaded along the entire length for secure connections</li>
                                    <li>Suitable for high-strength and heavy-duty applications</li>
                                    <li>Flexible for assembly and disassembly</li>
                                    <li>Available in various materials and sizes</li>
                                    <li>Commonly used in machinery, construction, and automotive industries</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Stud Bolts
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Full-Length Threads: Provides a secure grip and stable connection.
                                    </li>
                                    <li>
                                        High Strength: Designed to handle heavy loads and stresses.
                                    </li>
                                    <li>
                                        Versatile Use: Suitable for a wide range of applications including machinery and construction.
                                    </li>
                                    <li>
                                        Material Options: Available in various materials such as carbon steel, alloy steel, and stainless steel.
                                    </li>
                                    <li>
                                        Easy Maintenance: Allows for easy assembly and disassembly, ideal for maintenance purposes.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Stud Bolt Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Typically made from carbon steel, alloy steel, or stainless steel.
                                    </li>
                                    <li>
                                        Size Variations: Available in various diameters and lengths to suit different applications.
                                    </li>
                                    <li>
                                        Thread Types: Includes options for both coarse and fine threads.
                                    </li>
                                    <li>
                                        High Strength Ratings: Designed to meet specific load and stress requirements.
                                    </li>
                                    <li>
                                        Customization: Can be customized in terms of size, material, and finish to meet specific needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Stud Bolt Specifications
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
                                        Strength Ratings: Designed to handle high loads, with detailed ratings provided
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM A193, ASTM A320, ASME B16.5
                                    </li>
                                    <li>
                                        Finish Options: Includes options such as galvanized, black oxide, and plain steel
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={studBoltsImage}
                                alt="Stud Bolts"
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

export default StudBolts;
