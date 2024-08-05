import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import eccentric from "../../../../assets/newImages/buttweld-ecentric-reducer.webp"
import eccentricdiagram from "../../../../assets/newImages/Eccentric-Reducer-diagram.svg"

const EccentricReducers = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Eccentric Reducers
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={eccentric}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The eccentric reducer is a key component in piping systems
                  designed to smoothly transition between pipes of different
                  diameters while maintaining a consistent flow path. Unlike
                  concentric reducers, eccentric reducers have an offset
                  centerline that aligns with the bottom of the pipe, which
                  helps in managing fluid flow and preventing air pockets or
                  sediment accumulation. This fitting is commonly used in
                  industries such as oil and gas, chemical processing, and water
                  treatment, where maintaining a level flow line is crucial.
                </p>

                <br />

                <p>
                  Constructed from high-quality materials, eccentric reducers
                  are built to endure high pressures and varying temperatures,
                  ensuring robust performance in demanding applications. The
                  eccentric design helps to minimize pressure drops and
                  turbulence, enhancing overall flow efficiency. Adhering to
                  strict industry standards, including ASTM, ASME, and ANSI,
                  these reducers are engineered for reliability and longevity.
                  Their precision manufacturing and durable construction make
                  them an excellent choice for applications requiring smooth
                  transitions and effective flow management.
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
                 Eccentric Reducers Specifications:
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
                          Eccentric Reducer Butt Weld Fittings
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
                    <img src={eccentricdiagram} alt="" />
                  </div>

                  <table>
                    <thead>
