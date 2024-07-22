import React from "react";
import Layout from "../../common/Layout";
import nickelPlates from "../../../assets/allProductsImages/Nickel Plates.webp";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const NickelPlates = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Nickel Plates
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={nickelPlates}
                                    alt="Nickel Plates"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Nickel plates are renowned for their exceptional corrosion resistance, high strength, and excellent thermal and electrical conductivity. Made from pure nickel or nickel alloys, these plates are used in various industrial applications, including aerospace, marine, and chemical processing. Nickel plates are valued for their durability and resistance to oxidation, making them suitable for harsh environments.
                                </p>
                                <p className="mb-2">
                                    With their versatile properties, nickel plates are an ideal choice for applications requiring high performance under extreme conditions.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Exceptional corrosion resistance</li>
                                    <li>High strength and durability</li>
                                    <li>Excellent thermal and electrical conductivity</li>
                                    <li>Good machinability and formability</li>
                                    <li>Resistance to oxidation and high temperatures</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Nickel Plates
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Nickel plates exhibit excellent resistance to corrosion, including resistance to acids and alkaline environments.
                                    </li>
                                    <li>
                                        High Strength: Nickel plates provide high tensile strength and are capable of withstanding significant stress and pressure.
                                    </li>
                                    <li>
                                        Thermal and Electrical Conductivity: Nickel plates are efficient conductors of heat and electricity, suitable for various applications.
                                    </li>
                                    <li>
                                        Machinability: Nickel is machinable, allowing for precise fabrication and shaping of plates.
                                    </li>
                                    <li>
                                        Oxidation Resistance: Nickel plates maintain their properties even in high-temperature environments, resisting oxidation and degradation.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Nickel Plate Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Grades: Available in various grades including Nickel 200, Nickel 201, and Nickel 600, each offering specific properties for different applications.
                                    </li>
                                    <li>
                                        Surface Finish: Nickel plates can be provided in different finishes, including matte, polished, or brushed.
                                    </li>
                                    <li>
                                        Thickness Range: Nickel plates come in various thicknesses, suitable for different industrial requirements.
                                    </li>
                                    <li>
                                        Fabrication: Can be cut, drilled, and shaped to meet specific needs.
                                    </li>
                                    <li>
                                        Thermal and Electrical Properties: Ideal for applications requiring efficient heat dissipation and electrical conductivity.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Nickel Plate Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Nickel 200, Nickel 201, Nickel 600, and other nickel alloys
                                    </li>
                                    <li>
                                        Size Range: Custom sizes available, with standard sheets typically up to 72" x 120"
                                    </li>
                                    <li>
                                        Thickness Range: From 0.010" to 4" thick, with custom thicknesses available upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM B162, ASTM B163, ASTM B164
                                    </li>
                                    <li>
                                        Finish Options: Available in matte, polished, brushed, and custom finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={nickelPlates}
                                alt="Nickel Plates"
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

export default NickelPlates;
