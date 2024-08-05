import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import uniondiagram from "../../../../assets/newImages/uniondiagram.jpg"
import union from "../../../../assets/newImages/union.webp"

const Union = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Union
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={union}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The forged union is an essential fitting in piping systems,
                  designed to connect two pipes or tubes while allowing for easy
                  disassembly and reassembly. Known for its versatility and
                  convenience, this component is widely used in various
                  industrial applications, including oil and gas, chemical
                  processing, and HVAC systems.
                </p>

                <br />

                <p>
                  Crafted from high-quality forged steel, the union provides
                  exceptional strength and durability, ensuring a secure and
                  leak-proof connection. It complies with stringent
                  international standards, such as ASTM, ASME, and DIN, to
                  deliver reliable performance and longevity even in demanding
                  conditions.
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
                          F56, F60, F65, F70
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                          ASTM / ASME A/SA 182 - F 304, 304L, 304H, 309S, 309H,
                          310S, 310H, 316, 316TI, 316H, 316L, 316LN, 317, 317L,
                          321, 321H, 347, 347H, 904L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          {" "}
                          ASTM / ASME A/SA 182 - F44, F45, F51, F53, F55, F60,
                          F61
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

                <h2 className="text-2xl font-bold">Union Specifications:</h2>
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
                          Forged Steel (e.g., ASTM A105, A350 LF2, A694 F65)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">Union</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Temperature Range</td>
                        <td className="px-4 py-2 border">
                          -50°C to 450°C (-58°F to 842°F) (varies with material)
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
                          ASME B16.11, API 5CT
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sizes</td>
                        <td className="px-4 py-2 border">
                          1/2" to 4" (varies with material and design)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Applications</td>
                        <td className="px-4 py-2 border">
                          Oil & Gas, Petrochemical, Chemical Processing,
                          Waterworks, HVAC Systems
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Production Technique
                        </td>
                        <td className="px-4 py-2 border">
                          Forged and Machined from Solid Steel
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h2 className="text-2xl font-bold">Dimension Chart :</h2>

                <div className="overflow-x-auto">
                  <div>
                    <img src={uniondiagram} alt="" />
                  </div>

                  <table>
                    <thead>
                      <tr>
                        <td>Nom. Pipe Size </td>
                        <td>Pipe End Min </td>
                        <td>Socket Bore Dia. </td>
                        <td>Socket Wall Min. </td>
                        <td>Water Way Bore </td>
                        <td>Laying Length </td>
                        <td>Male Flange Min. </td>
                        <td>Nut Min. </td>
                        <td>Threads Per 25.4 Max</td>
                        <td>Bearing Min. </td>
                        <td>Depth of Socket Min. </td>
                        <td>Length Assem. Nominal </td>
                        <td>Clear Assem. Nut </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>
                          A
                        </td>
                        <td>
                          B
                        </td>
                        <td>
                          C
                        </td>
                        <td>
                          D
                        </td>
                        <td>
                          E
                        </td>
                        <td>
                          F
                        </td>
                        <td>
                          G
                        </td>
                        <td>
                          H
                        </td>
                        <td>
                          J
                        </td>
                        <td>
                          K
                        </td>
                        <td>
                          L
                        </td>
                        <td>
                          N
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1/8</td>
                        <td>21.8</td>
                        <td>
                          10.92
                          <br />
                          10.67
                        </td>
                        <td>3.17</td>
                        <td>
                          6.83
                          <br />
                          6.43
                        </td>
                        <td>
                          22.4
                          <br />
                          19.0
                        </td>
                        <td>3.17</td>
                        <td>3.17</td>
                        <td>16</td>
                        <td>1.24</td>
                        <td>9.6</td>
                        <td>41.1</td>
                        <td>49.0</td>
                      </tr>
                      <tr>
                        <td>¼</td>
                        <td>21.8</td>
                        <td>
                          14.22
                          <br />
                          13.97
                        </td>
                        <td>3.30</td>
                        <td>
                          9.85
                          <br />
                          9.45
                        </td>
                        <td>
                          22.4
                          <br />
                          19.0
                        </td>
                        <td>3.17</td>
                        <td>3.17</td>
                        <td>19</td>
                        <td>1.24</td>
                        <td>9.6</td>
                        <td>41.4</td>
                        <td>49.0</td>
                      </tr>
                      <tr>
                        <td>3/8</td>
                        <td>25.9</td>
                        <td>
                          17.78
                          <br />
                          17.53
                        </td>
                        <td>3.48</td>
                        <td>
                          13.92
                          <br />
                          13.51
                        </td>
                        <td>
                          26.9
                          <br />
                          20.6
                        </td>
                        <td>3.43</td>
                        <td>3.43</td>
                        <td>14</td>
                        <td>1.37</td>
                        <td>9.6</td>
                        <td>46.0</td>
                        <td>55.0</td>
                      </tr>
                      <tr>
                        <td>½</td>
                        <td>31.2</td>
                        <td>
                          21.84
                          <br />
                          21.59
                        </td>
                        <td>4.06</td>
                        <td>
                          17.47
                          <br />
                          17.07
                        </td>
                        <td>
                          26.9
                          <br />
                          20.6
                        </td>
                        <td>3.68</td>
                        <td>3.68</td>
                        <td>14</td>
                        <td>1.50</td>
                        <td>9.6</td>
                        <td>49.0</td>
                        <td>57.0</td>
                      </tr>
                      <tr>
                        <td>¾</td>
                        <td>37.1</td>
                        <td>
                          27.18
                          <br />
                          26.92
                        </td>
                        <td>4.27</td>
                        <td>
                          21.79
                          <br />
                          21.39
                        </td>
                        <td>
                          31.8
                          <br />
                          25.4
                        </td>
                        <td>4.06</td>
                        <td>4.06</td>
                        <td>11</td>
                        <td>1.68</td>
                        <td>12.7</td>
                        <td>56.9</td>
                        <td>67.0</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>45.5</td>
                        <td>
                          34.04
                          <br />
                          33.78
                        </td>
                        <td>4.95</td>
                        <td>
                          28.14
                          <br />
                          27.74
                        </td>
                        <td>
                          34.3
                          <br />
                          26.2
                        </td>
                        <td>4.57</td>
                        <td>4.44</td>
                        <td>11</td>
                        <td>1.85</td>
                        <td>12.7</td>
                        <td>62.0</td>
                        <td>79.0</td>
                      </tr>
                      <tr>
                        <td>11/4</td>
                        <td>54.9</td>
                        <td>
                          42.67
                          <br />
                          42.42
                        </td>
                        <td>5.28</td>
                        <td>
                          35.76
                          <br />
                          35.36
                        </td>
                        <td>
                          40.6
                          <br />
                          32.5
                        </td>
                        <td>5.33</td>
                        <td>5.21</td>
                        <td>11</td>
                        <td>2.13</td>
                        <td>12.7</td>
                        <td>71.1</td>
                        <td>94.0</td>
                      </tr>
                      <tr>
                        <td>11/2</td>
                        <td>61.5</td>
                        <td>
                          48.77
                          <br />
                          48.51
                        </td>
                        <td>5.54</td>
                        <td>
                          41.61
                          <br />
                          41.20
                        </td>
                        <td>
                          42.2
                          <br />
                          34.0
                        </td>
                        <td>5.84</td>
                        <td>5.59</td>
                        <td>10</td>
                        <td>2.31</td>
                        <td>12.7</td>
                        <td>75.5</td>
                        <td>111.0</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>75.2</td>
                        <td>
                          61.47
                          <br />
                          61.21
                        </td>
                        <td>6.05</td>
                        <td>
                          52.53
                          <br />
                          52.12
                        </td>
                        <td>
                          45.3
                          <br />
                          37.3
                        </td>
                        <td>6.60</td>
                        <td>6.35</td>
                        <td>10</td>
                        <td>2.69</td>
                        <td>15.8</td>
                        <td>86.1</td>
                        <td>132.0</td>
                      </tr>
                      <tr>
                        <td>21/2</td>
                        <td>91.7</td>
                        <td>
                          74.17
                          <br />
                          73.66
                        </td>
                        <td>7.65</td>
                        <td>
                          64.72
                          <br />
                          64.31
                        </td>
                        <td>
                          61.7
                          <br />
                          52.1
                        </td>
                        <td>7.49</td>
                        <td>7.11</td>
                        <td>8</td>
                        <td>3.07</td>
                        <td>15.8</td>
                        <td>102.4</td>
                        <td>148.0</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>109.2</td>
                        <td>
                          90.17
                          <br />
                          89.66
                        </td>
                        <td>8.31</td>
                        <td>
                          77.67
                          <br />
                          77.27
                        </td>
                        <td>
                          63.8
                          <br />
                          53.6
                        </td>
                        <td>8.25</td>
                        <td>8.00</td>
                        <td>8</td>
                        <td>3.53</td>
                        <td>15.8</td>
                        <td>109.0</td>
                        <td>175.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Union Forged Fittings:
                  </h2>
                  <p className="mt-2 text-lg">
                    Union forged fittings are highly versatile components used
                    to connect two pipes or tubes, providing an efficient
                    solution for easy assembly and disassembly in various
                    industrial applications. Key areas of application include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used in pipelines and equipment for
                      easy maintenance and repairs, ensuring a secure and
                      leak-proof connection under high pressures and harsh
                      conditions.
                    </li>
                    <li>
                      Chemical Processing: Essential for connecting pipes and
                      equipment that handle corrosive chemicals, allowing for
                      quick and safe disassembly for cleaning and inspection.
                    </li>
                    <li>
                      Water Treatment: Employed in filtration systems and
                      pipelines to enable convenient disassembly for maintenance
                      and replacement of components.
                    </li>
                    <li>
                      HVAC Systems: Used in heating, ventilation, and air
                      conditioning systems for connecting various pipes and
                      ensuring easy access for maintenance and repairs.
                    </li>
                    <li>
                      Food and Beverage Industry: In processing and packaging
                      equipment where sanitary conditions are crucial, allowing
                      for easy cleaning and reassembly.
                    </li>
                    <li>
                      Pharmaceutical Industry: Utilized in systems where sterile
                      connections are required, providing a reliable and
                      easy-to-maintain solution for critical processes.
                    </li>
                    <li>
                      Fire Protection Systems: Installed in sprinkler systems
                      and fire suppression equipment for quick installation and
                      maintenance, ensuring reliable operation in emergency
                      situations.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={union}
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

export default Union;
