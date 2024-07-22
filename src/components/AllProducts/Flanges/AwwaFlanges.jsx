import React from "react";
import Layout from "../../common/Layout";
import awwaFlanges from "../../../assets/allProductsImages/awwa-flanges.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const AwwaFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                AWWA Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={awwaFlanges}
                                    alt="AWWA Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    AWWA flanges are designed and manufactured according to the standards set by the American Water Works Association (AWWA). These flanges are commonly used in waterworks and municipal piping systems, ensuring reliable and leak-proof connections in potable water and wastewater systems. They are built to handle the rigorous demands of water distribution and treatment processes.
                                </p>
                                <p className="mb-2">
                                    Known for their durability and high performance, AWWA flanges are suitable for a wide range of applications in the water industry. They are available in various sizes and materials to meet the specific needs of different water infrastructure projects.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Designed to AWWA standards</li>
                                    <li>Reliable and leak-proof connections</li>
                                    <li>Durable and high performance</li>
                                    <li>Suitable for potable water and wastewater systems</li>
                                    <li>Available in various sizes and materials</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of AWWA Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard Compliance: Manufactured according to AWWA standards, ensuring compatibility and reliability in waterworks applications.
                                    </li>
                                    <li>
                                        Leak-Proof: Designed to provide secure, leak-proof connections in potable water and wastewater systems.
                                    </li>
                                    <li>
                                        Durability: Built to withstand the demands of water distribution and treatment processes, offering long-lasting performance.
                                    </li>
                                    <li>
                                        Versatile: Suitable for a variety of applications within the water industry, including distribution, treatment, and infrastructure projects.
                                    </li>
                                    <li>
                                        Material Variety: Available in different materials to meet specific project requirements, including ductile iron, stainless steel, and carbon steel.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    AWWA Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Compliance with AWWA C207: AWWA flanges are designed in accordance with the AWWA C207 standard, which specifies the requirements for steel pipe flanges for waterworks service.
                                    </li>
                                    <li>
                                        Wide Size Range: Available in sizes from 4 inches to 144 inches in diameter to accommodate various pipe sizes.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with different coatings and linings to enhance resistance to corrosion and extend service life.
                                    </li>
                                    <li>
                                        Robust Design: Engineered to handle high-pressure and high-stress environments typical of water distribution and treatment systems.
                                    </li>
                                    <li>
                                        Versatile Applications: Used in a wide range of water infrastructure projects, including water treatment plants, distribution networks, and storage facilities.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    AWWA Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard: AWWA C207
                                    </li>
                                    <li>
                                        Material Options: Ductile Iron, Stainless Steel, Carbon Steel
                                    </li>
                                    <li>
                                        Size Range: 4 inches to 144 inches in diameter
                                    </li>
                                    <li>
                                        Pressure Rating: Class B, D, E, and F depending on the application
                                    </li>
                                    <li>
                                        Finish Options: Available with various coatings and linings, including epoxy, galvanized, and painted finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={awwaFlanges}
                                alt="AWWA Flanges"
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

export default AwwaFlanges;
