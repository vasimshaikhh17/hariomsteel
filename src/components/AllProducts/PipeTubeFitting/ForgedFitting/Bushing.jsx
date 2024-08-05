import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import bushing from "../../../../assets/newImages/bushing.webp"
import bushingdiagram from "../../../../assets/newImages/bushingdiagram.jpg"

const Bushing = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Bushing
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={bushing}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The forged fitting bushing is an essential component in piping
                  systems, designed to connect pipes of different sizes by
                  reducing the size of a larger fitting. Engineered for
                  durability and reliability, this bushing is commonly used in
                  various industrial applications, including oil and gas,
                  chemical processing, and construction.
                </p>

                <br />

                <p>
                  Manufactured from high-quality forged steel, the bushing
                  ensures exceptional strength and resistance to high pressures
                  and extreme temperatures. It adheres to rigorous international
                  standards, such as ASTM, ASME, and DIN, guaranteeing superior
                  performance and longevity. The precise engineering of the
                  forged fitting bushing ensures a secure and leak-proof
                  connection, maintaining the integrity of the piping system
                  under demanding conditions.
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
                          ASTM/ ASME A 105, ASTM/ ASME A 350 LF 2, ASTM / ASME A
                          53 GR. A & B, ASTM A 106 GR. A, B & C. API 5L GR. B,
                          API 5L X 42, X 46, X 52, X 60, X 65 & X 70
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                          ASTM A182 F304, F304L, F306, F316L, F304H, F309S,
                          F309H, F310S, F310H, F316TI, F316H, F316LN, F317,
                          F317L, F321, F321H, F11, F22, F91, F347, F347H, F904L,
                          ASTM A312/A403 TP304, TP304L, TP316, TP316L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          {" "}
                          ASTM A 182 – F 51, F53, F55 S 31803, S 32205, S 32550,
                          S 32750, S 32760, S 32950.
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
                        <td className="px-4 py-2 border">
                          600, 601, 625, 800, 825
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Hastelloy</td>
                        <td className="px-4 py-2 border">C-276</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />

                <h2 className="text-2xl font-bold">Bushing Specifications:</h2>
                <div className="overflow-x-auto">
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
                          Forged Steel (e.g., ASTM A105, A350 LF2, A694 F65)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border"> Bushing</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Temperature Range</td>
                        <td className="px-4 py-2 border">
                          -50°C to 450°C (-58°F to 842°F) (varies with material)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Pressure Rating</td>
                        <td className="px-4 py-2 border">
                          Up to 5000 psi (varies with material and design)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Standards</td>
                        <td className="px-4 py-2 border">ASME, API, ASTM</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sizes</td>
                        <td className="px-4 py-2 border">
                          Customizable (varies with design and application)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Applications</td>
                        <td className="px-4 py-2 border">
                          Heavy Machinery, Automotive, Aerospace, Industrial
                          Equipment
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Production Technique
                        </td>
                        <td className="px-4 py-2 border">
                          Forged and Machined from Solid Steel
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h2 className="text-2xl font-bold">Dimension Chart :</h2>

                <div className="overflow-x-auto">
                  <div>
                    <img src={bushingdiagram} alt="" />
                  </div>

                  <table>
                    <thead>
                      <tr>
                        <td colSpan="9">
                          DIMENSIONS OF THREADED BUSHING (BS 3799) (In mm)
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="4">
                          Nominal
                          <br />
                          Pipe
                          <br />
                          Size
                        </td>
                        <td rowSpan="4">
                          Length
                          <br />
                          (Minimim)
                          <br />A
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3">Hex Plugs &amp; Bushings</td>
                      </tr>
                      <tr>
                        <td rowSpan="2">
                          Width Flats
                          <br />
                          (Nominal)
                          <br />F
                        </td>
                        <td colSpan="2">Hex Height (Min.)</td>
                      </tr>
                      <tr>
                        <td>
                          Bushing
                          <br />G
                        </td>
                        <td>
                          Plug
                          <br />H
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1/8”</td>
                        <td>9.7</td>
                        <td>11.2</td>
                        <td>–</td>
                        <td>6.4</td>
                      </tr>
                      <tr>
                        <td>1/4”</td>
                        <td>11.2</td>
                        <td>15.7</td>
                        <td>3.0</td>
                        <td>6.4</td>
                      </tr>
                      <tr>
                        <td>3/8”</td>
                        <td>12.7</td>
                        <td>17.5</td>
                        <td>4.1</td>
                        <td>7.9</td>
                      </tr>
                      <tr>
                        <td>1/2”</td>
                        <td>14.2</td>
                        <td>22.4</td>
                        <td>4.8</td>
                        <td>7.9</td>
                      </tr>
                      <tr>
                        <td>3/4”</td>
                        <td>15.7</td>
                        <td>26.9</td>
                        <td>5.6</td>
                        <td>9.7</td>
                      </tr>
                      <tr>
                        <td>1”</td>
                        <td>19.1</td>
                        <td>35.1</td>
                        <td>6.4</td>
                        <td>9.7</td>
                      </tr>
                      <tr>
                        <td>1-1/4”</td>
                        <td>20.6</td>
                        <td>44.5</td>
                        <td>7.1</td>
                        <td>14.2</td>
                      </tr>
                      <tr>
                        <td>1-1/2”</td>
                        <td>20.6</td>
                        <td>50.8</td>
                        <td>7.9</td>
                        <td>15.7</td>
                      </tr>
                      <tr>
                        <td>2”</td>
                        <td>22.4</td>
                        <td>63.5</td>
                        <td>8.6</td>
                        <td>17.5</td>
                      </tr>
                      <tr>
                        <td>2-2/2”</td>
                        <td>26.9</td>
                        <td>76.2</td>
                        <td>9.7</td>
                        <td>19.1</td>
                      </tr>
                      <tr>
                        <td>3”</td>
                        <td>28.4</td>
                        <td>88.9</td>
                        <td>10.4</td>
                        <td>20.6</td>
                      </tr>
                      <tr>
                        <td>4”</td>
                        <td>31.8</td>
                        <td>117.3</td>
                        <td>12.7</td>
                        <td>25.4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Forged Fitting Bushings:
                  </h2>
                  <p className="mt-2 text-lg">
                    Forged fitting bushings are crucial in various applications
                    due to their ability to connect pipes of different sizes,
                    reducing the size of a larger fitting and ensuring a secure
                    and leak-proof connection. Key areas of application include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used to connect pipelines of varying
                      sizes, ensuring secure and reliable connections under high
                      pressure and harsh conditions.
                    </li>
                    <li>
                      Chemical Processing: In pipelines, reactors, and storage
                      tanks to handle corrosive chemicals and maintain system
                      integrity by providing a reliable connection.
                    </li>
                    <li>
                      Water Treatment: Employed in filtration and distribution
                      systems to connect pipes of different sizes, ensuring
                      leak-free and efficient operation.
                    </li>
                    <li>
                      HVAC Systems: Used in heating, ventilation, and air
                      conditioning systems to connect various pipes and
                      components, ensuring efficient and flexible system
                      configurations.
                    </li>
                    <li>
                      Food and Beverage Industry: In processing and packaging
                      equipment where hygiene and safety are critical, providing
                      secure connections for various pipe sizes.
                    </li>
                    <li>
                      Pharmaceutical Industry: Utilized in sterile processing
                      systems to connect equipment and piping of different
                      sizes, ensuring contaminant-free and leak-proof
                      connections.
                    </li>
                    <li>
                      Fire Protection Systems: Installed in sprinkler and fire
                      suppression systems to connect different pipe sizes,
                      ensuring reliable and efficient performance in emergency
                      situations.
                    </li>
                    <li>
                      Industrial Machinery: In pumps, compressors, and other
                      machinery where flexible and reliable connections are
                      needed to accommodate different pipe sizes.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={bushing}
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

export default Bushing;
