import React from "react";
import Layout from "../../common/Layout";
import copperPlates from "../../../assets/allProductsImages/Copper Plates.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const CopperPlates = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Copper Plates
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={copperPlates}
                                    alt="Copper Plates"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Copper plates are widely recognized for their excellent thermal and electrical conductivity, as well as their machinability and corrosion resistance. Made from pure copper or copper alloys, these plates are commonly used in electrical components, heat exchangers, and decorative applications. Copper plates offer both functional and aesthetic benefits, making them a versatile material choice.
                                </p>
                                <p className="mb-2">
                                    Due to their high thermal and electrical conductivity, copper plates are essential in applications requiring efficient heat dissipation and electrical connections.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Excellent thermal and electrical conductivity</li>
                                    <li>Good machinability and formability</li>
                                    <li>Corrosion resistance</li>
                                    <li>Durability and strength</li>
                                    <li>Aesthetic appeal</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Copper Plates
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        High Conductivity: Copper plates are highly conductive, making them ideal for applications requiring efficient thermal and electrical performance.
                                    </li>
                                    <li>
                                        Machinability: Copper is easy to machine, allowing for precise cuts and shapes.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Copper plates have natural resistance to corrosion, particularly in atmospheric environments.
                                    </li>
                                    <li>
                                        Durability: Copper plates are strong and durable, suitable for both structural and functional applications.
                                    </li>
                                    <li>
                                        Aesthetic Qualities: Copper’s attractive color and finish make it a popular choice for decorative purposes.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Copper Plate Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Grades: Available in various grades including C11000 (pure copper), C14500 (phosphor bronze), and C28000 (commercial bronze).
                                    </li>
                                    <li>
                                        Surface Finish: Available in different finishes such as polished, brushed, or matte, depending on the application.
                                    </li>
                                    <li>
                                        Thickness Range: Copper plates are available in various thicknesses, from thin foils to thick plates.
                                    </li>
                                    <li>
                                        Fabrication: Can be cut, drilled, and shaped to meet specific requirements.
                                    </li>
                                    <li>
                                        Thermal and Electrical Properties: Excellent for applications requiring high conductivity and heat dissipation.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Copper Plate Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: C11000, C14500, C28000, and other copper alloys
                                    </li>
                                    <li>
                                        Size Range: Custom sizes available, with standard sheets typically up to 72" x 120"
                                    </li>
                                    <li>
                                        Thickness Range: From 0.010" to 6" thick, with custom thicknesses available upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM B152, ASTM B187, ASTM B370
                                    </li>
                                    <li>
                                        Finish Options: Available in polished, brushed, and custom finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={copperPlates}
                                alt="Copper Plates"
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

export default CopperPlates;
