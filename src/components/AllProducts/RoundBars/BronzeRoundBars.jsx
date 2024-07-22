import React from "react";
import Layout from "../../common/Layout";
import bronzeRoundBars from "../../../assets/allProductsImages/Bronze Round Bars.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const BronzeRoundBars = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Bronze Round Bars
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={bronzeRoundBars}
                                    alt="Bronze Round Bars"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Bronze round bars are known for their exceptional strength, durability, and resistance to corrosion and wear. Made from various bronze alloys, these bars are used in applications where high performance and longevity are required, such as in marine, industrial, and architectural environments.
                                </p>
                                <p className="mb-2">
                                    Bronze round bars offer excellent machinability and can be used in a range of applications from bearings and bushings to structural components.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High strength and durability</li>
                                    <li>Excellent corrosion resistance</li>
                                    <li>Good machinability</li>
                                    <li>Wear resistance</li>
                                    <li>High thermal and electrical conductivity</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Bronze Round Bars
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Strength and Durability: Bronze round bars exhibit high strength and durability, making them suitable for heavy-duty applications.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Offers excellent resistance to corrosion, particularly in marine and industrial environments.
                                    </li>
                                    <li>
                                        Machinability: Easily machinable, allowing for precise fabrication and customization.
                                    </li>
                                    <li>
                                        Wear Resistance: Bronze is known for its resistance to wear and tear, making it ideal for components subjected to friction.
                                    </li>
                                    <li>
                                        Thermal and Electrical Conductivity: Provides good thermal and electrical conductivity, useful in various applications.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Bronze Round Bar Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Composition: Typically made from copper alloyed with tin, and sometimes with additional elements such as phosphorus or aluminum.
                                    </li>
                                    <li>
                                        Surface Finish: Available in various finishes, including polished, brushed, and matte.
                                    </li>
                                    <li>
                                        Diameter Range: Bronze round bars are available in a range of diameters, with custom sizes available upon request.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily machined, cut, and shaped to meet specific design needs.
                                    </li>
                                    <li>
                                        Standards: Complies with industry standards for bronze materials.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Bronze Round Bar Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: Bronze (C93200, C95400, C86300)
                                    </li>
                                    <li>
                                        Diameter Range: Custom diameters available, with standard bars typically ranging from 1/4" to 12" in diameter
                                    </li>
                                    <li>
                                        Length: Available in standard lengths, with custom lengths upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM B505, ASTM B271, ASTM B22
                                    </li>
                                    <li>
                                        Finish Options: Available in polished, brushed, and matte finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={bronzeRoundBars}
                                alt="Bronze Round Bars"
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

export default BronzeRoundBars;
