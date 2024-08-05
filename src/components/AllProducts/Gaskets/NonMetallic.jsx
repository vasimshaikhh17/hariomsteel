import React from "react";
import nmg from "../../../assets/newImages/non-metallic-gaskets.webp";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import Layout from "../../common/Layout";

const NonMetallic = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Non-Metallic Gasket
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={nmg}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  Non-metallic gaskets are versatile sealing components designed
                  for a wide range of applications across various industries.
                  Constructed from materials such as elastomers, compressible
                  fibers, or PTFE, these gaskets provide excellent resistance to
                  chemicals, temperature fluctuations, and pressure variations.
                  They are ideal for applications requiring flexibility,
                  conformability, and effective sealing in less extreme
                  environments. Non-metallic gaskets are commonly used in
                  industries such as automotive, chemical processing, and
                  manufacturing for sealing flanged joints, pipe connections,
                  and equipment housings
                </p>

                <br />

                <p>
                  Non-metallic gaskets are highly versatile and effective in
                  various applications due to their excellent chemical
                  resistance, flexibility, and ability to conform to irregular
                  surfaces. They can handle a wide range of temperatures and
                  pressures, ensuring reliable sealing. Their compressible
                  nature helps create tight, leak-proof seals, and many
                  non-metallic gaskets also offer electrical insulation.
                  Additionally, they are cost-effective and easy to install,
                  making them a practical choice for many sealing needs.
                </p>

                <br />
                <div className="overflow-x-auto">
                  <h2 className="text-2xl font-bold">Material Grades :</h2>
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
                  Non-metallic Gaskets Specifications:
                </h2>
                <div className="overflow-x-auto ">
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
                          Carbon Steel, Stainless Steel , Nickel,
                          Inconel, Incoloy, Titanium, Hastelloy, Copper
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">Non-metallic</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Temperature Range</td>
                        <td className="px-4 py-2 border">
                          -200°C to 300°C (-328°F to 572°F) depending on
                          material.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Pressure Rating</td>
                        <td className="px-4 py-2 border">
                          Up to 40 MPa (400 bar) (varies with material and
                          design)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Standards</td>
                        <td className="px-4 py-2 border">
                          {" "}
                          ISO, ASTM, DIN, ANSI.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sizes</td>
                        <td className="px-4 py-2 border">Customizable</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Applications</td>
                        <td className="px-4 py-2 border">
                          Automotive, chemical processing, refineries, plumbing,
                          general sealing.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Production Technique
                        </td>
                        <td className="px-4 py-2 border">
                          Molding, extrusion, die-cutting, compression molding.
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
                <tr className="">
                    <th rowSpan="2" className="py-2 px-4 border  text-center">Flange Size (NPS)</th>
                    <th rowSpan="2" className="py-2 px-4 border  text-center">Inner Diameter</th>
                    <th colSpan="3" className="py-2 px-4 border  text-center">Outer Diameter</th>
                </tr>
                <tr className="">
                    <th className="py-2 px-4 border  text-center">150 class</th>
                    <th className="py-2 px-4 border  text-center">300 class</th>
                    <th className="py-2 px-4 border  text-center">600 class</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td className="py-2 px-4 border ">26"</td>
                    <td className="py-2 px-4 border ">660.00</td>
                    <td className="py-2 px-4 border ">775.00</td>
                    <td className="py-2 px-4 border ">835.00</td>
                    <td className="py-2 px-4 border ">867.00</td>
                </tr>
                <tr className=" text-center">
                    <td className="py-2 px-4 border ">28"</td>
                    <td className="py-2 px-4 border ">711.00</td>
                    <td className="py-2 px-4 border ">832.00</td>
                    <td className="py-2 px-4 border ">899.00</td>
                    <td className="py-2 px-4 border ">914.00</td>
                </tr>
                <tr className="text-center">
                    <td className="py-2 px-4 border ">30"</td>
                    <td className="py-2 px-4 border ">762.00</td>
                    <td className="py-2 px-4 border ">883.00</td>
                    <td className="py-2 px-4 border ">953.00</td>
                    <td className="py-2 px-4 border ">972.00</td>
                </tr>
                <tr className=" text-center">
                    <td className="py-2 px-4 border ">32"</td>
                    <td className="py-2 px-4 border ">813.00</td>
                    <td className="py-2 px-4 border ">940.00</td>
                    <td className="py-2 px-4 border ">1006.00</td>
                    <td className="py-2 px-4 border ">1022.00</td>
                </tr>
                <tr className="text-center">
                    <td className="py-2 px-4 border ">34"</td>
                    <td className="py-2 px-4 border ">864.00</td>
                    <td className="py-2 px-4 border ">991.00</td>
                    <td className="py-2 px-4 border ">1057.00</td>
                    <td className="py-2 px-4 border ">1073.00</td>
                </tr>
                <tr className=" text-center">
                    <td className="py-2 px-4 border ">36"</td>
                    <td className="py-2 px-4 border ">914.00</td>
                    <td className="py-2 px-4 border ">1048.00</td>
                    <td className="py-2 px-4 border ">1118.00</td>
                    <td className="py-2 px-4 border ">1140.00</td>
                </tr>
                <tr className="text-center">
                    <td className="py-2 px-4 border ">38"</td>
                    <td className="py-2 px-4 border ">965.00</td>
                    <td className="py-2 px-4 border ">1111.00</td>
                    <td className="py-2 px-4 border ">1154.00</td>
                    <td className="py-2 px-4 border ">1191.00</td>
                </tr>
                <tr className=" text-center">
                    <td className="py-2 px-4 border ">40"</td>
                    <td className="py-2 px-4 border ">1016.00</td>
                    <td className="py-2 px-4 border ">1162.00</td>
                    <td className="py-2 px-4 border ">1216.00</td>
                    <td className="py-2 px-4 border ">1254.00</td>
                </tr>
                <tr className="text-center">
                    <td className="py-2 px-4 border ">42"</td>
                    <td className="py-2 px-4 border ">1067.00</td>
                    <td className="py-2 px-4 border ">1219.00</td>
                    <td className="py-2 px-4 border ">1265.00</td>
                    <td className="py-2 px-4 border ">1310.00</td>
                </tr>
                <tr className=" text-center">
                    <td className="py-2 px-4 border ">44"</td>
                    <td className="py-2 px-4 border ">1118.00</td>
                    <td className="py-2 px-4 border ">1276.00</td>
                    <td className="py-2 px-4 border ">1319.00</td>
                    <td className="py-2 px-4 border ">1372.00</td>
                </tr>
                <tr className="text-center">
                    <td className="py-2 px-4 border ">46"</td>
                    <td className="py-2 px-4 border ">1168.00</td>
                    <td className="py-2 px-4 border ">1327.00</td>
                    <td className="py-2 px-4 border ">1381.00</td>
                    <td className="py-2 px-4 border ">1422.00</td>
                </tr>
                <tr className=" text-center">
                    <td className="py-2 px-4 border ">48"</td>
                    <td className="py-2 px-4 border ">1219.00</td>
                    <td className="py-2 px-4 border ">1384.00</td>
                    <td className="py-2 px-4 border ">1422.00</td>
                    <td className="py-2 px-4 border ">1470.00</td>
                </tr>
                <tr className="text-center">
                    <td className="py-2 px-4 border ">50"</td>
                    <td className="py-2 px-4 border ">1270.00</td>
                    <td className="py-2 px-4 border ">1435.00</td>
                    <td className="py-2 px-4 border ">1483.00</td>
                    <td className="py-2 px-4 border ">1544.00</td>
                </tr>
                <tr className=" text-center">
                    <td className="py-2 px-4 border ">52"</td>
                    <td className="py-2 px-4 border ">1321.00</td>
                    <td className="py-2 px-4 border ">1492.00</td>
                    <td className="py-2 px-4 border ">1540.00</td>
                    <td className="py-2 px-4 border ">1499.00</td>
                </tr>
                <tr className="text-center">
                    <td className="py-2 px-4 border ">54"</td>
                    <td className="py-2 px-4 border ">1372.00</td>
                    <td className="py-2 px-4 border ">1549.00</td>
                    <td className="py-2 px-4 border ">1613.00</td>
                    <td className="py-2 px-4 border ">1586.00</td>
                </tr>
                <tr className=" text-center">
                    <td className="py-2 px-4 border ">56"</td>
                    <td className="py-2 px-4 border ">1422.00</td>
                    <td className="py-2 px-4 border ">1607.00</td>
                    <td className="py-2 px-4 border ">1664.00</td>
                    <td className="py-2 px-4 border ">1613.00</td>
                </tr>
                <tr className="text-center">
                    <td className="py-2 px-4 border ">58"</td>
                    <td className="py-2 px-4 border ">1473.00</td>
                    <td className="py-2 px-4 border ">1664.00</td>
                    <td className="py-2 px-4 border ">1721.00</td>
                    <td className="py-2 px-4 border ">1683.00</td>
                </tr>
                <tr className=" text-center">
                    <td className="py-2 px-4 border ">60"</td>
                    <td className="py-2 px-4 border ">1524.00</td>
                    <td className="py-2 px-4 border ">1715.00</td>
                    <td className="py-2 px-4 border ">1721.00</td>
                    <td className="py-2 px-4 border ">1683.00</td>
                </tr>
            </tbody>
        </table>
                </div>

                <br />
                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Application of Non-Metallic Gaskets:
                  </h2>
                  <p className="mt-2 text-lg">
                  Non-metallic gaskets are known for their versatility and adaptability, making them ideal for a variety of applications. They are primarily used in:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                    Automotive Industry: For engine components, fuel systems, and exhaust systems, where flexibility and resistance to heat and chemicals are essential.
                    </li>
                    <li>
                    Chemical Processing: In pipelines, valves, and reactors to handle various chemicals and moderate pressures effectively.
                    </li>
                    <li>
                    Food and Beverage Industry: In processing equipment for non-stick and hygienic sealing, ensuring safety and cleanliness.
                    </li>
                    <li>
                    Pharmaceutical Industry: To provide sterile sealing in pharmaceutical equipment and reactors.
                    </li>
                    <li>
                    High-Temperature Applications: For environments requiring durable sealing under extreme temperatures and pressures.
                    </li>
                    <li>
                    Industrial Machinery: In pumps, compressors, and general machinery where flexible and reliable seals are needed.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={nmg}
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

export default NonMetallic;
