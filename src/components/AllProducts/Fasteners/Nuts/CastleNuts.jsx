import React from 'react'
import Layout from '../../../common/Layout'
import castelnut from "../../../../assets/newImages/castelnuts.jpg"
import castelnutdim from "../../../../assets/newImages/castledim.webp"
import RelatedProducts from '../../../ProductComponent/RelatedProducts'
const CastleNuts = () => {
  return (
    <Layout>
    <div>
      <div className="text-fontDefault p-4 prod">
        <div className="customContainer text-fontDefault p-6 shadow-md rounded-md flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:pr-6">
            <h1 className="text-2xl text-center md:text-left font-bold mb-4">
            Castle Nuts
            </h1>
            <div className="lg:w-1/4 mt-8 lg:mt-0 sm:block md:hidden">
              <img
                src={castelnut}
                alt="Anchor Bolts"
                className="w-full h-auto mb-6 rounded shadow-lg"
              />
            </div>

            <div className="mb-6">
  <p className="mb-2">
    Castle nuts, also known as castellated nuts, have slots (notches) cut into one end. These slots are used to secure the nut with a cotter pin, preventing it from turning and loosening. They are commonly used in applications where the nut must be secured after tightening.
  </p>
  <ul className="list-disc list-inside">
    <li>Slots for securing with a cotter pin</li>
    <li>Prevents rotation and loosening</li>
    <li>Used in automotive and machinery applications</li>
    <li>Ideal for applications requiring precise locking</li>
    <li>Commonly used with bolts that have a drilled hole</li>
  </ul>
</div>


            <h3 className="text-xl font-semibold mb-4">
              Anchor Bolt Specification Table
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
                      Specification for anchor bolts, steel, 36, 55, and
                      105-ksi yield strength
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="px-4 py-2 border">AISC 360</td>
                    <td className="px-4 py-2 border">
                      Specification for structural steel buildings, including
                      anchor bolt requirements
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="px-4 py-2 border">ACI 318</td>
                    <td className="px-4 py-2 border">
                      Building code requirements for structural concrete,
                      detailing anchor bolt usage
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


            <h2 className="text-2xl font-bold mb-4">
              Castle Nuts Dimensions Chart:
            </h2>

            <img src={castelnutdim} alt="" />
            <div className="overflow-x-auto">
            <table className="min-w-full  border text-center">
            <thead className="bg-primary text-white">
<tr>
<td className="py-2 px-4 border " colSpan={6}>Metric Technical Data</td>
</tr>
<tr>
<td className="py-2 px-4 border ">Thread Diameter</td>
<td className="py-2 px-4 border ">S (mm)</td>
<td className="py-2 px-4 border ">E (mm)</td>
<td className="py-2 px-4 border ">M max. (mm)</td>
<td className="py-2 px-4 border ">W max. (mm)</td>
<td className="py-2 px-4 border ">N min. (mm)</td>
</tr>
</thead>
</table>

<table className="min-w-full  border text-center">
<tbody>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M4</span></td>
<td className="py-2 px-4 border ">7</td>
<td className="py-2 px-4 border ">7.74</td>
<td className="py-2 px-4 border ">5</td>
<td className="py-2 px-4 border ">3.2</td>
<td className="py-2 px-4 border ">1.2</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M5</span></td>
<td className="py-2 px-4 border ">8</td>
<td className="py-2 px-4 border ">8.87</td>
<td className="py-2 px-4 border ">6</td>
<td className="py-2 px-4 border ">4</td>
<td className="py-2 px-4 border ">1.4</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M6</span></td>
<td className="py-2 px-4 border ">10</td>
<td className="py-2 px-4 border ">11.05</td>
<td className="py-2 px-4 border ">7.5</td>
<td className="py-2 px-4 border ">5</td>
<td className="py-2 px-4 border ">2</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M7</span></td>
<td className="py-2 px-4 border "> 11</td>
<td className="py-2 px-4 border ">12.12</td>
<td className="py-2 px-4 border ">8</td>
<td className="py-2 px-4 border ">5.5</td>
<td className="py-2 px-4 border ">2</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M8</span></td>
<td className="py-2 px-4 border ">13</td>
<td className="py-2 px-4 border ">14.38</td>
<td className="py-2 px-4 border ">9.5</td>
<td className="py-2 px-4 border ">6.5</td>
<td className="py-2 px-4 border ">2.5</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M10</span></td>
<td className="py-2 px-4 border ">17</td>
<td className="py-2 px-4 border ">18.9</td>
<td className="py-2 px-4 border ">12</td>
<td className="py-2 px-4 border ">8</td>
<td className="py-2 px-4 border ">2.8</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M12</span></td>
<td className="py-2 px-4 border ">19</td>
<td className="py-2 px-4 border ">21.1</td>
<td className="py-2 px-4 border ">15</td>
<td className="py-2 px-4 border ">10</td>
<td className="py-2 px-4 border ">3.5</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M14</span></td>
<td className="py-2 px-4 border ">22</td>
<td className="py-2 px-4 border ">24.49</td>
<td className="py-2 px-4 border ">16</td>
<td className="py-2 px-4 border ">11</td>
<td className="py-2 px-4 border ">3.5</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M16</span></td>
<td className="py-2 px-4 border ">24</td>
<td className="py-2 px-4 border ">26.75</td>
<td className="py-2 px-4 border ">19</td>
<td className="py-2 px-4 border ">13</td>
<td className="py-2 px-4 border ">4.5</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M18</span></td>
<td className="py-2 px-4 border ">27</td>
<td className="py-2 px-4 border ">29.56</td>
<td className="py-2 px-4 border ">21</td>
<td className="py-2 px-4 border ">15</td>
<td className="py-2 px-4 border ">4.5</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M20</span></td>
<td className="py-2 px-4 border ">30</td>
<td className="py-2 px-4 border ">32.95</td>
<td className="py-2 px-4 border ">22</td>
<td className="py-2 px-4 border ">16</td>
<td className="py-2 px-4 border ">4.5</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M22</span></td>
<td className="py-2 px-4 border ">32</td>
<td className="py-2 px-4 border ">35.03</td>
<td className="py-2 px-4 border ">26</td>
<td className="py-2 px-4 border ">18</td>
<td className="py-2 px-4 border ">5.5</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M24</span></td>
<td className="py-2 px-4 border ">36</td>
<td className="py-2 px-4 border ">39.55</td>
<td className="py-2 px-4 border ">27</td>
<td className="py-2 px-4 border ">19</td>
<td className="py-2 px-4 border ">5.5</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M27</span></td>
<td className="py-2 px-4 border ">41</td>
<td className="py-2 px-4 border ">45.2</td>
<td className="py-2 px-4 border ">30</td>
<td className="py-2 px-4 border ">22</td>
<td className="py-2 px-4 border ">5.5</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M30</span></td>
<td className="py-2 px-4 border ">46</td>
<td className="py-2 px-4 border ">50.85</td>
<td className="py-2 px-4 border ">33</td>
<td className="py-2 px-4 border ">24</td>
<td className="py-2 px-4 border ">7</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M33</span></td>
<td className="py-2 px-4 border ">50</td>
<td className="py-2 px-4 border ">55.37</td>
<td className="py-2 px-4 border ">35</td>
<td className="py-2 px-4 border ">26</td>
<td className="py-2 px-4 border ">7</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M36</span></td>
<td className="py-2 px-4 border ">55</td>
<td className="py-2 px-4 border ">60.79</td>
<td className="py-2 px-4 border ">38</td>
<td className="py-2 px-4 border ">29</td>
<td className="py-2 px-4 border ">7</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M39</span></td>
<td className="py-2 px-4 border ">60</td>
<td className="py-2 px-4 border ">66.44</td>
<td className="py-2 px-4 border ">40</td>
<td className="py-2 px-4 border ">31</td>
<td className="py-2 px-4 border ">7</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M42</span></td>
<td className="py-2 px-4 border ">65</td>
<td className="py-2 px-4 border ">71.3</td>
<td className="py-2 px-4 border ">46</td>
<td className="py-2 px-4 border ">34</td>
<td className="py-2 px-4 border ">9</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M45</span></td>
<td className="py-2 px-4 border ">70</td>
<td className="py-2 px-4 border ">78.26</td>
<td className="py-2 px-4 border ">48</td>
<td className="py-2 px-4 border ">36</td>
<td className="py-2 px-4 border ">9</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M48</span></td>
<td className="py-2 px-4 border ">75</td>
<td className="py-2 px-4 border ">82.6</td>
<td className="py-2 px-4 border ">50</td>
<td className="py-2 px-4 border ">38</td>
<td className="py-2 px-4 border ">9</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M52</span></td>
<td className="py-2 px-4 border ">80</td>
<td className="py-2 px-4 border ">88.25</td>
<td className="py-2 px-4 border ">54</td>
<td className="py-2 px-4 border ">42</td>
<td className="py-2 px-4 border ">9</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M56</span></td>
<td className="py-2 px-4 border ">85</td>
<td className="py-2 px-4 border ">95.07</td>
<td className="py-2 px-4 border ">57</td>
<td className="py-2 px-4 border ">45</td>
<td className="py-2 px-4 border ">9</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M58</span></td>
<td className="py-2 px-4 border ">90</td>
<td className="py-2 px-4 border ">100.72</td>
<td className="py-2 px-4 border ">63</td>
<td className="py-2 px-4 border ">48</td>
<td className="py-2 px-4 border ">11</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M60</span></td>
<td className="py-2 px-4 border ">90</td>
<td className="py-2 px-4 border ">100.72</td>
<td className="py-2 px-4 border ">63</td>
<td className="py-2 px-4 border ">48</td>
<td className="py-2 px-4 border ">11</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M64</span></td>
<td className="py-2 px-4 border ">95</td>
<td className="py-2 px-4 border ">106.37</td>
<td className="py-2 px-4 border ">66</td>
<td className="py-2 px-4 border ">51</td>
<td className="py-2 px-4 border ">11</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M68</span></td>
<td className="py-2 px-4 border ">100</td>
<td className="py-2 px-4 border ">112.02</td>
<td className="py-2 px-4 border ">69</td>
<td className="py-2 px-4 border ">54</td>
<td className="py-2 px-4 border ">11</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M72</span></td>
<td className="py-2 px-4 border ">105</td>
<td className="py-2 px-4 border ">117.67</td>
<td className="py-2 px-4 border ">73</td>
<td className="py-2 px-4 border ">58</td>
<td className="py-2 px-4 border ">11</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M76</span></td>
<td className="py-2 px-4 border ">110</td>
<td className="py-2 px-4 border ">123.32</td>
<td className="py-2 px-4 border ">76</td>
<td className="py-2 px-4 border ">61</td>
<td className="py-2 px-4 border ">11</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M80</span></td>
<td className="py-2 px-4 border ">115</td>
<td className="py-2 px-4 border ">128.97</td>
<td className="py-2 px-4 border ">79</td>
<td className="py-2 px-4 border ">64</td>
<td className="py-2 px-4 border ">11</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M85</span></td>
<td className="py-2 px-4 border ">120</td>
<td className="py-2 px-4 border ">134.62</td>
<td className="py-2 px-4 border ">88</td>
<td className="py-2 px-4 border ">68</td>
<td className="py-2 px-4 border ">14</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M90</span></td>
<td className="py-2 px-4 border ">130</td>
<td className="py-2 px-4 border ">145.77</td>
<td className="py-2 px-4 border ">92</td>
<td className="py-2 px-4 border ">72</td>
<td className="py-2 px-4 border ">14</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M95</span></td>
<td className="py-2 px-4 border ">135</td>
<td className="py-2 px-4 border ">151.42</td>
<td className="py-2 px-4 border ">96</td>
<td className="py-2 px-4 border ">76</td>
<td className="py-2 px-4 border ">14</td>
</tr>
<tr>
<td className="py-2 px-4 border  bg-primary text-white"><span>M100</span></td>
<td className="py-2 px-4 border ">145</td>
<td className="py-2 px-4 border ">162.72</td>
<td className="py-2 px-4 border ">100</td>
<td className="py-2 px-4 border ">80</td>
<td className="py-2 px-4 border ">14</td>
</tr>
</tbody>
</table>
            </div>
            <br />

            <div className="mb-8">
  <h3 className="text-xl font-semibold mb-4">
    Flange Nut Applications:
  </h3>
  <ul className="list-disc list-inside">
    <li>Automotive assemblies to reduce vibration and distribute load</li>
    <li>Construction projects requiring secure and even fastening</li>
    <li>Machinery and equipment where a washer is not required</li>
    <li>Heavy-duty industrial applications</li>
    <li>Electrical and electronic enclosures</li>
    <li>Applications in marine and offshore environments</li>
  </ul>
</div>

          </div>
          <div className="lg:w-1/4 mt-8 lg:mt-0 hidden sm:block">
            <img
              src={castelnut}
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
  )
}

export default CastleNuts