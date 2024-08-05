import React from "react";
import Layout from "../../common/Layout";
import ssPipes from "../../../assets/allProductsImages/Stainless Steel Pipes.png"
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import { useNavigate } from "react-router-dom";

const StainlessSteelPipes = () => {

    const navigate = useNavigate();
  return (
    <Layout>
      {/* <LayoutSec1 title={"Stainless Steel"}> */}
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1
                className="text-3xl font-bold mb-4"
            
              >
                Stainless Steel Pipes
              </h1>

              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={ssPipes}
                  alt="Stainless Steel Pipes"
                  className="w-full h-auto mb-6 rounded shadow-lg"
               
                />
              </div>

              <div className="mb-6">
                <h2
                  className="text-xl font-semibold mb-2"
           
                >
                  Introduction
                </h2>
                <p
                  className="mb-2"
              
                >
                  Stainless steel pipes are a versatile and highly durable
                  option for various piping needs. Made from stainless steel,
                  these pipes offer exceptional resistance to corrosion, high
                  temperatures, and oxidation. They are widely used in
                  industries requiring hygienic, robust, and long-lasting
                  solutions, including construction, food processing, chemical
                  processing, and automotive applications.
                </p>
                <p
                  className="mb-2"
           
                >
                  The unique properties of stainless steel, such as its
                  resistance to rust and staining, combined with its ability to
                  maintain strength at high temperatures, make these pipes an
                  ideal choice for both residential and industrial applications.
                </p>
                <ul
                  className="list-disc list-inside"
          
                >
                  <li>
                    Corrosion-resistant, maintaining structural integrity in
                    harsh environments
                  </li>
                  <li>
                    High tensile strength, ensuring reliability and longevity
                  </li>
                  <li>
                    Temperature resistant, suitable for both high and low
                    temperature applications
                  </li>
                  <li>
                    Low maintenance, offering a cost-effective solution over
                    time
                  </li>
                  <li>
                    Aesthetic appeal, providing a clean, modern look for visible
                    installations
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h2
                  className="text-xl font-semibold mb-2"
           
                >
                  Features of Stainless Steel Pipes
                </h2>
                <ul
                  className="list-disc list-inside"
             
                >
                  <li>
                    Corrosion Resistance: Stainless steel pipes exhibit superior
                    resistance to corrosion and rust due to their chromium
                    content, making them ideal for use in corrosive environments
                    such as marine and chemical processing industries.
                  </li>
                  <li>
                    High Strength and Durability: These pipes offer excellent
                    tensile strength, ensuring they can withstand significant
                    pressure and mechanical stress without deforming or
                    breaking. They are particularly suited for high-pressure and
                    high-stress applications.
                  </li>
                  <li>
                    Temperature Tolerance: Stainless steel pipes can endure
                    extreme temperatures, from cryogenic levels to high heat,
                    making them versatile for various temperature-sensitive
                    applications.
                  </li>
                  <li>
                    Hygienic Properties: The smooth surface of stainless steel
                    pipes resists bacterial growth and contamination, making
                    them a preferred choice for the food and beverage industry,
                    as well as in pharmaceutical and medical applications.
                  </li>
                  <li>
                    Ease of Fabrication and Installation: Stainless steel pipes
                    can be easily fabricated into various shapes and sizes, and
                    they can be welded, cut, and threaded with ease. This
                    adaptability allows for customization in different piping
                    systems.
                  </li>
                  <li>
                    Longevity and Low Maintenance: The durability of stainless
                    steel minimizes the need for frequent repairs or
                    replacements, reducing long-term maintenance costs and
                    enhancing overall cost-effectiveness.
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h2
                  className="text-2xl font-semibold text-gray-800 mb-4"
              
                >
                  Stainless Steel Pipe Characteristics
                </h2>
                <ul
                  className="list-disc list-inside text-gray-700 leading-relaxed"
            
                >
                  <li>
                    Seamless and Welded Options: Stainless steel pipes are
                    available in both seamless and welded forms. Seamless pipes
                    are manufactured without welding seams and are ideal for
                    applications requiring high strength and reliability, while
                    welded pipes are cost-effective and suitable for many
                    standard applications.
                  </li>
                  <li>
                    Varied Grades and Alloys: Stainless steel pipes come in
                    various grades, including 304, 316, and 321, each offering
                    different properties such as enhanced corrosion resistance
                    or higher temperature tolerance. Selecting the appropriate
                    grade ensures optimal performance for specific applications.
                  </li>
                  <li>
                    Aesthetic Qualities: The polished surface of stainless steel
                    pipes offers an attractive finish, making them suitable for
                    visible installations such as architectural features,
                    handrails, and decorative elements.
                  </li>
                  <li>
                    Resistance to Scaling and Pitting: Stainless steel pipes
                    resist scaling and pitting, even in aggressive environments,
                    which helps in maintaining their appearance and
                    functionality over time.
                  </li>
                  <li>
                    Chemical Resistance: Stainless steel pipes can withstand
                    exposure to various chemicals, making them suitable for
                    chemical processing and handling applications.
                  </li>
                </ul>
              </div>

              <div
                className="mb-6"
           
              >
                <h2 className="text-xl font-semibold mb-2 mt-4">
                  Stainless Steel Pipe Specifications
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    Material Grades: Stainless Steel Grades 304, 316, 321, 410,
                    430
                  </li>
                  <li>
                    Size Range: From 1/8" to 24" in diameter, with custom sizes
                    available upon request
                  </li>
                  <li>
                    Wall Thickness: Available in various thicknesses, including
                    Schedule 10, 40, and 80
                  </li>
                  <li>
                    Pressure Rating: Class 150 to 2500, depending on the pipe
                    size and wall thickness
                  </li>
                  <li>
                    Standards and Specifications: ASTM A312, ASTM A213, ISO
                    1127, DIN 17456, EN 10216-5
                  </li>
                  <li>
                    Finish Options: Available in various finishes, including
                    annealed, pickled, and polished
                  </li>
                </ul>
              </div>

       
            </div>

            <div className="lg:w-1/4 mt-8 lg:mt-0 md:block hidden">
              <img
                src={ssPipes}
                alt="Flanges"
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
      {/* </LayoutSec1> */}
    </Layout>
  );
};

export default StainlessSteelPipes;
