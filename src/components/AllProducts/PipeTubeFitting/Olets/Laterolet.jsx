import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import laterolet from "../../../../assets/newImages/latrolet.jpg"

const Laterolet = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Laterolet
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={laterolet}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The Laterolet is a specialized branch fitting designed for
                  connecting lateral branch pipes to the main run pipe,
                  typically at an angle of 90 degrees. It is widely used in
                  piping systems where branch connections are required on the
                  side of the pipe, offering versatility and efficiency in
                  various industries such as petrochemical, oil and gas, and
                  water treatment.
                </p>

                <br />

                <p>
                  Made from high-quality materials, the Laterolet is engineered
                  to withstand high pressures and temperatures, ensuring
                  durability and reliability in demanding environments. Its
                  design provides a secure, leak-proof connection, enhancing
                  fluid flow efficiency and system safety. The Laterolet
                  complies with rigorous international standards, including
                  ASTM, ASME, and MSS-SP, ensuring exceptional performance and a
                  long service life. Its precise construction and reliable
                  engineering make it an ideal choice for complex piping systems
                  requiring lateral branch connections.
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

                <h2 className="text-2xl font-bold">
                  Laterolet Specifications:
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
                        <td className="px-4 py-2 border">Laterolet</td>
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
                        <td className="px-4 py-2 border">1/4" to 24"</td>
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

    <th>RATING</th>

    <th colSpan="14">NOMINAL PIPE SIZE </th>

  </tr>
  </thead>
  <tbody>
  <tr>

    <th rowSpan="8">3000 lb </th>

    <th colSpan="2">inch</th>

    <td>1/8</td>

    <td>1/4</td>

    <td>3/8</td>

    <td>1/2</td>

    <td>3/4</td>

    <td>1</td>

    <td>11/4</td>

    <td>11/2</td>

    <td>2</td>

    <td>21/2</td>

    <td>3</td>

    <td>4</td>

  </tr>

  <tr>

    <th>L</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>40.5</td>

    <td>40.5</td>

    <td>40.5</td>

    <td>47.6</td>

    <td>55.6</td>

    <td>60.3</td>

    <td>66.7</td>

    <td>81.0</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>C</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>34.9</td>

    <td>34.9</td>

    <td>34.9</td>

    <td>43.7</td>

    <td>54.0</td>

    <td>67.5</td>

    <td>76.2</td>

    <td>104.8</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>D </th>

    <th>max <br/>

      min </th>

    <td>&nbsp;</td>

    <td>10.0<br/>

      8.5</td>

    <td>13.3<br/>

      11.8</td>

    <td>16.6<br/>

      15.0</td>

    <td>21.7<br/>

      20.2</td>

    <td>27.4<br/>

      25.9</td>

    <td>35.8<br/>

      34.3</td>

    <td>41.6<br/>

      40.1</td>

    <td>53.3<br/>

      51.7</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>F</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>28.6</td>

    <td>28.6</td>

    <td>28.6</td>

    <td>35.7</td>

    <td>44.5</td>

    <td>54.8</td>

    <td>63.5</td>

    <td>82.</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>T</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>34.9</td>

    <td>44.5</td>

    <td>54.8</td>

    <td>63.5</td>

    <td>73.0</td>

    <td>88.9</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>L</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>40.5</td>

    <td>40.5</td>

    <td>47.6 </td>

    <td>55.6</td>

    <td>60.3</td>

    <td>66.7</td>

    <td>81.0</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>C</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>34.9</td>

    <td>34.9</td>

    <td>43.7</td>

    <td>54.0</td>

    <td>67.5</td>

    <td>76.2</td>

    <td>104.8</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th rowSpan="3">6000 lb </th>

    <th>D</th>

    <th>max<br/>

      min</th>

    <td>&nbsp;</td>

    <td>7.1<br/>

      5.6</td>

    <td>9.9<br/>

      8.4</td>

    <td>12.5<br/>

      11.0</td>

    <td>16.3<br/>

      14.8</td>

    <td>21.5<br/>

      19.9</td>

    <td>30.2<br/>

      28.7</td>

    <td>34.7<br/>

      33.0</td>

    <td>43.6<br/>

      42.1</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>F</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>28.6</td>

    <td>28.6</td>

    <td>35.7</td>

    <td>44.5</td>

    <td>54.8</td>

    <td>63.5</td>

    <td>82.6</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>T</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>44.5</td>

    <td>50.8</td>

    <td>61.9</td>

    <td>73.0</td>

    <td>82.6</td>

    <td>103.2</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th rowSpan="2">THREAD*</th>

    <th>B</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>8.1</td>

    <td>9.1</td>

    <td>10.9</td>

    <td>12.7</td>

    <td>14.7</td>

    <td>17.0</td>

    <td>17.8</td>

    <td>19.0</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>L2</th>

    <th>&nbsp;</th>

    <td>&nbsp;</td>

    <td>10.2</td>

    <td>10.4</td>

    <td>13.6</td>

    <td>13.9</td>

    <td>17.3</td>

    <td>17.9</td>

    <td>18.4</td>

    <td>19.2</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th rowSpan="3">SOCKET</th>

    <th>E </th>

    <th>max <br/>

      min </th>

    <td>&nbsp;</td>

    <td>14.3<br/>

      14.1</td>

    <td>17.8<br/>

      17.5</td>

    <td>22.0<br/>

      21.7</td>

    <td>27.3<br/>

      27.0</td>

    <td>34.1<br/>

      33.8</td>

    <td>42.8<br/>

      42.5</td>

    <td>48.9<br/>

      48.6</td>

    <td>61.4<br/>

      61.1</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th>J</th>

    <th>min</th>

    <td>&nbsp;</td>

    <td>9.7</td>

    <td>9.7</td>

    <td>9.7</td>

    <td>12.7</td>

    <td>12.7</td>

    <td>12.7</td>

    <td>12.7</td>

    <td>15.7</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

    <td>&nbsp;</td>

  </tr>

  <tr>

    <th colSpan="2">mm</th>

    <td>6</td>

    <td>8</td>

    <td>10</td>

    <td>15</td>

    <td>20</td>

    <td>25</td>

    <td>32</td>

    <td>40</td>

    <td>50</td>

    <td>65</td>

    <td>80</td>

    <td>100</td>

  </tr>

