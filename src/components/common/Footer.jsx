import React from "react";

import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import INDIA from "../../assets/images/makeinindia.png";
import iso from "../../assets/images/iso.png";

import { categories } from "../common/navbarlinks.js";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    

      <footer className="  text-fontPrimary footerbg  ">
        <div className=" top-0 left-0 w-full overflow-hidden">
          <div className="grid lg:grid-cols-4 lg:gap-20 gap-2  sm:grid-cols-1 md:p-10 p-4">
            <div className="flex flex-col gap-5">
              <Link to={"/"} className="inline-flex items-center">
                <img src={logo} alt="Logo" width={50} />
                <span className="text-tertiary text-xl font-bold fade-up uppercase">
                  Hariom Steel
                </span>
              </Link>

              <address>
                GROUND FLOOR, SHED NO. 5, SHREE RAJESHWAR IND. ESTATE 2,
                CHAKUDIYA MAHADEV MANDIR ROAD, Rakhial, Ahmedabad, Ahmedabad,
                Gujarat, 380023
              </address>
              <div className="flex gap-10">
                <img src={INDIA} width={150} alt="" />
                <img src={iso} width={120} alt="" />
              </div>
            </div>

            <div>
              <li className="text-[22px] list-none font-semibold  text-fontPrimary py-2  uppercase ">
                Quick Links
              </li>

              {categories.map((product) => (
                <li
                  key={product?._id}
                  className="md:my-4  my-2 list-none hover:text-tertiary w-fit"
                >
                  <Link to={product?.page}>{product?.title}</Link>
                </li>
              ))}
            </div>

            <div>
              <li className="text-[22px] list-none font-semibold  text-fontPrimary py-2 uppercase">
                Our Products
              </li>

              {categories?.map((cat1) =>
                cat1?.sub_category?.map((subcat) => (
                  <li
                    key={subcat._id}
                    className="md:my-4  my-2 list-none hover:text-tertiary  w-fit"
                  >
                    <Link to={subcat?.page}>{subcat?.title}</Link>
                  </li>
                ))
              )}
              <li className="md:my-4  my-2 list-none"></li>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="text-[22px] font-semibold  text-fontPrimary py-2 uppercase">
                Contact
              </h2>
              <p className="text-[16px] md:my-4">
                Mail: &nbsp;
                <a
                  href="mailto:sales@hariommsteel.com"
                  className="hover:text-tertiary  w-fit"
                >
                  sales@hariomsteel.com
                </a>
              </p>
              <p className="text-[16px] md:my-4">
                Mobile: &nbsp;
                <a
                  href="tel:+919082205826"
                  className="hover:text-tertiary  w-fit"
                >
                  +91 9082205826
                </a>
              </p>
            </div>
          </div>
          <hr />

          <div className="md:flex justify-between h-24 customContainer items-center block ">
            <h6 className="text-center">&copy; <Link to={"/"} className="hover:text-tertiary"> Hariom Steel</Link> {year}</h6>

            <h6 className="text-center flex flex-wrap items-center justify-center mt-2 md:mt-0">
              Powered By -&nbsp;
              <a href="https://www.bytefaze.com/" className="hover:text-tertiary">ByteFaze Web Solutions </a> &nbsp;| &nbsp;
              <a href="https://www.bytefaze.com/website-designing/" className="hover:text-tertiary"> Website Designing Company</a>
             
            </h6>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
