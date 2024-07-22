import React from "react";
import Layout from "../../common/Layout";
import blindFlanges from "../../../assets/allProductsImages/blind-flange.webp";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const BlindFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Blind Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={blindFlanges}
                                    alt="Blind Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Blind flanges are solid flange types used to seal off or block the ends of piping systems. Unlike other flanges, they do not have a bore, which makes them an ideal solution for terminating pipe runs or providing easy access to a closed system for inspection and maintenance. They are essential in applications where the pipeline needs to be sealed or opened intermittently.
                                </p>
                                <p className="mb-2">
                                    These flanges are used in a variety of industries, including oil and gas, petrochemical, water treatment, and power generation, where secure and reliable sealing of pipelines is critical. Their design allows them to withstand high pressure and stress, ensuring safety and integrity in piping systems.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Solid construction with no bore</li>
                                    <li>Used to seal or block the end of a pipeline</li>
                                    <li>Easy access for inspection and maintenance</li>
                                    <li>Suitable for high-pressure applications</li>
                                    <li>Ensures safety and integrity of piping systems</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Blind Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        High Pressure Resistance: Designed to withstand high pressure, making them suitable for demanding applications in various industries.
                                    </li>
                                    <li>
                                        Solid and Durable: Made from robust materials to ensure long-lasting performance and reliability in harsh environments.
                                    </li>
                                    <li>
                                        Versatile Applications: Used in diverse industries such as oil and gas, petrochemical, water treatment, and power generation.
                                    </li>
                                    <li>
                                        Easy Maintenance: Allows for easy access to the closed end of piping systems for inspection, cleaning, and maintenance.
                                    </li>
                                    <li>
                                        Secure Sealing: Provides a secure and leak-proof seal to prevent any fluid or gas leakage from the pipeline.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Blind Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available in Various Sizes: Blind flanges are available in a range of sizes to accommodate different pipe diameters and pressure ratings.
                                    </li>
                                    <li>
                                        Material Options: Manufactured from materials such as stainless steel, carbon steel, and alloy steel to meet specific application requirements.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with different coatings and finishes to enhance corrosion resistance and extend service life.
                                    </li>
                                    <li>
                                        Robust Design: Engineered to handle high-stress environments and provide reliable sealing under extreme conditions.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with industry standards such as ANSI, ASME, and API to ensure compatibility and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Blind Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard: ANSI, ASME, API
                                    </li>
                                    <li>
                                        Material Options: Stainless Steel, Carbon Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: Various sizes available to meet different requirements
                                    </li>
                                    <li>
                                        Pressure Rating: Suitable for high-pressure applications
                                    </li>
                                    <li>
                                        Finish Options: Available with various coatings and finishes to enhance durability
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={blindFlanges}
                                alt="Blind Flanges"
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

export default BlindFlanges;
