import React from "react";
import Layout from "../../common/Layout";
import ssGasket from "../../../assets/allProductsImages/ss-gasket.jfif";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const SSGasket = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Stainless Steel Gaskets
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={ssGasket}
                                    alt="Stainless Steel Gaskets"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Stainless steel gaskets are high-performance sealing components made from stainless steel, known for their excellent resistance to corrosion, high temperatures, and pressure. They are widely used in a variety of industries due to their durability and reliability in demanding conditions.
                                </p>
                                <p className="mb-2">
                                    These gaskets are ideal for applications involving harsh environments, high-pressure systems, and elevated temperatures. Their resilience and longevity make them a popular choice for industries such as chemical processing, petrochemical, and power generation.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Excellent corrosion resistance</li>
                                    <li>High-temperature and pressure resistance</li>
                                    <li>Durable and long-lasting</li>
                                    <li>Suitable for various industrial applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Stainless Steel Gaskets
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Stainless steel gaskets are designed to withstand corrosive environments, making them suitable for use in chemical and marine applications.
                                    </li>
                                    <li>
                                        Temperature and Pressure Tolerance: Capable of handling extreme temperatures and pressures without compromising performance.
                                    </li>
                                    <li>
                                        Durability: Provides a reliable seal over an extended service life, reducing maintenance and replacement costs.
                                    </li>
                                    <li>
                                        Versatile Applications: Ideal for a wide range of industries, including oil and gas, chemical processing, and power generation.
                                    </li>
                                    <li>
                                        Customizable: Available in various sizes and designs to meet specific sealing requirements.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Stainless Steel Gasket Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Made from High-Grade Stainless Steel: Ensures durability and performance in harsh conditions.
                                    </li>
                                    <li>
                                        Precision Engineered: Provides a tight and reliable seal for various applications.
                                    </li>
                                    <li>
                                        Resistant to High Temperatures: Maintains performance in elevated temperature environments.
                                    </li>
                                    <li>
                                        Corrosion-Resistant: Effective in corrosive and marine environments.
                                    </li>
                                    <li>
                                        Available in Multiple Grades: Various grades of stainless steel, such as 304 and 316, to suit different applications.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Stainless Steel Gasket Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Stainless Steel (commonly grades 304, 316)
                                    </li>
                                    <li>
                                        Size Range: Available in various sizes to fit different applications
                                    </li>
                                    <li>
                                        Temperature Range: Suitable for high-temperature applications
                                    </li>
                                    <li>
                                        Pressure Rating: Designed to handle high-pressure environments
                                    </li>
                                    <li>
                                        Standards and Specifications: Meets industry standards for sealing performance
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={ssGasket}
                                alt="Stainless Steel Gaskets"
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

export default SSGasket;
