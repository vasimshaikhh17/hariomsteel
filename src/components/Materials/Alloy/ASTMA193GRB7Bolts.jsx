import React from "react";
import Layout from "../../common/Layout";
import RelatedProducts from "../../ProductComponent/RelatedProducts";
import MaterialGrade from "../MaterialGrade.jsx";
import alloyFastner from "../../../assets/allProductsImages/alloyfastner.webp"
import AnimatedBars from "../AnimatedBars.jsx";

const ASTMA193GRB7Bolts = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer  text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-2">
              <h1 className="text-3xl font-bold mb-4 ">
                Alloy Steel ASTM A193 B7 High Temperature Fasteners,
                Manufacturer of B7 Threaded Rod, Ready Stock Of Alloy Steel A193
                B7 Allen Cap Bolt, AS B7 Socket Head Cap Screw, Grade B7 Hex
                Bolt Supplier.
              </h1>

              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
              <img
                src={alloyFastner}
                alt="Anchor Bolts"
                className="w-full h-auto mb-6 rounded shadow-lg"
              />
            </div>

              {/* <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={alloyFastner}
                  alt="Anchor Bolts"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div> */}

              <div className="mb-6">
                <p className="mb-2 text-justify">
                  Hariom Steel is a well-known Supplier of ASTM A193 Grade B7
                  Bolts, whichis available in a variety of thicknesses and
                  dimensions to meet the needs of our customers.
                </p>
                <p className="mb-2 text-justify">
                  Alloy Steel ASME SA193 Grade B7 Hex Head Bolts may not be
                  appropriate for exposure at these comparatively low
                  temperatures and is frequently a superior option. Because
                  sigma phase embrittlement is a significant issue due to the
                  high silicon content of our products, it has been mainly
                  supplanted by high nickel alloys or steels resistant to sigma
                  phase embrittlement. Carburisation and sulphidation resistance
                  are two other variables to consider when using our products in
                  high temperature situations. Sulphur-containing gases, when
                  exposed to reducing circumstances, significantly hasten the
                  assault on these products due to their high nickel
                  concentration.
                </p>

                {/* //add three image image fully responsive */}
                {/* <div className="flex flex-wrap -mx-2">
                  <div className="w-full sm:w-1/3 px-2 mb-4">
                    <img
                      src={hex}
                      alt="hex"
                      className="w-full h-auto rounded shadow-lg"
                    />
                  </div>
                  <div className="w-full sm:w-1/3 px-2 mb-4">
                    <img
                     src={fastner}
                      alt="fastner"
                      className="w-full h-auto rounded shadow-lg"
                    />
                  </div>
                  <div className="w-full sm:w-1/3 px-2 mb-4">
                    <img
                  src={ubolt}
                      alt="ubolt"
                      className="w-full h-auto rounded shadow-lg"
                    />
                  </div>{" "}
                </div> */}

