import React from "react";
import Layout from "../../common/Layout";
import spectacleFlanges from "../../../assets/allProductsImages/spectacle-blind-flange.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const SpectacleFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Spectacle Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={spectacleFlanges}
                                    alt="Spectacle Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Spectacle flanges, also known as spectacle blinds or spade blinds, are specialized flanges used to isolate or bypass a section of a pipeline. They consist of two separate plates—one solid (the "spade") and one with a cut-out (the "blind")—joined together in a single unit. This design allows for quick isolation or bypassing of a pipeline without the need for disassembly.
                                </p>
                                <p className="mb-2">
                                    Spectacle flanges are commonly used in various industrial applications, including oil and gas, chemical processing, and water treatment, where the ability to quickly isolate or bypass sections of a system is required. They are an effective solution for maintenance, inspection, and modification tasks.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Combines isolation and bypass functions</li>
                                    <li>Facilitates quick isolation of pipeline sections</li>
                                    <li>Provides a reliable seal and easy operation</li>
                                    <li>Available in various sizes and materials</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Spectacle Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Dual Functionality: Combines the functions of a spade and a blind flange in a single unit, allowing for quick isolation or bypassing.
                                    </li>
                                    <li>
                                        Easy Operation: Simplifies the process of isolating or bypassing a section of a pipeline without the need for additional equipment.
                                    </li>
                                    <li>
                                        Versatile Sizes: Available in a range of sizes to match different pipeline dimensions and application requirements.
                                    </li>
                                    <li>
                                        Material Options: Made from various materials such as stainless steel, carbon steel, and alloy steel to suit different operational conditions.
                                    </li>
                                    <li>
                                        Compliance with Standards: Designed to meet industry standards for reliability and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Spectacle Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Precision Machined: Ensures a tight fit and effective seal between the pipeline sections.
                                    </li>
                                    <li>
                                        Material Compatibility: Available in materials that match the existing pipeline and operational conditions.
                                    </li>
                                    <li>
                                        Customizable: Can be customized to meet specific size and material requirements.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with relevant standards such as ANSI, ASME, and API.
                                    </li>
                                    <li>
                                        Reliable Performance: Provides consistent performance in isolating or bypassing pipeline sections.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Spectacle Flange Specifications
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
                                        Thickness: Customizable to achieve desired isolation and bypass capabilities
                                    </li>
                                    <li>
                                        Finish Options: Various finishes available to enhance durability and performance
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={spectacleFlanges}
                                alt="Spectacle Flanges"
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

export default SpectacleFlanges;
