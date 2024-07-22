import React from "react";
import Layout from "../../common/Layout";
import duplexImage from "../../../assets/allProductsImages/Duplex Super Duplex Pipes.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const DuplexSuperDuplexPipes = () => {
    const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="max-w-6xl mx-auto text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-2/3 lg:pr-6">
              <h1 className="text-3xl font-bold mb-4">Duplex & Super Duplex Pipes</h1>

              <div className="lg:w-1/3 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={duplexImage}
                  alt="Duplex & Super Duplex Pipes"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Introduction</h2>
                <p className="mb-2">
                  Duplex and Super Duplex pipes are high-performance materials designed to handle extreme environments. Combining both austenitic and ferritic stainless steels, these pipes offer remarkable strength, corrosion resistance, and durability. They are ideal for applications in industries such as oil and gas, chemical processing, and marine engineering.
                </p>
                <p className="mb-2">
                  With enhanced mechanical properties and superior resistance to stress corrosion cracking, Duplex and Super Duplex pipes are suitable for high-pressure and high-temperature environments, offering a longer lifespan compared to standard stainless steel pipes.
                </p>
                <ul className="list-disc list-inside">
                  <li>Exceptional strength and resistance to stress corrosion cracking</li>
                  <li>High resistance to corrosion, especially in chloride environments</li>
                  <li>Excellent weldability and machinability</li>
                  <li>Cost-effective solution with longer service life</li>
                  <li>Suitable for both high and low temperature applications</li>
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Features of Duplex & Super Duplex Pipes</h2>
                <ul className="list-disc list-inside">
                  <li>
                    Corrosion Resistance: Duplex and Super Duplex pipes exhibit superior resistance to corrosion, especially in chloride-rich environments, due to their high chromium and molybdenum content.
                  </li>
                  <li>
                    High Strength: These pipes offer high tensile strength and yield strength, making them suitable for high-pressure applications where other materials might fail.
                  </li>
                  <li>
                    Stress Corrosion Cracking Resistance: The dual-phase structure of Duplex and Super Duplex steels provides excellent resistance to stress corrosion cracking, a common problem in harsh environments.
                  </li>
                  <li>
                    Cost Efficiency: Their high strength allows for the use of thinner pipes, reducing material costs and installation expenses while maintaining performance.
                  </li>
                  <li>
                    Thermal Conductivity: Duplex and Super Duplex steels have better thermal conductivity compared to austenitic grades, which improves their performance in thermal applications.
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Duplex & Super Duplex Pipe Characteristics</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                  <li>
                    Seamless and Welded Options: Available in both seamless and welded forms to cater to different application needs. Seamless pipes provide superior strength and reliability, while welded pipes are more economical.
                  </li>
                  <li>
                    Various Grades and Alloys: Duplex steels are available in different grades, including 2205 and 2507, each tailored for specific applications. Choosing the correct grade ensures optimal performance.
                  </li>
                  <li>
                    Aesthetic Qualities: The polished finish of these pipes adds a sleek appearance, suitable for visible installations in architectural and decorative applications.
                  </li>
                  <li>
                    Resistance to Pitting and Crevice Corrosion: Duplex and Super Duplex steels have enhanced resistance to pitting and crevice corrosion, which helps in maintaining their integrity in aggressive environments.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 mt-4">Duplex & Super Duplex Pipe Specifications</h2>
                <ul className="list-disc list-inside">
                  <li>Material Grades: Duplex 2205, Super Duplex 2507</li>
                  <li>Size Range: From 1/4" to 24" in diameter, with custom sizes available</li>
                  <li>Wall Thickness: Various thicknesses, including Schedule 10, 40, and 80</li>
                  <li>Pressure Rating: Class 150 to 2500, depending on the pipe size and wall thickness</li>
                  <li>Standards and Specifications: ASTM A789, ASTM A790, ISO 1127</li>
                  <li>Finish Options: Available in annealed, pickled, and polished finishes</li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/3 mt-8 lg:mt-0 md:block hidden">
              <img
                src={duplexImage}
                alt="Duplex & Super Duplex Pipes"
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
                If you require any further information, Please do not hesitate
                to contact us.
              </h2>
              <button className="bg-primary hover:bg-tertiary text-fontPrimary font-bold py-2 px-4 rounded" onClick={()=>{navigate('/contact-us')}}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DuplexSuperDuplexPipes;
