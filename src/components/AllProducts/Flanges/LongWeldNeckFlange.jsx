import React from "react";
import Layout from "../../common/Layout";
import longWeldNeckFlanges from "../../../assets/allProductsImages/long-weld-neck-flange.jpeg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const LongWeldNeckFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Long Weld Neck Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={longWeldNeckFlanges}
                                    alt="Long Weld Neck Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Long weld neck flanges (LWN) are an extension of weld neck flanges and are characterized by their longer neck, which provides additional reinforcement and strength to the flange connection. These flanges are designed to be used in high-pressure and high-temperature applications, where the added length of the neck helps distribute the stresses more evenly across the pipe and flange joint.
                                </p>
                                <p className="mb-2">
                                    The primary advantage of long weld neck flanges is their ability to provide a smooth transition from the flange to the pipe, reducing stress concentration and enhancing the mechanical performance of the connection. They are commonly used in industries such as oil and gas, chemical processing, and power generation, where reliable and durable connections are essential.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Enhanced stress distribution</li>
                                    <li>Ideal for high-pressure and high-temperature applications</li>
                                    <li>Smooth transition from flange to pipe</li>
                                    <li>Provides additional reinforcement</li>
                                    <li>Suitable for critical applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Long Weld Neck Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Extended Neck: The longer neck provides additional reinforcement and helps distribute stresses more evenly across the flange connection.
                                    </li>
                                    <li>
                                        Smooth Transition: Ensures a smooth transition from the flange to the pipe, reducing stress concentration and enhancing mechanical performance.
                                    </li>
                                    <li>
                                        High Strength: Designed to withstand high-pressure and high-temperature conditions, making them suitable for critical applications.
                                    </li>
                                    <li>
                                        Versatile: Suitable for use in various industries, including oil and gas, chemical processing, and power generation.
                                    </li>
                                    <li>
                                        Precision Engineering: Manufactured to precise standards, ensuring a perfect fit and reliable performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Long Weld Neck Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available in Various Sizes: Long weld neck flanges are available in a range of sizes to fit different piping requirements.
                                    </li>
                                    <li>
                                        Material Options: Manufactured from materials such as stainless steel, carbon steel, and alloy steel to suit different applications.
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
                                    Long Weld Neck Flange Specifications
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
                                src={longWeldNeckFlanges}
                                alt="Long Weld Neck Flanges"
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

export default LongWeldNeckFlanges;
 