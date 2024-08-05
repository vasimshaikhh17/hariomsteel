import React from "react";
import hvwasher from "../../../../assets/newImages/hv washers.jpg";
import hvwasherdim from "../../../../assets/newImages/HV WASHERDIM.jpg";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
const HvWashers = () => {
  return (
    <Layout>
      <div>
        <div className="text-fontDefault p-4 prod">
          <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
            <div className="lg:w-3/4 lg:pr-6">
              <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                HV Washers
              </h1>
              <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                <img
                  src={hvwasher}
                  alt="Hex Nuts"
                  className="w-full h-auto mb-6 rounded shadow-lg"
                />
              </div>
              <div className="mb-6">
                <p className="mb-2">
                  HV washers are high-strength washers designed to distribute
                  loads and protect surfaces in bolted connections. They are
                  specifically engineered for use in high-tension applications,
                  often paired with HV bolts and nuts to ensure secure and
                  reliable joints.
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    High-strength design suitable for structural applications
                  </li>
                  <li>
                    Used to distribute load and protect the surfaces of bolted
                    joints
                  </li>
                  <li>
                    Commonly used in construction, bridges, and steel structures
                  </li>
                  <li>
                    Manufactured according to standards such as EN 14399-6
                  </li>
                  <li>
                    Available in various materials like steel and stainless
                    steel
                  </li>
                  <li>
                    Provides a robust and reliable connection for high-load
                    applications
                  </li>
                </ul>
              </div>

              <div className="mb-6 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">
                  HV Washers Specification Table:
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
                      <td>HV Washer</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td>High-strength steel, Stainless steel</td>
                    </tr>
                    <tr>
                      <td>Standard</td>
                      <td>EN 14399-6</td>
                    </tr>
                    <tr>
                      <td>Size Range</td>
                      <td>M12 to M36</td>
                    </tr>
                    <tr>
                      <td>Hardness</td>
                      <td>200-300 HV (Vickers Hardness Scale)</td>
                    </tr>
                    <tr>
                      <td>Surface Finish</td>
                      <td>Plain, Zinc-plated, Hot-dip galvanized</td>
                    </tr>
                    <tr>
                      <td>Application</td>
                      <td>
                        Structural connections, bridges, steel constructions
                      </td>
                    </tr>
                    <tr>
                      <td>Temperature Range</td>
                      <td>-20°C to 100°C (-4°F to 212°F)</td>
                    </tr>
                    <tr>
                      <td>Corrosion Resistance</td>
                      <td>High, depending on coating</td>
                    </tr>
                    <tr>
                      <td>Tensile Strength</td>
                      <td>Min. 1,000 MPa</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />

              <h2 className="text-2xl font-bold mb-4">
                HV Washers Material Grade Table:
              </h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Material</th>
                      <th>Grade</th>
                      <th>Characteristics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>High-Strength Steel</td>
                      <td>10.9</td>
                      <td>
                        High tensile strength, suitable for structural
                        applications
                      </td>
                    </tr>
                    <tr>
                      <td>High-Strength Steel</td>
                      <td>12.9</td>
                      <td>
                        Very high tensile strength, used in heavy-duty
                        applications
                      </td>
                    </tr>
                    <tr>
                      <td>Stainless Steel</td>
                      <td>304</td>
                      <td>
                        Corrosion-resistant, suitable for use in mildly
                        corrosive environments
                      </td>
                    </tr>
                    <tr>
                      <td>Stainless Steel</td>
                      <td>316</td>
                      <td>
                        Excellent corrosion resistance, ideal for marine and
                        chemical environments
                      </td>
                    </tr>
                    <tr>
                      <td>Alloy Steel</td>
                      <td>4140</td>
                      <td>
                        Good strength and toughness, used for high-stress
                        applications
                      </td>
                    </tr>
                    <tr>
                      <td>Phosphor Bronze</td>
                      <td>C51000</td>
                      <td>Good spring properties and corrosion resistance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <h2 className="text-2xl font-bold mb-4">
                HV Washers Dimensions Chart:
              </h2>
              <p>All dimensions are in millimetres.</p>

              <img src={hvwasherdim} alt="" />
              <br />
              <div className="overflow-x-auto">
                <table>
                  <tbody>
                    <tr className="bg-primary text-white">
                      <td rowSpan="2">
                        <p>
                          <strong>S. No.</strong>
                        </p>
                      </td>
                      <td rowSpan="2">
                        <p>
                          <strong>Size</strong>
                        </p>
                      </td>
                      <td colSpan="2" rowSpan="2">
                        <p>
                          <strong>Outside diameter (D)</strong>
                        </p>
                      </td>
                      <td colSpan="2" rowSpan="2">
                        <p>
                          <strong>Inside Diameter (d)</strong>
                        </p>
                      </td>
                      <td colSpan="2" rowSpan="2">
                        <p>
                          <strong>Thickness (h)</strong>
                        </p>
                      </td>
                      <td>
                        <p></p>&nbsp;
                      </td>
                    </tr>
                    <tr className="bg-primary text-white">
                      <td>
                        <p>
                          <strong>Weight</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p></p>
                      </td>
                      <td></td>
                      <td>
                        <p>
                          <strong>Min.</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Max.</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Min.</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Max.</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Min.</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Max.</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Kg/1000</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>1</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-16</p>
                      </td>
                      <td>
                        <p>29.48</p>
                      </td>
                      <td>
                        <p>30</p>
                      </td>
                      <td>
                        <p>17</p>
                      </td>
                      <td>
                        <p>17.27</p>
                      </td>
                      <td>
                        <p>2.7</p>
                      </td>
                      <td>
                        <p>3.3</p>
                      </td>
                      <td>
                        <p>11.3</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>2</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-18</p>
                      </td>
                      <td>
                        <p>33.38</p>
                      </td>
                      <td>
                        <p>34</p>
                      </td>
                      <td>
                        <p>19</p>
                      </td>
                      <td>
                        <p>19.33</p>
                      </td>
                      <td>
                        <p>2.7</p>
                      </td>
                      <td>
                        <p>3.3</p>
                      </td>
                      <td>
                        <p>14.7</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>3</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-20</p>
                      </td>
                      <td>
                        <p>36.38</p>
                      </td>
                      <td>
                        <p>37</p>
                      </td>
                      <td>
                        <p>21</p>
                      </td>
                      <td>
                        <p>21.33</p>
                      </td>
                      <td>
                        <p>2.7</p>
                      </td>
                      <td>
                        <p>3.3</p>
                      </td>
                      <td>
                        <p>17.16</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>4</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-22</p>
                      </td>
                      <td>
                        <p>38.38</p>
                      </td>
                      <td>
                        <p>39</p>
                      </td>
                      <td>
                        <p>23</p>
                      </td>
                      <td>
                        <p>23.33</p>
                      </td>
                      <td>
                        <p>2.7</p>
                      </td>
                      <td>
                        <p>3.3</p>
                      </td>
                      <td>
                        <p>18.35</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>5</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-24</p>
                      </td>
                      <td>
                        <p>43.38</p>
                      </td>
                      <td>
                        <p>44</p>
                      </td>
                      <td>
                        <p>25</p>
                      </td>
                      <td>
                        <p>25.33</p>
                      </td>
                      <td>
                        <p>3.7</p>
                      </td>
                      <td>
                        <p>4.3</p>
                      </td>
                      <td>
                        <p>32.33</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>6</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-27</p>
                      </td>
                      <td>
                        <p>49.38</p>
                      </td>
                      <td>
                        <p>50</p>
                      </td>
                      <td>
                        <p>28</p>
                      </td>
                      <td>
                        <p>28.33</p>
                      </td>
                      <td>
                        <p>3.7</p>
                      </td>
                      <td>
                        <p>4.3</p>
                      </td>
                      <td>
                        <p>42.33</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>7</strong>
                        </p>
                      </td>
                      <td>
                        <p>M30</p>
                      </td>
                      <td>
                        <p>55.26</p>
                      </td>
                      <td>
                        <p>56</p>
                      </td>
                      <td>
                        <p>31</p>
                      </td>
                      <td>
                        <p>31.39</p>
                      </td>
                      <td>
                        <p>3.7</p>
                      </td>
                      <td>
                        <p>4.3</p>
                      </td>
                      <td>
                        <p>53.64</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>8</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-33</p>
                      </td>
                      <td>
                        <p>58.8</p>
                      </td>
                      <td>
                        <p>60</p>
                      </td>
                      <td>
                        <p>34</p>
                      </td>
                      <td>
                        <p>34.62</p>
                      </td>
                      <td>
                        <p>4.4</p>
                      </td>
                      <td>
                        <p>5.6</p>
                      </td>
                      <td>
                        <p>75.34</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>9</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-36</p>
                      </td>
                      <td>
                        <p>64.8</p>
                      </td>
                      <td>
                        <p>66</p>
                      </td>
                      <td>
                        <p>37</p>
                      </td>
                      <td>
                        <p>37.62</p>
                      </td>
                      <td>
                        <p>4.4</p>
                      </td>
                      <td>
                        <p>5.6</p>
                      </td>
                      <td>
                        <p>92.08</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>10</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-39</p>
                      </td>
                      <td>
                        <p>70.8</p>
                      </td>
                      <td>
                        <p>72</p>
                      </td>
                      <td>
                        <p>42</p>
                      </td>
                      <td>
                        <p>42.62</p>
                      </td>
                      <td>
                        <p>5.4</p>
                      </td>
                      <td>
                        <p>6.6</p>
                      </td>
                      <td>
                        <p>126.51</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>11</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-42</p>
                      </td>
                      <td>
                        <p>76.8</p>
                      </td>
                      <td>
                        <p>78</p>
                      </td>
                      <td>
                        <p>45</p>
                      </td>
                      <td>
                        <p>45.62</p>
                      </td>
                      <td>
                        <p>7</p>
                      </td>
                      <td>
                        <p>9</p>
                      </td>
                      <td>
                        <p>200.2</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>12</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-45</p>
                      </td>
                      <td>
                        <p>83.6</p>
                      </td>
                      <td>
                        <p>85</p>
                      </td>
                      <td>
                        <p>48</p>
                      </td>
                      <td>
                        <p>48.62</p>
                      </td>
                      <td>
                        <p>7</p>
                      </td>
                      <td>
                        <p>9</p>
                      </td>
                      <td>
                        <p>242.71</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>13</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-48</p>
                      </td>
                      <td>
                        <p>90.6</p>
                      </td>
                      <td>
                        <p>92</p>
                      </td>
                      <td>
                        <p>52</p>
                      </td>
                      <td>
                        <p>52.74</p>
                      </td>
                      <td>
                        <p>7</p>
                      </td>
                      <td>
                        <p>9</p>
                      </td>
                      <td>
                        <p>284.09</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>14</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-52</p>
                      </td>
                      <td>
                        <p>96.6</p>
                      </td>
                      <td>
                        <p>98</p>
                      </td>
                      <td>
                        <p>56</p>
                      </td>
                      <td>
                        <p>56.74</p>
                      </td>
                      <td>
                        <p>7</p>
                      </td>
                      <td>
                        <p>9</p>
                      </td>
                      <td>
                        <p>319.01</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>15</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-56</p>
                      </td>
                      <td>
                        <p>103.6</p>
                      </td>
                      <td>
                        <p>105</p>
                      </td>
                      <td>
                        <p>62</p>
                      </td>
                      <td>
                        <p>62.74</p>
                      </td>
                      <td>
                        <p>9</p>
                      </td>
                      <td>
                        <p>11</p>
                      </td>
                      <td>
                        <p>442.72</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>16</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-60</p>
                      </td>
                      <td>
                        <p>108.6</p>
                      </td>
                      <td>
                        <p>110</p>
                      </td>
                      <td>
                        <p>66</p>
                      </td>
                      <td>
                        <p>66.74</p>
                      </td>
                      <td>
                        <p>9</p>
                      </td>
                      <td>
                        <p>11</p>
                      </td>
                      <td>
                        <p>477.43</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <strong>17</strong>
                        </p>
                      </td>
                      <td>
                        <p>M-64</p>
                      </td>
                      <td>
                        <p>113.6</p>
                      </td>
                      <td>
                        <p>115</p>
                      </td>
                      <td>
                        <p>70</p>
                      </td>
                      <td>
                        <p>70.74</p>
                      </td>
                      <td>
                        <p>9</p>
                      </td>
                      <td>
                        <p>11</p>
                      </td>
                      <td>
                        <p>513.25</p>
                      </td>
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
                src={hvwasher}
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

export default HvWashers;
