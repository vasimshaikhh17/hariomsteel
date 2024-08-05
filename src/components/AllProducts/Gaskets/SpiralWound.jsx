import React from "react";
import Layout from "../../common/Layout";
import swg from "../../../assets/newImages/swg.jpg"
import RelatedProducts from "../../ProductComponent/RelatedProducts";

const SpiralWound = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">Spiral Wound Gasket</h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                                <img
                                    src={swg}
                                    alt="Stainless Steel Gaskets"
                                    className="w-full h-auto mb-6 rounded shadow-lg"
                                />
                            </div>

              {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

              <p>
                Spiral wound gaskets have proven to be the most reliable sealing
                element for use in difficult, critical and arduous duties.
                Spiral wound gaskets are used in Refinery, Petrochemical,
                Chemical, Steam lines and Process Industries, where they have
                many advantages over older types of gaskets.
              </p>

              <br />

              <p>
                These gaskets are manufactured to International specifications
                such as BS, API, ASME, DIN. We also manufacture to customer's
                specifications
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
                        304, 304L, 316, 316L, 316Ti, 321, 347, 347H, 410, 430,{" "}
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2 border">Nickel</td>
                      <td className="px-4 py-2 border">200</td>
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
                      <td className="px-4 py-2 border">C-22, C-2000</td>
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
                Spiral Wound Gaskets Specifications:
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
                      <td className="px-4 py-2 border">Filler Material</td>
                      <td className="px-4 py-2 border">
                        Graphite, PTFE, Non-asbestos
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Type</td>
                      <td className="px-4 py-2 border">Spiral Wound</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Temperature Range</td>
                      <td className="px-4 py-2 border">
                        -200°C to 600°C (-328°F to 1112°F)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Pressure Rating</td>
                      <td className="px-4 py-2 border">
                        Up to 3000 psi (varies with material and design)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Standards</td>
                      <td className="px-4 py-2 border">ASME, API, DIN</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Sizes</td>
                      <td className="px-4 py-2 border">Customizable</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Applications</td>
                      <td className="px-4 py-2 border">
                        Chemical, Petrochemical, Oil & Gas, Power Generation
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Production Technique</td>
                      <td className="px-4 py-2 border">
                        Spiral Winding, Heat Treated and Machined
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <h2 className="text-2xl font-bold">Dimension Chart :</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border text-center">
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
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">19.1</td>
                      <td className="px-4 py-2 border">19.1</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">47.8</td>
                      <td className="px-4 py-2 border">54.1</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">20.6</td>
                      <td className="px-4 py-2 border">20.6</td>
                      <td className="px-4 py-2 border">20.6</td>
                      <td className="px-4 py-2 border">25.4</td>
                      <td className="px-4 py-2 border">25.4</td>
                      <td className="px-4 py-2 border">25.4</td>
                      <td className="px-4 py-2 border">39.6</td>
                      <td className="px-4 py-2 border">39.6</td>
                      <td className="px-4 py-2 border">39.6</td>
                      <td className="px-4 py-2 border">57.2</td>
                      <td className="px-4 py-2 border">66.8</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">26.9</td>
                      <td className="px-4 py-2 border">26.9</td>
                      <td className="px-4 py-2 border">26.9</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">31.8</td>
                      <td className="px-4 py-2 border">47.8</td>
                      <td className="px-4 py-2 border">47.8</td>
                      <td className="px-4 py-2 border">47.8</td>
                      <td className="px-4 py-2 border">68.8</td>
                      <td className="px-4 py-2 border">73.2</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">32</td>
                      <td className="px-4 py-2 border">38.1</td>
                      <td className="px-4 py-2 border">38.1</td>
                      <td className="px-4 py-2 border">38.1</td>
                      <td className="px-4 py-2 border">47.8</td>
                      <td className="px-4 py-2 border">47.8</td>
                      <td className="px-4 py-2 border">47.8</td>
                      <td className="px-4 py-2 border">60.5</td>
                      <td className="px-4 py-2 border">60.5</td>
                      <td className="px-4 py-2 border">60.5</td>
                      <td className="px-4 py-2 border">76.2</td>
                      <td className="px-4 py-2 border">82.6</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">40</td>
                      <td className="px-4 py-2 border">44.5</td>
                      <td className="px-4 py-2 border">44.5</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">54.1</td>
                      <td className="px-4 py-2 border">54.1</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">69.9</td>
                      <td className="px-4 py-2 border">69.9</td>
                      <td className="px-4 py-2 border">69.9</td>
                      <td className="px-4 py-2 border">85.9</td>
                      <td className="px-4 py-2 border">95.3</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">50</td>
                      <td className="px-4 py-2 border">55.6</td>
                      <td className="px-4 py-2 border">55.6</td>
                      <td className="px-4 py-2 border">55.6</td>
                      <td className="px-4 py-2 border">69.9</td>
                      <td className="px-4 py-2 border">69.9</td>
                      <td className="px-4 py-2 border">69.9</td>
                      <td className="px-4 py-2 border">85.9</td>
                      <td className="px-4 py-2 border">85.9</td>
                      <td className="px-4 py-2 border">85.9</td>
                      <td className="px-4 py-2 border">104.9</td>
                      <td className="px-4 py-2 border">95.3</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">65</td>
                      <td className="px-4 py-2 border">66.5</td>
                      <td className="px-4 py-2 border">66.5</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">82.6</td>
                      <td className="px-4 py-2 border">82.6</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">98.6</td>
                      <td className="px-4 py-2 border">98.6</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">124.0</td>
                      <td className="px-4 py-2 border">130.3</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">80</td>
                      <td className="px-4 py-2 border">81.0</td>
                      <td className="px-4 py-2 border">81.0</td>
                      <td className="px-4 py-2 border">78.7</td>
                      <td className="px-4 py-2 border">101.6</td>
                      <td className="px-4 py-2 border">101.6</td>
                      <td className="px-4 py-2 border">101.6</td>
                      <td className="px-4 py-2 border">120.7</td>
                      <td className="px-4 py-2 border">120.7</td>
                      <td className="px-4 py-2 border">120.7</td>
                      <td className="px-4 py-2 border">136.7</td>
                      <td className="px-4 py-2 border">149.4</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">106.4</td>
                      <td className="px-4 py-2 border">102.6</td>
                      <td className="px-4 py-2 border">102.6</td>
                      <td className="px-4 py-2 border">127.0</td>
                      <td className="px-4 py-2 border">127.0</td>
                      <td className="px-4 py-2 border">127.0</td>
                      <td className="px-4 py-2 border">149.4</td>
                      <td className="px-4 py-2 border">149.4</td>
                      <td className="px-4 py-2 border">149.4</td>
                      <td className="px-4 py-2 border">174.8</td>
                      <td className="px-4 py-2 border">181.1</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              
              <div className="mt-4">
  <h2 className="text-2xl font-bold">
    Application of Spiral Wound Gasket:
  </h2>
  <p className="mt-2 text-lg">
    Spiral wound gaskets are commonly used in a variety of industries due to their ability to withstand high pressure and temperature variations. They are primarily used in:
  </p>
  <ul className="list-disc ml-6 mt-2">
    <li>Petrochemical industry for sealing flanges and valves.</li>
    <li>Oil and gas pipelines to prevent leaks.</li>
    <li>Power generation plants for heat exchangers and steam lines.</li>
    <li>Chemical processing facilities for reactors and other high-pressure systems.</li>
    <li>Marine applications for engine and boiler seals.</li>
  </ul>
</div>

              
            </div>

            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={swg}
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

export default SpiralWound;
