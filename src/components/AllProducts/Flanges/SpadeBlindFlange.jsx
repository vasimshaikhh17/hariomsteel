import React from "react";
import Layout from "../../common/Layout";
import spadeBlindFlanges from "../../../assets/allProductsImages/spade-blind-flange.jfif";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const SpadeBlindFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Spade Blind Flanges
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={spadeBlindFlanges}
                                    alt="Spade Blind Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Spade blind flanges, often referred to as spade flanges or blank flanges, are designed to close off the end of a pipeline or vessel. They are used to isolate sections of a pipeline, block the flow of fluids, or serve as a temporary seal during maintenance or inspection. The primary purpose of spade blind flanges is to provide a reliable and secure seal in a piping system.
                                </p>
                                <p className="mb-2">
                                    These flanges are particularly useful in applications where a quick and effective way to block the flow is needed. Spade blind flanges are commonly used in industries such as oil and gas, chemical processing, and water treatment.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Blocks the flow of fluids in pipelines</li>
                                    <li>Used for isolation and maintenance purposes</li>
                                    <li>Provides a reliable seal to prevent leaks</li>
                                    <li>Available in various sizes and materials</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Spade Blind Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Effective Isolation: Provides a reliable barrier to isolate sections of a pipeline or system.
                                    </li>
                                    <li>
                                        High Integrity Seal: Designed to create a strong seal that prevents leakage of fluids.
                                    </li>
                                    <li>
                                        Versatile Sizes: Available in a range of sizes to match different pipeline dimensions.
                                    </li>
                                    <li>
                                        Material Options: Made from various materials including stainless steel, carbon steel, and alloy steel.
                                    </li>
                                    <li>
                                        Easy Installation: Simple to install and remove, making them suitable for temporary isolation during maintenance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Spade Blind Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Precision Machined: Ensures a tight fit and effective seal.
                                    </li>
                                    <li>
                                        Material Compatibility: Available in materials that match the existing pipeline and operational conditions.
                                    </li>
                                    <li>
                                        Customizable: Can be customized to meet specific requirements, including size and material specifications.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with relevant standards such as ANSI, ASME, and API for reliability and performance.
                                    </li>
                                    <li>
                                        Reliable Performance: Provides consistent performance in blocking fluid flow and isolation applications.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Spade Blind Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard: ANSI, ASME, API
                                    </li>
                                    <li>
                                        Material Options: Stainless Steel, Carbon Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: Available in various sizes to suit different pipeline requirements
                                    </li>
                                    <li>
                                        Thickness: Customizable to achieve desired isolation and blocking capabilities
                                    </li>
                                    <li>
                                        Finish Options: Various finishes available to enhance durability and performance
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={spadeBlindFlanges}
                                alt="Spade Blind Flanges"
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

export default SpadeBlindFlanges;
