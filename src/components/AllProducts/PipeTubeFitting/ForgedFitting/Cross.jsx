import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import cross from "../../../../assets/newImages/cross.jpg";
import crossdiagram from "../../../../assets/newImages/crossdiagram.jpg"

const Cross = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Cross
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={cross}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>
                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}
                <p>
                  The forged steel cross is an essential fitting in piping
                  systems, designed to connect four pipes at a central junction.
                  This robust component is engineered to handle high-pressure
                  and high-temperature conditions, making it ideal for use in
                  demanding industrial environments such as oil and gas,
                  chemical processing, and power generation.
                </p>
                <br />
                <p>
                  Constructed from high-grade forged steel, the cross offers
                  exceptional strength and durability. Its precise manufacturing
                  process ensures a seamless connection and reliable performance
                  under stress. Adhering to stringent industry standards such as
                  ASTM, ASME, and DIN, the forged steel cross provides
                  long-lasting reliability and safety for critical piping
                  applications.
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
                          ASTM SA105, ASTM SA106, ASTM A350 LF2, LF3
                        </td>
                      </tr>
                      <tr>
                         <td className="px-4 py-2 border">Stainless Steel</td>
                         <td className="px-4 py-2 border">
                          ASTM / ASME 201, 202, 301, 304, 304L, 310, 310S, 316L,
                          316TI, 317, 317L, 321, 347, 409, 409M, 409L, 410,
                          410S, 420, 430, 431, 441, 444, 446, 17.4PH, 904L{" "}
                        </td>
                      </tr>

                      <tr>
                         <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                         <td className="px-4 py-2 border">
                          {" "}
                          ASTM / ASME SA 790
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
                <h2 className="text-2xl font-bold">Cross Specifications:</h2>
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
                          Monel
                        </td>
                      </tr>
                      <tr>
                         <td className="px-4 py-2 border">Type</td>
                         <td className="px-4 py-2 border">Forged Cross</td>
                      </tr>
                      <tr>
                         <td className="px-4 py-2 border">Temperature Range</td>
                         <td className="px-4 py-2 border">
                          -50°C to 400°C (-58°F to 752°F)
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
                         <td className="px-4 py-2 border">ASME, API, ASTM</td>
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
                          Oil & Gas, Petrochemical, Waterworks, Construction,
                          and Industrial Applications
                        </td>
                      </tr>
                      <tr>
                         <td className="px-4 py-2 border">
                          Production Technique
                        </td>
                         <td className="px-4 py-2 border">
                          Forged from Solid Metal, Heat Treated
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <h2 className="text-2xl font-bold">Dimension Chart :</h2>
                <div className="overflow-x-auto">
                  <div>
                    <img src={crossdiagram} alt="" />
                  </div>

                  <table className="min-w-full bg-white border text-center">
                    <thead className="bg-primary text-white">
                      <tr>
                         <td className="px-4 py-2 border"  rowSpan="4">
                          DN
                        </td>
                         <td className="px-4 py-2 border" rowSpan="4">
                          Nom.
                          <br />
                          Pipe
                          <br />
                          Size
                        </td>
                         <td className="px-4 py-2 border" colSpan="3" rowSpan="3">
                          Center to End
                          <br />
                          Elbow,Tee,Cross
                          <br />A
                        </td>
                         <td className="px-4 py-2 border" colSpan="3" rowSpan="3">
                          Center to End
                          <br />
                          45&deg;Elbow
                          <br />C
                        </td>
                         <td className="px-4 py-2 border" colSpan="3" rowSpan="3">
                          Outside Diameter
                          <br />
                          Of Band
                          <br />H
                        </td>
                         <td className="px-4 py-2 border" colSpan="3" rowSpan="3">
                          Minimum Wall
                          <br />
                          Thickness
                          <br />G
                        </td>
                         <td className="px-4 py-2 border" colSpan="2" rowSpan="3">
                          Length Of
                          <br />
                          Thread
                          <br />
                          Min.(1)
                        </td>
                      </tr>
                      <tr ></tr>
                      <tr ></tr>
         
                      <tr>
                         <td className="px-4 py-2 border">2000</td>
                         <td className="px-4 py-2 border">3000</td>
                         <td className="px-4 py-2 border">6000</td>
                         <td className="px-4 py-2 border">2000</td>
                         <td className="px-4 py-2 border">3000</td>
                         <td className="px-4 py-2 border">6000</td>
                         <td className="px-4 py-2 border">2000</td>
                         <td className="px-4 py-2 border">3000</td>
                         <td className="px-4 py-2 border">6000</td>
                         <td className="px-4 py-2 border">2000</td>
                         <td className="px-4 py-2 border">3000</td>
                         <td className="px-4 py-2 border">6000</td>
                         <td className="px-4 py-2 border">B</td>
                         <td className="px-4 py-2 border">L2</td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          10
                        </td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          15
                        </td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          20
                        </td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          25
                        </td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          32
                        </td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          40
                        </td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          50
                        </td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          65
                        </td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          80
                        </td>
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
                         <td className="px-4 py-2 border"
                         
                       
                        >
                          100
                        </td>
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
                    Applications of Forged Steel Crosses:
                  </h2>
                  <p className="mt-2 text-lg">
                    Forged steel crosses are crucial in various applications due
                    to their ability to connect four pipelines at a single
                    junction, providing flexibility and reliability in complex
                    piping systems. Key areas of application include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used in refining, distribution, and
                      production facilities to handle high-pressure and
                      high-temperature fluids.
                    </li>
                    <li>
                      Chemical Processing: In pipelines and processing units to
                      efficiently manage the flow of various chemicals under
                      rigorous conditions.
                    </li>
                    <li>
                      Power Generation: In steam and water systems of power
                      plants where durable and high-strength fittings are
                      necessary.
                    </li>
                    <li>
                      Petrochemical Industry: For the safe transportation and
                      handling of hydrocarbons and other chemicals.
                    </li>
                    <li>
                      Water Treatment: In water distribution systems and
                      treatment plants to ensure robust connections and prevent
                      leaks.
                    </li>
                    <li>
                      HVAC Systems: In heating, ventilation, and air
                      conditioning systems to manage fluid flow in complex
                      configurations.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={cross}
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

export default Cross;
