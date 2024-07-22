import React from "react";
import Layout from "../../common/Layout";
import nipoFlanges from "../../../assets/allProductsImages/nippo-flange.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const NipoFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Nipo Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={nipoFlanges}
                                    alt="Nipo Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Nipo flanges, also known as Nipoflanges, are a type of forged flange designed for connecting pipes. They integrate the features of both a welding neck flange and a nipolet, making them an ideal solution for high-pressure applications. Nipo flanges are typically used in piping systems where branch connections are required, providing a robust and reliable connection that ensures the integrity of the piping network.
                                </p>
                                <p className="mb-2">
                                    The design of Nipo flanges allows for easy welding to the pipe, offering a seamless transition that enhances the mechanical performance of the connection. They are widely used in industries such as oil and gas, petrochemical, and power generation, where maintaining the integrity of the piping system under high pressure is crucial.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Ideal for high-pressure applications</li>
                                    <li>Seamless transition for enhanced mechanical performance</li>
                                    <li>Combines features of welding neck flange and nipolet</li>
                                    <li>Suitable for branch connections</li>
                                    <li>Reliable and robust connection</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Nipo Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        High Pressure Resistance: Designed to withstand high-pressure environments, making them suitable for demanding applications.
                                    </li>
                                    <li>
                                        Seamless Integration: Combines the features of a welding neck flange and a nipolet, providing a seamless transition and enhanced mechanical performance.
                                    </li>
                                    <li>
                                        Durability: Manufactured from high-quality materials to ensure durability and long service life.
                                    </li>
                                    <li>
                                        Versatile: Suitable for a wide range of industries, including oil and gas, petrochemical, and power generation.
                                    </li>
                                    <li>
                                        Easy Installation: Designed for easy welding to the pipe, simplifying the installation process.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Nipo Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available in Various Sizes: Nipo flanges come in a range of sizes to fit different piping requirements.
                                    </li>
                                    <li>
                                        Material Options: Available in materials such as stainless steel, carbon steel, and alloy steel to suit different applications.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with various coatings and finishes to enhance corrosion resistance and durability.
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
                                    Nipo Flange Specifications
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
                                src={nipoFlanges}
                                alt="Nipo Flanges"
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

export default NipoFlanges;
