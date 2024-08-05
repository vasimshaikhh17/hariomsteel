import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import sockolet from "../../../../assets/newImages/sockolet.jfif"

const SockOlets = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Sockolet
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={sockolet}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The Sockolet is a type of branch fitting designed to provide a
                  connection point for smaller diameter branch pipes to larger
                  run pipes, utilizing a socket weld connection. It is widely
                  used in industries such as oil and gas, chemical processing,
                  and power generation, where reliable and efficient piping
                  systems are essential.
                </p>

                <br />

                <p>
                  Made from high-quality materials, the Sockolet is built to
                  withstand high pressures and temperatures, offering
                  exceptional durability and performance. Its socket weld design
                  ensures a strong, leak-proof connection, enhancing fluid flow
                  efficiency and system integrity. The Sockolet adheres to
                  rigorous international standards, including ASTM, ASME, and
                  MSS-SP, guaranteeing superior quality and longevity. Its
                  precise engineering and robust construction make it an ideal
                  choice for piping systems requiring secure and efficient
                  branch connections.
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

                <h2 className="text-2xl font-bold">Sockolet Specifications:</h2>
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
                        <td className="px-4 py-2 border">Sockolet</td>
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
                        <td className="px-4 py-2 border">Socket Welding</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h2 className="text-2xl font-bold">Dimension Chart :</h2>

                <div className="overflow-x-auto">
                <table>
                    <thead>

              
                        <tr >
                                <td colSpan="8" >REDUCING SIZES</td>
                              </tr>
                              <tr>
                                <td rowSpan="17" >CL 3000</td>
                                <td rowSpan="2" >Outlet Size<br/>
                                  Inches</td>
                                <td colSpan="5" >Dimensions</td>
                                <td rowSpan="2"  >Appx. Wt<br/>
                                  Pounds</td>
                              </tr>
                              <tr>
                                <td  >A</td>
                                <td  >B</td>
                                <td  >C</td>
                                <td  >D</td>
                                <td  >E</td>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td >1/8</td>
                                <td  ><div>3/4</div></td>
                                <td  ><div>1</div></td>
                                <td  ><div>5/8</div></td>
                                <td  ><div>0.269</div></td>
                                <td  ><div>9/32</div></td>
                                <td  ><div>0.10</div></td>
                              </tr>
                              <tr>
                                <td >1/4</td>
                                <td  ><div>3/4</div></td>
                                <td  ><div>1</div></td>
                                <td  ><div>5/8</div></td>
                                <td  ><div>0.364</div></td>
                                <td  ><div>9/32</div></td>
                                <td  ><div>0.10</div></td>
                              </tr>
                              <tr>
                                <td >3/8</td>
                                <td  ><div>13/16</div></td>
                                <td  ><div>1 1/4</div></td>
                                <td  ><div>3/4</div></td>
                                <td  ><div>0.493</div></td>
                                <td  ><div>7/16</div></td>
                                <td  ><div>0.20</div></td>
                              </tr>
                              <tr>
                                <td >1/2</td>
                                <td  ><div>1</div></td>
                                <td  ><div>1 13/32</div></td>
                                <td  ><div>29/32</div></td>
                                <td  ><div>0.622</div></td>
                                <td  ><div>9/16</div></td>
                                <td  ><div>0.30</div></td>
                              </tr>
                              <tr>
                                <td >3/4</td>
                                <td  ><div>1 1/16</div></td>
                                <td  ><div>1 23/32</div></td>
                                <td  ><div>1 5/32</div></td>
                                <td  ><div>0.824</div></td>
                                <td  ><div>9/16</div></td>
                                <td  ><div>0.35</div></td>
                              </tr>
                              <tr>
                                <td >1</td>
                                <td  ><div>1 5/16</div></td>
                                <td  ><div>2</div></td>
                                <td  ><div>1 7/16</div></td>
                                <td  ><div>1.049</div></td>
                                <td  ><div>25/32</div></td>
                                <td  ><div>0.60</div></td>
                              </tr>
                              <tr>
                                <td >1 1/4</td>
                                <td  ><div>1 5/16</div></td>
                                <td  ><div>2 9/16</div></td>
                                <td  ><div>1 3/4</div></td>
                                <td  ><div>1.380</div></td>
                                <td  ><div>3/4</div></td>
                                <td  ><div>0.85</div></td>
                              </tr>
                              <tr>
                                <td >1 1/2</td>
                                <td  ><div>1 3/8</div></td>
                                <td  ><div>2 27/32</div></td>
                                <td  ><div>2</div></td>
                                <td  ><div>1.610</div></td>
                                <td  ><div>3/4</div></td>
                                <td  ><div>1.00</div></td>
                              </tr>
                              <tr>
                                <td >2</td>
                                <td  ><div>1 1/2</div></td>
                                <td  ><div>3 15/32</div></td>
                                <td  ><div>2 9/16</div></td>
                                <td  ><div>2.067</div></td>
                                <td  ><div>13/16</div></td>
                                <td  ><div>1.60</div></td>
                              </tr>
                              <tr>
                                <td >2 1/2</td>
                                <td  ><div>1 9/16</div></td>
                                <td  ><div>4 1/16</div></td>
                                <td  ><div>3</div></td>
                                <td  ><div>2.469</div></td>
                                <td  ><div>3/4</div></td>
                                <td  ><div>2.75</div></td>
                              </tr>
                              <tr>
                                <td >3</td>
                                <td  ><div>1 3/4</div></td>
                                <td  ><div>4 13/16</div></td>
                                <td  ><div>3 11/16</div></td>
                                <td  ><div>3.068</div></td>
                                <td  ><div>15/16</div></td>
                                <td  ><div>3.80</div></td>
                              </tr>
                              <tr>
                                <td >3 1/2</td>
                                <td  ><div>2 1/8</div></td>
                                <td  ><div>5 7/32</div></td>
                                <td  ><div>4</div></td>
                                <td  ><div>3.548</div></td>
                                <td  ><div>1</div></td>
                                <td  ><div>4.30</div></td>
                              </tr>
                              <tr>
                                <td >4</td>
                                <td  ><div>1 7/8</div></td>
                                <td  ><div>5 31/32</div></td>
                                <td  ><div>4 3/4</div></td>
                                <td  ><div>4.026</div></td>

                                <td  ><div>1 1/16</div></td>
                                <td  ><div>7.25</div></td>
                              </tr>
                              <tr>
                                <td >5</td>
                                <td  ><div>2 5/8</div></td>
                                <td  ><div>7 5/16</div></td>
                                <td  ><div>5 9/16</div></td>
                                <td  ><div>5.047</div></td>
                                <td  ><div>1 11/32</div></td>
                                <td  ><div>12.00</div></td>
                              </tr>
                              <tr>
                                <td >6</td>
                                <td  ><div>2 3/4</div></td>
                                <td  ><div>8 5/8</div></td>
                                <td  ><div>6 11/16</div></td>
                                <td  ><div>6.065</div></td>
                                <td  ><div>1 13/32</div></td>
                                <td  ><div>14.50</div></td>
                              </tr>
                              <tr>
                                <td rowSpan="6" >CL 6000</td>
                                <td >1/2</td>
                                <td  ><div>1 1/4</div></td>
                                <td  ><div>1 23/32</div></td>
                                <td  ><div>3/4</div></td>
                                <td  ><div>0.466</div></td>
                                <td  ><div>7/8</div></td>
                                <td  ><div>0.50</div></td>
                              </tr>
                              <tr>
                                <td >3/4</td>
                                <td  ><div>1 7/16</div></td>
                                <td  ><div>1 61/64</div></td>
                                <td  ><div>1</div></td>
                                <td  ><div>0.614</div></td>
                                <td  ><div>7/8</div></td>
                                <td  ><div>0.80</div></td>
                              </tr>
                              <tr>
                                <td >1</td>
                                <td  ><div>1 9/16</div></td>
                                <td  ><div>2 7/16</div></td>
                                <td  ><div>1 5/16</div></td>
                                <td  ><div>0.815</div></td>
                                <td  ><div>15/16</div></td>
                                <td  ><div>1.30</div></td>
                              </tr>
                              <tr>
                                <td >1 1/4</td>
                                <td  ><div>1 5/8</div></td>
                                <td  ><div>2 23/32</div></td>
                                <td  ><div>1 1/2</div></td>
                                <td  ><div>1.160</div></td>
                                <td  ><div>13/16</div></td>
                                <td  ><div>1.60</div></td>
                              </tr>
                              <tr>
                                <td >1 1/2</td>
                                <td  ><div>1 11/16</div></td>
                                <td  ><div>3 1/4</div></td>
                                <td  ><div>1 15/16</div></td>
                                <td  ><div>1.338</div></td>
                                <td  ><div>7/8</div></td>
                                <td  ><div>2.00</div></td>
                              </tr>
                              <tr>
                                <td >2</td>
                                <td  ><div>2 1/16</div></td>
                                <td  ><div>4 1/32</div></td>
                                <td  ><div>2 3/4</div></td>
                                <td  ><div>1.689</div></td>
                                <td  ><div>1 3/16</div></td>
                                <td  ><div>5.15</div></td>
                              </tr>
                              <tr >
                                <td colSpan="8" >&nbsp;<br/>
                                    <br/></td>
                              </tr>
                              <tr >
                                <td colSpan="8" ><br/>
                                    Size on Size</td>
                              </tr>
                              <tr>
                                <td rowSpan="2" >&nbsp;</td>
                                <td rowSpan="2" >Outlet Size<br/>
                                  Inches</td>
                                <td colSpan="5" >Dimensions</td>
                                <td rowSpan="2" >Appx. Wt<br/>
                                  in Pounds</td>
                              </tr>
                              <tr>
                                <td >A</td>
                                <td >B</td>
                                <td >C</td>
                                <td >D</td>
                                <td >E</td>
                              </tr>
                              <tr>
                                <td rowSpan="12" >CL3000</td>
                                <td >1/2</td>
                                <td >1</td>
                                <td >1 3/8</td>
                                <td >15/16</td>
                                <td >0.622</td>
                                <td >17/32</td>
                                <td >0.15</td>
                              </tr>
                              <tr>
                                <td >3/4</td>
                                <td >1 1/16</td>
                                <td >1 5/8</td>
                                <td >1 3/16</td>
                                <td >0.824</td>
                                <td >15/32</td>
                                <td >0.25</td>
                              </tr>
                              <tr>
                                <td >1</td>
                                <td >1 5/16</td>
                                <td >2</td>
                                <td >1 7/16</td>
                                <td >1.049</td>
                                <td >23/32</td>
                                <td >0.45</td>
                              </tr>
                              <tr>
                                <td >1 1/4</td>
                                <td >1 5/16</td>
                                <td >2 3/8</td>
                                <td >1 3/4</td>
                                <td >1.380</td>
                                <td >9/16</td>
                                <td >0.65</td>
                              </tr>
                              <tr>
                                <td >1 1/2</td>
                                <td >1 3/8</td>
                                <td >2 7/8</td>
                                <td >2</td>
                                <td >1.610</td>
                                <td >21/32</td>
                                <td >0.85</td>
                              </tr>
                              <tr>
                                <td >2</td>
                                <td >1 1/2</td>
                                <td >3 1/2</td>
                                <td >2 9/16</td>
                                <td >2.067</td>
                                <td >15/16</td>
                                <td >1.40</td>
                              </tr>
                              <tr>
                                <td >2 1/2</td>
                                <td >1 9/16</td>
                                <td >4 1/16</td>
                                <td >3</td>
                                <td >2.469</td>
                                <td >3/4</td>
                                <td >2.25</td>
                              </tr>
                              <tr>
                                <td >3</td>
                                <td >1 3/4</td>
                                <td >4 13/16</td>
                                <td >3 11/16</td>
                                <td >3.068</td>
                                <td >15/16</td>
                                <td >3.75</td>
                              </tr>
                              <tr>
                                <td >3 1/2</td>
                                <td >1 11/16</td>
                                <td >5 3/8</td>
                                <td >4 7/16</td>
                                <td >3.548</td>
                                <td >11/16</td>
                                <td >4.30</td>
                              </tr>
                              <tr>
                                <td >4</td>
                                <td >1 7/8</td>
                                <td >6 1/16</td>
                                <td >4 3/4</td>
                                <td >4.026</td>
                                <td >1 1/16</td>
                                <td >6.60</td>
                              </tr>
                              <tr>
                                <td >5</td>
                                <td >2 7/16</td>
                                <td >7 1/4</td>
                                <td >5 1/4</td>
                                <td >5.047</td>
                                <td >1</td>
                                <td >9.00</td>
                              </tr>
                              <tr>
                                <td >6</td>
                                <td >2 11/16</td>
                                <td >8 11/16</td>
                                <td >6 1/16</td>
                                <td >6.065</td>
                                <td >1 3/16</td>
                                <td >15.50</td>
                              </tr>
                            </tbody>
                        </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Sockolets:
                  </h2>
                  <p className="mt-2 text-lg">
                    Sockolets are used to create branch connections on the main
                    pipe with a smooth, rounded profile that helps to manage
                    stress and flow efficiently. They are commonly utilized in
                    various industries where reducing turbulence and ensuring
                    strong connections are critical. Some key applications
                    include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Employed for branching connections
                      in pipelines carrying oil, gas, and other hydrocarbons,
                      helping to manage flow and reduce stress on the main pipe.
                    </li>
                    <li>
                      Chemical Processing: Used in chemical plants to create
                      branch connections in pipelines, ensuring safe and
                      efficient handling of chemicals with reduced risk of
                      leakage or stress.
                    </li>
                    <li>
                      Power Generation: Applied in power plants for creating
                      robust branch connections in steam, water, and fuel
                      pipelines, supporting reliable operation and efficient
                      energy production.
                    </li>
                    <li>
                      Water and Wastewater Management: Utilized in water
                      treatment and wastewater systems to create strong,
                      reliable branch connections that manage flow effectively
                      and prevent leakage.
                    </li>
                    <li>
                      HVAC Systems: Used to create durable branch connections in
                      heating, ventilation, and air conditioning systems,
                      ensuring smooth airflow and system performance.
                    </li>
                    <li>
                      Pulp and Paper Industry: Employed for branching
                      connections in pipelines handling pulp, water, and
                      chemicals, ensuring efficient flow and reducing the risk
                      of pipe damage.
                    </li>
                    <li>
                      Marine and Shipbuilding: Applied in marine piping systems
                      for creating strong, reliable branch connections that
                      withstand the harsh conditions of marine environments.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={sockolet}
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

export default SockOlets;
