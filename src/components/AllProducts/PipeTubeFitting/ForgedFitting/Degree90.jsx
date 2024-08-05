import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import degree90 from "../../../../assets/newImages/degree90.jfif";
import diagram2 from "../../../../assets/newImages/degree90diagram.jpg";

const Degree90 = () => {
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
                    src={degree90}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The 90-degree forged elbow is an essential fitting in piping
                  systems, engineered to create a sharp change in direction
                  between two pipes at a 90-degree angle. This elbow is widely
                  utilized in various sectors, including oil and gas, chemical
                  processing, and water treatment, where a precise and reliable
                  angle transition is required.
                </p>
                <br />
                <p>
                  Crafted from high-quality forged steel, the 90-degree elbow
                  offers outstanding strength and durability, capable of
                  withstanding high pressures and extreme temperatures. It
                  complies with stringent international standards such as ASTM,
                  ASME, and DIN, ensuring exceptional performance and long-term
                  reliability in demanding environments.
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
                          ASTM A234, ASME SA234 WPB
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                          ASTM A403 WP316/316L, ASTM A403 SA / A 774 WP-S, WP-W,
                          WP-WX 304/304L, ASTM A182 F316L, 304L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          ASTM A 815, ASME SA 815
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
                <div className="overflow-x-auto ">
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
                          Forged Steel (e.g., ASTM A105, A350 LF2, A182 F11,
                          F22)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">90-Degree Elbow</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Temperature Range</td>
                        <td className="px-4 py-2 border">
                          -50°C to 200°C (-58°F to 392°F) (varies with material)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Pressure Rating</td>
                        <td className="px-4 py-2 border">
                          Up to 1500 psi (varies with material and design)
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
                          Oil & Gas, Waterworks, HVAC Systems, Chemical
                          Processing, Construction
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Production Technique
                        </td>
                        <td className="px-4 py-2 border">
                          Cast, Forged, or Fabricated (varies with material and
                          design)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h2 className="text-2xl font-bold">Dimension Chart :</h2>

                <div className="overflow-x-auto">
                  <div>
                    <img src={diagram2} alt="" />
                  </div>

                  <table className="min-w-full bg-white border text-center">
                   
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-2 border" rowSpan="4">
                          DN
                        </th>
                        <th className="px-4 py-2 border" rowSpan="4">
                          Nom.
                          <br />
                          Pipe
                          <br />
                          Size
                        </th>
                        <th
                          className="px-4 py-2 border"
                          colSpan="3"
                          rowSpan="3"
                        >
                          Center to End
                          <br />
                          Elbow,Tee,Cross
                          <br />A
                        </th>
                        <th
                          className="px-4 py-2 border"
                          colSpan="3"
                          rowSpan="3"
                        >
                          Center to End
                          <br />
                          45&deg;Elbow
                          <br />C
                        </th>
                        <th
                          className="px-4 py-2 border"
                          colSpan="3"
                          rowSpan="3"
                        >
                          Outside Diameter
                          <br />
                          Of Band
                          <br />H
                        </th>
                        <th
                          className="px-4 py-2 border"
                          colSpan="3"
                          rowSpan="3"
                        >
                          Minimum Wall
                          <br />
                          Thickness
                          <br />G
                        </th>
                        <th
                          className="px-4 py-2 border"
                          colSpan="2"
                          rowSpan="3"
                        >
                          Length Of
                          <br />
                          Thread
                          <br />
                          Min.(1)
                        </th>
                      </tr>
                      <tr></tr>
                      <tr></tr>
                      <tr>
                        <th className="px-4 py-2 border">2000</th>
                        <th className="px-4 py-2 border">3000</th>
                        <th className="px-4 py-2 border">6000</th>
                        <th className="px-4 py-2 border">2000</th>
                        <th className="px-4 py-2 border">3000</th>
                        <th className="px-4 py-2 border">6000</th>
                        <th className="px-4 py-2 border">2000</th>
                        <th className="px-4 py-2 border">3000</th>
                        <th className="px-4 py-2 border">6000</th>
                        <th className="px-4 py-2 border">2000</th>
                        <th className="px-4 py-2 border">3000</th>
                        <th className="px-4 py-2 border">6000</th>
                        <th className="px-4 py-2 border">B</th>
                        <th className="px-4 py-2 border">L2</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="px-4 py-2 border">6</td>
                      <td className="px-4 py-2 border">1/8&quot;</td>
                      <td className="px-4 py-2 border">21</td>
                      <td className="px-4 py-2 border">21</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">17</td>
                      <td className="px-4 py-2 border">17</td>
                      <td className="px-4 py-2 border">19</td>
                      <td className="px-4 py-2 border">22</td>
                      <td className="px-4 py-2 border">22</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">3.18</td>
                      <td className="px-4 py-2 border">3.18</td>
                      <td className="px-4 py-2 border">6.35</td>
                      <td className="px-4 py-2 border">6.4</td>
                      <td className="px-4 py-2 border">6.7</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">1/4&quot;</td>
                      <td className="px-4 py-2 border">21</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">28</td>
                      <td className="px-4 py-2 border">17</td>
                      <td className="px-4 py-2 border">19</td>
                      <td className="px-4 py-2 border">22</td>
                      <td className="px-4 py-2 border">22</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">3.18</td>
                      <td className="px-4 py-2 border">3.30</td>
                      <td className="px-4 py-2 border">6.60</td>
                      <td className="px-4 py-2 border">8.1</td>
                      <td className="px-4 py-2 border">10.2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">10</td>
                      <td className="px-4 py-2 border">3/8&quot;</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">28</td>
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">19</td>
                      <td className="px-4 py-2 border">22</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">38</td>
                      <td className="px-4 py-2 border">3.18</td>
                      <td className="px-4 py-2 border">3.51</td>
                      <td className="px-4 py-2 border">6.98</td>
                      <td className="px-4 py-2 border">9.1</td>
                      <td className="px-4 py-2 border">10.4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">15</td>
                      <td className="px-4 py-2 border">1/2&quot;</td>
                      <td className="px-4 py-2 border">28</td>
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">38</td>
                      <td className="px-4 py-2 border">22</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">28</td>
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">38</td>
                      <td className="px-4 py-2 border">46</td>
                      <td className="px-4 py-2 border">3.18</td>
                      <td className="px-4 py-2 border">4.09</td>
                      <td className="px-4 py-2 border">8.15</td>
                      <td className="px-4 py-2 border">10.9</td>
                      <td className="px-4 py-2 border">13.6</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">3/4&quot;</td>
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">38</td>
                      <td className="px-4 py-2 border">44</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">28</td>
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">38</td>
                      <td className="px-4 py-2 border">46</td>
                      <td className="px-4 py-2 border">56</td>
                      <td className="px-4 py-2 border">3.18</td>
                      <td className="px-4 py-2 border">4.32</td>
                      <td className="px-4 py-2 border">8.53</td>
                      <td className="px-4 py-2 border">12.7</td>
                      <td className="px-4 py-2 border">13.9</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">1&quot;</td>
                      <td className="px-4 py-2 border">38</td>
                      <td className="px-4 py-2 border">44</td>
                      <td className="px-4 py-2 border">51</td>
                      <td className="px-4 py-2 border">28</td>
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">35</td>
                      <td className="px-4 py-2 border">46</td>
                      <td className="px-4 py-2 border">56</td>
                      <td className="px-4 py-2 border">62</td>
                      <td className="px-4 py-2 border">3.68</td>
                      <td className="px-4 py-2 border">4.98</td>
                      <td className="px-4 py-2 border">9.93</td>
                      <td className="px-4 py-2 border">14.7</td>
                      <td className="px-4 py-2 border">17.3</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">32</td>
                      <td className="px-4 py-2 border">1-1/4&quot;</td>
                      <td className="px-4 py-2 border">44</td>
                      <td className="px-4 py-2 border">51</td>
                      <td className="px-4 py-2 border">60</td>
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">35</td>
                      <td className="px-4 py-2 border">43</td>
                      <td className="px-4 py-2 border">56</td>
                      <td className="px-4 py-2 border">62</td>
                      <td className="px-4 py-2 border">75</td>
                      <td className="px-4 py-2 border">3.89</td>
                      <td className="px-4 py-2 border">5.28</td>
                      <td className="px-4 py-2 border">10.59</td>
                      <td className="px-4 py-2 border">17.0</td>
                      <td className="px-4 py-2 border">18.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">40</td>
                      <td className="px-4 py-2 border">1-1/2&quot;</td>
                      <td className="px-4 py-2 border">51</td>
                      <td className="px-4 py-2 border">60</td>
                      <td className="px-4 py-2 border">64</td>
                      <td className="px-4 py-2 border">35</td>
                      <td className="px-4 py-2 border">43</td>
                      <td className="px-4 py-2 border">44</td>
                      <td className="px-4 py-2 border">62</td>
                      <td className="px-4 py-2 border">75</td>
                      <td className="px-4 py-2 border">84</td>
                      <td className="px-4 py-2 border">4.01</td>
                      <td className="px-4 py-2 border">5.56</td>
                      <td className="px-4 py-2 border">11.07</td>
                      <td className="px-4 py-2 border">17.8</td>
                      <td className="px-4 py-2 border">18.4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">50</td>
                      <td className="px-4 py-2 border">2&quot;</td>
                      <td className="px-4 py-2 border">60</td>
                      <td className="px-4 py-2 border">64</td>
                      <td className="px-4 py-2 border">83</td>
                      <td className="px-4 py-2 border">43</td>
                      <td className="px-4 py-2 border">44</td>
                      <td className="px-4 py-2 border">52</td>
                      <td className="px-4 py-2 border">75</td>
                      <td className="px-4 py-2 border">84</td>
                      <td className="px-4 py-2 border">102</td>
                      <td className="px-4 py-2 border">4.27</td>
                      <td className="px-4 py-2 border">7.14</td>
                      <td className="px-4 py-2 border">12.09</td>
                      <td className="px-4 py-2 border">19.0</td>
                      <td className="px-4 py-2 border">19.2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">65</td>
                      <td className="px-4 py-2 border">2-1/2&quot;</td>
                      <td className="px-4 py-2 border">76</td>
                      <td className="px-4 py-2 border">83</td>
                      <td className="px-4 py-2 border">95</td>
                      <td className="px-4 py-2 border">52</td>
                      <td className="px-4 py-2 border">52</td>
                      <td className="px-4 py-2 border">64</td>
                      <td className="px-4 py-2 border">92</td>
                      <td className="px-4 py-2 border">102</td>
                      <td className="px-4 py-2 border">121</td>
                      <td className="px-4 py-2 border">5.61</td>
                      <td className="px-4 py-2 border">7.65</td>
                      <td className="px-4 py-2 border">15.29</td>
                      <td className="px-4 py-2 border">23.6</td>
                      <td className="px-4 py-2 border">28.9</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">80</td>
                      <td className="px-4 py-2 border">3&quot;</td>
                      <td className="px-4 py-2 border">86</td>
                      <td className="px-4 py-2 border">95</td>
                      <td className="px-4 py-2 border">106</td>
                      <td className="px-4 py-2 border">64</td>
                      <td className="px-4 py-2 border">64</td>
                      <td className="px-4 py-2 border">79</td>
                      <td className="px-4 py-2 border">109</td>
                      <td className="px-4 py-2 border">121</td>
                      <td className="px-4 py-2 border">146</td>
                      <td className="px-4 py-2 border">5.99</td>
                      <td className="px-4 py-2 border">8.84</td>
                      <td className="px-4 py-2 border">16.64</td>
                      <td className="px-4 py-2 border">25.9</td>
                      <td className="px-4 py-2 border">30.5</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">4&quot;</td>
                      <td className="px-4 py-2 border">106</td>
                      <td className="px-4 py-2 border">114</td>
                      <td className="px-4 py-2 border">114</td>
                      <td className="px-4 py-2 border">79</td>
                      <td className="px-4 py-2 border">79</td>
                      <td className="px-4 py-2 border">79</td>
                      <td className="px-4 py-2 border">146</td>
                      <td className="px-4 py-2 border">152</td>
                      <td className="px-4 py-2 border">152</td>
                      <td className="px-4 py-2 border">6.55</td>
                      <td className="px-4 py-2 border">11.18</td>
                      <td className="px-4 py-2 border">18.67</td>
                      <td className="px-4 py-2 border">27.7</td>
                      <td className="px-4 py-2 border">33.0</td>
                    </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of 90-Degree Elbows:
                  </h2>
                  <p className="mt-2 text-lg">
                    90-degree elbows are crucial in various applications where a
                    sharp directional change is needed in piping systems. They
                    are commonly used in:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Plumbing Systems: For residential and commercial plumbing
                      to navigate around obstacles and achieve necessary
                      direction changes.
                    </li>
                    <li>
                      HVAC Systems: In heating, ventilation, and air
                      conditioning systems to redirect airflow and optimize
                      ductwork layout.
                    </li>
                    <li>
                      Oil and Gas Industry: To connect pipes and manage the
                      direction of flow in pipelines, facilitating efficient
                      transportation of materials.
                    </li>
                    <li>
                      Chemical Processing: In chemical plants to guide the flow
                      of chemicals through processing equipment and reactors.
                    </li>
                    <li>
                      Water Treatment Facilities: To direct water flow between
                      different stages of treatment, ensuring effective
                      filtration and processing.
                    </li>
                    <li>
                      Power Generation: In power plants to manage steam and
                      fluid flows between various components of the energy
                      generation system.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={degree90}
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

export default Degree90;
