import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import threadolet from "../../../../assets/newImages/threaded-olet.webp"

const ThreadOlets = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Threadolet
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={threadolet}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>
                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}
                <p>
                  The Threadolet is a branch fitting designed to create threaded
                  connections between small diameter branch pipes and larger run
                  pipes. It is commonly used in piping systems across various
                  industries, such as oil and gas, petrochemical, and chemical
                  processing, where quick and reliable threaded connections are
                  required.
                </p>
                <br />
                <p>
                  Constructed from high-quality materials, the Threadolet is
                  built to withstand high pressures and temperatures, providing
                  excellent durability and performance. Its threaded design
                  offers a secure and leak-proof connection, simplifying
                  installation and maintenance while enhancing system integrity.
                  The Threadolet adheres to stringent international standards,
                  including ASTM, ASME, and MSS-SP, ensuring superior quality
                  and a long service life. Its precise engineering and robust
                  construction make it an ideal choice for applications
                  requiring efficient and reliable threaded branch connections.
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
                          347, 904L
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
                  Threadolet Specifications:
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
                        <td className="px-4 py-2 border">Threadolet</td>
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
                        <td className="px-4 py-2 border">1/8" to 4"</td>
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
                Dimensions - NPS 1/2 to 2 - Class 6000
                  <table>
                  <thead>
                      <tr>
                        <td>
                          <div>NPS</div>
                        </td>
                        <td>
                          <div>&nbsp;</div>
                        </td>
                        <td>
                          <div>A</div>
                        </td>
                        <td>
                          <div>B</div>
                        </td>
                        <td>
                          <div>C</div>
                        </td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          <div>1/2</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1<br />
                            25.40
                          </div>
                        </td>
                        <td>
                          <div>
                            1-13/32
                            <br />
                            35.71
                          </div>
                        </td>
                        <td>
                          <div>
                            15/16
                            <br />
                            23.81
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>3/4</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-1/16
                            <br />
                            26.98
                          </div>
                        </td>
                        <td>
                          <div>
                            1-23/32
                            <br />
                            43.65
                          </div>
                        </td>
                        <td>
                          <div>
                            1-5/32
                            <br />
                            29.36
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-5/16
                            <br />
                            33.33
                          </div>
                        </td>
                        <td>
                          <div>
                            2<br />
                            50.80
                          </div>
                        </td>
                        <td>
                          <div>
                            1-7/16
                            <br />
                            36.51
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1¼</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-5/16
                            <br />
                            33.33
                          </div>
                        </td>
                        <td>
                          <div>
                            2-9/16
                            <br />
                            65.08
                          </div>
                        </td>
                        <td>
                          <div>
                            1-3/4
                            <br />
                            44.45
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1½</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-3/8
                            <br />
                            34.92
                          </div>
                        </td>
                        <td>
                          <div>
                            2-27/32
                            <br />
                            72.23
                          </div>
                        </td>
                        <td>
                          <div>
                            2<br />
                            50.80
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>2</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-1/2
                            <br />
                            38.10
                          </div>
                        </td>
                        <td>
                          <div>
                            3-15/32
                            <br />
                            88.10
                          </div>
                        </td>
                        <td>
                          <div>
                            2-9/16
                            <br />
                            65.08
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>2½</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-13/16
                            <br />
                            46.03
                          </div>
                        </td>
                        <td>
                          <div>
                            4-1/16
                            <br />
                            103.18
                          </div>
                        </td>
                        <td>
                          <div>
                            3<br />
                            76.20
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>3</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            2<br />
                            50.80
                          </div>
                        </td>
                        <td>
                          <div>
                            4-13/16
                            <br />
                            122.23
                          </div>
                        </td>
                        <td>
                          <div>
                            3-11/16
                            <br />
                            93.66
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>3½</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            2-1/8
                            <br />
                            53.975
                          </div>
                        </td>
                        <td>
                          <div>
                            5-7/32
                            <br />
                            132.55
                          </div>
                        </td>
                        <td>
                          <div>
                            4<br />
                            101.6
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>4</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            2-1/4
                            <br />
                            57.15
                          </div>
                        </td>
                        <td>
                          <div>
                            5-31/32
                            <br />
                            151.60
                          </div>
                        </td>
                        <td>
                          <div>
                            4-3/4
                            <br />
                            120.65
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>5</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            2-5/8
                            <br />
                            66.67
                          </div>
                        </td>
                        <td>
                          <div>
                            7-5/16
                            <br />
                            185.73
                          </div>
                        </td>
                        <td>
                          <div>
                            5-9/16
                            <br />
                            141.28
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>6</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            2-3/4
                            <br />
                            69.85
                          </div>
                        </td>
                        <td>
                          <div>
                            8-5/8
                            <br />
                            219.07
                          </div>
                        </td>
                        <td>
                          <div>
                            6-11/16
                            <br />
                            169.86
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                Dimensions - NPS 1/2 to 2 - Class 6000
                <div className="overflow-x-auto">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div>NPS</div>
                        </td>
                        <td>
                          &nbsp;
                          <div></div>
                        </td>
                        <td>
                          <div>A</div>
                        </td>
                        <td>
                          <div>B</div>
                        </td>
                        <td>
                          <div>C</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1/2</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-1/4
                            <br />
                            31.75
                          </div>
                        </td>
                        <td>
                          <div>
                            1-23/32
                            <br />
                            43.65
                          </div>
                        </td>
                        <td>
                          <div>
                            3/4
                            <br />
                            19.05
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>3/4</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-7/16
                            <br />
                            36.51
                          </div>
                        </td>
                        <td>
                          <div>
                            1-61/64
                            <br />
                            49.60
                          </div>
                        </td>
                        <td>
                          <div>
                            1<br />
                            25.40
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-9/16
                            <br />
                            39.68
                          </div>
                        </td>
                        <td>
                          <div>
                            2-7/16
                            <br />
                            61.91
                          </div>
                        </td>
                        <td>
                          <div>
                            1-5/16
                            <br />
                            33.33
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1¼</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-5/8
                            <br />
                            41.27
                          </div>
                        </td>
                        <td>
                          <div>
                            2-23/32
                            <br />
                            69.05
                          </div>
                        </td>
                        <td>
                          <div>
                            1-1/2
                            <br />
                            38.10
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1½</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            1-11/16
                            <br />
                            42.86
                          </div>
                        </td>
                        <td>
                          <div>
                            3-1/4
                            <br />
                            82.55
                          </div>
                        </td>
                        <td>
                          <div>
                            1-15/16
                            <br />
                            49.21
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>2</div>
                        </td>
                        <td>
                          <div>
                            INCH
                            <br />
                            MM
                          </div>
                        </td>
                        <td>
                          <div>
                            2-1/16
                            <br />
                            52.38
                          </div>
                        </td>
                        <td>
                          <div>
                            4-1/32
                            <br />
                            102.39
                          </div>
                        </td>
                        <td>
                          <div>
                            2-3/4
                            <br />
                            69.85
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Threadolets:
                  </h2>
                  <p className="mt-2 text-lg">
                    Threadolets are used to provide a threaded branch connection
                    from a main pipe, offering a secure and efficient way to
                    attach various components. They are commonly utilized in
                    various industries due to their versatility and ease of
                    installation. Key applications include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Employed to create threaded branch
                      connections for instrumentation, valves, and other
                      components in pipelines transporting oil and gas.
                    </li>
                    <li>
                      Chemical Processing: Used in chemical plants for attaching
                      instrumentation and control devices to pipelines, allowing
                      for accurate monitoring and control of chemical processes.
                    </li>
                    <li>
                      Power Generation: Applied to provide threaded connections
                      for sensors, valves, and other equipment in steam, water,
                      and fuel pipelines, facilitating effective operation and
                      monitoring.
                    </li>
                    <li>
                      Water and Wastewater Management: Utilized to create
                      threaded connections for instrumentation and control
                      devices in water treatment and wastewater systems,
                      enhancing operational efficiency.
                    </li>
                    <li>
                      HVAC Systems: Employed to attach components such as gauges
                      and valves to piping systems in heating, ventilation, and
                      air conditioning systems, supporting system monitoring and
                      control.
                    </li>
                    <li>
                      Pulp and Paper Industry: Used to provide threaded
                      connections for instrumentation and valves in pipelines
                      handling pulp, water, and chemicals during paper
                      production.
                    </li>
                    <li>
                      Marine and Shipbuilding: Applied in marine piping systems
                      for creating threaded connections to equipment and
                      components, ensuring durability and reliability in marine
                      environments.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={threadolet}
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

export default ThreadOlets;
