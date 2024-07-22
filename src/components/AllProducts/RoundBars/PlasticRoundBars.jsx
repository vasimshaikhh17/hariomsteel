import React from "react";
import Layout from "../../common/Layout";
import plasticRoundBars from "../../../assets/allProductsImages/Plastic Round Bars.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const PlasticRoundBars = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Plastic Round Bars
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={plasticRoundBars}
                                    alt="Plastic Round Bars"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Plastic round bars are versatile materials used in a variety of applications due to their lightweight, corrosion-resistant, and cost-effective nature. Made from high-quality plastics like PVC, Nylon, or Polycarbonate, these bars offer good mechanical properties and can be easily machined to meet specific requirements.
                                </p>
                                <p className="mb-2">
                                    Ideal for industries such as manufacturing, construction, and prototyping, plastic round bars provide a reliable and affordable alternative to metal bars.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Lightweight and easy to handle</li>
                                    <li>Good corrosion resistance</li>
                                    <li>Cost-effective compared to metals</li>
                                    <li>Machinable to precise dimensions</li>
                                    <li>Available in various plastic types</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Plastic Round Bars
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Lightweight: Plastic round bars are significantly lighter than metal alternatives, making them easier to handle and transport.
                                    </li>
                                    <li>
                                        Corrosion Resistance: Excellent resistance to moisture and chemicals, reducing the risk of rust and degradation.
                                    </li>
                                    <li>
                                        Machinability: Easy to machine, cut, and shape according to specific project requirements.
                                    </li>
                                    <li>
                                        Cost-Effective: Generally more affordable than metal bars, making them a budget-friendly option for many applications.
                                    </li>
                                    <li>
                                        Versatility: Available in a variety of plastic types, including PVC, Nylon, and Polycarbonate, each offering different properties.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Plastic Round Bar Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Composition: Made from various types of plastics, including PVC (Polyvinyl Chloride), Nylon, and Polycarbonate.
                                    </li>
                                    <li>
                                        Surface Finish: Available in smooth, matte, or glossy finishes depending on the application requirements.
                                    </li>
                                    <li>
                                        Diameter Range: Plastic round bars come in a range of diameters, with custom sizes available upon request.
                                    </li>
                                    <li>
                                        Fabrication: Can be easily machined, drilled, and shaped to meet specific design needs.
                                    </li>
                                    <li>
                                        Standards: Meets relevant industry standards for plastic materials.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Plastic Round Bar Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material: PVC, Nylon, Polycarbonate
                                    </li>
                                    <li>
                                        Diameter Range: Custom diameters available, with standard bars typically ranging from 1/8" to 12" in diameter
                                    </li>
                                    <li>
                                        Length: Available in standard lengths, with custom lengths upon request
                                    </li>
                                    <li>
                                        Tolerance: Meets industry standards for dimensional accuracy and surface finish
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM D1784, ASTM D4066, ASTM D3965
                                    </li>
                                    <li>
                                        Finish Options: Available in smooth, matte, and glossy finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={plasticRoundBars}
                                alt="Plastic Round Bars"
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

export default PlasticRoundBars;