<tr>
<th rowSpan="2"><strong>Code RCD REISO</strong></th>
<th colSpan="3"><strong>Ø BIG</strong></th>
<th colSpan="3"><strong>Ø SMALL</strong></th>
<th rowSpan="2"><strong>HEIGHT H mm</strong></th>
<th rowSpan="2"><strong>THEORETICAL WEIGHT KG</strong></th>
</tr>
<tr>
<th><strong>DN</strong></th>
<th><strong>D mm</strong></th>
<th><strong>Thickness S mm</strong></th>
<th><strong>DN</strong></th>
<th><strong>d mm</strong></th>
<th><strong>Thickness s mm</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>27 21</td>
<td>3/4</td>
<td>26.9</td>
<td>2.3</td>
<td>1/2</td>
<td>21.3</td>
<td>2.0</td>
<td>38</td>
<td>0.08</td>
</tr>
<tr>
<td>33 21</td>
<td rowSpan="2">1</td>
<td rowSpan="2">33.7</td>
<td rowSpan="2">2.6</td>
<td>1/2</td>
<td>21.3</td>
<td>2.0</td>
<td rowSpan="2">50</td>
<td>0.09</td>
</tr>
<tr>
<td>33 27</td>
<td>3/4</td>
<td>26.9</td>
<td>2.3</td>
<td>0.09</td>
</tr>
<tr>
<td>42 21</td>
<td rowSpan="3">1&#8243;1/4</td>
<td rowSpan="3">42.4</td>
<td rowSpan="3">2.6</td>
<td>1/2</td>
<td>21.3</td>
<td>2.0</td>
<td rowSpan="3">50</td>
<td>0.12</td>
</tr>
<tr>
<td>42 27</td>
<td>3/4</td>
<td>26.9</td>
<td>2.3</td>
<td>0.13</td>
</tr>
<tr>
<td>42 33</td>
<td>1</td>
<td>33.7</td>
<td>2.6</td>
<td>0.14</td>
</tr>
<tr>
<td>*48 21</td>
<td rowSpan="4">1&#8243;1/2</td>
<td rowSpan="4">48.3</td>
<td rowSpan="4">2.6</td>
<td>1/2</td>
<td>21.3</td>
<td>2.0</td>
<td rowSpan="4">64</td>
<td>0.18</td>
</tr>
<tr>
<td>48 27</td>
<td>3/4</td>
<td>26.9</td>
<td>2.3</td>
<td>0.19</td>
</tr>
<tr>
<td>48 33</td>
<td>1</td>
<td>33.7</td>
<td>2.6</td>
<td>0.20</td>
</tr>
<tr>
<td>48 42</td>
<td>1&#8243;1/4</td>
<td>42.4</td>
<td>2.6</td>
<td>0.20</td>
</tr>
<tr>
<td>60 27</td>
<td rowSpan="4">2</td>
<td rowSpan="4">60.3</td>
<td rowSpan="4">2.9</td>
<td>3/4</td>
<td>26.9</td>
<td>2.3</td>
<td rowSpan="4">76</td>
<td>0.30</td>
</tr>
<tr>
<td>60 33</td>
<td>1</td>
<td>33.7</td>
<td>2.6</td>
<td>0.31</td>
</tr>
<tr>
<td>60 42</td>
<td>1&#8243;1/4</td>
<td>42.4</td>
<td>2.6</td>
<td>0.32</td>
</tr>
<tr>
<td>60 48</td>
<td>1&#8243;1/2</td>
<td>48.3</td>
<td>2.6</td>
<td>0.33</td>
</tr>
<tr>
<td>76 33</td>
<td rowSpan="4">2&#8243;1/2</td>
<td rowSpan="4">76.1</td>
<td rowSpan="4">2.9</td>
<td>1</td>
<td>33.7</td>
<td>2.6</td>
<td rowSpan="4">90</td>
<td>0.40</td>
</tr>
<tr>
<td>76 42</td>
<td>1&#8243;1/4</td>
<td>42.4</td>
<td>2.6</td>
<td>0.47</td>
</tr>
<tr>
<td>76 48</td>
<td>1&#8243;1/2</td>
<td>48.3</td>
<td>2.6</td>
<td>0.48</td>
</tr>
<tr>
<td>76 60</td>
<td>2</td>
<td>60.3</td>
<td>2.6</td>
<td>0.49</td>
</tr>
<tr>
<td>89 42</td>
<td rowSpan="4">3</td>
<td rowSpan="4">88.9</td>
<td rowSpan="4">3.2</td>
<td>1&#8243;1/4</td>
<td>42.4</td>
<td>2.6</td>
<td rowSpan="4">90</td>
<td>0.55</td>
</tr>
<tr>
<td>89 48</td>
<td>1&#8243;1/2</td>
<td>48.3</td>
<td>2.6</td>
<td>0.61</td>
</tr>
<tr>
<td>89 60</td>
<td>2</td>
<td>60.3</td>
<td>2.9</td>
<td>0.62</td>
</tr>
<tr>
<td>89 76</td>
<td>2&#8243;1/2</td>
<td>76.1</td>
<td>2.9</td>
<td>0.63</td>
</tr>
<tr>
<td>114 48</td>
<td rowSpan="4">4</td>
<td rowSpan="4">114.3</td>
<td rowSpan="4">3.6</td>
<td>1&#8243;1/2</td>
<td>48.3</td>
<td>2.6</td>
<td rowSpan="4">100</td>
<td>0.85</td>
</tr>
<tr>
<td>114 60</td>
<td>2</td>
<td>60.3</td>
<td>2.9</td>
<td>0.98</td>
</tr>
<tr>
<td>114 76</td>
<td>2&#8243;1/2</td>
<td>76.1</td>
<td>2.9</td>
<td>1.00</td>
</tr>
<tr>
<td>114 89</td>
<td>3</td>
<td>88.9</td>
<td>3.2</td>
<td>1.02</td>
</tr>
<tr>
<td>139 60</td>
<td rowSpan="4">5</td>
<td rowSpan="4">139.7</td>
<td rowSpan="4">4.0</td>
<td>2</td>
<td>60.3</td>
<td>2.9</td>
<td rowSpan="4">127</td>
<td>1.60</td>
</tr>
<tr>
<td>139 76</td>
<td>2&#8243;1/2</td>
<td>76.1</td>
<td>2.9</td>
<td>1.70</td>
</tr>
<tr>
<td>139 89</td>
<td>3</td>
<td>88.9</td>
<td>3.2</td>
<td>1.74</td>
</tr>
<tr>
<td>139 114</td>
<td>4</td>
<td>114.3</td>
<td>3.6</td>
<td>1.76</td>
</tr>
<tr>
<td>*168 76</td>
<td rowSpan="4">6</td>
<td rowSpan="4">168.3</td>
<td rowSpan="4">4.5</td>
<td>2&#8243;1/2</td>
<td>76.1</td>
<td>2.9</td>
<td rowSpan="4">140</td>
<td>2.60</td>
</tr>
<tr>
<td>168 89</td>
<td>3</td>
<td>88.9</td>
<td>3.2</td>
<td>2.70</td>
</tr>
<tr>
<td>168 114</td>
<td>4</td>
<td>114.3</td>
<td>3.6</td>
<td>2.82</td>
</tr>
<tr>
<td>168 139</td>
<td>5</td>
<td>139.7</td>
<td>4.0</td>
<td>2.94</td>
</tr>
<tr>
<td>219 114</td>
<td rowSpan="3">8</td>
<td rowSpan="3">219.1</td>
<td rowSpan="3">6.3</td>
<td>4</td>
<td>114.3</td>
<td>3.6</td>
<td rowSpan="3">152</td>
<td>5.03</td>
</tr>
<tr>
<td>219 139</td>
<td>5</td>
<td>139.7</td>
<td>4.0</td>
<td>5.12</td>
</tr>
<tr>
<td>219 168</td>
<td>6</td>
<td>168.3</td>
<td>4.5</td>
<td>5.18</td>
</tr>
<tr>
<td>*273 114</td>
<td rowSpan="4">10</td>
<td rowSpan="4">273.0</td>
<td rowSpan="4">6.3</td>
<td>4</td>
<td>114.3</td>
<td>3.6</td>
<td rowSpan="4">178</td>
<td>7.00</td>
</tr>
<tr>
<td>*273 139</td>
<td>5</td>
<td>139.7</td>
<td>4.0</td>
<td>7.20</td>
</tr>
<tr>
<td>273 168</td>
<td>6</td>
<td>168.3</td>
<td>4.5</td>
<td>7.40</td>
</tr>
<tr>
<td>273 219</td>
<td>8</td>
<td>219.1</td>
<td>6.3</td>
<td>7.55</td>
</tr>
<tr>
<td>323 168</td>
<td rowSpan="3">12</td>
<td rowSpan="3">323.9</td>
<td rowSpan="3">7.1</td>
<td>6</td>
<td>168.3</td>
<td>4.5</td>
<td rowSpan="3">203</td>
<td>11.00</td>
</tr>
<tr>
<td>323 219</td>
<td>8</td>
<td>219.1</td>
<td>6.3</td>
<td>11.10</td>
</tr>
<tr>
<td>323 273</td>
<td>10</td>
<td>273</td>
<td>6.3</td>
<td>11.20</td>
</tr>
</tbody>
</table>

                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Eccentric Reducers:
                  </h2>
                  <p className="mt-2 text-lg">
                    Eccentric reducers are used to connect pipes of different
                    diameters while maintaining a consistent flow path. Their
                    unique design helps manage the flow of fluids in various
                    applications, including:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Utilized to transition between
                      different pipe sizes in pipelines, ensuring efficient flow
                      and minimizing the risk of gas or liquid accumulation.
                    </li>
                    <li>
                      Chemical Processing: Applied in chemical reactors and
                      pipelines to manage flow transitions and avoid issues such
                      as air pockets or sediment build-up.
                    </li>
                    <li>
                      Water Treatment Plants: Helps in the smooth flow of
                      water by connecting pipes of varying sizes and preventing
                      potential blockages or turbulence.
                    </li>
                    <li>
                      Power Generation: Used in power plants to transition
                      between different pipe sizes in steam and cooling systems,
                      ensuring smooth flow and preventing vapor lock.
                    </li>
                    <li>
                      HVAC Systems: Facilitates transitions between
                      different duct sizes while preventing air accumulation and
                      ensuring efficient airflow.
                    </li>
                    <li>
                      Pulp and Paper Industry: Manages the flow of pulp and
                      other materials by connecting pipes of different sizes and
                      preventing blockages or uneven flow.
                    </li>
                    <li>
                      Automotive Industry: Applied in vehicle systems to
                      transition between various pipe sizes, helping to maintain
                      consistent fluid and exhaust flow.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={eccentric}
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

export default EccentricReducers;
