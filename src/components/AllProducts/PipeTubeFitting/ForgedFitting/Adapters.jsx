import React from "react";
import Layout from "../../../common/Layout";
import adapters from "../../../../assets/newImages/adapter.jpg"
import adapterdiagram from "../../../../assets/newImages/adapterdiagram.jpg"
import RelatedProducts from "../../../ProductComponent/RelatedProducts";

const Adapters = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Adapters
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={adapters}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  Forged fittings adapters are essential components in piping
                  systems, designed to connect pipes of different sizes or
                  types, ensuring a seamless and secure transition. Known for
                  their versatility and adaptability, these adapters are widely
                  used in various industrial applications, including oil and
                  gas, chemical processing, and construction.
                </p>

                <br />

                <p>
                  Manufactured from high-quality forged steel, forged fittings
                  adapters offer exceptional strength and durability, providing
                  reliable performance even under high pressures and extreme
                  temperatures. These adapters comply with stringent
                  international standards, such as ASTM, ASME, and DIN, ensuring
                  superior quality and longevity.
                </p>

                <br />
                <div className="overflow-x-auto">
                  <h2 className="text-2xl font-bold">Material Grades :</h2>
                  <table className="min-w-full bg-white border text-center">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-2 border">Material Type</th>
                        <th className="px-4 py-2 border">Grades</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">Carbon Steel</td>
                        <td className="px-4 py-2 border">
                          :ASTM / ASME A/SA 105 ASTM / ASME A 350 , ASTM A 181
                          LF 2 / A516 Gr.70 A36, A694 F42, F46, F52, F60,
                          F65,ASTM A350, LF2, LF3
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                          ASTM A 182, A 240 F 304, 304L, 304H, 316, 316L, 316Ti,
                          310, 310S, 321, 321H, 317, 347, 347H, 904L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          {" "}
                          ASTM / ASME A/SA 182 F 44, F 45, F51, F 53, F 55, F
                          60, F 61
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Nickel</td>
                        <td className="px-4 py-2 border">200, 201</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Monel</td>
                        <td className="px-4 py-2 border">400, 500</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Inconel</td>
                        <td className="px-4 py-2 border">
                          600, 601, 625, 800, 825
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Hastelloy</td>
                        <td className="px-4 py-2 border">C-276</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />

                <h2 className="text-2xl font-bold">Adapters Specifications:</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border text-center">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-2 border">Specification</th>
                        <th className="px-4 py-2 border">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">Material</td>
                        <td className="px-4 py-2 border">
                          Carbon Steel, Stainless Steel, Alloy Steel, Brass,
                          PVC, Aluminum
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">Adapters</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Temperature Range</td>
                        <td className="px-4 py-2 border">
                          -40°C to 200°C (-40°F to 392°F) (varies with material)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Pressure Rating</td>
                        <td className="px-4 py-2 border">
                          Up to 6000 psi (varies with material and design)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Standards</td>
                        <td className="px-4 py-2 border">
                          ASME, API, ANSI, ASTM
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sizes</td>
                        <td className="px-4 py-2 border">
                          1/2" to 24" (varies with material and design)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Applications</td>
                        <td className="px-4 py-2 border">
                          Oil & Gas, Waterworks, Chemical Processing, HVAC
                          Systems, Construction
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Production Technique
                        </td>
                        <td className="px-4 py-2 border">
                          Machined, Cast, Forged (varies with material and
                          design)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h2 className="text-2xl font-bold">Dimension Chart  :</h2>

                <div className="overflow-x-auto">
                  <div>
                    <img src={adapterdiagram} alt="" />
                  </div>

                  <table>
                    <thead>
                      <tr>
                        <td height="72" rowSpan="2">
                          DN
                        </td>
                        <td rowSpan="2">
                          Nom. Pipe Size
                          <br />A
                        </td>
                        <td rowSpan="2">D</td>
                        <td rowSpan="2">L</td>
                        <td rowSpan="2">
                          Threaded Size
                          <br />B
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                      <tr>
                        <td>8</td>
                        <td>1/4&quot;</td>
                        <td>19</td>
                        <td>33</td>
                        <td>1/8&quot;</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>3/8&quot;</td>
                        <td>22</td>
                        <td>35</td>
                        <td>1/4&quot;</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>1/2&quot;</td>
                        <td>28</td>
                        <td>42</td>
                        <td>3/8&quot;</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>3/4&quot;</td>
                        <td>35</td>
                        <td>47</td>
                        <td>1/2&quot;</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>1&quot;</td>
                        <td>44</td>
                        <td>55</td>
                        <td>3/4&quot;</td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>1-1/4&quot;</td>
                        <td>57</td>
                        <td>63</td>
                        <td>1&quot;</td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>1-1/2&quot;</td>
                        <td>64</td>
                        <td>66</td>
                        <td>1-1/4&quot;</td>
                      </tr>
                      <tr>
                        <td>50</td>
                        <td>2&quot;</td>
                        <td>76</td>
                        <td>76</td>
                        <td>1-1/2&quot;</td>
                      </tr>
                      <tr>
                        <td>65</td>
                        <td>2-1/2&quot;</td>
                        <td>92</td>
                        <td>90</td>
                        <td>2&quot;</td>
                      </tr>
                      <tr>
                        <td>80</td>
                        <td>3&quot;</td>
                        <td>108</td>
                        <td>110</td>
                        <td>2-1/2&quot;</td>
                      </tr>
                      <tr>
                        <td>100</td>
                        <td>4&quot;</td>
                        <td>140</td>
                        <td>120</td>
                        <td>3&quot;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Forged Fittings Adapters:
                  </h2>
                  <p className="mt-2 text-lg">
                    Forged fittings adapters are crucial in various applications
                    due to their ability to connect pipes of different sizes or
                    types, ensuring a secure and efficient transition. Key areas
                    of application include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used to connect different sizes of
                      pipelines and equipment, ensuring a secure and leak-proof
                      connection in high-pressure environments.
                    </li>
                    <li>
                      Chemical Processing: In pipelines, reactors, and storage
                      tanks to handle corrosive chemicals and maintain the
                      integrity of the system.
                    </li>
                    <li>
                      Water Treatment: Employed in filtration and distribution
                      systems to connect various components, ensuring a reliable
                      and leak-free operation.
                    </li>
                    <li>
                      HVAC Systems: Used in heating, ventilation, and air
                      conditioning systems to connect pipes of different sizes,
                      ensuring efficient and flexible system configurations.
                    </li>
                    <li>
                      Food and Beverage Industry: In processing and packaging
                      equipment where hygiene and safety are critical, providing
                      secure connections for various pipe sizes.
                    </li>
                    <li>
                      Pharmaceutical Industry: Utilized in sterile processing
                      systems to connect equipment and piping, ensuring
                      contaminant-free and leak-proof connections.
                    </li>
                    <li>
                      Fire Protection Systems: Installed in sprinkler and fire
                      suppression systems to connect different pipe sizes,
                      ensuring reliable and efficient performance in emergency
                      situations.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={adapters}
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
    </div>
  );
};

export default Adapters;
