import React from "react";
import Layout from "../../common/Layout";
import rjg from "../../../assets/newImages/ring-joint-gaskets.jpeg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";

const RingJoint = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Ring Joint Gasket
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={rjg}
                  alt="Stainless Steel Gaskets"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>

              {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

              <p>
                Ring Joint Gaskets are precision-engineered components designed
                for high-pressure applications. They are commonly used in the
                oil and gas industry, particularly in offshore and onshore
                drilling operations, and in high-pressure valve and pipework
                systems. Made from solid metal rings, these gaskets are capable
                of withstanding extreme pressure and temperature conditions.
              </p>

              <br />

              <p>
                These gaskets conform to international standards such as API,
                ASME, and ANSI, ensuring compatibility and reliability across a
                range of industrial applications. Their robust design and
                material composition make them ideal for maintaining a secure
                seal under the most demanding conditions.
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
                      <td className="px-4 py-2 border">Carbon</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Stainless Steel</td>
                      <td className="px-4 py-2 border">
                        304, 304L, 316, 316L, 316Ti, 321, 347, 347H, 410,{" "}
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2 border">Nickel</td>
                      <td className="px-4 py-2 border">200</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Monel</td>
                      <td className="px-4 py-2 border">400</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Inconel</td>
                      <td className="px-4 py-2 border">600, 625, 800</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Incoloy</td>
                      <td className="px-4 py-2 border">800, 825</td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2 border">Titanium</td>
                      <td className="px-4 py-2 border">Grade 2, Grade 7</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Hastelloy</td>
                      <td className="px-4 py-2 border">C-276</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Copper</td>
                      <td className="px-4 py-2 border">Copper</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />

              <h2 className="text-2xl font-bold">
                Ring Joint Gaskets Specifications:
              </h2>
              <div className="overflow-x-auto ">
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
                        Carbon Steel, Stainless Steel, Nickel, Inconel, Incoloy, Titanium, Hastelloy, Copper
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Type</td>
                      <td className="px-4 py-2 border">Ring Joint</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Temperature Range</td>
                      <td className="px-4 py-2 border">
                        -200°C to 1000°C (-328°F to 1832°F)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Pressure Rating</td>
                      <td className="px-4 py-2 border">
                        Up to 15000 psi (varies with material and design)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Standards</td>
                      <td className="px-4 py-2 border">ASME, API, ANSI</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Sizes</td>
                      <td className="px-4 py-2 border">Customizable</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Applications</td>
                      <td className="px-4 py-2 border">
                        Oil & Gas, Petrochemical, Chemical, High-Pressure Valve
                        and Pipework Systems
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Production Technique</td>
                      <td className="px-4 py-2 border">
                        Precision Machined from Solid Metal
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <h2 className="text-2xl font-bold">Dimension Chart :</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                
                <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-2 border">Nominal Bore (mm)</th>
                      <th className="px-4 py-2 border">Inner Ring ID #150</th>
                      <th className="px-4 py-2 border">Inner Ring ID #300</th>
                      <th className="px-4 py-2 border">Inner Ring ID #600</th>
                      <th className="px-4 py-2 border">
                        Sealing Element ID #150
                      </th>
                      <th className="px-4 py-2 border">
                        Sealing Element ID #300
                      </th>
                      <th className="px-4 py-2 border">
                        Sealing Element ID #600
                      </th>
                      <th className="px-4 py-2 border">
                        Sealing Element OD #150
                      </th>
                      <th className="px-4 py-2 border">
                        Sealing Element OD #300
                      </th>
                      <th className="px-4 py-2 border">
                        Sealing Element OD #600
                      </th>
                      <th className="px-4 py-2 border">
                        Centering Ring OD #150
                      </th>
                      <th className="px-4 py-2 border">
                        Centering Ring OD #300
                      </th>
                      <th className="px-4 py-2 border">
                        Centering Ring OD #600
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">15</td>
                      <td className="px-4 py-2 border">14.2</td>
                      <td className="px-4 py-2 border">14.2</td>
                      <td className="px-4 py-2 border">14.2</td>
                      <td className="px-4 py-2 border">19.1</td>
                      <td className="px-4 py-2 border">19.1</td>
                      <td className="px-4 py-2 border">19.1</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">47.8</td>
                      <td className="px-4 py-2 border">54.1</td>
                      <td className="px-4 py-2 border">60.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">19.8</td>
                      <td className="px-4 py-2 border">19.8</td>
                      <td className="px-4 py-2 border">19.8</td>
                      <td className="px-4 py-2 border">24.1</td>
                      <td className="px-4 py-2 border">24.1</td>
                      <td className="px-4 py-2 border">24.1</td>
                      <td className="px-4 py-2 border">38.0</td>
                      <td className="px-4 py-2 border">38.0</td>
                      <td className="px-4 py-2 border">38.0</td>
                      <td className="px-4 py-2 border">54.0</td>
                      <td className="px-4 py-2 border">60.0</td>
                      <td className="px-4 py-2 border">65.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">23.8</td>
                      <td className="px-4 py-2 border">23.8</td>
                      <td className="px-4 py-2 border">23.8</td>
                      <td className="px-4 py-2 border">30.1</td>
                      <td className="px-4 py-2 border">30.1</td>
                      <td className="px-4 py-2 border">30.1</td>
                      <td className="px-4 py-2 border">44.0</td>
                      <td className="px-4 py-2 border">44.0</td>
                      <td className="px-4 py-2 border">44.0</td>
                      <td className="px-4 py-2 border">62.0</td>
                      <td className="px-4 py-2 border">72.0</td>
                      <td className="px-4 py-2 border">80.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">32</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">38.0</td>
                      <td className="px-4 py-2 border">38.0</td>
                      <td className="px-4 py-2 border">38.0</td>
                      <td className="px-4 py-2 border">54.0</td>
                      <td className="px-4 py-2 border">54.0</td>
                      <td className="px-4 py-2 border">54.0</td>
                      <td className="px-4 py-2 border">70.0</td>
                      <td className="px-4 py-2 border">80.0</td>
                      <td className="px-4 py-2 border">90.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">40</td>
                      <td className="px-4 py-2 border">39.0</td>
                      <td className="px-4 py-2 border">39.0</td>
                      <td className="px-4 py-2 border">39.0</td>
                      <td className="px-4 py-2 border">45.0</td>
                      <td className="px-4 py-2 border">45.0</td>
                      <td className="px-4 py-2 border">45.0</td>
                      <td className="px-4 py-2 border">62.0</td>
                      <td className="px-4 py-2 border">62.0</td>
                      <td className="px-4 py-2 border">62.0</td>
                      <td className="px-4 py-2 border">85.0</td>
                      <td className="px-4 py-2 border">95.0</td>
                      <td className="px-4 py-2 border">105.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">50</td>
                      <td className="px-4 py-2 border">49.0</td>
                      <td className="px-4 py-2 border">49.0</td>
                      <td className="px-4 py-2 border">49.0</td>
                      <td className="px-4 py-2 border">60.0</td>
                      <td className="px-4 py-2 border">60.0</td>
                      <td className="px-4 py-2 border">60.0</td>
                      <td className="px-4 py-2 border">80.0</td>
                      <td className="px-4 py-2 border">80.0</td>
                      <td className="px-4 py-2 border">80.0</td>
                      <td className="px-4 py-2 border">100.0</td>
                      <td className="px-4 py-2 border">110.0</td>
                      <td className="px-4 py-2 border">120.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">65</td>
                      <td className="px-4 py-2 border">64.0</td>
                      <td className="px-4 py-2 border">64.0</td>
                      <td className="px-4 py-2 border">64.0</td>
                      <td className="px-4 py-2 border">80.0</td>
                      <td className="px-4 py-2 border">80.0</td>
                      <td className="px-4 py-2 border">80.0</td>
                      <td className="px-4 py-2 border">105.0</td>
                      <td className="px-4 py-2 border">105.0</td>
                      <td className="px-4 py-2 border">105.0</td>
                      <td className="px-4 py-2 border">135.0</td>
                      <td className="px-4 py-2 border">145.0</td>
                      <td className="px-4 py-2 border">155.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">80</td>
                      <td className="px-4 py-2 border">79.0</td>
                      <td className="px-4 py-2 border">79.0</td>
                      <td className="px-4 py-2 border">79.0</td>
                      <td className="px-4 py-2 border">90.0</td>
                      <td className="px-4 py-2 border">90.0</td>
                      <td className="px-4 py-2 border">90.0</td>
                      <td className="px-4 py-2 border">110.0</td>
                      <td className="px-4 py-2 border">110.0</td>
                      <td className="px-4 py-2 border">110.0</td>
                      <td className="px-4 py-2 border">140.0</td>
                      <td className="px-4 py-2 border">150.0</td>
                      <td className="px-4 py-2 border">160.0</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">99.0</td>
                      <td className="px-4 py-2 border">99.0</td>
                      <td className="px-4 py-2 border">99.0</td>
                      <td className="px-4 py-2 border">120.0</td>
                      <td className="px-4 py-2 border">120.0</td>
                      <td className="px-4 py-2 border">120.0</td>
                      <td className="px-4 py-2 border">140.0</td>
                      <td className="px-4 py-2 border">140.0</td>
                      <td className="px-4 py-2 border">140.0</td>
                      <td className="px-4 py-2 border">180.0</td>
                      <td className="px-4 py-2 border">200.0</td>
                      <td className="px-4 py-2 border">220.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">
                  Application of Ring Joint Gaskets:
                </h2>
                <p className="mt-2 text-lg">
                  Ring joint gaskets are known for their high pressure and
                  temperature resistance, making them ideal for demanding
                  applications. They are primarily used in:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Oil and gas industry for sealing high-pressure flanges and
                    connections.
                  </li>
                  <li>
                    Petrochemical plants to ensure leak-proof seals in process
                    equipment.
                  </li>
                  <li>
                    Refineries for flanges in reactors and other
                    high-temperature applications.
                  </li>
                  <li>
                    Chemical processing for high-pressure vessels and piping
                    systems.
                  </li>
                  <li>
                    Power generation for steam and high-pressure applications in
                    turbines and boilers.
                  </li>
                  <li>
                    Marine applications for critical flanged joints on ships and
                    offshore platforms.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={rjg}
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
  );
};

export default RingJoint;
