import React from "react";
import Layout from "../../common/Layout";
import orificeFlanges from "../../../assets/allProductsImages/orifice-flange-type.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const OrificeFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Orifice Flanges
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={orificeFlanges}
                                    alt="Orifice Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Orifice flanges are specialized flanges used in conjunction with orifice meters for the measurement of flow rates in pipelines. These flanges are designed to hold an orifice plate in place and provide a means for pressure measurement. Orifice flanges are essential components in systems where accurate flow measurement is crucial, such as in the oil and gas, chemical processing, and water treatment industries.
                                </p>
                                <p className="mb-2">
                                    The design of orifice flanges includes bolt holes and tapped holes for meter connections, which allow for easy installation and maintenance of the orifice plate and associated instrumentation. They ensure precise alignment and tight sealing to maintain measurement accuracy and system integrity.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Used for accurate flow measurement</li>
                                    <li>Holds orifice plate in place</li>
                                    <li>Provides means for pressure measurement</li>
                                    <li>Essential for various industries</li>
                                    <li>Ensures precise alignment and sealing</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Orifice Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Accurate Flow Measurement: Designed to work with orifice plates to provide precise flow rate measurements.
                                    </li>
                                    <li>
                                        Easy Installation: Includes bolt holes and tapped holes for easy installation and maintenance.
                                    </li>
                                    <li>
                                        Pressure Measurement: Provides connections for pressure measurement devices, ensuring accurate readings.
                                    </li>
                                    <li>
                                        Durability: Made from high-quality materials to ensure long-lasting performance in various environments.
                                    </li>
                                    <li>
                                        Versatile: Suitable for use in a wide range of industries, including oil and gas, chemical processing, and water treatment.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Orifice Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available in Various Sizes: Orifice flanges come in a range of sizes to fit different pipeline requirements.
                                    </li>
                                    <li>
                                        Material Options: Available in materials such as stainless steel, carbon steel, and alloy steel to suit different applications.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with various coatings and finishes to enhance corrosion resistance and durability.
                                    </li>
                                    <li>
                                        Precision Engineering: Ensures a perfect fit and reliable performance in flow measurement systems.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with international standards such as ANSI, ASME, and DIN for compatibility and reliability.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Orifice Flange Specifications
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

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={orificeFlanges}
                                alt="Orifice Flanges"
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

export default OrificeFlanges;
