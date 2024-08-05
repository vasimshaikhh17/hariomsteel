import React from "react";
import metalg from "../../../assets/newImages/metalg.jfif";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import Layout from "../../common/Layout";
import { Link } from "react-router-dom";

function Metallic() {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Metallic Gasket
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={metalg}
                  alt="Stainless Steel Gaskets"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>

              {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

              <p>
                Metal gaskets are crucial for ensuring reliable, leak-proof
                connections, even in the most demanding conditions. Their robust
                construction and superior sealing performance make them the
                preferred choice across industries including oil and gas,
                chemical processing, and automotive. At Asian Sealing Products,
                we offer a comprehensive range of metal gaskets designed to meet
                the precise requirements of each industry.
              </p>

              <br />

              <p>
                They are designed to withstand extreme temperatures and
                pressures, ensuring a secure seal even under harsh conditions.
                Their high resistance to chemical corrosion and physical wear
                extends their service life and minimizes maintenance
                requirements. Additionally, these gaskets offer excellent
                compression resilience and conformability, which ensures a tight
                seal across various flange surfaces.
              </p>

              <br />

              <section className=" mt-3 mb-8   ">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Range of Metal Gaskets:
                </h2>
                <p className=" mb-6">
                  Understanding that every application presents unique
                  challenges, we offer a diverse selection of metal gaskets
                  tailored to address these needs and ensure reliable,
                  high-performance sealing. Our range includes:
                </p>

                <ul className="list-disc list-inside space-y-4">
                  <li>
                    <strong className="text-lg font-semibold">
                      Spiral Wound Gaskets:
                    </strong>{" "}
                    Constructed with alternating layers of metal and filler
                    material,{" "}
                    <span style={{ color: "red" }}>
                      <Link to="/spiral-wound">spiral wound gaskets</Link>
                    </span>{" "}
                    are versatile and adept at handling varying pressures and
                    temperatures. They are ideal for sealing flanged joints,
                    heat exchangers, and other critical applications.
                  </li>

                  <li>
                    <strong className="text-lg font-semibold">
                      Ring Joint Gaskets:
                    </strong>{" "}
                    Specifically designed for high-pressure applications,{" "}
                    <span style={{ color: "red" }}>
                      <Link to="/ring-joint">ring joint gaskets</Link>
                    </span>{" "}
                    are prevalent in the oil, gas, and petrochemical industries.
                    Their precision-cut grooves ensure a secure seal, even under
                    the most demanding conditions.
                  </li>
                  <li>
                    <strong className="text-lg font-semibold">
                      Corrugated Metal Gaskets:
                    </strong>{" "}
                    These gaskets excel in situations with irregular or damaged
                    sealing surfaces. Featuring a flexible graphite core, they
                    adapt to surface imperfections to provide a dependable seal.
                  </li>
                  <li>
                    <strong className="text-lg font-semibold">
                      Kammprofile Gaskets:
                    </strong>{" "}
                    Featuring a serrated metallic core and a flexible graphite
                    filler, Kammprofile gaskets deliver superior sealing
                    performance. They are suitable for a variety of industries,
                    including chemical processing and power generation.
                  </li>
                </ul>
              </section>
              <div className="overflow-x-auto">
                <h2 className="text-2xl font-bold ">
                  Kammprofile Gasket Material Grades :
                </h2>
                <table className="min-w-full  border text-center">
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
                Kammprofile Gaskets Specifications:
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full  border text-center">
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
                        Carbon Steel, Stainless Steel, Inconel, Monel,
                        Hastelloy, Titanium, Copper, Nickel
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Type</td>
                      <td className="px-4 py-2 border">Kammprofile</td>
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
                        Chemical Processing, Power Generation, Oil & Gas,
                        Marine, and High-Pressure Systems
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Production Technique</td>
                      <td className="px-4 py-2 border">
                        Precision Machined with Serrated Metallic Core and
                        Flexible Filler
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <h2 className="text-2xl font-bold">Dimension Chart :</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full  border text-center">
                  <thead className="bg-primary text-white">
                    <tr className=" text-white">
                      <th rowSpan="2" className="py-2 px-4 border ">
                        Nominal Bore
                      </th>
                      <th rowSpan="2" className="py-2 px-4 border ">
                        MM
                      </th>
                      <th colSpan="2" className="py-2 px-4 border ">
                        Sealing
                      </th>
                      <th colSpan="3" className="py-2 px-4 border ">
                        Centering Ring Outer Diameter
                      </th>
                    </tr>
                    <tr className=" text-white">
                      <th className="py-2 px-4 border ">Inner Diameter</th>
                      <th className="py-2 px-4 border ">Outer Diameter</th>
                      <th className="py-2 px-4 border ">150 Class</th>
                      <th className="py-2 px-4 border ">300 Class</th>
                      <th className="py-2 px-4 border ">600 Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">1/2</td>
                      <td className="py-2 px-4 border ">15</td>
                      <td className="py-2 px-4 border ">23.1</td>
                      <td className="py-2 px-4 border ">33.3</td>
                      <td className="py-2 px-4 border ">47.8</td>
                      <td className="py-2 px-4 border ">54.1</td>
                      <td className="py-2 px-4 border ">63.5</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">3/4</td>
                      <td className="py-2 px-4 border ">20</td>
                      <td className="py-2 px-4 border ">28.7</td>
                      <td className="py-2 px-4 border ">39.6</td>
                      <td className="py-2 px-4 border ">57.2</td>
                      <td className="py-2 px-4 border ">66.8</td>
                      <td className="py-2 px-4 border ">73.2</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">1</td>
                      <td className="py-2 px-4 border ">25</td>
                      <td className="py-2 px-4 border ">36.6</td>
                      <td className="py-2 px-4 border ">47.5</td>
                      <td className="py-2 px-4 border ">66.2</td>
                      <td className="py-2 px-4 border ">73.2</td>
                      <td className="py-2 px-4 border ">82.5</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">1 1/4</td>
                      <td className="py-2 px-4 border ">32</td>
                      <td className="py-2 px-4 border ">45.3</td>
                      <td className="py-2 px-4 border ">56.8</td>
                      <td className="py-2 px-4 border ">76.2</td>
                      <td className="py-2 px-4 border ">82.5</td>
                      <td className="py-2 px-4 border ">95.3</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">1 1/2</td>
                      <td className="py-2 px-4 border ">40</td>
                      <td className="py-2 px-4 border ">52.3</td>
                      <td className="py-2 px-4 border ">69.9</td>
                      <td className="py-2 px-4 border ">85.9</td>
                      <td className="py-2 px-4 border ">95.3</td>
                      <td className="py-2 px-4 border ">98.6</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">2</td>
                      <td className="py-2 px-4 border ">50</td>
                      <td className="py-2 px-4 border ">65.8</td>
                      <td className="py-2 px-4 border ">82.6</td>
                      <td className="py-2 px-4 border ">101.6</td>
                      <td className="py-2 px-4 border ">116.1</td>
                      <td className="py-2 px-4 border ">120.7</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">2 1/2</td>
                      <td className="py-2 px-4 border ">65</td>
                      <td className="py-2 px-4 border ">77.9</td>
                      <td className="py-2 px-4 border ">101.6</td>
                      <td className="py-2 px-4 border ">120.7</td>
                      <td className="py-2 px-4 border ">136.7</td>
                      <td className="py-2 px-4 border ">139.7</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">3</td>
                      <td className="py-2 px-4 border ">80</td>
                      <td className="py-2 px-4 border ">90.8</td>
                      <td className="py-2 px-4 border ">123.7</td>
                      <td className="py-2 px-4 border ">139.7</td>
                      <td className="py-2 px-4 border ">161.9</td>
                      <td className="py-2 px-4 border ">165.1</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">3 1/2</td>
                      <td className="py-2 px-4 border ">90</td>
                      <td className="py-2 px-4 border ">103.7</td>
                      <td className="py-2 px-4 border ">136.7</td>
                      <td className="py-2 px-4 border ">155.6</td>
                      <td className="py-2 px-4 border ">177.8</td>
                      <td className="py-2 px-4 border ">190.5</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">4</td>
                      <td className="py-2 px-4 border ">100</td>
                      <td className="py-2 px-4 border ">116.6</td>
                      <td className="py-2 px-4 border ">149.6</td>
                      <td className="py-2 px-4 border ">177.8</td>
                      <td className="py-2 px-4 border ">196.9</td>
                      <td className="py-2 px-4 border ">203.2</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">5</td>
                      <td className="py-2 px-4 border ">125</td>
                      <td className="py-2 px-4 border ">144.5</td>
                      <td className="py-2 px-4 border ">177.8</td>
                      <td className="py-2 px-4 border ">215.9</td>
                      <td className="py-2 px-4 border ">235.0</td>
                      <td className="py-2 px-4 border ">244.5</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">6</td>
                      <td className="py-2 px-4 border ">150</td>
                      <td className="py-2 px-4 border ">171.4</td>
                      <td className="py-2 px-4 border ">215.9</td>
                      <td className="py-2 px-4 border ">266.7</td>
                      <td className="py-2 px-4 border ">269.9</td>
                      <td className="py-2 px-4 border ">276.4</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">8</td>
                      <td className="py-2 px-4 border ">200</td>
                      <td className="py-2 px-4 border ">222.7</td>
                      <td className="py-2 px-4 border ">308.0</td>
                      <td className="py-2 px-4 border ">320.7</td>
                      <td className="py-2 px-4 border ">323.9</td>
                      <td className="py-2 px-4 border ">336.6</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">10</td>
                      <td className="py-2 px-4 border ">250</td>
                      <td className="py-2 px-4 border ">277.0</td>
                      <td className="py-2 px-4 border ">362.0</td>
                      <td className="py-2 px-4 border ">381.0</td>
                      <td className="py-2 px-4 border ">393.7</td>
                      <td className="py-2 px-4 border ">412.8</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">12</td>
                      <td className="py-2 px-4 border ">300</td>
                      <td className="py-2 px-4 border ">328.2</td>
                      <td className="py-2 px-4 border ">422.4</td>
                      <td className="py-2 px-4 border ">450.9</td>
                      <td className="py-2 px-4 border ">469.9</td>
                      <td className="py-2 px-4 border ">482.6</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">14</td>
                      <td className="py-2 px-4 border ">350</td>
                      <td className="py-2 px-4 border ">371.6</td>
                      <td className="py-2 px-4 border ">476.0</td>
                      <td className="py-2 px-4 border ">489.0</td>
                      <td className="py-2 px-4 border ">492.6</td>
                      <td className="py-2 px-4 border ">520.7</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">16</td>
                      <td className="py-2 px-4 border ">400</td>
                      <td className="py-2 px-4 border ">422.4</td>
                      <td className="py-2 px-4 border ">537.2</td>
                      <td className="py-2 px-4 border ">548.6</td>
                      <td className="py-2 px-4 border ">558.8</td>
                      <td className="py-2 px-4 border ">580.7</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">18</td>
                      <td className="py-2 px-4 border ">450</td>
                      <td className="py-2 px-4 border ">473.8</td>
                      <td className="py-2 px-4 border ">577.9</td>
                      <td className="py-2 px-4 border ">609.6</td>
                      <td className="py-2 px-4 border ">628.7</td>
                      <td className="py-2 px-4 border ">641.4</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-2 px-4 border ">20</td>
                      <td className="py-2 px-4 border ">500</td>
                      <td className="py-2 px-4 border ">524.8</td>
                      <td className="py-2 px-4 border ">638.2</td>
                      <td className="py-2 px-4 border ">660.4</td>
                      <td className="py-2 px-4 border ">679.5</td>
                      <td className="py-2 px-4 border ">705.7</td>
                    </tr>
                    <tr className=" text-center">
                      <td className="py-2 px-4 border ">24</td>
                      <td className="py-2 px-4 border ">600</td>
                      <td className="py-2 px-4 border ">631.7</td>
                      <td className="py-2 px-4 border ">682.5</td>
                      <td className="py-2 px-4 border ">774.7</td>
                      <td className="py-2 px-4 border ">784.7</td>
                      <td className="py-2 px-4 border ">838.2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">
                  Application of Kammprofile Gaskets:
                </h2>
                <p className="mt-2 text-lg">
                  Kammprofile gaskets are versatile and known for their
                  excellent sealing performance in various demanding
                  environments. They are primarily used in:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Petrochemical industry for high-pressure applications and
                    harsh environments.
                  </li>
                  <li>
                    Power generation, ideal for heat exchangers and boiler
                    applications, ensuring reliable sealing under high
                    temperatures and pressures.
                  </li>
                  <li>
                    Oil and gas industry, effective in sealing pipelines,
                    flanges, and valves, preventing leaks in critical
                    applications.
                  </li>
                  <li>
                    Chemical processing, resistant to chemical attacks, making
                    them suitable for aggressive chemical environments.
                  </li>
                  <li>
                    Refineries, used in distillation columns and reactors where
                    high temperatures and pressures are present.
                  </li>
                  <li>
                    Pulp and paper industry, effective in sealing applications
                    involving steam and chemical processes in pulp and paper
                    mills.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={metalg}
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
}

export default Metallic;