</tbody>

</table>

                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Laterolets:
                  </h2>
                  <p className="mt-2 text-lg">
                    Laterolets are designed to provide a branch connection at a
                    45-degree angle from the main pipe, offering a smooth
                    transition for flow changes while reducing stress and
                    turbulence. They are widely used across various industries
                    due to their effective flow management capabilities. Key
                    applications include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used to create 45-degree branch
                      connections in pipelines, facilitating smooth transitions
                      and effective flow management for oil, gas, and other
                      hydrocarbons.
                    </li>
                    <li>
                      Chemical Processing: Employed in chemical plants to manage
                      flow transitions in pipelines, ensuring efficient handling
                      of chemicals and reducing stress on the system.
                    </li>
                    <li>
                      Power Generation: Applied in power plants to create
                      45-degree connections in steam, water, and fuel pipelines,
                      enhancing system performance and reducing pressure drops.
                    </li>
                    <li>
                      Water and Wastewater Management: Utilized in water
                      treatment and wastewater systems to create smooth
                      transitions and manage flow effectively through branch
                      connections.
                    </li>
                    <li>
                      HVAC Systems: Used to create angled branch connections in
                      heating, ventilation, and air conditioning systems,
                      improving airflow and system efficiency.
                    </li>
                    <li>
                      Pulp and Paper Industry: Facilitates smooth flow
                      transitions in pipelines handling pulp, water, and
                      chemicals during paper production, ensuring efficient
                      operations.
                    </li>
                    <li>
                      Marine and Shipbuilding: Applied in marine piping systems
                      to provide reliable 45-degree connections that withstand
                      harsh marine conditions, ensuring durability and
                      performance.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={laterolet}
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

export default Laterolet;
