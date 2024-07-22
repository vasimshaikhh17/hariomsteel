import React from "react";
import Layout from "../../common/Layout";
import weldNeckFlanges from "../../../assets/allProductsImages/weld-neck-flange.webp";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const WeldNeckFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Weld Neck Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={weldNeckFlanges}
                                    alt="Weld Neck Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Weld neck flanges are a type of flange designed for use in high-pressure and high-temperature applications. They are characterized by a long, tapered neck that extends from the flange face, providing a strong, smooth transition from the pipe to the flange. This design helps to reduce stress concentration and improve the overall strength of the connection.
                                </p>
                                <p className="mb-2">
                                    Weld neck flanges are commonly used in industries such as oil and gas, petrochemical, and power generation, where robust and reliable connections are crucial. They are ideal for applications involving high pressure, temperature fluctuations, and corrosive environments.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Designed for high-pressure and high-temperature applications</li>
                                    <li>Features a long, tapered neck for smooth stress transition</li>
                                    <li>Provides strong and reliable connections</li>
                                    <li>Suitable for use in various industrial sectors</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Weld Neck Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        High Strength: The long, tapered neck provides a strong connection and reduces stress concentration, making it suitable for high-pressure applications.
                                    </li>
                                    <li>
                                        Smooth Transition: The design ensures a smooth transition between the pipe and the flange, minimizing turbulence and reducing the risk of leaks.
                                    </li>
                                    <li>
                                        Versatile Applications: Ideal for use in a wide range of industries, including oil and gas, petrochemical, and power generation.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Available in various materials, including stainless steel and alloy steel, to withstand corrosive environments.
                                    </li>
                                    <li>
                                        Compliance with Standards: Manufactured to meet industry standards such as ANSI, ASME, and API for reliability and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Weld Neck Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Precision Engineering: Ensures a precise fit and secure connection, reducing the risk of leaks and failures.
                                    </li>
                                    <li>
                                        Material Options: Available in a variety of materials to match different operational conditions and requirements.
                                    </li>
                                    <li>
                                        Customizable: Can be customized to meet specific size, pressure rating, and material requirements.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with relevant standards for quality and performance.
                                    </li>
                                    <li>
                                        Long-Term Durability: Designed to provide reliable performance and longevity in demanding applications.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Weld Neck Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard: ANSI, ASME, API
                                    </li>
                                    <li>
                                        Material Options: Stainless Steel, Carbon Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: Available in various sizes to suit different pipe dimensions
                                    </li>
                                    <li>
                                        Pressure Rating: Designed for high-pressure applications, with pressure ratings to match operational requirements
                                    </li>
                                    <li>
                                        Finish Options: Various finishes available to enhance performance and resistance to corrosion
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={weldNeckFlanges}
                                alt="Weld Neck Flanges"
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

export default WeldNeckFlanges;
