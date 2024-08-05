import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import standardWas from "../../../../assets/newImages/standard washers.jpg";
import standardWasdim from "../../../../assets/newImages/standardwasherdim.jpg";
const StandarsWashers = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Standard Washers
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={standardWas}
                  alt="Hex Nuts"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>
              <div className="mb-6">
                <p className="mb-2">
                  Standard washers are essential components used with fasteners
                  like bolts and nuts. Their primary function is to distribute
                  the load of the fastener, prevent damage to the surface being
                  fastened, and reduce the risk of loosening due to vibrations.
                </p>
                <ul className="list-disc list-inside">
                  <li>Flat, round disc design with a central hole</li>
                  <li>Used to distribute the load of a threaded fastener</li>
                  <li>
                    Prevents damage to surfaces by providing a smooth bearing
                    surface
                  </li>
                  <li>Reduces the risk of loosening due to vibrations</li>
                  <li>
                    Available in various materials like steel, stainless steel,
                    brass, and plastic
                  </li>
                  <li>
                    Commonly used in automotive, machinery, and household
                    applications
                  </li>
                </ul>
              </div>

              <div className="mb-6 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">
                  Standard Washers Specification Table:
                </h3>
                <table>
                  <thead>
                    <tr>
                      <th>Material</th>
                      <th>Inner Diameter (ID)</th>
                      <th>Outer Diameter (OD)</th>
                      <th>Thickness</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Steel</td>
                      <td>1/4"</td>
                      <td>5/8"</td>
                      <td>1/16"</td>
                    </tr>
                    <tr>
                      <td>Stainless Steel</td>
                      <td>3/8"</td>
                      <td>7/8"</td>
                      <td>1/8"</td>
                    </tr>
                    <tr>
                      <td>Brass</td>
                      <td>1/2"</td>
                      <td>1"</td>
                      <td>3/32"</td>
                    </tr>
                    <tr>
                      <td>Nylon</td>
                      <td>3/4"</td>
                      <td>1 1/4"</td>
                      <td>1/16"</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />

              <h2 className="text-2xl font-bold mb-4">
                Standard Washers Material Grade Table:
              </h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Material</th>
                      <th>Grade</th>
                      <th>Properties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Steel</td>
                      <td>Grade 2</td>
                      <td>Low carbon steel, general purpose</td>
                    </tr>
                    <tr>
                      <td>Steel</td>
                      <td>Grade 5</td>
                      <td>Medium carbon steel, quenched and tempered</td>
                    </tr>
                    <tr>
                      <td>Steel</td>
                      <td>Grade 8</td>
                      <td>Medium carbon alloy steel, quenched and tempered</td>
                    </tr>
                    <tr>
                      <td>Stainless Steel</td>
                      <td>304</td>
                      <td>Excellent corrosion resistance, good formability</td>
                    </tr>
                    <tr>
                      <td>Stainless Steel</td>
                      <td>316</td>
                      <td>
                        Superior corrosion resistance, especially in marine
                        environments
                      </td>
                    </tr>
                    <tr>
                      <td>Brass</td>
                      <td>Yellow Brass</td>
                      <td>
                        Good corrosion resistance, good electrical conductivity
                      </td>
                    </tr>
                    <tr>
                      <td>Nylon</td>
                      <td>N/A</td>
                      <td>
                        Lightweight, good chemical resistance, non-conductive
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <h2 className="text-2xl font-bold mb-4">
                Standard Washers Dimensions Chart:
              </h2>

              <img src={standardWasdim} alt="" />
              <br />
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan="3">Bolt Size</th>
                      <th>A</th>
                      <th>B</th>
                      <th>C</th>
                      <th rowSpan="3">Weight (lbs.) Per 100 Pieces</th>
                      <th colSpan="2">Part numbers</th>
                    </tr>
                    <tr>
                      <th rowSpan="2">Inside Diameter</th>
                      <th rowSpan="2">Outside Diameter</th>
                      <th rowSpan="2">Thickness</th>
                      <th colSpan="2">Import</th>
                    </tr>
                    <tr>
                      <th>Plain</th>
                      <th>Galvanized</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <sup>1</sup>⁄<sub>2</sub>
                      </td>
                      <td>
                        <sup>9</sup>⁄<sub>16</sub>
                      </td>
                      <td>
                        1<sup>3</sup>⁄<sub>8</sub>
                      </td>
                      <td>0.109</td>
                      <td>4</td>
                      <td>19794</td>
                      <td>19795</td>
                    </tr>
                    <tr>
                      <td>
                        <sup>5</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        <sup>11</sup>⁄<sub>16</sub>
                      </td>
                      <td>
                        1<sup>3</sup>⁄<sub>4</sub>
                      </td>
                      <td>0.134</td>
                      <td>8</td>
                      <td>19796</td>
                      <td>19797</td>
                    </tr>
                    <tr>
                      <td>
                        <sup>3</sup>⁄<sub>4</sub>
                      </td>
                      <td>
                        <sup>13</sup>⁄<sub>16</sub>
                      </td>
                      <td>2</td>
                      <td>0.148</td>
                      <td>11</td>
                      <td>19798</td>
                      <td>19799</td>
                    </tr>
                    <tr>
                      <td>
                        <sup>7</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        <sup>15</sup>⁄<sub>16</sub>
                      </td>
                      <td>
                        2<sup>1</sup>⁄<sub>4</sub>
                      </td>
                      <td>0.165</td>
                      <td>15</td>
                      <td>19800</td>
                      <td>19801</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        1<sup>1</sup>⁄<sub>16</sub>
                      </td>
                      <td>
                        2<sup>1</sup>⁄<sub>2</sub>
                      </td>
                      <td>0.165</td>
                      <td>19</td>
                      <td>19802</td>
                      <td>19803</td>
                    </tr>
                    <tr>
                      <td>
                        1<sup>1</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        1<sup>1</sup>⁄<sub>4</sub>
                      </td>
                      <td>
                        2<sup>3</sup>⁄<sub>4</sub>
                      </td>
                      <td>0.165</td>
                      <td>22</td>
                      <td>19804</td>
                      <td>19805</td>
                    </tr>
                    <tr>
                      <td>
                        1<sup>1</sup>⁄<sub>4</sub>
                      </td>
                      <td>
                        1<sup>3</sup>⁄<sub>8</sub>
                      </td>
                      <td>3</td>
                      <td>0.165</td>
                      <td>26</td>
                      <td>19806</td>
                      <td>19807</td>
                    </tr>
                    <tr>
                      <td>
                        1<sup>3</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        1<sup>1</sup>⁄<sub>2</sub>
                      </td>
                      <td>
                        3<sup>1</sup>⁄<sub>4</sub>
                      </td>
                      <td>0.180</td>
                      <td>33</td>
                      <td>19808</td>
                      <td>19809</td>
                    </tr>
                    <tr>
                      <td>
                        1<sup>1</sup>⁄<sub>2</sub>
                      </td>
                      <td>
                        1<sup>5</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        3<sup>1</sup>⁄<sub>2</sub>
                      </td>
                      <td>0.180</td>
                      <td>38</td>
                      <td>19810</td>
                      <td>19811</td>
                    </tr>
                    <tr>
                      <td>
                        1<sup>5</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        1<sup>3</sup>⁄<sub>4</sub>
                      </td>
                      <td>
                        3<sup>3</sup>⁄<sub>4</sub>
                      </td>
                      <td>0.180</td>
                      <td>43</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>
                        1<sup>3</sup>⁄<sub>4</sub>
                      </td>
                      <td>
                        1<sup>7</sup>⁄<sub>8</sub>
                      </td>
                      <td>4</td>
                      <td>0.180</td>
                      <td>50</td>
                      <td>19812</td>
                      <td>19813</td>
                    </tr>
                    <tr>
                      <td>
                        1<sup>7</sup>⁄<sub>8</sub>
                      </td>
                      <td>2</td>
                      <td>
                        4<sup>1</sup>⁄<sub>4</sub>
                      </td>
                      <td>0.180</td>
                      <td>57</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        2<sup>1</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        4<sup>1</sup>⁄<sub>2</sub>
                      </td>
                      <td>0.180</td>
                      <td>63</td>
                      <td>19814</td>
                      <td>19815</td>
                    </tr>
                    <tr>
                      <td>
                        2<sup>1</sup>⁄<sub>4</sub>
                      </td>
                      <td>
                        2<sup>3</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        4<sup>3</sup>⁄<sub>4</sub>
                      </td>
                      <td>0.220</td>
                      <td>83</td>
                      <td>16434</td>
                      <td>16435</td>
                    </tr>
                    <tr>
                      <td>
                        2<sup>1</sup>⁄<sub>2</sub>
                      </td>
                      <td>
                        2<sup>5</sup>⁄<sub>8</sub>
                      </td>
                      <td>5</td>
                      <td>0.238</td>
                      <td>96</td>
                      <td>16436</td>
                      <td>16437</td>
                    </tr>
                    <tr>
                      <td>
                        2<sup>3</sup>⁄<sub>4</sub>
                      </td>
                      <td>
                        2<sup>7</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        5<sup>1</sup>⁄<sub>4</sub>
                      </td>
                      <td>0.259</td>
                      <td>110</td>
                      <td>16670</td>
                      <td>16671</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        3<sup>1</sup>⁄<sub>8</sub>
                      </td>
                      <td>
                        5<sup>1</sup>⁄<sub>2</sub>
                      </td>
                      <td>0.284</td>
                      <td>130</td>
                      <td>16438</td>
                      <td>16439</td>
                    </tr>
                  </tbody>
                  <tfoot></tfoot>
                </table>
              </div>
              <br />
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Standard Washer Applications:
                </h3>
                <p className="mb-4">
                  Standard washers are crucial components in many fastening
                  applications, providing a smooth bearing surface to distribute
                  the load of a threaded fastener and prevent damage to the
                  surface being fastened. They play a vital role in enhancing
                  the longevity and reliability of assemblies.
                </p>
                <ul className="list-disc list-inside">
                  <li>Preventing wear and tear on assembly surfaces</li>
                  <li>Evenly distributing the load of fasteners</li>
                  <li>Providing a smooth bearing surface for nuts and bolts</li>
                  <li>Reducing the risk of loosening due to vibration</li>
                  <li>Acting as spacers in various mechanical setups</li>
                  <li>
                    Used in automotive, machinery, and household applications
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={standardWas}
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

export default StandarsWashers;
