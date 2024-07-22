import React from "react";
import Layout from "../../common/Layout";
import reducingFlanges from "../../../assets/allProductsImages/reducing-flanges.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const ReducingFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Reducing Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={reducingFlanges}
                                    alt="Reducing Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Reducing flanges are a type of flange used to connect pipes of different sizes. These flanges provide a convenient and economical solution for changing the pipe size within a piping system. They are commonly used in various industries, including oil and gas, chemical processing, and water treatment, where there is a need to adapt different pipe diameters.
                                </p>
                                <p className="mb-2">
                                    The design of reducing flanges allows for a smooth transition between different pipe sizes, helping to maintain the flow efficiency and reduce turbulence. They are available in various materials, sizes, and pressure ratings to suit different applications and operational requirements.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Connects pipes of different sizes</li>
                                    <li>Provides economical solution for size transitions</li>
                                    <li>Maintains flow efficiency</li>
                                    <li>Reduces turbulence</li>
                                    <li>Used in various industries</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Reducing Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Versatile Connections: Ideal for connecting pipes of different sizes without requiring additional fittings.
                                    </li>
                                    <li>
                                        Flow Efficiency: Designed to ensure a smooth transition between different pipe sizes, minimizing turbulence and maintaining efficient flow.
                                    </li>
                                    <li>
                                        Material Options: Available in various materials, including stainless steel, carbon steel, and alloy steel, to meet different application needs.
                                    </li>
                                    <li>
                                        Pressure Ratings: Suitable for a wide range of pressure ratings, ensuring compatibility with different piping systems.
                                    </li>
                                    <li>
                                        Cost-Effective: Provides a cost-effective solution for changing pipe sizes, reducing the need for additional fittings and welding.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Reducing Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available in Various Sizes: Reducing flanges come in a range of sizes to accommodate different pipe diameters.
                                    </li>
                                    <li>
                                        Material Diversity: Offered in materials such as stainless steel, carbon steel, and alloy steel to suit various environmental and operational conditions.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with different coatings and finishes to enhance corrosion resistance and durability.
                                    </li>
                                    <li>
                                        Precision Engineering: Ensures a perfect fit and reliable performance in connecting different pipe sizes.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with international standards such as ANSI, ASME, and DIN for compatibility and reliability.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Reducing Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard: ANSI, ASME, DIN
                                    </li>
                                    <li>
                                        Material Options: Stainless Steel, Carbon Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: Various sizes available to meet different pipeline requirements
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
                                src={reducingFlanges}
                                alt="Reducing Flanges"
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

export default ReducingFlanges;
