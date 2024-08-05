import React from "react";
import springWash from "../../../../assets/newImages/springwashers.jpg";
import springWashdim from "../../../../assets/newImages/spring washer dim.png";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";

const SpringWashers = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                Spring Washers
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={springWash}
                  alt="Hex Nuts"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>
              <div className="mb-6">
                <p className="mb-2">
                  Spring washers, also known as lock washers, are designed to
                  prevent fasteners from loosening due to vibrations and torque.
                  Their unique shape allows them to exert a spring force,
                  maintaining tension and holding the fastener in place.
                </p>
                <ul className="list-disc list-inside">
                  <li>Helical or wave design that provides spring force</li>
                  <li>
                    Used to maintain tension and prevent loosening of fasteners
                  </li>
                  <li>
                    Commonly used in applications with vibration or dynamic
                    loads
                  </li>
                  <li>
                    Available in various materials like steel, stainless steel,
                    and brass
                  </li>
                  <li>
                    Provides a locking mechanism without the need for adhesives
                    or locking nuts
                  </li>
                  <li>
                    Ideal for automotive, machinery, and electronic applications
                  </li>
                </ul>
              </div>

              <div className="mb-6 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">
                  Spring Washers Specification Table:
                </h3>
                <table>
                  <thead>
                    <tr>
                      <th>Specification</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Type</td>
                      <td>
                        Split lock washer, Belleville washer, Wave washer, etc.
                      </td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td>
                        Stainless steel, Carbon steel, Phosphor bronze, etc.
                      </td>
                    </tr>
                    <tr>
                      <td>Standard</td>
                      <td>DIN 127, ANSI B18.21.1, ISO 7089, etc.</td>
                    </tr>
                    <tr>
                      <td>Size Range</td>
                      <td>M2 to M100</td>
                    </tr>
                    <tr>
                      <td>Hardness</td>
                      <td>30 to 45 HRC (Rockwell Hardness Scale)</td>
                    </tr>
                    <tr>
                      <td>Surface Finish</td>
                      <td>Zinc plated, Black oxide, Plain, etc.</td>
                    </tr>
                    <tr>
                      <td>Application</td>
                      <td>
                        Automotive, Aerospace, Machinery, Electronics, etc.
                      </td>
                    </tr>
                    <tr>
                      <td>Temperature Range</td>
                      <td>-50°C to 300°C (-58°F to 572°F)</td>
                    </tr>
                    <tr>
                      <td>Corrosion Resistance</td>
                      <td>
                        High, Medium, Low (depends on material and finish)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />

              <h2 className="text-2xl font-bold mb-4">
                Spring Washers Material Grade Table:
              </h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Material</th>
                      <th>Grade</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Carbon Steel</td>
                      <td>ASTM A108</td>
                      <td>General-purpose grade used in many applications</td>
                    </tr>
                    <tr>
                      <td>Stainless Steel</td>
                      <td>304</td>
                      <td>Corrosion-resistant, used in harsh environments</td>
                    </tr>
                    <tr>
                      <td>Stainless Steel</td>
                      <td>316</td>
                      <td>
                        Higher corrosion resistance, especially against
                        chlorides
                      </td>
                    </tr>
                    <tr>
                      <td>Phosphor Bronze</td>
                      <td>C51000</td>
                      <td>
                        Excellent spring properties and good corrosion
                        resistance
                      </td>
                    </tr>
                    <tr>
                      <td>Inconel</td>
                      <td>600</td>
                      <td>
                        Nickel-chromium alloy with high temperature resistance
                      </td>
                    </tr>
                    <tr>
                      <td>Beryllium Copper</td>
                      <td>C17200</td>
                      <td>
                        High strength and conductivity, used in electrical
                        applications
                      </td>
                    </tr>
                    <tr>
                      <td>Alloy Steel</td>
                      <td>Grade 8</td>
                      <td>High-strength steel for demanding applications</td>
                    </tr>
                    <tr>
                      <td>Brass</td>
                      <td>C36000</td>
                      <td>Good machinability and corrosion resistance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <h2 className="text-2xl font-bold mb-4">
                Spring Washers Dimensions Chart:
              </h2>

              <img src={springWashdim} alt="" />
              <br />
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan="2">Nominal Size</th>
                      <th colSpan="2">d1</th>
                      <th>d2</th>
                      <th colSpan="2">s</th>
                    </tr>
                    <tr>
                      <th colSpan={2}>Inside Diameter</th>

                      <th>Outside Diameter</th>
                      <th colSpan="2">Thickness</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>M2</td>
                      <td>2.1</td>
                      <td>2.4</td>
                      <td>4.4</td>
                      <td>0.40</td>
                      <td>0.60</td>
                    </tr>
                    <tr>
                      <td>M2.2</td>
                      <td>2.3</td>
                      <td>2.6</td>
                      <td>4.8</td>
                      <td>0.50</td>
                      <td>0.70</td>
                    </tr>
                    <tr>
                      <td>M2.5</td>
                      <td>2.6</td>
                      <td>2.9</td>
                      <td>5.1</td>
                      <td>0.50</td>
                      <td>0.70</td>
                    </tr>
                    <tr>
                      <td>M3</td>
                      <td>3.1</td>
                      <td>3.4</td>
                      <td>6.2</td>
                      <td>0.70</td>
                      <td>0.90</td>
                    </tr>
                    <tr>
                      <td>M3.5</td>
                      <td>3.6</td>
                      <td>3.9</td>
                      <td>6.7</td>
                      <td>0.70</td>
                      <td>0.90</td>
                    </tr>
                    <tr>
                      <td>M4</td>
                      <td>4.1</td>
                      <td>4.4</td>
                      <td>7.6</td>
                      <td>0.80</td>
                      <td>1.00</td>
                    </tr>
                    <tr>
                      <td>M5</td>
                      <td>5.1</td>
                      <td>5.4</td>
                      <td>9.2</td>
                      <td>1.10</td>
                      <td>1.30</td>
                    </tr>
                    <tr>
                      <td>M6</td>
                      <td>6.1</td>
                      <td>6.5</td>
                      <td>11.8</td>
                      <td>1.50</td>
                      <td>1.70</td>
                    </tr>
                    <tr>
                      <td>M7</td>
                      <td>7.1</td>
                      <td>7.5</td>
                      <td>12.8</td>
                      <td>1.50</td>
                      <td>1.70</td>
                    </tr>
                    <tr>
                      <td>M8</td>
                      <td>8.1</td>
                      <td>8.5</td>
                      <td>14.8</td>
                      <td>1.90</td>
                      <td>2.10</td>
                    </tr>
                    <tr>
                      <td>M10</td>
                      <td>10.2</td>
                      <td>10.7</td>
                      <td>18.1</td>
                      <td>2.05</td>
                      <td>2.35</td>
                    </tr>
                    <tr>
                      <td>M12</td>
                      <td>12.2</td>
                      <td>12.7</td>
                      <td>21.1</td>
                      <td>2.35</td>
                      <td>2.65</td>
                    </tr>
                    <tr>
                      <td>M14</td>
                      <td>14.2</td>
                      <td>14.7</td>
                      <td>24.1</td>
                      <td>2.85</td>
                      <td>3.15</td>
                    </tr>
                    <tr>
                      <td>M16</td>
                      <td>16.2</td>
                      <td>17.0</td>
                      <td>27.4</td>
                      <td>3.30</td>
                      <td>3.70</td>
                    </tr>
                    <tr>
                      <td>M18</td>
                      <td>18.2</td>
                      <td>19.0</td>
                      <td>29.4</td>
                      <td>3.30</td>
                      <td>3.70</td>
                    </tr>
                    <tr>
                      <td>M20</td>
                      <td>20.2</td>
                      <td>21.2</td>
                      <td>33.6</td>
                      <td>3.80</td>
                      <td>4.20</td>
                    </tr>
                    <tr>
                      <td>M22</td>
                      <td>22.5</td>
                      <td>23.5</td>
                      <td>35.9</td>
                      <td>3.80</td>
                      <td>4.20</td>
                    </tr>
                    <tr>
                      <td>M24</td>
                      <td>24.5</td>
                      <td>25.5</td>
                      <td>40.0</td>
                      <td>4.80</td>
                      <td>5.20</td>
                    </tr>
                    <tr>
                      <td>M27</td>
                      <td>27.5</td>
                      <td>28.5</td>
                      <td>43.0</td>
                      <td>4.80</td>
                      <td>5.20</td>
                    </tr>
                    <tr>
                      <td>M30</td>
                      <td>30.5</td>
                      <td>31.7</td>
                      <td>48.2</td>
                      <td>5.80</td>
                      <td>6.20</td>
                    </tr>
                    <tr>
                      <td>M36</td>
                      <td>36.5</td>
                      <td>37.7</td>
                      <td>58.2</td>
                      <td>5.80</td>
                      <td>6.20</td>
                    </tr>
                    <tr>
                      <td>M39</td>
                      <td>39.5</td>
                      <td>40.7</td>
                      <td>61.2</td>
                      <td>5.80</td>
                      <td>6.20</td>
                    </tr>
                    <tr>
                      <td>M42</td>
                      <td>42.5</td>
                      <td>43.7</td>
                      <td>68.2</td>
                      <td>6.75</td>
                      <td>7.25</td>
                    </tr>
                    <tr>
                      <td>M45</td>
                      <td>45.5</td>
                      <td>46.7</td>
                      <td>71.2</td>
                      <td>6.75</td>
                      <td>7.25</td>
                    </tr>
                    <tr>
                      <td>M48</td>
                      <td>49.0</td>
                      <td>50.5</td>
                      <td>75.0</td>
                      <td>6.75</td>
                      <td>7.25</td>
                    </tr>
                    <tr>
                      <td>M52</td>
                      <td>53.0</td>
                      <td>54.5</td>
                      <td>83.0</td>
                      <td>7.75</td>
                      <td>8.25</td>
                    </tr>
                    <tr>
                      <td>M56</td>
                      <td>57.0</td>
                      <td>58.5</td>
                      <td>87.0</td>
                      <td>7.75</td>
                      <td>8.25</td>
                    </tr>
                    <tr>
                      <td>M60</td>
                      <td>61.0</td>
                      <td>62.5</td>
                      <td>91.0</td>
                      <td>7.75</td>
                      <td>8.25</td>
                    </tr>
                    <tr>
                      <td>M64</td>
                      <td>65.0</td>
                      <td>66.5</td>
                      <td>95.0</td>
                      <td>7.75</td>
                      <td>8.25</td>
                    </tr>
                    <tr>
                      <td>M68</td>
                      <td>69.0</td>
                      <td>70.5</td>
                      <td>99.9</td>
                      <td>7.75</td>
                      <td>8.25</td>
                    </tr>
                    <tr>
                      <td>M72</td>
                      <td>73.0</td>
                      <td>74.5</td>
                      <td>103.0</td>
                      <td>7.75</td>
                      <td>8.25</td>
                    </tr>
                    <tr>
                      <td>M80</td>
                      <td>81.0</td>
                      <td>82.5</td>
                      <td>111.0</td>
                      <td>7.75</td>
                      <td>8.25</td>
                    </tr>
                    <tr>
                      <td>M90</td>
                      <td>91.0</td>
                      <td>92.5</td>
                      <td>121.0</td>
                      <td>7.75</td>
                      <td>8.25</td>
                    </tr>
                    <tr>
                      <td>M100</td>
                      <td>101.0</td>
                      <td>102.5</td>
                      <td>131.0</td>
                      <td>7.75</td>
                      <td>8.25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Spring Washer Applications:
                </h3>
                <p className="mb-4">
                  Spring washers are essential in many mechanical and fastening
                  applications. They are designed to provide a constant spring
                  force that helps maintain the tension in the fastener
                  assembly, preventing loosening and compensating for vibrations
                  or thermal expansions. Their unique shape and properties make
                  them valuable in applications where secure and reliable
                  fastening is crucial.
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Maintaining tension and preventing loosening of fasteners
                  </li>
                  <li>Compensating for vibrations and dynamic loads</li>
                  <li>Absorbing thermal expansion and contraction</li>
                  <li>
                    Providing a reliable connection in high-stress environments
                  </li>
                  <li>Enhancing the longevity and stability of assemblies</li>
                  <li>
                    Commonly used in automotive, aerospace, and machinery
                    applications
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
              <img
                src={springWash}
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

export default SpringWashers;
