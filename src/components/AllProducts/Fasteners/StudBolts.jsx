import React from "react";
import Layout from "../../common/Layout";
import studBoltsImage from "../../../assets/newImages/Studs.jpg";
import studDimension from "../../../assets/newImages/studdimen.png";
import RelatedProducts from "../../ProductComponent/RelatedProducts";

const StudBolts = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Stud Bolts
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={studBoltsImage}
                  alt="Stainless Steel Gaskets"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  Stud Bolts are essential fastening components known for their
                  continuous threading, which provides a secure and consistent
                  connection. These bolts are commonly used in various
                  industries including construction, petrochemical, and
                  manufacturing due to their versatility and strength. The
                  continuous thread design allows for precise tensioning,
                  ensuring a stable and durable connection.
                </p>
                <p className="mb-2">
                  Stud bolts are available in a range of materials and sizes to
                  meet different load requirements and environmental conditions.
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Continuous threading for secure and consistent connections
                  </li>
                  <li>Ideal for various applications</li>
                  <li>Available in multiple materials and sizes</li>
                  <li>Provides strong and durable connections</li>
                  <li>Easy to install with standard tools</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Stud Bolt Specification Table
              </h3>
              <div className="mb-8 overflow-x-auto">
                <table className="min-w-full border text-center">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-2 border">Specification</th>
                      <th className="px-4 py-2 border">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">ASTM A193</td>
                      <td className="px-4 py-2 border">
                        Specification for alloy-steel and stainless steel
                        bolting materials for high-temperature service
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">ASTM A320</td>
                      <td className="px-4 py-2 border">
                        Specification for alloy-steel and stainless steel
                        bolting materials for low-temperature service
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">ASTM A194</td>
                      <td className="px-4 py-2 border">
                        Specification for carbon and alloy steel nuts for bolts
                        for high-pressure or high-temperature service
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">ISO 898-1</td>
                      <td className="px-4 py-2 border">
                        Mechanical properties of fasteners made of carbon steel
                        and alloy steel
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">DIN 976</td>
                      <td className="px-4 py-2 border">
                        Specification for studs and threaded rods
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 mt-4">
                  Stud Bolt Specifications
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    Material Grades: Carbon Steel, Alloy Steel, Stainless Steel
                  </li>
                  <li>
                    Size Range: From 1/4" to 4" in diameter, with various
                    lengths available
                  </li>
                  <li>Thread Types: Available in coarse and fine threads</li>
                  <li>
                    Strength Ratings: Designed for specific load capacities,
                    with detailed ratings provided
                  </li>
                  <li>
                    Standards and Specifications: ASTM A193, ASTM A320, ISO
                    898-1
                  </li>
                  <li>
                    Finish Options: Includes options such as galvanized, black
                    oxide, and plain steel
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4">Stud Bolt Dimensions</h2>

              <img src={studDimension} alt="" />
              <div className="overflow-x-auto">
                <table className="min-w-full border text-center">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border">150 LB. Flanges</th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border">300 LB. Flanges</th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border">600 LB. Flanges</th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border"></th>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border">Nominal Pipe Size</th>
                      <th className="px-4 py-2 border"># Bolts or Studs</th>
                      <th className="px-4 py-2 border">
                        Dia of Bolts or Studs
                      </th>
                      <th className="px-4 py-2 border">Length of Stud</th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border"># Bolts or Studs</th>
                      <th className="px-4 py-2 border">
                        Dia of Bolts or Studs
                      </th>
                      <th className="px-4 py-2 border">Length of Stud</th>
                      <th className="px-4 py-2 border"></th>
                      <th className="px-4 py-2 border"># Bolts or Studs</th>
                      <th className="px-4 py-2 border">
                        Dia of Bolts or Studs
                      </th>
                      <th className="px-4 py-2 border">Length of Stud</th>
                      <th className="px-4 py-2 border"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">1/16 RF</td>
                      <td className="px-4 py-2 border">RTJ</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">1/16 RF</td>
                      <td className="px-4 py-2 border">RTJ</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">1/4 RF</td>
                      <td className="px-4 py-2 border">RTJ</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.50</td>
                      <td className="px-4 py-2 border">2-1/4</td>
                      <td className="px-4 py-2 border">&#8211;</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.50</td>
                      <td className="px-4 py-2 border">2-1/2</td>
                      <td className="px-4 py-2 border">3</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.50</td>
                      <td className="px-4 py-2 border">3</td>
                      <td className="px-4 py-2 border">3</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">3/4</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.50</td>
                      <td className="px-4 py-2 border">2-1/2</td>
                      <td className="px-4 py-2 border">&#8211;</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.50</td>
                      <td className="px-4 py-2 border">2-1/2</td>
                      <td className="px-4 py-2 border">3</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1-1/4</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.50</td>
                      <td className="px-4 py-2 border">2-3/4</td>
                      <td className="px-4 py-2 border">3-1/4</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-1/4</td>
                      <td className="px-4 py-2 border">3-3/4</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-3/4</td>
                      <td className="px-4 py-2 border">3-3/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">1-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.50</td>
                      <td className="px-4 py-2 border">2-3/4</td>
                      <td className="px-4 py-2 border">3-1/4</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4-1/4</td>
                      <td className="px-4 py-2 border">4-1/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-1/4</td>
                      <td className="px-4 py-2 border">3-3/4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">4-1/4</td>
                      <td className="px-4 py-2 border">4-1/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">2-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">4-1/2</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4-3/4</td>
                      <td className="px-4 py-2 border">4-3/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">3</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4-1/4</td>
                      <td className="px-4 py-2 border">4-3/4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">5</td>
                      <td className="px-4 py-2 border">5</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4-1/4</td>
                      <td className="px-4 py-2 border">5</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.88</td>
                      <td className="px-4 py-2 border">5-1/2</td>
                      <td className="px-4 py-2 border">5-1/2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.63</td>
                      <td className="px-4 py-2 border">3-1/2</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4-1/2</td>
                      <td className="px-4 py-2 border">5</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.88</td>
                      <td className="px-4 py-2 border">5-3/4</td>
                      <td className="px-4 py-2 border">5-3/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">5</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">3-3/4</td>
                      <td className="px-4 py-2 border">4-1/4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4-3/4</td>
                      <td className="px-4 py-2 border">5-1/4</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">1.00</td>
                      <td className="px-4 py-2 border">6-1/2</td>
                      <td className="px-4 py-2 border">6-1/2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">6</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4</td>
                      <td className="px-4 py-2 border">4-1/2</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4-3/4</td>
                      <td className="px-4 py-2 border">5-1/2</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">1.00</td>
                      <td className="px-4 py-2 border">6-3/4</td>
                      <td className="px-4 py-2 border">6-3/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">0.75</td>
                      <td className="px-4 py-2 border">4-1/4</td>
                      <td className="px-4 py-2 border">4-3/4</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">0.88</td>
                      <td className="px-4 py-2 border">5-1/2</td>
                      <td className="px-4 py-2 border">6</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">1.13</td>
                      <td className="px-4 py-2 border">7-1/2</td>
                      <td className="px-4 py-2 border">7-3/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">10</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">0.88</td>
                      <td className="px-4 py-2 border">4-1/2</td>
                      <td className="px-4 py-2 border">5</td>
                      <td className="px-4 py-2 border">16</td>
                      <td className="px-4 py-2 border">1.00</td>
                      <td className="px-4 py-2 border">6-1/4</td>
                      <td className="px-4 py-2 border">6-3/4</td>
                      <td className="px-4 py-2 border">16</td>
                      <td className="px-4 py-2 border">1.25</td>
                      <td className="px-4 py-2 border">8-1/2</td>
                      <td className="px-4 py-2 border">8-1/2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">0.88</td>
                      <td className="px-4 py-2 border">4-3/4</td>
                      <td className="px-4 py-2 border">5-1/4</td>
                      <td className="px-4 py-2 border">16</td>
                      <td className="px-4 py-2 border">1.13</td>
                      <td className="px-4 py-2 border">6-3/4</td>
                      <td className="px-4 py-2 border">7-1/4</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">1.25</td>
                      <td className="px-4 py-2 border">8-3/4</td>
                      <td className="px-4 py-2 border">8-3/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">14</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">1.00</td>
                      <td className="px-4 py-2 border">5-1/4</td>
                      <td className="px-4 py-2 border">5-3/4</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">1.13</td>
                      <td className="px-4 py-2 border">7</td>
                      <td className="px-4 py-2 border">7-1/2</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">1.38</td>
                      <td className="px-4 py-2 border">9-1/4</td>
                      <td className="px-4 py-2 border">9-1/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">16</td>
                      <td className="px-4 py-2 border">16</td>
                      <td className="px-4 py-2 border">1.00</td>
                      <td className="px-4 py-2 border">5-1/4</td>
                      <td className="px-4 py-2 border">5-3/4</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">1.25</td>
                      <td className="px-4 py-2 border">7-1/2</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">1.50</td>
                      <td className="px-4 py-2 border">10</td>
                      <td className="px-4 py-2 border">10</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">18</td>
                      <td className="px-4 py-2 border">16</td>
                      <td className="px-4 py-2 border">1.13</td>
                      <td className="px-4 py-2 border">5-3/4</td>
                      <td className="px-4 py-2 border">6-1/4</td>
                      <td className="px-4 py-2 border">24</td>
                      <td className="px-4 py-2 border">1.25</td>
                      <td className="px-4 py-2 border">7-3/4</td>
                      <td className="px-4 py-2 border">8-1/4</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">1.63</td>
                      <td className="px-4 py-2 border">10-3/4</td>
                      <td className="px-4 py-2 border">10-3/4</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">1.13</td>
                      <td className="px-4 py-2 border">6-1/4</td>
                      <td className="px-4 py-2 border">6-3/4</td>
                      <td className="px-4 py-2 border">24</td>
                      <td className="px-4 py-2 border">1.25</td>
                      <td className="px-4 py-2 border">8</td>
                      <td className="px-4 py-2 border">8-3/4</td>
                      <td className="px-4 py-2 border">24</td>
                      <td className="px-4 py-2 border">1.63</td>
                      <td className="px-4 py-2 border">11-1/4</td>
                      <td className="px-4 py-2 border">11-1/2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">24</td>
                      <td className="px-4 py-2 border">20</td>
                      <td className="px-4 py-2 border">1.25</td>
                      <td className="px-4 py-2 border">6-3/4</td>
                      <td className="px-4 py-2 border">7-1/4</td>
                      <td className="px-4 py-2 border">24</td>
                      <td className="px-4 py-2 border">1.50</td>
                      <td className="px-4 py-2 border">9</td>
                      <td className="px-4 py-2 border">10</td>
                      <td className="px-4 py-2 border">24</td>
                      <td className="px-4 py-2 border">1.88</td>
                      <td className="px-4 py-2 border">13</td>
                      <td className="px-4 py-2 border">13-1/4</td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Stud Bolt Applications:
                </h3>
                <ul className="list-disc list-inside">
                  <li>Petrochemical and refinery industries</li>
                  <li>Pressure vessels and heat exchangers</li>
                  <li>Pipelines and flanges</li>
                  <li>Construction and structural connections</li>
                  <li>Marine and offshore platforms</li>
                  <li>Power generation plants</li>
                  <li>Automotive and heavy machinery</li>
                  <li>Boilers and steam lines</li>
                  <li>Electrical and electronic assemblies</li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={studBoltsImage}
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

export default StudBolts;
