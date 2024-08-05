import React from "react";
import Layout from "../../../common/Layout";
import headerplug from "../../../../assets/newImages/Header-Plugs.jpg";
import headerplugdim from "../../../../assets/newImages/headerplug dimension.png";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";

const HeaderPlug = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Header Plug
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={headerplug}
                  alt="Hex Nuts"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>
              <div className="mb-6">
                <p className="mb-2">
                  Header plugs are essential components used in heat exchangers
                  and other applications to seal and secure tube ends. Their
                  robust design ensures reliable performance under high-pressure
                  and high-temperature conditions.
                </p>
                <ul className="list-disc list-inside">
                  <li>Used to seal tube ends in heat exchangers and boilers</li>
                  <li>Designed to withstand high pressure and temperature</li>
                  <li>
                    Available in various materials such as carbon steel,
                    stainless steel, and brass
                  </li>
                  <li>Ensures leak-proof sealing</li>
                  <li>
                    Commonly used in industrial and automotive applications
                  </li>
                </ul>
              </div>

              <br />

              <h2 className="text-2xl font-bold mb-4">
                Header Plugs Material & Grades:
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full  border text-center">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-2 px-4 border ">
                        <strong>Materials</strong>
                      </th>
                      <th className="py-2 px-4 border ">
                        <strong>Grades</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Stainless Steel Header / Shoulder Plug</td>
                      <td>
                        304, 304L, 304H, 316, 316L, 316Ti, 310, 310S, 321, 321H,
                        317, 347, 347H, 904L
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Duplex & Super Duplex Steel Header / Shoulder Plug
                      </td>
                      <td>
                        UNS S31803, S32205, 2205, S32750, S32760, S32950, 2507
                      </td>
                    </tr>
                    <tr>
                      <td>Carbon Steel Header / Shoulder Plug</td>
                      <td>
                        ASTM / ASME A/SA 105, ASTM A516 Gr.70, A36, A694 F42,
                        F46, F52, F60, F65, F706, ASTM A350, LF2, LF3, A36
                      </td>
                    </tr>
                    <tr>
                      <td>Alloy Steel Header / Shoulder Plug</td>
                      <td>
                        ASTM / ASME A/SA 182 F1, F5, F9, F11, F12, F22, F91
                      </td>
                    </tr>
                    <tr>
                      <td>Nickel Alloy Header / Shoulder Plug</td>
                      <td>
                        Nickel 200 (UNS No. N02200), Nickel 201 (UNS No.
                        N02201), Monel 400 (UNS No. N04400), Monel 500 (UNS No.
                        N05500), Inconel 800 (UNS No. N08800), Inconel 825 (UNS
                        No. N08825), Inconel 600 (UNS No. N06600), Inconel 625
                        (UNS No. N06625), Inconel 601 (UNS No. N06601),
                        Hastelloy C 276 (UNS No. N10276), Alloy 20 (UNS No.
                        N08020)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <h2 className="text-2xl font-bold mb-4">
                Header Plug / Shoulder Plug Sizing Chart
              </h2>

              <img src={headerplugdim} alt="" />
              <br />
              <div className="overflow-x-auto">
                <table className="min-w-full  border text-center">
                  <tbody>
                    <tr className="bg-primary text-white">
                      <td colSpan="5" className="py-2 px-4 border ">
                        <strong>
                          Header Plug / Shoulder Plug Sizing Chart
                        </strong>
                      </td>
                    </tr>
                    <tr className="bg-primary text-white">
                      <td className="py-2 px-4 border "></td>
                      <td className="py-2 px-4 border ">
                        <b>B</b>
                      </td>
                      <td className="py-2 px-4 border "></td>
                      <td className="py-2 px-4 border ">
                        <strong>A</strong>
                      </td>
                      <td className="py-2 px-4 border ">
                        <strong>Hex</strong>
                      </td>
                    </tr>
                    <tr className="bg-primary text-white">
                      <td className="py-2 px-4 border ">
                        <strong>Tube OD</strong>
                      </td>
                      <td className="py-2 px-4 border ">
                        <strong>Plug Diameter</strong>
                      </td>
                      <td className="py-2 px-4 border ">
                        <strong>UNF Thread</strong>
                      </td>
                      <td className="py-2 px-4 border ">
                        <strong>Under Head</strong>
                      </td>
                      <td className="py-2 px-4 border ">
                        <strong>Size</strong>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan="3" className="py-2 px-4 border ">
                        5/8"
                      </td>
                      <td rowSpan="3" className="py-2 px-4 border ">
                        3/4"
                      </td>
                      <td rowSpan="3" className="py-2 px-4 border ">
                        16
                      </td>
                      <td className="py-2 px-4 border ">3/4"</td>
                      <td rowSpan="3" className="py-2 px-4 border ">
                        1"
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">7/8"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1"</td>
                    </tr>
                    <tr>
                      <td rowSpan="7" className="py-2 px-4 border ">
                        1"
                      </td>
                      <td rowSpan="7" className="py-2 px-4 border ">
                        1 1/8"
                      </td>
                      <td rowSpan="7" className="py-2 px-4 border ">
                        12
                      </td>
                      <td className="py-2 px-4 border ">3/4"</td>
                      <td rowSpan="7" className="py-2 px-4 border ">
                        1 3/8"
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">7/8"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 1/8"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 1/4"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 3/8"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 1/2"</td>
                    </tr>
                    <tr>
                      <td rowSpan="5" className="py-2 px-4 border ">
                        1 1/4"
                      </td>
                      <td rowSpan="5" className="py-2 px-4 border ">
                        1 3/8"
                      </td>
                      <td rowSpan="5" className="py-2 px-4 border ">
                        12
                      </td>
                      <td className="py-2 px-4 border ">3/4"</td>
                      <td rowSpan="5" className="py-2 px-4 border ">
                        1 5/8"
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">7/8"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 1/8"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 1/4"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 1/2"</td>
                    </tr>
                    <tr>
                      <td rowSpan="5" className="py-2 px-4 border ">
                        1 1/2"
                      </td>
                      <td rowSpan="5" className="py-2 px-4 border ">
                        1 5/8"
                      </td>
                      <td rowSpan="5" className="py-2 px-4 border ">
                        12
                      </td>
                      <td className="py-2 px-4 border ">1"</td>
                      <td rowSpan="5" className="py-2 px-4 border ">
                        1 7/8"
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 1/8"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 1/4"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 3/8"</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">1 1/2"</td>
                    </tr>
                    <tr>
                      <td rowSpan="2" className="py-2 px-4 border ">
                        2"
                      </td>
                      <td rowSpan="2" className="py-2 px-4 border ">
                        2 1/8"
                      </td>
                      <td rowSpan="2" className="py-2 px-4 border ">
                        12
                      </td>
                      <td className="py-2 px-4 border ">1 1/4"</td>
                      <td rowSpan="2" className="py-2 px-4 border ">
                        2 3/8"
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border "></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Hex Nut Applications:
                </h3>
                <ul className="list-disc list-inside">
                  <li>Construction of frameworks and structural assemblies</li>
                  <li>Machinery and equipment assembly</li>
                  <li>Automotive parts and repairs</li>
                  <li>Furniture assembly and DIY projects</li>
                  <li>Home and industrial repairs</li>
                  <li>Heavy-duty applications in machinery</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={headerplug}
                alt="Hex Nuts"
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

export default HeaderPlug;
