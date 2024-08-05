import React from "react";
import RelatedProducts from "../../../ProductComponent/RelatedProducts";
import Layout from "../../../common/Layout";
import degree45 from "../../../../assets/newImages/45degreeelbow.webp";
import diagram from "../../../../assets/newImages/degree45diagram.jpg"

const Degree45 = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="text-fontDefault p-4 prod">
            <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-6">
                <h1 className="text-2xl text-center md:text-left font-bold mb-4">
                  45-Degree Elbow
                </h1>
                <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
                  <img
                    src={degree45}
                    alt="Stainless Steel Gaskets"
                    className="w-full h-auto mb-6 rounded shadow-lg"
                  />
                </div>

                {/* //add all info about add specification material grades   Spiral Wound Gasket tables of dimension charts  150 class , 300 class and 600 class  , application of spiral wound,  */}

                <p>
                  The 45-degree forged elbow is a crucial component in piping
                  systems, designed to provide a smooth transition between two
                  pipes at a 45-degree angle. Engineered for durability and
                  reliability, this elbow is commonly used in various industrial
                  applications, including oil and gas, chemical processing, and
                  construction.
                </p>

                <br />

                <p>
                  Manufactured from high-quality forged steel, the 45-degree
                  elbow ensures exceptional strength and resistance to high
                  pressures and extreme temperatures. It adheres to rigorous
                  international standards, such as ASTM, ASME, and DIN,
                  guaranteeing superior performance and longevity.
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
                        <td className="px-4 py-2 border">ASTM A 105/A694/ A350 LF3/A350 LF2 - F42, F46, F52, F56, F60, F65</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Stainless Steel</td>
                        <td className="px-4 py-2 border">
                        ASTM A 182 - F 304, 304L, 304H, 309S, 309H, 310S, 310H, 316, 316Ti, 316H, 316L, 321, 321H, 347, 347H, 904L{" "}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 border">Duplex & Super Duplex</td>
                        <td className="px-4 py-2 border">ASTM / ASME A/SA 182 - F44, F45, F51, F53, F55, F60, F61   </td>
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
                        <td className="px-4 py-2 border">600, 601, 625, 800, 825</td>
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
                  45-Degree Elbow Specifications:
                </h2>
                <div className="overflow-x-auto ">
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
      <td className="px-4 py-2 border">Forged Steel (e.g., ASTM A105, A350 LF2, A182 F11, F22)</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border">Type</td>
      <td className="px-4 py-2 border">45-Degree Elbow</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border">Temperature Range</td>
      <td className="px-4 py-2 border">-29°C to 538°C (-20°F to 1000°F)</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border">Pressure Rating</td>
      <td className="px-4 py-2 border">Class 3000, 6000, 9000</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border">Standards</td>
      <td className="px-4 py-2 border">ASTM A234, ASME B16.11, ASME B16.5</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border">Sizes</td>
      <td className="px-4 py-2 border">1/2" to 24"</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border">Applications</td>
      <td className="px-4 py-2 border">Oil & Gas, Chemical Processing, Petrochemical, Construction, High-Pressure Systems</td>
    </tr>
    <tr>
      <td className="px-4 py-2 border">Production Technique</td>
      <td className="px-4 py-2 border">Forging</td>
    </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h2 className="text-2xl font-bold">Dimension Chart :</h2>

                <div className="overflow-x-auto">

                    <div>
                        <img src={diagram} alt="" />
                    </div>
                


 <table className="min-w-full bg-white border text-center">
    <thead className="bg-primary text-white">
        <tr>
             <th  className="px-4 py-2 border" rowSpan="4" >DN</th>
             <th  className="px-4 py-2 border" rowSpan="4" >Nom.<br/>Pipe<br/>Size</th>
             <th  className="px-4 py-2 border" colSpan="3" rowSpan="3" >Center to End<br/>Elbow, Tee, Cross<br/>A</th>
             <th  className="px-4 py-2 border" colSpan="3" rowSpan="3" >Center to End<br/>45&deg; Elbow<br/>C</th>
             <th  className="px-4 py-2 border" colSpan="3" rowSpan="3" >Outside Diameter<br/>Of Band<br/>H</th>
             <th  className="px-4 py-2 border" colSpan="3" rowSpan="3" >Minimum Wall<br/>Thickness<br/>G</th>
             <th  className="px-4 py-2 border" colSpan="2" rowSpan="3" >Length Of<br/>Thread<br/>Min. (1)</th>
        </tr>
        <tr>
           
        </tr>
        <tr>

        </tr>
        <tr>
             <th  className="px-4 py-2 border" >2000</th>
             <th  className="px-4 py-2 border" >3000</th>
             <th  className="px-4 py-2 border" >6000</th>
             <th  className="px-4 py-2 border" >2000</th>
             <th  className="px-4 py-2 border" >3000</th>
             <th  className="px-4 py-2 border" >6000</th>
             <th  className="px-4 py-2 border" >2000</th>
             <th  className="px-4 py-2 border" >3000</th>
             <th  className="px-4 py-2 border" >6000</th>
             <th  className="px-4 py-2 border" >2000</th>
             <th  className="px-4 py-2 border" >3000</th>
             <th  className="px-4 py-2 border" >6000</th>
             <th  className="px-4 py-2 border" >B</th>
             <th  className="px-4 py-2 border" >L2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  className="px-4 py-2 border">6</td>
            <td  className="px-4 py-2 border">1/8"</td>
            <td  className="px-4 py-2 border">21</td>
            <td  className="px-4 py-2 border">21</td>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">17</td>
            <td  className="px-4 py-2 border">17</td>
            <td  className="px-4 py-2 border">19</td>
            <td  className="px-4 py-2 border">22</td>
            <td  className="px-4 py-2 border">22</td>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">3.18</td>
            <td  className="px-4 py-2 border">3.18</td>
            <td  className="px-4 py-2 border">6.35</td>
            <td  className="px-4 py-2 border">6.4</td>
            <td  className="px-4 py-2 border">6.7</td>
        </tr>
        <tr>
            <td  className="px-4 py-2 border">8</td>
            <td  className="px-4 py-2 border">1/4"</td>
            <td  className="px-4 py-2 border">21</td>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">28</td>
            <td  className="px-4 py-2 border">17</td>
            <td  className="px-4 py-2 border">19</td>
            <td  className="px-4 py-2 border">22</td>
            <td  className="px-4 py-2 border">22</td>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">33</td>
            <td  className="px-4 py-2 border">3.18</td>
            <td  className="px-4 py-2 border">3.30</td>
            <td  className="px-4 py-2 border">6.60</td>
            <td  className="px-4 py-2 border">8.1</td>
            <td  className="px-4 py-2 border">10.2</td>
        </tr>
        <tr>
            <td  className="px-4 py-2 border">10</td>
            <td  className="px-4 py-2 border">3/8"</td>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">28</td>
            <td  className="px-4 py-2 border">33</td>
            <td  className="px-4 py-2 border">19</td>
            <td  className="px-4 py-2 border">22</td>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">33</td>
            <td  className="px-4 py-2 border">38</td>
            <td  className="px-4 py-2 border">3.18</td>
            <td  className="px-4 py-2 border">3.51</td>
            <td  className="px-4 py-2 border">6.98</td>
            <td  className="px-4 py-2 border">9.1</td>
            <td  className="px-4 py-2 border">10.4</td>
        </tr>
        <tr>
            <td  className="px-4 py-2 border">15</td>
            <td  className="px-4 py-2 border">1/2"</td>
            <td  className="px-4 py-2 border">28</td>
            <td  className="px-4 py-2 border">33</td>
            <td  className="px-4 py-2 border">38</td>
            <td  className="px-4 py-2 border">22</td>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">28</td>
            <td  className="px-4 py-2 border">33</td>
            <td  className="px-4 py-2 border">38</td>
            <td  className="px-4 py-2 border">46</td>
            <td  className="px-4 py-2 border">3.18</td>
            <td  className="px-4 py-2 border">4.09</td>
            <td  className="px-4 py-2 border">8.15</td>
            <td  className="px-4 py-2 border">10.9</td>
            <td  className="px-4 py-2 border">13.6</td>
        </tr>
        <tr>
            <td  className="px-4 py-2 border">20</td>
            <td  className="px-4 py-2 border">3/4"</td>
            <td  className="px-4 py-2 border">33</td>
            <td  className="px-4 py-2 border">38</td>
            <td  className="px-4 py-2 border">44</td>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">28</td>
            <td  className="px-4 py-2 border">33</td>
            <td  className="px-4 py-2 border">38</td>
            <td  className="px-4 py-2 border">46</td>
            <td  className="px-4 py-2 border">56</td>
            <td  className="px-4 py-2 border">3.18</td>
            <td  className="px-4 py-2 border">4.32</td>
            <td  className="px-4 py-2 border">8.53</td>
            <td  className="px-4 py-2 border">12.7</td>
            <td  className="px-4 py-2 border">13.9</td>
        </tr>
        <tr>
            <td  className="px-4 py-2 border">25</td>
            <td  className="px-4 py-2 border">1"</td>
            <td  className="px-4 py-2 border">38</td>
            <td  className="px-4 py-2 border">44</td>
            <td  className="px-4 py-2 border">51</td>
            <td  className="px-4 py-2 border">28</td>
            <td  className="px-4 py-2 border">33</td>
            <td  className="px-4 py-2 border">35</td>
            <td  className="px-4 py-2 border">46</td>
            <td  className="px-4 py-2 border">56</td>
            <td  className="px-4 py-2 border">62</td>
            <td  className="px-4 py-2 border">3.68</td>
            <td  className="px-4 py-2 border">4.98</td>
            <td  className="px-4 py-2 border">9.93</td>
            <td  className="px-4 py-2 border">14.7</td>
            <td  className="px-4 py-2 border">17.3</td>
        </tr>
        <tr>
  <td className="px-4 py-2 border">32</td>
  <td className="px-4 py-2 border">1-1/4"</td>
  <td className="px-4 py-2 border">44</td>
  <td className="px-4 py-2 border">51</td>
  <td className="px-4 py-2 border">60</td>
  <td className="px-4 py-2 border">33</td>
  <td className="px-4 py-2 border">35</td>
  <td className="px-4 py-2 border">43</td>
  <td className="px-4 py-2 border">56</td>
  <td className="px-4 py-2 border">62</td>
  <td className="px-4 py-2 border">75</td>
  <td className="px-4 py-2 border">3.89</td>
  <td className="px-4 py-2 border">5.28</td>
  <td className="px-4 py-2 border">10.59</td>
  <td className="px-4 py-2 border">17.0</td>
  <td className="px-4 py-2 border">18.0</td>
