import React from "react";
import Layout from "../../common/Layout";
import spacerFlanges from "../../../assets/allProductsImages/Spacer-flange.jfif";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const SpacerFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Spacer Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={spacerFlanges}
                                    alt="Spacer Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Spacer flanges, also known as flange spacers or spacer rings, are used to create a gap or space between two flanges in a piping system. They are typically used to accommodate thermal expansion, misalignment, or to provide additional clearance between flanges. Spacer flanges help to maintain proper alignment and function of the flanged joint while allowing for necessary adjustments or expansions.
                                </p>
                                <p className="mb-2">
                                    These flanges are commonly used in various industries including oil and gas, chemical processing, and water treatment, where precise alignment and expansion compensation are essential. Spacer flanges are available in different sizes and materials to match the specifications of the existing flanged connections.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Creates a gap between two flanges</li>
                                    <li>Accommodates thermal expansion and misalignment</li>
                                    <li>Provides additional clearance in piping systems</li>
                                    <li>Available in various sizes and materials</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Spacer Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Thermal Expansion Compensation: Allows for movement and expansion of the piping system without affecting the integrity of the flanged joint.
                                    </li>
                                    <li>
                                        Alignment Adjustment: Helps in aligning flanges that may be misaligned due to manufacturing tolerances or installation conditions.
                                    </li>
                                    <li>
                                        Versatile Sizes: Available in various sizes to suit different flange dimensions and application requirements.
                                    </li>
                                    <li>
                                        Material Options: Made from materials compatible with the existing flanges and operating conditions, such as stainless steel, carbon steel, and alloy steel.
                                    </li>
                                    <li>
                                        Ease of Installation: Designed for straightforward installation between flanges, simplifying adjustments and maintenance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Spacer Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Precision Machined: Ensures accurate fit and alignment between flanges.
                                    </li>
                                    <li>
                                        Material Compatibility: Available in various materials to match the existing flanges and operational conditions.
                                    </li>
                                    <li>
                                        Customizable: Can be customized to meet specific application requirements, including size and material specifications.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with relevant industry standards to ensure reliability and compatibility.
                                    </li>
                                    <li>
                                        Reliable Performance: Provides consistent performance in applications requiring gap creation and alignment adjustments.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Spacer Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard: ANSI, ASME, API
                                    </li>
                                    <li>
                                        Material Options: Stainless Steel, Carbon Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: Available in various sizes to meet different pipeline and flange requirements
                                    </li>
                                    <li>
                                        Thickness: Customizable to achieve desired spacing and alignment
                                    </li>
                                    <li>
                                        Finish Options: Various finishes available to enhance durability and performance
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={spacerFlanges}
                                alt="Spacer Flanges"
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

export default SpacerFlanges;
