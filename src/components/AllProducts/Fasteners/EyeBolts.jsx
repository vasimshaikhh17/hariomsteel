import React from "react";
import Layout from "../../common/Layout";
import eyeBoltsImage from "../../../assets/allProductsImages/Eye-bolt.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const EyeBolts = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Eye Bolts
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={eyeBoltsImage}
                                    alt="Eye Bolts"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Eye Bolts are versatile fastening components featuring a loop or "eye" at one end, designed for lifting, pulling, and securing applications. They are typically used in rigging, lifting, and suspension tasks, allowing for easy attachment of hooks, chains, or cables. Eye Bolts come in various designs and materials to suit different load capacities and environmental conditions.
                                </p>
                                <p className="mb-2">
                                    Ideal for use in construction, manufacturing, and marine industries, Eye Bolts provide a secure connection point for handling heavy loads and equipment.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Provides a secure lifting and attachment point</li>
                                    <li>Available in various sizes and designs</li>
                                    <li>Suitable for lifting, pulling, and securing applications</li>
                                    <li>High strength and durability for demanding tasks</li>
                                    <li>Corrosion-resistant options available for harsh environments</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Eye Bolts
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Strong Construction: Made from high-quality materials such as steel or stainless steel for strength and durability.
                                    </li>
                                    <li>
                                        Versatile Design: Available in various designs, including straight and angular eyes, to meet different application needs.
                                    </li>
                                    <li>
                                        High Load Capacity: Designed to handle significant loads, with load ratings specified for safety.
                                    </li>
                                    <li>
                                        Corrosion Resistant: Options with protective coatings to resist environmental damage and extend service life.
                                    </li>
                                    <li>
                                        Easy to Install: Designed for straightforward installation and secure attachment.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Eye Bolt Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Typically made from carbon steel, stainless steel, or alloy steel for various applications.
                                    </li>
                                    <li>
                                        Size Variations: Available in different diameters and lengths to suit specific requirements.
                                    </li>
                                    <li>
                                        Load Ratings: Rated for various load capacities, with detailed ratings available for safety.
                                    </li>
                                    <li>
                                        Compliance: Meets industry standards and specifications for performance and safety.
                                    </li>
                                    <li>
                                        Finish Options: Includes options such as galvanized, black oxide, and plain steel for different environments.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Eye Bolt Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Carbon Steel, Stainless Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: From 1/4" to 2" in diameter, with various lengths available
                                    </li>
                                    <li>
                                        Thread Type: Available in coarse and fine threads to match different applications
                                    </li>
                                    <li>
                                        Load Ratings: Designed to handle specific loads, with detailed load capacities provided
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM A193, ASTM A307, ASTM F1554
                                    </li>
                                    <li>
                                        Finish Options: Available in coatings such as zinc-plated, hot-dip galvanized, and black oxide
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={eyeBoltsImage}
                                alt="Eye Bolts"
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

export default EyeBolts;