</tr>
<tr>
  <td className="px-4 py-2 border">40</td>
  <td className="px-4 py-2 border">1-1/2"</td>
  <td className="px-4 py-2 border">51</td>
  <td className="px-4 py-2 border">60</td>
  <td className="px-4 py-2 border">64</td>
  <td className="px-4 py-2 border">35</td>
  <td className="px-4 py-2 border">43</td>
  <td className="px-4 py-2 border">44</td>
  <td className="px-4 py-2 border">62</td>
  <td className="px-4 py-2 border">75</td>
  <td className="px-4 py-2 border">84</td>
  <td className="px-4 py-2 border">4.01</td>
  <td className="px-4 py-2 border">5.56</td>
  <td className="px-4 py-2 border">11.07</td>
  <td className="px-4 py-2 border">17.8</td>
  <td className="px-4 py-2 border">18.4</td>
</tr>
<tr>
  <td className="px-4 py-2 border">50</td>
  <td className="px-4 py-2 border">2"</td>
  <td className="px-4 py-2 border">60</td>
  <td className="px-4 py-2 border">64</td>
  <td className="px-4 py-2 border">83</td>
  <td className="px-4 py-2 border">43</td>
  <td className="px-4 py-2 border">44</td>
  <td className="px-4 py-2 border">52</td>
  <td className="px-4 py-2 border">75</td>
  <td className="px-4 py-2 border">84</td>
  <td className="px-4 py-2 border">102</td>
  <td className="px-4 py-2 border">4.27</td>
  <td className="px-4 py-2 border">7.14</td>
  <td className="px-4 py-2 border">12.09</td>
  <td className="px-4 py-2 border">19.0</td>
  <td className="px-4 py-2 border">19.2</td>
