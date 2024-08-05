import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import buttweld180 from "../../../../assets/newImages/buttweld-180-degree.jpg";
import buttweld180diagram from "../../../../assets/newImages/180-degree-elbow-diagram.svg";

const Buttweld180 = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  180-Degree Elbow
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={buttweld180}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The 180-degree butt weld elbow is an essential fitting used in
                  piping systems to create a complete U-turn, allowing fluid to
                  flow back in the opposite direction. This fitting is commonly
                  employed in various industries, such as oil and gas,
                  petrochemical, power generation, and water treatment, where
                  space constraints require a compact and efficient piping
                  layout.
                </p>

                <br />

                <p>
                  Constructed from high-quality materials, the 180-degree butt
                  weld elbow is designed to withstand high pressures and extreme
                  temperatures. Its butt weld design ensures a seamless and
                  strong connection, reducing the likelihood of leaks and
                  maintaining optimal flow characteristics. This fitting meets
                  stringent international standards, including ASTM, ASME, and
                  ANSI, ensuring reliability and long-term performance. Its
                  robust design and precise manufacturing make it an ideal
                  choice for demanding industrial applications where efficient
                  flow management is critical.
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
                  180-Degree Elbow Specifications:
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
                          180-Degree Butt Weld Elbow
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
                          Exceptional resistance to corrosion, suitable for
                          harsh environments
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
                          Oil & Gas, Chemical Processing, Petrochemical, Power
                          Plants, Pipelines
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
                    <img src={buttweld180diagram} alt="" />
                  </div>

                  <table>
                    <thead>

          
                    <tr>
                      <td rowSpan="2">
                        NPS
                      </td>
                      <td rowSpan="2">
                        
                          O.D.
                          <br />D
                
                      </td>
                      <td colSpan="2">
                        180deg Long Rad
                      </td>
                      <td colSpan="2">
                        180deg Short Rad
                      </td>
                    </tr>
                    <tr>
                      <td>
                        
                          Center to
                          <br />
                          Center
                          <br />O
                
                      </td>
                      <td>
                        
                          Back to
                          <br />
                          Face
                          <br />K
                
                      </td>
                      <td>
                        
                          Center to
                          <br />
                          Center
                          <br />O
                
                      </td>
                      <td>
                        
                          Back to
                          <br />
                          Face
                          <br />K
                
                      </td>
                    </tr>
                    </thead>
                    <tbody>

             
                    <tr>
                      <td>1/2</td>
                      <td>21.3</td>
                      <td>76</td>
                      <td>48</td>
                      <td>&#8230;</td>
                      <td>&#8230;</td>
                    </tr>
                    <tr>
                      <td>3/4</td>
                      <td>26.7</td>
                      <td>76</td>
                      <td>51</td>
                      <td>&#8230;</td>
                      <td>&#8230;</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>33.4</td>
                      <td>76</td>
                      <td>56</td>
                      <td>51</td>
                      <td>41</td>
                    </tr>
                    <tr>
                      <td>1.1/4</td>
                      <td>42.2</td>
                      <td>95</td>
                      <td>70</td>
                      <td>64</td>
                      <td>52</td>
                    </tr>
                    <tr>
                      <td>1.1/2</td>
                      <td>48.3</td>
                      <td>114</td>
                      <td>83</td>
                      <td>76</td>
                      <td>62</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>60.3</td>
                      <td>152</td>
                      <td>106</td>
                      <td>102</td>
                      <td>81</td>
                    </tr>
                    <tr>
                      <td>2.1/2</td>
                      <td>73</td>
                      <td>190</td>
                      <td>132</td>
                      <td>127</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>88.9</td>
                      <td>229</td>
                      <td>159</td>
                      <td>152</td>
                      <td>121</td>
                    </tr>
                    <tr>
                      <td>3.1/2</td>
                      <td>101.6</td>
                      <td>267</td>
                      <td>184</td>
                      <td>178</td>
                      <td>140</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>114.3</td>
                      <td>305</td>
                      <td>210</td>
                      <td>203</td>
                      <td>159</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>141.3</td>
                      <td>381</td>
                      <td>262</td>
                      <td>254</td>
                      <td>197</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>168.3</td>
                      <td>457</td>
                      <td>313</td>
                      <td>305</td>
                      <td>237</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>219.1</td>
                      <td>610</td>
                      <td>414</td>
                      <td>406</td>
                      <td>313</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>273</td>
                      <td>762</td>
                      <td>518</td>
                      <td>508</td>
                      <td>391</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>323.8</td>
                      <td>914</td>
                      <td>619</td>
                      <td>610</td>
                      <td>467</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>355.6</td>
                      <td>1067</td>
                      <td>711</td>
                      <td>711</td>
                      <td>533</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>406.4</td>
                      <td>1219</td>
                      <td>813</td>
                      <td>813</td>
                      <td>610</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>457</td>
                      <td>1372</td>
                      <td>914</td>
                      <td>914</td>
                      <td>686</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>508</td>
                      <td>1524</td>
                      <td>1016</td>
                      <td>1016</td>
                      <td>762</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>559</td>
                      <td>1676</td>
                      <td>1118</td>
                      <td>1118</td>
                      <td>838</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>610</td>
                      <td>1829</td>
                      <td>1219</td>
                      <td>1219</td>
                      <td>914</td>
                    </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of 180-Degree Butt Weld Fittings:
                  </h2>
                  <p className="mt-2 text-lg">
                    180-degree butt weld fittings are designed to make a full
                    turn in piping systems, effectively redirecting the flow by
                    180 degrees. They are commonly used in various applications,
                    including:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used to redirect the flow of
                      oil, gas, and other fluids around obstacles or to change
                      the direction in pipelines.
                    </li>
                    <li>
                      Chemical Processing: Facilitates changes in flow
                      direction in chemical reactors and pipelines,
                      accommodating complex piping layouts.
                    </li>
                    <li>
                      Water and Wastewater Systems: Allows for redirection
                      of water flow in treatment plants and sewage systems,
                      managing complex flow paths.
                    </li>
                    <li>
                      Power Generation: Manages the flow of steam, water,
                      and other fluids in power generation systems, especially
                      where space constraints require direction changes.
                    </li>
                    <li>
                      HVAC Systems: Redirects airflow in heating,
                      ventilation, and air conditioning systems, particularly in
                      compact or intricate ductwork layouts.
                    </li>
                    <li>
                      Pulp and Paper Industry: Used to manage the flow of
                      pulp, water, and chemicals in various stages of paper
                      manufacturing processes.
                    </li>
                    <li>
                      Automotive Industry: Applied in exhaust and cooling
                      systems of vehicles where a complete redirection of flow
                      is necessary.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={buttweld180}
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

export default Buttweld180;