<div className="mt-5 mb-5  flex items-center justify-center">
                <img src={alloyFastner} alt="" />
              </div>

                {/* Existing Chemical Composition Table */}
                <h2 className="mb-4 mt-4 font-bold text-2xl">
                  ASTM A193 Grade B7 Chemical Composition
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border text-center">
                    <thead className="bg-primary text-white">
                      <tr className="">
                        <th className="px-4 py-2 border">Elements</th>
                        <th className="px-4 py-2 border">Range</th>
                        <th className="px-4 py-2 border">
                          Product Variation, Over or Under
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">Carbon</td>
                        <td className="px-4 py-2 border">0.37-0.49%</td>
                        <td className="px-4 py-2 border">0.02%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Manganese, max</td>
                        <td className="px-4 py-2 border">0.65-1.10%</td>
                        <td className="px-4 py-2 border">0.04%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Phosphorus, max</td>
                        <td className="px-4 py-2 border">0.035%</td>
                        <td className="px-4 py-2 border">0.005% over</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sulfur, max</td>
                        <td className="px-4 py-2 border">0.040%</td>
                        <td className="px-4 py-2 border">0.005% over</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Silicon</td>
                        <td className="px-4 py-2 border">0.15 - 0.35%</td>
                        <td className="px-4 py-2 border">0.02%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Chromium</td>
                        <td className="px-4 py-2 border">0.75-1.20%</td>
                        <td className="px-4 py-2 border">0.05%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Molybdenum</td>
                        <td className="px-4 py-2 border">0.15-0.25%</td>
                        <td className="px-4 py-2 border">0.02%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

             

                {/* New Mechanical Properties Table */}
                <h2 className="mb-4 mt-4 font-bold text-2xl">
                  ASTM A193 Grade B7 Mechanical Properties - Metric Sizes
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border text-center">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-2 border">Diameter mm</th>
                        <th className="px-4 py-2 border">
                          Min Tempering Temperature, °C
                        </th>
                        <th className="px-4 py-2 border">
                          Tensile Strength min, MPa
                        </th>
                        <th className="px-4 py-2 border">
                          Yield strength, min, 0.2% offset, MPa
                        </th>
                        <th className="px-4 py-2 border">
                          Elongation in 4D min, %
                        </th>
                        <th className="px-4 py-2 border">
                          Reduction of Area, min, %
                        </th>
                        <th className="px-4 py-2 border">Hardness, max</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">M64 and Under</td>
                        <td className="px-4 py-2 border">593</td>
                        <td className="px-4 py-2 border">860</td>
                        <td className="px-4 py-2 border">720</td>
                        <td className="px-4 py-2 border">16</td>
                        <td className="px-4 py-2 border">50</td>
                        <td className="px-4 py-2 border">321 HBW or 35 HRC</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">over M64 to M100</td>
                        <td className="px-4 py-2 border">593</td>
                        <td className="px-4 py-2 border">795</td>
                        <td className="px-4 py-2 border">655</td>
                        <td className="px-4 py-2 border">16</td>
                        <td className="px-4 py-2 border">50</td>
                        <td className="px-4 py-2 border">321 HBW or 35 HRC</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">over M100 to M180</td>
                        <td className="px-4 py-2 border">593</td>
                        <td className="px-4 py-2 border">690</td>
                        <td className="px-4 py-2 border">515</td>
                        <td className="px-4 py-2 border">18</td>
                        <td className="px-4 py-2 border">50</td>
                        <td className="px-4 py-2 border">321 HBW or 35 HRC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="mb-4 mt-4 font-bold text-2xl">
                  ASTM A193 Grade B7 Mechanical Properties - Inch Sizes
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border text-center">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-2 border">Diameter Inch</th>
                        <th className="px-4 py-2 border">
                          Min Tempering Temperature, °C
                        </th>
                        <th className="px-4 py-2 border">
                          Tensile Strength min, ksi
                        </th>
                        <th className="px-4 py-2 border">
                          Yield strength, min, 0.2% offset, ksi
                        </th>
                        <th className="px-4 py-2 border">
                          Elongation in 4D min, %
                        </th>
                        <th className="px-4 py-2 border">
                          Reduction of Area, min, %
                        </th>
                        <th className="px-4 py-2 border">Hardness, max</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">2.5 and under</td>
                        <td className="px-4 py-2 border">1100</td>
                        <td className="px-4 py-2 border">125</td>
                        <td className="px-4 py-2 border">105</td>
                        <td className="px-4 py-2 border">16</td>
                        <td className="px-4 py-2 border">50</td>
                        <td className="px-4 py-2 border">321 HBW or 35 HRC</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">over 2.5 to 4</td>
                        <td className="px-4 py-2 border">1100</td>
                        <td className="px-4 py-2 border">115</td>
                        <td className="px-4 py-2 border">95</td>
                        <td className="px-4 py-2 border">16</td>
                        <td className="px-4 py-2 border">50</td>
                        <td className="px-4 py-2 border">321 HBW or 35 HRC</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">over 4 to 7</td>
                        <td className="px-4 py-2 border">1100</td>
                        <td className="px-4 py-2 border">100</td>
                        <td className="px-4 py-2 border">75</td>
                        <td className="px-4 py-2 border">18</td>
                        <td className="px-4 py-2 border">50</td>
                        <td className="px-4 py-2 border">321 HBW or 35 HRC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>



                <div className="overflow-x-auto">
            <table className="min-w-full bg-white border text-center">
                <thead className="bg-primary text-white">
                <tr>
                      <th colSpan="11"><strong>MM THREADS AS PER IS 1363/67</strong></th>
                    </tr>
                    <tr>
                      <th colSpan="11"><em><strong>APPROXIMATE WEIGHT IN KGS FOR 100 NOS</strong></em></th>
                    </tr>
                    <tr>
                      <th rowSpan="2"><strong>LENGTH</strong></th>
                      <th colSpan="10"><strong>DIAMETER</strong></th>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border"><strong>M 5</strong></th>
                      <th className="px-4 py-2 border"><strong>M 6</strong></th>
                      <th className="px-4 py-2 border"><strong>M 8</strong></th>
                      <th className="px-4 py-2 border"><strong>M 10</strong></th>
                      <th className="px-4 py-2 border"><strong>M 12</strong></th>
                      <th className="px-4 py-2 border"><strong>M 14</strong></th>
                      <th className="px-4 py-2 border"><strong>M 16</strong></th>
                      <th className="px-4 py-2 border"><strong>M 18</strong></th>
                      <th className="px-4 py-2 border"><strong>M 20</strong></th>
                      <th className="px-4 py-2 border"><strong>M 22</strong></th>
                    </tr>
                </thead>
                  <tbody>
                    
                    <tr>
                      <td className="px-4 py-2 border"><strong>16 mm</strong></td>
                      <td className="px-4 py-2 border">0.448</td>
                      <td className="px-4 py-2 border">0.743</td>
                      <td className="px-4 py-2 border">1.590</td>
                      <td className="px-4 py-2 border">3.211</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>20 mm</strong></td>
                      <td className="px-4 py-2 border">0.598</td>
                      <td className="px-4 py-2 border">0.812</td>
                      <td className="px-4 py-2 border">1.711</td>
                      <td className="px-4 py-2 border">3.411</td>
                      <td className="px-4 py-2 border">4.892</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>25 mm</strong></td>
                      <td className="px-4 py-2 border">0.660</td>
                      <td className="px-4 py-2 border">0.897</td>
                      <td className="px-4 py-2 border">1.871</td>
                      <td className="px-4 py-2 border">3.660</td>
                      <td className="px-4 py-2 border">5.252</td>
                      <td className="px-4 py-2 border">8.170</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>30 mm</strong></td>
                      <td className="px-4 py-2 border">0.737</td>
                      <td className="px-4 py-2 border">1.010</td>
                      <td className="px-4 py-2 border">2.070</td>
                      <td className="px-4 py-2 border">3.912</td>
                      <td className="px-4 py-2 border">5.574</td>
                      <td className="px-4 py-2 border">9.690</td>
                      <td className="px-4 py-2 border">10.707</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">18.657</td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>35 mm</strong></td>
                      <td className="px-4 py-2 border">0.804</td>
                      <td className="px-4 py-2 border">1.120</td>
                      <td className="px-4 py-2 border">2.271</td>
                      <td className="px-4 py-2 border">4.223</td>
                      <td className="px-4 py-2 border">5.974</td>
                      <td className="px-4 py-2 border">10.000</td>
                      <td className="px-4 py-2 border">11.416</td>
                      <td className="px-4 py-2 border">16.026</td>
                      <td className="px-4 py-2 border">19.608</td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>40 mm</strong></td>
                      <td className="px-4 py-2 border">0.881</td>
                      <td className="px-4 py-2 border">1.230</td>
                      <td className="px-4 py-2 border">2.470</td>
                      <td className="px-4 py-2 border">4.533</td>
                      <td className="px-4 py-2 border">6.410</td>
                      <td className="px-4 py-2 border">10.288</td>
                      <td className="px-4 py-2 border">12.107</td>
                      <td className="px-4 py-2 border">16.667</td>
                      <td className="px-4 py-2 border">20.747</td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>45 mm</strong></td>
                      <td className="px-4 py-2 border">0.958</td>
                      <td className="px-4 py-2 border">1.340</td>
                      <td className="px-4 py-2 border">2.671</td>
                      <td className="px-4 py-2 border">4.840</td>
                      <td className="px-4 py-2 border">6.859</td>
                      <td className="px-4 py-2 border">10.504</td>
                      <td className="px-4 py-2 border">12.821</td>
                      <td className="px-4 py-2 border">17.241</td>
                      <td className="px-4 py-2 border">21.739</td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>50 mm</strong></td>
                      <td className="px-4 py-2 border">1.030</td>
                      <td className="px-4 py-2 border">1.450</td>
                      <td className="px-4 py-2 border">2.870</td>
                      <td className="px-4 py-2 border">5.155</td>
                      <td className="px-4 py-2 border">7.299</td>
                      <td className="px-4 py-2 border">11.261</td>
                      <td className="px-4 py-2 border">13.624</td>
                      <td className="px-4 py-2 border">17.857</td>
                      <td className="px-4 py-2 border">22.727</td>
                      <td className="px-4 py-2 border">28.409</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>55 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">1.560</td>
                      <td className="px-4 py-2 border">3.071</td>
                      <td className="px-4 py-2 border">5.464</td>
                      <td className="px-4 py-2 border">7.740</td>
                      <td className="px-4 py-2 border">11.628</td>
                      <td className="px-4 py-2 border">14.409</td>
                      <td className="px-4 py-2 border">18.868</td>
                      <td className="px-4 py-2 border">23.810</td>
                      <td className="px-4 py-2 border">30.120</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>60 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">1.670</td>
                      <td className="px-4 py-2 border">3.270</td>
                      <td className="px-4 py-2 border">5.774</td>
                      <td className="px-4 py-2 border">8.183</td>
                      <td className="px-4 py-2 border">12.255</td>
                      <td className="px-4 py-2 border">15.244</td>
                      <td className="px-4 py-2 border">20.000</td>
                      <td className="px-4 py-2 border">25.126</td>
                      <td className="px-4 py-2 border">32.051</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>65 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">1.781</td>
                      <td className="px-4 py-2 border">3.472</td>
                      <td className="px-4 py-2 border">6.083</td>
                      <td className="px-4 py-2 border">8.621</td>
                      <td className="px-4 py-2 border">12.626</td>
                      <td className="px-4 py-2 border">16.026</td>
                      <td className="px-4 py-2 border">21.008</td>
                      <td className="px-4 py-2 border">26.455</td>
                      <td className="px-4 py-2 border">34.014</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>70 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">1.890</td>
                      <td className="px-4 py-2 border">3.671</td>
                      <td className="px-4 py-2 border">6.394</td>
                      <td className="px-4 py-2 border">9.058</td>
                      <td className="px-4 py-2 border">12.987</td>
                      <td className="px-4 py-2 border">16.835</td>
                      <td className="px-4 py-2 border">22.124</td>
                      <td className="px-4 py-2 border">27.778</td>
                      <td className="px-4 py-2 border">35.461</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>75 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">2.000</td>
                      <td className="px-4 py-2 border">3.873</td>
                      <td className="px-4 py-2 border">6.702</td>
                      <td className="px-4 py-2 border">9.506</td>
                      <td className="px-4 py-2 border">13.228</td>
                      <td className="px-4 py-2 border">17.606</td>
                      <td className="px-4 py-2 border">23.256</td>
                      <td className="px-4 py-2 border">29.070</td>
                      <td className="px-4 py-2 border">39.063</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>80 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">2.111</td>
                      <td className="px-4 py-2 border">4.072</td>
                      <td className="px-4 py-2 border">7.013</td>
                      <td className="px-4 py-2 border">10.000</td>
                      <td className="px-4 py-2 border">13.889</td>
                      <td className="px-4 py-2 border">18.248</td>
                      <td className="px-4 py-2 border">24.510</td>
                      <td className="px-4 py-2 border">30.303</td>
                      <td className="px-4 py-2 border">40.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>90 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">4.472</td>
                      <td className="px-4 py-2 border">7.634</td>
                      <td className="px-4 py-2 border">10.917</td>
                      <td className="px-4 py-2 border">14.925</td>
                      <td className="px-4 py-2 border">19.841</td>
                      <td className="px-4 py-2 border">26.042</td>
                      <td className="px-4 py-2 border">33.113</td>
                      <td className="px-4 py-2 border">41.667</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>100 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">4.873</td>
                      <td className="px-4 py-2 border">8.251</td>
                      <td className="px-4 py-2 border">11.820</td>
                      <td className="px-4 py-2 border">16.340</td>
                      <td className="px-4 py-2 border">21.459</td>
                      <td className="px-4 py-2 border">27.778</td>
                      <td className="px-4 py-2 border">35.714</td>
                      <td className="px-4 py-2 border">46.296</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>110 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">8.881</td>
                      <td className="px-4 py-2 border">12.723</td>
                      <td className="px-4 py-2 border">17.730</td>
                      <td className="px-4 py-2 border">23.041</td>
                      <td className="px-4 py-2 border">31.250</td>
                      <td className="px-4 py-2 border">38.168</td>
                      <td className="px-4 py-2 border">47.170</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>120 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">9.506</td>
                      <td className="px-4 py-2 border">13.624</td>
                      <td className="px-4 py-2 border">18.797</td>
                      <td className="px-4 py-2 border">24.631</td>
                      <td className="px-4 py-2 border">32.895</td>
                      <td className="px-4 py-2 border">40.984</td>
                      <td className="px-4 py-2 border">50.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>130 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">10.101</td>
                      <td className="px-4 py-2 border">14.535</td>
                      <td className="px-4 py-2 border">20.000</td>
                      <td className="px-4 py-2 border">26.316</td>
                      <td className="px-4 py-2 border">34.722</td>
                      <td className="px-4 py-2 border">43.478</td>
                      <td className="px-4 py-2 border">52.632</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>140 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">10.707</td>
                      <td className="px-4 py-2 border">15.432</td>
                      <td className="px-4 py-2 border">20.833</td>
                      <td className="px-4 py-2 border">27.933</td>
                      <td className="px-4 py-2 border">35.461</td>
                      <td className="px-4 py-2 border">46.296</td>
                      <td className="px-4 py-2 border">55.556</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>150 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">11.312</td>
                      <td className="px-4 py-2 border">16.340</td>
                      <td className="px-4 py-2 border">22.222</td>
                      <td className="px-4 py-2 border">29.412</td>
                      <td className="px-4 py-2 border">37.594</td>
                      <td className="px-4 py-2 border">48.544</td>
                      <td className="px-4 py-2 border">58.824</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>160 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">11.905</td>
                      <td className="px-4 py-2 border">17.241</td>
                      <td className="px-4 py-2 border">24.272</td>
                      <td className="px-4 py-2 border">31.056</td>
                      <td className="px-4 py-2 border">40.984</td>
                      <td className="px-4 py-2 border">50.505</td>
                      <td className="px-4 py-2 border">61.728</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>170 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">12.500</td>
                      <td className="px-4 py-2 border">18.116</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">32.680</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">53.191</td>
                      <td className="px-4 py-2 border">64.935</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>180 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">13.123</td>
                      <td className="px-4 py-2 border">19.011</td>
                      <td className="px-4 py-2 border">26.882</td>
                      <td className="px-4 py-2 border">34.247</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">55.556</td>
                      <td className="px-4 py-2 border">67.568</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>190 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">13.736</td>
                      <td className="px-4 py-2 border">19.920</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">35.971</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">58.140</td>
                      <td className="px-4 py-2 border">70.423</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>200 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">14.327</td>
                      <td className="px-4 py-2 border">20.833</td>
                      <td className="px-4 py-2 border">29.586</td>
                      <td className="px-4 py-2 border">37.594</td>
                      <td className="px-4 py-2 border">49.020</td>
                      <td className="px-4 py-2 border">60.976</td>
                      <td className="px-4 py-2 border">73.529</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>220 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">15.528</td>
                      <td className="px-4 py-2 border">22.624</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">40.650</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">65.789</td>
                      <td className="px-4 py-2 border">79.365</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>240 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">16.722</td>
                      <td className="px-4 py-2 border">24.510</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">43.860</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">71.429</td>
                      <td className="px-4 py-2 border">84.746</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>250 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">17.301</td>
                      <td className="px-4 py-2 border">25.381</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">45.455</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">74.627</td>
                      <td className="px-4 py-2 border">87.719</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>260 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">17.921</td>
                      <td className="px-4 py-2 border">26.316</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">47.170</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">76.923</td>
                      <td className="px-4 py-2 border">90.909</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>280 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">19.157</td>
                      <td className="px-4 py-2 border">28.090</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">50.505</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">81.967</td>
                      <td className="px-4 py-2 border">98.039</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>300 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">20.325</td>
                      <td className="px-4 py-2 border">29.940</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">53.763</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">87.719</td>
                      <td className="px-4 py-2 border">104.167</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>320 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">31.646</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">56.818</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">92.593</td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>340 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">33.557</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">60.241</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">98.039</td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>360 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">35.211</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">63.291</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">104.167</td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>380 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">37.037</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">66.667</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">108.696</td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border"><strong>400 mm</strong></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">39.063</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">69.444</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">113.636</td>
                      <td className="px-4 py-2 border"></td>
                    </tr>
                  </tbody>
              </table>
            </div>

            <div className="overflow-x-auto"> 
            <table className="min-w-full bg-white border text-center">
         
           <thead className="bg-primary text-white">
              <tr>
              <th colSpan="9">**All measurements in millimeters**</th>
              </tr>
                <tr>
                  <th className="px-4 py-2 border">NOMINAL SIZE (D)</th>
                  <th className="px-4 py-2 border">BODY DIAMETER</th>
                  <th className="px-4 py-2 border"></th>
                  <th className="px-4 py-2 border">HEAD THICKNEASTM A193</th>
                  <th className="px-4 py-2 border"></th>
                  <th className="px-4 py-2 border">ACROASTM A193 THE FLATS</th>
                  <th className="px-4 py-2 border"></th>
                  <th className="px-4 py-2 border">ACROASTM A193 CORNERS</th>
                  <th className="px-4 py-2 border"></th>
                </tr>
                <tr>
                  <th className="px-4 py-2 border"></th>
                  <th className="px-4 py-2 border">D (MAX)</th>
                  <th className="px-4 py-2 border">D (MIN)</th>
                  <th className="px-4 py-2 border">H (MAX)</th>
                  <th className="px-4 py-2 border">H (MIN)</th>
                  <th className="px-4 py-2 border">F (MAX)</th>
                  <th className="px-4 py-2 border">F (MIN)</th>
                  <th className="px-4 py-2 border">C (MAX)</th>
                  <th className="px-4 py-2 border">C (MIN)</th>
                </tr>
                </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">m10</td>
                  <td className="px-4 py-2 border">10.00</td>
                  <td className="px-4 py-2 border">9.78</td>
                  <td className="px-4 py-2 border">6.63</td>
                  <td className="px-4 py-2 border">6.17</td>
                  <td className="px-4 py-2 border">17.00</td>
                  <td className="px-4 py-2 border">15.73</td>
                  <td className="px-4 py-2 border">18.48</td>
                  <td className="px-4 py-2 border">17.77</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m12</td>
                  <td className="px-4 py-2 border">12.00</td>
                  <td className="px-4 py-2 border">11.73</td>
                  <td className="px-4 py-2 border">7.76</td>
                  <td className="px-4 py-2 border">4.24</td>
                  <td className="px-4 py-2 border">19.00</td>
                  <td className="px-4 py-2 border">17.73</td>
                  <td className="px-4 py-2 border">20.78</td>
                  <td className="px-4 py-2 border">20.03</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m14</td>
                  <td className="px-4 py-2 border">14.00</td>
                  <td className="px-4 py-2 border">13.73</td>
                  <td className="px-4 py-2 border">9.09</td>
                  <td className="px-4 py-2 border">8.51</td>
                  <td className="px-4 py-2 border">22.00</td>
                  <td className="px-4 py-2 border">20.67</td>
                  <td className="px-4 py-2 border">24.25</td>
                  <td className="px-4 py-2 border">23.35</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m16</td>
                  <td className="px-4 py-2 border">16.00</td>
                  <td className="px-4 py-2 border">15.73</td>
                  <td className="px-4 py-2 border">10.32</td>
                  <td className="px-4 py-2 border">9.68</td>
                  <td className="px-4 py-2 border">24.00</td>
                  <td className="px-4 py-2 border">23.67</td>
                  <td className="px-4 py-2 border">27.71</td>
                  <td className="px-4 py-2 border">26.75</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m20</td>
                  <td className="px-4 py-2 border">20.00</td>
                  <td className="px-4 py-2 border">19.67</td>
                  <td className="px-4 py-2 border">12.88</td>
                  <td className="px-4 py-2 border">12.12</td>
                  <td className="px-4 py-2 border">30.00</td>
                  <td className="px-4 py-2 border">29.16</td>
                  <td className="px-4 py-2 border">34.64</td>
                  <td className="px-4 py-2 border">32.95</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m24</td>
                  <td className="px-4 py-2 border">24.00</td>
                  <td className="px-4 py-2 border">23.67</td>
                  <td className="px-4 py-2 border">15.44</td>
                  <td className="px-4 py-2 border">14.56</td>
                  <td className="px-4 py-2 border">36.00</td>
                  <td className="px-4 py-2 border">35.00</td>
                  <td className="px-4 py-2 border">41.57</td>
                  <td className="px-4 py-2 border">39.55</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m30</td>
                  <td className="px-4 py-2 border">30.00</td>
                  <td className="px-4 py-2 border">29.67</td>
                  <td className="px-4 py-2 border">19.48</td>
                  <td className="px-4 py-2 border">17.92</td>
                  <td className="px-4 py-2 border">46.00</td>
                  <td className="px-4 py-2 border">45.00</td>
                  <td className="px-4 py-2 border">53.12</td>
                  <td className="px-4 py-2 border">50.85</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m36</td>
                  <td className="px-4 py-2 border">36.00</td>
                  <td className="px-4 py-2 border">35.61</td>
                  <td className="px-4 py-2 border">23.38</td>
                  <td className="px-4 py-2 border">21.63</td>
                  <td className="px-4 py-2 border">55.00</td>
                  <td className="px-4 py-2 border">53.80</td>
                  <td className="px-4 py-2 border">63.51</td>
                  <td className="px-4 py-2 border">60.79</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m42</td>
                  <td className="px-4 py-2 border">42.00</td>
                  <td className="px-4 py-2 border">41.38</td>
                  <td className="px-4 py-2 border">26.97</td>
                  <td className="px-4 py-2 border">25.03</td>
                  <td className="px-4 py-2 border">65.00</td>
                  <td className="px-4 py-2 border">62.90</td>
                  <td className="px-4 py-2 border">75.06</td>
                  <td className="px-4 py-2 border">71.71</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m48</td>
                  <td className="px-4 py-2 border">48.00</td>
                  <td className="px-4 py-2 border">47.38</td>
                  <td className="px-4 py-2 border">31.07</td>
                  <td className="px-4 py-2 border">28.93</td>
                  <td className="px-4 py-2 border">75.00</td>
                  <td className="px-4 py-2 border">72.60</td>
                  <td className="px-4 py-2 border">86.60</td>
                  <td className="px-4 py-2 border">82.76</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m56</td>
                  <td className="px-4 py-2 border">56.00</td>
                  <td className="px-4 py-2 border">55.26</td>
                  <td className="px-4 py-2 border">36.2</td>
                  <td className="px-4 py-2 border">33.80</td>
                  <td className="px-4 py-2 border">85.00</td>
                  <td className="px-4 py-2 border">82.20</td>
                  <td className="px-4 py-2 border">98.15</td>
                  <td className="px-4 py-2 border">93.71</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m64</td>
                  <td className="px-4 py-2 border">64.00</td>
                  <td className="px-4 py-2 border">63.26</td>
                  <td className="px-4 py-2 border">41.32</td>
                  <td className="px-4 py-2 border">38.68</td>
                  <td className="px-4 py-2 border">95.00</td>
                  <td className="px-4 py-2 border">91.80</td>
                  <td className="px-4 py-2 border">109.70</td>
                  <td className="px-4 py-2 border">104.65</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m72</td>
                  <td className="px-4 py-2 border">72.00</td>
                  <td className="px-4 py-2 border">71.26</td>
                  <td className="px-4 py-2 border">46.45</td>
                  <td className="px-4 py-2 border">43.55</td>
                  <td className="px-4 py-2 border">105.00</td>
                  <td className="px-4 py-2 border">101.40</td>
                  <td className="px-4 py-2 border">121.24</td>
                  <td className="px-4 py-2 border">115.60</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m80</td>
                  <td className="px-4 py-2 border">80.00</td>
                  <td className="px-4 py-2 border">79.26</td>
                  <td className="px-4 py-2 border">51.58</td>
                  <td className="px-4 py-2 border">48.42</td>
                  <td className="px-4 py-2 border">115.00</td>
                  <td className="px-4 py-2 border">111.00</td>
                  <td className="px-4 py-2 border">132.72</td>
                  <td className="px-4 py-2 border">126.54</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m90</td>
                  <td className="px-4 py-2 border">90.00</td>
                  <td className="px-4 py-2 border">89.13</td>
                  <td className="px-4 py-2 border">57.74</td>
                  <td className="px-4 py-2 border">54.26</td>
                  <td className="px-4 py-2 border">130.00</td>
                  <td className="px-4 py-2 border">125.50</td>
                  <td className="px-4 py-2 border">150.11</td>
                  <td className="px-4 py-2 border">143.07</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">m100</td>
                  <td className="px-4 py-2 border">90.00</td>
                  <td className="px-4 py-2 border">99.13</td>
                  <td className="px-4 py-2 border">63.9</td>
                  <td className="px-4 py-2 border">60.10</td>
                  <td className="px-4 py-2 border">145.00</td>
                  <td className="px-4 py-2 border">140.00</td>
                  <td className="px-4 py-2 border">167.43</td>
                  <td className="px-4 py-2 border">159.60</td>
                </tr>
            </tbody>
            </table>
            </div>
            <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">
       Applications:
    </h3>
    <AnimatedBars />
    
  </div>

              </div>
            </div>

            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={alloyFastner}
                alt="Anchor Bolts"
                className="w-full h-auto mb-6 rounded shadow-lg"
              />
              <MaterialGrade />
              <RelatedProducts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ASTMA193GRB7Bolts;
