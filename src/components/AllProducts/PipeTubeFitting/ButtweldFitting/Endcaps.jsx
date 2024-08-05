import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import endcaps from "../../../../assets/newImages/buttweld-end-cap.jpg"
import endcapsdiagram from "../../../../assets/newImages/butt-veld-cap-diagram.svg"

const Endcaps = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  End Caps
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={endcaps}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}
                <p>
                  End caps are crucial fittings in piping systems, designed to
                  seal the end of a pipe or tube, effectively closing off the
                  system and preventing fluid leakage or contamination. They are
                  commonly used across various industries, including oil and
                  gas, chemical processing, and water treatment, where it is
                  essential to secure and protect the ends of pipes or tubes.
                  End caps come in various sizes and materials to match
                  different pipe specifications and operational requirements.
                </p>

                <br />

                <p>
                  Manufactured from high-quality materials, end caps are
                  engineered to withstand high pressures, temperatures, and
                  harsh environmental conditions. Their robust construction
                  ensures a tight seal and reliable closure, maintaining system
                  integrity and safety. End caps meet stringent industry
                  standards, such as ASTM, ASME, and ANSI, ensuring durability
                  and long-term performance. Their effective sealing capability
                  and strong design make them ideal for preventing leaks and
                  protecting the end of piping systems in diverse applications.
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
                  End Caps Specifications:
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
                          End Cap Butt Weld Fittings
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
                          Pipeline End Caps, Pressure Vessels, Industrial Piping
                          Systems, Maintenance
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
                    <img src={endcapsdiagram} alt="" />
                  </div>
                  <table>
                    <thead>

                 
<tr>
<td colSpan="4">
<p align="center">CAPS – ANSI B 16.9 dimension</p>
</td>
</tr>
<tr>
<td rowSpan="2">inches</td>
<td rowSpan="2">mm</td>
<td colSpan="2">Height</td>
</tr>
<tr>
<td>D</td>
<td>E</td>
</tr>
</thead>
<tbody>
<tr>
<td>1/2</td>
<td>15</td>
<td>21,34</td>
<td>25,40</td>
</tr>
<tr>
<td>3/4</td>
<td>20</td>
<td>26,67</td>
<td>31,75</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>25</td>
<td>33,40</td>
<td>38,10</td>
</tr>
<tr>
<td>1 1/4</td>
<td>32</td>
<td>42,16</td>
<td>38,10</td>
</tr>
<tr>
<td>1 1/2</td>
<td>40</td>
<td>48,26</td>
<td>38,10</td>
</tr>
<tr>
<td>2</td>
<td>50</td>
<td>60,32</td>
<td>38,10</td>
</tr>
<tr>
<td>2 1/2</td>
<td>65</td>
<td>73,02</td>
<td>38,10</td>
</tr>
<tr>
<td>3</td>
<td>80</td>
<td>88,90</td>
<td>50,80</td>
</tr>
<tr>
<td>3 1/2</td>
<td>90</td>
<td>101,60</td>
<td>63,50</td>
</tr>
<tr>
<td>4</td>
<td>100</td>
<td>114,30</td>
<td>63,50</td>
</tr>
<tr>
<td>5</td>
<td>125</td>
<td>141,30</td>
<td>76,20</td>
</tr>
<tr>
<td>6</td>
<td>150</td>
<td>168,27</td>
<td>88,90</td>
</tr>
<tr>
<td>8</td>
<td>200</td>
<td>219,07</td>
<td>101,60</td>
</tr>
<tr>
<td>10</td>
<td>250</td>
<td>273,05</td>
<td>127,00</td>
</tr>
<tr>
<td>12</td>
<td>300</td>
<td>323,85</td>
<td>152,40</td>
</tr>
<tr>
<td>14</td>
<td>350</td>
<td>355,60</td>
<td>165,10</td>
</tr>
<tr>
<td>16</td>
<td>400</td>
<td>406,40</td>
<td>177,80</td>
</tr>
<tr>
<td>18</td>
<td>450</td>
<td>457,20</td>
<td>203,20</td>
</tr>
<tr>
<td>20</td>
<td>500</td>
<td>508,00</td>
<td>228,60</td>
</tr>
<tr>
<td>22</td>
<td>550</td>
<td>558,80</td>
<td>254,00</td>
</tr>
<tr>
<td>24</td>
<td>600</td>
<td>609,60</td>
<td>266,70</td>
</tr>
<tr>
<td>28&nbsp;&nbsp;&nbsp;</td>
<td>700</td>
<td>711,20</td>
<td>266,70</td>
</tr>
</tbody>
</table>

                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of End Caps Butt Weld Fittings:
                  </h2>
                  <p className="mt-2 text-lg">
                    End caps are used to seal the ends of pipes or tubes,
                    providing a closure that prevents leaks and protects against
                    contaminants. They are utilized across various industries
                    for different purposes, including:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used to seal the ends of
                      pipelines during construction or maintenance, preventing
                      leaks and protecting the pipe ends from damage and
                      contamination.
                    </li>
                    <li>
                      Chemical Processing: Applied to close off reactors,
                      pipelines, and vessels to prevent chemical leaks and
                      maintain system integrity.
                    </li>
                    <li>
                      Water and Wastewater Management: Ensures that the ends
                      of pipes and tanks are securely closed to prevent water or
                      sewage leaks and contamination.
                    </li>
                    <li>
                      Power Generation: Seals pipe ends in steam and cooling
                      systems, preventing leaks and ensuring the efficiency of
                      the power generation process.
                    </li>
                    <li>
                      HVAC Systems: Used to close off ductwork ends during
                      construction or maintenance, preventing air leaks and
                      maintaining system pressure.
                    </li>
                    <li>
                      Pulp and Paper Industry: Closes off pipe ends in pulp
                      processing and paper production systems to prevent leaks
                      and protect equipment.
                    </li>
                    <li>
                      Automotive Industry: Applied to seal exhaust systems
                      and other components, preventing leaks and ensuring
                      optimal performance.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={endcaps}
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

export default Endcaps;
