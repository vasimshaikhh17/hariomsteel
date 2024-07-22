import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
