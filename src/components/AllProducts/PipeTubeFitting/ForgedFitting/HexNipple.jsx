import React from "react";
import Layout from "../../../common/Layout";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import hexnipple from "../../../../assets/newImages/hexnipple.webp"
import hexnipplediagram from "../../../../assets/newImages/hexnipplediagram.png"

const HexNipple = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Hex Nipple
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={hexnipple}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
  The forged fitting Hex Nipple is a vital component in piping systems, designed
  to connect two pipes or fittings together. With its hexagonal shape in the
  center, it provides an easy grip for installation and removal using a wrench
  or other tools. This component is commonly used in various industrial
  applications, including oil and gas, chemical processing, and construction.
</p>

<br />

<p>
  Manufactured from high-quality forged steel, the hex nipple ensures
  exceptional strength and resistance to high pressures and extreme
  temperatures. It adheres to rigorous international standards, such as ASTM,
  ASME, and DIN, guaranteeing superior performance and longevity. The precise
  engineering of the forged fitting hex nipple ensures a secure and leak-proof
  connection, maintaining the integrity of the piping system under demanding
  conditions.
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
                        A105, LF2, IS 2062, F42, F46, F52, F60, F65, F70
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                        304, 304L, 304H, 310s, 316, 316L, 316H, 316Ti, 317/317L, 321/321H, 347/347H, 904L, 446{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          {" "}
                          S31803 F51, S32205 F60, S32750, S32760
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Nickel</td>
                        <td className="px-4 py-2 border">200, 201</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Monel</td>
                        <td className="px-4 py-2 border">400, 500</td>
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

                <h2 className="text-2xl font-bold">
                  Hex Nipple Specifications:
                </h2>
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
                        <td className="px-4 py-2 border">Hex Nipple</td>
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
                          Up to 6000 psi (varies with material and design)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Standards</td>
                        <td className="px-4 py-2 border">ASME, API, ASTM</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sizes</td>
                        <td className="px-4 py-2 border">
                          1/2" to 4" (varies with material and design)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Applications</td>
                        <td className="px-4 py-2 border">
                          Oil & Gas, Petrochemical, Waterworks, Chemical
                          Processing, Industrial Equipment
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
                    <img src={hexnipplediagram} alt="" />
                  </div>

                  <table >
        <thead>
            <tr>
                <th rowSpan="2">Nominal Size</th>
                <th rowSpan="2">DN</th>
                <th rowSpan="2">Inch</th>
                <th rowSpan="2">A (Min)</th>
                <th rowSpan="2">W (Min)</th>
                <th rowSpan="2">E (Min)</th>
                <th colSpan="2">b</th>
                <th rowSpan="2">C (Min)</th>
                <th rowSpan="2">F (Min)</th>
            </tr>
            <tr>
                <th>3000Lb</th>
                <th>6000Lb</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowSpan="2">6</td>
                <td>8</td>
                <td>1/8"</td>
                <td>11</td>
                <td>26</td>
                <td>10</td>
                <td>5</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
            </tr>
            <tr>
                <td>8x6</td>
                <td>1/4"x1/8"</td>
                <td>15</td>
                <td>31</td>
                <td>15</td>
                <td>6</td>
                <td>8</td>
                <td>8</td>
                <td>10</td>
            </tr>
            <tr>
                <td rowSpan="2">10</td>
                <td>8</td>
                <td>1/4"</td>
                <td>18</td>
                <td>36</td>
                <td>15</td>
                <td>6</td>
                <td>8</td>
                <td>8</td>
                <td>10</td>
            </tr>
            <tr>
                <td>10x8</td>
                <td>3/8"x1/4"</td>
                <td>18</td>
                <td>39</td>
                <td>20</td>
                <td>8</td>
                <td>10</td>
                <td>10</td>
                <td>15</td>
            </tr>
            <tr>
                <td rowSpan="2">15</td>
                <td>10</td>
                <td>3/8"</td>
                <td>22</td>
                <td>44</td>
                <td>20</td>
                <td>10</td>
                <td>12</td>
                <td>10</td>
                <td>15</td>
            </tr>
            <tr>
                <td>15x8</td>
                <td>1/2"x3/8"</td>
                <td>22</td>
                <td>49</td>
                <td>25</td>
                <td>10</td>
                <td>12</td>
                <td>12</td>
                <td>16</td>
            </tr>
            <tr>
                <td rowSpan="2">20</td>
                <td>15</td>
                <td>1/2"</td>
                <td>27</td>
                <td>52</td>
                <td>21</td>
                <td>11</td>
                <td>15</td>
                <td>12</td>
                <td>16</td>
            </tr>
            <tr>
                <td>20x15</td>
                <td>3/4"x1/2"</td>
                <td>27</td>
                <td>54</td>
                <td>28</td>
                <td>15</td>
                <td>16</td>
                <td>14</td>
                <td>19</td>
            </tr>
            <tr>
                <td>25</td>
                <td>25</td>
                <td>1"</td>
                <td>35</td>
                <td>65</td>
                <td>28</td>
                <td>14</td>
                <td>19</td>
                <td>14</td>
                <td>19</td>
            </tr>
            <tr>
                <td rowSpan="2">25</td>
                <td>25x20</td>
                <td>1"x3/4"</td>
                <td>35</td>
                <td>67</td>
                <td>35</td>
                <td>14</td>
                <td>19</td>
                <td>16</td>
                <td>21</td>
            </tr>
            <tr>
                <td>25x15</td>
                <td>1"x1/2"</td>
                <td>35</td>
                <td>72</td>
                <td>35</td>
                <td>15</td>
                <td>19</td>
                <td>16</td>
                <td>21</td>
            </tr>
            <tr>
                <td rowSpan="2">40</td>
                <td>40</td>
                <td>1-1/2"</td>
                <td>50</td>
                <td>82</td>
                <td>43</td>
                <td>16</td>
                <td>21</td>
                <td>16</td>
                <td>21</td>
            </tr>
            <tr>
                <td>40x25</td>
                <td>1-1/2"x1"</td>
                <td>50</td>
                <td>84</td>
                <td>43</td>
                <td>16</td>
                <td>21</td>
                <td>18</td>
                <td>25</td>
            </tr>
            <tr>
                <td>50</td>
                <td>50</td>
                <td>2"</td>
                <td>62</td>
                <td>98</td>
                <td>56</td>
                <td>18</td>
                <td>25</td>
                <td>18</td>
                <td>25</td>
            </tr>
            <tr>
                <td rowSpan="2">50</td>
                <td>50x40</td>
                <td>2"x1-1/2"</td>
                <td>62</td>
                <td>99</td>
                <td>56</td>
                <td>18</td>
                <td>25</td>
                <td>18</td>
                <td>25</td>
            </tr>
            <tr>
                <td>50x20</td>
                <td>2"x3/4"</td>
                <td>62</td>
                <td>65</td>
                <td>34</td>
                <td>11</td>
                <td>18</td>
                <td>18</td>
                <td>20</td>
            </tr>
            <tr>
                <td>50x15</td>
                <td>2"x1/2"</td>
                <td>62</td>
                <td>65</td>
                <td>34</td>
                <td>11</td>
                <td>18</td>
                <td>18</td>
                <td>20</td>
            </tr>
        </tbody>
    </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of 45-Degree Elbows:
                  </h2>
                  <p className="mt-2 text-lg">
                    45-degree elbows are essential in various applications due
                    to their ability to change flow direction and provide
                    flexibility in piping systems. Key areas of application
                    include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Automotive Industry: For engine components, fuel systems,
                      and exhaust systems, where flexibility and resistance to
                      heat and chemicals are essential.
                    </li>
                    <li>
                      Chemical Processing: In pipelines, valves, and reactors to
                      handle various chemicals and moderate pressures
                      effectively.
                    </li>
                    <li>
                      Food and Beverage Industry: In processing equipment for
                      non-stick and hygienic sealing, ensuring safety and
                      cleanliness.
                    </li>
                    <li>
                      Pharmaceutical Industry: To provide sterile sealing in
                      pharmaceutical equipment and reactors.
                    </li>
                    <li>
                      High-Temperature Applications: For environments requiring
                      durable sealing under extreme temperatures and pressures.
                    </li>
                    <li>
                      Industrial Machinery: In pumps, compressors, and general
                      machinery where flexible and reliable seals are needed.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={hexnipple}
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

export default HexNipple;
