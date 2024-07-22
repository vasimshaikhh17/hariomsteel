import React from "react";
import Layout from "../common/Layout";
import ImageSlider from "./ImageSlider";
import ProjectCounter from "./ProjectCounter";
import AboutCompany from "./AboutCompany";
import ProductCards from "./ProductCards";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <Layout>
      <ImageSlider />
      <AboutCompany />
      <ProjectCounter />
      <ProductCards />
      <Testimonials />
    </Layout>
  );
};

export default Home;
