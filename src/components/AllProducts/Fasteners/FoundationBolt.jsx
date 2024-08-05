import React from "react";
import Layout from "../../common/Layout";
import foundationdim from "../../../assets/newImages/foundationDim.jpg";
import foundationbolt from "../../../assets/newImages/foundationbolt.jpg";
import RelatedProducts from "../../ProductComponent/RelatedProducts";

const FoundationBolt = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Anchor Bolt
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={foundationbolt}
                  alt="Anchor Bolts"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  Foundation bolts are essential fastening components designed
                  to attach structures or objects to concrete. They are crucial
                  in various applications, including construction, machinery
                  installation, and building anchorage. Foundation bolts provide
                  robust support and stability, ensuring that the connected
                  elements remain securely in place.
                </p>
                <p className="mb-2">
                  Available in different types and sizes, foundation bolts can
                  meet diverse load requirements and environmental conditions.
                  Their design ensures efficient load transfer, enhancing the
                  overall structural integrity.
                </p>
                <ul className="list-disc list-inside">
                  <li>Designed for securing structures to concrete</li>
                  <li>Essential for construction and machinery installation</li>
                  <li>Available in multiple materials and sizes</li>
                  <li>Provides strong and reliable connections</li>
                  <li>Variety of types to suit specific applications</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Foundation Bolt Specification Table
              </h3>
              <div className="mb-8 overflow-x-auto">
                <table className="min-w-full border text-center">
                  <thead className="bg-primary text-white">
                    <tr className="text-center">
                      <th className="px-4 py-2 border">Specification</th>
                      <th className="px-4 py-2 border">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">ASTM F1554</td>
                      <td className="px-4 py-2 border">
                        Specification for foundation bolts, steel, 36, 55, and
                        105-ksi yield strength
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">AISC 360</td>
                      <td className="px-4 py-2 border">
                        Specification for structural steel buildings, including
                        foundation bolt requirements
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">ACI 318</td>
                      <td className="px-4 py-2 border">
                        Building code requirements for structural concrete,
                        detailing foundation bolt usage
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">ISO 898-1</td>
                      <td className="px-4 py-2 border">
                        Mechanical properties of fasteners made of carbon steel
                        and alloy steel
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 mt-4">
                  Foundation Bolt Specifications
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    Material Grades: Carbon Steel, Alloy Steel, Stainless Steel
                  </li>
                  <li>
                    Size Range: From 1/4" to 6" in diameter, with various
                    lengths available
                  </li>
                  <li>Thread Types: Available in coarse and fine threads</li>
                  <li>
                    Strength Ratings: Designed for specific load capacities,
                    with detailed ratings provided
                  </li>
                  <li>
                    Standards and Specifications: ASTM F1554, AISC 360, ACI 318
                  </li>
                  <li>
                    Finish Options: Includes options such as galvanized, black
                    oxide, and plain steel
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Foundation Bolts Dimensions Chart:
              </h2>

              <img src={foundationdim} alt="" />
              <div className="overflow-x-auto">
                <table className="min-w-full  border text-center">
                  <thead className="bg-primary text-white">
                    <th rowSpan="4" className="py-2 px-4 border">
                      Anchor Thread Diameter
                    </th>
                    <th colSpan="10" className="py-2 px-4 border">
                      Dimensions in mm
                    </th>
                    <th colSpan="10" className="py-2 px-4 border">
                      Cutting Length mm
                    </th>
                    <tr className="text-center">
                      <th className="py-2 px-4 border ">A</th>
                      <th className="py-2 px-4 border ">B</th>
                      <th className="py-2 px-4 border ">C</th>
                      <th className="py-2 px-4 border ">D</th>
                      <th className="py-2 px-4 border ">E</th>
                      <th className="py-2 px-4 border ">F</th>
                      <th className="py-2 px-4 border ">G</th>
                      <th className="py-2 px-4 border ">H</th>
                      <th colSpan="2" className="py-2 px-4 border ">
                        P
                      </th>
                      <th colSpan="10" className="py-2 px-4 border ">
                        TYPE
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th rowSpan="2" className="py-2 px-4 border "></th>
                      <th rowSpan="2" className="py-2 px-4 border "></th>
                      <th rowSpan="2" className="py-2 px-4 border "></th>
                      <th rowSpan="2" className="py-2 px-4 border "></th>
                      <th rowSpan="2" className="py-2 px-4 border "></th>
                      <th rowSpan="2" className="py-2 px-4 border "></th>
                      <th rowSpan="2" className="py-2 px-4 border "></th>
                      <th rowSpan="2" s></th>
                      <th colSpan="2" className="py-2 px-4 border ">
                        Square Plate
                      </th>
                      <th className="py-2 px-4 border ">S</th>
                      <th className="py-2 px-4 border ">SP</th>
                      <th colSpan="2" className="py-2 px-4 border ">
                        SQ
                      </th>
                      <th colSpan="2" className="py-2 px-4 border ">
                        L
                      </th>
                      <th colSpan="2" className="py-2 px-4 border ">
                        J
                      </th>
                      <th colSpan="2" className="py-2 px-4 border ">
                        JE
                      </th>
                    </tr>
                    <tr className="text-center">
                      <th className="py-2 px-4 border ">T</th>
                      <th className="py-2 px-4 border ">W</th>
                      <th className="py-2 px-4 border ">L</th>
                      <th className="py-2 px-4 border ">L</th>
                      <th className="py-2 px-4 border ">L</th>
                      <th className="py-2 px-4 border ">Cut Length</th>
                      <th className="py-2 px-4 border ">L</th>
                      <th className="py-2 px-4 border ">Cut Length</th>
                      <th className="py-2 px-4 border ">L</th>
                      <th className="py-2 px-4 border ">Cut Length</th>
                      <th className="py-2 px-4 border ">L</th>
                      <th className="py-2 px-4 border ">Cut Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">40</td>
                      <td className="px-4 py-2 border">16</td>
                      <td className="px-4 py-2 border">40</td>
                      <td className="px-4 py-2 border">45</td>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">50</td>
                      <td className="px-4 py-2 border">29</td>
                      <td className="px-4 py-2 border">10</td>
                      <td className="px-4 py-2 border">75</td>
                      <td className="px-4 py-2 border">330</td>
                      <td className="px-4 py-2 border">330</td>
                      <td className="px-4 py-2 border">355</td>
                      <td className="px-4 py-2 border">381</td>
                      <td className="px-4 py-2 border">355</td>
                      <td className="px-4 py-2 border">455</td>
                      <td className="px-4 py-2 border">410</td>
                      <td className="px-4 py-2 border">530</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">16</td>
                      <td className="px-4 py-2 border">50</td>
                      <td className="px-4 py-2 border">19</td>
                      <td className="px-4 py-2 border">40</td>
                      <td className="px-4 py-2 border">55</td>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">65</td>
                      <td className="px-4 py-2 border">35</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">90</td>
                      <td className="px-4 py-2 border">400</td>
                      <td className="px-4 py-2 border">400</td>
                      <td className="px-4 py-2 border">355</td>
                      <td className="px-4 py-2 border">388</td>
                      <td className="px-4 py-2 border">355</td>
                      <td className="px-4 py-2 border">455</td>
                      <td className="px-4 py-2 border">420</td>
                      <td className="px-4 py-2 border">595</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">60</td>
                      <td className="px-4 py-2 border">22</td>
                      <td className="px-4 py-2 border">50</td>
                      <td className="px-4 py-2 border">70</td>
                      <td className="px-4 py-2 border">150</td>
                      <td className="px-4 py-2 border">50</td>
                      <td className="px-4 py-2 border">75</td>
                      <td className="px-4 py-2 border">39</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">90</td>
                      <td className="px-4 py-2 border">480</td>
                      <td className="px-4 py-2 border">480</td>
                      <td className="px-4 py-2 border">405</td>
                      <td className="px-4 py-2 border">443</td>
                      <td className="px-4 py-2 border">405</td>
                      <td className="px-4 py-2 border">485</td>
                      <td className="px-4 py-2 border">485</td>
                      <td className="px-4 py-2 border">695</td>
                      <td className="px-4 py-2 border">355</td>
                      <td className="px-4 py-2 border">565</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">22</td>
                      <td className="px-4 py-2 border">70</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">50</td>
                      <td className="px-4 py-2 border">75</td>
                      <td className="px-4 py-2 border">150</td>
                      <td className="px-4 py-2 border">55</td>
                      <td className="px-4 py-2 border">80</td>
                      <td className="px-4 py-2 border">48</td>
                      <td className="px-4 py-2 border">16</td>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">570</td>
                      <td className="px-4 py-2 border">570</td>
                      <td className="px-4 py-2 border">460</td>
                      <td className="px-4 py-2 border">506</td>
                      <td className="px-4 py-2 border">460</td>
                      <td className="px-4 py-2 border">545</td>
                      <td className="px-4 py-2 border">545</td>
                      <td className="px-4 py-2 border">790</td>
                      <td className="px-4 py-2 border">415</td>
                      <td className="px-4 py-2 border">660</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">24</td>
                      <td className="px-4 py-2 border">85</td>
                      <td className="px-4 py-2 border">28</td>
                      <td className="px-4 py-2 border">55</td>
                      <td className="px-4 py-2 border">90</td>
                      <td className="px-4 py-2 border">200</td>
                      <td className="px-4 py-2 border">65</td>
                      <td className="px-4 py-2 border">90</td>
                      <td className="px-4 py-2 border">55</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">700</td>
                      <td className="px-4 py-2 border">700</td>
                      <td className="px-4 py-2 border">510</td>
                      <td className="px-4 py-2 border">560</td>
                      <td className="px-4 py-2 border">510</td>
                      <td className="px-4 py-2 border">610</td>
                      <td className="px-4 py-2 border">610</td>
                      <td className="px-4 py-2 border">890</td>
                      <td className="px-4 py-2 border">475</td>
                      <td className="px-4 py-2 border">735</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">27</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">75</td>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">200</td>
                      <td className="px-4 py-2 border">75</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">560</td>
                      <td className="px-4 py-2 border">619</td>
                      <td className="px-4 py-2 border">560</td>
                      <td className="px-4 py-2 border">675</td>
                      <td className="px-4 py-2 border">673</td>
                      <td className="px-4 py-2 border">990</td>
                      <td className="px-4 py-2 border">535</td>
                      <td className="px-4 py-2 border">935</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">30</td>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">36</td>
                      <td className="px-4 py-2 border">75</td>
                      <td className="px-4 py-2 border">115</td>
                      <td className="px-4 py-2 border">200</td>
                      <td className="px-4 py-2 border">85</td>
                      <td className="px-4 py-2 border">110</td>
                      <td className="px-4 py-2 border">64</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">125</td>
                      <td className="px-4 py-2 border">820</td>
                      <td className="px-4 py-2 border">820</td>
                      <td className="px-4 py-2 border">610</td>
                      <td className="px-4 py-2 border">674</td>
                      <td className="px-4 py-2 border">610</td>
                      <td className="px-4 py-2 border">735</td>
                      <td className="px-4 py-2 border">735</td>
                      <td className="px-4 py-2 border">1035</td>
                      <td className="px-4 py-2 border">596</td>
                      <td className="px-4 py-2 border">945</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">33</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">90</td>
                      <td className="px-4 py-2 border">125</td>
                      <td className="px-4 py-2 border">200</td>
                      <td className="px-4 py-2 border">90</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">660</td>
                      <td className="px-4 py-2 border">800</td>
                      <td className="px-4 py-2 border">800</td>
                      <td className="px-4 py-2 border">1125</td>
                      <td className="px-4 py-2 border">655</td>
                      <td className="px-4 py-2 border">1140</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">36</td>
                      <td className="px-4 py-2 border">115</td>
                      <td className="px-4 py-2 border">42</td>
                      <td className="px-4 py-2 border">90</td>
                      <td className="px-4 py-2 border">125</td>
                      <td className="px-4 py-2 border">200</td>
                      <td className="px-4 py-2 border">95</td>
                      <td className="px-4 py-2 border">115</td>
                      <td className="px-4 py-2 border">76</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">150</td>
                      <td className="px-4 py-2 border">1010</td>
                      <td className="px-4 py-2 border">1010</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">710</td>
                      <td className="px-4 py-2 border">865</td>
                      <td className="px-4 py-2 border">865</td>
                      <td className="px-4 py-2 border">1290</td>
                      <td className="px-4 py-2 border">715</td>
                      <td className="px-4 py-2 border">1130</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">39</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">100</td>
                      <td className="px-4 py-2 border">145</td>
                      <td className="px-4 py-2 border">200</td>
                      <td className="px-4 py-2 border">110</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">760</td>
                      <td className="px-4 py-2 border">925</td>
                      <td className="px-4 py-2 border">925</td>
                      <td className="px-4 py-2 border">1360</td>
                      <td className="px-4 py-2 border">770</td>
                      <td className="px-4 py-2 border">1225</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">42</td>
                      <td className="px-4 py-2 border">130</td>
                      <td className="px-4 py-2 border">49</td>
                      <td className="px-4 py-2 border">115</td>
                      <td className="px-4 py-2 border">150</td>
                      <td className="px-4 py-2 border">255</td>
                      <td className="px-4 py-2 border">120</td>
                      <td className="px-4 py-2 border">130</td>
                      <td className="px-4 py-2 border">85</td>
                      <td className="px-4 py-2 border">25</td>
                      <td className="px-4 py-2 border">175</td>
                      <td className="px-4 py-2 border">1120</td>
                      <td className="px-4 py-2 border">1120</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">815</td>
                      <td className="px-4 py-2 border">990</td>
                      <td className="px-4 py-2 border">990</td>
                      <td className="px-4 py-2 border">1475</td>
                      <td className="px-4 py-2 border">830</td>
                      <td className="px-4 py-2 border">1315</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">48</td>
                      <td className="px-4 py-2 border">150</td>
                      <td className="px-4 py-2 border">56</td>
                      <td className="px-4 py-2 border">125</td>
                      <td className="px-4 py-2 border">180</td>
                      <td className="px-4 py-2 border">255</td>
                      <td className="px-4 py-2 border">125</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">915</td>
                      <td className="px-4 py-2 border">1120</td>
                      <td className="px-4 py-2 border">1120</td>
                      <td className="px-4 py-2 border">1675</td>
                      <td className="px-4 py-2 border">956</td>
                      <td className="px-4 py-2 border">1510</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">56</td>
                      <td className="px-4 py-2 border">170</td>
                      <td className="px-4 py-2 border">63</td>
                      <td className="px-4 py-2 border">140</td>
                      <td className="px-4 py-2 border">200</td>
                      <td className="px-4 py-2 border">255</td>
                      <td className="px-4 py-2 border">145</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">1015</td>
                      <td className="px-4 py-2 border">1270</td>
                      <td className="px-4 py-2 border">1245</td>
                      <td className="px-4 py-2 border">1870</td>
                      <td className="px-4 py-2 border">1070</td>
                      <td className="px-4 py-2 border">1695</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">64</td>
                      <td className="px-4 py-2 border">190</td>
                      <td className="px-4 py-2 border">70</td>
                      <td className="px-4 py-2 border">160</td>
                      <td className="px-4 py-2 border">220</td>
                      <td className="px-4 py-2 border">255</td>
                      <td className="px-4 py-2 border">160</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">-</td>
                      <td className="px-4 py-2 border">1120</td>
                      <td className="px-4 py-2 border">1375</td>
                      <td className="px-4 py-2 border">1370</td>
                      <td className="px-4 py-2 border">2070</td>
                      <td className="px-4 py-2 border">1190</td>
                      <td className="px-4 py-2 border">1910</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Foundation Bolt Applications:
                </h3>
                <ul className="list-disc list-inside">
                  <li>Foundation anchoring for buildings and structures</li>
                  <li>
                    Securing heavy machinery and equipment to concrete floors
                  </li>
                  <li>
                    Connecting steel columns and beams to concrete foundations
                  </li>
                  <li>Bridges and infrastructure projects</li>
                  <li>Telecommunication and utility pole installations</li>
                  <li>Wind turbine and solar panel mounting</li>
                  <li>
                    Oil and gas industry installations, including pipelines
                  </li>
                  <li>Marine and offshore constructions</li>
                  <li>Power plants and energy facilities</li>
                  <li>Highway sign and traffic signal foundations</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={foundationbolt}
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

export default FoundationBolt;
