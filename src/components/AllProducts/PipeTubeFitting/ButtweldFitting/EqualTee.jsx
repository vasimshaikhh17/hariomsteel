import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import equal from "../../../../assets/newImages/buttweld-equal-tee.webp"
import equaldiagram from "../../../../assets/newImages/Butt-Weld-Equal-Tee-diagram.svg"

const EqualTee = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Equal Tee
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={equal}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The equal tee is a versatile fitting used in piping systems to
                  create a branch or a junction where three pipes of the same
                  diameter intersect. This fitting allows for the efficient
                  distribution of fluid flow from a single pipe into two other
                  pipes, maintaining equal pressure and flow rates across the
                  branches. Equal tees are commonly employed in various
                  industries, including water treatment, oil and gas, and
                  chemical processing, where balanced flow distribution is
                  crucial.
                </p>

                <br />

                <p>
                  Constructed from durable materials, equal tees are designed to
                  withstand high pressures and temperatures, ensuring
                  reliability in demanding environments. Their equal diameter
                  design ensures a uniform flow path and reduces potential
                  turbulence, which helps in maintaining system efficiency.
                  Complying with industry standards such as ASTM, ASME, and
                  ANSI, these fittings offer long-term performance and
                  durability. The robust construction and precise manufacturing
                  of equal tees make them an essential component for maintaining
                  balanced fluid distribution in piping systems.
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
                Equal Tee Specifications:
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
                          Equal Tee Butt Weld Fittings
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
                    <img src={equaldiagram} alt="" />
                  </div>
                  <table>
                    <thead>
<tr>
<th rowSpan="2">Nominal Pipe Size</th>
<th rowSpan="2">Outside diameter<br />
at bevel</th>
<th colSpan="2">Center-to-End</th>
</tr>
<tr>
<th>Outlet<em>(M)</em></th>
<th>Run <em>(C)</em></th>
</tr>
</thead>
<tbody>
<tr>
<td>1/2&quot;</td>
<td>21.3</td>
<td>25</td>
<td>25</td>
</tr>
<tr>
<td>3/4&quot;</td>
<td>26.7</td>
<td>29</td>
<td>29</td>
</tr>
<tr>
<td>1&quot;</td>
<td>33.4</td>
<td>38</td>
<td>38</td>
</tr>
<tr>
<td>1 1/4&quot;</td>
<td>42.2</td>
<td>48</td>
<td>48</td>
</tr>
<tr>
<td>1 1/2&quot;</td>
<td>48.3</td>
<td>57</td>
<td>57</td>
</tr>
<tr>
<td>2&quot;</td>
<td>60.3</td>
<td>64</td>
<td>64</td>
</tr>
<tr>
<td>2 1/2&quot;</td>
<td>73.0</td>
<td>76</td>
<td>76</td>
</tr>
<tr>
<td>3&quot;</td>
<td>88.9</td>
<td>86</td>
<td>86</td>
</tr>
<tr>
<td>3 1/2&quot;</td>
<td>101.6</td>
<td>95</td>
<td>95</td>
</tr>
<tr>
<td>4&quot;</td>
<td>114.3</td>
<td>105</td>
<td>105</td>
</tr>
<tr>
<td>5&quot;</td>
<td>141.3</td>
<td>124</td>
<td>124</td>
</tr>
<tr>
<td>6&quot;</td>
<td>168.3</td>
<td>143</td>
<td>143</td>
</tr>
<tr>
<td>8&quot;</td>
<td>219.1</td>
<td>178</td>
<td>178</td>
</tr>
<tr>
<td>10&quot;</td>
<td>273.0</td>
<td>216</td>
<td>216</td>
</tr>
<tr>
<td>12&quot;</td>
<td>323.8</td>
<td>254</td>
<td>254</td>
</tr>
<tr>
<td>14&quot;</td>
<td>355.6</td>
<td>279</td>
<td>279</td>
</tr>
<tr>
<td>16&quot;</td>
<td>406.4</td>
<td>305</td>
<td>305</td>
</tr>
<tr>
<td>18&quot;</td>
<td>457.0</td>
<td>343</td>
<td>343</td>
</tr>
<tr>
<td>20&quot;</td>
<td>508.0</td>
<td>381</td>
<td>381</td>
</tr>
<tr>
<td>22&quot;</td>
<td>559.0</td>
<td>419</td>
<td>419</td>
</tr>
<tr>
<td>24&quot;</td>
<td>610.0</td>
<td>432</td>
<td>432</td>
</tr>
</tbody>
</table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Equal Tee Butt Weld Fittings:
                  </h2>
                  <p className="mt-2 text-lg">
                    Equal tee butt weld fittings are used to connect three pipes
                    of the same diameter, forming a T-shaped junction. They are
                    essential in various piping systems for directing flow and
                    managing multiple pipeline connections. Key applications
                    include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used to branch off pipelines or
                      connect multiple pipelines of the same size, ensuring
                      efficient flow distribution.
                    </li>
                    <li>
                      Chemical Processing: Facilitates the branching of
                      chemical pipelines or reactors, allowing for the
                      distribution of chemicals to different parts of the
                      system.
                    </li>
                    <li>
                      Water and Wastewater Management: Connects multiple
                      pipelines in water treatment plants and sewage systems,
                      ensuring proper flow management and distribution.
                    </li>
                    <li>
                      Power Generation: Applied in power plants to manage
                      and distribute steam, water, and other fluids to various
                      components or systems.
                    </li>
                    <li>
                      HVAC Systems: Used to connect and distribute airflow
                      in heating, ventilation, and air conditioning systems,
                      ensuring balanced airflow across the system.
                    </li>
                    <li>
                      Pulp and Paper Industry: Connects pipes in processing
                      systems to distribute pulp and other materials
                      effectively.
                    </li>
                    <li>
                      Automotive Industry: Facilitates connections in
                      vehicle exhaust and cooling systems, managing flow and
                      distribution of exhaust gases and fluids.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={equal}
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

export default EqualTee;
