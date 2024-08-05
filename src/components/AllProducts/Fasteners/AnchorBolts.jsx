import React from "react";
import Layout from "../../common/Layout";
import anchorBoltsImage from "../../../assets/newImages/anchorbolts.jpg";
import anchordimension from "../../../assets/newImages/anchordimensions.png";
import RelatedProducts from "../../ProductComponent/RelatedProducts";

const AnchorBolts = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Anchor Bolt
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={anchorBoltsImage}
                  alt="Anchor Bolts"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  Anchor bolts are essential fastening components designed to
                  attach structures or objects to concrete. They are crucial in
                  various applications, including construction, machinery
                  installation, and building anchorage. Anchor bolts provide
                  robust support and stability, ensuring that the connected
                  elements remain securely in place.
                </p>
                <p className="mb-2">
                  Available in different types and sizes, anchor bolts can meet
                  diverse load requirements and environmental conditions. Their
                  design ensures efficient load transfer, enhancing the overall
                  structural integrity.
                </p>
                <ul className="list-disc list-inside">
                  <li>Designed for securing structures to concrete</li>
                  <li>Essential for construction and machinery installation</li>
                  <li>Available in multiple materials and sizes</li>
                  <li>Provides strong and reliable connections</li>
                  <li>Variety of types to suit specific applications</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Anchor Bolt Specification Table
              </h3>
              <div className="mb-8 overflow-x-auto">
                <table className="min-w-full border text-center">
                  <thead className="bg-primary text-white">
                    <tr className="text-center">
                      <th className="px-4 py-2 border">Specification</th>
                      <th className="px-4 py-2 border">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">ASTM F1554</td>
                      <td className="px-4 py-2 border">
                        Specification for anchor bolts, steel, 36, 55, and
                        105-ksi yield strength
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">AISC 360</td>
                      <td className="px-4 py-2 border">
                        Specification for structural steel buildings, including
                        anchor bolt requirements
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">ACI 318</td>
                      <td className="px-4 py-2 border">
                        Building code requirements for structural concrete,
                        detailing anchor bolt usage
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">ISO 898-1</td>
                      <td className="px-4 py-2 border">
                        Mechanical properties of fasteners made of carbon steel
                        and alloy steel
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 mt-4">
                  Anchor Bolt Specifications
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
                    Standards and Specifications: ASTM F1554, AISC 360, ACI 318
                  </li>
                  <li>
                    Finish Options: Includes options such as galvanized, black
                    oxide, and plain steel
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Anchor Bolts Dimensions Chart:
              </h2>

              <img src={anchordimension} alt="" />
              <div className="overflow-x-auto">
                <table className="min-w-full  border text-center">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-2 px-4 border " colSpan={2}>
                        {" "}
                        Anchor
                      </th>
                      <th className="py-2 px-4 border " colSpan={3}>
                        {" "}
                        Dimension in MM
                      </th>
                      <th className="py-2 px-4 border " colSpan={2}>
                        {" "}
                        Minimum Edge Distance
                      </th>
                      <th className="py-2 px-4 border " colSpan={2}>
                        {" "}
                        Capacity
                      </th>
                    </tr>
                  </thead>

                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-2 px-4 border ">Dia in Inches</th>
                      <th className="py-2 px-4 border ">Dia in MM</th>
                   
                      <th className="py-2 px-4 border ">A Minimum Depth</th>
                      <th className="py-2 px-4 border ">C Thread Length</th>
                      <th className="py-2 px-4 border ">L Total Length</th>
                      <th className="py-2 px-4 border ">
                        MM To Center Bolts Tension
                      </th>
                      <th className="py-2 px-4 border ">
                        MM To Center Bolts Shear
                      </th>
                      <th className="py-2 px-4 border ">Capacity Shear KN</th>
                      <th className="py-2 px-4 border ">Capacity Tension KN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border ">1/2"</td>
                      <td className="py-2 px-4 border ">12</td>
                      <td className="py-2 px-4 border ">250</td>
                      <td className="py-2 px-4 border ">40</td>
                      <td className="py-2 px-4 border ">355</td>
                      <td className="py-2 px-4 border ">80</td>
                      <td className="py-2 px-4 border ">100</td>
                      <td className="py-2 px-4 border ">4.5</td>
                      <td className="py-2 px-4 border ">6.8</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">5/8"</td>
                      <td className="py-2 px-4 border ">16</td>
                      <td className="py-2 px-4 border ">250</td>
                      <td className="py-2 px-4 border ">40</td>
                      <td className="py-2 px-4 border ">355</td>
                      <td className="py-2 px-4 border ">85</td>
                      <td className="py-2 px-4 border ">125</td>
                      <td className="py-2 px-4 border ">6.8</td>
                      <td className="py-2 px-4 border ">7.7</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">3/4"</td>
                      <td className="py-2 px-4 border ">20</td>
                      <td className="py-2 px-4 border ">300</td>
                      <td className="py-2 px-4 border ">50</td>
                      <td className="py-2 px-4 border ">405</td>
                      <td className="py-2 px-4 border ">85</td>
                      <td className="py-2 px-4 border ">150</td>
                      <td className="py-2 px-4 border ">9.9</td>
                      <td className="py-2 px-4 border ">10.4</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">7/8"</td>
                      <td className="py-2 px-4 border ">22</td>
                      <td className="py-2 px-4 border ">360</td>
                      <td className="py-2 px-4 border ">50</td>
                      <td className="py-2 px-4 border ">460</td>
                      <td className="py-2 px-4 border ">85</td>
                      <td className="py-2 px-4 border ">175</td>
                      <td className="py-2 px-4 border ">14.0</td>
                      <td className="py-2 px-4 border ">13.1</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1"</td>
                      <td className="py-2 px-4 border ">24</td>
                      <td className="py-2 px-4 border ">410</td>
                      <td className="py-2 px-4 border ">65</td>
                      <td className="py-2 px-4 border ">510</td>
                      <td className="py-2 px-4 border ">90</td>
                      <td className="py-2 px-4 border ">175</td>
                      <td className="py-2 px-4 border ">18.5</td>
                      <td className="py-2 px-4 border ">15.8</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1-1/8"</td>
                      <td className="py-2 px-4 border ">27</td>
                      <td className="py-2 px-4 border ">460</td>
                      <td className="py-2 px-4 border ">75</td>
                      <td className="py-2 px-4 border ">560</td>
                      <td className="py-2 px-4 border ">90</td>
                      <td className="py-2 px-4 border ">200</td>
                      <td className="py-2 px-4 border ">23.4</td>
                      <td className="py-2 px-4 border ">15.8</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1-1/4"</td>
                      <td className="py-2 px-4 border ">32</td>
                      <td className="py-2 px-4 border ">510</td>
                      <td className="py-2 px-4 border ">75</td>
                      <td className="py-2 px-4 border ">610</td>
                      <td className="py-2 px-4 border ">100</td>
                      <td className="py-2 px-4 border ">225</td>
                      <td className="py-2 px-4 border ">29.7</td>
                      <td className="py-2 px-4 border ">18.0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1-3/8"</td>
                      <td className="py-2 px-4 border ">36</td>
                      <td className="py-2 px-4 border ">560</td>
                      <td className="py-2 px-4 border ">90</td>
                      <td className="py-2 px-4 border ">680</td>
                      <td className="py-2 px-4 border ">100</td>
                      <td className="py-2 px-4 border ">250</td>
                      <td className="py-2 px-4 border ">35.1</td>
                      <td className="py-2 px-4 border ">18.0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1-1/2"</td>
                      <td className="py-2 px-4 border ">39</td>
                      <td className="py-2 px-4 border ">610</td>
                      <td className="py-2 px-4 border ">90</td>
                      <td className="py-2 px-4 border ">730</td>
                      <td className="py-2 px-4 border ">100</td>
                      <td className="py-2 px-4 border ">275</td>
                      <td className="py-2 px-4 border ">43.2</td>
                      <td className="py-2 px-4 border ">20.4</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1-5/8"</td>
                      <td className="py-2 px-4 border ">42</td>
                      <td className="py-2 px-4 border ">660</td>
                      <td className="py-2 px-4 border ">100</td>
                      <td className="py-2 px-4 border ">800</td>
                      <td className="py-2 px-4 border ">125</td>
                      <td className="py-2 px-4 border ">300</td>
                      <td className="py-2 px-4 border ">50.9</td>
                      <td className="py-2 px-4 border ">23.0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1-3/4"</td>
                      <td className="py-2 px-4 border ">45</td>
                      <td className="py-2 px-4 border ">710</td>
                      <td className="py-2 px-4 border ">115</td>
                      <td className="py-2 px-4 border ">865</td>
                      <td className="py-2 px-4 border ">125</td>
                      <td className="py-2 px-4 border ">325</td>
                      <td className="py-2 px-4 border ">58.5</td>
                      <td className="py-2 px-4 border ">23.0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">2"</td>
                      <td className="py-2 px-4 border ">50</td>
                      <td className="py-2 px-4 border ">810</td>
                      <td className="py-2 px-4 border ">125</td>
                      <td className="py-2 px-4 border ">990</td>
                      <td className="py-2 px-4 border ">150</td>
                      <td className="py-2 px-4 border ">350</td>
                      <td className="py-2 px-4 border ">77.4</td>
                      <td className="py-2 px-4 border ">30.0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">2-1/4"</td>
                      <td className="py-2 px-4 border ">57</td>
                      <td className="py-2 px-4 border ">910</td>
                      <td className="py-2 px-4 border ">140</td>
                      <td className="py-2 px-4 border ">1100</td>
                      <td className="py-2 px-4 border ">150</td>
                      <td className="py-2 px-4 border ">400</td>
                      <td className="py-2 px-4 border ">101.7</td>
                      <td className="py-2 px-4 border ">40.0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">2-1/2"</td>
                      <td className="py-2 px-4 border ">64</td>
                      <td className="py-2 px-4 border ">1020</td>
                      <td className="py-2 px-4 border ">160</td>
                      <td className="py-2 px-4 border ">1240</td>
                      <td className="py-2 px-4 border ">175</td>
                      <td className="py-2 px-4 border ">450</td>
                      <td className="py-2 px-4 border ">125.6</td>
                      <td className="py-2 px-4 border ">50.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Anchor Bolt Applications:
                </h3>
                <ul className="list-disc list-inside">
                  <li>Foundation anchoring for buildings and structures</li>
                  <li>
                    Securing heavy machinery and equipment to concrete floors
                  </li>
                  <li>
                    Connecting steel columns and beams to concrete foundations
                  </li>
                  <li>Bridges and infrastructure projects</li>
                  <li>Telecommunication and utility pole installations</li>
                  <li>Wind turbine and solar panel mounting</li>
                  <li>
                    Oil and gas industry installations, including pipelines
                  </li>
                  <li>Marine and offshore constructions</li>
                  <li>Power plants and energy facilities</li>
                  <li>Highway sign and traffic signal foundations</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={anchorBoltsImage}
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

export default AnchorBolts;
