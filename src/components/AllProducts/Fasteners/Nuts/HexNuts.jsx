import React from "react";
import Layout from "../../../common/Layout";
import hexnuts from "../../../../assets/newImages/hex nuts.jpg";
import hexnutsdim from "../../../../assets/newImages/hexdim.gif";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";

const HexNuts = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Hex Nuts
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={hexnuts}
                  alt="Hex Nuts"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>
              <div className="mb-6">
                <p className="mb-2">
                  Hex nuts are one of the most common types of nuts, known for
                  their hexagonal shape which provides easy wrenching and
                  turning. They are used in conjunction with bolts, screws, and
                  other fasteners to secure materials together.
                </p>
                <ul className="list-disc list-inside">
                  <li>Standard six-sided nut design</li>
                  <li>Used in various applications for secure fastening</li>
                  <li>Compatible with a wide range of bolts and screws</li>
                  <li>
                    Available in different materials like steel, stainless
                    steel, brass, and nylon
                  </li>
                  <li>Ideal for general-purpose use</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Hex Nuts Specification Table
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
                      <td className="px-4 py-2 border">Hex Nuts Standard</td>
                      <td className="px-4 py-2 border">
                        EU, IFI, CSN, Italian, ASME, British BS, Indian IS, ISO,
                        DIN, Polish PN, SAE
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Hex Nuts Sizes</td>
                      <td className="px-4 py-2 border">M6 to M42</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Hex Nuts Length</td>
                      <td className="px-4 py-2 border">1/8″ – 4″</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Hex Nuts Materials</td>
                      <td className="px-4 py-2 border">
                        High Tensile, Carbon Steel, Stainless Steel, Inconel
                        Fasteners, Incoloy Fasteners, Hastelloy Fasteners, Monel
                        Fasteners, Silicon Bronze, Phosphor Bronze, Aluminium
                        Bronze, Nickel, Brass, Copper, Copper Nickel, Nitronic,
                        Nimonic, ASME, ASTM
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Hex Nuts Coating</td>
                      <td className="px-4 py-2 border">
                        PTFE Coated Hex Nuts, Hot Dip Galvanized Hex Nuts,
                        Yellow Zinc Plated Hex Nuts, Blue Zinc Plated Hex Nuts,
                        Black Zinc Plated Hex Nuts, Zinc Cobalt Plated Hex Nuts,
                        Aluminium Zinc Flake Coated Hex Nuts, Black Phosphate
                        Hex Nuts, Zinc Plated Hex Nuts, Nickel Plated Hex Nuts
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">High Tensile Grades</td>
                      <td className="px-4 py-2 border">
                        8.8 Hex Nuts, 10.9 Hex Nuts, 12.9 Hex Nuts, 14.9 Hex
                        Nuts
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-4 py-2 border">Hex Nuts Forming</td>
                      <td className="px-4 py-2 border">
                        Hot Forged Hex Nuts & Cold Forged Hex Nuts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />

              <h2 className="text-2xl font-bold mb-4">
                Hex Coupling Nuts Materials / Grades
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
                Hex Bolts Dimensions Chart:
              </h2>

              <img src={hexnutsdim} alt="" />
              <br />
              <div className="overflow-x-auto">
                <table className="min-w-full  border text-center">
                    <thead className="bg-primary text-white">
                  <tr className="py-2 px-4 border ">
                    <td rowSpan="2" className="py-2 px-4 border ">
                      Size
                    </td>
                    <td colSpan="2" className="py-2 px-4 border ">
                      WAF
                      <br />
                      <strong>S</strong>
                    </td>
                    <td colSpan="2" className="py-2 px-4 border ">
                      Head Height
                      <br />
                      <strong>K</strong>
                    </td>
                    <td colSpan="3" className="py-2 px-4 border ">
                      Thread Length
                      <br />
                      <strong>B</strong>
                    </td>
                  </tr>
                  <tr className="py-2 px-4 border " >
                    <td className="py-2 px-4 border ">Min</td>
                    <td className="py-2 px-4 border ">Max</td>
                    <td className="py-2 px-4 border ">Min</td>
                    <td className="py-2 px-4 border ">Max</td>
                    <td className="py-2 px-4 border ">&ge;&#160;125</td>
                    <td className="py-2 px-4 border ">
                      &gt;&#160;125
                      <br />
                      &ge;&#160;200
                    </td>
                    <td className="py-2 px-4 border ">&ge;&#160;200</td>
                  </tr>
                  </thead>
                  <tbody>

                
                  <tr>
                    <td className="py-2 px-4 border ">M2</td>
                    <td className="py-2 px-4 border ">3.82</td>
                    <td className="py-2 px-4 border ">4.00</td>
                    <td className="py-2 px-4 border ">1.28</td>
                    <td className="py-2 px-4 border ">1.52</td>
                    <td className="py-2 px-4 border ">10</td>
                    <td className="py-2 px-4 border ">-</td>
                    <td className="py-2 px-4 border ">-</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M3</td>
                    <td className="py-2 px-4 border ">5.32</td>
                    <td className="py-2 px-4 border ">5.50</td>
                    <td className="py-2 px-4 border ">1.88</td>
                    <td className="py-2 px-4 border ">2.12</td>
                    <td className="py-2 px-4 border ">12</td>
                    <td className="py-2 px-4 border ">-</td>
                    <td className="py-2 px-4 border ">-</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M4</td>
                    <td className="py-2 px-4 border ">6.78</td>
                    <td className="py-2 px-4 border ">7.00</td>
                    <td className="py-2 px-4 border ">2.68</td>
                    <td className="py-2 px-4 border ">2.92</td>
                    <td className="py-2 px-4 border ">14</td>
                    <td className="py-2 px-4 border ">-</td>
                    <td className="py-2 px-4 border ">-</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M5</td>
                    <td className="py-2 px-4 border ">7.78</td>
                    <td className="py-2 px-4 border ">8.00</td>
                    <td className="py-2 px-4 border ">3.35</td>
                    <td className="py-2 px-4 border ">3.65</td>
                    <td className="py-2 px-4 border ">16</td>
                    <td className="py-2 px-4 border ">22</td>
                    <td className="py-2 px-4 border ">-</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M6</td>
                    <td className="py-2 px-4 border ">9.78</td>
                    <td className="py-2 px-4 border ">10.00</td>
                    <td className="py-2 px-4 border ">3.85</td>
                    <td className="py-2 px-4 border ">4.15</td>
                    <td className="py-2 px-4 border ">18</td>
                    <td className="py-2 px-4 border ">24</td>
                    <td className="py-2 px-4 border ">-</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M8</td>
                    <td className="py-2 px-4 border ">12.73</td>
                    <td className="py-2 px-4 border ">13.00</td>
                    <td className="py-2 px-4 border ">5.15</td>
                    <td className="py-2 px-4 border ">5.45</td>
                    <td className="py-2 px-4 border ">22</td>
                    <td className="py-2 px-4 border ">28</td>
                    <td className="py-2 px-4 border ">41</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M10</td>
                    <td className="py-2 px-4 border ">16.73</td>
                    <td className="py-2 px-4 border ">17.00</td>
                    <td className="py-2 px-4 border ">6.22</td>
                    <td className="py-2 px-4 border ">6.58</td>
                    <td className="py-2 px-4 border ">26</td>
                    <td className="py-2 px-4 border ">32</td>
                    <td className="py-2 px-4 border ">45</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M12</td>
                    <td className="py-2 px-4 border ">18.67</td>
                    <td className="py-2 px-4 border ">19.00</td>
                    <td className="py-2 px-4 border ">7.32</td>
                    <td className="py-2 px-4 border ">7.68</td>
                    <td className="py-2 px-4 border ">30</td>
                    <td className="py-2 px-4 border ">36</td>
                    <td className="py-2 px-4 border ">49</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M14</td>
                    <td className="py-2 px-4 border ">21.67</td>
                    <td className="py-2 px-4 border ">22.00</td>
                    <td className="py-2 px-4 border ">8.62</td>
                    <td className="py-2 px-4 border ">8.98</td>
                    <td className="py-2 px-4 border ">34</td>
                    <td className="py-2 px-4 border ">40</td>
                    <td className="py-2 px-4 border ">53</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M16</td>
                    <td className="py-2 px-4 border ">23.67</td>
                    <td className="py-2 px-4 border ">24.00</td>
                    <td className="py-2 px-4 border ">9.82</td>
                    <td className="py-2 px-4 border ">10.2</td>
                    <td className="py-2 px-4 border ">38</td>
                    <td className="py-2 px-4 border ">44</td>
                    <td className="py-2 px-4 border ">57</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M18</td>
                    <td className="py-2 px-4 border ">26.67</td>
                    <td className="py-2 px-4 border ">27.00</td>
                    <td className="py-2 px-4 border ">11.28</td>
                    <td className="py-2 px-4 border ">11.7</td>
                    <td className="py-2 px-4 border ">42</td>
                    <td className="py-2 px-4 border ">48</td>
                    <td className="py-2 px-4 border ">61</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M20</td>
                    <td className="py-2 px-4 border ">29.67</td>
                    <td className="py-2 px-4 border ">30.00</td>
                    <td className="py-2 px-4 border ">12.28</td>
                    <td className="py-2 px-4 border ">12.7</td>
                    <td className="py-2 px-4 border ">46</td>
                    <td className="py-2 px-4 border ">52</td>
                    <td className="py-2 px-4 border ">65</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M22</td>
                    <td className="py-2 px-4 border ">31.61</td>
                    <td className="py-2 px-4 border ">32.00</td>
                    <td className="py-2 px-4 border ">13.78</td>
                    <td className="py-2 px-4 border ">14.2</td>
                    <td className="py-2 px-4 border ">50</td>
                    <td className="py-2 px-4 border ">56</td>
                    <td className="py-2 px-4 border ">69</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M24</td>
                    <td className="py-2 px-4 border ">35.38</td>
                    <td className="py-2 px-4 border ">36.00</td>
                    <td className="py-2 px-4 border ">14.78</td>
                    <td className="py-2 px-4 border ">15.2</td>
                    <td className="py-2 px-4 border ">54</td>
                    <td className="py-2 px-4 border ">60</td>
                    <td className="py-2 px-4 border ">73</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M27</td>
                    <td className="py-2 px-4 border ">40.00</td>
                    <td className="py-2 px-4 border ">41.00</td>
                    <td className="py-2 px-4 border ">16.65</td>
                    <td className="py-2 px-4 border ">17.4</td>
                    <td className="py-2 px-4 border ">60</td>
                    <td className="py-2 px-4 border ">66</td>
                    <td className="py-2 px-4 border ">79</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M30</td>
                    <td className="py-2 px-4 border ">45.00</td>
                    <td className="py-2 px-4 border ">46.00</td>
                    <td className="py-2 px-4 border ">18.28</td>
                    <td className="py-2 px-4 border ">19.12</td>
                    <td className="py-2 px-4 border ">66</td>
                    <td className="py-2 px-4 border ">72</td>
                    <td className="py-2 px-4 border ">85</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M33</td>
                    <td className="py-2 px-4 border ">49.00</td>
                    <td className="py-2 px-4 border ">50.00</td>
                    <td className="py-2 px-4 border ">20.58</td>
                    <td className="py-2 px-4 border ">21.42</td>
                    <td className="py-2 px-4 border ">72</td>
                    <td className="py-2 px-4 border ">78</td>
                    <td className="py-2 px-4 border ">91</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M36</td>
                    <td className="py-2 px-4 border ">53.80</td>
                    <td className="py-2 px-4 border ">55.00</td>
                    <td className="py-2 px-4 border ">22.08</td>
                    <td className="py-2 px-4 border ">22.92</td>
                    <td className="py-2 px-4 border ">78</td>
                    <td className="py-2 px-4 border ">84</td>
                    <td className="py-2 px-4 border ">97</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M39</td>
                    <td className="py-2 px-4 border ">58.80</td>
                    <td className="py-2 px-4 border ">60.00</td>
                    <td className="py-2 px-4 border ">24.58</td>
                    <td className="py-2 px-4 border ">25.42</td>
                    <td className="py-2 px-4 border ">84</td>
                    <td className="py-2 px-4 border ">90</td>
                    <td className="py-2 px-4 border ">103</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M42</td>
                    <td className="py-2 px-4 border ">63.10</td>
                    <td className="py-2 px-4 border ">65.00</td>
                    <td className="py-2 px-4 border ">25.58</td>
                    <td className="py-2 px-4 border ">26.42</td>
                    <td className="py-2 px-4 border ">90</td>
                    <td className="py-2 px-4 border ">96</td>
                    <td className="py-2 px-4 border ">109</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M45</td>
                    <td className="py-2 px-4 border ">68.10</td>
                    <td className="py-2 px-4 border ">70.00</td>
                    <td className="py-2 px-4 border ">27.58</td>
                    <td className="py-2 px-4 border ">28.42</td>
                    <td className="py-2 px-4 border ">96</td>
                    <td className="py-2 px-4 border ">102</td>
                    <td className="py-2 px-4 border ">115</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M48</td>
                    <td className="py-2 px-4 border ">73.10</td>
                    <td className="py-2 px-4 border ">75.00</td>
                    <td className="py-2 px-4 border ">29.58</td>
                    <td className="py-2 px-4 border ">30.42</td>
                    <td className="py-2 px-4 border ">102</td>
                    <td className="py-2 px-4 border ">108</td>
                    <td className="py-2 px-4 border ">121</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M52</td>
                    <td className="py-2 px-4 border ">78.10</td>
                    <td className="py-2 px-4 border ">80.00</td>
                    <td className="py-2 px-4 border ">32.5</td>
                    <td className="py-2 px-4 border ">33.5</td>
                    <td className="py-2 px-4 border ">-</td>
                    <td className="py-2 px-4 border ">116</td>
                    <td className="py-2 px-4 border ">129</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M56</td>
                    <td className="py-2 px-4 border ">82.80</td>
                    <td className="py-2 px-4 border ">85.00</td>
                    <td className="py-2 px-4 border ">34.5</td>
                    <td className="py-2 px-4 border ">35.5</td>
                    <td className="py-2 px-4 border ">-</td>
                    <td className="py-2 px-4 border ">124</td>
                    <td className="py-2 px-4 border ">137</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M60</td>
                    <td className="py-2 px-4 border ">87.80</td>
                    <td className="py-2 px-4 border ">90.00</td>
                    <td className="py-2 px-4 border ">37.5</td>
                    <td className="py-2 px-4 border ">38.5</td>
                    <td className="py-2 px-4 border ">-</td>
                    <td className="py-2 px-4 border ">132</td>
                    <td className="py-2 px-4 border ">145</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border ">M64</td>
                    <td className="py-2 px-4 border ">92.80</td>
                    <td className="py-2 px-4 border ">95.00</td>
                    <td className="py-2 px-4 border ">39.5</td>
                    <td className="py-2 px-4 border ">40.5</td>
                    <td className="py-2 px-4 border ">-</td>
                    <td className="py-2 px-4 border ">140</td>
                    <td className="py-2 px-4 border ">153</td>
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
                src={hexnuts}
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

export default HexNuts;
