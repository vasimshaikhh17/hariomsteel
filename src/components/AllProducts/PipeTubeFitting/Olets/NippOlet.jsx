import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import nippolet from "../../../../assets/newImages/nippolet.jfif"

const NippOlet = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Nippolet
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={nippolet}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The Nippolet is a specialized branch fitting used for
                  connecting small diameter branch pipes to larger run pipes,
                  offering a compact and efficient solution for piping systems.
                  It is commonly employed in industries such as oil and gas,
                  petrochemical, and water treatment, where space constraints
                  and precise connections are critical.
                </p>

                <br />

                <p>
                  Constructed from high-quality materials, the Nippolet is
                  designed to withstand high pressures and temperatures,
                  ensuring durability and reliability. Its design provides a
                  secure and leak-proof connection, optimizing fluid flow and
                  minimizing the risk of system failures. The Nippolet meets
                  stringent international standards, including ASTM, ASME, and
                  MSS-SP, ensuring superior quality and performance. Its precise
                  engineering and compact construction make it an ideal choice
                  for piping systems requiring efficient small-diameter branch
                  connections.
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
                          ASTM A 105 / A694 / Gr. F42 / 46 / 52 / 56 / 60 / 65 /
                          70
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                          ASTM A182 F304, 304H, 309, 310, 316, 316L, 317L, 321,
                          347, 904L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          ASTM / ASME A/SA 182 UNS F 44, F 45, F51, F 53, F 55,
                          F 60, F 61{" "}
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
                        <td className="px-4 py-2 border">600, 601, 625, 825</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Hastelloy</td>
                        <td className="px-4 py-2 border">C-276</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />

                <h2 className="text-2xl font-bold">Nippolet Specifications:</h2>
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
                          A105, ASTM A182 F316, ASTM A350 LF2)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">Nippolet</td>
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
                          ASTM A105, ASTM A182, ASME B16.11, MSS SP-97
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sizes</td>
                        <td className="px-4 py-2 border">1/8" to 48"</td>
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
                        <td className="px-4 py-2 border">Forged</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h2 className="text-2xl font-bold">Dimension Chart :</h2>

                <div className="overflow-x-auto">
                <table>
                      <thead>

                     
                              <tr>
                                <td colSpan="16" >Standard Weight Weld Outlets, Extra Strong Weld Outlets,</td>
                              </tr>
                              <tr>
                                <td colSpan="16" >Class 3000 Thredolet, Class 3000 Socket Weld Outlets, Extra Strong Nipple Outlets</td>
                              </tr>
                              <tr>
                                <td  rowSpan="13" >Run Sizes</td>
                                <td colSpan="15" >Outlet Size Inches</td>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td >1/8</td>
                                <td >1/4</td>
                                <td >3/8</td>
                                <td >1/2</td>
                                <td >3/4</td>
                                <td >1</td>
                                <td >1 1/4</td>
                                <td >1 1/2</td>
                                <td >2</td>
                                <td >2 1/2</td>
                                <td >3</td>
                                <td >3 1/2</td>
                                <td >4</td>
                                <td >5</td>
                                <td >6</td>
                              </tr>
                              <tr>
                                <td ><div>3/8</div></td>
                                <td ><div>3/8</div></td>
                                <td ><div>1/2</div></td>
                                <td ><div>1/2</div></td>
                                <td ><div>3/4</div></td>
                                <td ><div>1</div></td>
                                <td ><div>1 1/4</div></td>
                                <td ><div>1 1/2</div></td>
                                <td ><div>2</div></td>
                                <td ><div>2 1/2</div></td>
                                <td ><div>3</div></td>
                                <td ><div>3 1/2</div></td>
                                <td ><div>4</div></td>
                                <td ><div>5</div></td>
                                <td ><div>6</div></td>
                              </tr>
                              <tr>
                                <td ><div>1/2</div></td>
                                <td ><div>1/2</div></td>
                                <td ><div>1 3/4</div></td>
                                <td ><div>3/4</div></td>
                                <td ><div>1</div></td>
                                <td ><div>1 1/4</div></td>
                                <td ><div>1 1/2</div></td>
                                <td ><div>2</div></td>
                                <td ><div>2 1/2</div></td>
                                <td ><div>3</div></td>
                                <td ><div>3 1/2</div></td>
                                <td ><div>4</div></td>
                                <td ><div>5</div></td>
                                <td ><div>6</div></td>
                                <td ><div>8</div></td>
                              </tr>
                              <tr>
                                <td ><div>1 3/4</div></td>
                                <td ><div>1 3/4</div></td>
                                <td ><div>1 1/2 - 1 1/4</div></td>
                                <td ><div>1</div></td>
                                <td ><div>1 1/2 - 1 1/4</div></td>
                                <td ><div>1 1/2</div></td>
                                <td ><div>2</div></td>
                                <td ><div>2 1/2</div></td>
                                <td ><div>3</div></td>
                                <td ><div>3 1/2</div></td>
                                <td ><div>4</div></td>
                                <td ><div>5</div></td>
                                <td ><div>6</div></td>
                                <td ><div>8</div></td>
                                <td ><div>10</div></td>
                              </tr>
                              <tr>
                                <td ><div>2 1/2 - 1 1/4</div></td>
                                <td ><div>1 1/2 - 1 1/4</div></td>
                                <td ><div>36-3</div></td>
                                <td ><div>1 1/2 - 1 1/4</div></td>
                                <td ><div>2 1/2 - 2</div></td>
                                <td ><div>2</div></td>
                                <td ><div>2 1/2</div></td>
                                <td ><div>3</div></td>
                                <td ><div>4 - 3 1/2</div></td>
                                <td ><div>4</div></td>
                                <td ><div>5</div></td>
                                <td ><div>6</div></td>
                                <td ><div>8</div></td>
                                <td ><div>10</div></td>
                                <td ><div>14-12</div></td>
                              </tr>
                              <tr>
                                <td ><div>36-3</div></td>
                                <td ><div>36-3</div></td>
                                <td ><div>flat</div></td>
                                <td ><div>2 1/2 - 2</div></td>
                                <td ><div>5-3</div></td>
                                <td ><div>2 1/2</div></td>
                                <td ><div>3 1/2 - 3</div></td>
                                <td ><div>4 - 3 1/2</div></td>
                                <td ><div>5</div></td>
                                <td ><div>5</div></td>
                                <td ><div>6</div></td>
                                <td ><div>8</div></td>
                                <td ><div>10</div></td>
                                <td ><div>12</div></td>
                                <td ><div>16</div></td>
                              </tr>
                              <tr>
                                <td ><div>flat</div></td>
                                <td ><div>flat</div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>8-3</div></td>
                                <td ><div>12-6</div></td>
                                <td ><div>3 1/2 - 3</div></td>
                                <td ><div>5-4</div></td>
                                <td ><div>6-5</div></td>
                                <td ><div>6</div></td>
                                <td ><div>6</div></td>
                                <td ><div>8</div></td>
                                <td ><div>10</div></td>
                                <td ><div>14-12</div></td>
                                <td ><div>14</div></td>
                                <td ><div>18</div></td>
                              </tr>
                              <tr>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>36-10</div></td>
                                <td ><div>36-14</div></td>
                                <td ><div>5 - 4</div></td>
                                <td ><div>8-6</div></td>
                                <td ><div>12-8</div></td>
                                <td ><div>10-8</div></td>
                                <td ><div>8</div></td>
                                <td ><div>10</div></td>
                                <td ><div>14-12</div></td>
                                <td ><div>20-16</div></td>
                                <td ><div>18-16</div></td>
                                <td ><div>22-20</div></td>
                              </tr>
                              <tr>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>flat</div></td>
                                <td ><div>flat</div></td>
                                <td ><div>10 - 6</div></td>
                                <td ><div>18-10</div></td>
                                <td ><div>24-14</div></td>
                                <td ><div>18-12</div></td>
                                <td ><div>12-10</div></td>
                                <td ><div>14-12</div></td>
                                <td ><div>20-16</div></td>
                                <td ><div>22</div></td>
                                <td ><div>22-20</div></td>
                                <td ><div>28-24</div></td>
                              </tr>
                              <tr>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>3/4 - 1/2</div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>36 - 12</div></td>
                                <td ><div>36-20</div></td>
                                <td ><div>36-26</div></td>
                                <td ><div>36-20</div></td>
                                <td ><div>18-14</div></td>
                                <td ><div>20-16</div></td>
                                <td ><div>36-24</div></td>
                                <td ><div>36-24</div></td>
                                <td ><div>28-24</div></td>
                                <td ><div>36-30</div></td>
                              </tr>
                              <tr>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>36 - 1</div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>flat</div></td>
                                <td ><div>flat</div></td>
                                <td ><div>flat</div></td>
                                <td ><div>flat</div></td>
                                <td ><div>36-20</div></td>
                                <td ><div>36-24</div></td>
                                <td ><div>flat</div></td>
                                <td ><div>flat</div></td>
                                <td ><div>36-30</div></td>
                                <td ><div>flat</div></td>
                              </tr>
                              <tr>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>flat</div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>flat</div></td>
                                <td ><div>flat</div></td>
                                <td > 
                                  <div></div></td>
                                <td > 
                                  <div></div></td>
                                <td ><div>flat</div></td>
                                <td > 
                                  <div></div></td>
                              </tr>
                              {/* <tr>
                                <td  align="right"> </td>
                                <td colSpan="7" >Outlet sizes 8, 10, 12, 14, 16. 18, 24, 26. 20 order to specific size combination.</td>
                                <td colSpan="8" >Size consolidation for Weld Outlets only</td>
                              </tr> */}
                            </tbody>
                        </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Nippolets:
                  </h2>
                  <p className="mt-2 text-lg">
                    Nippolets are used to create a branch connection from a main
                    pipe, offering a smaller, more compact alternative to other
                    branch fittings. They are particularly useful in
                    applications where space is limited or where a smaller
                    branch connection is required. Key applications include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Employed to provide smaller branch
                      connections for instrumentation, monitoring, and control
                      devices in pipelines transporting oil, gas, and other
                      hydrocarbons.
                    </li>
                    <li>
                      Chemical Processing: Used in chemical plants to create
                      compact branch connections for instrumentation and control
                      systems, helping to maintain the integrity of the chemical
                      processes.
                    </li>
                    <li>
                      Power Generation: Applied in power plants for creating
                      smaller branch connections in steam, water, and fuel
                      pipelines, facilitating efficient operation and
                      monitoring.
                    </li>
                    <li>
                      Water and Wastewater Management: Utilized in water
                      treatment and wastewater systems to provide compact branch
                      connections for sensors, valves, and control devices.
                    </li>
                    <li>
                      HVAC Systems: Used to create smaller branch connections in
                      heating, ventilation, and air conditioning systems,
                      optimizing space and maintaining system performance.
                    </li>
                    <li>
                      Pulp and Paper Industry: Employed to provide compact
                      branch connections for monitoring and control devices in
                      pipelines handling pulp, water, and chemicals.
                    </li>
                    <li>
                      Marine and Shipbuilding: Applied in marine piping systems
                      to create space-efficient branch connections, ensuring
                      reliability and durability in harsh marine environments.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={nippolet}
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

export default NippOlet;
