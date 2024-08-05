import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import stubend from "../../../../assets/newImages/buttweld-fittings-stubend.webp";
import stubenddiagram from "../../../../assets/newImages/buttweld-stub-ends-diagram.svg";

const Stubend = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Stub Ends
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={stubend}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}
                <p>
                  Stub ends are essential components in piping systems, designed
                  to provide a flat, flanged surface for connecting pipes to
                  other fittings or equipment. These fittings are commonly used
                  in conjunction with backing flanges to create a secure and
                  leak-proof connection. Stub ends are widely utilized in
                  industries such as oil and gas, water treatment, and chemical
                  processing, where reliable and efficient pipe connections are
                  crucial.
                </p>

                <br />

                <p>
                  Constructed from high-quality materials, stub ends are
                  engineered to withstand high pressures and temperatures,
                  ensuring long-term durability and performance. Their design
                  allows for easy installation and alignment with flanges,
                  providing a robust and stable connection. Stub ends adhere to
                  industry standards such as ASTM, ASME, and ANSI, guaranteeing
                  their reliability and consistency. Their strong construction
                  and precise design make them ideal for creating dependable
                  connections in various piping applications.
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

                <h2 className="text-2xl font-bold">Stubend Specifications:</h2>
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
                          Carbon Steel (ASTM A234 WPB), Stainless Steel (ASTM
                          A403 WP304/316), Alloy Steel (ASTM A420 WPL6)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">Stub End</td>
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
                          High resistance to corrosion in various environments,
                          suitable for harsh conditions
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Standards</td>
                        <td className="px-4 py-2 border">
                          ASTM A234, ASME B16.9, MSS SP-75, ASME B16.5 (Flanges)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sizes</td>
                        <td className="px-4 py-2 border">
                          1/2" to 48" (custom sizes available)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Applications</td>
                        <td className="px-4 py-2 border">
                          Used in flange connections within pipeline systems,
                          including oil & gas, chemical processing, and
                          waterworks
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
                    <img src={stubenddiagram} alt="" />
                  </div>

                  <table>
                    <thead>
                      <tr>
                        <th rowSpan="2">Nominal Pipe Size</th>
                        <th colSpan="2">
                          Outside diameter
                          <br />
                          of barrel
                        </th>
                        <th colSpan="2">
                          Length&nbsp;<em>(F)</em>
                        </th>
                        <th rowSpan="2">
                          Radius&nbsp;<em>(R)</em>
                        </th>
                        <th rowSpan="2">
                          Diameter&nbsp;<em>(G)</em>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <em>Minimum</em>
                        </th>
                        <th>
                          <em>Maximum</em>
                        </th>
                        <th>
                          Long
                          <br />
                          Pattern
                        </th>
                        <th>
                          Short
                          <br />
                          Pattern
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1/2&#8243;</td>
                        <td>20.5</td>
                        <td>22.8</td>
                        <td>76</td>
                        <td>51</td>
                        <td>3</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>3/4&#8243;</td>
                        <td>25.9</td>
                        <td>28.1</td>
                        <td>76</td>
                        <td>51</td>
                        <td>3</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td>1&#8243;</td>
                        <td>32.6</td>
                        <td>35.0</td>
                        <td>102</td>
                        <td>51</td>
                        <td>3</td>
                        <td>51</td>
                      </tr>
                      <tr>
                        <td>1 1/4&#8243;</td>
                        <td>41.4</td>
                        <td>43.6</td>
                        <td>102</td>
                        <td>51</td>
                        <td>5</td>
                        <td>64</td>
                      </tr>
                      <tr>
                        <td>1 1/2&#8243;</td>
                        <td>47.5</td>
                        <td>49.9</td>
                        <td>102</td>
                        <td>51</td>
                        <td>6</td>
                        <td>74</td>
                      </tr>
                      <tr>
                        <td>2&#8243;</td>
                        <td>59.5</td>
                        <td>62.4</td>
                        <td>152</td>
                        <td>64</td>
                        <td>8</td>
                        <td>92</td>
                      </tr>
                      <tr>
                        <td>2 1/2&#8243;</td>
                        <td>72.2</td>
                        <td>75.3</td>
                        <td>152</td>
                        <td>64</td>
                        <td>8</td>
                        <td>105</td>
                      </tr>
                      <tr>
                        <td>3&#8243;</td>
                        <td>88.1</td>
                        <td>91.3</td>
                        <td>152</td>
                        <td>64</td>
                        <td>10</td>
                        <td>127</td>
                      </tr>
                      <tr>
                        <td>3 1/2&#8243;</td>
                        <td>100.8</td>
                        <td>104.0</td>
                        <td>152</td>
                        <td>76</td>
                        <td>10</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>4&#8243;</td>
                        <td>113.5</td>
                        <td>116.7</td>
                        <td>152</td>
                        <td>76</td>
                        <td>11</td>
                        <td>157</td>
                      </tr>
                      <tr>
                        <td>5&#8243;</td>
                        <td>140.5</td>
                        <td>144.3</td>
                        <td>203</td>
                        <td>76</td>
                        <td>11</td>
                        <td>186</td>
                      </tr>
                      <tr>
                        <td>6&#8243;</td>
                        <td>167.5</td>
                        <td>171.3</td>
                        <td>203</td>
                        <td>89</td>
                        <td>13</td>
                        <td>216</td>
                      </tr>
                      <tr>
                        <td>8&#8243;</td>
                        <td>218.3</td>
                        <td>222.1</td>
                        <td>203</td>
                        <td>102</td>
                        <td>13</td>
                        <td>270</td>
                      </tr>
                      <tr>
                        <td>10&#8243;</td>
                        <td>272.3</td>
                        <td>277.2</td>
                        <td>254</td>
                        <td>127</td>
                        <td>13</td>
                        <td>324</td>
                      </tr>
                      <tr>
                        <td>12&#8243;</td>
                        <td>323.1</td>
                        <td>328.0</td>
                        <td>254</td>
                        <td>152</td>
                        <td>13</td>
                        <td>381</td>
                      </tr>
                      <tr>
                        <td>14&#8243;</td>
                        <td>354.8</td>
                        <td>359.9</td>
                        <td>305</td>
                        <td>152</td>
                        <td>13</td>
                        <td>413</td>
                      </tr>
                      <tr>
                        <td>16&#8243;</td>
                        <td>405.6</td>
                        <td>411.0</td>
                        <td>305</td>
                        <td>152</td>
                        <td>13</td>
                        <td>470</td>
                      </tr>
                      <tr>
                        <td>18&#8243;</td>
                        <td>456.0</td>
                        <td>462.0</td>
                        <td>305</td>
                        <td>152</td>
                        <td>13</td>
                        <td>533</td>
                      </tr>
                      <tr>
                        <td>20&#8243;</td>
                        <td>507.0</td>
                        <td>514.0</td>
                        <td>305</td>
                        <td>152</td>
                        <td>13</td>
                        <td>584</td>
                      </tr>
                      <tr>
                        <td>22&#8243;</td>
                        <td>558.0</td>
                        <td>565.0</td>
                        <td>305</td>
                        <td>152</td>
                        <td>13</td>
                        <td>641</td>
                      </tr>
                      <tr>
                        <td>24&#8243;</td>
                        <td>609.0</td>
                        <td>616.0</td>
                        <td>305</td>
                        <td>152</td>
                        <td>13</td>
                        <td>692</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Stubends Butt Weld Fittings:
                  </h2>
                  <p className="mt-2 text-lg">
                    Stubends are used to provide a smooth transition from a pipe
                    to a flange or other fitting. They are commonly utilized in
                    various piping systems to facilitate connections and provide
                    a secure and leak-proof joint. Key applications include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used to connect pipes to flanges
                      and other components in pipelines, ensuring a secure and
                      leak-proof joint in high-pressure and corrosive
                      environments.
                    </li>
                    <li>
                      Chemical Processing: Facilitates the connection
                      between pipes and process equipment or flanges, ensuring
                      reliable and tight connections in chemical handling
                      systems.
                    </li>
                    <li>
                      Water and Wastewater Management: Applied in treatment
                      plants to connect pipes to flanged equipment, providing a
                      robust and leak-proof connection.
                    </li>
                    <li>
                      Power Generation: Used to connect pipes to flanges in
                      steam, water, and cooling systems, ensuring the integrity
                      and safety of power plant operations.
                    </li>
                    <li>
                      HVAC Systems: Facilitates the connection between ducts
                      and flanged components, ensuring a secure and efficient
                      seal in heating, ventilation, and air conditioning
                      systems.
                    </li>
                    <li>
                      Pulp and Paper Industry: Connects pipes to flanges and
                      other equipment, ensuring a reliable and secure joint in
                      processing systems.
                    </li>
                    <li>
                      Automotive Industry: Used to connect exhaust systems
                      and other components to flanges, providing a secure and
                      leak-proof joint in vehicle exhaust systems.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={stubend}
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

export default Stubend;
