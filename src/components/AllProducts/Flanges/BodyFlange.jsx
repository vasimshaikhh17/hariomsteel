import React from "react";
import Layout from "../../common/Layout";
import bodyFlange from "../../../assets/allProductsImages/body-flanges.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const BodyFlange = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Body Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={bodyFlange}
                                    alt="Body Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Body flanges are essential components used in various industrial applications to connect pipes, valves, pumps, and other equipment. They provide a reliable method of creating joints that can be easily assembled and disassembled, making them ideal for maintenance and repair tasks. Body flanges are designed to handle different pressure and temperature conditions, ensuring safe and efficient operation of piping systems.
                                </p>
                                <p className="mb-2">
                                    These flanges are widely used in industries such as oil and gas, chemical processing, power generation, and water treatment. Their robust construction and precise engineering make them suitable for both high-pressure and high-temperature environments, providing secure connections that prevent leaks and ensure the integrity of the pipeline.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Reliable and secure connections</li>
                                    <li>Easy to assemble and disassemble</li>
                                    <li>Suitable for high-pressure and high-temperature environments</li>
                                    <li>Widely used in various industries</li>
                                    <li>Prevents leaks and ensures pipeline integrity</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Body Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Durable Construction: Made from high-quality materials to withstand demanding industrial conditions and ensure long-lasting performance.
                                    </li>
                                    <li>
                                        Versatile Design: Available in various sizes and pressure ratings to meet the specific requirements of different applications.
                                    </li>
                                    <li>
                                        Easy Installation: Designed for easy assembly and disassembly, facilitating maintenance and repair tasks.
                                    </li>
                                    <li>
                                        Leak-Proof Sealing: Provides a secure seal to prevent leaks and ensure the safety and efficiency of piping systems.
                                    </li>
                                    <li>
                                        High Temperature and Pressure Resistance: Capable of handling extreme temperature and pressure conditions without compromising performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Body Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available in Various Sizes: Body flanges come in a range of sizes to accommodate different pipe diameters and system requirements.
                                    </li>
                                    <li>
                                        Material Options: Manufactured from materials such as stainless steel, carbon steel, and alloy steel to suit different application needs.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with various coatings and finishes to enhance corrosion resistance and longevity.
                                    </li>
                                    <li>
                                        Precision Engineering: Ensures a perfect fit and reliable performance in complex piping systems.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with international standards such as ANSI, ASME, and DIN for compatibility and reliability.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Body Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard: ANSI, ASME, DIN
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
                                src={bodyFlange}
                                alt="Body Flanges"
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

export default BodyFlange;
