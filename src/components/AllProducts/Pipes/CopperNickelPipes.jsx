import React from "react";
import Layout from "../../common/Layout";
import copperNickelPipes from "../../../assets/allProductsImages/Copper Nickel Pipes.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const CopperNickelPipes = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Copper-Nickel Pipes
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={copperNickelPipes}
                                    alt="Copper-Nickel Pipes"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Copper-nickel pipes are made from a blend of copper and nickel, offering a combination of high strength, excellent corrosion resistance, and good thermal and electrical conductivity. These pipes are widely used in marine environments, chemical processing, and various industrial applications where resistance to seawater and corrosive agents is crucial.
                                </p>
                                <p className="mb-2">
                                    The addition of nickel enhances the corrosion resistance of copper, particularly in harsh environments. This makes copper-nickel pipes ideal for applications involving saltwater or other corrosive substances.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>High resistance to seawater corrosion</li>
                                    <li>Good thermal and electrical conductivity</li>
                                    <li>Excellent strength and durability</li>
                                    <li>Low maintenance requirements</li>
                                    <li>Good resistance to biofouling</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Copper-Nickel Pipes
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Corrosion Resistance: Copper-nickel pipes exhibit outstanding resistance to seawater corrosion, making them suitable for marine and offshore applications.
                                    </li>
                                    <li>
                                        Strength and Durability: These pipes offer excellent mechanical strength and durability, ensuring long-term performance in demanding environments.
                                    </li>
                                    <li>
                                        Thermal and Electrical Conductivity: Copper-nickel alloys maintain good thermal and electrical conductivity, useful in various industrial applications.
                                    </li>
                                    <li>
                                        Low Maintenance: The resistance to corrosion reduces the need for frequent maintenance and replacement.
                                    </li>
                                    <li>
                                        Biofouling Resistance: Copper-nickel pipes are resistant to biofouling, which helps maintain performance and reduces the buildup of marine organisms.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Copper-Nickel Pipe Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Various Alloys: Copper-nickel pipes are available in different alloys, such as CuNi 90/10 and CuNi 70/30, each offering specific properties for various applications.
                                    </li>
                                    <li>
                                        Seamless and Welded Options: Available in both seamless and welded forms to suit different operational requirements.
                                    </li>
                                    <li>
                                        Marine Applications: Ideal for use in marine environments, including shipbuilding, offshore platforms, and desalination plants.
                                    </li>
                                    <li>
                                        Customization: Pipes can be customized in terms of size, thickness, and finish to meet specific application needs.
                                    </li>
                                    <li>
                                        Durability: Known for their durability and long service life, even in aggressive environments.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Copper-Nickel Pipe Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Material Grades: CuNi 90/10, CuNi 70/30
                                    </li>
                                    <li>
                                        Size Range: From 1/8" to 24" in diameter, with custom sizes available upon request
                                    </li>
                                    <li>
                                        Wall Thickness: Available in various thicknesses, including Schedule 10, 40, and 80
                                    </li>
                                    <li>
                                        Pressure Rating: Class 150 to 2500, depending on the pipe size and wall thickness
                                    </li>
                                    <li>
                                        Standards and Specifications: ASTM B466, ASTM B467, ISO 6722
                                    </li>
                                    <li>
                                        Finish Options: Available in various finishes, including annealed, pickled, and polished
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={copperNickelPipes}
                                alt="Copper-Nickel Pipes"
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

export default CopperNickelPipes;
