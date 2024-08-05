import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import reducing from "../../../../assets/newImages/buttweld-reducing-tee.jpg";
import reducingdiagram from "../../../../assets/newImages/Butt-Weld-Reducing-Tee-diagram.svg";

const ReducingTee = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Reducing Tee
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={reducing}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}
                <p>
                  The reducing tee is a critical fitting in piping systems
                  designed to connect three pipes of different diameters,
                  allowing fluid to flow from one main pipe into two smaller
                  branches. This fitting is essential for applications where
                  changes in pipe size are needed while maintaining a smooth
                  transition and efficient flow distribution. Reducing tees are
                  widely used in industries such as water treatment, oil and
                  gas, and chemical processing, where adaptable and versatile
                  flow management is required.
                </p>

                <br />

                <p>
                  Made from high-quality materials, reducing tees are built to
                  withstand varying pressures and temperatures, ensuring
                  durability and reliability in challenging conditions. The
                  fitting's design helps minimize turbulence and pressure loss
                  during fluid transitions between different pipe sizes.
                  Adhering to rigorous industry standards like ASTM, ASME, and
                  ANSI, reducing tees offer dependable performance and long-term
                  service. Their robust construction and precise engineering
                  make them ideal for applications requiring effective flow
                  control and seamless integration of different pipe sizes.
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
                          ASTM A 105/A694/ A350 LF3/A350 LF2 - F42, F46, F52,
                          F56, F60, F65
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                          ASTM A 182 - F 304, 304L, 304H, 309S, 309H, 310S,
                          310H, 316, 316Ti, 316H, 316L, 321, 321H, 347, 347H,
                          904L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          ASTM / ASME A/SA 182 - F44, F45, F51, F53, F55, F60,
                          F61{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Nickel</td>
                        <td className="px-4 py-2 border">200, 201</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Monel</td>
                        <td className="px-4 py-2 border">400</td>
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

                <h2 className="text-2xl font-bold">
                  Reducing Tee Specifications:
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border text-center">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th>Specification</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">Material</td>
                        <td className="px-4 py-2 border">
                          Carbon Steel, Stainless Steel, Alloy Steel (e.g., ASTM
                          A234 WPB, ASTM A403 WP304, ASTM A420 WPL6)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">
                          Reducing Tee Butt Weld Fittings
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Temperature Range</td>
                        <td className="px-4 py-2 border">
                          -29°C to 593°C (-20°F to 1100°F)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Corrosion Resistance
                        </td>
                        <td className="px-4 py-2 border">
                          High resistance to corrosion, suitable for various
                          environments
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Standards</td>
                        <td className="px-4 py-2 border">
                          ASTM A234, ASME B16.9, MSS SP-75
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sizes</td>
                        <td className="px-4 py-2 border">1/2" to 48"</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Applications</td>
                        <td className="px-4 py-2 border">
                          Pipeline Systems, Industrial Piping, Oil & Gas,
                          Chemical Processing, Waterworks
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Production Technique
                        </td>
                        <td className="px-4 py-2 border">Butt Welding</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h2 className="text-2xl font-bold">Dimension Chart :</h2>

                <div className="overflow-x-auto">
                  <div>
                    <img src={reducingdiagram} alt="" />
                  </div>

                  <table>
                    <thead>
                      <tr>
                        <th colSpan="2">Nominal Pipe Size</th>
                        <th colSpan="2">
                          Outside diameter
                          <br />
                          at bevel
                        </th>
                        <th colSpan="2">Center-to-End</th>
                      </tr>
                      <tr>
                        <th>Run</th>
                        <th>Outlet</th>
                        <th>Run</th>
                        <th>Outlet</th>
                        <th>
                          Run&nbsp;<em>(C)</em>
                        </th>
                        <th>
                          Outlet&nbsp;<em>(M)</em>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1/2"</td>
                        <td>
                          1/4"
                          <br />
                          3/8"
                        </td>
                        <td>21.3</td>
                        <td>
                          13.7
                          <br />
                          17.3
                        </td>
                        <td>25</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>3/4"</td>
                        <td>
                          3/8"
                          <br />
                          1/2"
                        </td>
                        <td>26.7</td>
                        <td>
                          17.3
                          <br />
                          21.3
                        </td>
                        <td>29</td>
                        <td>29</td>
                      </tr>
                      <tr>
                        <td>1"</td>
                        <td>
                          1/2"
                          <br />
                          3/4"
                        </td>
                        <td>33.4</td>
                        <td>
                          21.3
                          <br />
                          26.7
                        </td>
                        <td>38</td>
                        <td>38</td>
                      </tr>
                      <tr>
                        <td>1 1/4"</td>
                        <td>
                          1/2"
                          <br />
                          3/4"
                          <br />
                          1"
                        </td>
                        <td>42.2</td>
                        <td>
                          21.3
                          <br />
                          26.7
                          <br />
                          33.4
                        </td>
                        <td>48</td>
                        <td>48</td>
                      </tr>
                      <tr>
                        <td>1 1/2"</td>
                        <td>
                          1/2"
                          <br />
                          3/4"
                          <br />
                          1"
                          <br />1 1/4"
                        </td>
                        <td>48.3</td>
                        <td>
                          21.3
                          <br />
                          26.7
                          <br />
                          33.4
                          <br />
                          42.2
                        </td>
                        <td>57</td>
                        <td>57</td>
                      </tr>
                      <tr>
                        <td>2"</td>
                        <td>
                          3/4"
                          <br />
                          1"
                          <br />
                          1 1/4"
                          <br />1 1/2"
                        </td>
                        <td>60.3</td>
                        <td>
                          26.7
                          <br />
                          33.4
                          <br />
                          42.2
                          <br />
                          48.3
                        </td>
                        <td>64</td>
                        <td>
                          44
                          <br />
                          51
                          <br />
                          57
                          <br />
                          60
                        </td>
                      </tr>
                      <tr>
                        <td>2 1/2"</td>
                        <td>
                          1"
                          <br />
                          1 1/4"
                          <br />
                          1 1/2"
                          <br />
                          2"
                        </td>
                        <td>73.0</td>
                        <td>
                          33.4
                          <br />
                          42.2
                          <br />
                          48.3
                          <br />
                          60.3
                        </td>
                        <td>76</td>
                        <td>
                          57
                          <br />
                          64
                          <br />
                          67
                          <br />
                          70
                        </td>
                      </tr>
                      <tr>
                        <td>3"</td>
                        <td>
                          1 1/4"
                          <br />
                          1 1/2"
                          <br />
                          2"
                          <br />2 1/2"
                        </td>
                        <td>88.9</td>
                        <td>
                          42.2
                          <br />
                          48.3
                          <br />
                          60.3
                          <br />
                          73.0
                        </td>
                        <td>86</td>
                        <td>
                          70
                          <br />
                          73
                          <br />
                          76
                          <br />
                          83
                        </td>
                      </tr>
                      <tr>
                        <td>3 1/2"</td>
                        <td>
                          1 1/2"
                          <br />
                          2"
                          <br />
                          2 1/2"
                          <br />
                          3"
                        </td>
                        <td>101.6</td>
                        <td>
                          48.3
                          <br />
                          60.3
                          <br />
                          73.0
                          <br />
                          88.9
                        </td>
                        <td>95</td>
                        <td>
                          79
                          <br />
                          83
                          <br />
                          89
                          <br />
                          92
                        </td>
                      </tr>
                      <tr>
                        <td>4"</td>
                        <td>
                          1 1/2"
                          <br />
                          2"
                          <br />
                          2 1/2"
                          <br />
                          3"
                          <br />3 1/2"
                        </td>
                        <td>114.3</td>
                        <td>
                          48.3
                          <br />
                          60.3
                          <br />
                          73.0
                          <br />
                          88.9
                          <br />
                          101.6
                        </td>
                        <td>105</td>
                        <td>
                          86
                          <br />
                          89
                          <br />
                          95
                          <br />
                          98
                          <br />
                          102
                        </td>
                      </tr>
                      <tr>
                        <td>5"</td>
                        <td>
                          2"
                          <br />
                          2 1/2"
                          <br />
                          3"
                          <br />
                          3 1/2"
                          <br />
                          4"
                        </td>
                        <td>141.3</td>
                        <td>
                          60.3
                          <br />
                          73.0
                          <br />
                          88.9
                          <br />
                          101.6
                          <br />
                          114.3
                        </td>
                        <td>124</td>
                        <td>
                          105
                          <br />
                          108
                          <br />
                          111
                          <br />
                          114
                          <br />
                          117
                        </td>
                      </tr>
                      <tr>
                        <td>6"</td>
                        <td>
                          2 1/2"
                          <br />
                          3"
                          <br />
                          3 1/2"
                          <br />
                          4"
                          <br />
                          5&nbsp;
                        </td>
                        <td>168.3</td>
                        <td>
                          73.0
                          <br />
                          88.9
                          <br />
                          101.6
                          <br />
                          114.3
                          <br />
                          141.3
                        </td>
                        <td>143</td>
                        <td>
                          121
                          <br />
                          124
                          <br />
                          127
                          <br />
                          130
                          <br />
                          137
                        </td>
                      </tr>
                      <tr>
                        <td>8"</td>
                        <td>
                          3 1/2"
                          <br />
                          4"
                          <br />
                          5"
                          <br />
                          6"
                        </td>
                        <td>219.1</td>
                        <td>
                          101.6
                          <br />
                          114.3
                          <br />
                          141.3
                          <br />
                          168.3
                        </td>
                        <td>178</td>
                        <td>
                          152
                          <br />
                          156
                          <br />
                          162
                          <br />
                          168
                        </td>
                      </tr>
                      <tr>
                        <td>10"</td>
                        <td>
                          4"
                          <br />
                          5"
                          <br />
                          6"
                          <br />
                          8"
                        </td>
                        <td>273.0</td>
                        <td>
                          114.3
                          <br />
                          141.3
                          <br />
                          168.3
                          <br />
                          219.1
                        </td>
                        <td>216</td>
                        <td>
                          184
                          <br />
                          191
                          <br />
                          194
                          <br />
                          203
                        </td>
                      </tr>
                      <tr>
                        <td>12"</td>
                        <td>
                          5"
                          <br />
                          6"
                          <br />
                          8"
                          <br />
                          10"
                        </td>
                        <td>323.8</td>
                        <td>
                          141.3
                          <br />
                          168.3
                          <br />
                          219.1
                          <br />
                          273.0
                        </td>
                        <td>254</td>
                        <td>
                          216
                          <br />
                          219
                          <br />
                          229
                          <br />
                          241
                        </td>
                      </tr>
                      <tr>
                        <td>14"</td>
                        <td>
                          6"
                          <br />
                          8"
                          <br />
                          10"
                          <br />
                          12"
                        </td>
                        <td>355.6</td>
                        <td>
                          168.3
                          <br />
                          219.1
                          <br />
                          273.0
                          <br />
                          323.8
                        </td>
                        <td>279</td>
                        <td>
                          238
                          <br />
                          248
                          <br />
                          257
                          <br />
                          270
                        </td>
                      </tr>
                      <tr>
                        <td>16"</td>
                        <td>
                          6"
                          <br />
                          8"
                          <br />
                          10"
                          <br />
                          12"
                          <br />
                          14"
                        </td>
                        <td>406.4</td>
                        <td>
                          168.3
                          <br />
                          219.1
                          <br />
                          273.0
                          <br />
                          323.8
                          <br />
                          355.6
                        </td>
                        <td>305</td>
                        <td>
                          264
                          <br />
                          273
                          <br />
                          283
                          <br />
                          295
                          <br />
                          305
                        </td>
                      </tr>
                      <tr>
                        <td>18"</td>
                        <td>
                          8"
                          <br />
                          10"
                          <br />
                          12"
                          <br />
                          14"
                          <br />
                          16"
                        </td>
                        <td>457.0</td>
                        <td>
                          219.1
                          <br />
                          273.0
                          <br />
                          323.8
                          <br />
                          355.6
                          <br />
                          406.4
                        </td>
                        <td>343</td>
                        <td>
                          298
                          <br />
                          308
                          <br />
                          321
                          <br />
                          330
                          <br />
                          330
                        </td>
                      </tr>
                      <tr>
                        <td>20"</td>
                        <td>
                          8"
                          <br />
                          10"
                          <br />
                          12"
                          <br />
                          14"
                          <br />
                          16"
                          <br />
                          18"
                        </td>
                        <td>508.0</td>
                        <td>
                          219.1
                          <br />
                          273.0
                          <br />
                          323.8
                          <br />
                          355.6
                          <br />
                          406.4
                          <br />
                          457.0
                        </td>
                        <td>381</td>
                        <td>
                          324
                          <br />
                          333
                          <br />
                          346
                          <br />
                          356
                          <br />
                          356
                          <br />
                          368
                        </td>
                      </tr>
                      <tr>
                        <td>22"</td>
                        <td>
                          10"
                          <br />
                          12"
                          <br />
                          14"
                          <br />
                          16"
                          <br />
                          18"
                          <br />
                          20"
                        </td>
                        <td>559.0</td>
                        <td>
                          273.0
                          <br />
                          323.8
                          <br />
                          355.6
                          <br />
                          406.4
                          <br />
                          457.0
                          <br />
                          508.0
                        </td>
                        <td>419</td>
                        <td>
                          359
                          <br />
                          371
                          <br />
                          381
                          <br />
                          381
                          <br />
                          394
                          <br />
                          406
                        </td>
                      </tr>
                      <tr>
                        <td>24"</td>
                        <td>
                          10"
                          <br />
                          12"
                          <br />
                          14"
                          <br />
                          16"
                          <br />
                          18"
                          <br />
                          20"
                          <br />
                          22"
                        </td>
                        <td>610.0</td>
                        <td>
                          273.0
                          <br />
                          323.8
                          <br />
                          355.6
                          <br />
                          406.4
                          <br />
                          457.0
                          <br />
                          508.0
                          <br />
                          559.0
                        </td>
                        <td>432</td>
                        <td>
                          384
                          <br />
                          397
                          <br />
                          406
                          <br />
                          406
                          <br />
                          419
                          <br />
                          432
                          <br />
                          432
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Reducing Tee Butt Weld Fittings:
                  </h2>
                  <p className="mt-2 text-lg">
                    Reducing tee butt weld fittings are used to connect three
                    pipes where one of the connections has a different diameter
                    from the other two. This allows for a transition between
                    different pipe sizes while managing flow distribution. Key
                    applications include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used to connect pipelines of
                      different sizes, allowing for the efficient distribution
                      of oil and gas and adapting to changes in pipe diameter.
                    </li>
                    <li>
                      Chemical Processing: Facilitates the connection of
                      pipes with varying diameters in chemical reactors and
                      pipelines, optimizing flow and ensuring effective chemical
                      distribution.
                    </li>
                    <li>
                      Water and Wastewater Management: Connects pipes of
                      different sizes in water treatment and sewage systems,
                      allowing for efficient flow management and adaptation to
                      different pipeline sizes.
                    </li>
                    <li>
                      Power Generation: Applied in power plants to manage
                      transitions between different pipe sizes in steam, water,
                      and cooling systems, ensuring smooth fluid distribution.
                    </li>
                    <li>
                      HVAC Systems: Manages transitions between duct sizes,
                      ensuring balanced airflow and efficient operation in
                      heating, ventilation, and air conditioning systems.
                    </li>
                    <li>
                      Pulp and Paper Industry: Connects different-sized
                      pipes in pulp processing and paper production systems,
                      facilitating material flow and system integration.
                    </li>
                    <li>
                      Automotive Industry: Used to connect exhaust or
                      cooling system components of different sizes, optimizing
                      flow and system performance in vehicles.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={reducing}
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

export default ReducingTee;
