import React from "react";
import Layout from "../../common/Layout";
import anchorBoltsImage from "../../../assets/allProductsImages/anchor-bolts.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const AnchorBolts = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Anchor Bolts
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={anchorBoltsImage}
                                    alt="Anchor Bolts"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Anchor bolts are essential fasteners used to secure structures or machinery to concrete or masonry. They are typically embedded into the concrete during the pouring process or installed into pre-drilled holes. Anchor bolts provide stability and support to various structural components, ensuring they remain firmly in place.
                                </p>
                                <p className="mb-2">
                                    Commonly used in construction, industrial, and mechanical applications, anchor bolts come in various designs to suit different load capacities and installation requirements.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Provides strong anchorage to concrete and masonry</li>
                                    <li>Available in various designs and sizes</li>
                                    <li>Suitable for both temporary and permanent installations</li>
                                    <li>High load-bearing capacity for structural stability</li>
                                    <li>Resistant to environmental conditions</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Anchor Bolts
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Durable Construction: Made from high-quality steel or stainless steel for long-lasting performance.
                                    </li>
                                    <li>
                                        Versatile Design: Available in various types, including expansion bolts, wedge anchors, and sleeve anchors, to suit different applications.
                                    </li>
                                    <li>
                                        High Load Capacity: Designed to handle significant loads and provide strong support.
                                    </li>
                                    <li>
                                        Corrosion Resistant: Options available with protective coatings to resist environmental damage.
                                    </li>
                                    <li>
                                        Easy Installation: Designed for straightforward installation with minimal tools required.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Anchor Bolt Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Material Options: Typically made from steel, stainless steel, or other corrosion-resistant materials.
                                    </li>
                                    <li>
                                        Size Variations: Available in various diameters and lengths to fit different requirements.
                                    </li>
                                    <li>
                                        Customization: Custom sizes and designs can be manufactured based on specific needs.
                                    </li>
                                    <li>
                                        Load Ratings: Rated for different load capacities to match application demands.
                                    </li>
                                    <li>
                                        Compliance: Meets industry standards and specifications for safety and performance.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Anchor Bolt Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: Carbon Steel, Stainless Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: From 1/4" to 2" in diameter, with various lengths available
                                    </li>
                                    <li>
                                        Thread Type: Available in various thread types, including coarse and fine
                                    </li>
                                    <li>
                                        Load Ratings: Varies based on design and material, with detailed load capacities available upon request
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM A193, ASTM A307, ASTM F1554
                                    </li>
                                    <li>
                                        Finish Options: Options available include galvanized, zinc-plated, and coated finishes
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={anchorBoltsImage}
                                alt="Anchor Bolts"
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

export default AnchorBolts;
