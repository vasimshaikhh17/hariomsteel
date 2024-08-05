import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import elbolet from "../../../../assets/newImages/elbolet.png"

const Elbolet = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Elbolet
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={elbolet}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}
                <p>
                  The Elbolet is a specialized branch fitting designed for use
                  on elbows, providing a connection point for smaller branch
                  pipes or instruments. It is a crucial component in piping
                  systems where space is limited or when a branch connection is
                  needed on an elbow, offering versatility in design and
                  functionality across various industries, including oil and
                  gas, petrochemical, and power generation.
                </p>

                <br />

                <p>
                  Constructed from high-quality materials, the Elbolet is
                  engineered to endure high pressures and temperatures, ensuring
                  reliability and longevity in demanding environments. Its
                  design allows for a strong and leak-free connection, enhancing
                  the efficiency and safety of piping systems. The Elbolet
                  complies with strict international standards such as ASTM,
                  ASME, and MSS-SP, ensuring exceptional performance and
                  durability. Its precise manufacturing and robust construction
                  make it an ideal choice for complex piping configurations that
                  require efficient branch connections on elbows.
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

                <h2 className="text-2xl font-bold">Elbolet Specifications:</h2>
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
                        <td className="px-4 py-2 border">Elbolet</td>
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
                        <td className="px-4 py-2 border">1/2" to 24"</td>
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
                           <td rowSpan="3" ><p>Nominal<br/>
                             Elbow Size<br/>
                             Inches </p></td>
                           <td rowSpan="3" ><p>Outlet Size<br/>
                             Inches </p></td>
                           <td colSpan="4" ><p>Dimensions </p></td>
                         </tr>
                         <tr>
                           <td colSpan="2" ><p>CL 3000 Threaded &amp;<br/>
                             Socket Weld Std. &amp; XS Butt-Weld </p></td>
                           <td colSpan="2" ><p>CL 6000 Threaded &amp;<br/>
                             Socket Socket-Weld Sch. 160 &amp; XXS Butt-Weld </p></td>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                           <td ><p>C </p></td>
                           <td ><p>E </p></td>
                           <td ><p>C </p></td>
                           <td ><p>E </p></td>
                         </tr>
                         <tr>
                           <td ><p>36 - 3/4 </p></td>
                           <td ><p>1/4 </p></td>
                           <td ><p>1 1/2 </p></td>
                           <td ><p>1 19/32 </p></td>
                           <td ><p>1 1/2 </p></td>
                           <td ><p>1 19/32 </p></td>
                         </tr>
                         <tr>
                           <td ><p>36 - 3/4 </p></td>
                           <td ><p>3/8 </p></td>
                           <td ><p>1 1/2 </p></td>
                           <td ><p>1 19/32 </p></td>
                           <td ><p>1 1/2 </p></td>
                           <td ><p>1 19/32 </p></td>
                         </tr>
                         <tr>
                           <td ><p>36 - 3/4 </p></td>
                           <td ><p>1/2 </p></td>
                           <td ><p>1 1/2 </p></td>
                           <td ><p>1 19/32 </p></td>
                           <td ><p>1 23/32 </p></td>
                           <td ><p>1 7/8 </p></td>
                         </tr>
                         <tr>
                           <td ><p>36 - 1 </p></td>
                           <td ><p>3/4 </p></td>
                           <td ><p>1 23/32 </p></td>
                           <td ><p>1 7/8 </p></td>
                           <td ><p>2 1/4 </p></td>
                           <td ><p>2 1/4 </p></td>
                         </tr>
                         <tr>
                           <td ><p>36 - 2 </p></td>
                           <td ><p>1 </p></td>
                           <td ><p>2 1/4 </p></td>
                           <td ><p>2 1/4 </p></td>
                           <td ><p>2 7/8 </p></td>
                           <td ><p>2 1/2 </p></td>
                         </tr>
                         <tr>
                           <td ><p>36 - 2 </p></td>
                           <td ><p>1 1/4 </p></td>
                           <td ><p>2 7/8 </p></td>
                           <td ><p>2 1/2 </p></td>
                           <td ><p>3 1/8 </p></td>
                           <td ><p>2 11/16 </p></td>
                         </tr>
                         <tr>
                           <td ><p>36 - 2 </p></td>
                           <td ><p>1 1/2 </p></td>
                           <td ><p>3 1/8 </p></td>
                           <td ><p>2 11/16 </p></td>
                           <td ><p>4 3/16 </p></td>
                           <td ><p>3 1/4 </p></td>
                         </tr>
                         <tr>
                           <td ><p>36 - 3 </p></td>
                           <td ><p>2 </p></td>
                           <td ><p>4 3/16 </p></td>

                           <td ><p>3 1/4 </p></td>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>&nbsp; </p></td>
                         </tr>
                         <tr>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>**2 1/2 </p></td>
                           <td ><p>4 3/16 </p></td>
                           <td ><p>3 1/4 </p></td>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>&nbsp; </p></td>
                         </tr>
                         <tr>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>**3 </p></td>
                           <td ><p>5 1/16 </p></td>
                           <td ><p>3 7/8 </p></td>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>&nbsp; </p></td>
                         </tr>
                         <tr>
                           <td ><p>Order to Specific </p></td>
                           <td ><p>**4 </p></td>
                           <td ><p>6 5/8 </p></td>
                           <td ><p>4 13/16 </p></td>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>&nbsp; </p></td>
                         </tr>
                         <tr>
                           <td ><p>Elbow Sizes </p></td>
                           <td ><p>**6 </p></td>
                           <td ><p>9 3/8 </p></td>
                           <td ><p>6 1/2 </p></td>
                           <td ><p>** </p></td>
                           <td ><p>** </p></td>
                         </tr>
                         <tr>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>**8 </p></td>
                           <td ><p>13 5/16 </p></td>
                           <td ><p>8 1/16 </p></td>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>&nbsp; </p></td>
                         </tr>
                         <tr>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>**10 </p></td>
                           <td ><p>17 1/32 </p></td>
                           <td ><p>10 3/8 </p></td>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>&nbsp; </p></td>
                         </tr>
                         <tr>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>**12 </p></td>
                           <td ><p>19 5/8 </p></td>
                           <td ><p>11 1/8 </p></td>
                           <td ><p>&nbsp; </p></td>
                           <td ><p>&nbsp; </p></td>
                         </tr>
                       </tbody>
                        </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Elbolets:
                  </h2>
                  <p className="mt-2 text-lg">
                    Elbolets are designed to provide a branch connection at a
                    90-degree angle from the main pipe, offering a strong and
                    reliable way to branch off while accommodating changes in
                    flow direction. They are used in various industries for
                    their durability and effective flow management. Key
                    applications include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Employed to create 90-degree branch
                      connections in pipelines for oil, gas, and other
                      hydrocarbons, ensuring secure and reliable flow
                      management.
                    </li>
                    <li>
                      Chemical Processing: Used in chemical plants to provide
                      robust branch connections for handling various chemicals,
                      maintaining system integrity and efficiency.
                    </li>
                    <li>
                      Power Generation: Applied in power plants for creating
                      strong branch connections in steam, water, and fuel
                      pipelines, supporting efficient energy production and
                      distribution.
                    </li>
                    <li>
                      Water and Wastewater Management: Utilized in water
                      treatment and wastewater systems to manage flow direction
                      and create reliable branch connections.
                    </li>
                    <li>
                      HVAC Systems: Used to create 90-degree branch connections
                      in heating, ventilation, and air conditioning systems,
                      facilitating effective airflow and system functionality.
                    </li>
                    <li>
                      Pulp and Paper Industry: Employed to manage flow direction
                      and create reliable branch connections in pipelines
                      handling pulp, water, and chemicals during paper
                      production.
                    </li>
                    <li>
                      Marine and Shipbuilding: Applied in marine piping systems
                      to create durable 90-degree branch connections, ensuring
                      reliability and performance in harsh marine environments.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={elbolet}
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

export default Elbolet;
