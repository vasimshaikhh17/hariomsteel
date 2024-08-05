import React from "react";
import Layout from "../../common/Layout";
import hexBoltsImage from "../../../assets/newImages/HexBolt.jpg";
import hexDimension from "../../../assets/newImages/hex+bolt+dimensions.jpeg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";

const HexBolts = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Hex Bolt
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={hexBoltsImage}
                  alt="Stainless Steel Gaskets"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  Hex Bolts are standard fastening components characterized by
                  their six-sided head, which allows for secure tightening with
                  a wrench or socket. They are widely used in various industries
                  including construction, automotive, and machinery due to their
                  durability and strength. The hexagonal shape provides a
                  greater surface area for applying torque, ensuring a tight and
                  reliable connection.
                </p>
                <p className="mb-2">
                  These bolts are available in various materials and sizes to
                  accommodate different load requirements and environmental
                  conditions.
                </p>
                <ul className="list-disc list-inside">
                  <li>Standard six-sided head for secure fastening</li>
                  <li>Suitable for a wide range of applications</li>
                  <li>Available in multiple materials and sizes</li>
                  <li>Provides strong and reliable connections</li>
                  <li>Easy to install with standard tools</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Hex Bolt Specification Table
              </h3>
              <div className="mb-8 overflow-x-auto">
                <table className="min-w-full border text-center">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-2 border">Specification</th>
                      <th className="px-4 py-2 border">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">ASME B18.2.1</td>
                      <td className="px-4 py-2 border">
                        Dimensional specifications for hex bolts
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">ASTM A307</td>
                      <td className="px-4 py-2 border">
                        Specification for carbon steel bolts and studs, 60,000
                        psi tensile strength
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">ASTM A325</td>
                      <td className="px-4 py-2 border">
                        Specification for high-strength bolts for structural
                        steel joints
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">ASTM A490</td>
                      <td className="px-4 py-2 border">
                        Specification for heat-treated steel structural bolts,
                        150,000 psi tensile strength
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">ASTM F3125</td>
                      <td className="px-4 py-2 border">
                        Specification for high-strength structural bolts, steel
                        and alloy steel, heat treated
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">SAE J429</td>
                      <td className="px-4 py-2 border">
                        Specification for mechanical and performance
                        requirements for externally threaded fasteners
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 mt-4">
                  Hex Bolt Specifications
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    Material Grades: Carbon Steel, Alloy Steel, Stainless Steel
                  </li>
                  <li>
                    Size Range: From 1/4" to 6" in diameter, with various
                    lengths available
                  </li>
                  <li>Thread Types: Available in coarse and fine threads</li>
                  <li>
                    Strength Ratings: Designed for specific load capacities,
                    with detailed ratings provided
                  </li>
                  <li>
                    Standards and Specifications: ASTM A307, ASTM A325, ISO 4014
                  </li>
                  <li>
                    Finish Options: Includes options such as galvanized, black
                    oxide, and plain steel
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4">Hex Bolt Dimensions</h2>

              <img src={hexDimension} alt="" />
              <div className="overflow-x-auto">
                <table className="min-w-full border text-center">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-2 border">Bolt Size</th>
                      <th className="px-4 py-2 border">A (max)</th>
                      <th className="px-4 py-2 border">B</th>
                      <th className="px-4 py-2 border">C (min)</th>
                      <th className="px-4 py-2 border">D</th>
                      <th className="px-4 py-2 border">E (max)</th>
                      <th className="px-4 py-2 border">E (min)</th>
                      <th className="px-4 py-2 border">F (6" and shorter)</th>
                      <th className="px-4 py-2 border">F (over 6")</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">1/4"</td>
                      <td className="px-4 py-2 border">0.260</td>
                      <td className="px-4 py-2 border">7/16</td>
                      <td className="px-4 py-2 border">0.484</td>
                      <td className="px-4 py-2 border">11/64</td>
                      <td className="px-4 py-2 border">0.03</td>
                      <td className="px-4 py-2 border">0.01</td>
                      <td className="px-4 py-2 border">0.750</td>
                      <td className="px-4 py-2 border">1.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">5/16"</td>
                      <td className="px-4 py-2 border">0.324</td>
                      <td className="px-4 py-2 border">1/2</td>
                      <td className="px-4 py-2 border">0.552</td>
                      <td className="px-4 py-2 border">7/32</td>
                      <td className="px-4 py-2 border">0.03</td>
                      <td className="px-4 py-2 border">0.01</td>
                      <td className="px-4 py-2 border">0.875</td>
                      <td className="px-4 py-2 border">1.125</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">3/8"</td>
                      <td className="px-4 py-2 border">0.388</td>
                      <td className="px-4 py-2 border">9/16</td>
                      <td className="px-4 py-2 border">0.620</td>
                      <td className="px-4 py-2 border">1/4</td>
                      <td className="px-4 py-2 border">0.03</td>
                      <td className="px-4 py-2 border">0.01</td>
                      <td className="px-4 py-2 border">1.000</td>
                      <td className="px-4 py-2 border">1.250</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">7/16"</td>
                      <td className="px-4 py-2 border">0.452</td>
                      <td className="px-4 py-2 border">5/8</td>
                      <td className="px-4 py-2 border">0.687</td>
                      <td className="px-4 py-2 border">19/64</td>
                      <td className="px-4 py-2 border">0.03</td>
                      <td className="px-4 py-2 border">0.01</td>
                      <td className="px-4 py-2 border">1.125</td>
                      <td className="px-4 py-2 border">1.375</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1/2"</td>
                      <td className="px-4 py-2 border">0.515</td>
                      <td className="px-4 py-2 border">3/4</td>
                      <td className="px-4 py-2 border">0.826</td>
                      <td className="px-4 py-2 border">11/32</td>
                      <td className="px-4 py-2 border">0.03</td>
                      <td className="px-4 py-2 border">0.01</td>
                      <td className="px-4 py-2 border">1.250</td>
                      <td className="px-4 py-2 border">1.500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">5/8"</td>
                      <td className="px-4 py-2 border">0.642</td>
                      <td className="px-4 py-2 border">15/16</td>
                      <td className="px-4 py-2 border">1.033</td>
                      <td className="px-4 py-2 border">27/64</td>
                      <td className="px-4 py-2 border">0.06</td>
                      <td className="px-4 py-2 border">0.02</td>
                      <td className="px-4 py-2 border">1.500</td>
                      <td className="px-4 py-2 border">1.750</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">3/4"</td>
                      <td className="px-4 py-2 border">0.768</td>
                      <td className="px-4 py-2 border">1-1/8</td>
                      <td className="px-4 py-2 border">1.240</td>
                      <td className="px-4 py-2 border">1/2</td>
                      <td className="px-4 py-2 border">0.06</td>
                      <td className="px-4 py-2 border">0.02</td>
                      <td className="px-4 py-2 border">1.750</td>
                      <td className="px-4 py-2 border">2.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">7/8"</td>
                      <td className="px-4 py-2 border">0.895</td>
                      <td className="px-4 py-2 border">1-5/16</td>
                      <td className="px-4 py-2 border">1.447</td>
                      <td className="px-4 py-2 border">37/64</td>
                      <td className="px-4 py-2 border">0.06</td>
                      <td className="px-4 py-2 border">0.02</td>
                      <td className="px-4 py-2 border">2.000</td>
                      <td className="px-4 py-2 border">2.250</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1"</td>
                      <td className="px-4 py-2 border">1.022</td>
                      <td className="px-4 py-2 border">1-1/2</td>
                      <td className="px-4 py-2 border">1.653</td>
                      <td className="px-4 py-2 border">43/64</td>
                      <td className="px-4 py-2 border">0.09</td>
                      <td className="px-4 py-2 border">0.03</td>
                      <td className="px-4 py-2 border">2.250</td>
                      <td className="px-4 py-2 border">2.500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1-1/8"</td>
                      <td className="px-4 py-2 border">1.149</td>
                      <td className="px-4 py-2 border">1-11/16</td>
                      <td className="px-4 py-2 border">1.860</td>
                      <td className="px-4 py-2 border">3/4</td>
                      <td className="px-4 py-2 border">0.09</td>
                      <td className="px-4 py-2 border">0.03</td>
                      <td className="px-4 py-2 border">2.500</td>
                      <td className="px-4 py-2 border">2.750</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1-1/4"</td>
                      <td className="px-4 py-2 border">1.277</td>
                      <td className="px-4 py-2 border">1-7/8</td>
                      <td className="px-4 py-2 border">2.066</td>
                      <td className="px-4 py-2 border">27/32</td>
                      <td className="px-4 py-2 border">0.09</td>
                      <td className="px-4 py-2 border">0.03</td>
                      <td className="px-4 py-2 border">2.750</td>
                      <td className="px-4 py-2 border">3.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1-1/2"</td>
                      <td className="px-4 py-2 border">1.531</td>
                      <td className="px-4 py-2 border">2-1/4</td>
                      <td className="px-4 py-2 border">2.480</td>
                      <td className="px-4 py-2 border">1</td>
                      <td className="px-4 py-2 border">0.13</td>
                      <td className="px-4 py-2 border">0.04</td>
                      <td className="px-4 py-2 border">3.250</td>
                      <td className="px-4 py-2 border">3.500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1-3/4"</td>
                      <td className="px-4 py-2 border">1.784</td>
                      <td className="px-4 py-2 border">2-5/8</td>
                      <td className="px-4 py-2 border">2.894</td>
                      <td className="px-4 py-2 border">1-5/32</td>
                      <td className="px-4 py-2 border">0.13</td>
                      <td className="px-4 py-2 border">0.04</td>
                      <td className="px-4 py-2 border">3.750</td>
                      <td className="px-4 py-2 border">4.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">2"</td>
                      <td className="px-4 py-2 border">2.037</td>
                      <td className="px-4 py-2 border">3</td>
                      <td className="px-4 py-2 border">3.308</td>
                      <td className="px-4 py-2 border">1-11/32</td>
                      <td className="px-4 py-2 border">0.13</td>
                      <td className="px-4 py-2 border">0.04</td>
                      <td className="px-4 py-2 border">4.250</td>
                      <td className="px-4 py-2 border">4.500</td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Hex Bolt Applications :
                </h3>
                <ul className="list-disc list-inside">
                  <li>Construction and building projects</li>
                  <li>Mechanical and structural assemblies</li>
                  <li>Automotive and machinery components</li>
                  <li>Furniture and home improvement projects</li>
                  <li>Bridges and infrastructure</li>
                  <li>Oil and gas pipelines</li>
                  <li>Marine and offshore installations</li>
                  <li>Electrical and electronic assemblies</li>
                  <li>Heavy equipment and industrial machinery</li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={hexBoltsImage}
                alt="Anchor Bolts"
                className="w-full h-auto mb-6 rounded shadow-lg"
              />
              {/* <MaterialGrade /> */}
              <RelatedProducts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HexBolts;