</tr>
<tr>
  <td className="px-4 py-2 border">65</td>
  <td className="px-4 py-2 border">2-1/2"</td>
  <td className="px-4 py-2 border">76</td>
  <td className="px-4 py-2 border">83</td>
  <td className="px-4 py-2 border">95</td>
  <td className="px-4 py-2 border">52</td>
  <td className="px-4 py-2 border">52</td>
  <td className="px-4 py-2 border">64</td>
  <td className="px-4 py-2 border">92</td>
  <td className="px-4 py-2 border">102</td>
  <td className="px-4 py-2 border">121</td>
  <td className="px-4 py-2 border">5.61</td>
  <td className="px-4 py-2 border">7.65</td>
  <td className="px-4 py-2 border">15.29</td>
  <td className="px-4 py-2 border">23.6</td>
  <td className="px-4 py-2 border">28.9</td>
</tr>
<tr>
  <td className="px-4 py-2 border">80</td>
  <td className="px-4 py-2 border">3"</td>
  <td className="px-4 py-2 border">86</td>
  <td className="px-4 py-2 border">95</td>
  <td className="px-4 py-2 border">106</td>
  <td className="px-4 py-2 border">64</td>
  <td className="px-4 py-2 border">64</td>
  <td className="px-4 py-2 border">79</td>
  <td className="px-4 py-2 border">109</td>
  <td className="px-4 py-2 border">121</td>
  <td className="px-4 py-2 border">146</td>
  <td className="px-4 py-2 border">5.99</td>
  <td className="px-4 py-2 border">8.84</td>
  <td className="px-4 py-2 border">16.64</td>
  <td className="px-4 py-2 border">25.9</td>
  <td className="px-4 py-2 border">30.5</td>
