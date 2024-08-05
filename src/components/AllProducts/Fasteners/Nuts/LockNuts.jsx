import React from "react";
import Layout from "../../../common/Layout";
import locknut from "../../../../assets/newImages/locknuts.jpg";
import locknutdim from "../../../../assets/newImages/lock nuts dim.png";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
const LockNuts = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Lock Nuts
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={locknut}
                  alt="Anchor Bolts"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  Lock nuts are specially designed to prevent loosening under
                  vibration and torque. They come in various types, including
                  nylon insert lock nuts, metal lock nuts, and prevailing torque
                  nuts.
                </p>
                <ul className="list-disc list-inside">
                  <li>Prevents loosening due to vibration</li>
                  <li>Ideal for applications with high vibration</li>
                  <li>Available in nylon insert and metal variants</li>
                  <li>Ensures secure and long-lasting fastening</li>
                  <li>
                    Used in automotive, machinery, and aerospace industries
                  </li>
                </ul>
              </div>

              <br />

              <h3 className="text-xl font-semibold mb-4">
                Lock Nuts Specification Table
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
                      <td className="px-4 py-2 border">Lock Nuts Standard</td>
                      <td className="px-4 py-2 border">
                        EU, IFI, CSN, Italian, ASME, British BS, Indian IS, ISO,
                        DIN, Polish PN, SAE
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Lock Nuts Sizes</td>
                      <td className="px-4 py-2 border">3 mm to 200 mm</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Lock Nuts Length</td>
                      <td className="px-4 py-2 border">1/2″ to 2″</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Lock Nuts Materials</td>
                      <td className="px-4 py-2 border">
                        High Tensile, Carbon Steel, Stainless Steel, Inconel
                        Fasteners, Incoloy Fasteners, Hastelloy Fasteners, Monel
                        Fasteners, Silicon Bronze, Phosphor Bronze, Aluminium
                        Bronze, Nickel, Brass, Copper, Copper Nickel, Nitronic,
                        Nimonic, ASME, ASTM
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Lock Nuts Coating</td>
                      <td className="px-4 py-2 border">
                        PTFE Coated Lock Nuts, Hot Dip Galvanized Lock Nuts,
                        Yellow Zinc Plated Lock Nuts, Blue Zinc Plated Lock
                        Nuts, Black Zinc Plated Lock Nuts, Zinc Cobalt Plated
                        Lock Nuts, Aluminium Zinc Flake Coated Lock Nuts, Black
                        Phosphate Lock Nuts, Zinc Plated Lock Nuts, Nickel
                        Plated Lock Nuts
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">High Tensile Grades</td>
                      <td className="px-4 py-2 border">
                        8.8 Lock Nuts, 10.9 Lock Nuts, 12.9 Lock Nuts, 14.9 Lock
                        Nuts
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Lock Nuts Forming</td>
                      <td className="px-4 py-2 border">
                        Hot Forged Lock Nuts & Cold Forged Lock Nuts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Lock Nuts Materials / Grades
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
                      <td className="py-2 px-4 border ">Stainless Steel</td>
                      <td className="py-2 px-4 border ">
                        ASTM / ASME SA 312 GR. TP 304 , 304L , 304H, 309S ,309H
                        , 310S, 310H , 316 , 316TI , 316H , 316 LN , 317 , 317L
                        , 321 , 321H , 347 , 347 H , 904L .
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">High Tensile</td>
                      <td className="py-2 px-4 border ">
                        8.8, 10.9, 12.9, 14.9
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">Duplex Steel</td>
                      <td className="py-2 px-4 border ">
                        UNS NO S 31803, S 32205, S 32550, S 32750, S 32760.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">Carbon Steel</td>
                      <td className="py-2 px-4 border ">
                        ASTM / ASME A 335 GRP 1, P 5, P 9, P 11, P 12, P 22, P
                        23, P 91
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">Alloys Steel</td>
                      <td className="py-2 px-4 border ">
                        ASTM / ASME A/SA 193 / 194 – B 6, B 7/ B 7M, B 16, 2,
                        2HM, 2H, GR 6, B 7, B 7M
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">Nickel Alloys</td>
                      <td className="py-2 px-4 border ">
                        Nickel Alloys 200, Nickel Alloys 201
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">Hastelloy</td>
                      <td className="py-2 px-4 border ">
                        Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000,
                        Hastelloy C-4, Hastelloy X, Hastelloy B, Hastelloy N,
                        Hastelloy G
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">Inconel</td>
                      <td className="py-2 px-4 border ">
                        Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF,
                        Inconel 686, Inconel 718, Inconel 800, Inconel 825,
                        Inconel X-750 , Inconel 690, Inconel 602, Inconel 617,
                        Inconel 925, Inconel A-289, Inconel AL-6XN, AL-904L
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <h2 className="text-2xl font-bold mb-4">
                Lock Nuts Dimensions Chart:
              </h2>
              <br />
              <img src={locknutdim} alt="" />
              <br />
              <div className="overflow-x-auto">
                <table className="min-w-full  border text-center">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-2 px-4 border ">
                        Nominal size and thread diameter d
                      </th>
                      <th className="py-2 px-4 border ">
                        p (coarse pitch series)
                      </th>
                      <th className="py-2 px-4 border ">da min.</th>
                      <th className="py-2 px-4 border ">da max.</th>
                      <th className="py-2 px-4 border ">dw min.</th>
                      <th className="py-2 px-4 border ">e min.</th>
                      <th className="py-2 px-4 border ">m min.</th>
                      <th className="py-2 px-4 border ">m max.</th>
                      <th className="py-2 px-4 border ">s min.</th>
                      <th className="py-2 px-4 border ">s nom.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border ">M10</td>
                      <td className="py-2 px-4 border ">1.50</td>
                      <td className="py-2 px-4 border ">10.00</td>
                      <td className="py-2 px-4 border ">10.80</td>
                      <td className="py-2 px-4 border ">15.60</td>
                      <td className="py-2 px-4 border ">18.90</td>
                      <td className="py-2 px-4 border ">4.70</td>
                      <td className="py-2 px-4 border ">5.00</td>
                      <td className="py-2 px-4 border ">16.73</td>
                      <td className="py-2 px-4 border ">17.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M12</td>
                      <td className="py-2 px-4 border ">1.75</td>
                      <td className="py-2 px-4 border ">12.00</td>
                      <td className="py-2 px-4 border ">13.00</td>
                      <td className="py-2 px-4 border ">17.40</td>
                      <td className="py-2 px-4 border ">21.10</td>
                      <td className="py-2 px-4 border ">5.70</td>
                      <td className="py-2 px-4 border ">6.00</td>
                      <td className="py-2 px-4 border ">18.67</td>
                      <td className="py-2 px-4 border ">19.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M14</td>
                      <td className="py-2 px-4 border ">2.00</td>
                      <td className="py-2 px-4 border ">14.00</td>
                      <td className="py-2 px-4 border ">15.10</td>
                      <td className="py-2 px-4 border ">20.50</td>
                      <td className="py-2 px-4 border ">24.49</td>
                      <td className="py-2 px-4 border ">6.42</td>
                      <td className="py-2 px-4 border ">7.00</td>
                      <td className="py-2 px-4 border ">20.67</td>
                      <td className="py-2 px-4 border ">21.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M16</td>
                      <td className="py-2 px-4 border ">2.00</td>
                      <td className="py-2 px-4 border ">16.00</td>
                      <td className="py-2 px-4 border ">17.30</td>
                      <td className="py-2 px-4 border ">22.50</td>
                      <td className="py-2 px-4 border ">26.75</td>
                      <td className="py-2 px-4 border ">7.42</td>
                      <td className="py-2 px-4 border ">8.00</td>
                      <td className="py-2 px-4 border ">23.67</td>
                      <td className="py-2 px-4 border ">24.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M18</td>
                      <td className="py-2 px-4 border ">2.50</td>
                      <td className="py-2 px-4 border ">18.00</td>
                      <td className="py-2 px-4 border ">19.50</td>
                      <td className="py-2 px-4 border ">24.90</td>
                      <td className="py-2 px-4 border ">29.56</td>
                      <td className="py-2 px-4 border ">8.42</td>
                      <td className="py-2 px-4 border ">9.00</td>
                      <td className="py-2 px-4 border ">26.16</td>
                      <td className="py-2 px-4 border ">27.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M20</td>
                      <td className="py-2 px-4 border ">2.50</td>
                      <td className="py-2 px-4 border ">20.00</td>
                      <td className="py-2 px-4 border ">21.60</td>
                      <td className="py-2 px-4 border ">27.70</td>
                      <td className="py-2 px-4 border ">32.95</td>
                      <td className="py-2 px-4 border ">9.10</td>
                      <td className="py-2 px-4 border ">10.00</td>
                      <td className="py-2 px-4 border ">29.16</td>
                      <td className="py-2 px-4 border ">30.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M22</td>
                      <td className="py-2 px-4 border ">2.50</td>
                      <td className="py-2 px-4 border ">22.00</td>
                      <td className="py-2 px-4 border ">23.80</td>
                      <td className="py-2 px-4 border ">29.50</td>
                      <td className="py-2 px-4 border ">35.03</td>
                      <td className="py-2 px-4 border ">9.90</td>
                      <td className="py-2 px-4 border ">11.00</td>
                      <td className="py-2 px-4 border ">31.00</td>
                      <td className="py-2 px-4 border ">32.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M24</td>
                      <td className="py-2 px-4 border ">3.00</td>
                      <td className="py-2 px-4 border ">24.00</td>
                      <td className="py-2 px-4 border ">25.90</td>
                      <td className="py-2 px-4 border ">33.20</td>
                      <td className="py-2 px-4 border ">39.55</td>
                      <td className="py-2 px-4 border ">10.90</td>
                      <td className="py-2 px-4 border ">12.00</td>
                      <td className="py-2 px-4 border ">35.00</td>
                      <td className="py-2 px-4 border ">36.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M27</td>
                      <td className="py-2 px-4 border ">3.00</td>
                      <td className="py-2 px-4 border ">27.00</td>
                      <td className="py-2 px-4 border ">29.20</td>
                      <td className="py-2 px-4 border ">38.00</td>
                      <td className="py-2 px-4 border ">45.20</td>
                      <td className="py-2 px-4 border ">12.40</td>
                      <td className="py-2 px-4 border ">13.50</td>
                      <td className="py-2 px-4 border ">40.00</td>
                      <td className="py-2 px-4 border ">41.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M30</td>
                      <td className="py-2 px-4 border ">3.50</td>
                      <td className="py-2 px-4 border ">30.00</td>
                      <td className="py-2 px-4 border ">32.40</td>
                      <td className="py-2 px-4 border ">42.70</td>
                      <td className="py-2 px-4 border ">50.85</td>
                      <td className="py-2 px-4 border ">13.90</td>
                      <td className="py-2 px-4 border ">15.00</td>
                      <td className="py-2 px-4 border ">45.00</td>
                      <td className="py-2 px-4 border ">46.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M33</td>
                      <td className="py-2 px-4 border ">3.50</td>
                      <td className="py-2 px-4 border ">33.00</td>
                      <td className="py-2 px-4 border ">35.60</td>
                      <td className="py-2 px-4 border ">46.60</td>
                      <td className="py-2 px-4 border ">55.37</td>
                      <td className="py-2 px-4 border ">15.40</td>
                      <td className="py-2 px-4 border ">16.50</td>
                      <td className="py-2 px-4 border ">49.00</td>
                      <td className="py-2 px-4 border ">50.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M36</td>
                      <td className="py-2 px-4 border ">4.00</td>
                      <td className="py-2 px-4 border ">36.00</td>
                      <td className="py-2 px-4 border ">38.90</td>
                      <td className="py-2 px-4 border ">51.10</td>
                      <td className="py-2 px-4 border ">60.79</td>
                      <td className="py-2 px-4 border ">16.90</td>
                      <td className="py-2 px-4 border ">18.00</td>
                      <td className="py-2 px-4 border ">53.80</td>
                      <td className="py-2 px-4 border ">55.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M39</td>
                      <td className="py-2 px-4 border ">4.00</td>
                      <td className="py-2 px-4 border ">39.00</td>
                      <td className="py-2 px-4 border ">42.10</td>
                      <td className="py-2 px-4 border ">55.90</td>
                      <td className="py-2 px-4 border ">66.44</td>
                      <td className="py-2 px-4 border ">18.20</td>
                      <td className="py-2 px-4 border ">19.50</td>
                      <td className="py-2 px-4 border ">58.80</td>
                      <td className="py-2 px-4 border ">60.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M42</td>
                      <td className="py-2 px-4 border ">4.50</td>
                      <td className="py-2 px-4 border ">42.00</td>
                      <td className="py-2 px-4 border ">45.40</td>
                      <td className="py-2 px-4 border ">60.00</td>
                      <td className="py-2 px-4 border ">71.30</td>
                      <td className="py-2 px-4 border ">19.70</td>
                      <td className="py-2 px-4 border ">21.00</td>
                      <td className="py-2 px-4 border ">63.10</td>
                      <td className="py-2 px-4 border ">65.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M45</td>
                      <td className="py-2 px-4 border ">4.50</td>
                      <td className="py-2 px-4 border ">45.00</td>
                      <td className="py-2 px-4 border ">48.60</td>
                      <td className="py-2 px-4 border ">64.70</td>
                      <td className="py-2 px-4 border ">76.95</td>
                      <td className="py-2 px-4 border ">21.20</td>
                      <td className="py-2 px-4 border ">22.50</td>
                      <td className="py-2 px-4 border ">68.10</td>
                      <td className="py-2 px-4 border ">70.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M48</td>
                      <td className="py-2 px-4 border ">5.00</td>
                      <td className="py-2 px-4 border ">48.00</td>
                      <td className="py-2 px-4 border ">51.80</td>
                      <td className="py-2 px-4 border ">69.40</td>
                      <td className="py-2 px-4 border ">82.60</td>
                      <td className="py-2 px-4 border ">22.70</td>
                      <td className="py-2 px-4 border ">24.00</td>
                      <td className="py-2 px-4 border ">73.10</td>
                      <td className="py-2 px-4 border ">75.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border ">M52</td>
                      <td className="py-2 px-4 border ">5.00</td>
                      <td className="py-2 px-4 border ">52.00</td>
                      <td className="py-2 px-4 border ">56.20</td>
                      <td className="py-2 px-4 border ">74.20</td>
                      <td className="py-2 px-4 border ">88.25</td>
                      <td className="py-2 px-4 border ">24.70</td>
                      <td className="py-2 px-4 border ">26.00</td>
                      <td className="py-2 px-4 border ">78.10</td>
                      <td className="py-2 px-4 border ">80.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Lock Nut Applications:
                </h3>
                <ul className="list-disc list-inside">
                  <li>Automotive assembly and maintenance</li>
                  <li>Machinery and equipment prone to vibration</li>
                  <li>Aerospace applications requiring secure fastening</li>
                  <li>Construction projects with high vibration</li>
                  <li>Electronic devices and components</li>
                  <li>Heavy machinery in industrial settings</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={locknut}
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

export default LockNuts;
