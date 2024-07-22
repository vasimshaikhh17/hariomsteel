import React from "react";
import Layout from "../../common/Layout";
import slipOnFlanges from "../../../assets/allProductsImages/slip-on-flange.jfif";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const SlipOnFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Slip-On Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={slipOnFlanges}
                                    alt="Slip-On Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Slip-On flanges are popular and versatile flange types used in various piping systems. They are designed to slide over the end of the pipe and are then welded in place, both inside and outside, to provide strength and prevent leakage. These flanges are widely used in lower-pressure applications and are easy to install and align.
                                </p>
                                <p className="mb-2">
                                    The ease of installation and alignment makes Slip-On flanges a preferred choice for many industries, including oil and gas, chemical processing, and water treatment. They are available in various materials and sizes to suit different operational requirements.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Simple and easy to install</li>
                                    <li>Ideal for low-pressure applications</li>
                                    <li>Provides excellent strength and leak prevention</li>
                                    <li>Available in various materials and sizes</li>
                                    <li>Cost-effective solution for many industries</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Slip-On Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Easy Installation: Slip-On flanges are easier to position and align compared to other flange types, reducing installation time and cost.
                                    </li>
                                    <li>
                                        Cost-Effective: They are generally more affordable than other flange types, making them a cost-effective solution for many applications.
                                    </li>
                                    <li>
                                        Versatility: Available in a wide range of sizes and materials, Slip-On flanges can be used in various industries and applications.
                                    </li>
                                    <li>
                                        Leak Prevention: The double welding (inside and outside) ensures a strong and leak-proof connection.
                                    </li>
                                    <li>
                                        Suitable for Low-Pressure Applications: Slip-On flanges are ideal for systems with low to moderate pressure.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Slip-On Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available in Various Materials: Slip-On flanges are made from materials such as carbon steel, stainless steel, and alloy steel to meet different operational needs.
                                    </li>
                                    <li>
                                        Wide Range of Sizes: They come in various sizes to fit different pipe diameters and specifications.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with different finishes and coatings to enhance performance and durability.
                                    </li>
                                    <li>
                                        Suitable for Various Industries: Used in oil and gas, chemical processing, water treatment, and more.
                                    </li>
                                    <li>
                                        Durable: Designed to withstand various environmental conditions and operational stresses.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Slip-On Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Options: Carbon Steel, Stainless Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: Available in a wide range of sizes to fit different pipe diameters
                                    </li>
                                    <li>
                                        Pressure Rating: Suitable for low to moderate pressure systems
                                    </li>
                                    <li>
                                        Standards and Specifications: ASME B16.5, ASME B16.47, API 605, MSS SP-44
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including coated, galvanized, and painted
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={slipOnFlanges}
                                alt="Slip-On Flanges"
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

export default SlipOnFlanges;
