import React from "react";
import Layout from "../../common/Layout";
import lapJointFlanges from "../../../assets/allProductsImages/lap-joint-flange.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const LapJointFlanges = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div className="text-fontDefault p-4 prod">
                    <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 lg:pr-6">
                            <h1 className="text-3xl font-bold mb-4">
                                Lap Joint Flanges
                            </h1>

                            <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={lapJointFlanges}
                                    alt="Lap Joint Flanges"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="mb-2">
                                    Lap joint flanges are a type of flange that is commonly used in piping systems that require frequent disassembly for inspection, cleaning, or replacement. These flanges are designed to be used with a stub end, which is welded to the pipe, and the flange itself can rotate around the stub end. This design allows for easy alignment and assembly, making lap joint flanges ideal for applications where frequent maintenance is needed.
                                </p>
                                <p className="mb-2">
                                    The flexibility and ease of installation of lap joint flanges make them suitable for use in low-pressure and non-critical applications, such as water treatment plants, chemical processing, and food processing industries. They are also preferred in systems where space is limited or where the piping needs to be frequently dismantled.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Easy alignment and assembly</li>
                                    <li>Ideal for frequent disassembly and maintenance</li>
                                    <li>Suitable for low-pressure applications</li>
                                    <li>Commonly used with stub ends</li>
                                    <li>Allows for flexibility in installation</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Features of Lap Joint Flanges
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Rotatable Flange: The flange can rotate around the stub end, allowing for easy alignment during installation and assembly.
                                    </li>
                                    <li>
                                        Easy to Install: Lap joint flanges are designed for easy and quick installation, making them ideal for systems that require frequent disassembly.
                                    </li>
                                    <li>
                                        Cost-Effective: These flanges are often more cost-effective than other types of flanges, especially in systems with non-critical applications.
                                    </li>
                                    <li>
                                        Versatile: Suitable for use in various industries, including water treatment, chemical processing, and food processing.
                                    </li>
                                    <li>
                                        Reduced Bolt Hole Alignment Issues: The ability to rotate the flange helps eliminate bolt hole alignment problems, simplifying the assembly process.
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Lap Joint Flange Characteristics
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    <li>
                                        Available in Various Sizes: Lap joint flanges are available in a range of sizes to fit different piping requirements.
                                    </li>
                                    <li>
                                        Material Options: Manufactured from materials such as stainless steel, carbon steel, and alloy steel to suit different applications.
                                    </li>
                                    <li>
                                        Customizable: Can be customized with various coatings and finishes to enhance corrosion resistance and durability.
                                    </li>
                                    <li>
                                        Precision Engineering: Ensures a perfect fit and reliable performance in complex piping systems.
                                    </li>
                                    <li>
                                        Industry Standards: Complies with international standards such as ANSI, ASME, and DIN for compatibility and reliability.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2 mt-4">
                                    Lap Joint Flange Specifications
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Standard: ANSI, ASME, DIN
                                    </li>
                                    <li>
                                        Material Options: Stainless Steel, Carbon Steel, Alloy Steel
                                    </li>
                                    <li>
                                        Size Range: Various sizes available to meet different requirements
                                    </li>
                                    <li>
                                        Pressure Rating: Suitable for low-pressure applications
                                    </li>
                                    <li>
                                        Finish Options: Available with various coatings and finishes to enhance durability
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
                            <img
                                src={lapJointFlanges}
                                alt="Lap Joint Flanges"
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

export default LapJointFlanges;
