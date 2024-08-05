import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import buttweld90 from "../../../../assets/newImages/buttweld-90-degree.jfif";
import buttweld90diagram from "../../../../assets/newImages/buttweld-90-degree-diagram.svg";

const Buttweld90 = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  90-Degree Elbow
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={buttweld90}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The 90-degree butt weld elbow is a vital component in piping
                  systems, designed to facilitate a 90-degree change in
                  direction between two pipes. This fitting is widely used in
                  various industrial sectors, including oil and gas, chemical
                  processing, power generation, and water treatment, where
                  efficient fluid flow management is essential.
                </p>

                <br />

                <p>
                  Crafted from high-quality materials, the 90-degree butt weld
                  elbow provides outstanding durability and is capable of
                  withstanding high pressures and extreme temperatures. The butt
                  weld design offers a seamless and robust connection,
                  minimizing the risk of leaks and ensuring optimal flow
                  efficiency. This fitting adheres to rigorous international
                  standards such as ASTM, ASME, and ANSI, guaranteeing superior
                  performance and long service life. Its precise engineering and
                  reliable construction make it an ideal choice for applications
                  demanding robust and efficient piping solutions.
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
                          WPHY 42, WPHY 46, WPHY 52, WPH 60, WPHY 65 & WPHY 70
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                          F316L, 304L, 304H, 309, 310, 316, 316L, 317L, 321,
                          347, 904L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          S31803, S32205, S32950{" "}
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
                  90-Degree Elbow Specifications:
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
                          A234 WPB, ASTM A403 WP316, ASTM A420 WPL6)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">
                          90-Degree Butt Weld Elbow
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
                          High resistance to various chemicals and environmental
                          conditions
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
                    <img src={buttweld90diagram} alt="" />
                  </div>

                  <table>
                    <thead>
                    <tr>
                      <td colSpan="7">
                        ASME B16.9 90 Degree Elbow dimensions
                      </td>
                    </tr>
                    <tr>
                      <td>
                        inches
                      </td>
                      <td>
                        ND
                      </td>
                      <td>
                        mm
                      </td>
                      <td>
                        Center to center
                      </td>
                      <td>
                        Radius
                      </td>
                      <td>
                        Center to end
                      </td>
                      <td>
                        Back to face
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        D
                      </td>
                      <td>
                        O
                      </td>
                      <td>
                        A
                      </td>
                      <td>
                        B
                      </td>
                      <td>
                        K
                      </td>
                    </tr>
                    </thead>
                    <tbody>

          
                    <tr>
                      <td>1/2</td>
                      <td>15</td>
                      <td>21,34</td>
                      <td>76,20</td>
                      <td>38,10</td>
                      <td>15,87</td>
                      <td>47,62</td>
                    </tr>
                    <tr>
                      <td>3/4</td>
                      <td>20</td>
                      <td>26,67</td>
                      <td>57,15</td>
                      <td>28,57</td>
                      <td>11,11</td>
                      <td>42,86</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>25</td>
                      <td>33,40</td>
                      <td>76,20</td>
                      <td>38,10</td>
                      <td>22,22</td>
                      <td>55,56</td>
                    </tr>
                    <tr>
                      <td>1 1/4</td>
                      <td>32</td>
                      <td>42,16</td>
                      <td>95,25</td>
                      <td>47,60</td>
                      <td>25,40</td>
                      <td>69,85</td>
                    </tr>
                    <tr>
                      <td>1 1/2</td>
                      <td>40</td>
                      <td>48,26</td>
                      <td>114,30</td>
                      <td>57,15</td>
                      <td>28,57</td>
                      <td>82,55</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>50</td>
                      <td>60,32</td>
                      <td>152,40</td>
                      <td>76,20</td>
                      <td>34,92</td>
                      <td>106,40</td>
                    </tr>
                    <tr>
                      <td>2 1/2</td>
                      <td>65</td>
                      <td>73,02</td>
                      <td>190,50</td>
                      <td>95,25</td>
                      <td>44,45</td>
                      <td>131,80</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>80</td>
                      <td>88,90</td>
                      <td>228,60</td>
                      <td>114,30</td>
                      <td>50,80</td>
                      <td>158,75</td>
                    </tr>
                    <tr>
                      <td>3 1/2</td>
                      <td>90</td>
                      <td>101,60</td>
                      <td>266,70</td>
                      <td>133,35</td>
                      <td>57,15</td>
                      <td>184,15</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>100</td>
                      <td>114,30</td>
                      <td>304,80</td>
                      <td>152,40</td>
                      <td>63,50</td>
                      <td>209,55</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>125</td>
                      <td>141,30</td>
                      <td>381,00</td>
                      <td>190,50</td>
                      <td>79,38</td>
                      <td>261,90</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>150</td>
                      <td>168,27</td>
                      <td>457,20</td>
                      <td>228,60</td>
                      <td>95,25</td>
                      <td>312,70</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>200</td>
                      <td>219,07</td>
                      <td>609,60</td>
                      <td>304,80</td>
                      <td>127,00</td>
                      <td>414,30</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>250</td>
                      <td>273,05</td>
                      <td>762,00</td>
                      <td>381,00</td>
                      <td>158,75</td>
                      <td>517,50</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>300</td>
                      <td>323,85</td>
                      <td>914,40</td>
                      <td>457,20</td>
                      <td>190,50</td>
                      <td>619,10</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>350</td>
                      <td>355,60</td>
                      <td>1066,80</td>
                      <td>533,40</td>
                      <td>222,25</td>
                      <td>711,20</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>400</td>
                      <td>406,40</td>
                      <td>1219,20</td>
                      <td>609,60</td>
                      <td>254,00</td>
                      <td>812,80</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>450</td>
                      <td>457,20</td>
                      <td>1371,60</td>
                      <td>685,80</td>
                      <td>285,74</td>
                      <td>914,40</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>500</td>
                      <td>508,00</td>
                      <td>1524,00</td>
                      <td>762,00</td>
                      <td>317,50</td>
                      <td>1016,00</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>550</td>
                      <td>558,80</td>
                      <td>1676,40</td>
                      <td>838,20</td>
                      <td>342,90</td>
                      <td>1117,60</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>600</td>
                      <td>609,60</td>
                      <td>1828,80</td>
                      <td>914,40</td>
                      <td>381,00</td>
                      <td>1219,20</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>700</td>
                      <td>711,20</td>
                      <td>2133,60</td>
                      <td>1066,80</td>
                      <td>441,90</td>
                      <td>1422,40</td>
                    </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of 90-Degree Butt Weld Fittings:
                  </h2>
                  <p className="mt-2 text-lg">
                    90-degree butt weld fittings are crucial in piping systems
                    for changing the direction of flow by 90 degrees. They are
                    widely used across various industries for different
                    applications, including:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Essential for directing the flow
                      of oil, gas, and other hydrocarbons in pipelines and
                      processing systems.
                    </li>
                    <li>
                      Chemical Processing: Employed in chemical plants to
                      handle various chemicals and maintain flow direction in
                      reaction vessels and pipelines.
                    </li>
                    <li>
                      Water and Wastewater Management: Used in water
                      treatment and wastewater systems to guide the flow of
                      water through different stages of treatment.
                    </li>
                    <li>
                      Power Generation: Utilized in power plants to manage
                      the flow of steam, water, and other fluids in energy
                      production systems.
                    </li>
                    <li>
                      HVAC Systems: Applied in heating, ventilation, and air
                      conditioning systems to change the direction of airflow in
                      ductwork.
                    </li>
                    <li>
                      Pulp and Paper Industry: Directs the flow of pulp,
                      water, and chemicals during the paper production process.
                    </li>
                    <li>
                      Automotive Industry: Used in exhaust systems and
                      cooling systems of vehicles to manage the flow of exhaust
                      gases and fluids.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={buttweld90}
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

export default Buttweld90;
