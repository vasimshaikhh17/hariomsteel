import React from "react";
import Layout from "../common/Layout";
import ImageSlider from "./ImageSlider";
import ProjectCounter from "./ProjectCounter";
import AboutCompany from "./AboutCompany";
import ProductCards from "./ProductCards";
import Testimonials from "./Testimonials";
import Material from "./Material";


const Home = () => {
  return (
    <Layout>
      <ImageSlider />
      <AboutCompany />
      <ProjectCounter />
      <Material/>
      <ProductCards />
      <Testimonials />

    </Layout>
  );
};

export default Home;