</tr>
<tr>
  <td className="px-4 py-2 border">100</td>
  <td className="px-4 py-2 border">4"</td>
  <td className="px-4 py-2 border">106</td>
  <td className="px-4 py-2 border">114</td>
  <td className="px-4 py-2 border">114</td>
  <td className="px-4 py-2 border">79</td>
  <td className="px-4 py-2 border">79</td>
  <td className="px-4 py-2 border">79</td>
  <td className="px-4 py-2 border">146</td>
  <td className="px-4 py-2 border">152</td>
  <td className="px-4 py-2 border">152</td>
  <td className="px-4 py-2 border">6.55</td>
  <td className="px-4 py-2 border">11.18</td>
  <td className="px-4 py-2 border">18.67</td>
  <td className="px-4 py-2 border">27.7</td>
  <td className="px-4 py-2 border">33.0</td>
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
    45-degree elbows are essential in various applications due to their ability to change flow direction and provide flexibility in piping systems. Key areas of application include:
  </p>
  <ul className="list-disc ml-6 mt-2">
    <li>Automotive Industry: For engine components, fuel systems, and exhaust systems, where flexibility and resistance to heat and chemicals are essential.</li>
    <li>Chemical Processing: In pipelines, valves, and reactors to handle various chemicals and moderate pressures effectively.</li>
    <li>Food and Beverage Industry: In processing equipment for non-stick and hygienic sealing, ensuring safety and cleanliness.</li>
    <li>Pharmaceutical Industry: To provide sterile sealing in pharmaceutical equipment and reactors.</li>
    <li>High-Temperature Applications: For environments requiring durable sealing under extreme temperatures and pressures.</li>
    <li>Industrial Machinery: In pumps, compressors, and general machinery where flexible and reliable seals are needed.</li>
  </ul>
</div>

              </div>

              <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
                <img
                  src={degree45}
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

export default Degree45;




