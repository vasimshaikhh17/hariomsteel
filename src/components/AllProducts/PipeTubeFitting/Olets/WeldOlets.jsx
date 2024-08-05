import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import weldolet from "../../../../assets/newImages/weldolet.webp"

const WeldOlets = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  Weldolet
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={weldolet}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The Weldolet is a branch fitting designed for welding a branch
                  pipe to a larger run pipe, providing a strong and integral
                  connection. It is widely used in industries such as oil and
                  gas, petrochemical, and power generation, where reliable and
                  efficient piping systems are essential for seamless fluid
                  flow.
                </p>

                <br />

                <p>
                  Made from high-quality materials, the Weldolet is engineered
                  to withstand high pressures and temperatures, ensuring
                  durability and long-lasting performance. Its butt-weld design
                  offers a seamless and leak-proof connection, optimizing fluid
                  dynamics and minimizing the risk of system failures. The
                  Weldolet complies with rigorous international standards,
                  including ASTM, ASME, and MSS-SP, ensuring superior quality
                  and performance. Its precise engineering and robust
                  construction make it an ideal choice for applications
                  requiring secure and efficient welded branch connections.
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
                          ASTM A 105 / A694 / Gr. F42 / 46 / 52 / 56 / 60 / 65 /
                          70
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                          ASTM A182 F304, 304H, 309, 310, 316, 316L, 317L, 321,
                          347, 904L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">
                          Duplex & Super Duplex
                        </td>
                        <td className="px-4 py-2 border">
                          ASTM / ASME A/SA 182 UNS F 44, F 45, F51, F 53, F 55,
                          F 60, F 61{" "}
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
                        <td className="px-4 py-2 border">600, 601, 625, 825</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Hastelloy</td>
                        <td className="px-4 py-2 border">C-276</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />

                <h2 className="text-2xl font-bold">Weldolet Specifications:</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border text-center">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th>Specification</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">Material</td>
                        <td className="px-4 py-2 border">
                          Carbon Steel, Stainless Steel, Alloy Steel (e.g., ASTM
                          A105, ASTM A182 F316, ASTM A350 LF2)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">Weldolet</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Temperature Range</td>
                        <td className="px-4 py-2 border">
                          -29°C to 593°C (-20°F to 1100°F)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Corrosion Resistance
                        </td>
                        <td className="px-4 py-2 border">
                          High resistance to various chemicals and environmental
                          conditions
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Standards</td>
                        <td className="px-4 py-2 border">
                          ASTM A105, ASTM A182, ASME B16.11, MSS SP-97
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Sizes</td>
                        <td className="px-4 py-2 border">1/8" to 48"</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Applications</td>
                        <td className="px-4 py-2 border">
                          Oil & Gas, Chemical Processing, Petrochemical, Power
                          Plants, Pipelines
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Production Technique
                        </td>
                        <td className="px-4 py-2 border">Forged</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h2 className="text-2xl font-bold">Dimension Chart :</h2>

                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th rowSpan="3">
                          Outlet
                          <br />
                          Nominal Pipe Size
                        </th>
                        <th colSpan="6">
                          Face to Crotch&nbsp;<em>(L)</em>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="2">
                          Standard&nbsp;<em>(SCH40S)</em>
                        </th>
                        <th colSpan="2">
                          XS&nbsp;<em>(SCH80S)</em>
                        </th>
                        <th colSpan="2">SCH160</th>
                      </tr>
                      <tr>
                        <th>Réduit</th>
                        <th>Egal</th>
                        <th>Réduit</th>
                        <th>Egal</th>
                        <th>Réduit</th>
                        <th>Egal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>1/8"</div>
                        </td>
                        <td>
                          <div>16</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>16</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1/4"</div>
                        </td>
                        <td>
                          <div>16</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>16</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>3/8"</div>
                        </td>
                        <td>
                          <div>16</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>19</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1/2"</div>
                        </td>
                        <td>
                          <div>19</div>
                        </td>
                        <td>
                          <div>19</div>
                        </td>
                        <td>
                          <div>19</div>
                        </td>
                        <td>
                          <div>19</div>
                        </td>
                        <td>
                          <div>28</div>
                        </td>
                        <td>
                          <div>28</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>3/4"</div>
                        </td>
                        <td>
                          <div>22</div>
                        </td>
                        <td>
                          <div>22</div>
                        </td>
                        <td>
                          <div>22</div>
                        </td>
                        <td>
                          <div>22</div>
                        </td>
                        <td>
                          <div>32</div>
                        </td>
                        <td>
                          <div>32</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1"</div>
                        </td>
                        <td>
                          <div>27</div>
                        </td>
                        <td>
                          <div>27</div>
                        </td>
                        <td>
                          <div>27</div>
                        </td>
                        <td>
                          <div>27</div>
                        </td>
                        <td>
                          <div>38</div>
                        </td>
                        <td>
                          <div>38</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1&nbsp;1/4"</div>
                        </td>
                        <td>
                          <div>32</div>
                        </td>
                        <td>
                          <div>32</div>
                        </td>
                        <td>
                          <div>32</div>
                        </td>
                        <td>
                          <div>30</div>
                        </td>
                        <td>
                          <div>44</div>
                        </td>
                        <td>
                          <div>44</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>1&nbsp;1/2"</div>
                        </td>
                        <td>
                          <div>33</div>
                        </td>
                        <td>
                          <div>33</div>
                        </td>
                        <td>
                          <div>33</div>
                        </td>
                        <td>
                          <div>32</div>
                        </td>
                        <td>
                          <div>51</div>
                        </td>
                        <td>
                          <div>51</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>2"</div>
                        </td>
                        <td>
                          <div>38</div>
                        </td>
                        <td>
                          <div>38</div>
                        </td>
                        <td>
                          <div>38</div>
                        </td>
                        <td>
                          <div>38</div>
                        </td>
                        <td>
                          <div>55</div>
                        </td>
                        <td>
                          <div>55</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>2&nbsp;1/2"</div>
                        </td>
                        <td>
                          <div>41</div>
                        </td>
                        <td>
                          <div>41</div>
                        </td>
                        <td>
                          <div>41</div>
                        </td>
                        <td>
                          <div>41</div>
                        </td>
                        <td>
                          <div>62</div>
                        </td>
                        <td>
                          <div>62</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>3"</div>
                        </td>
                        <td>
                          <div>44</div>
                        </td>
                        <td>
                          <div>44</div>
                        </td>
                        <td>
                          <div>44</div>
                        </td>
                        <td>
                          <div>44</div>
                        </td>
                        <td>
                          <div>73</div>
                        </td>
                        <td>
                          <div>73</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>3&nbsp;1/2"</div>
                        </td>
                        <td>
                          <div>48</div>
                        </td>
                        <td>
                          <div>51</div>
                        </td>
                        <td>
                          <div>48</div>
                        </td>
                        <td>
                          <div>51</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>4"</div>
                        </td>
                        <td>
                          <div>51</div>
                        </td>
                        <td>
                          <div>51</div>
                        </td>
                        <td>
                          <div>51</div>
                        </td>
                        <td>
                          <div>51</div>
                        </td>
                        <td>
                          <div>84</div>
                        </td>
                        <td>
                          <div>84</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>5"</div>
                        </td>
                        <td>
                          <div>57</div>
                        </td>
                        <td>
                          <div>57</div>
                        </td>
                        <td>
                          <div>57</div>
                        </td>
                        <td>
                          <div>57</div>
                        </td>
                        <td>
                          <div>94</div>
                        </td>
                        <td>
                          <div>94</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>6"</div>
                        </td>
                        <td>
                          <div>60</div>
                        </td>
                        <td>
                          <div>60</div>
                        </td>
                        <td>
                          <div>78</div>
                        </td>
                        <td>
                          <div>78</div>
                        </td>
                        <td>
                          <div>105</div>
                        </td>
                        <td>
                          <div>105</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>8"</div>
                        </td>
                        <td>
                          <div>70</div>
                        </td>
                        <td>
                          <div>70</div>
                        </td>
                        <td>
                          <div>99</div>
                        </td>
                        <td>
                          <div>99</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>10"</div>
                        </td>
                        <td>
                          <div>78</div>
                        </td>
                        <td>
                          <div>78</div>
                        </td>
                        <td>
                          <div>94</div>
                        </td>
                        <td>
                          <div>89</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>12"</div>
                        </td>
                        <td>
                          <div>86</div>
                        </td>
                        <td>
                          <div>86</div>
                        </td>
                        <td>
                          <div>103</div>
                        </td>
                        <td>
                          <div>100</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>14"</div>
                        </td>
                        <td>
                          <div>89</div>
                        </td>
                        <td>
                          <div>89</div>
                        </td>
                        <td>
                          <div>100</div>
                        </td>
                        <td>
                          <div>105</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>16"</div>
                        </td>
                        <td>
                          <div>94</div>
                        </td>
                        <td>
                          <div>94</div>
                        </td>
                        <td>
                          <div>106</div>
                        </td>
                        <td>
                          <div>113</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>18"</div>
                        </td>
                        <td>
                          <div>97</div>
                        </td>
                        <td>
                          <div>103</div>
                        </td>
                        <td>
                          <div>111</div>
                        </td>
                        <td>
                          <div>119</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>20"</div>
                        </td>
                        <td>
                          <div>102</div>
                        </td>
                        <td>
                          <div>117</div>
                        </td>
                        <td>
                          <div>119</div>
                        </td>
                        <td>
                          <div>127</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>24"</div>
                        </td>
                        <td>
                          <div>116</div>
                        </td>
                        <td>
                          <div>137</div>
                        </td>
                        <td>
                          <div>140</div>
                        </td>
                        <td>
                          <div>140</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                        <td>
                          <div>-</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="mt-4">
                  <h2 className="text-2xl font-bold">
                    Applications of Weldolets:
                  </h2>
                  <p className="mt-2 text-lg">
                    Weldolets are designed for branch connections in piping
                    systems and are used to provide a seamless transition from
                    the main pipe to the branch pipe. They are commonly employed
                    in various industries due to their strength and reliability.
                    Some key applications include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Oil and Gas Industry: Used for creating branch connections
                      in pipelines transporting oil, gas, and other
                      hydrocarbons, ensuring secure and reliable joints.
                    </li>
                    <li>
                      Chemical Processing: Employed in chemical plants to
                      connect pipes and branches handling various chemicals,
                      maintaining integrity and safety in processing systems.
                    </li>
                    <li>
                      Power Generation: Utilized in power plants to create
                      branch connections in steam, water, and fuel systems,
                      facilitating efficient energy production and distribution.
                    </li>
                    <li>
                      Water and Wastewater Management: Applied in water
                      treatment and wastewater systems to branch off from main
                      pipelines, enabling effective flow management and
                      treatment processes.
                    </li>
                    <li>
                      HVAC Systems: Used to connect various sections of ductwork
                      or piping systems in heating, ventilation, and air
                      conditioning systems, improving airflow and system
                      performance.
                    </li>
                    <li>
                      Pulp and Paper Industry: Facilitates branch connections in
                      pipelines carrying pulp, water, and chemicals during the
                      paper manufacturing process, ensuring smooth operation.
                    </li>
                    <li>
                      Marine and Shipbuilding: Employed in marine piping systems
                      for creating branch connections in shipboard pipelines,
                      ensuring durability and reliability in harsh marine
                      environments.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={weldolet}
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

export default WeldOlets;
