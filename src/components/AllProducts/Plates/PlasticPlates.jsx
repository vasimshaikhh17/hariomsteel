import React from "react";
import Layout from "../../common/Layout";
import plasticPlates from "../../../assets/allProductsImages/plastic Plates.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const PlasticPlates = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-3/4 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Plastic Plates
                            </h1>

                            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={plasticPlates}
                                    alt="Plastic Plates"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Plastic plates are versatile materials used in a wide range of applications, from industrial to decorative. Made from various types of plastics, these plates are valued for their lightweight properties, resistance to corrosion, and ease of fabrication. They are commonly used in manufacturing, signage, and as protective barriers in various industries.
                                </p>
                                <p className="mb-2">
                                    Due to their diverse range of properties, plastic plates offer practical solutions for applications requiring durability, flexibility, and cost-effectiveness.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Lightweight and durable</li>
                                    <li>Corrosion and chemical resistance</li>
                                    <li>Ease of fabrication and machining</li>
                                    <li>Variety of colors and finishes</li>
                                    <li>Cost-effective compared to metals</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Plastic Plates
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Lightweight: Plastic plates are significantly lighter than metal plates, making them easier to handle and install.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Plastic plates resist corrosion and chemicals, making them suitable for harsh environments.
                                    </li>
                                    <li>
                                        Machinability: Easy to cut, drill, and shape, allowing for customization and precision.
                                    </li>
                                    <li>
                                        Versatility: Available in various types such as acrylic, polycarbonate, and PVC, each offering specific properties for different applications.
                                    </li>
                                    <li>
                                        Cost-Effective: Generally more affordable than metal plates, providing a budget-friendly option for many applications.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Plastic Plate Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Types: Available in various types including acrylic, polycarbonate, PVC, and polyethylene, each suited to specific uses.
                                    </li>
                                    <li>
                                        Surface Finish: Offered in various finishes such as glossy, matte, and textured.
                                    </li>
                                    <li>
                                        Thickness Range: Plastic plates come in a range of thicknesses, suitable for different applications.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily fabricated into custom shapes and sizes as needed.
                                    </li>
                                    <li>
                                        Temperature Tolerance: Plastic plates have varying degrees of heat resistance depending on the material type.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Plastic Plate Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Types: Acrylic, Polycarbonate, PVC, Polyethylene, and other plastics
                                    </li>
                                    <li>
                                        Size Range: Custom sizes available, with standard sheets typically up to 48" x 96"
                                    </li>
                                    <li>
                                        Thickness Range: From 0.020" to 2" thick, with custom thicknesses available upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM D-1238, ASTM D-256, ASTM D-638
                                    </li>
                                    <li>
                                        Finish Options: Available in glossy, matte, textured, and custom finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={plasticPlates}
                                alt="Plastic Plates"
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

export default PlasticPlates;
