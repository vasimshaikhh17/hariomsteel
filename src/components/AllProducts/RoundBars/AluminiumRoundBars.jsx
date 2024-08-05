import React from "react";
import Layout from "../../common/Layout";
import aluminiumRoundBars from "../../../assets/allProductsImages/aluminum-alloy-round-bar.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const AluminiumRoundBars = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Aluminium Round Bars
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={aluminiumRoundBars}
                                    alt="Aluminium Round Bars"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Aluminium round bars are versatile and widely used metal products, known for their lightweight, high strength, and excellent corrosion resistance. These bars are typically used in various engineering, construction, and manufacturing applications due to their adaptability and ease of machining.
                                </p>
                                <p className="mb-2">
                                    Available in a range of diameters and lengths, aluminium round bars are ideal for applications where strength-to-weight ratio is critical. They are commonly utilized in aerospace, automotive, marine, and industrial sectors.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Lightweight yet strong</li>
                                    <li>Excellent corrosion resistance</li>
                                    <li>Easy to machine and fabricate</li>
                                    <li>Versatile applications</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Aluminium Round Bars
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Lightweight: Aluminium round bars are significantly lighter than steel, making them ideal for applications where reducing weight is essential.
                                    </li>
                                    <li>
                                        High Strength: Despite their light weight, aluminium bars have a high strength-to-weight ratio, providing durability and strength.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Aluminium has natural resistance to corrosion, making these bars suitable for outdoor and marine environments.
                                    </li>
                                    <li>
                                        Machinability: Easy to machine and fabricate, allowing for precise custom parts and components.
                                    </li>
                                    <li>
                                        Versatility: Used in a wide range of applications, including structural components, machinery parts, and decorative elements.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Aluminium Round Bar Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Made from High-Quality Aluminium: Ensures strength, durability, and resistance to environmental factors.
                                    </li>
                                    <li>
                                        Available in Various Sizes: Can be supplied in different diameters and lengths to meet specific requirements.
                                    </li>
                                    <li>
                                        Surface Finish Options: Available in various finishes, including anodized and polished, to meet aesthetic and functional needs.
                                    </li>
                                    <li>
                                        High Performance: Suitable for demanding applications where performance and reliability are crucial.
                                    </li>
                                    <li>
                                        Customizable: Can be cut, drilled, and machined to fit specific design requirements.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Aluminium Round Bar Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Aluminium (commonly 6061, 7075)
                                    </li>
                                    <li>
                                        Diameter Range: Available from small diameters to large, depending on application needs
                                    </li>
                                    <li>
                                        Length: Supplied in standard lengths or custom cut to size
                                    </li>
                                    <li>
                                        Surface Finish: Options include mill finish, anodized, and polished
                                    </li>
                                    <li>
                                        Standards and Specifications: Meets industry standards for quality and performance
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={aluminiumRoundBars}
                                alt="Aluminium Round Bars"
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

export default AluminiumRoundBars;
