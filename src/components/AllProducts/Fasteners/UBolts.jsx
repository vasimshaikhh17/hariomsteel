import React from "react";
import Layout from "../../common/Layout";
import uBoltsImage from "../../../assets/allProductsImages/U-bolts.png";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const UBolts = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                U-Bolts
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={uBoltsImage}
                                    alt="U-Bolts"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    U-Bolts are shaped like the letter "U" and are used to secure pipes or rods to a surface. They are commonly used in construction and industrial applications to support and stabilize cylindrical objects. The U-shape allows the bolt to clamp around the object and be secured with nuts and washers. U-Bolts are available in various sizes and materials to accommodate different load requirements and environmental conditions.
                                </p>
                                <p className="mb-2">
                                    These bolts provide a strong and stable support system, making them ideal for applications requiring robust clamping solutions.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>U-shaped design for clamping around cylindrical objects</li>
                                    <li>Provides stable support and secure fastening</li>
                                    <li>Available in various sizes and materials</li>
                                    <li>Used in construction, industrial, and automotive applications</li>
                                    <li>Supports pipes, rods, and other cylindrical objects</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of U-Bolts
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Secure Clamping: U-shape allows for secure clamping around pipes or rods.
                                    </li>
                                    <li>
                                        Versatile Applications: Suitable for use in various industries, including construction and automotive.
                                    </li>
                                    <li>
                                        Material Options: Available in materials such as steel, stainless steel, and galvanized steel.
                                    </li>
                                    <li>
                                        Size Variations: Comes in different sizes to fit various applications.
                                    </li>
                                    <li>
                                        Easy Installation: Can be easily installed with standard tools.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    U-Bolt Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Commonly made from steel, stainless steel, or galvanized steel for durability.
                                    </li>
                                    <li>
                                        Size Variations: Available in a range of diameters and lengths to suit different applications.
                                    </li>
                                    <li>
                                        Thread Types: Equipped with threaded ends for securing with nuts and washers.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Options available for environments that require resistance to corrosion.
                                    </li>
                                    <li>
                                        Customization: Can be customized in terms of size and material to meet specific needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    U-Bolt Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Steel, Stainless Steel, Galvanized Steel
                                    </li>
                                    <li>
                                        Size Range: Available in various diameters and lengths
                                    </li>
                                    <li>
                                        Thread Types: Threaded ends for securing with nuts and washers
                                    </li>
                                    <li>
                                        Standards and Specifications: Compliant with standards like ASTM and ISO
                                    </li>
                                    <li>
                                        Finish Options: Includes options such as zinc-plated, galvanized, and plain steel for different environments
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden ">
                            <img
                                src={uBoltsImage}
                                alt="U-Bolts"
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
                                If you require any further information, please do not hesitate to contact us.
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

export default UBolts;
