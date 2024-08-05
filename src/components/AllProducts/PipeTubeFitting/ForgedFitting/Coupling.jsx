import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import coupling from "../../../../assets/newImages/coupling.jpg";
import couplingdiagram from "../../../../assets/newImages/coupling-diagram.webp"

const Coupling = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Coupling
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={coupling}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The forged fitting coupling is an essential element in piping
                  systems, designed to connect two pipes or tubes securely. Its
                  robust construction ensures a tight seal, preventing leaks and
                  maintaining the integrity of the fluid or gas being
                  transported. This coupling is widely used in diverse
                  industries, including oil and gas, petrochemical, and water
                  treatment.
                </p>

                <br />

                <p>
                  Crafted from premium-quality forged steel, the coupling offers
                  exceptional durability and resistance to high pressures and
                  extreme temperatures. It conforms to stringent international
                  standards, such as ASTM, ASME, and DIN, ensuring reliable
                  performance and extended service life in demanding industrial
                  environments.
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
                          ASTM A 105, P 5 , P 9 , P 11 , P 12 , P 22 , P
                          23 , P 91
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                          ASTM / ASME 201, 202, 301, 304, 304L, 310, 310S, 316L,
                          316TI, 317, 317L, 321, 347, 904L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          {" "}
                          ASTM A 182- F51, F53,F55
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

                <h2 className="text-2xl font-bold">Coupling Specifications:</h2>
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
                        <td className="px-4 py-2 border">Forged Coupling</td>
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
                    <img src={couplingdiagram} alt="" />
                  </div>

                  <table className="min-w-full bg-white border text-center">
                    <thead className="bg-primary text-white">
         
                <tr>
                    <th   className="border border-gray-200 px-4 py-2">DN</th>
                    <th   className="border border-gray-200 px-4 py-2">Nom. Pipe Size</th>
                    <th   className="border border-gray-200 px-4 py-2">End to End Coupling W</th>
                    <th   className="border border-gray-200 px-4 py-2">Outside Diameter D 3000Lb</th>
                    <th   className="border border-gray-200 px-4 py-2">Outside Diameter D 6000Lb</th>
                    <th   className="border border-gray-200 px-4 py-2">Length of Thread (Min) B</th>
                    <th   className="border border-gray-200 px-4 py-2">Length of Thread (Min) L2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">6</td>
                    <td   className="border border-gray-200 px-4 py-2">1/8"</td>
                    <td   className="border border-gray-200 px-4 py-2">32</td>
                    <td   className="border border-gray-200 px-4 py-2">16</td>
                    <td   className="border border-gray-200 px-4 py-2">22</td>
                    <td   className="border border-gray-200 px-4 py-2">6.4</td>
                    <td   className="border border-gray-200 px-4 py-2">6.7</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">8</td>
                    <td   className="border border-gray-200 px-4 py-2">1/4"</td>
                    <td   className="border border-gray-200 px-4 py-2">35</td>
                    <td   className="border border-gray-200 px-4 py-2">19</td>
                    <td   className="border border-gray-200 px-4 py-2">25</td>
                    <td   className="border border-gray-200 px-4 py-2">8.1</td>
                    <td   className="border border-gray-200 px-4 py-2">10.2</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">10</td>
                    <td   className="border border-gray-200 px-4 py-2">3/8"</td>
                    <td   className="border border-gray-200 px-4 py-2">38</td>
                    <td   className="border border-gray-200 px-4 py-2">22</td>
                    <td   className="border border-gray-200 px-4 py-2">32</td>
                    <td   className="border border-gray-200 px-4 py-2">9.1</td>
                    <td   className="border border-gray-200 px-4 py-2">10.4</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">15</td>
                    <td   className="border border-gray-200 px-4 py-2">1/2"</td>
                    <td   className="border border-gray-200 px-4 py-2">48</td>
                    <td   className="border border-gray-200 px-4 py-2">28</td>
                    <td   className="border border-gray-200 px-4 py-2">38</td>
                    <td   className="border border-gray-200 px-4 py-2">10.9</td>
                    <td   className="border border-gray-200 px-4 py-2">13.6</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">20</td>
                    <td   className="border border-gray-200 px-4 py-2">3/4"</td>
                    <td   className="border border-gray-200 px-4 py-2">51</td>
                    <td   className="border border-gray-200 px-4 py-2">35</td>
                    <td   className="border border-gray-200 px-4 py-2">44</td>
                    <td   className="border border-gray-200 px-4 py-2">12.7</td>
                    <td   className="border border-gray-200 px-4 py-2">13.9</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">25</td>
                    <td   className="border border-gray-200 px-4 py-2">1"</td>
                    <td   className="border border-gray-200 px-4 py-2">60</td>
                    <td   className="border border-gray-200 px-4 py-2">42</td>
                    <td   className="border border-gray-200 px-4 py-2">57</td>
                    <td   className="border border-gray-200 px-4 py-2">14.7</td>
                    <td   className="border border-gray-200 px-4 py-2">17.4</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">32</td>
                    <td   className="border border-gray-200 px-4 py-2">1-1/4"</td>
                    <td   className="border border-gray-200 px-4 py-2">67</td>
                    <td   className="border border-gray-200 px-4 py-2">57</td>
                    <td   className="border border-gray-200 px-4 py-2">64</td>
                    <td   className="border border-gray-200 px-4 py-2">17.0</td>
                    <td   className="border border-gray-200 px-4 py-2">18.0</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">40</td>
                    <td   className="border border-gray-200 px-4 py-2">1-1/2"</td>
                    <td   className="border border-gray-200 px-4 py-2">76</td>
                    <td   className="border border-gray-200 px-4 py-2">64</td>
                    <td   className="border border-gray-200 px-4 py-2">76</td>
                    <td   className="border border-gray-200 px-4 py-2">18.0</td>
                    <td   className="border border-gray-200 px-4 py-2">19.2</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">50</td>
                    <td   className="border border-gray-200 px-4 py-2">2"</td>
                    <td   className="border border-gray-200 px-4 py-2">86</td>
                    <td   className="border border-gray-200 px-4 py-2">76</td>
                    <td   className="border border-gray-200 px-4 py-2">92</td>
                    <td   className="border border-gray-200 px-4 py-2">19.0</td>
                    <td   className="border border-gray-200 px-4 py-2">19.2</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">65</td>
                    <td   className="border border-gray-200 px-4 py-2">2-1/2"</td>
                    <td   className="border border-gray-200 px-4 py-2">92</td>
                    <td   className="border border-gray-200 px-4 py-2">92</td>
                    <td   className="border border-gray-200 px-4 py-2">108</td>
                    <td   className="border border-gray-200 px-4 py-2">23.6</td>
                    <td   className="border border-gray-200 px-4 py-2">29.4</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">80</td>
                    <td   className="border border-gray-200 px-4 py-2">3"</td>
                    <td   className="border border-gray-200 px-4 py-2">108</td>
                    <td   className="border border-gray-200 px-4 py-2">108</td>
                    <td   className="border border-gray-200 px-4 py-2">127</td>
                    <td   className="border border-gray-200 px-4 py-2">25.9</td>
                    <td   className="border border-gray-200 px-4 py-2">30.5</td>
                </tr>
                <tr>
                    <td   className="border border-gray-200 px-4 py-2">100</td>
                    <td   className="border border-gray-200 px-4 py-2">4"</td>
                    <td   className="border border-gray-200 px-4 py-2">121</td>
                    <td   className="border border-gray-200 px-4 py-2">140</td>
                    <td   className="border border-gray-200 px-4 py-2">159</td>
                    <td   className="border border-gray-200 px-4 py-2">27.7</td>
                    <td   className="border border-gray-200 px-4 py-2">33.0</td>
                </tr>
            </tbody>
               
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Couplings:
                  </h2>
                  <p className="mt-2 text-lg">
                    Forged fitting couplings are vital in numerous applications
                    due to their ability to securely connect pipes and maintain
                    the integrity of the fluid or gas being transported. Key
                    areas of application include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: For connecting pipelines and
                      ensuring reliable transport of oil, gas, and other
                      hydrocarbons under high pressure.
                    </li>
                    <li>
                      Chemical Processing: In pipelines and reactors to handle
                      various chemicals, ensuring safe and leak-proof
                      connections.
                    </li>
                    <li>
                      Water Treatment: In systems where durable and secure pipe
                      connections are critical for water transport and treatment
                      processes.
                    </li>
                    <li>
                      Power Generation: In power plants, especially in
                      high-pressure steam and water systems, to ensure robust
                      connections and safety.
                    </li>
                    <li>
                      HVAC Systems: For connecting various pipes in heating,
                      ventilation, and air conditioning systems, ensuring
                      efficient and leak-free operation.
                    </li>
                    <li>
                      Marine Applications: In shipbuilding and offshore
                      platforms, where reliable and durable pipe connections are
                      essential under harsh marine conditions.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={coupling}
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

export default Coupling;
