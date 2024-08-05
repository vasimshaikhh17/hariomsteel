import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import sweepolet from "../../../../assets/newImages/sweepolet.jpg"

const SweepOlet = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Sweepolet
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={sweepolet}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}
                <p>
                  The Sweepolet is a specialized branch fitting designed to
                  provide a smooth and gradual transition for branch connections
                  on piping systems. It is ideal for applications requiring a
                  more streamlined flow, reducing turbulence and stress
                  concentrations in industries such as oil and gas,
                  petrochemical, and power generation.
                </p>

                <br />

                <p>
                  Fabricated from high-quality materials, the Sweepolet is
                  engineered to withstand high pressures and temperatures,
                  ensuring long-lasting performance and reliability. Its
                  contoured design offers a seamless and leak-proof connection,
                  optimizing fluid dynamics and enhancing system efficiency. The
                  Sweepolet complies with strict international standards,
                  including ASTM, ASME, and MSS-SP, ensuring superior quality
                  and performance. Its precise engineering and smooth
                  construction make it an ideal choice for applications
                  demanding efficient and stress-reducing branch connections.
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
                          F 60, F 61
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

                <h2 className="text-2xl font-bold">
                  Sweepolet Specifications:
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
                          A105, ASTM A182 F316, ASTM A350 LF2)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">Sweepolet</td>
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
                        <th rowSpan="2">Run Size</th>
                        <th rowSpan="2">
                          Outlet Size
                          <br />
                          Inches
                        </th>
                        <th colSpan="2">Dimensions</th>
                      </tr>
                      <tr>
                        <th>A</th>
                        <th>B</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>6 to 36</td>
                        <td>1 1/4</td>
                        <td>1 1/4</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>6 to 36</td>
                        <td>1 1/2</td>
                        <td>1 3/4</td>
                        <td>5 1/2</td>
                      </tr>
                      <tr>
                        <td>6 to 36</td>
                        <td>2</td>
                        <td>1 1/2</td>
                        <td>5 1/2</td>
                      </tr>
                      <tr>
                        <td>6 to 36</td>
                        <td>3</td>
                        <td>1 21/32</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>6 to 36</td>
                        <td>4</td>
                        <td>2 1/32</td>
                        <td>8 3/4</td>
                      </tr>
                      <tr>
                        <td>10 to 36</td>
                        <td>6</td>
                        <td>2 11/16</td>
                        <td>13</td>
                      </tr>
                      <tr>
                        <td>12 to 36</td>
                        <td>8</td>
                        <td>3</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>16 to 36</td>
                        <td>10</td>
                        <td>3 1/8</td>
                        <td>18 1/2</td>
                      </tr>
                      <tr>
                        <td>16 to 36</td>
                        <td>12</td>
                        <td>3 5/16</td>
                        <td>20 1/2</td>
                      </tr>
                      <tr>
                        <td>20 to 36</td>
                        <td>14</td>
                        <td>3 5/8</td>
                        <td>24</td>
                      </tr>
                      <tr>
                        <td>24 to 36</td>
                        <td>16</td>
                        <td>3 3/4</td>
                        <td>28</td>
                      </tr>
                      <tr>
                        <td>24 to 36</td>
                        <td>18</td>
                        <td>4 5/8</td>
                        <td>31</td>
                      </tr>
                      <tr>
                        <td>24 to 36</td>
                        <td>20</td>
                        <td>5 1/8</td>
                        <td>33</td>
                      </tr>
                      <tr>
                        <td>30 to 36</td>
                        <td>24</td>
                        <td>5 5/8</td>
                        <td>38</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Sweepolets:
                  </h2>
                  <p className="mt-2 text-lg">
                    Sweepolets are designed to provide a smooth, curved branch
                    connection from the main pipe, facilitating the transition
                    of flow while minimizing turbulence and stress. They are
                    used in various industries for their effectiveness in
                    managing flow transitions. Key applications include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Employed to create smooth branch
                      connections in pipelines for oil, gas, and other
                      hydrocarbons, reducing turbulence and ensuring efficient
                      flow.
                    </li>
                    <li>
                      Chemical Processing: Used in chemical plants to provide
                      smooth transitions in pipelines, helping to maintain flow
                      integrity and reduce stress on the system.
                    </li>
                    <li>
                      Power Generation: Applied in power plants for smooth
                      branch connections in steam, water, and fuel pipelines,
                      enhancing system efficiency and reducing pressure drops.
                    </li>
                    <li>
                      Water and Wastewater Management: Utilized in water
                      treatment and wastewater systems to ensure smooth flow
                      transitions and minimize turbulence in branch connections.
                    </li>
                    <li>
                      HVAC Systems: Used to provide smooth transitions in
                      heating, ventilation, and air conditioning systems,
                      improving airflow and reducing energy loss.
                    </li>
                    <li>
                      Pulp and Paper Industry: Employed to create smooth branch
                      connections in pipelines handling pulp, water, and
                      chemicals, ensuring efficient flow during paper
                      production.
                    </li>
                    <li>
                      Marine and Shipbuilding: Applied in marine piping systems
                      to provide smooth branch connections that withstand harsh
                      marine conditions, ensuring reliable operation.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={sweepolet}
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

export default SweepOlet;
