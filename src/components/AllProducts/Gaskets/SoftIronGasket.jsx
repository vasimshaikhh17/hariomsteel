import React from "react";
import Layout from "../../common/Layout";
import softIronGasket from "../../../assets/allProductsImages/soft-iron-gaskset.png";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const SoftIronGasket = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Soft Iron Gaskets
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={softIronGasket}
                                    alt="Soft Iron Gaskets"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Soft iron gaskets are sealing components made from soft iron, known for their excellent malleability and ability to conform to the sealing surfaces. They are particularly suited for applications where a reliable and tight seal is required, often in less corrosive environments.
                                </p>
                                <p className="mb-2">
                                    These gaskets provide a good seal by deforming slightly to fill gaps and imperfections between mating surfaces. They are commonly used in applications where the sealing pressure is moderate and where the operating environment does not involve aggressive chemicals or extreme temperatures.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Good malleability and conformability</li>
                                    <li>Effective sealing in moderate pressure applications</li>
                                    <li>Cost-effective solution for non-corrosive environments</li>
                                    <li>Easy to machine and shape</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Soft Iron Gaskets
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Malleability: Soft iron gaskets can easily conform to the surface irregularities, ensuring a tight seal.
                                    </li>
                                    <li>
                                        Cost-Effective: An economical choice for sealing applications in non-aggressive environments.
                                    </li>
                                    <li>
                                        Machinability: Easy to cut, shape, and form to meet specific sealing requirements.
                                    </li>
                                    <li>
                                        Moderate Pressure Handling: Suitable for applications with moderate sealing pressure needs.
                                    </li>
                                    <li>
                                        Non-Corrosive Use: Ideal for environments where corrosion resistance is not a primary concern.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Soft Iron Gasket Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Made from Soft Iron: Offers flexibility and the ability to adapt to surface irregularities.
                                    </li>
                                    <li>
                                        Customizable: Available in various sizes and shapes to fit different applications.
                                    </li>
                                    <li>
                                        Suitable for Moderate Applications: Best for moderate pressure and temperature environments.
                                    </li>
                                    <li>
                                        Non-Corrosive Use: Designed for use where chemical resistance is not a major requirement.
                                    </li>
                                    <li>
                                        Reliable Performance: Provides a dependable seal for general sealing needs.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Soft Iron Gasket Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Soft Iron
                                    </li>
                                    <li>
                                        Size Range: Available in various sizes to suit different applications
                                    </li>
                                    <li>
                                        Temperature Range: Suitable for moderate temperature applications
                                    </li>
                                    <li>
                                        Pressure Rating: Designed for moderate pressure environments
                                    </li>
                                    <li>
                                        Compliance: Meets general industry standards for sealing performance
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={softIronGasket}
                                alt="Soft Iron Gaskets"
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

export default SoftIronGasket;
